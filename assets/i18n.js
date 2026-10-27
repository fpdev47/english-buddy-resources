/*
  Idioma de la interfaz (ES / EN). Los textos fijos de la página usan data-i18n="clave"
  (o data-i18n-html, data-i18n-placeholder, data-i18n-aria). El contenido (temas, canales,
  ejercicios) se traduce con data/en.js.
*/
(function () {
  const UI = {
    es: {
      brandTag: "Recursos",
      badge: "Espacio del estudiante",
      title: "¿Qué vas a practicar <span class=\"accent\">hoy</span>?",
      lead: "Escucha inglés real en YouTube y Spotify, o practica con ejercicios que se corrigen al instante.",
      modesLabel: "Qué quieres hacer",
      listen: "Escuchar",
      practice: "Practicar",
      topicsListen: "Elige un tema",
      topicsPractice: "Elige un tema para practicar",
      topicsLabel: "Temas",
      channel: "canal", channels: "canales", exercises: "ejercicios",
      saved: "Mis guardados", savedText: "Los canales que marcaste con el corazón.",
      save: "Guardar", unsave: "Quitar de guardados",
      accents: { US: "Acento americano", UK: "Acento británico", CA: "Acento canadiense", Mix: "Varios acentos" },
      formats: { podcast: "Podcast", video: "Videos" },
      startVideo: "Empieza con este video", play: "Reproducir",
      practiceIntro: "Responde y verás al instante si es correcto, con una explicación breve.",
      reset: "Reiniciar", resetConfirm: "¿Borrar tus respuestas de este tema y empezar de nuevo?",
      score: (c, d, t) => `<strong>${c}</strong> correctas · ${d} de ${t} respondidas`,
      correct: "✓ ¡Correcto!", answerIs: "✗ La respuesta es:",
      typeHere: "Escribe en inglés…", yourAnswer: "Tu respuesta", check: "Comprobar",
      soon: "Muy pronto.", exercisesTitle: "Ejercicios",
      footer: "Your English Buddy · Recursos para estudiantes",
      footerSmall: "Los podcasts y videos pertenecen a sus creadores.",
      toDark: "Cambiar a modo nocturno", toLight: "Cambiar a modo día", darkTitle: "Modo nocturno", lightTitle: "Modo día",
      langLabel: "Idioma de las instrucciones",
      gateTitle: "Espacio del estudiante",
      gateText: "Escribe la clave de acceso que te dio tu profesor.",
      gateLabel: "Clave de acceso", gatePlaceholder: "Clave de acceso", gateButton: "Entrar",
      gateError: "Clave incorrecta. Inténtalo de nuevo."
    },
    en: {
      brandTag: "Resources",
      badge: "Student area",
      title: "What will you practice <span class=\"accent\">today</span>?",
      lead: "Listen to real English on YouTube and Spotify, or practice with exercises that are corrected instantly.",
      modesLabel: "What do you want to do",
      listen: "Listen",
      practice: "Practice",
      topicsListen: "Choose a topic",
      topicsPractice: "Choose a topic to practice",
      topicsLabel: "Topics",
      channel: "channel", channels: "channels", exercises: "exercises",
      saved: "My saved", savedText: "The channels you saved with the heart.",
      save: "Save", unsave: "Remove from saved",
      accents: { US: "American accent", UK: "British accent", CA: "Canadian accent", Mix: "Various accents" },
      formats: { podcast: "Podcast", video: "Videos" },
      startVideo: "Start with this video", play: "Play",
      practiceIntro: "Answer and you'll see right away if you're right, with a short explanation.",
      reset: "Reset", resetConfirm: "Delete your answers for this topic and start again?",
      score: (c, d, t) => `<strong>${c}</strong> correct · ${d} of ${t} answered`,
      correct: "✓ Correct!", answerIs: "✗ The answer is:",
      typeHere: "Type in English…", yourAnswer: "Your answer", check: "Check",
      soon: "Coming soon.", exercisesTitle: "Exercises",
      footer: "Your English Buddy · Student resources",
      footerSmall: "The podcasts and videos belong to their creators.",
      toDark: "Switch to night mode", toLight: "Switch to day mode", darkTitle: "Night mode", lightTitle: "Day mode",
      langLabel: "Language of the instructions",
      gateTitle: "Student area",
      gateText: "Enter the access key your teacher gave you.",
      gateLabel: "Access key", gatePlaceholder: "Access key", gateButton: "Enter",
      gateError: "Wrong key. Please try again."
    }
  };

  let lang = "es";
  try { if (localStorage.getItem("yeb-lang") === "en") lang = "en"; } catch (e) {}

  const t = (key) => (UI[lang][key] !== undefined ? UI[lang][key] : UI.es[key]);

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.querySelectorAll(".lang-toggle").forEach((group) => {
      group.setAttribute("aria-label", t("langLabel"));
      group.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    });
  }

  function set(next) {
    if (next === lang || !UI[next]) return;
    lang = next;
    try { localStorage.setItem("yeb-lang", lang); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("yeb:lang", { detail: lang }));
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest(".lang-toggle [data-lang]");
    if (b) set(b.dataset.lang);
  });

  window.YEB_I18N = { t, set, apply, get lang() { return lang; } };
  apply();
})();
