/*
  Pantalla de acceso.
  - Con Supabase configurado (assets/config.js): cada estudiante entra con su clave personal
    y su progreso se guarda en la nube (ver assets/cloud.js y setup/supabase.sql).
  - Sin Supabase: una clave general para todos. Es una barrera del lado del navegador
    (evita visitas casuales, pero no es seguridad real). Para cambiarla, calcula su SHA-256
    (por ejemplo: printf '%s' 'nuevaclave' | shasum -a 256) y reemplaza KEY_HASH.
*/
(function () {
  const KEY_HASH = "226bdc5e40cd614c09a7352f2133a1082b3b535ba3cd67c51cc962025d429075";
  const CLOUD = window.YEB_CLOUD;
  const root = document.documentElement;
  const t = (k) => (window.YEB_I18N ? window.YEB_I18N.t(k) : k);

  if (CLOUD && CLOUD.enabled) {
    root.classList.add("cloud");
    const p = document.getElementById("gate-text");
    if (p) { p.dataset.i18n = "gateTextPersonal"; p.textContent = t("gateTextPersonal"); }
  }
  if (root.classList.contains("unlocked")) return;

  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-key");
  const error = document.getElementById("gate-error");
  const button = form.querySelector(".gate-btn");
  let errorKey = "";

  function showError(key) {
    errorKey = key;
    input.setAttribute("aria-invalid", "true");
    error.textContent = t(key);
    input.select();
  }

  async function sha256(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const key = input.value.trim().toLowerCase();
    if (!key) return input.focus();

    if (CLOUD && CLOUD.enabled) {
      button.disabled = true;
      try {
        const res = await CLOUD.login(key);
        if (res) { location.reload(); return; }   // the app starts with this student's progress
        showError("gateError");
      } catch (err) {
        showError("gateOffline");
      }
      button.disabled = false;
      return;
    }

    if ((await sha256(key)) === KEY_HASH) {
      try { localStorage.setItem("yeb-access", "1"); } catch (err) {}
      root.classList.add("unlocked");
      window.scrollTo(0, 0);
    } else {
      showError("gateError");
    }
  });
  input.addEventListener("input", () => { input.removeAttribute("aria-invalid"); error.textContent = ""; errorKey = ""; });
  document.addEventListener("yeb:lang", () => { if (errorKey) error.textContent = t(errorKey); });
})();
