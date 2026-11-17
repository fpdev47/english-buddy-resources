/*
  Tema «El posesivo 's» (possessive 's): uso (posesión, relación, tiendas y casas; of para cosas;
  sustantivo + sustantivo) y forma (singular + 's, plural irregular + 's, plural regular + ',
  nombres que terminan en -s → 's o ', nombres que terminan en -z o -x → siempre 's,
  dos personas que comparten algo o cada una lo suyo). Formato: ver data/groups.js.
  Glosario (pasar el cursor o tocar cualquier palabra): data/glossary/posesivo-s.js
*/
(function () {
  const { M, S, T } = window.YEB_X;
  const ASK = (n) => [`(${n}) ¿Cómo debe ir la parte marcada?`, `(${n}) How should the highlighted part be?`];
  const FIND = ["¿Qué parte está mal?", "Which part is wrong?"];
  window.YEB_EXERCISES.push(

    T("posesivo-s", ["El posesivo 's", "Possessive 's"], "A1–A2", ["my father's car, the boys' room, Mr. Gonzalez's office", "my father's car, the boys' room, Mr. Gonzalez's office"], [

      S(["¿'s, of o dos sustantivos juntos?", "'s, of or two nouns together?"], [
        "Personas y animales: 's (my father's car, Sara's mother). Tiendas y casas: at John's, the baker's. Cosas: of (the end of the street). Cosas que siempre van juntas: noun + noun (the car keys).",
        "People and animals: 's (my father's car, Sara's mother). Shops and houses: at John's, the baker's. Things: of (the end of the street). Things that often go together: noun + noun (the car keys)."
      ], [
        M("My ___ car is very old.", "father's", ["father", "fathers", "father of"], ["Posesión de una persona → father's car (el carro de mi papá).", "A person owns it → father's car."], { father: ["Falta el 's: el carro es DE mi papá → my father's car.", "Missing 's: the car belongs to my father → my father's car."] }),
        M("Look! The ___ toys are all over the floor.", "dog's", ["dog", "dogs", "of dog"], ["Los animales también usan 's: the dog's toys.", "Animals take 's too: the dog's toys."]),
        M("Ana is ___ mother.", "Sara's", ["Sara", "of Sara", "Saras"], ["Relación entre personas → Sara's mother (la mamá de Sara).", "Relationship → Sara's mother."], { "of Sara": ["Con personas no se dice «the mother of Sara»: Sara's mother.", "With people we don't say “the mother of Sara”: Sara's mother."] }),
        M("This is ___ computer, not mine.", "Mary's", ["Mary", "the computer of Mary", "Marys"], ["Posesión → Mary's computer.", "Possession → Mary's computer."], { "the computer of Mary": ["Suena a traducción del español. Con personas: Mary's computer.", "Sounds translated from Spanish. With people: Mary's computer."] }),
        M(["Don't call me now. I'm at ___. (en casa de John)", "Don't call me now. I'm at ___. (= at John's house)"], "John's", ["John", "John house", "the John"], ["at John's = en casa de John (no hace falta decir house).", "at John's = at John's house (no need to say house)."], { John: ["«at John» no tiene sentido. Para su casa: at John's.", "“at John” doesn't work. For his house: at John's."] }),
        M("We need bread. I'm going to the ___.", "baker's", ["baker", "bakers'", "bake's"], ["Tiendas: the baker's = la panadería (la tienda del panadero).", "Shops: the baker's = the baker's shop."]),
        M("My tooth hurts. I have an appointment at the ___ at 3.", "dentist's", ["dentist", "dentists", "dentist house"], ["at the dentist's = en el consultorio del dentista. Igual: at the doctor's.", "at the dentist's = at the dentist's office. Same: at the doctor's."]),
        M("We live at ___, near the park.", "the end of the street", ["the street's end", "the end's street", "the street end's"], ["Cosas (no personas) → of: the end of the street.", "Things (not people) → of: the end of the street."], { "the street's end": ["La calle es una cosa: se usa of → the end of the street.", "A street is a thing: use of → the end of the street."] }),
        M("There's a beautiful ___ in the living room.", "picture of the sea", ["sea's picture", "picture's sea", "sea picture's"], ["Cosas → of: a picture of the sea.", "Things → of: a picture of the sea."]),
        M("Love is ___.", "the secret of life", ["life's secret", "the life's secret", "the secret's life"], ["Ideas y cosas → of: the secret of life.", "Ideas and things → of: the secret of life."], { "life's secret": ["La vida no es una persona: the secret of life.", "Life isn't a person: the secret of life."] }),
        M(["I can't find ___. (las llaves del carro)", "I can't find ___. (the keys for the car)"], "the car keys", ["the keys's car", "the key's car", "the car key's"], ["Cosas que siempre van juntas: noun + noun → the car keys.", "Things that often go together: noun + noun → the car keys."]),
        M(["We meet in the ___ every Friday. (el centro de la ciudad)", "We meet in the ___ every Friday. (the center of the city)"], "city center", ["city's center of", "center city", "center's city"], ["noun + noun: the city center. El primero describe al segundo.", "noun + noun: the city center. The first noun describes the second."])
      ]),

      S(["¿'s o solo '?", "'s or just '?"], [
        "Singular: + 's (the cat's collar). Plural irregular sin -s: + 's (the children's room). Plural con -s: solo ' (the boys' room). Nombre que termina en -s: 's o ' (Chris's / Chris'). Nombre que termina en -z o -x: SIEMPRE 's (Mr. Gonzalez's, Max's).",
        "Singular: + 's (the cat's collar). Irregular plural without -s: + 's (the children's room). Plural ending in -s: just ' (the boys' room). Name ending in -s: 's or ' (Chris's / Chris'). Name ending in -z or -x: ALWAYS 's (Mr. Gonzalez's, Max's)."
      ], [
        M(["This is my ___ notebook. (one teacher)", "This is my ___ notebook. (one teacher)"], "teacher's", ["teachers'", "teachers", "teacher"], ["Un solo profesor → singular + 's: teacher's.", "One teacher → singular + 's: teacher's."], { "teachers'": ["teachers' es de VARIOS profesores. Aquí es uno: teacher's.", "teachers' means SEVERAL teachers. Here it's one: teacher's."] }),
        M(["The ___ lounge is on the second floor. (all the teachers)", "The ___ lounge is on the second floor. (all the teachers)"], "teachers'", ["teacher's", "teachers's", "teachers"], ["Plural que termina en -s → solo apóstrofo: the teachers' lounge.", "Plural ending in -s → just an apostrophe: the teachers' lounge."], { "teachers's": ["Si el plural ya termina en -s, no se agrega otra s: teachers'.", "If the plural already ends in -s, don't add another s: teachers'."] }),
        M("The cat's ___ is blue.", "collar", ["collars'", "collar's", "collars's"], ["the cat's collar = el collar del gato. El 's va en el dueño (cat), no en la cosa.", "the cat's collar. The 's goes on the owner (cat), not on the thing."]),
        M(["My grandma reads a ___ story every night. (children)", "My grandma reads a ___ story every night. (children)"], "children's", ["childrens'", "childrens", "children'"], ["children es plural irregular (sin -s) → + 's: children's.", "children is an irregular plural (no -s) → + 's: children's."], { "childrens'": ["«childrens» no existe: children ya es plural. → children's.", "“childrens” doesn't exist: children is already plural. → children's."] }),
        M(["Excuse me, where is the ___ room? (men)", "Excuse me, where is the ___ room? (men)"], "men's", ["mens'", "mens", "men'"], ["men es plural irregular → men's room (baño de hombres).", "men is an irregular plural → men's room."]),
        M(["She always listens to ___ problems. (people)", "She always listens to ___ problems. (people)"], "people's", ["peoples'", "people'", "peoples"], ["people es plural irregular → people's.", "people is an irregular plural → people's."]),
        M(["The ___ restroom is on the left. (boys)", "The ___ restroom is on the left. (boys)"], "boys'", ["boy's", "boys's", "boys"], ["boys termina en -s → solo ': the boys' restroom.", "boys ends in -s → just ': the boys' restroom."], { "boy's": ["boy's es de UN niño. Es el baño de los niños: boys'.", "boy's is ONE boy. It's the boys' restroom: boys'."] }),
        M(["Please check the ___ passports. (tourists)", "Please check the ___ passports. (tourists)"], "tourists'", ["tourist's", "tourists's", "tourists"], ["Plural con -s → tourists'.", "Plural ending in -s → tourists'."]),
        M(["¿Cuál es correcta? «___ computer» (Chris)", "Which is correct? “___ computer” (Chris)"], "Chris's y Chris' (las dos)", ["Solo Chris's", "Solo Chris'", "Chriss"], ["Nombres que terminan en -s: las dos formas están bien (Chris's es más común).", "Names ending in -s: both are correct (Chris's is more common)."]),
        M("Douglas lives next to us. ___ house is huge.", "Douglas's", ["Douglass", "Dougla's", "Douglases"], ["Termina en -s → Douglas's (o Douglas').", "Ends in -s → Douglas's (or Douglas')."]),
        M(["Mr. Gonzalez is my boss. ___ office is on the fifth floor.", "Mr. Gonzalez is my boss. ___ office is on the fifth floor."], "Mr. Gonzalez's", ["Mr. Gonzalez'", "Mr. Gonzalezs", "Mr. Gonzale's"], ["Termina en -z, no en -s: SIEMPRE 's → Gonzalez's.", "It ends in -z, not -s: ALWAYS 's → Gonzalez's."], { "Mr. Gonzalez'": ["El apóstrofo solo es opcional con -s. Con -z va siempre 's: Gonzalez's.", "The apostrophe alone is only for -s. With -z it's always 's: Gonzalez's."] }),
        M("Inez is my best friend. Tomorrow is ___ birthday.", "Inez's", ["Inez'", "Inezs", "Ine's"], ["Inez termina en -z → Inez's (nunca Inez').", "Inez ends in -z → Inez's (never Inez')."], { "Inez'": ["Con -z no se puede dejar solo el apóstrofo: Inez's.", "With -z you can't use just the apostrophe: Inez's."] }),
        M("Which one is correct?", "Mrs. Rodriguez's house", ["Mrs. Rodriguez' house", "Mrs. Rodriguezs house", "Mrs. Rodriguez house's"], ["Rodriguez termina en -z → siempre 's: Rodriguez's.", "Rodriguez ends in -z → always 's: Rodriguez's."], { "Mrs. Rodriguez' house": ["Parece correcto, pero el apóstrofo solo va con -s. -z → Rodriguez's.", "It looks right, but the apostrophe alone is only for -s. -z → Rodriguez's."] }),
        M("Sofia Diaz is a nurse. ___ shift starts at 7 a.m.", "Diaz's", ["Diaz'", "Diazs", "Diaz"], ["-z → 's: Diaz's.", "-z → 's: Diaz's."], { "Diaz'": ["Diaz termina en z, no en s: Diaz's.", "Diaz ends in z, not s: Diaz's."] }),
        M("Max is my brother. ___ dog sleeps all day.", "Max's", ["Max'", "Maxs", "Ma's"], ["Igual que con -z: -x lleva siempre 's → Max's.", "Like -z: -x always takes 's → Max's."]),
        M(["___ car is red. (Ana y Tom tienen UN carro juntos)", "___ car is red. (Ana and Tom have ONE car together)"], "Ana and Tom's", ["Ana's and Tom's", "Ana's and Tom", "Ana and Tom"], ["Una cosa compartida → 's solo en el último nombre: Ana and Tom's car.", "One shared thing → 's only after the last name: Ana and Tom's car."], { "Ana's and Tom's": ["Así serían DOS carros (uno de cada uno). Comparten uno: Ana and Tom's.", "That means TWO cars (one each). They share one: Ana and Tom's."] }),
        M(["___ cars are red. (cada uno tiene su carro)", "___ cars are red. (each one has a car)"], "Ana's and Tom's", ["Ana and Tom's", "Anas and Toms", "Ana and Toms'"], ["Cada uno tiene lo suyo → 's en cada nombre: Ana's and Tom's cars.", "Each has their own → 's after each name: Ana's and Tom's cars."])
      ]),

      S(["Encuentra el error", "Find the mistake"], [
        "Cada frase tiene un error con el posesivo. Toca la parte equivocada.",
        "Each sentence has one mistake with the possessive. Tap the wrong part."
      ], [
        M(FIND[0], "My father car", ["is", "very old"], ["Falta el 's: My father's car.", "Missing 's: My father's car."]),
        M(FIND[0], "the baker", ["I'm going to", "for some bread"], ["Tienda → the baker's (la panadería).", "Shop → the baker's."]),
        M(FIND[0], "The childrens' room", ["is", "upstairs"], ["children ya es plural → The children's room.", "children is already plural → The children's room."]),
        M(FIND[0], "Mr. Martinez' office", ["is on", "the second floor"], ["-z → siempre 's: Mr. Martinez's office.", "-z → always 's: Mr. Martinez's office."]),
        M(FIND[0], "The teachers's lounge", ["is closed", "today"], ["Plural con -s → solo ': The teachers' lounge.", "Plural ending in -s → just ': The teachers' lounge."]),
        M(FIND[0], "Ana's and Tom's car", ["They share one car.", "is red"], ["Si comparten uno → Ana and Tom's car.", "If they share one → Ana and Tom's car."]),
        M(FIND[0], "at Sofia", ["We're having dinner", "tonight"], ["En casa de Sofía → at Sofia's.", "At Sofia's house → at Sofia's."]),
        M(FIND[0], "the dog of Peter", ["Is this"], ["Con personas: Peter's dog.", "With people: Peter's dog."]),
        M(FIND[0], "The womens' bathroom", ["is on", "the left"], ["women es plural irregular → The women's bathroom.", "women is an irregular plural → The women's bathroom."]),
        M(FIND[0], "Sara brother", ["Peter is"], ["Relación → Sara's brother.", "Relationship → Sara's brother."]),
        M(FIND[0], "the street's end", ["We live at", "near the park"], ["Cosas → of: the end of the street.", "Things → of: the end of the street."]),
        M(FIND[0], "Inez' phone", ["is", "on the table"], ["-z → Inez's phone (no Inez').", "-z → Inez's phone (not Inez')."])
      ].map((it, i) => Object.assign(it, {
        quote: [
          "My father car is very old.",
          "I'm going to the baker for some bread.",
          "The childrens' room is upstairs.",
          "Mr. Martinez' office is on the second floor.",
          "The teachers's lounge is closed today.",
          "They share one car. Ana's and Tom's car is red.",
          "We're having dinner at Sofia tonight.",
          "Is this the dog of Peter?",
          "The womens' bathroom is on the left.",
          "Peter is Sara brother.",
          "We live at the street's end, near the park.",
          "Inez' phone is on the table."
        ][i],
        en: Object.assign(it.en || {}, { q: FIND[1] })
      }))),

      S(["Historia: el sábado de Lucas", "Story: Lucas's Saturday"], [
        "Lee la historia (en presente simple). Algunas partes marcadas están bien y otras tienen un error. Toca un círculo para ir a su pregunta y elige cómo debe ir.",
        "Read the story (in the present simple). Some highlighted parts are right and some have a mistake. Tap a circle to go to its question and choose how it should be."
      ], [
        M(ASK(1), "the baker's", ["the baker", "the bakers'"], ["Está bien: tienda → the baker's.", "It's right: shop → the baker's."]),
        M(ASK(2), "his grandmother's house", ["his grandmother house", "the house of his grandmother's"], ["Error: falta el 's → his grandmother's house.", "Mistake: missing 's → his grandmother's house."]),
        M(ASK(3), "Lucas's grandmother", ["Lucas grandmother", "Luca's grandmother"], ["Está bien: Lucas termina en -s, así que Lucas's (o Lucas') está bien.", "It's right: Lucas ends in -s, so Lucas's (or Lucas') is fine."]),
        M(ASK(4), "Mr. Gonzalez's shop", ["Mr. Gonzalez' shop", "Mr. Gonzalez shop"], ["Error: Gonzalez termina en -z → siempre 's: Mr. Gonzalez's shop.", "Mistake: Gonzalez ends in -z → always 's: Mr. Gonzalez's shop."]),
        M(ASK(5), "The children's toys", ["The childrens' toys", "The childrens toys"], ["Error: children ya es plural → The children's toys.", "Mistake: children is already plural → The children's toys."]),
        M(ASK(6), "the end of the street", ["the street's end", "the end street's"], ["Está bien: cosas → of.", "It's right: things → of."]),
        M(ASK(7), "the girls' bikes", ["the girl's bikes", "the girls's bikes"], ["Está bien: son dos niñas (plural con -s) → the girls' bikes.", "It's right: two girls (plural with -s) → the girls' bikes."]),
        M(ASK(8), "the car keys", ["the keys's car", "the car's keys of"], ["Está bien: noun + noun → the car keys.", "It's right: noun + noun → the car keys."]),
        M(ASK(9), "Ana and Tom's house", ["Ana's and Tom's house", "Ana and Toms' house"], ["Error: viven juntos y tienen UNA casa → Ana and Tom's house.", "Mistake: they live together and have ONE house → Ana and Tom's house."]),
        M(ASK(10), "the dentist's", ["the dentist", "the dentists's"], ["Está bien: consultorio → at the dentist's.", "It's right: office → at the dentist's."]),
        M(ASK(11), "his friend's party", ["his friend party", "his friends's party"], ["Error: falta el 's → his friend's party.", "Mistake: missing 's → his friend's party."])
      ].map((it, i) => Object.assign(it, {
        quote: [
          "In the morning, he buys fresh bread at [[the baker's]].",
          "Then he walks to [[his grandmother house]] for breakfast.",
          "[[Lucas's grandmother]] is eighty years old.",
          "After breakfast, Lucas goes to [[Mr. Gonzalez' shop]].",
          "[[The childrens' toys]] are always on the top shelf.",
          "The shop is at [[the end of the street]].",
          "Carla has two daughters, and [[the girls' bikes]] are always broken.",
          "Then he looks for [[the car keys]].",
          "They live together, and [[Ana's and Tom's house]] has a big garden.",
          "In the evening, Lucas has an appointment at [[the dentist's]].",
          "At night, he goes to [[his friend party]]."
        ][i]
      })), {
        story: "Every Saturday, Lucas has a busy day. In the morning, he buys fresh bread at (1) the baker's. Then he walks to (2) his grandmother house for breakfast. (3) Lucas's grandmother is eighty years old, but she still makes the best pancakes in town.\n\nAfter breakfast, Lucas goes to (4) Mr. Gonzalez' shop. Mr. Gonzalez sells toys, and Lucas always buys something for his little cousins. (5) The childrens' toys are always on the top shelf. The shop is at (6) the end of the street, next to a small park.\n\nAt noon, Lucas helps his sister Carla. Carla has two daughters, and (7) the girls' bikes are always broken. Lucas fixes them. Then he looks for (8) the car keys, because Carla never remembers where they are.\n\nIn the afternoon, he visits his friends Ana and Tom. They live together, and (9) Ana's and Tom's house has a big garden. In the evening, Lucas has an appointment at (10) the dentist's. At night, he goes to (11) his friend party. He gets home very late, tired but happy."
      }),

      S(["Vocabulario nuevo", "New vocabulary"], [
        "Palabras que aparecen con el posesivo. ¿Qué significa la palabra marcada?",
        "Words that often appear with the possessive. What does the highlighted word mean?"
      ], [
        M("¿Qué significa?", "el collar (de una mascota)", ["un collar de joyas", "la comida", "la cama"], ["collar = collar de perro o gato. Un collar de joyas es a necklace.", "collar = a pet's collar. Jewelry is a necklace."]),
        M("¿Qué significa?", "la sala de profesores", ["el salón de clases", "la oficina del director", "la cafetería"], ["lounge = sala para descansar. teachers' lounge = sala de profesores.", "lounge = a room to relax. teachers' lounge."]),
        M("¿Qué significa?", "el baño (en un lugar público)", ["el cuarto de descanso", "la sala de espera", "el vestidor"], ["restroom = baño público (EE. UU.). En casa: bathroom.", "restroom = public bathroom (US). At home: bathroom."]),
        M("¿Qué significa?", "la carnicería", ["la panadería", "el carnicero", "la frutería"], ["the butcher's = la carnicería (la tienda del carnicero).", "the butcher's = the butcher's shop."], { "el carnicero": ["El carnicero es the butcher. Con 's es su tienda: the butcher's.", "The person is the butcher. With 's it's the shop: the butcher's."] }),
        M("¿Qué significa?", "la peluquería", ["el peluquero", "el salón de fiestas", "la farmacia"], ["the hairdresser's = la peluquería.", "the hairdresser's = the hair salon."]),
        M("¿Qué significa?", "la farmacia (inglés británico)", ["la química", "el laboratorio", "el hospital"], ["the chemist's = la farmacia en el Reino Unido. En EE. UU.: the pharmacy / the drugstore.", "the chemist's = UK pharmacy. In the US: the pharmacy / the drugstore."]),
        M("¿Qué significa?", "la cuenta de ahorros (de los niños)", ["el cuento de los niños", "el banco infantil", "el dinero del papá"], ["savings account = cuenta de ahorros. the kids' savings account.", "savings account. the kids' savings account."]),
        M("¿Qué significa?", "renunciar", ["avisar", "pedir vacaciones", "despedir"], ["to quit = renunciar a un trabajo.", "to quit = leave a job."])
      ].map((it, i) => Object.assign(it, {
        quote: [
          "The cat's [[collar]] is blue.",
          "The teachers' [[lounge]] has a coffee machine.",
          "Excuse me, where is the [[restroom]]?",
          "I buy meat at [[the butcher's]].",
          "She gets a haircut at [[the hairdresser's]] every month.",
          "In London, you buy medicine at [[the chemist's]].",
          "The kids' [[savings account]] is at my bank.",
          "If you want to [[quit]], give your boss two weeks' notice."
        ][i],
        en: Object.assign(it.en || {}, { q: "What does it mean?" })
      }))),

      S(["Frases nativas con 's", "Native expressions with 's"], [
        "Así hablan los nativos. ¿Qué significa la expresión marcada?",
        "This is how native speakers talk. What does the highlighted expression mean?"
      ], [
        M("¿Qué significa?", "en casa de mi mamá", ["con la mamá de mí", "en la tienda de mi mamá", "en un hotel con mi mamá"], ["at my mom's = en casa de mi mamá (sin decir house).", "at my mom's = at my mom's house."]),
        M("¿Qué significa?", "muy cerca, a un paso", ["muy lejos", "detrás de una piedra", "en la esquina"], ["a stone's throw = a la distancia de una pedrada: muy cerca.", "a stone's throw = very close."]),
        M("¿Qué significa?", "¡Por el amor de Dios!", ["¡Gracias a Dios!", "¡Qué cielo tan bonito!", "¡Buena suerte!"], ["for heaven's sake = ¡por Dios! (cuando algo te molesta).", "for heaven's sake = expresses annoyance."]),
        M("¿Qué significa?", "un aviso con dos semanas de anticipación", ["dos semanas de vacaciones", "una nota de dos semanas", "un sueldo de dos semanas"], ["two weeks' notice: plural con -s → weeks'. Es el aviso antes de renunciar.", "two weeks' notice: plural with -s → weeks'."]),
        M("¿Qué significa?", "la mayor parte", ["la parte del león", "la parte más pequeña", "nada"], ["the lion's share = la mayor parte (como el león, que come primero).", "the lion's share = the biggest part."]),
        M("¿Qué significa?", "Nadie lo sabe", ["Todos lo saben", "Es fácil de adivinar", "Es un secreto mío"], ["It's anyone's guess = cualquiera puede adivinar; nadie lo sabe con seguridad.", "It's anyone's guess = nobody knows."]),
        M("¿Qué significa?", "ya no sé qué hacer (estoy desesperado)", ["estoy muy feliz", "estoy al final de la calle", "estoy muy cansado de caminar"], ["at my wits' end = ya no sé qué hacer. wits es plural → wits'.", "at my wits' end = I don't know what to do. wits is plural → wits'."]),
        M("¿Qué significa?", "el menú de hoy", ["el menú de ayer", "el menú del día siguiente", "un menú viejo"], ["today's menu = el menú de hoy. También: yesterday's news, tomorrow's meeting.", "today's menu. Also: yesterday's news, tomorrow's meeting."]),
        M("¿Qué significa?", "a distancia, sin mucha confianza", ["muy cerca, con cariño", "de la mano", "con un abrazo"], ["keep someone at arm's length = mantener distancia de alguien.", "keep someone at arm's length = keep your distance."]),
        M("¿Qué significa?", "dentro de una semana", ["hace una semana", "toda la semana", "cada semana"], ["in a week's time = dentro de una semana.", "in a week's time = one week from now."]),
        M("¿Cuál se escribe bien?", "Mother's Day", ["Mothers Day", "Mothers' Day", "Mother Day's"], ["El Día de la Madre: Mother's Day. Igual: Father's Day, Valentine's Day.", "Mother's Day. Same: Father's Day, Valentine's Day."]),
        M("¿Qué significa?", "una vida muy dura", ["la vida de un perro feliz", "una vida divertida", "una vida larga"], ["It's a dog's life = es una vida dura y aburrida.", "It's a dog's life = life is hard and boring."])
      ].map((it, i) => Object.assign(it, {
        quote: [
          "I'm staying [[at my mom's]] this weekend.",
          "The pharmacy is [[a stone's throw]] from my house.",
          "[[For heaven's sake]], turn off the TV!",
          "I want to quit, so I give my boss [[two weeks' notice]].",
          "My boss always gets [[the lion's share]] of the money.",
          "Who wins the game tonight? [[It's anyone's guess]].",
          "This printer never works. I'm [[at my wits' end]].",
          "[[Today's menu]] has fish and rice.",
          "He lies a lot, so I [[keep him at arm's length]].",
          "See you [[in a week's time]].",
          "We always buy flowers for [[Mother's Day]].",
          "I work twelve hours a day, every day. [[It's a dog's life]]."
        ][i],
        en: Object.assign(it.en || {}, { q: i === 10 ? "Which one is spelled correctly?" : "What does it mean?" })
      })))
    ])
  );
})();
