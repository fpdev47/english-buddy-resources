/*
  Banco de ejercicios de Your English Buddy.
  Cada tema tiene secciones y cada sección tiene ejercicios (items):
  - Opción múltiple: { q: "Frase con ___", a: "respuesta correcta", o: ["distractor", ...], e: "explicación breve" }
    Las opciones se mezclan solas; escribe siempre la correcta en `a`.
  - Escribir: { type: "write", q: "...", a: ["respuesta", "otra forma válida"], e: "..." }
    Se aceptan mayúsculas o minúsculas, guiones o espacios y signos de puntuación distintos.
  - quote (opcional): frase original que se muestra encima de la pregunta.
  - story (opcional, en la sección): texto que se muestra antes de las preguntas, con marcas (1), (2)...
*/
window.YEB_EXERCISES = [
  {
    id: "pronombres-objeto",
    title: "Pronombres objeto",
    level: "A1–A2",
    text: "me, you, him, her, it, us, them",
    sections: [
      {
        title: "Personas",
        instructions: "Elige el pronombre que recibe la acción.",
        items: [
          { q: "My grandmother lives alone, so I visit ___ every Sunday.", a: "her", o: ["she", "hers", "herself"], e: "«Her» es el objeto que reemplaza a «my grandmother». «She» solo funciona como sujeto." },
          { q: "Mr. Lopez is a great teacher. All the students like ___.", a: "him", o: ["he", "his", "himself"], e: "Después del verbo «like» va el objeto: «him»." },
          { q: "We're lost! Can you help ___?", a: "us", o: ["we", "our", "ours"], e: "Después de «help» va el objeto: «us»." },
          { q: "I don't know your cousins. Can you introduce me to ___?", a: "them", o: ["they", "their", "theirs"], e: "Después de la preposición «to» va el objeto plural: «them»." },
          { q: "Is that Sofia? I can't see ___ very well from here.", a: "her", o: ["she", "hers", "herself"], e: "«See» necesita un objeto: «her» reemplaza a Sofia." },
          { q: "My boss called ___ this morning, but I didn't answer.", a: "me", o: ["I", "my", "mine"], e: "La persona que recibe la llamada es el objeto: «me»." },
          { q: "Leo forgot his keys, so I gave ___ mine.", a: "him", o: ["he", "his", "himself"], e: "«Give someone something»: la persona que recibe va en objeto, «him»." },
          { q: "The kids are asleep. Please don't wake ___ up.", a: "them", o: ["they", "their", "themselves"], e: "«Them» reemplaza a «the kids» como objeto de «wake up»." },
          { q: "Hi, Carla! It's so nice to see ___ again.", a: "you", o: ["your", "yours", "yourself"], e: "«You» es igual como sujeto y como objeto." },
          { q: "You and Daniel are my best friends. I'm going to miss ___ both.", a: "you", o: ["your", "yours", "yourselves"], e: "Para «tú y Daniel» se usa «you» (plural): «miss you both»." }
        ]
      },
      {
        title: "Cosas y animales",
        instructions: "Elige «it» (una cosa) o «them» (varias).",
        items: [
          { q: "I bought a new phone, but I don't like ___.", a: "it", o: ["them", "him", "its"], e: "Una sola cosa (a phone) → «it»." },
          { q: "These shoes are too small. I'm going to return ___.", a: "them", o: ["it", "they", "their"], e: "«Shoes» es plural → «them»." },
          { q: "Where's my coffee? I left ___ on the table.", a: "it", o: ["them", "its", "he"], e: "Una cosa (my coffee) → «it»." },
          { q: "We have two cats. My daughter feeds ___ every morning.", a: "them", o: ["it", "they", "their"], e: "Dos gatos → plural → «them»." },
          { q: "This song is great! Can you play ___ again?", a: "it", o: ["them", "its", "her"], e: "«This song» es una sola cosa → «it»." },
          { q: "I can't find my glasses. Have you seen ___?", a: "them", o: ["it", "they", "its"], e: "En inglés «glasses» (lentes) siempre es plural → «them»." },
          { q: "The movie was long, but we enjoyed ___.", a: "it", o: ["them", "its", "him"], e: "«The movie» es singular → «it»." },
          { q: "I love strawberries. I eat ___ every day.", a: "them", o: ["it", "they", "their"], e: "«Strawberries» es plural → «them»." }
        ]
      },
      {
        title: "Después de verbos y preposiciones",
        instructions: "Después de un verbo o de una preposición (for, with, to, at...) va el pronombre objeto.",
        items: [
          { q: "This gift is for ___. Happy birthday, Laura!", a: "you", o: ["your", "yours", "yourself"], e: "Después de «for» va el objeto: «for you»." },
          { q: "Come with ___! We're going to the beach.", a: "us", o: ["we", "our", "ours"], e: "Después de «with» va el objeto: «with us»." },
          { q: "Look at ___! He's dancing on the table.", a: "him", o: ["he", "his", "himself"], e: "Después de «at» va el objeto: «look at him»." },
          { q: "I'm angry with Marta. I'm not talking to ___.", a: "her", o: ["she", "hers", "herself"], e: "Después de «to» va el objeto: «to her»." },
          { q: "Our neighbors are very noisy. We often complain about ___.", a: "them", o: ["they", "their", "theirs"], e: "Después de «about» va el objeto plural: «about them»." },
          { q: "Can you sit next to ___? I want to show you something.", a: "me", o: ["I", "my", "mine"], e: "Después de «next to» va el objeto: «next to me»." },
          { q: "Tell ___ the truth, please. I need to know.", a: "me", o: ["I", "my", "myself"], e: "«Tell someone something»: la persona va en objeto, «tell me»." },
          { q: "Paul sent ___ a message, but she didn't reply.", a: "her", o: ["she", "hers", "herself"], e: "La persona que recibe el mensaje es el objeto: «her»." },
          { q: "Between you and ___, I don't like the new manager.", a: "me", o: ["I", "my", "mine"], e: "Después de «between» va el objeto: «between you and me»." },
          { q: "Ask Tom and Lisa. Ask ___, they know the answer.", a: "them", o: ["they", "their", "theirs"], e: "Después de «ask» va el objeto plural: «them»." }
        ]
      },
      {
        title: "¿Sujeto u objeto?",
        instructions: "Decide si la oración necesita un sujeto (I, he, she, we, they) o un objeto (me, him, her, us, them).",
        items: [
          { q: "___ and I went to the cinema last night.", a: "She", o: ["Her", "Hers"], e: "Quien hace la acción es el sujeto: «She and I went»." },
          { q: "The teacher gave Sam and ___ a good grade.", a: "me", o: ["I", "myself"], e: "Truco: quita «Sam and» → «gave me a good grade»." },
          { q: "My parents? ___ are coming to dinner tonight.", a: "They", o: ["Them", "Their"], e: "Es el sujeto del verbo «are coming»: «They»." },
          { q: "Do you want to come with Ana and ___?", a: "me", o: ["I", "mine"], e: "Después de «with» va el objeto. Truco: «come with me»." },
          { q: "___ loves pizza more than anyone.", a: "He", o: ["Him", "His"], e: "Hace la acción de «loves»: sujeto «He»." },
          { q: "Kevin and ___ are in the same class.", a: "I", o: ["me", "my"], e: "Es parte del sujeto. Truco: quita «Kevin and» → «I am in the same class»." },
          { q: "My parents called my brother and ___ last night.", a: "me", o: ["I", "myself"], e: "Recibe la llamada: objeto. Truco: «called me»." },
          { q: "Who broke the window? — Not ___!", a: "me", o: ["my", "mine"], e: "En respuestas cortas se usa el objeto: «Not me!»." }
        ]
      }
    ]
  },

  {
    id: "numeros",
    title: "Números",
    level: "A1–B1",
    text: "Años, precios y teléfonos de dos en dos",
    sections: [
      {
        title: "Años de dos en dos",
        instructions: "Los años se dividen en dos pares: 19 | 84 → nineteen eighty-four. Escribe cómo se dicen.",
        items: [
          { type: "write", q: "1984", a: ["nineteen eighty-four"], e: "19 | 84 → nineteen eighty-four." },
          { type: "write", q: "1776", a: ["seventeen seventy-six"], e: "17 | 76 → seventeen seventy-six." },
          { type: "write", q: "1999", a: ["nineteen ninety-nine"], e: "19 | 99 → nineteen ninety-nine." },
          { type: "write", q: "1492", a: ["fourteen ninety-two"], e: "14 | 92 → fourteen ninety-two." },
          { type: "write", q: "1905", a: ["nineteen oh five", "nineteen o five", "nineteen oh-five"], e: "Si el segundo par empieza con 0, el 0 se dice «oh»: nineteen oh five." },
          { type: "write", q: "1800", a: ["eighteen hundred"], e: "Si termina en 00 se dice «hundred»: eighteen hundred." },
          { q: "¿Cómo se dice 1960?", a: "nineteen sixty", o: ["one thousand nine sixty", "nineteen six zero", "nine sixty"], e: "19 | 60 → nineteen sixty." },
          { q: "¿Cómo se dice 2008?", a: "two thousand eight", o: ["twenty eight", "two zero zero eight", "two thousands eight"], e: "Del 2000 al 2009 se usa «two thousand…» (también «two thousand and eight» en británico)." },
          { type: "write", q: "2026", a: ["twenty twenty-six", "two thousand twenty-six", "two thousand and twenty-six"], e: "Lo más común es de dos en dos: 20 | 26 → twenty twenty-six." },
          { q: "¿Cuál de estas NO es una forma correcta de decir 2015?", a: "two zero fifteen", o: ["twenty fifteen", "two thousand fifteen"], e: "2015 se dice «twenty fifteen» o «two thousand (and) fifteen»." }
        ]
      },
      {
        title: "Otros números en pares",
        instructions: "Habitaciones, vuelos, direcciones, precios y horas también se dicen de dos en dos.",
        items: [
          { type: "write", q: "Room 1215 (habitación)", a: ["twelve fifteen"], e: "12 | 15 → twelve fifteen." },
          { type: "write", q: "Flight 2471 (vuelo)", a: ["twenty-four seventy-one"], e: "24 | 71 → twenty-four seventy-one." },
          { type: "write", q: "3450 Oak Street (dirección)", a: ["thirty-four fifty"], e: "34 | 50 → thirty-four fifty Oak Street." },
          { q: "¿Cómo se dice el precio $4.75 de forma natural?", a: "four seventy-five", o: ["forty-seven five", "four hundred seventy-five", "four seven five"], e: "4 | 75 → four seventy-five (o «four dollars and seventy-five cents»)." },
          { q: "¿Cómo se dice la hora 7:45?", a: "seven forty-five", o: ["seventy-four five", "seven four five", "seven hundred forty-five"], e: "7 | 45 → seven forty-five (o «a quarter to eight»)." },
          { q: "¿Cómo se dice el precio $12.99?", a: "twelve ninety-nine", o: ["one thousand two ninety-nine", "twelve nine nine", "one two ninety-nine"], e: "12 | 99 → twelve ninety-nine." },
          { type: "write", q: "Bus 147 (número de autobús)", a: ["one forty-seven", "one hundred forty-seven", "one hundred and forty-seven", "a hundred and forty-seven"], e: "Lo natural es «one forty-seven» (1 | 47)." },
          { type: "write", q: "1,200 (forma informal, de dos en dos)", a: ["twelve hundred", "one thousand two hundred"], e: "12 | 00 → twelve hundred (formal: one thousand two hundred)." }
        ]
      },
      {
        title: "Números de teléfono",
        instructions: "Los teléfonos se dicen dígito por dígito.",
        items: [
          { q: "¿Cómo se dice 555-0182?", a: "five five five, oh one eight two", o: ["five hundred fifty-five, one eighty-two", "fifty-five five, zero eighteen two", "five five five, zero hundred eighty-two"], e: "Dígito por dígito, y el 0 suele decirse «oh»." },
          { q: "En un teléfono, el 0 casi siempre se dice:", a: "«oh» (como la letra O) o «zero»", o: ["«nil»", "«none»", "«nothing»"], e: "En teléfonos se dice «oh» o «zero». «Nil» es para resultados deportivos (UK)." },
          { q: "En un teléfono británico, «77» se suele decir:", a: "double seven", o: ["seventy-seven", "two sevens", "seven twice"], e: "En el Reino Unido los dígitos repetidos se dicen «double»: double seven." },
          { type: "write", q: "911 (emergencias en EE. UU.)", a: ["nine one one", "nine-one-one"], e: "Se dice dígito por dígito: nine-one-one (no «nine eleven»)." },
          { q: "¿Cómo pides un número de teléfono?", a: "What's your phone number?", o: ["How is your phone number?", "Which is your phone number?", "How much is your phone number?"], e: "Para pedir un dato se usa «What's…?»." },
          { q: "¿Cómo se dice 800-3300?", a: "eight oh oh, three three oh oh", o: ["eight hundred, thirty-three hundred", "eighty, thirty-three", "eight zero, thirty-three zero"], e: "Dígito por dígito. En EE. UU. también «eight hundred» para el código 800." }
        ]
      },
      {
        title: "Números grandes y decimales",
        instructions: "Cuidado con hundred / thousand / million, la coma y el punto.",
        items: [
          { q: "There were ___ people at the concert. (3,000)", a: "three thousand", o: ["three thousands", "three thousand of", "thousands three"], e: "Hundred, thousand y million no llevan -s después de un número." },
          { type: "write", q: "350", a: ["three hundred and fifty", "three hundred fifty"], e: "Three hundred (and) fifty. El «and» es típico del inglés británico." },
          { q: "¿Cómo se lee 2.5?", a: "two point five", o: ["two comma five", "two and five", "two dot five"], e: "En inglés el decimal se separa con punto y se dice «point»." },
          { q: "En inglés, «1,500» significa:", a: "mil quinientos", o: ["uno coma cinco", "ciento cincuenta", "quince"], e: "En inglés la coma separa los miles y el punto los decimales." },
          { q: "«One billion» en inglés es:", a: "mil millones", o: ["un billón (un millón de millones)", "cien millones", "un millón"], e: "Billion = 1,000,000,000 = mil millones. ¡Es un falso amigo!" },
          { q: "She is ___ years old. (13)", a: "thirteen", o: ["thirty", "threeteen", "thirdteen"], e: "13 = thirTEEN (acento al final); 30 = THIRty (acento al principio)." },
          { q: "The ticket costs ___ dollars. (50)", a: "fifty", o: ["fifteen", "fivety", "fiveteen"], e: "50 = FIFty; 15 = fifTEEN. Ojo con la ortografía: fifty, no «fivety»." },
          { q: "___ of people visit the museum every year.", a: "Thousands", o: ["Thousand", "Thousands of thousand", "Thousand's"], e: "Sin número delante, sí lleva -s y «of»: thousands of people." }
        ]
      },
      {
        title: "Historia: el fin de semana 4/20 de Jake",
        instructions: "Lee la historia y elige cómo se dice cada número. Toca un círculo para ir a su pregunta.",
        story: "Jake was born in (1) 1994, and he's the most chill stoner in Denver. Last spring he planned the perfect 4/20 weekend. His flight, number (2) 2215, landed at (3) 4:20 p.m. (of course). He paid (4) $349.99 for a \u201c420-friendly\u201d hotel, room (5) 1412. First stop: a dispensary at (6) 1650 Blake Street, where he bought some weed: a pre-roll and a bag of gummies. Two hours later he was totally baked and had the munchies, so he ordered (7) 15 tacos and called his buddy at (8) 555\u20110193 just to say \u201cI love you, man.\u201d He woke up on (9) April 21st with no memory and a taco in his bed.",
        items: [
          { quote: "Jake was born in [[1994]], and he's the most chill stoner in Denver.", q: "(1) ¿Cómo se dice «1994»?", a: "nineteen ninety-four", o: ["nineteen nine four", "nine ninety-four"], e: "Los años van de dos en dos: 19 | 94 → nineteen ninety-four." },
          { quote: "His flight, number [[2215]], landed at 4:20 p.m.", q: "(2) ¿Cómo se dice el vuelo «2215»?", a: "twenty-two fifteen", o: ["twenty-two one five", "two twenty fifteen"], e: "Los vuelos van de dos en dos: 22 | 15 → twenty-two fifteen." },
          { quote: "His flight landed at [[4:20]] p.m. (of course).", q: "(3) ¿Cómo se dice la hora «4:20»?", a: "four twenty", o: ["forty-two", "four two zero"], e: "Hora | minutos → four twenty. «420» (four-twenty) es también el código de la cultura de la marihuana." },
          { quote: "He paid [[$349.99]] for a “420-friendly” hotel.", q: "(4) ¿Cómo se dice «$349.99» de forma natural?", a: "three forty-nine ninety-nine", o: ["thirty-four nine ninety-nine", "three four nine nine nine"], e: "Dólares | centavos: 349 | 99 → three forty-nine ninety-nine." },
          { quote: "…a “420-friendly” hotel, room [[1412]].", q: "(5) ¿Cómo se dice la habitación «1412»?", a: "fourteen twelve", o: ["fourteen one two", "one thousand four twelve"], e: "Habitaciones de dos en dos: 14 | 12 → fourteen twelve." },
          { quote: "First stop: a dispensary at [[1650]] Blake Street.", q: "(6) ¿Cómo se dice la dirección «1650»?", a: "sixteen fifty", o: ["sixty-one fifty", "sixteen five oh"], e: "Direcciones de dos en dos: 16 | 50 → sixteen fifty Blake Street." },
          { quote: "He had the munchies, so he ordered [[15]] tacos.", q: "(7) ¿Cuántos tacos pidió?", a: "fifteen", o: ["fifty", "five-teen"], e: "15 = fifTEEN (acento al final). 50 = FIFty. ¡Mucha diferencia en tacos!" },
          { quote: "He called his buddy at [[555‑0193]] just to say “I love you, man.”", q: "(8) ¿Cómo se dice el teléfono «555‑0193»?", a: "five five five, oh one nine three", o: ["five fifty-five, nineteen three", "five hundred fifty-five, one ninety-three"], e: "Teléfonos: dígito por dígito, y el 0 se dice «oh»." },
          { quote: "He woke up on [[April 21st]] with no memory and a taco in his bed.", q: "(9) ¿Cómo se dice «April 21st»?", a: "April twenty-first", o: ["April twenty-one", "April two first"], e: "Fechas con ordinal: April twenty-first." }
        ]
      },
      {
        title: "Slang de la historia",
        instructions: "Inglés callejero e informal: úsalo con amigos, no en el trabajo. ¿Qué significa cada palabra?",
        items: [
          { quote: "…he's the most chill [[stoner]] in Denver.", q: "«Stoner» es:", a: "Alguien que fuma marihuana muy seguido", o: ["Alguien que colecciona piedras", "Alguien muy serio"], e: "Stoner (o pothead) = fumador habitual de marihuana. Es informal." },
          { quote: "…he's the most [[chill]] stoner in Denver.", q: "«Chill» significa:", a: "Relajado, tranquilo", o: ["Con frío", "Aburrido"], e: "Chill = relajado. También «to chill» = relajarse: «Let's just chill tonight»." },
          { quote: "…where he bought some [[weed]].", q: "«Weed» es:", a: "Marihuana", o: ["Maleza del jardín", "Tabaco"], e: "Weed = marihuana (informal). Literalmente significa «maleza»; el contexto te dice cuál es." },
          { quote: "…a [[pre-roll]] and a bag of gummies.", q: "«Pre-roll» es:", a: "Un porro que ya viene armado", o: ["Un pan antes de hornear", "Un anuncio antes de un video"], e: "Pre-roll = porro ya armado. Un porro también se dice «joint»." },
          { quote: "…a pre-roll and a bag of [[gummies]].", q: "Aquí, «gummies» son:", a: "Gomitas con marihuana", o: ["Chicles normales", "Zapatos de goma"], e: "En este contexto son «edibles»: comestibles con marihuana." },
          { quote: "Two hours later he was totally [[baked]]…", q: "Aquí, «baked» significa:", a: "Muy drogado por la marihuana", o: ["Horneado", "Muy cansado"], e: "Baked = stoned = high: bajo los efectos de la marihuana." },
          { quote: "…and had [[the munchies]]…", q: "«The munchies» es:", a: "Un hambre enorme después de fumar marihuana", o: ["Un tipo de tacos", "Ganas de dormir"], e: "The munchies = antojo intenso de comida, sobre todo después de fumar." },
          { quote: "Last spring he planned the perfect [[4/20]] weekend.", q: "«4/20» (four-twenty) es:", a: "El código y el día (20 de abril) de la cultura de la marihuana", o: ["Una hora sin importancia", "Un número de vuelo"], e: "420 / four-twenty se asocia con la marihuana; el 20 de abril (4/20) se celebra." },
          { quote: "…called his [[buddy]] at 555‑0193…", q: "«Buddy» significa:", a: "Amigo, compa", o: ["Hermano de sangre", "Jefe"], e: "Buddy = amigo (informal). Parecidos: pal, dude, bro." }
        ]
      },
      {
        title: "Encuentra el error: un mensaje de voz",
        instructions: "Tom te dejó un mensaje sobre un apartamento. En cada frase hay un error al decir un número: toca la parte equivocada.",
        items: [
          { quote: "The rent is one thousand two hundreds dollars a month.", q: "¿Qué parte está mal?", a: "two hundreds", o: ["The rent is", "one thousand", "dollars a month"], e: "Después de un número, hundred no lleva -s: one thousand two hundred dollars." },
          { quote: "The building was built in nineteen and eighty.", q: "¿Qué parte está mal?", a: "nineteen and eighty", o: ["The building", "was built", "in"], e: "Los años no llevan «and»: nineteen eighty." },
          { quote: "You can visit it on May five at three thirty.", q: "¿Qué parte está mal?", a: "May five", o: ["You can visit it", "on", "at three thirty"], e: "Las fechas se dicen con ordinal: May fifth." },
          { quote: "The apartment is on the twelve floor.", q: "¿Qué parte está mal?", a: "the twelve floor", o: ["The apartment", "is", "on"], e: "Para pisos se usa el ordinal: the twelfth floor." },
          { quote: "There are hundred of apartments in this area.", q: "¿Qué parte está mal?", a: "hundred of", o: ["There are", "apartments", "in this area"], e: "Sin número delante va con -s: hundreds of apartments." },
          { quote: "The deposit is two point five thousands dollars.", q: "¿Qué parte está mal?", a: "thousands dollars", o: ["The deposit is", "two point five"], e: "Con un número delante, thousand no lleva -s: two point five thousand dollars." },
          { quote: "My number is five hundred fifty-five, oh one double two.", q: "¿Qué parte está mal?", a: "five hundred fifty-five", o: ["My number is", "oh one", "double two"], e: "Los teléfonos se dicen dígito por dígito: five five five." },
          { quote: "Please call me back before the thirty of June.", q: "¿Qué parte está mal?", a: "the thirty of June", o: ["Please call me back", "before"], e: "Fecha con ordinal: the thirtieth of June." }
        ]
      },
      {
        title: "Matemáticas en inglés",
        instructions: "plus (+) · minus (−) · times (×) · divided by (÷) · equals (=). Escribe el resultado en palabras.",
        items: [
          { type: "write", q: "Twelve plus nine equals ___.", a: ["twenty-one"], e: "12 + 9 = 21 → twenty-one." },
          { type: "write", q: "A hundred minus forty-five is ___.", a: ["fifty-five"], e: "100 − 45 = 55 → fifty-five." },
          { type: "write", q: "Seven times eight is ___.", a: ["fifty-six"], e: "7 × 8 = 56 → fifty-six." },
          { type: "write", q: "Ninety divided by three is ___.", a: ["thirty"], e: "90 ÷ 3 = 30 → thirty." },
          { type: "write", q: "Half of a thousand is ___.", a: ["five hundred"], e: "1,000 ÷ 2 = 500 → five hundred." },
          { q: "Your coffee costs $3.40. You pay with a $5 bill. Your change is ___.", a: "one sixty", o: ["one forty", "two sixty", "sixteen"], e: "5.00 − 3.40 = 1.60 → one sixty (o «a dollar sixty»)." },
          { type: "write", q: "Ana was born in 1990. In 2026 she turns ___.", a: ["thirty-six"], e: "2026 − 1990 = 36 → thirty-six." },
          { q: "¿Cómo se lee «15 × 4 = 60»?", a: "Fifteen times four equals sixty.", o: ["Fifty times four equals sixteen.", "Fifteen for four is sixty.", "Fifteen plus four equals sixty."], e: "× = times. 15 = fifTEEN y 60 = SIXty." }
        ]
      }
    ]
  },

  {
    id: "fechas",
    title: "Fechas",
    level: "A2–B1",
    text: "Ordinales, formatos y preposiciones",
    sections: [
      {
        title: "Números ordinales",
        instructions: "Escribe el ordinal en palabras (1st → first).",
        items: [
          { type: "write", q: "1st", a: ["first"], e: "1st = first." },
          { type: "write", q: "2nd", a: ["second"], e: "2nd = second." },
          { type: "write", q: "3rd", a: ["third"], e: "3rd = third." },
          { type: "write", q: "5th", a: ["fifth"], e: "5th = fifth (cambia la «v» por «f»)." },
          { type: "write", q: "9th", a: ["ninth"], e: "9th = ninth (sin la «e» de nine)." },
          { type: "write", q: "12th", a: ["twelfth"], e: "12th = twelfth (cambia «ve» por «f»)." },
          { type: "write", q: "21st", a: ["twenty-first"], e: "Solo cambia el último número: twenty-first." },
          { type: "write", q: "30th", a: ["thirtieth"], e: "Las decenas cambian «y» por «ieth»: thirty → thirtieth." }
        ]
      },
      {
        title: "Cómo se dicen las fechas",
        instructions: "Las fechas se dicen con ordinales, no con números normales.",
        items: [
          { q: "¿Cómo se dice «July 4» en inglés americano?", a: "July fourth", o: ["July four", "July the four", "Four July"], e: "En EE. UU.: mes + ordinal → July fourth." },
          { q: "¿Cómo se dice «4 July» en inglés británico?", a: "the fourth of July", o: ["the four of July", "four July", "the July fourth of"], e: "En el Reino Unido: the + ordinal + of + mes." },
          { q: "My birthday is ___. (May 1)", a: "on May first", o: ["in May one", "at May first", "on May one"], e: "Con fecha exacta se usa «on» + ordinal: on May first." },
          { q: "¿Cómo se dice la fecha «March 22»?", a: "March twenty-second", o: ["March twenty-two", "March two twenty", "March twentieth-second"], e: "Ordinal: twenty-second." },
          { q: "¿Qué pregunta es correcta?", a: "What's the date today?", o: ["What date is it today of?", "Which is the date today?", "How is the date today?"], e: "«What's the date today?» o «What's today's date?»." },
          { q: "«Christmas is on December 25th.» ¿Cómo se lee «25th»?", a: "twenty-fifth", o: ["twenty-five", "twenty-fiveth", "two fifth"], e: "25th = twenty-fifth." },
          { q: "¿Cómo se dice «el 3 de octubre de 2026» en EE. UU.?", a: "October third, twenty twenty-six", o: ["October three, two zero two six", "Third October twenty six", "October the three, twenty twenty-six"], e: "Mes + ordinal + año en pares." },
          { q: "En una fecha escrita, ¿qué es más común en inglés?", a: "Escribir el número (May 5) y decir el ordinal (May fifth)", o: ["Escribir y decir el número normal (May five)", "Escribir el mes en minúscula (may 5)", "Poner el año primero siempre"], e: "Se escribe «May 5» o «5 May», pero se lee con ordinal. Los meses van con mayúscula." }
        ]
      },
      {
        title: "Formato americano y británico",
        instructions: "EE. UU. escribe mes/día/año; el Reino Unido, día/mes/año.",
        items: [
          { q: "En EE. UU., «03/04/2026» significa:", a: "4 de marzo de 2026", o: ["3 de abril de 2026", "2026 de marzo", "No se puede saber"], e: "Formato americano: mes/día/año → March 4." },
          { q: "En el Reino Unido, «03/04/2026» significa:", a: "3 de abril de 2026", o: ["4 de marzo de 2026", "30 de abril", "No se puede saber"], e: "Formato británico: día/mes/año → 3 April." },
          { q: "¿Cómo escribe un americano la Navidad (25 de diciembre)?", a: "12/25", o: ["25/12", "25/25", "12/12"], e: "Mes primero: 12/25." },
          { q: "¿Qué fecha es imposible en formato americano?", a: "13/05/2026", o: ["05/13/2026", "12/05/2026", "01/31/2026"], e: "No existe el mes 13: en EE. UU. el primer número es el mes." },
          { q: "Un formulario en EE. UU. pide «Date of birth (MM/DD/YYYY)». Naciste el 9 de agosto de 1995. Escribes:", a: "08/09/1995", o: ["09/08/1995", "1995/09/08", "9/8/95"], e: "MM = mes (08), DD = día (09)." },
          { q: "¿Qué formato evita confusiones en un correo internacional?", a: "9 August 2026 o August 9, 2026", o: ["09/08/26", "8/9/26", "26/08/09"], e: "Escribir el mes con letras evita la confusión entre formatos." }
        ]
      },
      {
        title: "in, on o at",
        instructions: "in (meses, años, estaciones, partes del día) · on (días y fechas) · at (horas y momentos exactos).",
        items: [
          { q: "We're going to Spain ___ July.", a: "in", o: ["on", "at"], e: "Meses → in: in July." },
          { q: "The meeting is ___ Monday.", a: "on", o: ["in", "at"], e: "Días de la semana → on: on Monday." },
          { q: "The class starts ___ 6 p.m.", a: "at", o: ["in", "on"], e: "Horas → at: at 6 p.m." },
          { q: "I was born ___ 1998.", a: "in", o: ["on", "at"], e: "Años → in: in 1998." },
          { q: "My birthday is ___ March 12th.", a: "on", o: ["in", "at"], e: "Fechas exactas → on: on March 12th." },
          { q: "I usually read ___ night.", a: "at", o: ["in", "on"], e: "Expresión fija: at night (pero in the morning / in the evening)." },
          { q: "She works best ___ the morning.", a: "in", o: ["on", "at"], e: "Partes del día → in the morning / afternoon / evening." },
          { q: "It snows a lot here ___ winter.", a: "in", o: ["on", "at"], e: "Estaciones → in: in winter." },
          { q: "We open presents ___ Christmas Day.", a: "on", o: ["in", "at"], e: "Un día concreto → on: on Christmas Day." },
          { q: "This song was very popular ___ the 1990s.", a: "in", o: ["on", "at"], e: "Décadas y siglos → in: in the 1990s." }
        ]
      }
    ]
  },

  {
    id: "presente-simple",
    title: "Presente simple",
    level: "A1–A2",
    text: "Rutinas, hechos y la -s de he/she/it",
    sections: [
      {
        title: "Oraciones afirmativas",
        instructions: "Con he, she, it el verbo lleva -s o -es.",
        items: [
          { q: "My brother ___ in a bank.", a: "works", o: ["work", "working", "is work"], e: "He (my brother) → verbo + s: works." },
          { q: "My cat ___ all day.", a: "sleeps", o: ["sleep", "sleeping", "is sleep"], e: "It (my cat) → sleeps." },
          { q: "We ___ English on Tuesdays and Thursdays.", a: "study", o: ["studies", "studying", "are study"], e: "Con «we» el verbo no cambia: study." },
          { q: "She ___ her homework after dinner.", a: "does", o: ["do", "dos", "doing"], e: "Do → does con he/she/it." },
          { q: "Tom ___ the bus to work.", a: "takes", o: ["take", "taking", "is take"], e: "He → takes." },
          { q: "My kids ___ cartoons on Saturday mornings.", a: "watch", o: ["watches", "watching", "are watch"], e: "«My kids» es plural (they) → watch." },
          { q: "This shop ___ at 10 p.m.", a: "closes", o: ["close", "closing", "is close"], e: "It → closes (termina en -se, solo agrega -s)." },
          { q: "He ___ two languages.", a: "speaks", o: ["speak", "speaking", "is speak"], e: "He → speaks." }
        ]
      },
      {
        title: "Negativas y preguntas",
        instructions: "Usa do / does (don't / doesn't) + verbo en forma base.",
        items: [
          { q: "I ___ like horror movies.", a: "don't", o: ["doesn't", "not", "am not"], e: "Con «I» la negativa es don't + verbo." },
          { q: "___ your sister live in Madrid?", a: "Does", o: ["Do", "Is", "Are"], e: "Your sister = she → Does…?" },
          { q: "My dad ___ drink coffee.", a: "doesn't", o: ["don't", "isn't", "not"], e: "He → doesn't + verbo." },
          { q: "___ they work on weekends?", a: "Do", o: ["Does", "Are", "Is"], e: "They → Do…?" },
          { q: "She doesn't ___ meat.", a: "eat", o: ["eats", "eating", "ate"], e: "Después de doesn't, el verbo va sin -s: eat." },
          { q: "Where ___ you live?", a: "do", o: ["does", "are", "is"], e: "You → do: Where do you live?" },
          { q: "What time ___ the class start?", a: "does", o: ["do", "is", "are"], e: "The class = it → does." },
          { q: "Does he ___ a car?", a: "have", o: ["has", "having", "had"], e: "Después de «does», el verbo va en forma base: have." }
        ]
      }
    ]
  },

  {
    id: "articulos",
    title: "Artículos a / an",
    level: "A1",
    text: "a, an o sin artículo",
    sections: [
      {
        title: "a, an o sin artículo",
        instructions: "«a» antes de sonido de consonante, «an» antes de sonido de vocal. Sin artículo en plurales.",
        items: [
          { q: "I need ___ hour to finish.", a: "an", o: ["a", "— (sin artículo)"], e: "En «hour» la h no suena (/aʊər/) → an." },
          { q: "She is ___ university student.", a: "a", o: ["an", "— (sin artículo)"], e: "«University» suena /ju/ (consonante) → a." },
          { q: "He eats ___ apple every day.", a: "an", o: ["a", "— (sin artículo)"], e: "«Apple» empieza con sonido de vocal → an." },
          { q: "We saw ___ elephant at the zoo.", a: "an", o: ["a", "— (sin artículo)"], e: "«Elephant» empieza con sonido de vocal → an." },
          { q: "My mom is ___ honest person.", a: "an", o: ["a", "— (sin artículo)"], e: "En «honest» la h no suena → an." },
          { q: "They have ___ dogs.", a: "— (sin artículo)", o: ["a", "an"], e: "«A» y «an» solo van con singulares: they have dogs." },
          { q: "She is ___ engineer.", a: "an", o: ["a", "— (sin artículo)"], e: "Profesiones llevan artículo; «engineer» empieza con vocal → an." },
          { q: "It's ___ one-way street.", a: "a", o: ["an", "— (sin artículo)"], e: "«One» suena /wʌn/ (consonante) → a." },
          { q: "Is there ___ ATM near here?", a: "an", o: ["a", "— (sin artículo)"], e: "Se lee «ei-ti-em» (sonido de vocal) → an." },
          { q: "He's ___ European citizen.", a: "a", o: ["an", "— (sin artículo)"], e: "«European» suena /jʊ/ (consonante) → a." }
        ]
      }
    ]
  },

  {
    id: "adverbios-frecuencia",
    title: "Adverbios de frecuencia",
    level: "A1–A2",
    text: "always, usually, often, sometimes, never",
    sections: [
      {
        title: "¿Cuál es la oración correcta?",
        instructions: "El adverbio va antes del verbo principal, pero después de «be».",
        items: [
          { q: "Elige la oración correcta.", a: "We usually have lunch at one.", o: ["We have usually lunch at one.", "We have lunch usually at one."], e: "Antes del verbo principal: usually have." },
          { q: "Elige la oración correcta.", a: "My brother is never on time.", o: ["My brother never is on time.", "Never my brother is on time."], e: "Con «be», el adverbio va después: is never." },
          { q: "Elige la oración correcta.", a: "Do you often go to the gym?", o: ["Do often you go to the gym?", "Do you go often to the gym?"], e: "En preguntas: Do + sujeto + adverbio + verbo." },
          { q: "Elige la oración correcta.", a: "She hardly ever drinks soda.", o: ["She drinks hardly ever soda.", "Hardly ever she drinks soda."], e: "Hardly ever va antes del verbo principal." },
          { q: "Elige la oración correcta.", a: "They are sometimes late for class.", o: ["They are late sometimes for class.", "They are late for sometimes class."], e: "Con «be»: are sometimes late." },
          { q: "Elige la oración correcta.", a: "I don't usually work on Sundays.", o: ["I don't work usually on Sundays.", "I usually not work on Sundays."], e: "En negativas: don't + adverbio + verbo." },
          { q: "Elige la oración correcta.", a: "He always forgets my birthday.", o: ["He forgets always my birthday.", "Always he forget my birthday."], e: "Antes del verbo principal: always forgets." },
          { q: "Elige la oración correcta.", a: "We rarely eat out.", o: ["We eat rarely out.", "We rarely eats out."], e: "Rarely + verbo; con «we» el verbo no lleva -s." }
        ]
      },
      {
        title: "Elige el adverbio",
        instructions: "Mira el porcentaje y elige el adverbio correcto.",
        items: [
          { q: "I ___ brush my teeth before bed. (100%)", a: "always", o: ["usually", "sometimes", "never"], e: "100% = always." },
          { q: "She ___ checks her phone at dinner. (0%)", a: "never", o: ["rarely", "sometimes", "always"], e: "0% = never." },
          { q: "We ___ go to the beach in summer. (50%)", a: "sometimes", o: ["always", "never", "usually"], e: "50% = sometimes." },
          { q: "He ___ eats breakfast. (90%)", a: "usually", o: ["sometimes", "rarely", "never"], e: "≈90% = usually." },
          { q: "They ___ watch TV. (10%)", a: "rarely", o: ["always", "usually", "often"], e: "≈10% = rarely (o hardly ever)." },
          { q: "I ___ take the train to work. (70%)", a: "often", o: ["never", "rarely", "always"], e: "≈70% = often." }
        ]
      }
    ]
  },

  {
    id: "pasado-simple",
    title: "Pasado simple",
    level: "A2",
    text: "Verbos regulares, irregulares y did",
    sections: [
      {
        title: "Regulares e irregulares",
        instructions: "Elige el verbo en pasado.",
        items: [
          { q: "Yesterday I ___ my grandmother.", a: "visited", o: ["visit", "visitted", "visiting"], e: "Regular: visit → visited." },
          { q: "We ___ a great movie last night.", a: "saw", o: ["seed", "seen", "see"], e: "Irregular: see → saw (seen es participio)." },
          { q: "She ___ to Mexico in 2019.", a: "went", o: ["goed", "gone", "go"], e: "Irregular: go → went." },
          { q: "They ___ pizza for dinner.", a: "ate", o: ["eated", "eaten", "eat"], e: "Irregular: eat → ate." },
          { q: "He ___ his keys at work.", a: "left", o: ["leaved", "leaves", "leave"], e: "Irregular: leave → left." },
          { q: "I ___ a new jacket last week.", a: "bought", o: ["buyed", "brought", "buy"], e: "Buy → bought. Ojo: brought es el pasado de bring (traer)." },
          { q: "The class ___ at 9 o'clock.", a: "started", o: ["start", "startted", "starts"], e: "Regular: start → started." },
          { q: "My phone ___ when I dropped it.", a: "broke", o: ["breaked", "broken", "break"], e: "Irregular: break → broke." },
          { q: "We ___ a lot at the party.", a: "laughed", o: ["laught", "laughing", "laugh"], e: "Regular: laugh → laughed." },
          { q: "She ___ me a long email.", a: "wrote", o: ["writed", "written", "write"], e: "Irregular: write → wrote." }
        ]
      },
      {
        title: "Negativas y preguntas",
        instructions: "Con did / didn't el verbo vuelve a la forma base. Con «be» usa was / were.",
        items: [
          { q: "I ___ see you at the party.", a: "didn't", o: ["don't", "wasn't", "not"], e: "Negativa en pasado: didn't + verbo." },
          { q: "___ you call your mom yesterday?", a: "Did", o: ["Do", "Were", "Are"], e: "Pregunta en pasado: Did + sujeto + verbo." },
          { q: "She didn't ___ the answer.", a: "know", o: ["knew", "knows", "known"], e: "Después de didn't, forma base: know." },
          { q: "Where did you ___ on vacation?", a: "go", o: ["went", "gone", "going"], e: "Con did, forma base: go." },
          { q: "They ___ happy with the hotel.", a: "weren't", o: ["didn't", "wasn't", "don't"], e: "Con el verbo «be» y they → weren't." },
          { q: "___ it cold last night?", a: "Was", o: ["Did", "Were", "Is"], e: "«Be» en pasado con it → Was…?" },
          { q: "What did he ___ for breakfast?", a: "have", o: ["had", "has", "having"], e: "Con did, forma base: have." },
          { q: "We didn't ___ the bus.", a: "miss", o: ["missed", "misses", "missing"], e: "Después de didn't, forma base: miss." }
        ]
      }
    ]
  },

  {
    id: "presente-perfecto",
    title: "Presente perfecto",
    level: "B1",
    text: "have / has + participio",
    sections: [
      {
        title: "La forma",
        instructions: "have / has + participio pasado.",
        items: [
          { q: "I have never ___ sushi.", a: "eaten", o: ["ate", "eat", "eating"], e: "Participio de eat: eaten." },
          { q: "She ___ lived here since 2020.", a: "has", o: ["have", "is", "did"], e: "She → has + participio." },
          { q: "We ___ finished the project yet.", a: "haven't", o: ["didn't", "hasn't", "aren't"], e: "We → haven't. «Yet» es típico del presente perfecto." },
          { q: "___ you ever been to Peru?", a: "Have", o: ["Did", "Are", "Has"], e: "Pregunta de experiencia: Have you ever…?" },
          { q: "He has ___ his wallet.", a: "lost", o: ["lose", "losed", "losing"], e: "Participio de lose: lost." },
          { q: "They have ___ married for ten years.", a: "been", o: ["be", "was", "being"], e: "Participio de be: been." },
          { q: "I've ___ this book three times.", a: "read", o: ["readed", "reads", "reading"], e: "Read → read → read (se escribe igual y suena «red»)." },
          { q: "Has she ___ the email yet?", a: "sent", o: ["send", "sended", "sending"], e: "Participio de send: sent." }
        ]
      },
      {
        title: "¿Presente perfecto o pasado simple?",
        instructions: "Momento terminado (yesterday, in 2018, last week) → pasado simple. Experiencia o hasta ahora (ever, never, yet, since, for) → presente perfecto.",
        items: [
          { q: "I ___ to London in 2018.", a: "went", o: ["have gone", "have been", "go"], e: "«In 2018» es un momento terminado → pasado simple." },
          { q: "I ___ to London three times.", a: "have been", o: ["went", "was", "have go"], e: "Experiencia sin momento concreto → presente perfecto." },
          { q: "She ___ her job last month.", a: "quit", o: ["has quit", "quits", "has quitted"], e: "«Last month» → pasado simple (quit → quit)." },
          { q: "We ___ here since January.", a: "have lived", o: ["lived", "live", "are living"], e: "«Since» + algo que sigue hasta hoy → presente perfecto." },
          { q: "___ you see the game yesterday?", a: "Did", o: ["Have", "Has", "Do"], e: "«Yesterday» → pasado simple: Did you…?" },
          { q: "He ___ the report yet.", a: "hasn't finished", o: ["didn't finish", "doesn't finish", "hasn't finish"], e: "«Yet» → presente perfecto: hasn't finished." },
          { q: "They ___ each other for years.", a: "have known", o: ["know", "knew", "are knowing"], e: "«For years» hasta hoy → have known." },
          { q: "When ___ you arrive?", a: "did", o: ["have", "has", "do"], e: "«When» pregunta por un momento concreto → pasado simple." }
        ]
      }
    ]
  },

  {
    id: "segundo-condicional",
    title: "Segundo condicional",
    level: "B1",
    text: "If + pasado, would + verbo",
    sections: [
      {
        title: "Situaciones imaginarias",
        instructions: "If + pasado simple, would + verbo base. Con «be» se usa «were» para todas las personas.",
        items: [
          { q: "If I ___ taller, I would play basketball.", a: "were", o: ["am", "would be", "will be"], e: "Situación imaginaria: If I were…" },
          { q: "If she had more time, she ___ a new language.", a: "would learn", o: ["will learn", "learns", "learned"], e: "La otra parte lleva would + verbo." },
          { q: "What would you do if you ___ a million dollars?", a: "won", o: ["win", "would win", "will win"], e: "Después de «if» va el pasado: won." },
          { q: "If we lived near the beach, we ___ every day.", a: "would swim", o: ["will swim", "swim", "swam"], e: "Would + verbo base: would swim." },
          { q: "I ___ that car if I were you.", a: "wouldn't buy", o: ["won't buy", "don't buy", "didn't buy"], e: "Consejo con «if I were you» → would / wouldn't." },
          { q: "If it ___ so expensive, I would buy it.", a: "weren't", o: ["isn't", "wouldn't be", "won't be"], e: "Después de «if» → were / weren't." },
          { q: "If I ___ his number, I would call him.", a: "knew", o: ["know", "would know", "known"], e: "Pasado después de «if»: knew." },
          { q: "Would you be happier if you ___ in the city?", a: "lived", o: ["live", "would live", "will live"], e: "Pasado después de «if»: lived." },
          { q: "If he practiced more, he ___ the guitar better.", a: "would play", o: ["will play", "plays", "played"], e: "Would + verbo base." },
          { q: "If I were you, I ___ to the doctor.", a: "would go", o: ["will go", "go", "went"], e: "«If I were you» + would: dar un consejo." }
        ]
      }
    ]
  },

  {
    id: "whose-posesivo",
    title: "Whose y posesivo 's",
    level: "B1",
    text: "whose / who's, 's y s'",
    sections: [
      {
        title: "Whose o who's",
        instructions: "«Whose» pregunta de quién es algo. «Who's» = who is / who has.",
        items: [
          { q: "___ jacket is this?", a: "Whose", o: ["Who's", "Who"], e: "¿De quién es? → Whose." },
          { q: "___ coming to the party?", a: "Who's", o: ["Whose", "Who"], e: "Who is coming → Who's." },
          { q: "___ your favorite singer?", a: "Who's", o: ["Whose", "Who"], e: "Who is your favorite singer → Who's." },
          { q: "I know a woman ___ son plays for Real Madrid.", a: "whose", o: ["who's", "who"], e: "El hijo de ella → whose son." },
          { q: "___ umbrella did you borrow?", a: "Whose", o: ["Who's", "Who"], e: "¿El paraguas de quién? → Whose." },
          { q: "___ that man next to your mom?", a: "Who's", o: ["Whose", "Who"], e: "Who is that man → Who's." },
          { q: "___ turn is it?", a: "Whose", o: ["Who's", "Who"], e: "¿El turno de quién? → Whose." },
          { q: "___ been to Japan?", a: "Who's", o: ["Whose", "Who"], e: "Who has been → Who's." }
        ]
      },
      {
        title: "'s o s'",
        instructions: "Singular → 's. Plural terminado en -s → solo apóstrofe (s').",
        items: [
          { q: "This is my ___ car. (una hermana)", a: "sister's", o: ["sisters'", "sisters", "sister"], e: "Singular → 's: my sister's car." },
          { q: "The ___ room is very messy. (dos chicos)", a: "boys'", o: ["boy's", "boys's", "boys"], e: "Plural en -s → solo apóstrofe: the boys' room." },
          { q: "My ___ house is big. (mamá y papá)", a: "parents'", o: ["parent's", "parents's", "parents"], e: "Plural en -s → parents'." },
          { q: "___ phone is new. (Carlos)", a: "Carlos's", o: ["Carlo's", "Carloses", "Carlos is"], e: "Nombres en -s: Carlos's o Carlos' (las dos son correctas)." },
          { q: "We went to my ___ wedding. (un amigo)", a: "friend's", o: ["friends'", "friends", "friend"], e: "Singular → friend's." },
          { q: "The ___ office is upstairs. (varios profesores)", a: "teachers'", o: ["teacher's", "teachers's", "teachers"], e: "Plural en -s → teachers'." },
          { q: "The ___ name is Max. (un perro)", a: "dog's", o: ["dogs'", "dogs's", "dog"], e: "Singular → dog's." },
          { q: "My ___ names are Ana and Luis. (dos abuelos)", a: "grandparents'", o: ["grandparent's", "grandparents's", "grandparents"], e: "Plural en -s → grandparents'." }
        ]
      },
      {
        title: "Casos especiales",
        instructions: "Plurales irregulares, its / it's y expresiones de tiempo.",
        items: [
          { q: "The company changed ___ logo.", a: "its", o: ["it's", "its'", "it is"], e: "«Its» = su (posesivo). «It's» = it is." },
          { q: "___ raining again.", a: "It's", o: ["Its", "Its'", "It"], e: "It is raining → It's." },
          { q: "The ___ toys are everywhere. (children)", a: "children's", o: ["childrens'", "childrens", "children'"], e: "Plural irregular sin -s → 's: children's." },
          { q: "The ___ section is on the second floor. (women)", a: "women's", o: ["womens'", "womens", "women'"], e: "Plural irregular → women's." },
          { q: "The ___ shoes are on sale. (men)", a: "men's", o: ["mens'", "mens", "mans'"], e: "Plural irregular → men's." },
          { q: "The dog wagged ___ tail.", a: "its", o: ["it's", "its'", "his'"], e: "Posesivo de it → its." },
          { q: "I'm sleeping at my ___ tonight. (la casa de mi tía)", a: "aunt's", o: ["aunts", "aunt", "aunts's"], e: "«At my aunt's» = en la casa de mi tía." },
          { q: "I need two ___ rest.", a: "weeks'", o: ["week's", "weeks", "weeks's"], e: "Expresiones de tiempo en plural → weeks' (two weeks' rest)." }
        ]
      }
    ]
  },

  {
    id: "dobles-negativos",
    title: "Dobles negativos",
    level: "B1–B2",
    text: "Una sola negación por oración",
    sections: [
      {
        title: "any o no",
        instructions: "Si el verbo ya es negativo, usa any / anything / anybody / anywhere.",
        items: [
          { q: "I don't have ___ plans tonight.", a: "any", o: ["no", "none", "nothing"], e: "Don't ya niega → any." },
          { q: "There's ___ milk in the fridge.", a: "no", o: ["any", "none", "not"], e: "El verbo es afirmativo (there's) → no milk." },
          { q: "She didn't say ___.", a: "anything", o: ["nothing", "nobody", "none"], e: "Didn't ya niega → anything." },
          { q: "We didn't see ___ at the park.", a: "anybody", o: ["nobody", "no one", "none"], e: "Didn't ya niega → anybody." },
          { q: "___ called while you were out.", a: "Nobody", o: ["Anybody", "Not nobody", "No"], e: "Verbo afirmativo + sujeto negativo: Nobody called." },
          { q: "I can't find my glasses ___.", a: "anywhere", o: ["nowhere", "no place", "none"], e: "Can't ya niega → anywhere." },
          { q: "He has ___ idea what happened.", a: "no", o: ["any", "none", "not"], e: "Verbo afirmativo (has) → no idea." },
          { q: "They didn't buy ___ of the tickets.", a: "any", o: ["none", "no", "nothing"], e: "Didn't ya niega → any of." }
        ]
      },
      {
        title: "never / ever · either / neither · none",
        instructions: "Never, neither y none ya son negativos: no los combines con otra negación.",
        items: [
          { q: "I don't ___ eat fast food.", a: "ever", o: ["never", "no", "any"], e: "Don't + ever (no «don't never»)." },
          { q: "She has ___ been to Europe.", a: "never", o: ["ever", "no", "any"], e: "Has es afirmativo → never." },
          { q: "I don't like it ___.", a: "either", o: ["neither", "too", "also"], e: "En negativas, «tampoco» al final = either." },
          { q: "___ of my two brothers lives here.", a: "Neither", o: ["None", "Nothing", "Nobody"], e: "Ninguno de DOS → neither." },
          { q: "A: I can't drive. B: ___ can I.", a: "Neither", o: ["Either", "So", "Too"], e: "«Yo tampoco» con negativo → Neither can I." },
          { q: "___ of the students passed the test. It was too difficult.", a: "None", o: ["Neither", "No", "Nothing"], e: "Ninguno de un grupo de más de dos → none." },
          { q: "Nobody ___ me about the meeting.", a: "told", o: ["didn't tell", "don't tell", "not told"], e: "Nobody ya es negativo → verbo afirmativo: told." },
          { q: "I won't ___ do that again.", a: "ever", o: ["never", "no", "not"], e: "Won't ya niega → ever." }
        ]
      },
      {
        title: "Elige la oración correcta",
        instructions: "Solo una oración usa una sola negación.",
        items: [
          { q: "Elige la oración correcta.", a: "I didn't do anything wrong.", o: ["I didn't do nothing wrong.", "I did anything wrong."], e: "Didn't + anything." },
          { q: "Elige la oración correcta.", a: "Nobody told me.", o: ["Nobody didn't tell me.", "Anybody told me."], e: "Nobody + verbo afirmativo." },
          { q: "Elige la oración correcta.", a: "She never goes anywhere.", o: ["She never goes nowhere.", "She doesn't never go anywhere."], e: "Never + anywhere." },
          { q: "Elige la oración correcta.", a: "We don't have any time.", o: ["We don't have no time.", "We have any time."], e: "Don't + any." },
          { q: "Elige la oración correcta.", a: "I can't hear anything.", o: ["I can't hear nothing.", "I can't hear none."], e: "Can't + anything." },
          { q: "Elige la oración correcta.", a: "There's nothing to eat.", o: ["There isn't nothing to eat.", "There's anything to eat."], e: "There's (afirmativo) + nothing." },
          { q: "Elige la oración correcta.", a: "He doesn't want to go either.", o: ["He doesn't want to go neither.", "He don't want to go either."], e: "Doesn't + either." },
          { q: "Elige la oración correcta.", a: "None of us knew the answer.", o: ["None of us didn't know the answer.", "None of us knowed the answer."], e: "None + verbo afirmativo." }
        ]
      }
    ]
  },

  {
    id: "steve-jobs",
    title: "Vocabulario: Steve Jobs",
    level: "B2",
    text: "Expresiones del discurso de Stanford (2005)",
    sections: [
      {
        title: "Primera parte",
        instructions: "Lee la frase del discurso y elige el significado de la expresión.",
        items: [
          { quote: "Truth be told, this is the closest I've ever gotten to a college graduation.", q: "«Truth be told» significa:", a: "A decir verdad", o: ["Me dijeron la verdad", "Es difícil de creer", "Lo digo en broma"], e: "Se usa para admitir algo con sinceridad." },
          { quote: "…no idea how college was going to help me figure it out.", q: "«Figure it out» significa:", a: "Descubrir o entender qué hacer", o: ["Calcular un número", "Rendirse", "Olvidarlo"], e: "Figure out = llegar a entender o resolver algo." },
          { quote: "…turned out to be priceless later on.", q: "«Turn out to be» significa:", a: "Resultar ser (al final)", o: ["Dejar de ser", "Apagar algo", "Salir de un lugar"], e: "Turn out to be = descubrir al final cómo era algo." },
          { quote: "…turned out to be priceless later on.", q: "«Priceless» significa:", a: "De un valor enorme", o: ["Gratis", "Sin etiqueta de precio", "Barato"], e: "Priceless = tan valioso que no tiene precio. «Gratis» es free." },
          { quote: "My biological mother later found out that…", q: "«Find out» significa:", a: "Enterarse, descubrir", o: ["Encontrar algo afuera", "Salir a buscar", "Olvidar"], e: "Find out = enterarse de una información." },
          { quote: "She only relented a few months later…", q: "«Relent» significa:", a: "Ceder después de haberse negado", o: ["Arrepentirse", "Enojarse", "Prestar dinero"], e: "Relent = dejar de oponerse y aceptar." },
          { quote: "I naively chose a college that was almost as expensive as Stanford…", q: "«Naively» significa:", a: "Ingenuamente", o: ["Nativamente", "Con mucha experiencia", "A propósito"], e: "Naive = ingenuo, sin experiencia." },
          { quote: "…it has made all the difference in my life.", q: "«Make all the difference» significa:", a: "Ser lo que realmente cambia las cosas", o: ["Hacer muchas cuentas", "Ser igual a lo demás", "Complicarlo todo"], e: "Make all the difference = tener un efecto decisivo." }
        ]
      },
      {
        title: "Segunda parte",
        instructions: "Lee la frase del discurso y elige el significado de la expresión.",
        items: [
          { quote: "So at 30 I was out.", q: "Aquí, «be out» significa:", a: "Estar fuera de la empresa (despedido)", o: ["Estar de vacaciones", "Estar en casa", "Estar de moda"], e: "En este contexto, «out» = fuera de la compañía." },
          { quote: "In a remarkable turn of events, Apple bought NeXT…", q: "«Turn of events» significa:", a: "Giro de los acontecimientos", o: ["Turno de trabajo", "Calendario de eventos", "Vuelta al mundo"], e: "Un cambio inesperado en una situación." },
          { quote: "…is at the heart of Apple's current renaissance.", q: "«At the heart of» significa:", a: "En el centro de, lo esencial de", o: ["Cerca del corazón", "Enamorado de", "Lejos de"], e: "At the heart of = la parte más importante de algo." },
          { quote: "…it just gets better and better as the years roll on.", q: "«Roll on» (los años) significa:", a: "Pasar, avanzar el tiempo", o: ["Rodar por el suelo", "Retroceder", "Detenerse"], e: "Roll on = seguir avanzando, con el tiempo." },
          { quote: "It made an impression on me…", q: "«Make an impression on someone» significa:", a: "Marcar a alguien, causarle un efecto fuerte", o: ["Imprimir algo", "Imitar a alguien", "Fingir"], e: "Dejar una huella en alguien." },
          { quote: "…for too many days in a row…", q: "«In a row» significa:", a: "Seguidos, consecutivos", o: ["En una fila de personas", "De vez en cuando", "En desorden"], e: "Three days in a row = tres días seguidos." },
          { quote: "…when it had run its course, they put out a final issue.", q: "«Run its course» significa:", a: "Llegar a su fin natural", o: ["Correr una carrera", "Cambiar de rumbo", "Empezar de nuevo"], e: "Algo que termina de forma natural." },
          { quote: "…they put out a final issue.", q: "Aquí, «put out» significa:", a: "Publicar", o: ["Apagar", "Sacar la basura", "Cancelar"], e: "Put out también es «apagar» (un fuego), pero aquí es publicar." }
        ]
      }
    ]
  }
];
