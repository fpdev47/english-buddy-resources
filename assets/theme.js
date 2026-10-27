/* Modo día / noche: sigue al dispositivo hasta que el estudiante elige uno. */
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const meta = document.querySelector('meta[name="theme-color"]');

  const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : media.matches;

  function sync() {
    const dark = isDark();
    root.classList.toggle("is-dark", dark);
    const t = window.YEB_I18N ? window.YEB_I18N.t : (k) => ({ toLight: "Cambiar a modo día", toDark: "Cambiar a modo nocturno", lightTitle: "Modo día", darkTitle: "Modo nocturno" })[k];
    btn.setAttribute("aria-label", dark ? t("toLight") : t("toDark"));
    btn.title = dark ? t("lightTitle") : t("darkTitle");
    if (meta) meta.content = dark ? "#0b1d20" : "#ffffff";
  }

  btn.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("yeb-theme", root.dataset.theme); } catch (e) {}
    sync();
  });
  media.addEventListener("change", sync);
  document.addEventListener("yeb:lang", sync);
  sync();
})();
