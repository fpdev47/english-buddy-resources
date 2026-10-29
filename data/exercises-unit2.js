/*
  Temas del libro Travelers 1, unidades 2 y 3 (A2): there is/are, ropa y apariencia, familia,
  transporte, aeropuerto, cantidades, preposiciones, going to, can, should / have to, imperativo
  y adverbios de modo. Formato: ver data/groups.js.
*/
(function () {
  const { M, W, S, T } = window.YEB_X;
  window.YEB_EXERCISES.push(

    T("there-is-are", ["There is / there are", "There is / there are"], "A1–A2", ["Qué hay en un lugar y dónde está", "What's in a place and where it is"], [
      S(["There is o there are", "There is or there are"], ["There is + uno (o algo incontable). There are + varios.", "There is + one (or something uncountable). There are + several."], [
        M("___ a TV in my bedroom.", "There is", ["There are", "It has", "Has"], ["Uno (a TV) → There is.", "One (a TV) → There is."], { Has: ["En español «hay», pero en inglés no se usa has: There is.", "Spanish uses “hay”, but English doesn't use has: There is."], "It has": ["«It has» = tiene. Para decir que algo existe en un lugar: There is.", "“It has” means possession. To say something exists in a place: There is."] }),
        M("___ two sofas in the living room.", "There are", ["There is", "Have", "There have"], ["Varios → There are.", "Several → There are."], { "There is": ["«two sofas» es plural: There are.", "“two sofas” is plural: There are."] }),
        M("___ any milk in the fridge.", "There isn't", ["There aren't", "There no is", "No there is"], ["«milk» es incontable → There isn't any milk.", "“milk” is uncountable → There isn't any milk."], { "There aren't": ["«milk» no se cuenta, se trata como singular: There isn't.", "“milk” is uncountable, so it's singular: There isn't."] }),
        M("___ a pharmacy near here?", "Is there", ["There is", "Are there", "Has"], ["Pregunta: Is there…?", "Question: Is there…?"]),
        M("How many people ___ in your family?", "are there", ["there are", "is there", "have"], ["Pregunta con How many → are there.", "Question with How many → are there."]),
        M("___ some books on the shelves.", "There are", ["There is", "Are", "It's"], ["«some books» es plural → There are.", "“some books” is plural → There are."]),
        M("Is there a hammock on the balcony? — Yes, ___.", "there is", ["it is", "there's", "has"], ["Respuesta corta: Yes, there is. (No se contrae al final.)", "Short answer: Yes, there is. (No contraction at the end.)"])
      ]),
      S(["Preposiciones de lugar", "Prepositions of place"], ["Lee la descripción y elige la preposición.", "Read the description and choose the preposition."], [
        M("There is a picture ___ the wall.", "on", ["in", "at", "under"], ["Sobre una superficie (pared, mesa) → on.", "On a surface (wall, table) → on."], { in: ["«in the wall» sería dentro de la pared. El cuadro cuelga sobre ella: on.", "“in the wall” would mean inside it. A picture hangs on it."] }),
        M("The keys are ___ my bag.", "in", ["on", "at", "between"], ["Dentro → in.", "Inside → in."]),
        M("The cat is sleeping ___ the bed. You can't see it.", "under", ["on", "above", "next to"], ["Debajo → under.", "Below → under."]),
        M("There is a table ___ the two sofas.", "between", ["among", "next", "in"], ["Entre dos cosas → between.", "Between two things → between."], { next: ["Falta «to»: next to. Y si está entre dos, es between.", "It needs “to”: next to. And between two things it's between."] }),
        M("The pharmacy is ___ the restaurant.", "next to", ["next", "near of", "beside of"], ["Al lado de → next to.", "Beside → next to."], { "near of": ["Se dice near (sin «of»): near the restaurant.", "It's near (no “of”): near the restaurant."] }),
        M("There's a lamp ___ the bed, on the ceiling.", "above", ["under", "on", "in"], ["Arriba, sin tocar → above.", "Higher, not touching → above."]),
        M("The TV is ___ the sofa, so you can watch it.", "in front of", ["behind", "under", "between"], ["Delante → in front of.", "→ in front of."]),
        M("My car is ___ the house, in the garage.", "behind", ["in front", "above", "on"], ["Detrás → behind.", "→ behind."])
      ]),
      S(["Muebles y aparatos", "Furniture and appliances"], ["¿Qué objeto es?", "Which object is it?"], [
        M("You keep your clothes in it.", "closet", ["shelf", "pillow", "blinds"], ["Clóset → closet.", "→ closet."]),
        M("You sleep in it on the balcony. It's very Venezuelan!", "hammock", ["armchair", "dresser", "carpet"], ["Hamaca/chinchorro → hammock.", "→ hammock."]),
        M("It keeps the room cool.", "air conditioner", ["heater", "fridge", "fan heater"], ["Aire acondicionado → air conditioner (AC).", "→ air conditioner (AC)."]),
        M("They cover the window.", "curtains", ["cushions", "shelves", "drawers"], ["Cortinas → curtains (o blinds, persianas).", "→ curtains (or blinds)."]),
        M("You look at yourself in it.", "mirror", ["window", "picture", "closet"], ["Espejo → mirror.", "→ mirror."]),
        M("A small table next to your bed:", "night table", ["dresser", "desk", "stand"], ["Mesa de noche → night table (o nightstand).", "→ night table (or nightstand)."])
      ])
    ]),

    T("ropa-apariencia", ["Ropa y apariencia física", "Clothes and appearance"], "A2", ["What are you wearing? What does she look like?", "What are you wearing? What does she look like?"], [
      S(["Ropa", "Clothes"], ["Elige la prenda que corresponde.", "Choose the right item of clothing."], [
        M("You wear them on the beach. They make a funny noise when you walk.", "flip flops", ["boots", "high heels", "sneakers"], ["Chancletas → flip flops.", "→ flip flops."]),
        M("It's cold. Put on your ___ with the hood.", "hoodie", ["tank top", "skirt", "shorts"], ["Suéter con capucha → hoodie.", "Sweatshirt with a hood → hoodie."]),
        M("He runs every morning in his ___.", "sneakers", ["high heels", "sandals", "flats"], ["Zapatos deportivos → sneakers.", "→ sneakers."]),
        M("She's wearing a ___ and a long skirt.", "blouse", ["tie", "polo shirt", "sweatpants"], ["Blusa → blouse.", "→ blouse."]),
        M(["En EE. UU., «pants» significa ___.", "In the US, «pants» means ___ (in Spanish)."], "pantalones", ["ropa interior", "pantaletas", "shorts"], ["En EE. UU. pants = pantalones. (En Reino Unido, pants = ropa interior.)", "In the US pants = trousers. (In the UK, pants = underwear.)"]),
        M("I'm wearing ___ jeans today.", "—", ["a", "an", "one"], ["jeans es plural: sin a. (Se puede decir a pair of jeans.)", "jeans is plural: no a. (You can say a pair of jeans.)"], { a: ["«jeans» es plural, como pants y shorts. Se dice jeans o a pair of jeans.", "“jeans” is plural, like pants and shorts. Say jeans or a pair of jeans."] }),
        M("What ___ you wearing right now?", "are", ["do", "is", "does"], ["Ahora → What are you wearing?", "Now → What are you wearing?"]),
        M("She wears a ___ on her wrist to know the time.", "watch", ["bracelet", "necklace", "clock"], ["Reloj de pulsera → watch. Clock es el de pared.", "Wrist → watch. A clock hangs on the wall."], { clock: ["«clock» es el reloj de pared o de mesa. En la muñeca: watch.", "“clock” is on a wall or table. On your wrist: watch."] })
      ]),
      S(["Describir personas", "Describing people"], ["El pelo se describe en este orden: largo + tipo + color (long curly black hair). Se usa have/has para pelo y ojos, y be para estatura y cuerpo.", "Hair goes in this order: length + type + color (long curly black hair). Use have/has for hair and eyes, and be for height and build."], [
        M("She has ___ hair.", "short straight brown", ["brown straight short", "straight short brown", "short brown straight"], ["Largo + tipo + color: short straight brown.", "Length + type + color: short straight brown."]),
        M("He ___ blue eyes.", "has", ["is", "have", "are"], ["Ojos y pelo → has.", "Eyes and hair → has."], { is: ["Para ojos y pelo se usa have/has: He has blue eyes.", "For eyes and hair use have/has: He has blue eyes."] }),
        M("My brother ___ tall and slim.", "is", ["has", "have", "are"], ["Estatura y cuerpo → is.", "Height and build → is."], { has: ["«tall» es un adjetivo: va con to be (is).", "“tall” is an adjective: it goes with to be (is)."] }),
        M("What does she look like?", "She's tall and has curly hair.", ["She likes pizza.", "She's very friendly.", "She looks at me."], ["«What does she look like?» pregunta por el aspecto físico.", "“What does she look like?” asks about appearance."], { "She's very friendly.": ["Eso es personalidad (What is she like?). La pregunta es por el físico.", "That's personality (What is she like?). This asks about appearance."] }),
        M("He has a lot of hair on his chin and cheeks. He has a ___.", "beard", ["mustache", "goatee", "bald"], ["Barba → beard.", "→ beard."]),
        M("He doesn't have any hair. He's ___.", "bald", ["blonde", "skinny", "pale"], ["Calvo → bald.", "→ bald."]),
        M("«Chubby» means a little ___.", "fat", ["thin", "tall", "short"], ["Chubby = gordito (es más amable que fat).", "Chubby = a little fat (kinder than fat)."]),
        M("Her skin is very light. She has ___ skin.", "fair", ["dark", "kinky", "heavy"], ["Piel clara → fair skin.", "Light skin → fair skin."])
      ]),
      S(["Colores", "Colors"], ["Escribe el color en inglés.", "Write the color in English."], [
        W(["El cielo es ___ (azul).", "The sky is ___."], ["blue"], ["Azul → blue.", "→ blue."]),
        W(["Las hojas son ___ (verdes).", "Leaves are ___."], ["green"], ["Verde → green.", "→ green."]),
        W(["Mi gato es ___ (negro).", "My cat is ___ (black)."], ["black"], ["Negro → black.", "→ black."]),
        W(["Mi abuela tiene el pelo ___ (gris).", "My grandma has ___ hair (gray)."], ["gray", "grey"], ["Gris → gray (EE. UU.) o grey (Reino Unido).", "gray (US) or grey (UK)."]),
        W(["El sol es ___ (amarillo).", "The sun is ___ (yellow)."], ["yellow"], ["Amarillo → yellow.", "→ yellow."]),
        W(["Una mandarina es ___ (anaranjada).", "A tangerine is ___ (orange)."], ["orange"], ["Anaranjado → orange.", "→ orange."])
      ])
    ]),

    T("familia", ["La familia", "The family"], "A1–A2", ["Parientes y cómo hablar de ellos", "Relatives and how to talk about them"], [
      S(["¿Quién es?", "Who is it?"], ["Lee la pista y elige el pariente.", "Read the clue and choose the relative."], [
        M("My mother's sister is my ___.", "aunt", ["uncle", "niece", "cousin"], ["Tía → aunt.", "→ aunt."]),
        M("My brother's daughter is my ___.", "niece", ["nephew", "cousin", "granddaughter"], ["Sobrina → niece. Sobrino → nephew.", "→ niece. (Boy → nephew.)"], { nephew: ["«nephew» es sobrino (varón). Ella es niece.", "“nephew” is a boy. She is your niece."] }),
        M("My uncle's son is my ___.", "cousin", ["nephew", "brother", "brother-in-law"], ["Primo → cousin (igual para hombre y mujer).", "→ cousin (same for male and female)."]),
        M("My wife's father is my ___.", "father-in-law", ["stepfather", "godfather", "grandfather"], ["Suegro → father-in-law.", "→ father-in-law."], { stepfather: ["«stepfather» es padrastro (el esposo de tu mamá). El papá de tu esposa es father-in-law.", "“stepfather” is your mom's husband. Your wife's dad is your father-in-law."] }),
        M("My brothers and sisters are my ___.", "siblings", ["parents", "relatives", "cousins"], ["Hermanos (en general) → siblings.", "→ siblings."]),
        M("My mother's new husband is my ___.", "stepfather", ["father-in-law", "godfather", "uncle"], ["Padrastro → stepfather.", "→ stepfather."]),
        M("My parents' parents are my ___.", "grandparents", ["godparents", "great-parents", "relatives"], ["Abuelos → grandparents.", "→ grandparents."]),
        M("At my baptism, he promised to take care of me. He's my ___.", "godfather", ["stepfather", "grandfather", "father-in-law"], ["Padrino → godfather.", "→ godfather."])
      ]),
      S(["Hablar de la familia", "Talking about family"], ["Elige la opción correcta.", "Choose the correct option."], [
        M("I have two brothers ___ one sister.", "and", ["or", "with", "plus"], ["and = y.", "and."]),
        M("Are you ___ to Kim? You look the same!", "related", ["relative", "family", "parent"], ["Ser pariente de alguien → be related to.", "→ be related to."], { relative: ["«relative» es el sustantivo (un pariente). Con «are you … to» va el adjetivo related.", "“relative” is the noun. With “are you … to” use the adjective related."] }),
        M(["My ___ live in Valencia. (mi papá y mi mamá)", "My ___ live in Valencia. (my mom and dad)"], "parents", ["fathers", "relatives", "parent"], ["Papá y mamá → parents.", "Mom and dad → parents."], { fathers: ["«fathers» son varios papás. Papá y mamá juntos son parents.", "“fathers” means several dads. Mom and dad are parents."] }),
        M(["Mis padres = my ___ (ojo: ¡falso amigo!)", "Mom and dad = my ___ (careful: false friend for Spanish speakers!)"], "parents", ["relatives", "fathers", "familiars"], ["Parents = papá y mamá. Relatives = parientes en general.", "Parents = mom and dad. Relatives = family members in general."], { relatives: ["«relatives» son los parientes (tíos, primos…), no papá y mamá.", "“relatives” means all family members, not just mom and dad."] }),
        M("How big is your family? — ___", "It's small. I have one sister.", ["It's 1.70 meters.", "It's in Caracas.", "Yes, it is."], ["How big…? pregunta el tamaño de la familia.", "How big…? asks the size of the family."]),
        M(["Lucy is Richard and Tanya's ___. (Lucy es mujer)", "Lucy is Richard and Tanya's ___. (Lucy is a girl)"], "daughter", ["son", "sister", "wife"], ["Hija → daughter.", "→ daughter."]),
        W("My sister's husband is my ___.", ["brother-in-law"], ["Cuñado → brother-in-law.", "→ brother-in-law."]),
        W("My son's son is my ___.", ["grandson"], ["Nieto → grandson.", "→ grandson."])
      ])
    ]),

    T("transporte", ["Medios de transporte", "Means of transport"], "A2", ["by bus, on foot, go, come, get to", "by bus, on foot, go, come, get to"], [
      S(["By, on, take, drive, ride", "By, on, take, drive, ride"], ["by + transporte (by car, by bus), pero on foot. Take a bus, drive a car, ride a bike.", "by + transport (by car, by bus), but on foot. Take a bus, drive a car, ride a bike."], [
        M("I go to work ___ car.", "by", ["in", "with", "on"], ["by + medio de transporte (sin a/the).", "by + transport (no a/the)."], { in: ["Se puede decir «in my car», pero sin «my» es by car.", "You can say “in my car”, but without “my” it's by car."] }),
        M("I go to school ___ foot.", "on", ["by", "with", "in"], ["A pie → on foot (no «by foot»).", "→ on foot (not “by foot”)."], { by: ["Es la excepción: a pie es on foot.", "It's the exception: on foot."] }),
        M("I ___ the subway every morning.", "take", ["drive", "ride", "go"], ["Transporte público → take (take the bus, take a taxi).", "Public transport → take."]),
        M("She ___ her bike to the park.", "rides", ["drives", "takes", "goes"], ["Bici y moto → ride.", "Bikes and motorcycles → ride."], { drives: ["«drive» es para carros. La bici se ride.", "“drive” is for cars. You ride a bike."] }),
        M("My dad ___ his car to work.", "drives", ["rides", "takes", "walks"], ["Carro → drive.", "Car → drive."]),
        M("People go to islands ___ boat.", "by", ["on", "with", "in a"], ["by boat.", "by boat."]),
        M("You can get to the top of the mountain by ___.", "cable car", ["subway", "ferry", "ship"], ["Teleférico → cable car.", "→ cable car."]),
        M("A big boat that carries cars and people across the water:", "ferry", ["cable car", "chopper", "subway"], ["→ ferry.", "→ ferry."])
      ]),
      S(["Go, come, get to", "Go, come, get to"], ["go = ir (lejos de donde hablas) · come = venir (hacia donde estás) · get to = llegar a.", "go = move away from where you are · come = move toward where you are · get to = arrive at."], [
        M("How do you ___ to work? — By bus. It takes 40 minutes.", "get", ["arrive", "come to", "reach to"], ["How do you get to…? = ¿cómo llegas a…?", "How do you get to…? = how do you travel there?"], { arrive: ["Con arrive se dice arrive at/in, y no se usa en esta pregunta. Se dice How do you get to work?", "arrive takes at/in and doesn't fit here. Say How do you get to work?"] }),
        M(["(Estás en tu casa) ___ to my party on Saturday!", "(You're at home) ___ to my party on Saturday!"], "Come", ["Go", "Get", "Arrive"], ["Hacia donde estás tú → come.", "Toward where you are → come."]),
        M("I'm tired. I'm going to ___ home.", "go", ["come", "get to", "arrive"], ["go home (sin «to»).", "go home (no “to”)."], { "get to": ["«get to» va con lugares, pero home no lleva «to»: go home / get home.", "With home there's no “to”: go home / get home."] }),
        M("What time do you ___ home?", "get", ["get to", "arrive to", "come to"], ["get home (sin to).", "get home (no to)."], { "get to": ["Con home no se usa to: get home.", "With home there's no to: get home."], "arrive to": ["No existe «arrive to». Es arrive at/in, o get home.", "“arrive to” doesn't exist. It's arrive at/in, or get home."] }),
        M("We usually ___ to the beach on Sundays.", "go", ["come", "get", "arrive"], ["Ir → go.", "→ go."])
      ])
    ]),

    T("aeropuerto", ["En el aeropuerto", "At the airport"], "A2", ["Vocabulario de viaje y para qué sirve cada cosa", "Travel vocabulary and what everything is for"], [
      S(["¿Para qué vas allí?", "Why do you go there?"], ["Une cada lugar con su propósito (to + verbo).", "Match each place with its purpose (to + verb)."], [
        M("You go to the baggage carousel ___.", "to pick up your baggage", ["to board your plane", "to buy a snack", "to withdraw money"], ["La cinta de equipaje → recoger maletas.", "→ to pick up your baggage."]),
        M("You wait near the gate ___.", "to board your plane", ["to check in", "to eat a meal", "to pick up your baggage"], ["Puerta de embarque → abordar.", "→ to board your plane."]),
        M("You go to the ticket counter ___.", "to check in for your flight", ["to withdraw money", "to relax", "to buy a snack"], ["Mostrador → hacer el check-in.", "→ to check in."]),
        M("You go to the ATM ___.", "to withdraw money", ["to check in", "to board", "to eat"], ["Cajero → sacar dinero.", "→ to withdraw money."]),
        M("You fill out an immigration form ___.", "to be authorized to enter a country", ["to buy a drink", "to relax during the flight", "to go to the restroom"], ["Formulario de inmigración → entrar al país.", "→ to enter a country."]),
        M("You use your carry-on baggage ___.", "to keep your valuable things with you", ["to pick up your baggage", "to board the plane", "to withdraw money"], ["Equipaje de mano → tener tus cosas de valor contigo.", "→ to keep valuables with you."]),
        M("You go to the vending machine ___.", "to buy a snack or a drink", ["to check in", "to board", "to fill out a form"], ["Máquina expendedora → comprar algo.", "→ to buy a snack."]),
        M("You look at the departures monitor ___.", "to check the time and gate of your flight", ["to pick up your bags", "to buy food", "to change money"], ["La pantalla → ver hora y puerta.", "→ to check your flight."])
      ]),
      S(["Conversaciones en el aeropuerto", "Airport conversations"], ["Elige la respuesta lógica.", "Choose the logical answer."], [
        M("What time does your plane ___?", "depart", ["departs", "leaving", "departed"], ["Después de does → forma base: depart.", "After does → base form: depart."]),
        M("Window or aisle seat?", "Aisle, please. I like to stretch my legs.", ["Yes, please.", "My seat is blue.", "At gate 12."], ["aisle = pasillo (se pronuncia «ail»).", "aisle = the seat by the corridor (pronounced “ile”)."]),
        M("Do you have anything to declare?", "No, just clothes and gifts.", ["Yes, I'm declaring.", "Gate 5.", "I'm from Peru."], ["declare = declarar en aduana.", "declare = tell customs about goods."]),
        M("Your flight is delayed. That means it's ___.", "late", ["canceled", "early", "full"], ["Delayed = retrasado.", "Delayed = late."]),
        M("Excuse me, where is the ___? I need to wash my hands.", "restroom", ["gate", "carousel", "aisle"], ["Baño → restroom.", "→ restroom."]),
        M("Can I see your ___ pass, please?", "boarding", ["board", "boarded", "boards"], ["Pase de abordar → boarding pass.", "→ boarding pass."])
      ])
    ]),

    T("cantidades", ["Cantidades", "Quantities"], "A2", ["how much / how many, some / any, a lot of, a few / a little", "how much / how many, some / any, a lot of, a few / a little"], [
      S(["How much o how many", "How much or how many"], ["many: cosas que se cuentan (friends, people). much: cosas que no se cuentan (money, time, water).", "many: countable things (friends, people). much: uncountable things (money, time, water)."], [
        M("How ___ money do you need?", "much", ["many", "lot", "more"], ["money no se cuenta → much.", "money is uncountable → much."], { many: ["El dinero no se cuenta uno por uno (contamos dólares, no «moneys»): much.", "Money is uncountable (you count dollars, not “moneys”): much."] }),
        M("How ___ people are coming to the party?", "many", ["much", "lot", "more"], ["people se cuenta → many.", "people is countable → many."], { much: ["Las personas se cuentan: many.", "People can be counted: many."] }),
        M("How ___ time do you spend on your phone?", "much", ["many", "lots", "long of"], ["time → much.", "time → much."]),
        M("How ___ times a week do you exercise?", "many", ["much", "often", "lot"], ["«times» (veces) se cuenta → many.", "“times” is countable → many."], { much: ["Aquí «times» = veces, que se cuentan: many.", "Here “times” means occasions, which you can count: many."] }),
        M("How ___ is this jacket? — It's $40.", "much", ["many", "cost", "price"], ["Precio → How much is it?", "Price → How much is it?"]),
        M("How ___ sugar do you want in your coffee?", "much", ["many", "a lot", "few"], ["sugar → much.", "sugar → much."])
      ]),
      S(["Some o any", "Some or any"], ["some: oraciones afirmativas. any: negativas y preguntas. (Para ofrecer o pedir algo, se usa some: Would you like some coffee?)", "some: positive sentences. any: negatives and questions. (To offer or ask for something, use some: Would you like some coffee?)"], [
        M("There are ___ cookies in the kitchen.", "some", ["any", "a", "much"], ["Afirmativa → some.", "Positive → some."]),
        M("We don't have ___ eggs.", "any", ["some", "no", "a"], ["Negativa → any.", "Negative → any."], { no: ["«don't have no» es doble negativo. Es don't have any (o have no).", "“don't have no” is a double negative. It's don't have any."] }),
        M("Do you have ___ questions?", "any", ["some", "a", "much"], ["Pregunta → any.", "Question → any."]),
        M("Would you like ___ coffee?", "some", ["any", "a", "many"], ["Ofrecer algo → some, aunque sea pregunta.", "Offering → some, even in a question."], { any: ["Cuando ofreces algo se usa some: Would you like some…?", "When you offer something, use some."] }),
        M("I need ___ help with my homework.", "some", ["any", "a", "many"], ["Afirmativa → some.", "Positive → some."])
      ]),
      S(["A lot of, a few, a little", "A lot of, a few, a little"], ["a lot of + sustantivo; al final de la frase, solo a lot. a few + contables, a little + incontables.", "a lot of + noun; at the end of a sentence, just a lot. a few + countable, a little + uncountable."], [
        M("I have ___ friends in Miami.", "a lot of", ["a lot", "much", "a little"], ["Antes de un sustantivo → a lot of.", "Before a noun → a lot of."], { "a lot": ["Antes de «friends» hace falta of: a lot of friends.", "Before “friends” you need of: a lot of friends."] }),
        M("Do you like pizza? — Yes, ___!", "a lot", ["a lot of", "many", "much of"], ["Al final, sin sustantivo → a lot.", "At the end, no noun → a lot."], { "a lot of": ["No hay sustantivo después, así que va solo a lot.", "No noun follows, so just a lot."] }),
        M("Can I have ___ water, please?", "a little", ["a few", "many", "a little of"], ["water no se cuenta → a little.", "water is uncountable → a little."], { "a few": ["a few es para cosas que se cuentan (a few cookies).", "a few is for countable things (a few cookies)."] }),
        M("I only have ___ problems. Nothing serious.", "a few", ["a little", "much", "a lot"], ["problems se cuenta → a few.", "problems is countable → a few."]),
        M("We have ___ time before the movie. Let's get popcorn.", "a little", ["a few", "many", "few of"], ["time → a little.", "time → a little."]),
        M("There are ___ people in the line. Let's wait.", "a few", ["a little", "much", "little"], ["people → a few.", "people → a few."])
      ])
    ]),

    T("preposiciones", ["Preposiciones in, on, at", "Prepositions in, on, at"], "A2", ["Para tiempo, lugares y otros usos", "For time, places and other uses"], [
      S(["Tiempo", "Time"], ["in: meses, años, partes del día (in July, in the morning). on: días y fechas (on Monday, on May 5th). at: horas y momentos exactos (at 3 p.m., at night).", "in: months, years, parts of the day (in July, in the morning). on: days and dates (on Monday, on May 5th). at: times and exact moments (at 3 p.m., at night)."], [
        M("My birthday is ___ July.", "in", ["on", "at"], ["Meses → in.", "Months → in."]),
        M("The class is ___ Monday.", "on", ["in", "at"], ["Días → on.", "Days → on."], { in: ["Con días de la semana va on.", "With days of the week use on."] }),
        M("The movie starts ___ 8:30.", "at", ["in", "on"], ["Horas → at.", "Times → at."]),
        M("I study ___ the morning.", "in", ["on", "at"], ["in the morning / in the afternoon / in the evening.", "in the morning / afternoon / evening."]),
        M("I can't sleep ___ night.", "at", ["in", "on"], ["La excepción: at night.", "The exception: at night."], { in: ["Se dice in the morning, pero at night.", "It's in the morning, but at night."] }),
        M("We met ___ 2019.", "in", ["on", "at"], ["Años → in.", "Years → in."]),
        M("Let's have a party ___ New Year's Eve.", "on", ["in", "at"], ["Un día específico → on.", "A specific day → on."]),
        M("I'm always tired ___ the weekend.", "on", ["in", "at"], ["En EE. UU.: on the weekend (en Reino Unido: at the weekend).", "US: on the weekend (UK: at the weekend)."])
      ]),
      S(["Lugares y otros usos", "Places and other uses"], ["in: dentro, ciudades y países. on: superficies, calles, y en pantallas y transporte (on YouTube, on the bus). at: un punto o evento (at home, at work, at the party).", "in: inside, cities and countries. on: surfaces, streets, screens and transport (on YouTube, on the bus). at: a point or event (at home, at work, at the party)."], [
        M("It's ___ YouTube. I'll send you the link.", "on", ["in", "at"], ["Plataformas y pantallas → on (on YouTube, on TV, on Instagram).", "Platforms and screens → on."], { in: ["En español «en YouTube», pero en inglés se dice on YouTube.", "English says on YouTube."] }),
        M("She lives ___ Madrid.", "in", ["on", "at"], ["Ciudades → in.", "Cities → in."]),
        M("I'm ___ home. Come over!", "at", ["in", "on"], ["at home (sin the).", "at home (no the)."]),
        M("I'm ___ the bus. I'll be there in ten minutes.", "on", ["in", "at"], ["Bus, tren, avión → on.", "Bus, train, plane → on."], { in: ["Para transporte público se dice on: on the bus.", "For public transport say on: on the bus."] }),
        M("Get ___ the car. We're late!", "in", ["on", "at"], ["Carro y taxi → in (te sientas adentro).", "Cars and taxis → in."]),
        M("We met ___ a party.", "at", ["in", "on"], ["Eventos → at.", "Events → at."]),
        M("The pharmacy is ___ Bolívar Avenue.", "on", ["in", "at"], ["Calles → on.", "Streets → on."]),
        M("Call me ___ my cell phone.", "on", ["in", "at"], ["on the phone, on my cell.", "on the phone, on my cell."])
      ])
    ]),

    T("going-to", ["Futuro con going to", "Future with going to"], "A2", ["Planes, intenciones y «so» para consecuencias", "Plans, intentions and “so” for results"], [
      S(["Planes e intenciones", "Plans and intentions"], ["am / is / are + going to + verbo base.", "am / is / are + going to + base verb."], [
        M("I ___ stay in bed all day. I need to rest.", "am going to", ["going to", "am going", "go to"], ["I + am going to + verbo.", "I + am going to + verb."], { "going to": ["Falta am: I am going to.", "am is missing: I am going to."], "am going": ["Falta «to» antes del verbo: am going to stay.", "“to” is missing before the verb."] }),
        M("Peter saved money. He ___ buy a house.", "is going to", ["are going to", "going to", "is go to"], ["He → is going to.", "He → is going to."]),
        M("She ___ travel with us. She lost her passport.", "isn't going to", ["doesn't going to", "not going to", "aren't going to"], ["Negativa: isn't going to.", "Negative: isn't going to."], { "doesn't going to": ["going to se niega con to be: isn't going to.", "going to is negated with be: isn't going to."] }),
        M("The food looks terrible. I ___ eat it.", "'m not going to", ["don't going to", "not going", "'m going not to"], ["I'm not going to.", "I'm not going to."]),
        M("___ you going to call her?", "Are", ["Do", "Will", "Is"], ["Pregunta: Are you going to…?", "Question: Are you going to…?"]),
        M("Look at those clouds! It ___ rain.", "is going to", ["going to", "goes to", "is go"], ["Predicción con evidencia → going to.", "A prediction from what you see → going to."]),
        M("We ___ take the bus because the subway is out of order.", "are going to", ["is going to", "going", "go to"], ["We → are going to.", "We → are going to."]),
        W("They ___ (not / come) to the party. They're sick.", ["are not going to come", "aren't going to come", "re not going to come"], ["Negativa: aren't going to come.", "Negative: aren't going to come."])
      ]),
      S(["So: la consecuencia", "So: the result"], ["«So» presenta el resultado: I hate the cold, so I never go skiing. Elige la consecuencia lógica.", "“So” introduces the result: I hate the cold, so I never go skiing. Choose the logical result."], [
        M("I work seven days a week, so ___", "I'm always tired.", ["I have a lot of free time.", "I'm never busy.", "I sleep all day."], ["Trabajar mucho → estar cansado.", "Working a lot → being tired."]),
        M("Lee is very shy, so ___", "he doesn't talk much at parties.", ["he loves speaking in public.", "he's always the center of attention.", "he talks to everybody."], ["Tímido → habla poco.", "Shy → doesn't talk much."]),
        M("I'm a vegetarian, so ___", "I don't eat meat.", ["I love steak.", "I eat chicken every day.", "I work at a butcher's."], ["Vegetariano → no come carne.", "Vegetarian → no meat."]),
        M("My city is very cold, so ___", "I always wear a jacket.", ["I wear shorts in winter.", "I go to the beach every day.", "I never wear a sweater."], ["Frío → chaqueta.", "Cold → jacket."]),
        M("It's raining, ___ I'm going to take an umbrella.", "so", ["because", "but", "or"], ["Resultado → so.", "Result → so."], { because: ["«because» da la causa. Aquí viene el resultado (llevo paraguas): so.", "“because” gives a reason. Here comes the result: so."] }),
        M("I'm going to take a break ___ I'm very tired.", "because", ["so", "but", "and"], ["Aquí viene la causa (estoy cansado) → because.", "Here comes the reason → because."], { so: ["Después viene la causa, no el resultado: because.", "What follows is the reason, not the result: because."] })
      ])
    ]),

    T("can", ["Can / can't", "Can / can't"], "A2", ["Habilidades, posibilidades y pedir permiso", "Abilities, possibilities and asking for permission"], [
      S(["Habilidad y posibilidad", "Ability and possibility"], ["can + verbo base, igual para todos (he can, no «he cans»).", "can + base verb, the same for everyone (he can, not “he cans”)."], [
        M("My baby ___!", "can speak", ["can speaks", "can to speak", "cans speak"], ["can + verbo base, sin -s.", "can + base verb, no -s."], { "can speaks": ["Después de can el verbo no lleva -s, aunque sea he/she.", "After can the verb never takes -s."], "can to speak": ["Después de can no va to.", "can isn't followed by to."] }),
        M("I ___ repair a computer. I don't know how.", "can't", ["don't can", "can not to", "no can"], ["Negativa: can't (cannot).", "Negative: can't (cannot)."], { "don't can": ["can se niega solo: can't. Nunca con don't.", "can is made negative by itself: can't. Never with don't."] }),
        M("My grandfather ___ remember my name.", "can't", ["doesn't can", "can", "isn't can"], ["No puede recordar → can't.", "→ can't."]),
        M("___ you speak Spanish?", "Can", ["Do", "Are", "Does"], ["Habilidad → Can you…?", "Ability → Can you…?"]),
        M("Where ___ I find a pharmacy?", "can", ["do", "am", "does"], ["Where can I find…? = ¿dónde puedo encontrar…?", "Where can I find…?"]),
        M("Can she swim? — Yes, she ___.", "can", ["does", "cans", "is"], ["Respuesta corta: Yes, she can.", "Short answer: Yes, she can."]),
        M("With a GPS, you ___ see where you are.", "can", ["can't", "should", "have"], ["Posibilidad → can.", "Possibility → can."])
      ]),
      S(["Pedir permiso y favores", "Asking for permission and favors"], ["Can I…? = ¿puedo…? · Can you…? = ¿puedes…? (un favor).", "Can I…? = asking permission · Can you…? = asking a favor."], [
        M("___ I pay with my credit card?", "Can", ["Do", "Am", "May to"], ["Pedir permiso → Can I…?", "Permission → Can I…?"]),
        M("___ you help me with my bags, please?", "Can", ["Do", "Are", "Should"], ["Favor → Can you…?", "Favor → Can you…?"]),
        M("Can I use your phone? — Sure, ___.", "go ahead", ["you can't", "I can", "don't"], ["Dar permiso → Sure, go ahead.", "→ Sure, go ahead."]),
        M("Can you open the window? — Sorry, I ___. My hands are full.", "can't", ["don't", "not", "can"], ["No puedo → I can't.", "→ I can't."]),
        W(["___ I have the check, please? (pides la cuenta)", "___ I have the check, please? (you ask for the bill)"], ["can"], ["Pedir algo con amabilidad → Can I have…?", "→ Can I have…?"])
      ])
    ]),

    T("should-have-to", ["Should y have to", "Should and have to"], "A2", ["Consejos, obligaciones y lo que no es necesario", "Advice, obligations and what isn't necessary"], [
      S(["Consejos con should", "Advice with should"], ["should / shouldn't + verbo base. No cambia con he/she.", "should / shouldn't + base verb. It doesn't change with he/she."], [
        M("Bob is always stressed. He ___ take a vacation.", "should", ["shoulds", "should to", "shouldn't"], ["Consejo → should + verbo.", "Advice → should + verb."], { "should to": ["Después de should no va to.", "should isn't followed by to."], shoulds: ["should nunca lleva -s.", "should never takes -s."] }),
        M("George smokes 20 cigarettes a day. He ___ smoke so much.", "shouldn't", ["should", "doesn't should", "don't should"], ["Mala idea → shouldn't.", "Bad idea → shouldn't."], { "doesn't should": ["should se niega solo: shouldn't.", "should is negated by itself: shouldn't."] }),
        M("I have a difficult exam tomorrow. I ___ go to bed late.", "shouldn't", ["should", "have to", "can"], ["Mala idea → shouldn't.", "→ shouldn't."]),
        M("Tina feels sick. She ___ see a doctor.", "should", ["shouldn't", "doesn't have to", "can't"], ["Buena idea → should.", "→ should."]),
        M("What ___ I wear for the interview?", "should", ["do should", "should to", "shoulds"], ["Pregunta: What should I…?", "Question: What should I…?"]),
        M("That ATM never has money. You ___ use it.", "shouldn't", ["should", "have to", "has to"], ["Mala idea → shouldn't.", "→ shouldn't."])
      ]),
      S(["Have to y don't have to", "Have to and don't have to"], ["have to / has to = es obligatorio. don't / doesn't have to = no es necesario (puedes hacerlo si quieres). ¡No significa «está prohibido»!", "have to / has to = it's necessary. don't / doesn't have to = it isn't necessary (you can if you want). It doesn't mean “it's forbidden”!"], [
        M("My mother ___ wake up early every day.", "has to", ["have to", "has", "must to"], ["She → has to.", "She → has to."], { "have to": ["Con he/she/it se usa has to.", "With he/she/it use has to."] }),
        M("You ___ have a passport to travel abroad.", "have to", ["don't have to", "has to", "should to"], ["Obligatorio → have to.", "Required → have to."]),
        M("There's food in the microwave. You ___ cook.", "don't have to", ["have to", "doesn't have to", "shouldn't to"], ["No es necesario cocinar → don't have to.", "Not necessary → don't have to."]),
        M("It's Sunday! I ___ go to work today.", "don't have to", ["have to", "has to", "can't to"], ["No es necesario → don't have to.", "→ don't have to."]),
        M("Presents ___ be expensive to be good.", "don't have to", ["have to", "doesn't have to", "has to"], ["No es necesario → don't have to (presents = they).", "→ don't have to (presents = they)."]),
        M("Kids, you ___ touch that. It's hot!", "can't", ["don't have to", "doesn't have to", "have"], ["Prohibido → can't (o mustn't). «Don't have to» significa que no es necesario.", "Forbidden → can't (or mustn't). “Don't have to” means not necessary."], { "don't have to": ["«don't have to» = no es necesario. Para prohibir: can't o mustn't.", "“don't have to” = not necessary. To forbid: can't or mustn't."] }),
        M("___ you have to work tomorrow?", "Do", ["Have", "Are", "Should"], ["Pregunta: Do you have to…?", "Question: Do you have to…?"], { Have: ["«have to» pregunta con do: Do you have to…?", "“have to” uses do in questions."] }),
        M("He won the lottery. He ___ worry about money anymore.", "doesn't have to", ["don't have to", "has to", "hasn't to"], ["He → doesn't have to.", "He → doesn't have to."])
      ]),
      S(["Bored o boring", "Bored or boring"], ["bored = cómo te sientes. boring = cómo es algo o alguien.", "bored = how you feel. boring = what something or someone is like."], [
        M("This class is so ___.", "boring", ["bored", "bore", "boredom"], ["La clase aburre → boring.", "The class bores you → boring."]),
        M("I'm ___. Let's do something!", "bored", ["boring", "bore", "bores"], ["Te sientes aburrido → bored.", "You feel → bored."], { boring: ["«I'm boring» = soy una persona aburrida. Te sientes bored.", "“I'm boring” = you're a boring person. You feel bored."] }),
        M("My uncle talks about taxes all the time. He's so ___!", "boring", ["bored", "board", "bores"], ["Él aburre a los demás → boring.", "He bores others → boring."])
      ])
    ]),

    T("imperativo", ["El imperativo", "The imperative"], "A2", ["Órdenes, prohibiciones y consejos; another y other", "Commands, prohibitions and advice; another and other"], [
      S(["Dar instrucciones", "Giving instructions"], ["Empieza con el verbo (Wait here!), con Don't (Don't go!) o con Always / Never (Always carry your ID).", "Start with the verb (Wait here!), with Don't (Don't go!) or with Always / Never (Always carry your ID)."], [
        M("___ your room right now!", "Clean", ["You clean", "Cleaning", "To clean"], ["Orden → verbo al inicio: Clean.", "Command → verb first: Clean."], { "To clean": ["La orden empieza con el verbo solo, sin to.", "A command starts with the bare verb, no to."] }),
        M("___ eat my sandwich!", "Don't", ["No", "Not", "Doesn't"], ["Prohibición → Don't + verbo.", "Prohibition → Don't + verb."], { No: ["En español «¡no comas!», pero en inglés es Don't eat.", "English uses Don't: Don't eat."] }),
        M("___ drink and drive.", "Never", ["Don't never", "No", "Not ever"], ["Never + verbo.", "Never + verb."], { "Don't never": ["Doble negativo. Se dice Never drink o Don't ever drink.", "Double negative. Say Never drink or Don't ever drink."] }),
        M("If you go to the beach: ___ sunscreen.", "Wear", ["You wearing", "Wears", "To wear"], ["Consejo → verbo: Wear sunscreen.", "Advice → verb: Wear sunscreen."]),
        M("If you want to save money: ___ eat out every day.", "Don't", ["Do", "Doesn't", "No"], ["→ Don't eat out every day.", "→ Don't eat out every day."]),
        M("___ patient! You will see results.", "Be", ["Are", "Is", "Being"], ["Imperativo de to be → Be.", "Imperative of to be → Be."], { Are: ["La orden usa la forma base: Be patient!", "Commands use the base form: Be patient!"] }),
        M("___ late, please!", "Don't be", ["Don't", "Not be", "No be"], ["Prohibir con adjetivo → Don't be late.", "→ Don't be late."]),
        M("Please, ___ me. I'm lost.", "help", ["helps", "to help", "helping"], ["Please + verbo base.", "Please + base verb."])
      ]),
      S(["Another u other", "Another or other"], ["another + un sustantivo singular (another day). other + plural (other people).", "another + singular noun (another day). other + plural (other people)."], [
        M("I need ___ day to finish the project.", "another", ["other", "others", "an other"], ["day es singular → another.", "day is singular → another."], { other: ["Con un sustantivo singular va another (an + other en una palabra).", "With a singular noun use another (one word)."] }),
        M("Do you have ___ ideas?", "other", ["another", "others", "an other"], ["ideas es plural → other.", "ideas is plural → other."], { another: ["another significa «uno más»; ideas es plural: other.", "another means “one more”; ideas is plural: other."] }),
        M("Don't give me ___ excuse!", "another", ["other", "others", "an another"], ["excuse singular → another.", "→ another."]),
        M("Tommy doesn't play with ___ kids.", "other", ["another", "others", "an other"], ["kids plural → other.", "→ other."]),
        M("I want to meet ___ people.", "other", ["another", "others", "an other"], ["people es plural → other.", "people is plural → other."], { others: ["«others» va solo, sin sustantivo (Some like it, others don't). Con people: other people.", "“others” stands alone. With people: other people."] }),
        M("Ask me ___ question, please!", "another", ["other", "others", "a other"], ["question singular → another.", "→ another."])
      ])
    ]),

    T("adverbios-modo", ["Adverbios de modo", "Adverbs of manner"], "A2", ["Cómo se hacen las cosas: slowly, well, fast", "How things are done: slowly, well, fast"], [
      S(["¿Adjetivo o adverbio?", "Adjective or adverb?"], ["El adjetivo describe una cosa o persona (a slow car). El adverbio describe cómo se hace algo (drive slowly). Casi siempre: adjetivo + -ly.", "An adjective describes a thing or person (a slow car). An adverb describes how something is done (drive slowly). Usually: adjective + -ly."], [
        M("Drive ___! The road is wet.", "carefully", ["careful", "carefuly", "care"], ["Cómo maneja → adverbio: carefully.", "How you drive → adverb: carefully."], { careful: ["«careful» es adjetivo (Be careful!). Para describir cómo manejas: carefully.", "“careful” is an adjective (Be careful!). For how you drive: carefully."] }),
        M("She is a ___ driver.", "careful", ["carefully", "care", "carefulness"], ["Describe a la persona (driver) → adjetivo: careful.", "Describes the person → adjective: careful."], { carefully: ["Aquí describes a la conductora (a driver), no la acción: careful.", "Here you describe the driver, not the action: careful."] }),
        M("He speaks English very ___.", "well", ["good", "goodly", "nice"], ["good → well (irregular).", "good → well (irregular)."], { good: ["«good» es adjetivo (a good student). Para cómo habla: well.", "“good” is an adjective. For how he speaks: well."] }),
        M("My computer works very ___.", "slowly", ["slow", "slowy", "slowlly"], ["Cómo funciona → slowly.", "→ slowly."]),
        M("She runs very ___.", "fast", ["fastly", "fasty", "quick"], ["fast no cambia: fast → fast. (Fastly no existe.)", "fast stays fast. (“Fastly” doesn't exist.)"], { fastly: ["«fastly» no existe. El adverbio es fast.", "“fastly” doesn't exist. The adverb is fast."] }),
        M("He works ___. Ten hours a day.", "hard", ["hardly", "hards", "hardy"], ["hard → hard. ¡Ojo! hardly significa «casi no».", "hard → hard. Careful: hardly means “almost not”."], { hardly: ["«hardly» significa «casi no» (I hardly work = casi no trabajo). Lo contrario de lo que quieres decir.", "“hardly” means “almost not”. The opposite of what you mean."] }),
        M("The baby is sleeping. Close the door ___.", "quietly", ["quiet", "quietness", "quieter"], ["Cómo cierras → quietly.", "→ quietly."]),
        M("I can't sing. I sing ___.", "badly", ["bad", "badily", "worse"], ["bad → badly.", "bad → badly."])
      ]),
      S(["Escribe el adverbio", "Write the adverb"], ["Convierte el adjetivo entre paréntesis.", "Turn the adjective in brackets into an adverb."], [
        W("She answered the question ___ (easy).", ["easily"], ["easy → easily (la y cambia a i).", "easy → easily (y becomes i)."]),
        W("The kids played ___ (happy) in the park.", ["happily"], ["happy → happily.", "happy → happily."]),
        W("He closed the door ___ (angry).", ["angrily"], ["angry → angrily.", "angry → angrily."]),
        W("Please hold the baby ___ (gentle).", ["gently"], ["gentle → gently (se quita la e).", "gentle → gently (drop the e)."]),
        W("She sings ___ (beautiful).", ["beautifully"], ["beautiful → beautifully.", "beautiful → beautifully."]),
        W("You did the exam ___ (good)! Congratulations!", ["well"], ["good → well.", "good → well."])
      ])
    ])
  );
})();
