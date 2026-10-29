/*
  Lecturas clásicas y discursos célebres (pestaña Reading). Mismo formato que data/readings.js.
  Los textos originales son de dominio público (Project Gutenberg, Lincoln, Libro de Oración Común).
  «I Have a Dream» tiene derechos de autor: aquí va un resumen propio; el texto completo se puede
  pegar en data/transcripts/mlk-dream.txt para que la lectura muestre «Texto completo».
*/
(function () {
  const C = (q, a, o, e, eEn) => ({ q, a, o, e, en: { e: eEn } });
  // Vocabulary in context: quote with [[word]], answers in Spanish with their English labels
  const V = (quote, a, o, enLabels, e, eEn) => {
    const word = (quote.match(/\[\[(.+?)\]\]/) || [])[1];
    const labels = {};
    [a, ...o].forEach((opt, i) => { if (enLabels[i]) labels[opt] = enLabels[i]; });
    return { quote, q: `¿Qué significa «${word}»?`, a, o, e, en: { q: `What does “${word}” mean?`, labels, e: eEn } };
  };
  // Free question with everything bilingual: q and e = ["ES", "EN"]; options in English
  const Q = (q, a, o, e, quote) => ({ ...(quote ? { quote } : {}), q: q[0], a, o, e: e[0], en: { q: q[1], e: e[1] } });
  const GUT = (n, es, en) => ({ label: { es, en }, url: `https://www.gutenberg.org/ebooks/${n}` });

  window.YEB_READINGS.push(

    // ——————————————————— INGLÉS ARCAICO ———————————————————
    {
      id: "r-lords-prayer", tier: "intermediate", level: "B1–B2", minutes: 3,
      title: "The Lord's Prayer: Archaic English",
      source: {
        note: { es: "Versión tradicional en inglés del Libro de Oración Común (1662). Es inglés moderno temprano, el mismo de Shakespeare: thou, thee, thy y thine eran las formas de «tú». Toca cualquier palabra para ver su traducción.", en: "Traditional English version from the Book of Common Prayer (1662). It's Early Modern English, the same as Shakespeare's: thou, thee, thy and thine were the old forms of “you”. Tap any word to see its translation." },
        links: [{ label: { es: "Comparar con la Biblia del Rey Jacobo (Mateo 6:9-13)", en: "Compare with the King James Bible (Matthew 6:9-13)" }, url: "https://www.gutenberg.org/ebooks/10" }]
      },
      text: [
        "Our Father, which art in heaven, Hallowed be thy Name.",
        "Thy Kingdom come. Thy will be done, in earth as it is in heaven.",
        "Give us this day our daily bread.",
        "And forgive us our trespasses, As we forgive them that trespass against us.",
        "And lead us not into temptation; But deliver us from evil:",
        "For thine is the kingdom, the power, and the glory, For ever and ever. Amen."
      ],
      vocab: [
        ["which art", "que estás (art = are)", "who are (art is the old form of are)", "which art"],
        ["hallowed", "santificado, tratado como sagrado", "made holy, deeply respected"],
        ["thy", "tu (forma antigua)", "your (old form)"],
        ["thy will be done", "hágase tu voluntad", "may what you want happen"],
        ["in earth", "en la tierra (hoy: on earth)", "on earth (modern form)"],
        ["this day", "hoy, este día", "today"],
        ["daily bread", "el pan de cada día", "the food we need every day"],
        ["trespasses", "ofensas", "wrong things done against someone"],
        ["them that", "a los que (hoy: those who)", "those who", "them that"],
        ["lead us not", "no nos dejes caer (no nos lleves)", "don't lead us (old negative without do)"],
        ["temptation", "tentación", "a strong wish to do something wrong"],
        ["deliver", "librar, liberar", "to save, to rescue"],
        ["thine", "tuyo (forma antigua)", "yours (old form)"],
        ["for ever and ever", "por los siglos de los siglos", "forever"]
      ],
      comprehension: [
        C("Who is the prayer talking to?", "God (“Our Father”)", ["A king", "The speaker's dad"], "Empieza con «Our Father, which art in heaven»: le habla a Dios.", "It starts with “Our Father, which art in heaven”: it's talking to God."),
        C("What does the speaker ask for “this day”?", "Food for today", ["Money", "A long life"], "«Give us this day our daily bread» = danos hoy el pan de cada día.", "“Give us this day our daily bread” = give us today the food we need."),
        C("“Forgive us … as we forgive them that trespass against us” means:", "Forgive us in the same way we forgive other people", ["Forgive us, but not other people", "We never forgive anybody"], "«As» = de la misma forma que.", "“As” = in the same way that."),
        C("In “which art in heaven”, “which” refers to:", "A person (today we say “who”)", ["A thing", "A place"], "En inglés antiguo «which» también se usaba para personas. Hoy: who art → who are.", "In old English “which” was also used for people. Today: who are."),
        C("“Thine is the kingdom” means:", "The kingdom is yours", ["The kingdom is mine", "The kingdom is ours"], "Thine = yours.", "Thine = yours."),
        C("“Lead us not into temptation” is:", "A request: “don't lead us into temptation”", ["A question", "A promise"], "En inglés antiguo el «not» iba después del verbo, sin «do».", "In old English “not” came after the verb, without “do”.")
      ],
      practice: [
        { kind: "vocab", title: { es: "Del inglés antiguo al moderno", en: "From old to modern English" },
          instructions: { es: "¿Cómo se dice hoy? Elige la forma moderna.", en: "How do we say it today? Choose the modern form." }, items: [
          Q(["«thy Name» hoy es:", "“thy Name” today is:"], "your name", ["his name", "their name"], ["Thy = your (posesivo, como my → your).", "Thy = your (possessive, like my → your)."], "Hallowed be [[thy]] Name."),
          Q(["«which art in heaven» hoy es:", "“which art in heaven” today is:"], "who are in heaven", ["which is in heaven", "who art in heaven"], ["Which (para personas) → who; art → are.", "Which (for people) → who; art → are."], "Our Father, [[which art]] in heaven"),
          Q(["«in earth» hoy es:", "“in earth” today is:"], "on earth", ["in the earth", "at earth"], ["Hoy se dice on earth (en la Tierra).", "Today we say on earth."], "Thy will be done, [[in earth]] as it is in heaven."),
          Q(["«Give us this day» hoy es:", "“Give us this day” today is:"], "Give us today", ["Give us this daily", "Give us one day"], ["This day = today.", "This day = today."], "Give us [[this day]] our daily bread."),
          Q(["«them that trespass against us» hoy es:", "“them that trespass against us” today is:"], "those who hurt us", ["they who trespass us", "them which hurt us"], ["Them that → those who. Trespass against = ofender, hacer daño.", "Them that → those who. Trespass against = do wrong to."], "As we forgive [[them that]] trespass against us."),
          Q(["«lead us not» hoy es:", "“lead us not” today is:"], "don't lead us", ["lead not us", "not lead us"], ["Hoy la negación necesita do: don't lead us.", "Today the negative needs do: don't lead us."], "And [[lead us not]] into temptation"),
          Q(["«thine is the kingdom» hoy es:", "“thine is the kingdom” today is:"], "the kingdom is yours", ["your is the kingdom", "the kingdom is thy"], ["Thine = yours (va solo, sin sustantivo, como mine).", "Thine = yours (it stands alone, like mine)."], "For [[thine]] is the kingdom"),
          Q(["«Hallowed be thy Name» significa:", "“Hallowed be thy Name” means:"], "May your name be respected as holy", ["Your name is Hallowed", "Say your name"], ["Es un deseo: que tu nombre sea santificado.", "It's a wish: may your name be treated as holy."], "[[Hallowed]] be thy Name.")
        ] },
        { kind: "vocab", title: { es: "Thou, thee, thy, thine", en: "Thou, thee, thy, thine" },
          instructions: { es: "Funcionan como los pronombres que ya conoces: thou = I (sujeto), thee = me (objeto), thy = my (posesivo), thine = mine.", en: "They work like the pronouns you know: thou = I (subject), thee = me (object), thy = my (possessive), thine = mine." }, items: [
          Q(["___ art my friend. (Tú eres mi amigo.)", "___ art my friend. (You are my friend.)"], "Thou", ["Thee", "Thy"], ["Sujeto → thou (como I, he, she).", "Subject → thou (like I, he, she)."]),
          Q(["I love ___. (Te quiero.)", "I love ___. (I love you.)"], "thee", ["thou", "thine"], ["Objeto, después del verbo → thee (como me, him, her).", "Object, after the verb → thee (like me, him, her)."]),
          Q(["Hallowed be ___ name.", "Hallowed be ___ name."], "thy", ["thee", "thou"], ["Antes de un sustantivo → thy (como my, your).", "Before a noun → thy (like my, your)."]),
          Q(["This house is ___. (Esta casa es tuya.)", "This house is ___. (This house is yours.)"], "thine", ["thy", "thee"], ["Solo, sin sustantivo → thine (como mine, yours).", "Alone, without a noun → thine (like mine, yours)."]),
          Q(["«Thou art» en inglés moderno:", "“Thou art” in modern English:"], "You are", ["You art", "Thou are"], ["Thou art = you are.", "Thou art = you are."]),
          Q(["«Thou hast» (Shakespeare) en inglés moderno:", "“Thou hast” (Shakespeare) in modern English:"], "You have", ["You has", "You had"], ["Hast = have (con thou). También: thou dost = you do.", "Hast = have (with thou). Also: thou dost = you do."])
        ] }
      ]
    },

    // ——————————————————— DISCURSOS ———————————————————
    {
      id: "r-gettysburg", tier: "advanced", level: "C1", minutes: 3,
      title: "Abraham Lincoln: The Gettysburg Address (1863)",
      source: {
        note: { es: "Lincoln pronunció este discurso de 272 palabras en plena guerra civil, en el cementerio de los soldados caídos en Gettysburg. Es el texto completo (copia Bliss).", en: "Lincoln gave this 272-word speech during the Civil War, at the cemetery for the soldiers who died at Gettysburg. This is the full text (Bliss copy)." },
        links: [{ label: { es: "Más sobre el discurso", en: "More about the speech" }, url: "https://www.abrahamlincolnonline.org/lincoln/speeches/gettysburg.htm" }]
      },
      text: [
        "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
        "Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.",
        "But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here.",
        "It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth."
      ],
      vocab: [
        ["four score and seven years ago", "hace ochenta y siete años (score = 20)", "87 years ago (a score = 20)"],
        ["brought forth", "dieron origen a, fundaron", "created, started"],
        ["conceived in Liberty", "nacida en libertad", "born free"],
        ["proposition", "idea, principio", "an idea that people accept as true"],
        ["engaged in", "metidos en, librando", "involved in"],
        ["endure", "resistir, durar", "to last, to survive"],
        ["resting place", "lugar de descanso (tumba)", "a grave"],
        ["fitting and proper", "justo y apropiado", "right and correct"],
        ["hallow", "santificar", "to make holy"],
        ["detract", "quitar, restar", "to take away"],
        ["little note", "apenas notará", "will hardly notice", "will little note"],
        ["devotion", "entrega, dedicación", "strong love and commitment"],
        ["in vain", "en vano", "for nothing"],
        ["perish", "desaparecer, morir", "to die, to disappear"]
      ],
      comprehension: [
        C("How many years is “four score and seven”?", "87", ["47", "74"], "Score = 20. 4 × 20 + 7 = 87 (de 1776 a 1863).", "A score = 20. 4 × 20 + 7 = 87 (from 1776 to 1863)."),
        C("What is the nation fighting?", "A civil war", ["A war against England", "A war in Europe"], "«We are engaged in a great civil war.»", "“We are engaged in a great civil war.”"),
        C("Why are they meeting on the battlefield?", "To dedicate part of it as a cemetery", ["To start a new battle", "To build a city"], "Vienen a dedicar parte del campo como «final resting place».", "They dedicate part of the field as a “final resting place”."),
        C("According to Lincoln, who really made the ground sacred?", "The brave men who fought there", ["The president", "The people listening"], "«The brave men … have consecrated it, far above our poor power.»", "“The brave men … have consecrated it, far above our poor power.”"),
        C("What does Lincoln say the world will remember?", "What the soldiers did, not his words", ["His speech, forever", "Nothing at all"], "Dice que el mundo olvidará lo que dicen, pero no lo que hicieron. (¡Irónico: su discurso es de los más recordados!)", "He says the world will forget their words but not the soldiers' actions. (Ironic: it's one of the most remembered speeches!)"),
        C("“Government of the people, by the people, for the people” describes:", "Democracy", ["A monarchy", "A dictatorship"], "El pueblo elige y gobierna para sí mismo: democracia.", "The people choose and govern for themselves: democracy.")
      ],
      vocabulary: [
        V("[[Four score and seven years ago]] our fathers brought forth…", "Hace 87 años", ["Hace 47 años", "Cuatro veces al año"], ["87 years ago", "47 years ago", "Four times a year"], "Score = veintena (20).", "A score = twenty."),
        V("…testing whether that nation … can long [[endure]].", "Resistir, durar", ["Terminar", "Crecer"], ["Last, survive", "End", "Grow"], "Endure = aguantar, sobrevivir.", "Endure = last, survive."),
        V("It is altogether [[fitting and proper]] that we should do this.", "Justo y apropiado", ["Rápido y fácil", "Caro y difícil"], ["Right and correct", "Quick and easy", "Expensive and hard"], "Fitting = adecuado; proper = correcto.", "Fitting = suitable; proper = correct."),
        V("…far above our poor power to add or [[detract]].", "Quitar, restar", ["Explicar", "Repetir"], ["Take away", "Explain", "Repeat"], "Add or detract = sumar o restar.", "Add or detract = add or take away."),
        V("…that these dead shall not have died [[in vain]]…", "En vano, para nada", ["Con honor", "Muy jóvenes"], ["For nothing", "With honor", "Very young"], "In vain = inútilmente.", "In vain = for nothing."),
        V("…shall not [[perish]] from the earth.", "Desaparecer", ["Crecer", "Viajar"], ["Disappear, die", "Grow", "Travel"], "Perish = morir, desaparecer.", "Perish = die, disappear.")
      ]
    },

    {
      id: "r-mlk-dream", tier: "advanced", level: "B2", minutes: 3,
      title: "Martin Luther King Jr.: “I Have a Dream” (1963)",
      transcript: "data/transcripts/mlk-dream.txt",
      video: {
        id: "kEWzJGUlfIo", start: 0, channel: "Shadowing for dummies!",
        title: { es: "Escucha y repite partes del discurso", en: "Listen to and repeat parts of the speech" },
        tip: { es: "Práctica de shadowing con fragmentos del discurso: escucha cada frase y repítela con la misma fuerza y el mismo ritmo.", en: "Shadowing practice with parts of the speech: listen to each line and repeat it with the same power and rhythm." }
      },
      source: {
        note: { es: "Abajo tienes un resumen para estudiantes (el discurso original tiene derechos de autor). El texto completo está aquí:", en: "Below is a summary for learners (the original speech is under copyright). The full text is here:" },
        links: [{ label: { es: "Texto completo (NPR)", en: "Full text (NPR)" }, url: "https://www.npr.org/2010/01/18/122701268/i-have-a-dream-speech-in-its-entirety" }]
      },
      text: [
        "On August 28, 1963, more than 250,000 people marched to Washington, D.C., to ask for jobs and freedom for Black Americans. At the end of the day, Dr. Martin Luther King Jr. spoke from the steps of the Lincoln Memorial.",
        "He began by remembering that one hundred years after the end of slavery, Black Americans were still not free. They lived with segregation and discrimination, and many of them were poor in a very rich country.",
        "He used a famous image: America had written a check promising freedom and equal rights to all its citizens, but for Black Americans that check had bounced. He said they refused to believe that there was no money in the bank of justice.",
        "King asked his followers to fight for their rights without violence and without hate, but also not to wait. The time for change, he said, was now.",
        "Then he put away his notes and spoke from the heart. Again and again he repeated four words: “I have a dream.” He dreamed of a day when his four little children would be judged by their character and not by the color of their skin, and when people of every race could sit together as brothers and sisters.",
        "He ended by asking freedom to ring from every mountain in the country. The speech helped to pass the Civil Rights Act of 1964, and today it is one of the most famous speeches in history."
      ],
      vocab: [
        ["march", "marchar (manifestarse caminando)", "to walk together to protest", "marched"],
        ["slavery", "esclavitud", "owning people and forcing them to work"],
        ["segregation", "segregación (separar por raza)", "keeping people apart by race"],
        ["discrimination", "discriminación", "treating people unfairly because of who they are"],
        ["equal rights", "igualdad de derechos", "the same rights for everyone"],
        ["bounce", "rebotar (un cheque sin fondos)", "when a check has no money behind it", "bounced"],
        ["followers", "seguidores", "people who support a leader"],
        ["violence", "violencia", "using force to hurt people"],
        ["from the heart", "con el corazón (sin leer)", "with true feeling, not from notes"],
        ["judge", "juzgar", "to form an opinion about someone", "judged"],
        ["character", "carácter, forma de ser", "the kind of person you are"],
        ["civil rights", "derechos civiles", "the rights every citizen should have"]
      ],
      comprehension: [
        C("Why did more than 250,000 people go to Washington?", "To ask for jobs and freedom for Black Americans", ["To celebrate a holiday", "To see the president"], "Marcharon «to ask for jobs and freedom».", "They marched “to ask for jobs and freedom”."),
        C("What does the “bounced check” image mean?", "America promised equal rights but didn't give them", ["The bank had no money", "King needed money"], "Es una metáfora: una promesa que no se cumplió.", "It's a metaphor: a promise that was not kept."),
        C("How did King want his followers to fight?", "Without violence or hate", ["With weapons", "Only by voting"], "«Without violence and without hate».", "“Without violence and without hate”."),
        C("What words did he repeat again and again?", "“I have a dream.”", ["“Free at last.”", "“Let freedom ring.”"], "La repetición de «I have a dream» es lo más famoso del discurso.", "Repeating “I have a dream” is the most famous part of the speech."),
        C("How did he want his children to be judged?", "By their character", ["By the color of their skin", "By their grades"], "Por su carácter, no por el color de su piel.", "By their character, not by the color of their skin."),
        C("What happened after the speech?", "It helped to pass the Civil Rights Act of 1964", ["Nothing changed", "King became president"], "El discurso ayudó a aprobar la Ley de Derechos Civiles de 1964.", "The speech helped pass the Civil Rights Act of 1964.")
      ],
      vocabulary: [
        V("They lived with [[segregation]] and discrimination…", "Separación por raza", ["Pobreza", "Guerra"], ["Keeping people apart by race", "Poverty", "War"], "Segregation = separar a las personas por su raza (escuelas, buses, restaurantes).", "Segregation = keeping people apart by race (schools, buses, restaurants)."),
        V("…for Black Americans that check had [[bounced]].", "Había sido rechazado por falta de fondos", ["Se había perdido", "Se había pagado"], ["Was refused because there was no money", "Was lost", "Was paid"], "A check bounces = el cheque rebota, no tiene fondos.", "A check bounces when there's no money to pay it."),
        V("King asked his [[followers]] to fight for their rights…", "Seguidores", ["Enemigos", "Jefes"], ["Supporters", "Enemies", "Bosses"], "Follower = alguien que sigue y apoya a un líder.", "Follower = someone who supports a leader."),
        V("Then he put away his notes and spoke [[from the heart]].", "Con sentimiento, sin leer", ["Muy rápido", "En voz baja"], ["With true feeling, without notes", "Very fast", "Quietly"], "From the heart = de corazón, con sinceridad.", "From the heart = sincerely, with true feeling."),
        V("…would be [[judged]] by their character…", "Juzgados, valorados", ["Castigados", "Olvidados"], ["Evaluated", "Punished", "Forgotten"], "Judge = juzgar, formarse una opinión.", "Judge = form an opinion about someone."),
        V("…by their [[character]] and not by the color of their skin…", "Su forma de ser", ["Su personaje", "Su letra"], ["The kind of person they are", "A role in a movie", "Their handwriting"], "Aquí character = carácter, personalidad. También puede ser un personaje de película.", "Here character = personality. It can also mean a role in a movie.")
      ]
    },

    // ——————————————————— LIBROS CLÁSICOS ———————————————————
    {
      id: "r-alice", tier: "intermediate", level: "B1–B2", minutes: 3,
      title: "Alice in Wonderland: Down the Rabbit-Hole (1865)",
      source: {
        note: { es: "Comienzo original de «Alicia en el país de las maravillas», de Lewis Carroll. Las frases son largas: léelas por partes.", en: "The original opening of “Alice's Adventures in Wonderland” by Lewis Carroll. The sentences are long: read them in parts." },
        links: [GUT(11, "Libro completo (Project Gutenberg)", "Full book (Project Gutenberg)")]
      },
      text: [
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”",
        "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.",
        "There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.",
        "In another moment down went Alice after it, never once considering how in the world she was to get out again."
      ],
      vocab: [
        ["bank", "orilla (de un río)", "the land next to a river"],
        ["peep into", "echar un vistazo", "to look quickly", "peeped into"],
        ["what is the use of", "¿para qué sirve…?", "why do we need…?"],
        ["daisy-chain", "collar de margaritas", "flowers tied together in a line"],
        ["worth the trouble", "valer la pena", "good enough to make the effort"],
        ["remarkable", "extraordinario", "very unusual"],
        ["out of the way", "raro, fuera de lo normal", "strange, unusual"],
        ["I shall be late", "voy a llegar tarde (shall = will)", "I will be late"],
        ["waistcoat", "chaleco", "a vest worn under a jacket", "waistcoat-pocket"],
        ["hurry on", "seguir de prisa", "to continue quickly", "hurried on"],
        ["burning with curiosity", "muerta de curiosidad", "extremely curious"],
        ["pop down", "meterse de golpe", "to go down quickly", "pop down"],
        ["hedge", "seto", "a line of bushes"]
      ],
      comprehension: [
        C("Why is Alice bored?", "She has nothing to do", ["She is hungry", "She is lost"], "«Tired of sitting by her sister … and of having nothing to do».", "“Tired of sitting by her sister … and of having nothing to do”."),
        C("What doesn't Alice like about her sister's book?", "It has no pictures or conversations", ["It's in French", "It's too short"], "«It had no pictures or conversations in it».", "“It had no pictures or conversations in it”."),
        C("What is strange about the White Rabbit?", "It takes a watch out of its pocket", ["It has pink eyes", "It runs fast"], "Que un conejo hable podría pasar… ¡pero que tenga chaleco y reloj!", "A talking rabbit is one thing… but a rabbit with a vest and a watch!"),
        C("Why does the Rabbit hurry?", "It's going to be late", ["It's scared of Alice", "It's hungry"], "«Oh dear! I shall be late!»", "“Oh dear! I shall be late!”"),
        C("Where does the Rabbit go?", "Down a rabbit-hole under the hedge", ["Into the river", "Into a house"], "«Pop down a large rabbit-hole under the hedge».", "“Pop down a large rabbit-hole under the hedge”."),
        C("What does Alice NOT think about before jumping in?", "How to get out again", ["How to catch the Rabbit", "Her sister's book"], "«Never once considering how in the world she was to get out again».", "“Never once considering how in the world she was to get out again”.")
      ],
      vocabulary: [
        V("…once or twice she had [[peeped into]] the book her sister was reading…", "Echado un vistazo", ["Leído completo", "Escrito"], ["Looked quickly", "Read it all", "Written"], "Peep = mirar rápido, a escondidas.", "Peep = look quickly, secretly."),
        V("“And [[what is the use of]] a book,” thought Alice…", "¿Para qué sirve…?", ["¿Cuánto cuesta…?", "¿Quién escribió…?"], ["Why do we need…?", "How much is…?", "Who wrote…?"], "What's the use of…? = ¿de qué sirve…?", "What's the use of…? = why do we need it?"),
        V("…whether the pleasure of making a daisy-chain would be [[worth the trouble]]…", "Valdría la pena", ["Sería peligroso", "Sería caro"], ["Would be good enough to make the effort", "Would be dangerous", "Would be expensive"], "Worth the trouble = valer la pena el esfuerzo.", "Worth the trouble = good enough to make the effort."),
        V("There was nothing so very [[remarkable]] in that…", "Extraordinario", ["Peligroso", "Gracioso"], ["Very unusual", "Dangerous", "Funny"], "Remarkable = notable, fuera de lo común.", "Remarkable = unusual, worth noticing."),
        V("…and [[burning with curiosity]], she ran across the field after it…", "Muerta de curiosidad", ["Con mucho calor", "Muy asustada"], ["Extremely curious", "Very hot", "Very scared"], "Burning with = lleno de un sentimiento muy fuerte.", "Burning with = full of a very strong feeling."),
        V("…a large rabbit-hole under the [[hedge]].", "Seto (arbustos)", ["Árbol", "Puente"], ["A line of bushes", "A tree", "A bridge"], "Hedge = seto, una fila de arbustos.", "Hedge = a line of bushes.")
      ]
    },

    {
      id: "r-pride", tier: "advanced", level: "B2–C1", minutes: 3,
      title: "Pride and Prejudice: The Opening (1813)",
      source: {
        note: { es: "Comienzo original de «Orgullo y prejuicio», de Jane Austen. La primera frase es de las más famosas de la literatura, y es irónica: no la tomes al pie de la letra.", en: "The original opening of “Pride and Prejudice” by Jane Austen. The first sentence is one of the most famous in literature, and it's ironic: don't take it literally." },
        links: [GUT(1342, "Libro completo (Project Gutenberg)", "Full book (Project Gutenberg)")]
      },
      text: [
        "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
        "However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.",
        "“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?” Mr. Bennet replied that he had not. “But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.” Mr. Bennet made no answer.",
        "“Do not you want to know who has taken it?” cried his wife, impatiently. “You want to tell me, and I have no objection to hearing it.” This was invitation enough.",
        "“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.”",
        "“What is his name?” “Bingley.” “Is he married or single?” “Oh, single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!”",
        "“How so? how can it affect them?” “My dear Mr. Bennet,” replied his wife, “how can you be so tiresome? You must know that I am thinking of his marrying one of them.”",
        "“Is that his design in settling here?” “Design? Nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes.”"
      ],
      vocab: [
        ["universally acknowledged", "reconocido por todos", "accepted by everyone"],
        ["in possession of", "que tiene, dueño de", "who has, who owns"],
        ["a good fortune", "una gran fortuna", "a lot of money"],
        ["in want of", "que necesita", "who needs"],
        ["rightful property", "propiedad legítima", "something that belongs to you by right"],
        ["let", "alquilado (inglés británico)", "rented"],
        ["impatiently", "con impaciencia", "not able to wait calmly"],
        ["I have no objection", "no tengo inconveniente", "I don't mind"],
        ["servants", "sirvientes", "people who work in a house"],
        ["tiresome", "pesado, fastidioso", "annoying"],
        ["design", "intención, plan", "a secret plan or intention"],
        ["nonsense", "¡tonterías!", "something silly"],
        ["fall in love", "enamorarse", "to start loving someone"]
      ],
      comprehension: [
        C("What is the irony of the first sentence?", "In reality, families want rich single men for their daughters", ["Rich men always want to marry", "Single men are poor"], "Dice que el hombre rico «necesita» esposa, pero en realidad son las familias las que lo quieren para sus hijas.", "It says the rich man “needs” a wife, but really it's the families who want him for their daughters."),
        C("What news does Mrs. Bennet have?", "Someone has rented Netherfield Park", ["Mrs. Long is getting married", "Mr. Bennet has a new job"], "«Netherfield Park is let at last» = por fin está alquilada.", "“Netherfield Park is let at last” = it has finally been rented."),
        C("How does Mr. Bennet react at first?", "He doesn't say much", ["He is very excited", "He gets angry"], "«Mr. Bennet made no answer.» Le interesa poco.", "“Mr. Bennet made no answer.” He isn't very interested."),
        C("Why is Mrs. Bennet so happy about Mr. Bingley?", "He is rich and single, and she has daughters", ["He is her cousin", "He is very handsome"], "«A single man of large fortune … What a fine thing for our girls!»", "“A single man of large fortune … What a fine thing for our girls!”"),
        C("What does she want Mr. Bennet to do?", "Visit Mr. Bingley as soon as he comes", ["Sell their house", "Write to Mrs. Long"], "«You must visit him as soon as he comes.»", "“You must visit him as soon as he comes.”"),
        C("How much money does Bingley have?", "Four or five thousand a year", ["Five hundred a year", "Forty thousand"], "«Four or five thousand a year» (una fortuna en esa época).", "“Four or five thousand a year” (a fortune at the time).")
      ],
      vocabulary: [
        V("It is a truth [[universally acknowledged]]…", "Reconocida por todos", ["Que nadie cree", "Muy antigua"], ["Accepted by everyone", "That nobody believes", "Very old"], "Universally = por todo el mundo; acknowledged = reconocida.", "Universally = by everyone; acknowledged = accepted."),
        V("…must be [[in want of]] a wife.", "Necesitar", ["Odiar", "Tener"], ["Need", "Hate", "Have"], "In want of = que necesita (forma antigua).", "In want of = needing (old-fashioned)."),
        V("…have you heard that Netherfield Park is [[let]] at last?", "Alquilado", ["Vendido", "Destruido"], ["Rented", "Sold", "Destroyed"], "En inglés británico «to let» = alquilar. Todavía verás carteles «To let».", "In British English “to let” = to rent. You still see “To let” signs."),
        V("“You want to tell me, and I have [[no objection]] to hearing it.”", "No me molesta", ["No me interesa", "No tengo tiempo"], ["I don't mind", "I'm not interested", "I don't have time"], "No objection = no tengo inconveniente. (¡Es sarcástico!)", "No objection = I don't mind. (It's sarcastic!)"),
        V("“…how can you be so [[tiresome]]?”", "Fastidioso, pesado", ["Cansado", "Gracioso"], ["Annoying", "Tired", "Funny"], "Tiresome = que cansa o molesta (no «cansado»).", "Tiresome = annoying (not “tired”)."),
        V("“Is that his [[design]] in settling here?”", "Su intención", ["Su dibujo", "Su casa"], ["His plan, his intention", "His drawing", "His house"], "Aquí design = plan, intención (no diseño).", "Here design = plan, intention (not a drawing).")
      ]
    },

    {
      id: "r-sherlock", tier: "advanced", level: "B2–C1", minutes: 3,
      title: "Sherlock Holmes: How Did He Know? (1887)",
      source: {
        note: { es: "De «Estudio en escarlata», de Arthur Conan Doyle: la primera novela de Sherlock Holmes. Holmes le explica al Dr. Watson cómo adivinó que venía de Afganistán.", en: "From “A Study in Scarlet” by Arthur Conan Doyle, the first Sherlock Holmes novel. Holmes explains to Dr. Watson how he guessed that Watson had come from Afghanistan." },
        links: [GUT(244, "Libro completo (Project Gutenberg)", "Full book (Project Gutenberg)")]
      },
      text: [
        "“Observation with me is second nature. You appeared to be surprised when I told you, on our first meeting, that you had come from Afghanistan.”",
        "“You were told, no doubt.”",
        "“Nothing of the sort. I knew you came from Afghanistan. From long habit the train of thoughts ran so swiftly through my mind, that I arrived at the conclusion without being conscious of intermediate steps. There were such steps, however.",
        "The train of reasoning ran, ‘Here is a gentleman of a medical type, but with the air of a military man. Clearly an army doctor, then. He has just come from the tropics, for his face is dark, and that is not the natural tint of his skin, for his wrists are fair. He has undergone hardship and sickness, as his haggard face says clearly. His left arm has been injured. He holds it in a stiff and unnatural manner. Where in the tropics could an English army doctor have seen much hardship and got his arm wounded? Clearly in Afghanistan.’ The whole train of thought did not occupy a second. I then remarked that you came from Afghanistan, and you were astonished.”",
        "“It is simple enough as you explain it,” I said, smiling."
      ],
      vocab: [
        ["second nature", "algo natural, automático", "something you do without thinking"],
        ["no doubt", "sin duda", "certainly"],
        ["nothing of the sort", "nada de eso", "not at all"],
        ["train of thought", "hilo de pensamiento", "a series of connected ideas", "train of thoughts"],
        ["swiftly", "rápidamente", "very quickly"],
        ["intermediate steps", "pasos intermedios", "the steps in the middle"],
        ["the air of", "el aire de, aspecto de", "the look of"],
        ["tint", "tono, color", "a shade of color"],
        ["fair", "claro (piel)", "light-colored (skin)"],
        ["hardship", "penurias, dificultades", "a very difficult situation"],
        ["haggard", "demacrado", "looking very tired and thin"],
        ["stiff", "rígido", "hard to move"],
        ["astonished", "asombrado", "very surprised"]
      ],
      comprehension: [
        C("Why did Holmes think Watson was a doctor?", "He looked like a medical man", ["Watson told him", "He had a doctor's bag"], "«A gentleman of a medical type».", "“A gentleman of a medical type”."),
        C("Why did he think Watson was a soldier?", "He had the air of a military man", ["He wore a uniform", "He had a gun"], "«With the air of a military man».", "“With the air of a military man”."),
        C("How did he know Watson had been in the tropics?", "His face was dark but his wrists were light", ["He had a tan everywhere", "He spoke about the heat"], "La cara bronceada y las muñecas claras: el sol, no su color natural.", "A dark face but fair wrists: it was the sun, not his natural color."),
        C("How did he know Watson's arm was injured?", "Watson held it in a stiff, unnatural way", ["It was bandaged", "Watson complained about it"], "«He holds it in a stiff and unnatural manner».", "“He holds it in a stiff and unnatural manner”."),
        C("How long did the whole reasoning take?", "Less than a second", ["A few minutes", "A whole day"], "«The whole train of thought did not occupy a second».", "“The whole train of thought did not occupy a second”."),
        C("What does Watson think after the explanation?", "That it's simple once explained", ["That Holmes is lying", "That Holmes read his diary"], "«It is simple enough as you explain it».", "“It is simple enough as you explain it”.")
      ],
      practice: [
        { kind: "vocab", title: { es: "Vocabulario en contexto", en: "Vocabulary in context" }, items: [
          V("Observation with me is [[second nature]].", "Algo automático", ["Un segundo trabajo", "Algo difícil"], ["Something I do without thinking", "A second job", "Something difficult"], "Second nature = algo que haces sin pensar, como respirar.", "Second nature = something you do without thinking."),
          V("“[[Nothing of the sort]]. I knew you came from Afghanistan.”", "Nada de eso", ["Algo así", "Claro que sí"], ["Not at all", "Something like that", "Of course"], "Nothing of the sort = para nada, en absoluto.", "Nothing of the sort = not at all."),
          V("…the train of thoughts ran so [[swiftly]] through my mind…", "Rápidamente", ["Lentamente", "Con dificultad"], ["Very quickly", "Slowly", "With difficulty"], "Swift = rápido.", "Swift = fast."),
          V("…as his [[haggard]] face says clearly.", "Demacrado", ["Feliz", "Joven"], ["Tired and thin", "Happy", "Young"], "Haggard = con cara de cansancio y sufrimiento.", "Haggard = looking exhausted and unwell."),
          V("He holds it in a [[stiff]] and unnatural manner.", "Rígido", ["Suave", "Rápido"], ["Hard to move", "Soft", "Fast"], "Stiff = tieso, rígido.", "Stiff = hard to bend or move."),
          V("…and you were [[astonished]].", "Asombrado", ["Enojado", "Aburrido"], ["Very surprised", "Angry", "Bored"], "Astonished = muy sorprendido.", "Astonished = very surprised.")
        ] },
        { kind: "vocab", title: { es: "Deduce como Sherlock", en: "Deduce like Sherlock" },
          instructions: { es: "Mira las pistas y elige la conclusión más lógica.", en: "Look at the clues and choose the most logical conclusion." }, items: [
          Q(["Tiene tinta azul en los dedos y una mochila llena de cuadernos.", "He has blue ink on his fingers and a backpack full of notebooks."], "He's probably a student.", ["He's probably a chef.", "He's probably a pilot."], ["Tinta + cuadernos → escribe mucho: estudiante.", "Ink + notebooks → writes a lot: a student."]),
          Q(["Tiene la piel bronceada, pero una marca blanca donde va el reloj.", "Her skin is tanned, but there's a white line where her watch goes."], "She has just come back from the beach.", ["She never goes outside.", "She works at night."], ["Como Watson: el sol dejó marca, menos donde estaba el reloj.", "Like Watson: the sun left a mark, except under the watch."]),
          Q(["Huele a café, bosteza y tiene ojeras a las 8 a. m.", "He smells of coffee, yawns and has dark circles at 8 a.m."], "He didn't sleep much last night.", ["He slept twelve hours.", "He just won the lottery."], ["Café + bostezos + ojeras → durmió poco.", "Coffee + yawning + dark circles → little sleep."]),
          Q(["Tiene pelos de gato en el pantalón negro y rasguños en las manos.", "There are cat hairs on her black pants and scratches on her hands."], "She probably has a cat.", ["She's allergic to animals.", "She works in a bank."], ["Pelos + rasguños → tiene gato (¡quizás un Sir Gordon!).", "Hair + scratches → a cat (maybe a Sir Gordon!)."])
        ] }
      ]
    }
  );
})();
