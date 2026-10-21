/*
  Catálogo de recursos de Your English Buddy.
  Para agregar un canal: copia un objeto dentro de `channels` y cambia sus datos.
  - section: id de una sección de `sections` (short = texto del filtro)
  - level: [nivelMínimo, nivelMáximo] usando A2, B1, B2, C1
  - accent: "US" (Estados Unidos), "UK" (Reino Unido), "CA" (Canadá), "Mix"
  - youtube / spotify: deja "" si no existe
*/
window.YEB_DATA = {
  sections: [
    {
      id: "aprender",
      short: "Aprender inglés",
      title: "Podcasts para aprender inglés",
      kicker: "Para estudiantes",
      text: "Creados para personas que aprenden inglés: hablan más claro, explican el vocabulario y muchos tienen transcripción."
    },
    {
      id: "shadowing",
      short: "Shadowing",
      title: "Shadowing y pronunciación",
      kicker: "Escucha y repite",
      text: "Videos para repetir en voz alta justo después del hablante. Así entrenas ritmo, entonación y fluidez."
    },
    {
      id: "crecimiento",
      short: "Crecimiento personal",
      title: "Mentalidad y crecimiento personal",
      kicker: "Inglés real",
      text: "Conversaciones auténticas entre nativos sobre hábitos, motivación y bienestar. Practicas tu inglés mientras aprendes algo útil para tu vida."
    },
    {
      id: "ted",
      short: "TED y TEDx",
      title: "Charlas TED y TEDx",
      kicker: "Ideas que inspiran",
      text: "Charlas cortas (5 a 20 minutos) con subtítulos en inglés y transcripción. Perfectas para practicar listening con un tema concreto."
    },
    {
      id: "negocios",
      short: "Negocios",
      title: "Negocios y carrera",
      kicker: "Inglés profesional",
      text: "Vocabulario de trabajo, liderazgo y emprendimiento: lo que escucharás en reuniones, entrevistas y en tu trabajo remoto."
    },
    {
      id: "curiosidad",
      short: "Ciencia e historias",
      title: "Ciencia, historias y curiosidad",
      kicker: "Para seguir aprendiendo",
      text: "Historias reales y temas de ciencia contados con buen ritmo. Ideales cuando ya entiendes bastante y quieres un reto."
    }
  ],

  featured: [
    {
      youtubeId: "37x7oLjYPgM",
      start: 11,
      title: "4.5 horas de práctica de speaking con Super Sentences",
      channel: "English is EZ with Connor",
      tag: "Shadowing",
      text: "Escucha cada frase, pausa y repítela imitando la entonación. Haz 15 minutos al día."
    },
    {
      youtubeId: "6KjH6Svur0o",
      start: 0,
      title: "The Power of Reinvention: Switching Things Up at Any Age",
      channel: "Mel Robbins",
      tag: "Podcast",
      text: "Activa los subtítulos en inglés y anota 5 expresiones nuevas mientras escuchas."
    }
  ],

  channels: [
    // ——— Aprender inglés ———
    {
      name: "6 Minute English",
      host: "BBC Learning English",
      section: "aprender",
      level: ["A2", "B1"],
      accent: "UK",
      text: "Episodios de 6 minutos sobre temas actuales, con el vocabulario clave explicado. El mejor punto de partida para crear el hábito diario.",
      youtube: "https://www.youtube.com/@bbclearningenglish",
      spotify: "https://open.spotify.com/show/3CF9ANEicXGxEROA3cOryE"
    },
    {
      name: "Learning English Conversations",
      host: "BBC Learning English",
      section: "aprender",
      level: ["A2", "B1"],
      accent: "UK",
      text: "Incluye «The English We Speak»: una expresión cotidiana por episodio, explicada en pocos minutos.",
      youtube: "https://www.youtube.com/@bbclearningenglish",
      spotify: "https://open.spotify.com/show/33450hhCQdEEqRpd4w1TBe"
    },
    {
      name: "Speak English With Vanessa",
      host: "Vanessa",
      section: "aprender",
      level: ["A2", "B1"],
      accent: "US",
      text: "Inglés americano natural, hablado despacio y con calma. Muy bueno para ganar confianza al hablar.",
      youtube: "https://www.youtube.com/@SpeakEnglishWithVanessa",
      spotify: "https://open.spotify.com/show/1VIAIQSjrR6xpK8PCKaJvs"
    },
    {
      name: "All Ears English",
      host: "Lindsay & Michelle",
      section: "aprender",
      level: ["B1", "C1"],
      accent: "US",
      text: "Expresiones, phrasal verbs y small talk del inglés americano, en conversaciones relajadas y divertidas.",
      youtube: "https://www.youtube.com/@AllEarsEnglishPodcast",
      spotify: "https://open.spotify.com/show/6qXldSz1Ulq1Nvj2JK5kSR"
    },
    {
      name: "Culips English Podcast",
      host: "Culips",
      section: "aprender",
      level: ["B1", "B2"],
      accent: "CA",
      text: "Conversaciones entre nativos canadienses sobre idioms, slang y phrasal verbs del día a día.",
      youtube: "https://www.youtube.com/@Culips",
      spotify: "https://open.spotify.com/show/49oSR9XZMPQqFrEYTL3CCP"
    },
    {
      name: "English Learning for Curious Minds",
      host: "Leonardo English",
      section: "aprender",
      level: ["B1", "B2"],
      accent: "UK",
      text: "Historia, psicología y cultura contadas en inglés británico claro. Cada episodio tiene transcripción.",
      youtube: "https://www.youtube.com/@EnglishLearningforCuriousMinds",
      spotify: "https://open.spotify.com/show/0Hqh7seQDFP0K41GMa40aL"
    },
    {
      name: "Luke's English Podcast",
      host: "Luke Thompson",
      section: "aprender",
      level: ["B2", "C1"],
      accent: "UK",
      text: "Episodios largos, con humor y mucho inglés británico real. Para cuando quieres escuchar durante más tiempo.",
      youtube: "https://www.youtube.com/@LukesEnglishPodcast",
      spotify: "https://open.spotify.com/show/4X48gpjrctXNJWtOnUgwq8"
    },
    {
      name: "Easy English",
      host: "Easy Languages",
      section: "aprender",
      level: ["B1", "B2"],
      accent: "UK",
      text: "Entrevistas en la calle con subtítulos en inglés y español. Escuchas a gente común hablando como habla de verdad.",
      youtube: "https://www.youtube.com/@EasyEnglishVideos",
      spotify: ""
    },

    // ——— Shadowing ———
    {
      name: "English is EZ with Connor",
      host: "Connor",
      section: "shadowing",
      level: ["A2", "B2"],
      accent: "US",
      text: "Sesiones largas de «escucha y repite» con frases útiles. Excelente para practicar shadowing todos los días.",
      youtube: "https://www.youtube.com/@EnglishisEZ",
      spotify: ""
    },
    {
      name: "Rachel's English",
      host: "Rachel",
      section: "shadowing",
      level: ["B1", "C1"],
      accent: "US",
      text: "La referencia en pronunciación americana: reducciones, linking y ritmo, analizados palabra por palabra.",
      youtube: "https://www.youtube.com/@rachelsenglish",
      spotify: "https://open.spotify.com/show/383zrzICOQvMfRoFcZ6Jsm"
    },
    {
      name: "English Speaking Success",
      host: "Georgie",
      section: "shadowing",
      level: ["B1", "B2"],
      accent: "UK",
      text: "Lecciones de «speak with me» y pronunciación británica para hablar con más fluidez y seguridad.",
      youtube: "https://www.youtube.com/@EnglishSpeakingSuccess",
      spotify: ""
    },
    {
      name: "The English Coach",
      host: "Chris",
      section: "shadowing",
      level: ["B1", "B2"],
      accent: "US",
      text: "Práctica de conversación y frases para repetir en voz alta, con explicaciones claras y pausadas.",
      youtube: "https://www.youtube.com/@TheEnglishCoach",
      spotify: ""
    },
    {
      name: "Learn English With TV Series",
      host: "LETS",
      section: "shadowing",
      level: ["B1", "C1"],
      accent: "US",
      text: "Escenas de series y películas analizadas frase por frase. Repite los diálogos para sonar más natural.",
      youtube: "https://www.youtube.com/@LearnEnglishWithTVSeries",
      spotify: ""
    },
    {
      name: "Learn English with Bob the Canadian",
      host: "Bob",
      section: "shadowing",
      level: ["A2", "B1"],
      accent: "CA",
      text: "Habla despacio y muy claro. Ideal para hacer tus primeras prácticas de shadowing sin frustrarte.",
      youtube: "https://www.youtube.com/@LearnEnglishwithBobtheCanadian",
      spotify: ""
    },
    {
      name: "English with Lucy",
      host: "Lucy",
      section: "shadowing",
      level: ["B1", "B2"],
      accent: "UK",
      text: "Pronunciación y vocabulario británico con ejercicios de repetición y ejemplos del día a día.",
      youtube: "https://www.youtube.com/@EnglishwithLucy",
      spotify: ""
    },

    // ——— Crecimiento personal ———
    {
      name: "The Mel Robbins Podcast",
      host: "Mel Robbins",
      section: "crecimiento",
      level: ["B2", "C1"],
      accent: "US",
      text: "Consejos prácticos sobre hábitos, motivación y reinventarte. Mel habla con energía y muy claro.",
      youtube: "https://www.youtube.com/@melrobbins",
      spotify: "https://open.spotify.com/show/7vz4RYsD5MulTCrcH478t1"
    },
    {
      name: "On Purpose with Jay Shetty",
      host: "Jay Shetty",
      section: "crecimiento",
      level: ["B2", "C1"],
      accent: "Mix",
      text: "Entrevistas sobre propósito, relaciones y salud mental. Jay tiene acento británico; muchos invitados, americano.",
      youtube: "https://www.youtube.com/@jayshetty",
      spotify: "https://open.spotify.com/show/5EqqB52m2bsr4k1Ii7sStc"
    },
    {
      name: "A Bit of Optimism",
      host: "Simon Sinek",
      section: "crecimiento",
      level: ["B2", "C1"],
      accent: "US",
      text: "Conversaciones tranquilas sobre liderazgo, confianza y relaciones. Simon habla pausado y con ejemplos.",
      youtube: "https://www.youtube.com/@SimonSinek",
      spotify: "https://open.spotify.com/show/0wjYlCNxLDgFUUjZMaP6Dx"
    },

    // ——— TED ———
    {
      name: "TED Talks",
      host: "TED",
      section: "ted",
      level: ["B1", "C1"],
      accent: "Mix",
      text: "Las charlas oficiales de TED. En la web de TED cada charla tiene transcripción interactiva.",
      youtube: "https://www.youtube.com/@TED",
      spotify: "https://open.spotify.com/show/1VXcH8QHkjRcTCEd88U3ti"
    },
    {
      name: "TEDx Talks",
      host: "TEDx",
      section: "ted",
      level: ["B1", "C1"],
      accent: "Mix",
      text: "Miles de charlas de eventos locales en todo el mundo. Escuchas muchos acentos distintos.",
      youtube: "https://www.youtube.com/@TEDx",
      spotify: ""
    },
    {
      name: "TED-Ed",
      host: "TED-Ed",
      section: "ted",
      level: ["B1", "B2"],
      accent: "Mix",
      text: "Lecciones animadas de 5 minutos sobre ciencia, historia y más. Las imágenes te ayudan a entender.",
      youtube: "https://www.youtube.com/@TEDEd",
      spotify: ""
    },

    // ——— Negocios ———
    {
      name: "Business English from All Ears English",
      host: "Lindsay McMahon",
      section: "negocios",
      level: ["B1", "B2"],
      accent: "US",
      text: "Frases para reuniones, correos, entrevistas y networking. Muy útil si trabajas en remoto.",
      youtube: "https://www.youtube.com/@AllEarsEnglishPodcast",
      spotify: "https://open.spotify.com/show/5HFUjaqFFXUiHC5SA6uVEz"
    },
    {
      name: "The Diary Of A CEO",
      host: "Steven Bartlett",
      section: "negocios",
      level: ["B2", "C1"],
      accent: "UK",
      text: "Entrevistas largas con empresarios y expertos sobre éxito, salud y dinero. Inglés británico natural.",
      youtube: "https://www.youtube.com/@TheDiaryOfACEO",
      spotify: "https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX"
    },
    {
      name: "How I Built This",
      host: "Guy Raz",
      section: "negocios",
      level: ["B2", "C1"],
      accent: "US",
      text: "Fundadores de marcas famosas cuentan cómo empezaron. Historias con buen ritmo y mucho vocabulario de negocios.",
      youtube: "https://www.youtube.com/@HowIBuiltThis",
      spotify: "https://open.spotify.com/show/6E709HRH7XaiZrMfgtNCun"
    },
    {
      name: "HBR IdeaCast",
      host: "Harvard Business Review",
      section: "negocios",
      level: ["C1", "C1"],
      accent: "US",
      text: "Ideas de liderazgo y gestión explicadas por expertos. Inglés profesional de nivel avanzado.",
      youtube: "https://www.youtube.com/@HarvardBusinessReview",
      spotify: "https://open.spotify.com/show/4gtSBBxIAE142ApX6LqsvN"
    },

    // ——— Curiosidad ———
    {
      name: "Kurzgesagt – In a Nutshell",
      host: "Kurzgesagt",
      section: "curiosidad",
      level: ["B1", "B2"],
      accent: "Mix",
      text: "Videos animados de ciencia de unos 10 minutos. Narración clara y subtítulos en inglés.",
      youtube: "https://www.youtube.com/@kurzgesagt",
      spotify: ""
    },
    {
      name: "The Moth",
      host: "The Moth",
      section: "curiosidad",
      level: ["B2", "C1"],
      accent: "US",
      text: "Personas comunes cuentan historias reales en un escenario, sin guion. Inglés emocional y espontáneo.",
      youtube: "https://www.youtube.com/@TheMoth",
      spotify: "https://open.spotify.com/show/5UKrcYdaGbq10z97yqi81N"
    },
    {
      name: "Hidden Brain",
      host: "Shankar Vedantam",
      section: "curiosidad",
      level: ["B2", "C1"],
      accent: "US",
      text: "Psicología y comportamiento humano explicados con historias. Shankar habla despacio y con mucha claridad.",
      youtube: "https://www.youtube.com/@HiddenBrain",
      spotify: "https://open.spotify.com/show/20Gf4IAauFrfj7RBkjcWxh"
    },
    {
      name: "Stuff You Should Know",
      host: "Josh & Chuck",
      section: "curiosidad",
      level: ["B2", "C1"],
      accent: "US",
      text: "Dos amigos explican cómo funciona todo, del café a las pirámides. Conversación muy natural y con humor.",
      youtube: "https://www.youtube.com/@StuffYouShouldKnow",
      spotify: "https://open.spotify.com/show/0ofXAdFIQQRsCYj9754UFx"
    },
    {
      name: "Freakonomics Radio",
      host: "Stephen J. Dubner",
      section: "curiosidad",
      level: ["C1", "C1"],
      accent: "US",
      text: "Economía y el lado oculto de las cosas cotidianas. Ritmo rápido: un buen reto para nivel avanzado.",
      youtube: "https://www.youtube.com/@freakonomics",
      spotify: "https://open.spotify.com/show/6z4NLXyHPga1UmSJsPK7G1"
    },
    {
      name: "Huberman Lab",
      host: "Andrew Huberman",
      section: "curiosidad",
      level: ["C1", "C1"],
      accent: "US",
      text: "Neurociencia aplicada al sueño, la concentración y la salud. Vocabulario técnico: para avanzados.",
      youtube: "https://www.youtube.com/@hubermanlab",
      spotify: "https://open.spotify.com/show/79CkJF3UJTHFV8Dse3Oy0P"
    }
  ]
};
