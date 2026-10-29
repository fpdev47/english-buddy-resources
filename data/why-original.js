/*
  «¿Por qué está mal mi respuesta?» para los temas originales (data/exercises.js).
  Cuando el estudiante elige una opción incorrecta, ve por qué esa opción no sirve, además de la
  explicación de la correcta. Formato: tema → "sección-pregunta" → { "opción": ["ES", "EN"] }.
  Las preguntas se cuentan desde 0 (la primera pregunta de la primera sección es "0-0").
  En los pronombres objeto las explicaciones salen de reglas (abajo), porque los errores se repiten.
*/
(function () {
  const W = {
    "numeros": {
      "0-6": { "one thousand nine sixty": ["Los años se dicen de dos en dos: 19 | 60 → nineteen sixty.", "Years are said in pairs: 19 | 60 → nineteen sixty."], "nine sixty": ["Faltan los dos primeros números: 19 | 60.", "The first two digits are missing: 19 | 60."] },
      "0-7": { "twenty eight": ["Eso sería 28. Del 2000 al 2009 se dice two thousand + número.", "That's 28. From 2000 to 2009 say two thousand + number."], "two thousands eight": ["«thousand» no lleva -s después de un número.", "“thousand” takes no -s after a number."] },
      "0-9": { "twenty fifteen": ["Esta sí es correcta: 20 | 15. La pregunta busca la que NO lo es.", "This one is correct: 20 | 15. The question asks for the one that is NOT."], "two thousand fifteen": ["También es correcta. Busca la que NO se dice.", "This is also correct. Look for the one that isn't said."] },
      "1-3": { "four hundred seventy-five": ["Eso sería $475. Con precios: dólares + centavos → four seventy-five.", "That's $475. With prices: dollars + cents → four seventy-five."], "forty-seven five": ["Se separa en dólares (4) y centavos (75).", "Split it into dollars (4) and cents (75)."] },
      "1-4": { "seven hundred forty-five": ["Las horas no llevan hundred: seven forty-five.", "Times don't use hundred: seven forty-five."] },
      "1-5": { "one thousand two ninety-nine": ["Son 12 dólares, no mil: twelve ninety-nine.", "It's 12 dollars, not a thousand: twelve ninety-nine."] },
      "2-0": { "five hundred fifty-five, one eighty-two": ["Los teléfonos se dicen número por número, no como cantidades.", "Phone numbers are said digit by digit, not as amounts."] },
      "2-4": { "How is your phone number?": ["«How is…?» pregunta cómo está algo. Para datos se usa What's…?", "“How is…?” asks about a condition. For information use What's…?"], "How much is your phone number?": ["«How much» pregunta un precio.", "“How much” asks for a price."] },
      "3-0": { "three thousands": ["Después de un número, thousand va sin -s.", "After a number, thousand has no -s."], "three thousand of": ["Con un número exacto no va of: three thousand people.", "With an exact number there's no of: three thousand people."] },
      "3-2": { "two comma five": ["En inglés los decimales llevan punto (point), no coma.", "English decimals use a point, not a comma."], "two dot five": ["«dot» se usa en correos y páginas web; en números es point.", "“dot” is for emails and websites; in numbers it's point."] },
      "3-3": { "uno coma cinco": ["En inglés la coma separa miles: 1,500 = mil quinientos.", "In English the comma separates thousands: 1,500 = fifteen hundred."] },
      "3-4": { "un billón (un millón de millones)": ["¡Falso amigo! One billion = mil millones (1.000.000.000).", "False friend! One billion = a thousand million."] },
      "3-5": { thirty: ["thirty = 30. El 13 es thirteen (acento al final: thir-TEEN).", "thirty = 30. 13 is thirteen (stress at the end: thir-TEEN)."], threeteen: ["Se escribe thirteen, no «threeteen».", "It's spelled thirteen."] },
      "3-6": { fifteen: ["fifteen = 15. El 50 es fifty (acento al inicio: FIF-ty).", "fifteen = 15. 50 is fifty (stress at the start: FIF-ty)."], fivety: ["Se escribe fifty, no «fivety».", "It's spelled fifty."] },
      "3-7": { Thousand: ["Sin número exacto (miles de personas) se usa thousands of.", "Without an exact number use thousands of."] }
    },
    "fechas": {
      "1-0": { "July four": ["Las fechas se dicen con ordinales: fourth, no four.", "Dates use ordinal numbers: fourth, not four."] },
      "1-1": { "the four of July": ["Con ordinal: the fourth of July.", "With an ordinal: the fourth of July."] },
      "1-2": { "in May one": ["Fechas con día → on, y con ordinal: on May first.", "Dates with a day → on, with an ordinal: on May first."], "at May first": ["at es para horas. Para fechas: on.", "at is for times. For dates: on."], "on May one": ["La preposición está bien, pero se dice first, no one.", "The preposition is right, but it's first, not one."] },
      "1-3": { "March twenty-two": ["Falta el ordinal: twenty-second.", "It needs the ordinal: twenty-second."] },
      "1-4": { "How is the date today?": ["«How is» pregunta cómo está algo. Para la fecha: What's the date?", "“How is” asks about a condition. For the date: What's the date?"] },
      "1-5": { "twenty-five": ["La «th» indica ordinal: twenty-fifth.", "The “th” means an ordinal: twenty-fifth."], "twenty-fiveth": ["five → fifth (cambia la palabra).", "five → fifth (the word changes)."] },
      "1-6": { "October three, two zero two six": ["Día con ordinal (third) y año en pares (twenty twenty-six).", "Ordinal day (third) and the year in pairs (twenty twenty-six)."] },
      "2-0": { "3 de abril de 2026": ["En EE. UU. va primero el mes: 03 = marzo.", "In the US the month comes first: 03 = March."] },
      "2-1": { "4 de marzo de 2026": ["En el Reino Unido va primero el día: 03 = día 3.", "In the UK the day comes first: 03 = the 3rd."] },
      "2-2": { "25/12": ["Así es en el Reino Unido. En EE. UU. el mes va primero: 12/25.", "That's the UK way. In the US the month comes first: 12/25."] },
      "2-3": { "05/13/2026": ["Esta es posible: mayo 13. Busca un mes que no exista.", "This one is possible: May 13. Look for a month that doesn't exist."] },
      "2-4": { "09/08/1995": ["Así sería en formato día/mes. El formulario pide MM/DD: 08/09.", "That's day/month. The form asks for MM/DD: 08/09."] },
      "3-0": { on: ["on es para días y fechas. Con meses: in July.", "on is for days and dates. With months: in July."] },
      "3-1": { in: ["Con días de la semana va on.", "With days of the week use on."] },
      "3-2": { in: ["Con horas exactas va at.", "With exact times use at."], on: ["Con horas exactas va at.", "With exact times use at."] },
      "3-3": { on: ["Con años va in.", "With years use in."] },
      "3-4": { in: ["Con un mes solo va in, pero con fecha exacta (March 12th) va on.", "A month alone takes in, but an exact date (March 12th) takes on."] },
      "3-5": { in: ["Se dice in the morning, pero at night (excepción).", "It's in the morning, but at night (exception)."] },
      "3-6": { at: ["Partes del día: in the morning / afternoon / evening.", "Parts of the day: in the morning / afternoon / evening."] },
      "3-7": { on: ["Con estaciones del año va in.", "With seasons use in."] },
      "3-8": { at: ["at Christmas es la época; Christmas Day es un día → on.", "at Christmas is the season; Christmas Day is a day → on."] },
      "3-9": { on: ["Décadas y años → in.", "Decades and years → in."] }
    },
    "presente-simple": {
      "0-0": { work: ["Con he/she/it (my brother) el verbo lleva -s.", "With he/she/it (my brother) the verb takes -s."], "is work": ["No se mezcla is con otro verbo: works.", "Don't mix is with another verb: works."] },
      "0-1": { sleep: ["My cat = it → sleeps.", "My cat = it → sleeps."], "is sleep": ["No se mezcla is con otro verbo. Rutina: sleeps.", "Don't mix is with another verb. Routine: sleeps."] },
      "0-2": { studies: ["La -s es solo para he/she/it. Con we: study.", "The -s is only for he/she/it. With we: study."], "are study": ["No se usa are + verbo en presente simple.", "Don't use are + verb in the present simple."] },
      "0-3": { do: ["She → does.", "She → does."], dos: ["do con he/she/it se escribe does.", "do with he/she/it is spelled does."] },
      "0-4": { take: ["Tom = he → takes.", "Tom = he → takes."] },
      "0-5": { watches: ["My kids es plural (they): sin -s.", "My kids is plural (they): no -s."] },
      "0-6": { close: ["This shop = it → closes.", "This shop = it → closes."] },
      "0-7": { speak: ["He → speaks.", "He → speaks."] },
      "1-0": { "doesn't": ["doesn't es para he/she/it. Con I: don't.", "doesn't is for he/she/it. With I: don't."], "am not": ["Con verbos (like) se niega con don't, no con am not.", "With verbs (like) use don't, not am not."] },
      "1-1": { Do: ["Your sister = she → Does.", "Your sister = she → Does."], Is: ["live es un verbo: la pregunta es con Does.", "live is a verb: the question uses Does."] },
      "1-2": { "don't": ["My dad = he → doesn't.", "My dad = he → doesn't."], "isn't": ["drink es un verbo: se niega con doesn't.", "drink is a verb: use doesn't."] },
      "1-3": { Does: ["They → Do.", "They → Do."], Are: ["work es un verbo: Do they work…?", "work is a verb: Do they work…?"] },
      "1-4": { eats: ["Después de doesn't el verbo va sin -s (la -s ya está en does).", "After doesn't the verb has no -s (does already has it)."] },
      "1-5": { are: ["Where are you…? es para estar en un lugar. Con live: do.", "Where are you…? is about location. With live: do."] },
      "1-6": { do: ["The class = it → does.", "The class = it → does."], is: ["start es un verbo: does the class start.", "start is a verb: does the class start."] },
      "1-7": { has: ["Después de does, forma base: have.", "After does, base form: have."] }
    },
    "articulos": {
      "0-0": { a: ["Mira el sonido, no la letra: en hour la h no suena → an.", "Look at the sound, not the letter: the h in hour is silent → an."] },
      "0-1": { an: ["university empieza con sonido /ju/ (consonante) → a.", "university starts with a /ju/ sound (consonant) → a."] },
      "0-2": { a: ["apple empieza con sonido de vocal → an.", "apple starts with a vowel sound → an."] },
      "0-3": { a: ["elephant empieza con sonido de vocal → an.", "elephant starts with a vowel sound → an."] },
      "0-4": { a: ["En honest la h no suena: empieza con sonido de vocal → an.", "The h in honest is silent: vowel sound → an."] },
      "0-5": { a: ["a = uno; dogs es plural.", "a = one; dogs is plural."], an: ["an = uno; dogs es plural.", "an = one; dogs is plural."] },
      "0-6": { a: ["engineer empieza con sonido de vocal → an.", "engineer starts with a vowel sound → an."], "— (sin artículo)": ["En inglés las profesiones llevan artículo: She is an engineer.", "In English jobs take an article: She is an engineer."] },
      "0-7": { an: ["one suena /wʌn/ (consonante) → a.", "one sounds like /wʌn/ (consonant) → a."] },
      "0-8": { a: ["ATM se lee «ei-ti-em»: empieza con sonido de vocal → an.", "ATM is read “ay-tee-em”: vowel sound → an."] },
      "0-9": { an: ["European suena /jʊ/ (consonante) → a.", "European sounds like /jʊ/ (consonant) → a."] }
    },
    "adverbios-frecuencia": {
      "0-0": { "We have usually lunch at one.": ["El adverbio va antes del verbo principal (have), no después.", "The adverb goes before the main verb (have), not after."] },
      "0-1": { "My brother never is on time.": ["Con be, el adverbio va después: is never.", "With be, the adverb goes after it: is never."] },
      "0-2": { "Do often you go to the gym?": ["El sujeto va justo después de Do: Do you often…", "The subject goes right after Do: Do you often…"] },
      "0-3": { "She drinks hardly ever soda.": ["hardly ever va antes del verbo: hardly ever drinks.", "hardly ever goes before the verb."] },
      "0-4": { "They are late sometimes for class.": ["Con be: are sometimes late.", "With be: are sometimes late."] },
      "0-5": { "I usually not work on Sundays.": ["La negativa necesita don't: I don't usually work.", "The negative needs don't: I don't usually work."] },
      "0-6": { "He forgets always my birthday.": ["always va antes del verbo: always forgets.", "always goes before the verb."] },
      "0-7": { "We rarely eats out.": ["Con we el verbo no lleva -s.", "With we the verb has no -s."] },
      "1-0": { usually: ["usually es casi siempre (~90%). 100% = always.", "usually is almost always (~90%). 100% = always."] },
      "1-1": { rarely: ["rarely es casi nunca (~10%). 0% = never.", "rarely is almost never (~10%). 0% = never."] },
      "1-2": { usually: ["usually ≈ 90%. 50% = sometimes.", "usually ≈ 90%. 50% = sometimes."] },
      "1-3": { sometimes: ["sometimes ≈ 50%. 90% = usually.", "sometimes ≈ 50%. 90% = usually."] },
      "1-4": { often: ["often ≈ 70%. 10% = rarely.", "often ≈ 70%. 10% = rarely."] },
      "1-5": { rarely: ["rarely ≈ 10%. 70% = often.", "rarely ≈ 10%. 70% = often."] }
    },
    "pasado-simple": {
      "0-0": { visit: ["yesterday pide pasado: visited.", "yesterday needs the past: visited."], visitted: ["visit no dobla la t: visited.", "visit doesn't double the t: visited."] },
      "0-1": { seen: ["seen es participio (I have seen). Pasado simple: saw.", "seen is the participle (I have seen). Simple past: saw."], seed: ["see es irregular: saw.", "see is irregular: saw."] },
      "0-2": { goed: ["go es irregular: went.", "go is irregular: went."], gone: ["gone es participio (has gone). Pasado: went.", "gone is the participle (has gone). Past: went."] },
      "0-3": { eated: ["eat es irregular: ate.", "eat is irregular: ate."], eaten: ["eaten es participio (have eaten). Pasado: ate.", "eaten is the participle. Past: ate."] },
      "0-4": { leaved: ["leave es irregular: left.", "leave is irregular: left."] },
      "0-5": { buyed: ["buy es irregular: bought.", "buy is irregular: bought."], brought: ["brought es el pasado de bring (traer). buy → bought.", "brought is the past of bring. buy → bought."] },
      "0-7": { breaked: ["break es irregular: broke.", "break is irregular: broke."], broken: ["broken es participio. Pasado: broke.", "broken is the participle. Past: broke."] },
      "0-8": { laught: ["laugh es regular: laughed.", "laugh is regular: laughed."] },
      "0-9": { writed: ["write es irregular: wrote.", "write is irregular: wrote."], written: ["written es participio. Pasado: wrote.", "written is the participle. Past: wrote."] },
      "1-0": { "don't": ["Es pasado (at the party): didn't.", "It's past (at the party): didn't."], "wasn't": ["see es verbo: se niega con didn't.", "see is a verb: use didn't."] },
      "1-1": { Were: ["call es verbo: Did you call…?", "call is a verb: Did you call…?"] },
      "1-2": { knew: ["Después de didn't, forma base (el pasado ya está en did).", "After didn't, base form (did already shows the past)."] },
      "1-3": { went: ["Después de did, forma base: go.", "After did, base form: go."] },
      "1-4": { "didn't": ["happy es adjetivo: se usa was/were. They → weren't.", "happy is an adjective: use was/were. They → weren't."], "wasn't": ["They → weren't (wasn't es para I/he/she/it).", "They → weren't (wasn't is for I/he/she/it)."] },
      "1-5": { Did: ["cold es adjetivo: Was it cold?", "cold is an adjective: Was it cold?"], Were: ["it → was.", "it → was."] },
      "1-6": { had: ["Después de did, forma base: have.", "After did, base form: have."] },
      "1-7": { missed: ["Después de didn't, forma base: miss.", "After didn't, base form: miss."] }
    },
    "presente-perfecto": {
      "0-0": { ate: ["Con have/has va el participio: eaten. ate es pasado simple.", "have/has takes the participle: eaten. ate is the simple past."] },
      "0-1": { have: ["She → has.", "She → has."], is: ["El presente perfecto se forma con has/have, no con is.", "The present perfect uses has/have, not is."] },
      "0-2": { "didn't": ["yet va con presente perfecto: haven't finished.", "yet goes with the present perfect: haven't finished."], "hasn't": ["We → haven't.", "We → haven't."] },
      "0-3": { Did: ["ever + been → presente perfecto: Have you ever been…?", "ever + been → present perfect: Have you ever been…?"], Has: ["you → Have.", "you → Have."] },
      "0-4": { losed: ["lose es irregular: lost.", "lose is irregular: lost."] },
      "0-5": { was: ["Con have va el participio: been.", "have takes the participle: been."] },
      "0-6": { readed: ["read es irregular y no cambia al escribirse (se pronuncia «red»).", "read is irregular and keeps its spelling (pronounced “red”)."] },
      "0-7": { sended: ["send es irregular: sent.", "send is irregular: sent."], send: ["Con has va el participio: sent.", "has takes the participle: sent."] },
      "1-0": { "have gone": ["in 2018 es un momento terminado → pasado simple: went.", "in 2018 is a finished time → simple past: went."], "have been": ["Con una fecha terminada (in 2018) no se usa el presente perfecto.", "With a finished time (in 2018) don't use the present perfect."] },
      "1-1": { went: ["three times (sin fecha, hasta hoy) → have been.", "three times (no date, up to now) → have been."], "have go": ["Con have va el participio: been / gone.", "have takes the participle: been / gone."] },
      "1-2": { "has quit": ["last month es un momento terminado → pasado simple: quit.", "last month is a finished time → simple past: quit."] },
      "1-3": { lived: ["since January (y sigue hasta hoy) → have lived.", "since January (still true) → have lived."] },
      "1-4": { Have: ["yesterday es tiempo terminado → Did.", "yesterday is a finished time → Did."] },
      "1-5": { "didn't finish": ["yet va con presente perfecto: hasn't finished.", "yet goes with the present perfect: hasn't finished."], "hasn't finish": ["Con has va el participio: finished.", "has takes the participle: finished."] },
      "1-6": { know: ["for years (hasta hoy) → have known.", "for years (up to now) → have known."], "are knowing": ["know no se usa con -ing.", "know isn't used with -ing."] },
      "1-7": { have: ["When pregunta un momento exacto → pasado simple: did.", "When asks for an exact time → simple past: did."] }
    },
    "segundo-condicional": {
      "0-0": { am: ["Es una situación imaginaria: después de if va pasado (were).", "It's imaginary: after if use the past (were)."], "would be": ["would va en la otra parte, no después de if.", "would goes in the other half, not after if."] },
      "0-1": { "will learn": ["will es para algo real (primer condicional). Imaginario → would learn.", "will is for real situations. Imaginary → would learn."] },
      "0-2": { win: ["Imaginario: if + pasado (won).", "Imaginary: if + past (won)."], "would win": ["Después de if no va would.", "No would after if."] },
      "0-3": { "will swim": ["Imaginario → would swim.", "Imaginary → would swim."] },
      "0-4": { "won't buy": ["Es un consejo imaginario (if I were you) → wouldn't.", "It's imaginary advice (if I were you) → wouldn't."] },
      "0-5": { "isn't": ["Imaginario: if + pasado (weren't).", "Imaginary: if + past (weren't)."], "wouldn't be": ["Después de if no va would.", "No would after if."] },
      "0-6": { know: ["Imaginario: if + pasado (knew).", "Imaginary: if + past (knew)."] },
      "0-7": { live: ["Imaginario: if + pasado (lived).", "Imaginary: if + past (lived)."], "would live": ["Después de if no va would.", "No would after if."] },
      "0-8": { "will play": ["Imaginario → would play.", "Imaginary → would play."] },
      "0-9": { "will go": ["If I were you (consejo) → would go.", "If I were you (advice) → would go."] }
    },
    "whose-posesivo": {
      "0-0": { "Who's": ["Who's = who is. Para preguntar de quién es: Whose.", "Who's = who is. To ask who owns it: Whose."], Who: ["Who pregunta quién. Para el dueño: Whose.", "Who asks who. For the owner: Whose."] },
      "0-1": { Whose: ["Whose es de quién. Aquí es who is coming → Who's.", "Whose means owner. Here it's who is coming → Who's."] },
      "0-2": { Whose: ["Aquí es who is your favorite singer → Who's.", "Here it's who is your favorite singer → Who's."] },
      "0-3": { "who's": ["El hijo es de la mujer: whose son (cuyo hijo).", "The son belongs to the woman: whose son."] },
      "0-4": { "Who's": ["Who's = who is. El paraguas de quién → Whose.", "Who's = who is. Whose umbrella."] },
      "0-5": { Whose: ["Aquí es who is that man → Who's.", "Here it's who is that man → Who's."] },
      "0-6": { "Who's": ["Who's = who is. ¿De quién es el turno? → Whose.", "Who's = who is. Whose turn."] },
      "0-7": { Whose: ["Aquí es who has been → Who's (has).", "Here it's who has been → Who's (has)."] },
      "1-0": { "sisters'": ["sisters' es de varias hermanas. Es una: sister's.", "sisters' is for several sisters. One: sister's."] },
      "1-1": { "boy's": ["boy's es de un chico. Son dos: boys'.", "boy's is one boy. Two: boys'."], "boys's": ["Plural terminado en -s: solo apóstrofo (boys').", "Plural ending in -s: just the apostrophe (boys')."] },
      "1-2": { "parent's": ["Son los dos: parents'.", "Both of them: parents'."] },
      "1-3": { "Carlo's": ["El nombre es Carlos: Carlos's (o Carlos').", "The name is Carlos: Carlos's (or Carlos')."] },
      "1-4": { "friends'": ["Es un amigo: friend's.", "One friend: friend's."] },
      "1-5": { "teacher's": ["Son varios profesores: teachers'.", "Several teachers: teachers'."] },
      "1-6": { "dogs'": ["Es un perro: dog's.", "One dog: dog's."] },
      "1-7": { "grandparent's": ["Son dos abuelos: grandparents'.", "Two grandparents: grandparents'."] },
      "2-0": { "it's": ["it's = it is. El posesivo es its.", "it's = it is. The possessive is its."] },
      "2-1": { Its: ["Its es posesivo. Aquí es it is raining → It's.", "Its is possessive. Here it's it is raining → It's."] },
      "2-2": { "childrens'": ["children ya es plural sin -s: children's.", "children is already plural without -s: children's."] },
      "2-3": { "womens'": ["women ya es plural sin -s: women's.", "women is already plural without -s: women's."] },
      "2-4": { "mens'": ["men ya es plural sin -s: men's.", "men is already plural without -s: men's."] },
      "2-5": { "it's": ["it's = it is. El posesivo es its.", "it's = it is. The possessive is its."] },
      "2-6": { aunts: ["Falta el apóstrofo: la casa de mi tía → aunt's.", "The apostrophe is missing: aunt's."] },
      "2-7": { "week's": ["Son dos semanas: weeks'.", "Two weeks: weeks'."] }
    },
    "dobles-negativos": {
      "0-0": { no: ["don't + no es doble negativo. Con don't va any.", "don't + no is a double negative. With don't use any."] },
      "0-1": { any: ["any va con negativas o preguntas. Sin not: there's no milk.", "any goes with negatives or questions. Without not: there's no milk."] },
      "0-2": { nothing: ["didn't + nothing es doble negativo: didn't say anything.", "didn't + nothing is a double negative: didn't say anything."] },
      "0-3": { nobody: ["didn't + nobody es doble negativo: anybody.", "didn't + nobody is a double negative: anybody."] },
      "0-4": { Anybody: ["Como sujeto en una frase afirmativa (called), «nadie» es Nobody.", "As a subject in a positive sentence, use Nobody."] },
      "0-5": { nowhere: ["can't + nowhere es doble negativo: anywhere.", "can't + nowhere is a double negative: anywhere."] },
      "0-6": { any: ["has (afirmativo) + no idea. any idea va con negativas o preguntas.", "has (positive) + no idea. any idea needs a negative or question."] },
      "0-7": { none: ["didn't + none es doble negativo: any of.", "didn't + none is a double negative: any of."] },
      "1-0": { never: ["don't + never es doble negativo: don't ever.", "don't + never is a double negative: don't ever."] },
      "1-1": { ever: ["has ever been es pregunta. En afirmativa: has never been.", "has ever been is for questions. Positive: has never been."] },
      "1-2": { too: ["too es para afirmativas. Con negativas: either.", "too is for positives. With negatives: either."], neither: ["don't + neither es doble negativo: either.", "don't + neither is a double negative: either."] },
      "1-3": { None: ["Son dos hermanos: Neither (ninguno de los dos).", "Two brothers: Neither (not one of the two)."] },
      "1-4": { So: ["So can I es para afirmativas. Con can't: Neither can I.", "So can I is for positives. With can't: Neither can I."] },
      "1-5": { Neither: ["Neither es para dos. Para un grupo: None.", "Neither is for two. For a group: None."] },
      "1-6": { "didn't tell": ["Nobody + didn't es doble negativo: Nobody told me.", "Nobody + didn't is a double negative: Nobody told me."] },
      "1-7": { never: ["won't + never es doble negativo: won't ever.", "won't + never is a double negative: won't ever."] },
      "2-0": { "I didn't do nothing wrong.": ["Doble negativo (didn't + nothing). En inglés estándar se usa uno solo.", "Double negative (didn't + nothing). Standard English uses only one."] },
      "2-1": { "Nobody didn't tell me.": ["Doble negativo (Nobody + didn't).", "Double negative (Nobody + didn't)."] },
      "2-2": { "She never goes nowhere.": ["Doble negativo (never + nowhere).", "Double negative (never + nowhere)."] },
      "2-3": { "We don't have no time.": ["Doble negativo (don't + no).", "Double negative (don't + no)."] },
      "2-4": { "I can't hear nothing.": ["Doble negativo (can't + nothing).", "Double negative (can't + nothing)."] },
      "2-5": { "There isn't nothing to eat.": ["Doble negativo (isn't + nothing).", "Double negative (isn't + nothing)."] },
      "2-6": { "He doesn't want to go neither.": ["Doble negativo (doesn't + neither): either.", "Double negative (doesn't + neither): either."] },
      "2-7": { "None of us didn't know the answer.": ["Doble negativo (None + didn't).", "Double negative (None + didn't)."] }
    }
  };

  // ——— Pronombres objeto: explicaciones por tipo de error ———
  const SUBJ = { I: "me", he: "him", she: "her", we: "us", they: "them" };
  const OBJ_OF = Object.fromEntries(Object.entries(SUBJ).map(([s, o]) => [o, s]));
  const POSS = ["my", "his", "our", "their", "your", "its"];
  const POSS_PRON = ["mine", "hers", "ours", "theirs", "yours"];
  const low = (s) => s.toLowerCase();
  function pronounWhy(item) {
    const a = low(item.a);
    if (item.a.includes(" / ")) return null;                 // two gaps: the explanation already covers it
    const w = {};
    item.o.forEach((o) => {
      const x = low(o);
      if (SUBJ[x] || (x === "i")) {
        if (OBJ_OF[a] || a === "you" || a === "it") w[o] = [`Es sujeto (va antes del verbo). Aquí la persona recibe la acción (después del verbo o de una preposición): ${item.a}.`, `It's a subject (before the verb). Here the person receives the action (after the verb or a preposition): ${item.a}.`];
      } else if (OBJ_OF[x] && (SUBJ[a] || a === "i")) {
        w[o] = [`Es objeto. Aquí hace falta el sujeto, quien hace la acción: ${item.a}.`, `It's an object. Here we need the subject, who does the action: ${item.a}.`];
      } else if (POSS.includes(x)) {
        w[o] = [`Es posesivo y necesita un sustantivo después (${x} car, ${x} house).`, `It's possessive and needs a noun after it (${x} car, ${x} house).`];
      } else if (POSS_PRON.includes(x)) {
        w[o] = [`Significa «el/la de…» (es mío, es suyo). No recibe la acción del verbo.`, `It means “the one that belongs to…” (it's mine). It can't receive the action.`];
      } else if (/self|selves$/.test(x)) {
        w[o] = [`Es reflexivo: solo se usa cuando quien hace la acción también la recibe (I see myself).`, `It's reflexive: only when the doer also receives the action (I see myself).`];
      } else if (x === "them" && a === "it") {
        w[o] = ["«them» es para varias cosas o personas. Aquí es una sola cosa: it.", "“them” is for several things or people. Here it's one thing: it."];
      } else if (x === "it" && a === "them") {
        w[o] = ["«it» es para una sola cosa. Aquí son varias: them.", "“it” is for one thing. Here there are several: them."];
      } else if ((x === "him" || x === "her") && (a === "it" || a === "them")) {
        w[o] = [`Es para personas (o una mascota). Para cosas: ${item.a}.`, `It's for people (or a pet). For things: ${item.a}.`];
      }
    });
    return Object.keys(w).length ? w : null;
  }

  (window.YEB_EXERCISES || []).forEach((x) => {
    const table = W[x.id];
    x.sections.forEach((s, si) => {
      if (s.story) return;
      s.items.forEach((item, ii) => {
        if (item.w || item.type === "write") return;
        const w = (table && table[`${si}-${ii}`]) || (x.id === "pronombres-objeto" && si <= 4 ? pronounWhy(item) : null);
        if (w) item.w = Object.fromEntries(Object.entries(w).filter(([o]) => item.o.includes(o)));
      });
    });
  });
})();
