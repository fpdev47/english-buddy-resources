/*
  Clave de acceso simple para estudiantes.
  Es una barrera del lado del navegador: evita visitas casuales, pero no es seguridad real.
  Para cambiar la clave, calcula su SHA-256 (por ejemplo: printf '%s' 'nuevaclave' | shasum -a 256)
  y reemplaza KEY_HASH.
*/
(function () {
  const KEY_HASH = "226bdc5e40cd614c09a7352f2133a1082b3b535ba3cd67c51cc962025d429075";
  const root = document.documentElement;
  if (root.classList.contains("unlocked")) return;

  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-key");
  const error = document.getElementById("gate-error");

  async function sha256(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if ((await sha256(input.value.trim().toLowerCase())) === KEY_HASH) {
      try { localStorage.setItem("yeb-access", "1"); } catch (err) {}
      root.classList.add("unlocked");
      window.scrollTo(0, 0);
    } else {
      input.setAttribute("aria-invalid", "true");
      error.textContent = window.YEB_I18N ? window.YEB_I18N.t("gateError") : "Clave incorrecta. Inténtalo de nuevo.";
      input.select();
    }
  });
  input.addEventListener("input", () => { input.removeAttribute("aria-invalid"); error.textContent = ""; });
  document.addEventListener("yeb:lang", () => { if (error.textContent) error.textContent = window.YEB_I18N.t("gateError"); });
})();
