/*
  Temas que no están en el libro Travelers 1 pero complementan las clases: comparativos y
  superlativos, falsos amigos y make vs. do. Formato: ver data/groups.js.
*/
(function () {
  const { M, W, S, T } = window.YEB_X;
  window.YEB_EXERCISES.push(

    T("comparativos", ["Comparativos y superlativos", "Comparatives and superlatives"], "A2–B1", ["bigger than, more expensive, the best", "bigger than, more expensive, the best"], [
      S(["Comparar dos cosas", "Comparing two things"], ["Palabras cortas: + -er (cheaper). Largas: more + adjetivo (more expensive). Siempre con than.", "Short words: + -er (cheaper). Long words: more + adjective (more expensive). Always with than."], [
        M("Caracas is ___ than Mérida.", "hotter", ["more hot", "hoter", "hottest"], ["hot → hotter (se dobla la t).", "hot → hotter (double t)."], { "more hot": ["Con palabras cortas no se usa more: hotter.", "Short words don't take more: hotter."] }),
        M("An iPhone is ___ than a Samsung A10.", "more expensive", ["expensiver", "most expensive", "more expensiver"], ["Palabra larga → more expensive.", "Long word → more expensive."], { expensiver: ["Las palabras largas no llevan -er: more expensive.", "Long words don't take -er: more expensive."] }),
        M("My brother is taller ___ me.", "than", ["that", "then", "as"], ["Comparar → than.", "Comparing → than."], { that: ["«that» es «eso/que». Para comparar va than.", "“that” isn't used to compare. Use than."], then: ["«then» significa «entonces». Para comparar: than.", "“then” means “after that”. To compare: than."] }),
        M("This exam is ___ than the last one.", "easier", ["more easy", "easyer", "easiest"], ["easy → easier (y → i).", "easy → easier (y → i)."]),
        M("My English is ___ than last year.", "better", ["gooder", "more good", "best"], ["good → better (irregular).", "good → better (irregular)."], { gooder: ["good es irregular: better.", "good is irregular: better."] }),
        M("The traffic today is ___ than yesterday.", "worse", ["badder", "more bad", "worst"], ["bad → worse (irregular).", "bad → worse (irregular)."]),
        M("Cats are ___ than dogs. They sleep all day.", "lazier", ["more lazy", "lazyer", "laziest"], ["lazy → lazier.", "lazy → lazier."]),
        M("She's ___ intelligent than her sister.", "more", ["most", "much", "very"], ["intelligent es largo → more intelligent.", "intelligent is long → more intelligent."])
      ]),
      S(["El más… (superlativos)", "The most… (superlatives)"], ["the + -est (the cheapest) o the most + adjetivo largo (the most beautiful).", "the + -est (the cheapest) or the most + long adjective (the most beautiful)."], [
        M("Angel Falls is the ___ waterfall in the world.", "highest", ["higher", "most high", "more high"], ["El más → the highest.", "The most → the highest."], { higher: ["«higher» compara dos cosas. Con «the … in the world» va highest.", "“higher” compares two things. With “the … in the world” use highest."] }),
        M("This is the ___ movie I've ever seen.", "best", ["better", "goodest", "most good"], ["good → better → best.", "good → better → best."]),
        M("It's the ___ restaurant in the city.", "most expensive", ["expensivest", "more expensive", "most expensivest"], ["Largo → the most expensive.", "Long → the most expensive."]),
        M("He's the ___ person in my family.", "funniest", ["funnyest", "most funny", "funnier"], ["funny → funniest.", "funny → funniest."]),
        M("Monday is the ___ day of the week.", "worst", ["worse", "baddest", "most bad"], ["bad → worse → worst.", "bad → worse → worst."]),
        M("Is Russia ___ country in the world?", "the biggest", ["biggest", "the most big", "the bigger"], ["El más → the + -est. big → biggest.", "→ the biggest."], { biggest: ["El superlativo lleva the: the biggest.", "Superlatives take the: the biggest."] })
      ]),
      S(["As … as", "As … as"], ["as + adjetivo + as = tan… como. not as … as = no tan… como.", "as + adjective + as = equally. not as … as = less."], [
        M("My sister is ___ tall as me. We're both 1.65.", "as", ["so", "than", "more"], ["Igual → as tall as.", "Equal → as tall as."]),
        M("The movie isn't as good ___ the book.", "as", ["than", "like", "that"], ["as … as (no than).", "as … as (not than)."], { than: ["Con «as good» la pareja es as: as good as.", "With “as good” the pair is as: as good as."] }),
        W("Miami is ___ (not / cold) as New York.", ["not as cold", "isn't as cold"], ["not as cold as = no tan frío como.", "not as cold as = less cold than."])
      ])
    ]),

    T("falsos-amigos", ["Falsos amigos", "False friends"], "A2–B2", ["Palabras que se parecen al español pero significan otra cosa", "Words that look like Spanish but mean something else"], [
      S(["¿Qué significa?", "What does it mean?"], ["Estas palabras parecen españolas, pero no lo son. Elige el significado real.", "These words look Spanish, but they aren't. Choose the real meaning."], [
        M("I'm actually a teacher.", "En realidad soy profesor.", ["Actualmente soy profesor.", "Ahora mismo soy profesor.", "Antes era profesor."], ["actually = en realidad. «Actualmente» se dice currently.", "actually = in fact. Spanish «actualmente» is currently."], { "Actualmente soy profesor.": ["«actually» no es actualmente; es «en realidad». Actualmente = currently.", "“actually” isn't «actualmente»; it means “in fact”. «Actualmente» = currently."] }),
        M("She's embarrassed.", "Está avergonzada.", ["Está embarazada.", "Está enojada.", "Está aburrida."], ["embarrassed = avergonzada. Embarazada = pregnant.", "embarrassed = ashamed. «Embarazada» = pregnant."], { "Está embarazada.": ["¡Cuidado! Embarazada es pregnant. Embarrassed = avergonzada.", "Careful! «Embarazada» is pregnant. Embarrassed = ashamed."] }),
        M("He pretends to be sick.", "Finge estar enfermo.", ["Pretende estar enfermo.", "Intenta estar enfermo.", "Planea estar enfermo."], ["pretend = fingir. Pretender = intend / try.", "pretend = act as if. «Pretender» = intend."]),
        M("I need to buy a new carpet.", "una alfombra", ["una carpeta", "un cartel", "una cartera"], ["carpet = alfombra. Carpeta = folder.", "carpet = rug. «Carpeta» = folder."], { "una carpeta": ["Carpeta es folder. Carpet es alfombra.", "«Carpeta» is folder. Carpet is a rug."] }),
        M("Did you realize the door was open?", "¿Te diste cuenta?", ["¿Lo realizaste?", "¿Lo hiciste realidad?", "¿Lo abriste?"], ["realize = darse cuenta. Realizar = carry out.", "realize = notice. «Realizar» = carry out."]),
        M("My parents are coming to dinner.", "mis papás", ["mis parientes", "mis amigos", "mis tíos"], ["parents = papá y mamá. Parientes = relatives.", "parents = mom and dad. «Parientes» = relatives."]),
        M("The library is closed on Sundays.", "la biblioteca", ["la librería", "el laboratorio", "la oficina"], ["library = biblioteca. Librería = bookstore.", "library = place to borrow books. «Librería» = bookstore."], { "la librería": ["Librería (donde compras libros) es bookstore. Library = biblioteca.", "«Librería» is a bookstore. Library = biblioteca."] }),
        M("I have a terrible cold.", "un resfriado", ["mucho frío", "una fiebre", "un dolor"], ["a cold = un resfriado. Tener frío = be cold.", "a cold = an illness. «Tener frío» = be cold."], { "mucho frío": ["«I have a cold» = estoy resfriado. Tener frío es I'm cold.", "“I have a cold” = I'm sick. Feeling cold is I'm cold."] }),
        M("This sweater is very sensible for winter.", "práctico, sensato", ["sensible (que siente mucho)", "suave", "bonito"], ["sensible = sensato, práctico. Sensible = sensitive.", "sensible = practical. Spanish «sensible» = sensitive."]),
        M("She's very sympathetic.", "comprensiva (te entiende)", ["simpática", "antipática", "graciosa"], ["sympathetic = comprensivo/a. Simpático = nice, friendly.", "sympathetic = understanding. «Simpático» = nice."], { "simpática": ["Simpática se dice nice o friendly. Sympathetic = comprensiva.", "«Simpática» is nice/friendly. Sympathetic = understanding."] }),
        M("Can you record the meeting?", "grabar", ["recordar", "registrar en papel", "repetir"], ["record = grabar. Recordar = remember.", "record = tape. «Recordar» = remember."], { recordar: ["Recordar es remember (o remind). Record = grabar.", "«Recordar» is remember. Record = tape."] }),
        M("We had a big discussion about the project.", "una conversación sobre", ["una pelea", "un grito", "un problema"], ["discussion = conversación, debate. Discusión (pelea) = argument.", "discussion = conversation. A fight is an argument."], { "una pelea": ["Una pelea o discusión fuerte es an argument. Discussion es una conversación.", "A fight is an argument. Discussion is a conversation."] })
      ]),
      S(["Dilo en inglés", "Say it in English"], ["Elige la palabra correcta en inglés.", "Choose the correct English word."], [
        M(["Estoy embarazada.", "«Estoy embarazada» (I'm expecting a baby):"], "I'm pregnant.", ["I'm embarrassed.", "I'm embraced.", "I'm pregnated."], ["Embarazada = pregnant.", "→ pregnant."]),
        M(["Actualmente vivo en Lima.", "«Actualmente vivo en Lima» (at present):"], "Currently, I live in Lima.", ["Actually, I live in Lima.", "Actual, I live in Lima.", "Actuality, I live in Lima."], ["Actualmente = currently / nowadays.", "→ currently."], { "Actually, I live in Lima.": ["«Actually» = en realidad. Actualmente = currently.", "“Actually” means in fact. «Actualmente» = currently."] }),
        M(["Compré un libro en la librería.", "«Librería» (a shop that sells books):"], "bookstore", ["library", "librery", "book library"], ["Librería = bookstore. Library = biblioteca.", "→ bookstore."]),
        M(["No me acuerdo de su nombre.", "«No me acuerdo» (memory):"], "I don't remember", ["I don't record", "I don't agree", "I don't realize"], ["Acordarse = remember.", "→ remember."]),
        M(["¿Me pasas la carpeta azul?", "«Carpeta» (where you keep papers):"], "folder", ["carpet", "carp", "cover"], ["Carpeta = folder.", "→ folder."]),
        M(["Ella es muy simpática.", "«Simpática» (pleasant, friendly):"], "She's very nice.", ["She's very sympathetic.", "She's very simpatic.", "She's very sensible."], ["Simpática = nice / friendly.", "→ nice."])
      ])
    ]),

    T("make-do", ["Make o do", "Make or do"], "A2–B1", ["Las dos significan «hacer», pero no son iguales", "Both mean «hacer» in Spanish, but they aren't the same"], [
      S(["¿Make o do?", "Make or do?"], ["make: crear o producir algo (make a cake, make a mistake). do: tareas y actividades (do homework, do the dishes).", "make: create or produce something (make a cake, make a mistake). do: tasks and activities (do homework, do the dishes)."], [
        M("I always ___ my homework after dinner.", "do", ["make", "made", "does"], ["Tareas → do your homework.", "Tasks → do your homework."], { make: ["homework es una tarea: do your homework.", "homework is a task: do your homework."] }),
        M("Don't worry. Everybody ___ mistakes.", "makes", ["does", "make", "do"], ["make a mistake (equivocarse). Everybody = he/she → makes.", "make a mistake. Everybody → makes."], { does: ["Con mistake siempre va make.", "mistake always goes with make."] }),
        M("Can you ___ the dishes tonight?", "do", ["make", "done", "doing"], ["do the dishes = lavar los platos.", "do the dishes."]),
        M("She ___ a delicious cake for my birthday.", "made", ["did", "do", "makes did"], ["Crear comida → make (pasado: made).", "Creating food → make (past: made)."]),
        M("I need to ___ a phone call.", "make", ["do", "doing", "makes"], ["make a phone call.", "make a phone call."]),
        M("What do you ___? — I'm a nurse.", "do", ["make", "doing", "does"], ["What do you do? = ¿a qué te dedicas?", "What do you do? = your job."]),
        M("Let's ___ a plan for the weekend.", "make", ["do", "doing", "made"], ["make a plan.", "make a plan."]),
        M("I ___ exercise three times a week.", "do", ["make", "does", "doing"], ["do exercise.", "do exercise."], { make: ["Las actividades físicas van con do: do exercise, do yoga.", "Physical activities take do: do exercise, do yoga."] }),
        M("Stop ___ so much noise! The baby is sleeping.", "making", ["doing", "make", "do"], ["make noise = hacer ruido.", "make noise."]),
        M("Can you ___ me a favor?", "do", ["make", "doing", "made"], ["do someone a favor.", "do someone a favor."], { make: ["Favor va con do: do me a favor.", "favor takes do: do me a favor."] }),
        M("He ___ a lot of money with his business.", "makes", ["does", "do", "make"], ["make money = ganar dinero.", "make money = earn money."]),
        M("I have to ___ the laundry today.", "do", ["make", "doing", "made"], ["do the laundry = lavar la ropa.", "do the laundry."]),
        M("Please ___ your bed before school.", "make", ["do", "made", "doing"], ["make your bed = tender la cama.", "make your bed."]),
        M("She ___ her best, but she didn't win.", "did", ["made", "do", "makes"], ["do your best = hacer lo mejor posible (pasado: did).", "do your best (past: did)."]),
        W("I need to ___ a decision before Friday.", ["make"], ["make a decision = tomar una decisión.", "make a decision."]),
        W("Who is going to ___ the shopping?", ["do"], ["do the shopping = hacer las compras.", "do the shopping."])
      ])
    ])
  );
})();
