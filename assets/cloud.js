/*
  Sesión de cada estudiante (usuario + contraseña de assets/accounts.js).
  Cada estudiante guarda su progreso aparte, en «yeb-state:<usuario>».
  Con Supabase configurado (assets/config.js), el progreso además se sincroniza en la nube;
  el sitio solo llama a dos funciones de la base de datos, que verifican la contraseña (ver setup/supabase.sql).
*/
(function () {
  const cfg = window.YEB_CLOUD_CONFIG || {};
  const enabled = !!(cfg.url && cfg.anonKey);
  const ACCOUNTS = window.YEB_ACCOUNTS || [];
  const SESSION = "yeb-student";
  const root = document.documentElement;

  // "Jesús", " MARY " and "mary" are the same user
  const normalizeUser = (u) => String(u).normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase().replace(/\s+/g, " ");
  const normalizeKey = (k) => String(k).trim().toLowerCase();
  const findAccount = (u) => {
    const n = normalizeUser(u);
    return ACCOUNTS.find((a) => normalizeUser(a.user) === n || normalizeUser(a.name) === n);
  };

  async function sha256(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  let student = null;
  try { student = JSON.parse(localStorage.getItem(SESSION) || "null"); } catch (e) {}
  // A session for an account that no longer exists (or from the old shared key) sends you back to the login page
  if (student && !ACCOUNTS.some((a) => a.user === student.id)) {
    student = null;
    try { localStorage.removeItem(SESSION); } catch (e) {}
    root.classList.remove("unlocked");
  }
  try { localStorage.removeItem("yeb-access"); } catch (e) {}   // the old shared key no longer opens the site

  async function rpc(fn, body, keepalive) {
    const res = await fetch(`${cfg.url.replace(/\/$/, "")}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: { apikey: cfg.anonKey, Authorization: `Bearer ${cfg.anonKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: !!keepalive
    });
    if (!res.ok) throw new Error(`Supabase ${res.status}`);
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }

  window.YEB_CLOUD = {
    enabled,
    get student() { return student; },

    // Returns the student or null when the username or password is wrong (throws when offline, with Supabase)
    async login(user, password) {
      const acc = findAccount(user);
      const key = normalizeKey(password);
      if (!acc || (await sha256(key)) !== acc.hash) return null;
      const store = `yeb-state:${acc.user}`;
      let remote = null;
      if (enabled) {
        remote = await rpc("yeb_login", { p_key: key });
        if (!remote) return null;
      }
      student = { id: acc.user, name: acc.name, ...(enabled ? { key } : {}) };
      try {
        // Progress from before personal logins (shared on this browser) goes to the first student who logs in here
        if (!localStorage.getItem(store) && localStorage.getItem("yeb-state")) {
          localStorage.setItem(store, localStorage.getItem("yeb-state"));
          localStorage.removeItem("yeb-state");
        }
        if (remote && remote.progress && Object.keys(remote.progress).length) {
          localStorage.setItem(store, JSON.stringify({ ...remote.progress, syncedAt: remote.updated_at, dirty: false }));
        } else if (remote && localStorage.getItem(store)) {
          // Nothing in the cloud yet: upload what this browser has
          localStorage.setItem(store, JSON.stringify({ ...JSON.parse(localStorage.getItem(store)), dirty: true }));
        }
        localStorage.setItem(SESSION, JSON.stringify(student));
      } catch (e) {}
      return student;
    },

    // Latest progress from the cloud for the logged-in student (null = password no longer valid)
    pull() { return rpc("yeb_login", { p_key: student.key }); },

    // Saves progress; returns the server time of the save (null = password no longer valid)
    push(progress, keepalive) { return rpc("yeb_save", { p_key: student.key, p_progress: progress }, keepalive); },

    // The student's progress stays saved on this browser for the next time they log in
    logout() {
      try { localStorage.removeItem(SESSION); } catch (e) {}
      student = null;
      location.reload();
    }
  };
})();
