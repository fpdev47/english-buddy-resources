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
    btn.setAttribute("aria-label", dark ? "Cambiar a modo día" : "Cambiar a modo nocturno");
    btn.title = dark ? "Modo día" : "Modo nocturno";
    if (meta) meta.content = dark ? "#0b1d20" : "#ffffff";
  }

  btn.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("yeb-theme", root.dataset.theme); } catch (e) {}
    sync();
  });
  media.addEventListener("change", sync);
  sync();
})();
