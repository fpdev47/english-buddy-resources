/*
  Página de inicio de sesión: cada estudiante entra con su usuario y contraseña (assets/accounts.js).
  Es una barrera del lado del navegador (evita visitas casuales y separa el progreso de cada uno),
  no seguridad real.
*/
(function () {
  const CLOUD = window.YEB_CLOUD;
  const root = document.documentElement;
  const t = (k) => (window.YEB_I18N ? window.YEB_I18N.t(k) : k);

  const form = document.getElementById("gate-form");
  const user = document.getElementById("gate-user");
  const pass = document.getElementById("gate-key");
  const error = document.getElementById("gate-error");
  const button = form.querySelector(".gate-btn");
  const eye = form.querySelector(".pw-toggle");
  let errorKey = "";
  // A page cached from before usernames existed: reload it once to get the new login page
  if (!user || !eye) {
    if (!sessionStorage.getItem("yeb-reloaded")) { sessionStorage.setItem("yeb-reloaded", "1"); location.reload(); }
    return;
  }

  // Show / hide the password
  function syncEye() {
    const shown = pass.type === "text";
    eye.setAttribute("aria-pressed", shown);
    eye.setAttribute("aria-label", t(shown ? "hidePw" : "showPw"));
  }
  eye.addEventListener("click", () => { pass.type = pass.type === "password" ? "text" : "password"; syncEye(); pass.focus(); });
  syncEye();

  // «Forgot your password?»: WhatsApp to the teacher, with the username if it's already typed
  const wa = document.getElementById("wa-link");
  const phone = window.YEB_TEACHER_WHATSAPP;
  if (!phone) wa.closest(".forgot").hidden = true;
  function syncWa() {
    const u = user.value.trim();
    wa.href = `https://wa.me/${phone}?text=${encodeURIComponent(t("forgotMsg") + (u ? ` ${t("forgotUser")}: ${u}` : ""))}`;
  }
  user.addEventListener("input", syncWa);
  document.addEventListener("yeb:lang", syncWa);
  syncWa();

  if (root.classList.contains("unlocked")) return;
  if (!user.value) setTimeout(() => user.focus(), 0);

  function showError(key, field) {
    errorKey = key;
    [user, pass].forEach((f) => f.removeAttribute("aria-invalid"));
    field.setAttribute("aria-invalid", "true");
    error.textContent = t(key);
    field.select();
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!user.value.trim()) return user.focus();
    if (!pass.value.trim()) return pass.focus();
    button.disabled = true;
    try {
      // Opens with this student's progress, always on the home screen («What do you want to practice today?»)
      if (await CLOUD.login(user.value, pass.value)) { location.replace(location.pathname + location.search); return; }
      showError("gateError", pass);
    } catch (err) {
      showError("gateOffline", pass);
    }
    button.disabled = false;
  });
  [user, pass].forEach((f) => f.addEventListener("input", () => {
    [user, pass].forEach((x) => x.removeAttribute("aria-invalid"));
    error.textContent = ""; errorKey = "";
  }));
  document.addEventListener("yeb:lang", () => { if (errorKey) error.textContent = t(errorKey); syncEye(); });
})();
