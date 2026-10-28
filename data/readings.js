/*
  Lecturas de Your English Buddy (pestaña Reading).
  Cada lectura tiene:
  - tier: "basic" | "intermediate" | "advanced", level ("A1–A2"...), minutes (tiempo de lectura)
  - text: párrafos en inglés
  - vocab: [palabra, significado en español, significado en inglés, texto exacto en la historia (opcional)]
    La palabra se resalta en el texto (la primera vez que aparece) y se puede tocar.
  - comprehension: preguntas con C(pregunta, correcta, [incorrectas], explicación ES, explicación EN)
  - vocabulary: preguntas con V("frase con [[palabra]]", correcta ES, [incorrectas ES], [traducción EN de cada opción], explicación ES, explicación EN)
  - source (opcional): enlaces a la fuente original
  - video (opcional): video de YouTube que se muestra antes del texto
*/
(function () {
  const C = (q, a, o, e, eEn) => ({ q, a, o, e, en: { e: eEn } });
  const V = (quote, a, o, enLabels, e, eEn) => {
    const word = (quote.match(/\[\[(.+?)\]\]/) || [])[1];
    const labels = {};
    [a, ...o].forEach((opt, i) => { if (enLabels[i]) labels[opt] = enLabels[i]; });
    return { quote, q: `¿Qué significa «${word}»?`, a, o, e, en: { q: `What does “${word}” mean?`, labels, e: eEn } };
  };

  window.YEB_READINGS = [
    // ——————————————————— DESTACADA (se abre por defecto) ———————————————————
    {
      id: "r-steve-jobs", tier: "advanced", level: "B2–C1", minutes: 3,
      title: "Steve Jobs at Stanford (2005)",
      // The full speech, from Stanford's official channel (the text below is a summary for learners)
      video: {
        id: "UF8uR6Z6KLc", start: 0, channel: "Stanford",
        title: { es: "El discurso completo", en: "The full speech" },
        tip: { es: "Video oficial de Stanford (15 min). Activa los subtítulos en inglés y sigue el texto oficial completo con el enlace de abajo.", en: "Stanford's official video (15 min). Turn on English subtitles and follow the full official transcript with the link below." }
      },
      source: {
        note: { es: "Abajo tienes un resumen para estudiantes. El discurso completo está aquí:", en: "Below is a summary for learners. The full speech is here:" },
        links: [
          { label: { es: "Texto completo oficial (Stanford)", en: "Full official transcript (Stanford)" }, url: "https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says" },
          { label: { es: "Video oficial (YouTube)", en: "Official video (YouTube)" }, url: "https://www.youtube.com/watch?v=UF8uR6Z6KLc" }
        ]
      },
      text: [
        "In June 2005, Apple co-founder Steve Jobs gave the commencement speech at Stanford University. Instead of a long lecture, he told the graduates three short stories from his life.",
        "The first story was about connecting the dots. Jobs dropped out of college after six months, but he kept attending the classes that interested him, including calligraphy. Ten years later, that class shaped the beautiful fonts of the first Macintosh. His lesson: you can only connect the dots looking backward, so you have to trust that they will connect in your future.",
        "The second story was about love and loss. At thirty, Jobs was fired from Apple, the company he had started in his parents' garage. It was devastating, but it also freed him to start over. He founded NeXT and Pixar, met his wife and, years later, returned to Apple. His advice: find what you love, and don't settle.",
        "The third story was about death. After he was diagnosed with cancer, Jobs realized that remembering he would die one day was the best tool for making big decisions. Our time is limited, he said, so we shouldn't waste it living someone else's life.",
        "He ended with the farewell message of a magazine he loved as a young man: “Stay hungry. Stay foolish.”"
      ],
      vocab: [
        ["commencement speech", "discurso de graduación", "a speech at a graduation ceremony"],
        ["lecture", "clase magistral, sermón", "a long formal talk"],
        ["drop out (of)", "abandonar los estudios", "to leave school before finishing", "dropped out of"],
        ["connect the dots", "unir los puntos", "to see how different events are related"],
        ["shape", "dar forma, influir", "to have a strong effect on how something develops", "shaped"],
        ["get fired", "ser despedido", "to lose your job because your boss ends it", "fired"],
        ["devastating", "devastador", "extremely sad or shocking"],
        ["start over", "empezar de nuevo", "to begin again from the beginning"],
        ["settle", "conformarse", "to accept something less than you want"],
        ["diagnose", "diagnosticar", "when a doctor identifies an illness", "diagnosed"],
        ["farewell", "despedida", "a goodbye"]
      ],
      comprehension: [
        C("How many stories did Jobs tell?", "Three", ["Two", "Five"], "«He told the graduates three short stories from his life.»", "“He told the graduates three short stories from his life.”"),
        C("Why was the calligraphy class important later?", "It influenced the fonts of the Macintosh", ["It helped him finish college", "It gave him the idea for Pixar"], "«…that class shaped the beautiful fonts of the first Macintosh.»", "“…that class shaped the beautiful fonts of the first Macintosh.”"),
        C("What does “you can only connect the dots looking backward” mean?", "You only understand how events connect after they happen", ["You should plan every step of your life", "You should never think about the past"], "No puedes ver la conexión por adelantado; solo después.", "You can't see the connection in advance; only afterward."),
        C("What happened when Jobs was thirty?", "He was fired from Apple", ["He founded Apple", "He was diagnosed with cancer"], "«At thirty, Jobs was fired from Apple.»", "“At thirty, Jobs was fired from Apple.”"),
        C("What did he do after leaving Apple?", "He founded NeXT and Pixar", ["He went back to college", "He retired"], "«He founded NeXT and Pixar, met his wife and, years later, returned to Apple.»", "“He founded NeXT and Pixar, met his wife and, years later, returned to Apple.”"),
        C("Why is remembering death useful, according to Jobs?", "It helps you make big decisions", ["It makes you work less", "It helps you save money"], "Era «the best tool for making big decisions».", "It was “the best tool for making big decisions”.")
      ],
      vocabulary: [
        V("Steve Jobs gave the [[commencement speech]] at Stanford.", "Discurso de graduación", ["Discurso de inicio de clases", "Discurso político"], ["A graduation speech", "A first-day-of-school speech", "A political speech"], "Commencement = ceremonia de graduación (en EE. UU.).", "Commencement = a graduation ceremony (US)."),
        V("Jobs [[dropped out of]] college after six months.", "Abandonó los estudios", ["Se graduó de", "Se inscribió en"], ["Left before finishing", "Graduated from", "Enrolled in"], "Drop out of school/college = dejar los estudios sin terminar.", "Drop out of school/college = leave before finishing."),
        V("…that class [[shaped]] the beautiful fonts of the first Macintosh.", "Dio forma, influyó en", ["Copió", "Borró"], ["Strongly influenced", "Copied", "Deleted"], "Shape = influir mucho en cómo algo termina siendo.", "Shape = strongly influence how something ends up."),
        V("It was [[devastating]].", "Devastador, muy doloroso", ["Divertido", "Sin importancia"], ["Extremely painful", "Fun", "Unimportant"], "Devastating = que te destruye emocionalmente.", "Devastating = emotionally destroying."),
        V("…it also freed him to [[start over]].", "Empezar de nuevo", ["Terminar", "Rendirse"], ["Begin again", "Finish", "Give up"], "Start over = volver a empezar desde cero.", "Start over = begin again from zero."),
        V("…find what you love, and don't [[settle]].", "No te conformes", ["No te mudes", "No te sientes"], ["Don't accept less", "Don't move house", "Don't sit down"], "Settle (for) = conformarse con algo menos de lo que quieres.", "Settle (for) = accept less than you want."),
        V("He ended with the [[farewell]] message of a magazine.", "Despedida", ["Bienvenida", "Advertencia"], ["Goodbye", "Welcome", "Warning"], "Farewell = adiós, despedida.", "Farewell = goodbye.")
      ]
    },

    // ——————————————————— BASIC ———————————————————
    {
      id: "r-new-job", tier: "basic", level: "A1–A2", minutes: 2,
      title: "Ana's First Day",
      text: [
        "Ana is twenty-two years old. Today is her first day at a small café in Miami. She is very nervous, so she gets up early and arrives at 6:30, thirty minutes before the café opens.",
        "Her boss, Mr. Rivera, gives her a green apron and shows her the coffee machine. “Don't worry,” he says. “Just smile and listen to the customers.”",
        "At seven o'clock the first customer comes in. He wants a large coffee with milk and a chocolate muffin. Ana takes his order, but she gives him a small coffee by mistake. The man laughs and says, “No problem. Small is fine today.”",
        "The morning is busy. Ana makes forty coffees and drops only one cup. At three o'clock her shift ends. Her feet hurt and she is very tired, but she has twenty-five dollars in tips.",
        "On the bus home, Ana calls her mom. “I made a mistake,” she says, “but I'm proud of my first day.”"
      ],
      vocab: [
        ["nervous", "nervioso/a", "worried and a little scared"],
        ["arrive", "llegar", "to get to a place", "arrives"],
        ["apron", "delantal", "clothing you wear over your clothes to keep them clean"],
        ["customer", "cliente", "a person who buys something", "customers"],
        ["take an order", "tomar un pedido", "to write down what a customer wants", "takes his order"],
        ["by mistake", "por error", "accidentally, without wanting to"],
        ["shift", "turno de trabajo", "the hours you work in one day"],
        ["tips", "propinas", "extra money customers give for good service"],
        ["proud", "orgulloso/a", "happy about something you did well"]
      ],
      comprehension: [
        C("What time does Ana arrive at the café?", "At 6:30", ["At seven o'clock", "At three o'clock"], "«She arrives at 6:30, thirty minutes before the café opens.»", "“She arrives at 6:30, thirty minutes before the café opens.”"),
        C("What does Mr. Rivera give her?", "A green apron", ["A coffee machine", "A chocolate muffin"], "«Her boss, Mr. Rivera, gives her a green apron.»", "“Her boss, Mr. Rivera, gives her a green apron.”"),
        C("What mistake does Ana make with the first customer?", "She gives him a small coffee", ["She drops his muffin", "She forgets the milk"], "Él pidió un café grande y ella le dio uno pequeño.", "He ordered a large coffee and she gave him a small one."),
        C("How does the customer react?", "He laughs and says it's no problem", ["He gets angry", "He asks for his money back"], "«The man laughs and says, “No problem.”»", "“The man laughs and says, ‘No problem.’”"),
        C("How much money does she get in tips?", "Twenty-five dollars", ["Forty dollars", "Fifteen dollars"], "«She has twenty-five dollars in tips.» Forty es el número de cafés.", "“She has twenty-five dollars in tips.” Forty is the number of coffees."),
        C("How does Ana feel at the end of the day?", "Tired but proud", ["Sad and angry", "Bored"], "Está cansada, pero dice: «I'm proud of my first day.»", "She's tired, but she says: “I'm proud of my first day.”")
      ],
      vocabulary: [
        V("She is very [[nervous]], so she gets up early.", "Nerviosa", ["Enojada", "Aburrida"], ["Worried and a little scared", "Angry", "Bored"], "Nervous = nerviosa, preocupada.", "Nervous = worried and a little scared."),
        V("Ana [[takes his order]].", "Anota lo que el cliente quiere", ["Le quita algo", "Le da una orden"], ["Writes down what the customer wants", "Takes something away from him", "Gives him a command"], "Take an order = tomar un pedido. Ojo: «order» también puede ser una orden o mandato.", "Take an order = write down what a customer wants. “Order” can also mean a command."),
        V("…she gives him a small coffee [[by mistake]].", "Por error", ["A propósito", "Muy rápido"], ["Accidentally", "On purpose", "Very fast"], "By mistake = sin querer. Lo contrario es «on purpose».", "By mistake = accidentally. The opposite is “on purpose”."),
        V("At three o'clock her [[shift]] ends.", "Su turno de trabajo", ["Su camisa", "Su autobús"], ["Her work hours", "Her shirt", "Her bus"], "Shift = turno. No confundir con «shirt» (camisa).", "Shift = your work hours. Don't confuse it with “shirt”."),
        V("…she has twenty-five dollars in [[tips]].", "Propinas", ["Consejos", "Puntas"], ["Extra money for good service", "Advice", "Ends of something"], "Tip = propina. También puede ser «consejo», pero aquí es dinero.", "Tip = extra money. It can also mean advice, but here it's money."),
        V("I'm [[proud]] of my first day.", "Orgullosa", ["Preocupada", "Avergonzada"], ["Happy about what she did", "Worried", "Embarrassed"], "Be proud of = estar orgulloso de.", "Be proud of = feel happy about something you did.")
      ]
    },
    {
      id: "r-lost-dog", tier: "basic", level: "A2", minutes: 2,
      title: "The Lost Dog",
      text: [
        "On Saturday morning, Tom goes running in the park near his apartment. Next to a bench, he sees a small brown dog. The dog is wet and scared. It has a red collar, but there is no phone number on it.",
        "Tom looks around. Nobody is looking for a dog. “Are you lost, buddy?” he asks. The dog wags its tail and follows him home.",
        "Tom gives the dog some water and a little chicken. Then he takes a photo and makes a sign: FOUND DOG – CALL 555-0147. He puts the sign on trees and in the windows of three stores. He also posts the photo in his neighborhood group online.",
        "Two hours later, his phone rings. It's a girl named Lucy. She is crying. “That's Max! We looked for him all night!”",
        "Lucy and her dad come to Tom's apartment. Max runs to Lucy and jumps into her arms. Her dad wants to give Tom a fifty-dollar reward, but Tom says no. “Just keep his leash on next time,” he says with a smile."
      ],
      vocab: [
        ["bench", "banca, banco (para sentarse)", "a long seat in a park"],
        ["scared", "asustado/a", "afraid"],
        ["collar", "collar (de perro)", "a band around a dog's neck"],
        ["look for", "buscar", "to try to find", "looking for"],
        ["wag its tail", "mover la cola", "when a dog moves its tail because it's happy", "wags its tail"],
        ["sign", "cartel, letrero", "a paper or board with information"],
        ["neighborhood", "vecindario, barrio", "the area where you live"],
        ["reward", "recompensa", "money you give someone for helping you"],
        ["leash", "correa", "a long strap to walk a dog"]
      ],
      comprehension: [
        C("Where does Tom find the dog?", "Next to a bench in the park", ["In front of a store", "Inside his apartment"], "«Next to a bench, he sees a small brown dog.»", "“Next to a bench, he sees a small brown dog.”"),
        C("Why can't Tom call the owner right away?", "There's no phone number on the collar", ["His phone is broken", "The dog has no collar"], "«It has a red collar, but there is no phone number on it.»", "“It has a red collar, but there is no phone number on it.”"),
        C("What does Tom do first at home?", "He gives the dog water and chicken", ["He calls the police", "He takes the dog to a vet"], "«Tom gives the dog some water and a little chicken.»", "“Tom gives the dog some water and a little chicken.”"),
        C("Where does Tom NOT put the sign?", "At the police station", ["On trees", "In store windows"], "Lo pone en árboles, en tiendas y en internet, pero no en la policía.", "He puts it on trees, in stores and online, but not at the police station."),
        C("Who calls Tom?", "A girl named Lucy", ["A store owner", "A police officer"], "«It's a girl named Lucy.»", "“It's a girl named Lucy.”"),
        C("What does Tom do about the reward?", "He doesn't accept it", ["He asks for more money", "He gives it to Lucy"], "«Her dad wants to give Tom a reward, but Tom says no.»", "“Her dad wants to give Tom a reward, but Tom says no.”")
      ],
      vocabulary: [
        V("The dog is wet and [[scared]].", "Asustado", ["Feliz", "Cansado"], ["Afraid", "Happy", "Tired"], "Scared = asustado. Parecido: afraid.", "Scared = afraid."),
        V("Nobody is [[looking for]] a dog.", "Buscando", ["Mirando", "Cuidando"], ["Trying to find", "Looking at", "Taking care of"], "Look for = buscar. Look at = mirar. Look after = cuidar.", "Look for = try to find. Look at = watch. Look after = take care of."),
        V("The dog [[wags its tail]] and follows him home.", "Mueve la cola", ["Muerde la cola", "Esconde la cola"], ["Moves its tail", "Bites its tail", "Hides its tail"], "Wag = mover de lado a lado. Los perros lo hacen cuando están felices.", "Wag = move from side to side. Dogs do it when they're happy."),
        V("Then he takes a photo and makes a [[sign]]…", "Un cartel", ["Una firma", "Una señal de tránsito"], ["A paper with information", "A signature", "A traffic sign"], "Aquí sign = cartel. «Firma» es signature (falso amigo).", "Here sign = a paper with information. A signature is your name written by you."),
        V("Her dad wants to give Tom a fifty-dollar [[reward]].", "Recompensa", ["Multa", "Regalo de cumpleaños"], ["Money for helping", "A fine", "A birthday present"], "Reward = recompensa. Una multa es «a fine».", "Reward = money for helping. Money you pay as a punishment is “a fine”."),
        V("Just keep his [[leash]] on next time.", "Correa", ["Collar", "Comida"], ["A strap to walk a dog", "A band around its neck", "Food"], "Leash = correa. Collar = collar.", "Leash = the strap you hold. Collar = the band on the dog's neck.")
      ]
    },

    // ——————————————————— INTERMEDIATE ———————————————————
    {
      id: "r-miami", tier: "intermediate", level: "B1", minutes: 3,
      title: "Moving to Miami",
      text: [
        "When Camila got a remote job with a company in Chicago, she decided to move from Caracas to Miami. Her English was good on paper: she could read reports and write emails without any problems. But speaking was a different story.",
        "The first weeks were hard. Her rent was higher than she expected, so she found a roommate, Jess, a nurse from Ohio who talked very fast. Every morning Jess asked, “How's it going?” and Camila never knew what to say. She also felt homesick. She missed her family, her friends and, more than anything, her mom's arepas.",
        "At work, the worst part was small talk. Before every video call, her coworkers chatted about the weekend, sports and the weather. Camila understood most of it, but by the time she figured out what to say, the conversation had moved on.",
        "So she made a plan. She listened to podcasts on her way to the gym, wrote down useful phrases and practiced them with Jess in the kitchen. Slowly, she got used to the speed. One Friday, her manager said, “Let's circle back on this on Monday,” and Camila answered, “Sounds good. Have a great weekend!” without thinking twice.",
        "That weekend she ran into a coworker at a coffee shop, and they talked for an hour. For the first time, Miami felt like home."
      ],
      vocab: [
        ["remote job", "trabajo remoto", "a job you do from home or anywhere"],
        ["on paper", "en teoría", "in theory, but maybe not in practice"],
        ["roommate", "compañero/a de piso", "a person you share a home with"],
        ["homesick", "con nostalgia de casa", "sad because you miss your home"],
        ["small talk", "charla ligera", "short, polite conversation about easy topics"],
        ["figure out", "darse cuenta, descifrar", "to understand or find the answer", "figured out"],
        ["move on", "pasar a otra cosa", "to change to a different topic", "moved on"],
        ["get used to", "acostumbrarse a", "to become familiar with something", "got used to"],
        ["circle back", "retomar (un tema)", "to talk about something again later"],
        ["run into", "encontrarse por casualidad", "to meet someone without planning it", "ran into"]
      ],
      comprehension: [
        C("Why did Camila move to Miami?", "She got a remote job", ["She wanted to study nursing", "Her family lived there"], "«When Camila got a remote job… she decided to move.»", "“When Camila got a remote job… she decided to move.”"),
        C("What was Camila's main problem with English?", "Speaking", ["Reading reports", "Writing emails"], "Leía y escribía bien, pero «speaking was a different story».", "She read and wrote well, but “speaking was a different story”."),
        C("Why did she find a roommate?", "The rent was higher than she expected", ["She felt homesick", "Her company asked her to"], "«Her rent was higher than she expected, so she found a roommate.»", "“Her rent was higher than she expected, so she found a roommate.”"),
        C("What happened during small talk?", "The conversation moved on before she knew what to say", ["She didn't understand anything", "Her coworkers ignored her"], "Entendía casi todo, pero cuando sabía qué decir, ya hablaban de otra cosa.", "She understood most of it, but by the time she knew what to say, they'd moved on."),
        C("Which of these was NOT part of her plan?", "Taking classes in Chicago", ["Listening to podcasts", "Practicing phrases with Jess"], "Su plan: podcasts, anotar frases y practicar con Jess.", "Her plan: podcasts, writing down phrases and practicing with Jess."),
        C("How does the story end?", "Miami starts to feel like home", ["She moves back to Caracas", "She quits her job"], "«For the first time, Miami felt like home.»", "“For the first time, Miami felt like home.”")
      ],
      vocabulary: [
        V("Her English was good [[on paper]].", "En teoría (en la práctica, no tanto)", ["Por escrito en un papel", "Perfecto en todo"], ["In theory (not so much in practice)", "Written on a piece of paper", "Perfect at everything"], "On paper = en teoría. Se usa cuando algo parece bueno, pero la realidad es distinta.", "On paper = in theory. Used when something looks good but reality is different."),
        V("She also felt [[homesick]].", "Nostalgia por su casa", ["Enferma en casa", "Aburrida en casa"], ["Sad because she missed home", "Sick at home", "Bored at home"], "Homesick no es estar enfermo: es extrañar tu hogar.", "Homesick isn't being ill: it means missing your home."),
        V("At work, the worst part was [[small talk]].", "Charla ligera (el clima, el fin de semana…)", ["Hablar en voz baja", "Una reunión corta"], ["Light conversation (weather, weekend…)", "Speaking quietly", "A short meeting"], "Small talk = conversación casual antes de hablar de trabajo.", "Small talk = casual conversation before talking about work."),
        V("…by the time she [[figured out]] what to say…", "Descifró, supo", ["Olvidó", "Escribió"], ["Worked out, knew", "Forgot", "Wrote"], "Figure out = llegar a entender o encontrar la respuesta.", "Figure out = come to understand or find the answer."),
        V("Slowly, she [[got used to]] the speed.", "Se acostumbró a", ["Usó", "Odió"], ["Became familiar with", "Used", "Hated"], "Get used to + sustantivo o -ing = acostumbrarse. ¡No es «used to» (solía)!", "Get used to + noun or -ing = become familiar with. Not the same as “used to” (past habit)."),
        V("Let's [[circle back]] on this on Monday.", "Retomar el tema más tarde", ["Dar una vuelta", "Cancelar el tema"], ["Talk about it again later", "Go for a walk around", "Cancel the topic"], "Expresión muy común en el trabajo.", "A very common expression at work."),
        V("That weekend she [[ran into]] a coworker.", "Se encontró por casualidad con", ["Chocó con", "Corrió hacia"], ["Met by chance", "Crashed into", "Ran toward"], "Run into someone = encontrarse sin planearlo.", "Run into someone = meet them without planning it.")
      ]
    },
    {
      id: "r-interview", tier: "intermediate", level: "B1", minutes: 3,
      title: "The Job Interview",
      text: [
        "Diego had been looking for a job for three months when he finally got an email from a hiring manager at a tech company in Austin. They wanted to interview him on Zoom the next Tuesday at 10 a.m.",
        "He prepared for days. He read the job description again and again, practiced his answers out loud and asked his sister to ask him the classic questions: “Tell me about yourself,” “What's your greatest strength?” and the one he hated most, “What's your biggest weakness?”",
        "On Tuesday he woke up early, put on a shirt and tie (and his pajama pants, because nobody would see them) and logged in ten minutes before the interview. Everything was perfect… until his internet froze in the middle of his first answer.",
        "Diego was a nervous wreck. He restarted his router, but nothing happened. Instead of panicking, he called the hiring manager from his phone, apologized and asked if they could reschedule. To his surprise, she laughed. “It happens all the time. How about tomorrow at the same time?”",
        "The second interview went much better. Afterwards, Diego sent a short email to follow up and thank her for her time. A week later, he got the call: he had landed the job. His first decision as a new employee? Buying better internet."
      ],
      vocab: [
        ["hiring manager", "la persona que contrata", "the person who decides who gets the job"],
        ["job description", "descripción del puesto", "a document explaining what a job involves"],
        ["out loud", "en voz alta", "speaking so people can hear"],
        ["strength", "fortaleza, punto fuerte", "something you are good at"],
        ["weakness", "debilidad, punto débil", "something you need to improve"],
        ["log in", "iniciar sesión, conectarse", "to enter a website or app", "logged in"],
        ["freeze", "congelarse, trabarse", "when a screen or connection stops working", "froze"],
        ["nervous wreck", "un manojo de nervios", "a very nervous person"],
        ["reschedule", "reprogramar", "to change the date or time of something"],
        ["follow up", "dar seguimiento", "to contact someone again after a meeting"],
        ["land a job", "conseguir un trabajo", "to get a job you wanted", "landed the job"]
      ],
      comprehension: [
        C("How long had Diego been looking for a job?", "Three months", ["Three weeks", "One year"], "«Diego had been looking for a job for three months.»", "“Diego had been looking for a job for three months.”"),
        C("How did Diego prepare?", "He practiced his answers out loud", ["He bought a new computer", "He visited the office"], "«He practiced his answers out loud» y su hermana le hacía preguntas.", "“He practiced his answers out loud” and his sister asked him questions."),
        C("Which question did Diego hate most?", "What's your biggest weakness?", ["Tell me about yourself", "What's your greatest strength?"], "«…and the one he hated most, “What's your biggest weakness?”»", "“…and the one he hated most, ‘What's your biggest weakness?’”"),
        C("What went wrong in the first interview?", "His internet froze", ["He arrived late", "He forgot his tie"], "«…until his internet froze in the middle of his first answer.»", "“…until his internet froze in the middle of his first answer.”"),
        C("What did Diego do when the problem happened?", "He called the hiring manager and asked to reschedule", ["He ended the call and did nothing", "He sent his sister to the interview"], "En lugar de entrar en pánico, llamó y pidió cambiar la fecha.", "Instead of panicking, he called and asked to change the date."),
        C("What was his first decision as a new employee?", "Buying better internet", ["Buying a new tie", "Moving to Austin"], "Es el chiste del final: «Buying better internet.»", "That's the joke at the end: “Buying better internet.”")
      ],
      vocabulary: [
        V("…he finally got an email from a [[hiring manager]]…", "La persona que decide a quién contratar", ["El dueño de la empresa", "Un compañero de trabajo"], ["The person who decides who to hire", "The owner of the company", "A coworker"], "Hire = contratar. Hiring manager = responsable de contratación.", "Hire = give someone a job. Hiring manager = the person in charge of hiring."),
        V("What's your greatest [[strength]]?", "Fortaleza, punto fuerte", ["Fuerza física", "Estrategia"], ["Something you're good at", "Physical power", "Strategy"], "En una entrevista, strength = una cualidad positiva tuya.", "In an interview, strength = a positive quality you have."),
        V("…until his internet [[froze]].", "Se congeló, se trabó", ["Se enfrió", "Se apagó para siempre"], ["Stopped working for a moment", "Got cold", "Turned off forever"], "Freeze (froze, frozen): cuando la pantalla o la conexión se queda quieta.", "Freeze (froze, frozen): when a screen or connection stops moving."),
        V("Diego was a [[nervous wreck]].", "Un manojo de nervios", ["Un accidente de auto", "Muy tranquilo"], ["Extremely nervous", "A car accident", "Very calm"], "Wreck = restos de un accidente; nervous wreck = alguien muy nervioso.", "Wreck = what's left after a crash; nervous wreck = an extremely nervous person."),
        V("…asked if they could [[reschedule]].", "Cambiar la fecha u hora", ["Cancelar para siempre", "Repetir el horario"], ["Change the date or time", "Cancel forever", "Repeat the schedule"], "Reschedule = programar para otro momento.", "Reschedule = plan for a different time."),
        V("Diego sent a short email to [[follow up]].", "Dar seguimiento", ["Seguir a alguien", "Quejarse"], ["Contact them again", "Follow a person", "Complain"], "Follow up = volver a contactar después de una reunión o entrevista.", "Follow up = contact someone again after a meeting or interview."),
        V("…he had [[landed the job]].", "Consiguió el trabajo", ["Aterrizó en Austin", "Perdió el trabajo"], ["Got the job", "Landed in Austin", "Lost the job"], "Land a job = conseguir el trabajo que querías. Land también es «aterrizar».", "Land a job = get the job you wanted. Land also means a plane arriving.")
      ]
    },

    // ——————————————————— ADVANCED ———————————————————
    {
      id: "r-side-hustle", tier: "advanced", level: "B2–C1", minutes: 4,
      title: "The Side Hustle",
      text: [
        "Sofía had always loved working with clay, but for years it was just a hobby she squeezed in between her full-time accounting job and everything else. That changed during a slow winter, when a friend convinced her to post a few of her mugs online.",
        "To her surprise, they sold out in a weekend. What started as a side hustle quickly took off. Word of mouth did the rest: customers posted photos, influencers shared her shop, and within six months she was shipping orders to twelve countries.",
        "On paper, it was a dream come true. In reality, Sofía was overwhelmed. She spent her evenings glazing, packing and answering emails, and her weekends at the post office. She stopped seeing her friends, slept five hours a night and, eventually, burned out. One morning she simply couldn't get out of bed.",
        "Her sister, a small-business owner herself, gave her some blunt advice: “You don't need more customers. You need fewer things on your plate.” Sofía cut back on custom orders, raised her prices and hired a part-time assistant. She also learned the hardest word in business: no.",
        "Her sales dropped slightly, but her bottom line actually improved, and for the first time in a year she had free weekends. The decision to slow down had paid off. “Growing fast felt amazing,” she says now, “but growing in a way I can sustain feels even better.”"
      ],
      vocab: [
        ["squeeze in", "hacer espacio para algo (con poco tiempo)", "to find time for something when you're busy", "squeezed in"],
        ["side hustle", "negocio o trabajo extra", "a business you do besides your main job"],
        ["sell out", "agotarse", "when every item is sold", "sold out"],
        ["take off", "despegar, tener éxito rápido", "to become successful quickly", "took off"],
        ["word of mouth", "boca en boca", "recommendations from person to person"],
        ["overwhelmed", "abrumado/a", "feeling there is too much to handle"],
        ["burn out", "agotarse (desgaste extremo)", "to become exhausted from too much work", "burned out"],
        ["blunt", "directo/a, sin rodeos", "honest in a way that may sound rude"],
        ["on your plate", "en tu lista de pendientes", "the things you have to deal with"],
        ["cut back on", "reducir", "to do or use less of something", "cut back on"],
        ["bottom line", "ganancia final", "the final profit of a business"],
        ["pay off", "valer la pena, dar resultado", "to bring good results", "paid off"],
        ["sustain", "mantener en el tiempo", "to continue something for a long time"]
      ],
      comprehension: [
        C("What was Sofía's full-time job?", "Accountant", ["Potter", "Influencer"], "Trabajaba en «accounting» (contabilidad); la cerámica era su hobby.", "She worked in accounting; pottery was her hobby."),
        C("Why did she start selling online?", "A friend convinced her", ["She lost her job", "Her sister needed help"], "«A friend convinced her to post a few of her mugs online.»", "“A friend convinced her to post a few of her mugs online.”"),
        C("How did the business mainly grow?", "Through customers recommending it", ["Through paid ads", "Slowly over many years"], "«Word of mouth did the rest.» Creció por recomendaciones.", "“Word of mouth did the rest.” It grew through recommendations."),
        C("What happened after months of working nonstop?", "She burned out", ["She won an award", "She opened a store"], "«…and, eventually, burned out. One morning she simply couldn't get out of bed.»", "“…and, eventually, burned out. One morning she simply couldn't get out of bed.”"),
        C("What did her sister recommend?", "Doing fewer things, not getting more customers", ["Getting more customers", "Closing the business"], "«You don't need more customers. You need fewer things on your plate.»", "“You don't need more customers. You need fewer things on your plate.”"),
        C("What was the result of slowing down?", "Slightly lower sales but higher profit and free weekends", ["Higher sales and less free time", "The business closed"], "Vendió un poco menos, pero ganó más y recuperó sus fines de semana.", "She sold a little less, but earned more and got her weekends back.")
      ],
      vocabulary: [
        V("…a hobby she [[squeezed in]] between her full-time accounting job and everything else.", "Hacía en el poco tiempo libre que tenía", ["Exprimía", "Abandonaba"], ["Fit into her little free time", "Squeezed like an orange", "Gave up"], "Squeeze in = hacer espacio para algo en una agenda llena.", "Squeeze in = make room for something in a busy schedule."),
        V("What started as a [[side hustle]] quickly took off.", "Un negocio extra aparte del trabajo principal", ["Un trabajo de tiempo completo", "Una estafa"], ["A business besides your main job", "A full-time job", "A scam"], "Side hustle = proyecto o negocio paralelo para ganar dinero extra.", "Side hustle = a parallel project to earn extra money."),
        V("What started as a side hustle quickly [[took off]].", "Despegó, tuvo éxito rápido", ["Se quitó", "Fracasó"], ["Became successful fast", "Was removed", "Failed"], "Take off = despegar (un avión) o crecer muy rápido (un negocio).", "Take off = a plane leaving the ground, or a business growing fast."),
        V("[[Word of mouth]] did the rest.", "Recomendaciones de boca en boca", ["Publicidad pagada", "Un discurso"], ["Recommendations from person to person", "Paid advertising", "A speech"], "Word of mouth = la gente se lo recomienda a otra gente.", "Word of mouth = people recommending it to other people."),
        V("In reality, Sofía was [[overwhelmed]].", "Abrumada, superada por todo", ["Emocionada", "Aburrida"], ["Feeling it was too much", "Excited", "Bored"], "Overwhelmed = sentir que hay demasiado que hacer.", "Overwhelmed = feeling there's too much to deal with."),
        V("…slept five hours a night and, eventually, [[burned out]].", "Quedó totalmente agotada", ["Se quemó con el horno", "Se enojó"], ["Became completely exhausted", "Got burned by the oven", "Got angry"], "Burn out = agotamiento físico y mental por exceso de trabajo (burnout).", "Burn out = physical and mental exhaustion from too much work (burnout)."),
        V("Her sister… gave her some [[blunt]] advice…", "Directo, sin rodeos", ["Amable y suave", "Equivocado"], ["Direct and honest", "Kind and gentle", "Wrong"], "Blunt = muy directo, aunque suene duro.", "Blunt = very direct, even if it sounds harsh."),
        V("You need fewer things [[on your plate]].", "Responsabilidades pendientes", ["Comida en el plato", "Platos para lavar"], ["Responsibilities to deal with", "Food on your plate", "Dishes to wash"], "Have a lot on your plate = tener muchas cosas que atender.", "Have a lot on your plate = have many things to deal with."),
        V("…her [[bottom line]] actually improved…", "La ganancia final", ["La última línea de la página", "La calidad"], ["The final profit", "The last line of a page", "The quality"], "Bottom line = lo que queda después de gastos. También: «lo más importante».", "Bottom line = what's left after costs. Also: “the most important point”."),
        V("The decision to slow down had [[paid off]].", "Valió la pena, dio resultado", ["Pagó una deuda", "Le costó dinero"], ["Brought good results", "Paid a debt", "Cost her money"], "Pay off = dar buenos resultados. También puede ser «terminar de pagar una deuda».", "Pay off = bring good results. It can also mean finishing paying a debt.")
      ]
    },
    {
      id: "r-four-day-week", tier: "advanced", level: "B2–C1", minutes: 4,
      title: "The Four-Day Week",
      text: [
        "When Northwind, a mid-sized software company in Denver, announced it would test a four-day workweek, most managers were skeptical. “We'll lose a fifth of our time,” one of them warned. “Something has to give.”",
        "The pilot program ran for six months. Employees kept their full salaries but worked Monday to Thursday. In exchange, the company cut meetings in half, banned emails after 6 p.m. and asked every team to set clear weekly goals.",
        "The results surprised almost everyone. Productivity didn't drop; in some teams it went up. Sick days fell by a third, and turnover, which had been a constant headache, slowed down dramatically. “People stopped spending their Fridays running errands,” said the head of HR. “They came back on Monday rested and focused.”",
        "Not everything went smoothly, though. Customer support struggled to cover Fridays, and some employees admitted they felt more pressure to squeeze five days of work into four. For them, the change nearly backfired. The company eventually solved the problem by rotating support staff, so each person took a different day off.",
        "After the trial, Northwind made the four-day week permanent across the board. The trade-off, according to the CEO, was worth it: “We didn't give our people a gift. We gave them a deadline, and they rose to the challenge.”"
      ],
      vocab: [
        ["skeptical", "escéptico/a", "doubting that something is true or will work"],
        ["something has to give", "algo tiene que ceder", "a situation can't continue without a change or loss"],
        ["pilot program", "programa piloto, de prueba", "a small test before a big change"],
        ["in exchange", "a cambio", "giving one thing to receive another"],
        ["productivity", "productividad", "how much work gets done"],
        ["turnover", "rotación de personal", "how many employees leave and are replaced"],
        ["run errands", "hacer diligencias", "to do small tasks like shopping or going to the bank", "running errands"],
        ["go smoothly", "salir bien, sin problemas", "to happen without problems", "went smoothly"],
        ["backfire", "salir al revés", "to have the opposite result of what you wanted", "backfired"],
        ["across the board", "para todos, en general", "affecting everyone or everything"],
        ["trade-off", "compensación (lo que pierdes a cambio de algo)", "something you give up to get something else"],
        ["rise to the challenge", "estar a la altura del reto", "to succeed when something is difficult", "rose to the challenge"]
      ],
      comprehension: [
        C("How did most managers feel at first?", "Skeptical", ["Excited", "Angry"], "«…most managers were skeptical.»", "“…most managers were skeptical.”"),
        C("What did the company change in exchange for Fridays off?", "Fewer meetings and clearer goals", ["Lower salaries", "Fewer vacation days"], "Recortó reuniones, prohibió correos después de las 6 y pidió metas claras. Los salarios no cambiaron.", "It cut meetings, banned late emails and asked for clear goals. Salaries didn't change."),
        C("What happened to productivity?", "It stayed the same or went up", ["It dropped by a fifth", "Nobody measured it"], "«Productivity didn't drop; in some teams it went up.»", "“Productivity didn't drop; in some teams it went up.”"),
        C("Which team had problems?", "Customer support", ["Human resources", "The managers"], "«Customer support struggled to cover Fridays.»", "“Customer support struggled to cover Fridays.”"),
        C("How did the company fix that problem?", "By rotating support staff's days off", ["By hiring a new team", "By going back to five days"], "«…rotating support staff, so each person took a different day off.»", "“…rotating support staff, so each person took a different day off.”"),
        C("What does the CEO mean by “We gave them a deadline”?", "People had to finish the same work in less time", ["People had to leave the company", "The program was cancelled"], "Un «deadline» es una fecha límite: el mismo trabajo en cuatro días.", "A deadline is a time limit: the same work in four days.")
      ],
      vocabulary: [
        V("…most managers were [[skeptical]].", "Escépticos, con dudas", ["Entusiasmados", "Enfermos"], ["Doubtful", "Excited", "Sick"], "Skeptical = dudar de que algo funcione.", "Skeptical = doubting that something will work."),
        V("“[[Something has to give]].”", "Algo tendrá que ceder o salir perjudicado", ["Alguien tiene que dar un regalo", "Todo seguirá igual"], ["Something will have to change or suffer", "Someone has to give a present", "Everything will stay the same"], "Se dice cuando una situación no puede seguir así sin una pérdida.", "Said when a situation can't continue without a loss."),
        V("The [[pilot program]] ran for six months.", "Programa de prueba", ["Programa para pilotos de avión", "Programa de televisión"], ["A test program", "A program for airline pilots", "A TV show"], "Pilot = prueba piloto antes de un cambio grande.", "Pilot = a trial before a big change."),
        V("…and [[turnover]], which had been a constant headache, slowed down dramatically.", "Rotación de personal", ["Ventas", "Volteretas"], ["Employees leaving and being replaced", "Sales", "Somersaults"], "Turnover = cuánta gente renuncia y hay que reemplazar.", "Turnover = how many people quit and need to be replaced."),
        V("People stopped spending their Fridays [[running errands]].", "Haciendo diligencias", ["Corriendo carreras", "Cometiendo errores"], ["Doing small tasks (bank, shopping…)", "Running races", "Making mistakes"], "Run errands = ir al banco, al súper, al correo… Ojo: errand no es «error».", "Run errands = go to the bank, the store, the post office… Errand is not “error”."),
        V("For them, the change nearly [[backfired]].", "Salió al revés", ["Fue un éxito", "Se incendió"], ["Had the opposite effect", "Was a success", "Caught fire"], "Backfire = tener el efecto contrario al que buscabas.", "Backfire = have the opposite effect of what you wanted."),
        V("Northwind made the four-day week permanent [[across the board]].", "Para todos, en toda la empresa", ["Solo para la junta directiva", "Al otro lado de la mesa"], ["For everyone in the company", "Only for the board of directors", "On the other side of the table"], "Across the board = aplica a todos por igual.", "Across the board = it applies to everyone equally."),
        V("The [[trade-off]], according to the CEO, was worth it…", "Lo que se pierde a cambio de un beneficio", ["Un acuerdo comercial internacional", "Un descuento"], ["What you lose to gain something", "An international trade deal", "A discount"], "Trade-off = equilibrio entre una ventaja y un costo.", "Trade-off = a balance between a benefit and a cost."),
        V("…and they [[rose to the challenge]].", "Estuvieron a la altura del reto", ["Se rindieron", "Subieron una montaña"], ["Succeeded when it was difficult", "Gave up", "Climbed a mountain"], "Rise to the challenge = responder bien ante algo difícil.", "Rise to the challenge = respond well to something difficult.")
      ]
    }

  ];
})();
