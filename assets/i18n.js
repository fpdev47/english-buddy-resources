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
      title: "¿Qué quieres practicar <span class=\"accent\">hoy</span>?",
      lead: "Escucha inglés real en YouTube y Spotify, o practica con ejercicios que se corrigen al instante.",
      modesLabel: "Qué quieres hacer",
      listen: "Escuchar",
      reading: "Lectura",
      topicsRead: "Elige una historia",
      tiers: { basic: "Básico", intermediate: "Intermedio", advanced: "Avanzado" },
      minRead: (n) => `${n} min de lectura`,
      listenStory: "Escuchar la historia", stopStory: "Detener",
      fullVideo: "Discurso completo", summary: "Resumen para estudiantes",
      fullText: "Texto completo", summaryShort: "Resumen",
      vocabTitle: "Vocabulario útil", vocabHint: "Cada palabra trae un ejemplo del texto. Toca la tarjeta para encontrarla en la lectura.",
      glossHint: "Toca (o pasa el cursor sobre) cualquier palabra para ver su traducción en este contexto.", inPhrase: "En esta expresión", keyWord: "Vocabulario clave", listenWord: "Escuchar la palabra", findInText: "Buscar en el texto",
      comprehension: "Comprensión", comprehensionInstr: "Responde las preguntas sobre la historia.",
      vocabInContext: "Vocabulario en contexto", vocabInstr: "Lee la frase y elige el significado de la expresión resaltada.",
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
      progressTab: "Progreso", progressTitle: "Tu progreso", progressIntro: "Tu constancia, el tiempo que le dedicas y lo que te conviene repasar. Se guarda con tu usuario.",
      daysInARow: (n) => (n === 1 ? "día seguido estudiando" : "días seguidos estudiando"), bestStreak: (n) => `Tu mejor racha: ${n} ${n === 1 ? "día" : "días"}.`, streakDone: "Hoy ya estudiaste.", streakKeep: "Estudia hoy para no perder la racha.", streakStart: "Responde un ejercicio hoy para empezar una racha.", thisWeek: "Esta semana", last7: "Últimos 7 días",
      streakDays: (n) => `Racha: ${n} ${n === 1 ? "día" : "días"} seguidos`,
      timeTitle: "Tiempo de estudio", timeHelp: "Solo cuenta el tiempo en que estás practicando en la página.", sessionTime: "Esta sesión", todayTime: "Hoy", totalTime: "En total", last14: "Minutos por día, últimas dos semanas", chartNote: (h, a) => `Hoy: ${h} min${a ? ` · Promedio de los días que estudiaste: ${a} min` : ""}. Cada barra es un día; la más alta es tu mejor día.`,
      answersTitle: "Tus respuestas", answersSentence: (n, t, c) => `Has respondido <b>${n}</b> ${n === 1 ? "pregunta" : "preguntas"} en <b>${t}</b> ${t === 1 ? "tema" : "temas"}${c ? ` y completaste <b>${c}</b>` : ""}.`,
      answersChart: (a, b, c) => `${a} % a la primera, ${b} % al segundo intento, ${c} % incorrectas`, firstTryLabel: "Bien a la primera", secondTryLabel: "Bien al segundo intento", wrongLabel: "Incorrectas", noAnswersYet: "Todavía no hay respuestas. Empieza por cualquier tema de Practicar.",
      improveTitle: "Dónde mejorar", improveHelp: "Secciones en las que aciertas menos del 80 %. Repásalas primero.", improveNone: "Ninguna sección baja del 80 % de aciertos. ¡Vas muy bien!", rightOf: (a, b) => `${a} de ${b} bien`, answeredOf: (a, b) => `${a} de ${b} respondidas`, practiceIt: "Practicar",
      mistakesTitle: "Errores recientes", mistakesHelp: "Tus últimas respuestas incorrectas, y las que acertaste al segundo intento.", mistakesEmpty: "Todavía no tienes errores.", yourAnswerWas: "Respondiste", rightAnswer: "Correcta", firstTried: "Primero elegiste", thenRight: "Luego acertaste con", reviewIt: "Repasar",
      byTopic: "Avance por tema", byTopicHelp: "Toca un tema para seguir donde lo dejaste.", resetSection: "Reiniciar esta sección", resetShort: "Reiniciar", sectionCleared: "Sección reiniciada.",
      doAgain: "Repetir", tryAgain: "Intentar de nuevo", retryWrong: "Repetir errores", sections: "Secciones", allTopics: "Todos los temas", homePractice: (n) => `${n} temas de gramática y vocabulario, con corrección al instante.`, homeListen: (v, c) => `${v} videos de shadowing y ${c} canales y podcasts.`, homeRead: (n) => `${n} lecturas: historias, discursos y clásicos.`, homeProgress: "Tu racha, tu tiempo de estudio y lo que te conviene repasar.", homeContinue: (t, a, b) => `Continuar: ${t} · ${a}/${b}`, homeStreak: (n, time) => `Racha: ${n} ${n === 1 ? "día" : "días"} · ${time} en total`, libTitle: "Biblioteca de shadowing", libHelp: "Elige un video, escucha una frase, pausa y repítela en voz alta. Empieza con series o animación; los discursos son más difíciles.", libFilter: "Filtrar por tipo", libCats: { all: "Todos", series: "Series y películas", animacion: "Animación", famosos: "Famosos y entrevistas", discursos: "Discursos" }, libMore: (n, left) => `Ver ${n} más (quedan ${left})`, greetToday: "Hoy toca estudiar.", greetDone: "¡Bien hecho hoy!", topicsCount: (n) => `${n} temas · cambiar`, close: "Cerrar", fullPlaylists: "Listas completas en YouTube", videosCount: (n) => `${n} videos`, channelsTitle: "Canales y podcasts", startOver: "Empezar de nuevo", undo: "Deshacer",
      wrongCleared: "Borramos tus errores: inténtalo otra vez.", allCleared: "Borramos tus respuestas de este tema.",
      complete: (c, t) => `<strong>¡Tema completado!</strong> ${c} de ${t} correctas`,
      score: (c, d, t) => `<strong>${c}</strong> correctas · ${d} de ${t} respondidas`,
      correct: "✓ ¡Correcto!", answerIs: "✗ La respuesta es:", secondTry: "(al segundo intento)", notThis: (v) => `«${v}» no es la respuesta.`, tryOnceMore: "Piénsalo e inténtalo otra vez.",
      typeHere: "Escribe en inglés…", yourAnswer: "Tu respuesta", check: "Comprobar",
      soon: "Muy pronto.", exercisesTitle: "Ejercicios",
      footer: "Your English Buddy · Recursos para estudiantes",
      footerSmall: "Los podcasts y videos pertenecen a sus creadores.",
      toDark: "Cambiar a modo nocturno", toLight: "Cambiar a modo día", darkTitle: "Modo nocturno", lightTitle: "Modo día",
      langLabel: "Idioma de las instrucciones",
      gateTitle: "Iniciar sesión",
      gateText: "Entra con el usuario y la contraseña que te dio tu profesor.",
      gateUser: "Usuario", gateUserPh: "Ej.: mary", gateLabel: "Contraseña", gateButton: "Entrar",
      showPw: "Mostrar contraseña", hidePw: "Ocultar contraseña",
      gateError: "Usuario o contraseña incorrectos. Inténtalo de nuevo.",
      gateOffline: "No pudimos conectarnos. Revisa tu internet e inténtalo de nuevo.",
      forgot: "¿Olvidaste tu contraseña?", forgotText: "Pídele una nueva a tu profesor. No perderás tu progreso.",
      forgotWa: "Escribirle por WhatsApp", forgotMsg: "¡Hola! Olvidé mi contraseña de Your English Buddy.", forgotUser: "Mi usuario es",
      hi: (n) => `¡Hola, ${n}!`, logout: "Cerrar sesión"
    },
    en: {
      brandTag: "Resources",
      badge: "Student area",
      title: "What do you want to practice <span class=\"accent\">today</span>?",
      lead: "Listen to real English on YouTube and Spotify, or practice with exercises that are corrected instantly.",
      modesLabel: "What do you want to do",
      listen: "Listen",
      reading: "Reading",
      topicsRead: "Choose a story",
      tiers: { basic: "Basic", intermediate: "Intermediate", advanced: "Advanced" },
      minRead: (n) => `${n} min read`,
      listenStory: "Listen to the story", stopStory: "Stop",
      fullVideo: "Full speech", summary: "Summary for learners",
      fullText: "Full text", summaryShort: "Summary",
      vocabTitle: "Useful vocabulary", vocabHint: "Each word comes with an example from the text. Tap a card to find it in the reading.",
      glossHint: "Tap (or hover over) any word to see its Spanish translation in this context.", inPhrase: "In this phrase", keyWord: "Key vocabulary", listenWord: "Listen to the word", findInText: "Find in the text",
      comprehension: "Comprehension", comprehensionInstr: "Answer the questions about the story.",
      vocabInContext: "Vocabulary in context", vocabInstr: "Read the sentence and choose the meaning of the highlighted expression.",
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
      progressTab: "Progress", progressTitle: "Your progress", progressIntro: "How consistent you are, how much time you put in and what to review. Saved with your account.",
      daysInARow: (n) => (n === 1 ? "day in a row studying" : "days in a row studying"), bestStreak: (n) => `Your best streak: ${n} ${n === 1 ? "day" : "days"}.`, streakDone: "You've already studied today.", streakKeep: "Study today to keep your streak.", streakStart: "Answer an exercise today to start a streak.", thisWeek: "This week", last7: "Last 7 days",
      streakDays: (n) => `Streak: ${n} ${n === 1 ? "day" : "days"} in a row`,
      timeTitle: "Study time", timeHelp: "Only the time you're actively practicing on the page counts.", sessionTime: "This session", todayTime: "Today", totalTime: "In total", last14: "Minutes per day, last two weeks", chartNote: (h, a) => `Today: ${h} min${a ? ` · Average on the days you studied: ${a} min` : ""}. Each bar is one day; the tallest is your best day.`,
      answersTitle: "Your answers", answersSentence: (n, t, c) => `You've answered <b>${n}</b> ${n === 1 ? "question" : "questions"} in <b>${t}</b> ${t === 1 ? "topic" : "topics"}${c ? ` and completed <b>${c}</b>` : ""}.`,
      answersChart: (a, b, c) => `${a}% right first time, ${b}% on the second try, ${c}% wrong`, firstTryLabel: "Right the first time", secondTryLabel: "Right on the second try", wrongLabel: "Wrong", noAnswersYet: "No answers yet. Start with any topic in Practice.",
      improveTitle: "Where to improve", improveHelp: "Sections where you get less than 80% right. Review these first.", improveNone: "No section is below 80% right. Great job!", rightOf: (a, b) => `${a} of ${b} right`, answeredOf: (a, b) => `${a} of ${b} answered`, practiceIt: "Practice",
      mistakesTitle: "Recent mistakes", mistakesHelp: "Your latest wrong answers, and the ones you got right on the second try.", mistakesEmpty: "No mistakes yet.", yourAnswerWas: "You answered", rightAnswer: "Correct", firstTried: "First you chose", thenRight: "Then you got it with", reviewIt: "Review",
      byTopic: "Progress by topic", byTopicHelp: "Tap a topic to continue where you left off.", resetSection: "Reset this section", resetShort: "Reset", sectionCleared: "Section reset.",
      doAgain: "Redo", tryAgain: "Try again", retryWrong: "Retry mistakes", sections: "Sections", allTopics: "All topics", homePractice: (n) => `${n} grammar and vocabulary topics, corrected instantly.`, homeListen: (v, c) => `${v} shadowing videos and ${c} channels and podcasts.`, homeRead: (n) => `${n} readings: stories, speeches and classics.`, homeProgress: "Your streak, your study time and what to review.", homeContinue: (t, a, b) => `Continue: ${t} · ${a}/${b}`, homeStreak: (n, time) => `Streak: ${n} ${n === 1 ? "day" : "days"} · ${time} in total`, libTitle: "Shadowing library", libHelp: "Pick a video, listen to one line, pause and repeat it out loud. Start with series or animation; speeches are harder.", libFilter: "Filter by type", libCats: { all: "All", series: "Series and movies", animacion: "Animation", famosos: "Celebrities and interviews", discursos: "Speeches" }, libMore: (n, left) => `Show ${n} more (${left} left)`, greetToday: "Time to study today.", greetDone: "Well done today!", topicsCount: (n) => `${n} topics · change`, close: "Close", fullPlaylists: "Full playlists on YouTube", videosCount: (n) => `${n} videos`, channelsTitle: "Channels and podcasts", startOver: "Start over", undo: "Undo",
      wrongCleared: "Your mistakes were cleared: give them another try.", allCleared: "Your answers for this topic were cleared.",
      complete: (c, t) => `<strong>Topic complete!</strong> ${c} of ${t} correct`,
      score: (c, d, t) => `<strong>${c}</strong> correct · ${d} of ${t} answered`,
      correct: "✓ Correct!", answerIs: "✗ The answer is:", secondTry: "(on the second try)", notThis: (v) => `“${v}” isn't the answer.`, tryOnceMore: "Think again and try once more.",
      typeHere: "Type in English…", yourAnswer: "Your answer", check: "Check",
      soon: "Coming soon.", exercisesTitle: "Exercises",
      footer: "Your English Buddy · Student resources",
      footerSmall: "The podcasts and videos belong to their creators.",
      toDark: "Switch to night mode", toLight: "Switch to day mode", darkTitle: "Night mode", lightTitle: "Day mode",
      langLabel: "Language of the instructions",
      gateTitle: "Log in",
      gateText: "Use the username and password your teacher gave you.",
      gateUser: "Username", gateUserPh: "e.g. mary", gateLabel: "Password", gateButton: "Log in",
      showPw: "Show password", hidePw: "Hide password",
      gateError: "Wrong username or password. Please try again.",
      gateOffline: "We couldn't connect. Check your internet and try again.",
      forgot: "Forgot your password?", forgotText: "Ask your teacher for a new one. Your progress won't be lost.",
      forgotWa: "Message on WhatsApp", forgotMsg: "Hi! I forgot my password for Your English Buddy.", forgotUser: "My username is",
      hi: (n) => `Hi, ${n}!`, logout: "Log out"
    }
  };

  let lang = "en";
  try { if (localStorage.getItem("yeb-lang") === "es") lang = "es"; } catch (e) {}

  const t = (key) => (UI[lang][key] !== undefined ? UI[lang][key] : UI.en[key]);

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
