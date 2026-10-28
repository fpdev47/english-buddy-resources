/*
  Sesión de cada estudiante y sincronización con Supabase (ver setup/supabase.sql).
  El sitio solo llama a dos funciones de la base de datos, que verifican la clave del estudiante.
*/
(function () {
  const cfg = window.YEB_CLOUD_CONFIG || {};
  const enabled = !!(cfg.url && cfg.anonKey);
  const SESSION = "yeb-student";

  let student = null;
  try { student = JSON.parse(localStorage.getItem(SESSION) || "null"); } catch (e) {}

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

  const normalizeKey = (k) => String(k).trim().toLowerCase();

  window.YEB_CLOUD = {
    enabled,
    get student() { return enabled ? student : null; },

    // Returns { id, name, progress, updated_at } or null when the key is wrong
    async login(key) {
      const res = await rpc("yeb_login", { p_key: normalizeKey(key) });
      if (!res) return null;
      student = { key: normalizeKey(key), id: res.id, name: res.name };
      try {
        localStorage.setItem(SESSION, JSON.stringify(student));
        localStorage.setItem(`yeb-state:${res.id}`, JSON.stringify({ ...(res.progress || {}), syncedAt: res.updated_at, dirty: false }));
      } catch (e) {}
      return res;
    },

    // Latest progress from the cloud for the logged-in student (null = key no longer valid)
    pull() { return rpc("yeb_login", { p_key: student.key }); },

    // Saves progress; returns the server time of the save (null = key no longer valid)
    push(progress, keepalive) { return rpc("yeb_save", { p_key: student.key, p_progress: progress }, keepalive); },

    logout() {
      try {
        if (student) localStorage.removeItem(`yeb-state:${student.id}`);
        localStorage.removeItem(SESSION);
      } catch (e) {}
      student = null;
      location.reload();
    }
  };
})();
