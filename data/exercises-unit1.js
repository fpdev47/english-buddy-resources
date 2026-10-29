/*
  Temas del libro Travelers 1, unidad 1 (A1–A2): to be, posesivos, this/that, países, trabajos y datos
  personales, preguntas con do/be, gustos y presente continuo. Formato: ver data/groups.js.
*/
(function () {
  const { M, W, S, T } = window.YEB_X;
  window.YEB_EXERCISES.push(

    T("to-be", ["Verbo to be", "The verb to be"], "A1", ["am, is, are y adjetivos de personalidad", "am, is, are and personality adjectives"], [
      S(["am, is o are", "am, is or are"], ["Mira el sujeto: I → am; he, she, it → is; you, we, they → are.", "Look at the subject: I → am; he, she, it → is; you, we, they → are."], [
        M("My sister ___ very friendly.", "is", ["are", "am", "be"], ["My sister = she → is.", "My sister = she → is."], { are: ["«are» es para you, we, they; tu hermana es una sola persona (she).", "“are” is for you, we, they; your sister is one person (she)."] }),
        M("My parents ___ from Maracaibo.", "are", ["is", "am", "be"], ["My parents = they → are.", "My parents = they → are."], { is: ["«parents» es plural (they), no una sola persona.", "“parents” is plural (they), not one person."] }),
        M("I ___ a little nervous today.", "am", ["is", "are", "be"], ["Con «I» siempre va am.", "With “I” it's always am."]),
        M("You ___ so funny!", "are", ["is", "am", "be"], ["Con «you» siempre va are, aunque sea una sola persona.", "With “you” it's always are, even for one person."], { is: ["Aunque hables con una sola persona, «you» siempre lleva are.", "Even when you talk to one person, “you” always takes are."] }),
        M("The coffee here ___ terrible.", "is", ["are", "am", "be"], ["The coffee = it → is.", "The coffee = it → is."]),
        M("Carlos and I ___ in the same class.", "are", ["is", "am", "be"], ["Carlos and I = we → are.", "Carlos and I = we → are."], { am: ["«I» va con am solo cuando está solo; «Carlos and I» = we.", "“I” takes am only on its own; “Carlos and I” = we."] }),
        M("It ___ cold in the office.", "is", ["are", "am", "be"], ["It → is.", "It → is."]),
        M("My boss ___ very easy-going.", "is", ["are", "am", "be"], ["My boss = he/she → is.", "My boss = he/she → is."])
      ]),
      S(["Negativas y preguntas", "Negatives and questions"], ["Para negar, agrega not. Para preguntar, el verbo va antes del sujeto: Is she…?", "To make it negative, add not. To ask, the verb goes before the subject: Is she…?"], [
        M("She ___ shy. She talks to everybody.", "isn't", ["aren't", "doesn't", "not"], ["She → is not = isn't.", "She → is not = isn't."], { "doesn't": ["Con adjetivos (shy) se usa to be, no do/does.", "With adjectives (shy) you use to be, not do/does."], not: ["Falta el verbo: she isn't (is + not).", "The verb is missing: she isn't (is + not)."] }),
        M("We ___ lazy. We just like weekends.", "aren't", ["isn't", "don't", "amn't"], ["We → are not = aren't.", "We → are not = aren't."], { "don't": ["«lazy» es un adjetivo: va con to be (aren't), no con don't.", "“lazy” is an adjective: it goes with to be (aren't), not don't."] }),
        M("I ___ tired. I'm just bored.", "'m not", ["amn't", "isn't", "don't"], ["I am not = I'm not. «Amn't» no existe.", "I am not = I'm not. “Amn't” doesn't exist."], { "amn't": ["«amn't» no existe en inglés; se dice I'm not.", "“amn't” doesn't exist in English; you say I'm not."] }),
        M("___ your brother married?", "Is", ["Are", "Does", "Do"], ["Your brother = he → Is he married?", "Your brother = he → Is he married?"], { Does: ["«married» es un adjetivo: la pregunta es con to be (Is…?).", "“married” is an adjective: the question uses to be (Is…?)."] }),
        M("___ you from Colombia?", "Are", ["Is", "Do", "Am"], ["You → Are you…?", "You → Are you…?"]),
        M("Where ___ your parents from?", "are", ["is", "do", "does"], ["Your parents = they → are.", "Your parents = they → are."]),
        M("What ___ your mother like?", "is", ["does", "are", "do"], ["«What is she like?» pregunta cómo es una persona (su personalidad).", "“What is she like?” asks what a person is like (personality)."], { does: ["«What does she like?» pregunta qué le gusta, no cómo es.", "“What does she like?” asks what she likes, not what she is like."] }),
        M("Is he your teacher? — No, he ___.", "isn't", ["doesn't", "not", "aren't"], ["Respuesta corta con to be: No, he isn't.", "Short answer with to be: No, he isn't."])
      ]),
      S(["Adjetivos de personalidad", "Personality adjectives"], ["Lee la situación y elige el adjetivo que mejor describe a la persona.", "Read the situation and choose the adjective that best describes the person."], [
        M("She never says “please” or “thank you”. She's ___.", "rude", ["polite", "shy", "generous"], ["No dar las gracias es de mala educación: rude.", "Not saying thank you is rude."], { polite: ["«polite» es lo contrario: educado.", "“polite” is the opposite: well-mannered."] }),
        M("He forgets his keys, his wallet and my birthday. He's very ___.", "forgetful", ["hard-working", "funny", "serious"], ["Olvida todo → forgetful (olvidadizo).", "Forgets everything → forgetful."]),
        M("My boss works ten hours a day, even on Saturdays. She's ___.", "hard-working", ["lazy", "easy-going", "rude"], ["Trabaja mucho → hard-working.", "Works a lot → hard-working."]),
        M("Tom pays for everybody's dinner. He's so ___.", "generous", ["rude", "shy", "lazy"], ["Paga por todos → generous.", "Pays for everyone → generous."]),
        M("Ana is very quiet at parties. She doesn't talk to new people. She's ___.", "shy", ["funny", "rude", "open-minded"], ["Callada con gente nueva → shy (tímida).", "Quiet with new people → shy."]),
        M("Nothing stresses my dad. He's very ___.", "easy-going", ["serious", "rude", "forgetful"], ["Tranquilo, nada lo estresa → easy-going.", "Relaxed, nothing stresses him → easy-going."]),
        M("My grandma likes to try new food and listen to new ideas. She's ___.", "open-minded", ["shy", "lazy", "serious"], ["Abierta a lo nuevo → open-minded.", "Open to new things → open-minded."]),
        M("He doesn't want to work or study. He just sleeps all day. He's ___.", "lazy", ["hard-working", "polite", "attentive"], ["No quiere hacer nada → lazy (flojo).", "Doesn't want to do anything → lazy."]),
        M("My friend tells the best jokes. He's really ___.", "funny", ["fun", "serious", "shy"], ["Que hace reír → funny. «Fun» es divertido para pasarla bien (a fun party).", "Makes you laugh → funny. “Fun” means enjoyable (a fun party)."], { fun: ["«fun» describe algo agradable (a fun day); la persona que te hace reír es funny.", "“fun” describes something enjoyable (a fun day); a person who makes you laugh is funny."] })
      ])
    ]),

    T("posesivos", ["Adjetivos posesivos", "Possessive adjectives"], "A1", ["my, your, his, her, its, our, their", "my, your, his, her, its, our, their"], [
      S(["his o her", "his or her"], ["En inglés el posesivo depende de quién tiene la cosa, no de la cosa: his = de él, her = de ella.", "In English the possessive depends on the owner, not the thing: his = his, her = hers."], [
        M("She is my friend. ___ name is María.", "Her", ["His", "She", "Hers"], ["El nombre es de ella → her.", "The name is hers → her."], { His: ["«his» es de él; María es ella.", "“his” is for a man; María is a woman."], She: ["«she» es sujeto; aquí necesitas el posesivo (su nombre): her.", "“she” is a subject; here you need the possessive: her."] }),
        M("Carlos never uses ___ credit card.", "his", ["her", "he", "your"], ["La tarjeta es de Carlos (él) → his.", "The card is Carlos's (a man) → his."]),
        M("Anthony works with ___ sister.", "his", ["her", "he", "its"], ["La hermana es de Anthony → his. No importa que la hermana sea mujer.", "The sister is Anthony's → his. It doesn't matter that the sister is a woman."], { her: ["En español «su hermana» no cambia, pero en inglés miras al dueño: Anthony → his.", "Look at the owner, not the sister: Anthony → his."] }),
        M("Monica loves ___ new dress.", "her", ["his", "she", "its"], ["El vestido es de Monica → her.", "The dress is Monica's → her."]),
        M("Mr. Pérez is with ___ wife.", "his", ["her", "their", "he"], ["La esposa es del señor Pérez → his.", "The wife is Mr. Pérez's → his."], { her: ["Miras al dueño (Mr. Pérez = él), no a la esposa.", "Look at the owner (Mr. Pérez = he), not the wife."] }),
        M("The dog is hungry. ___ bowl is empty.", "Its", ["It's", "His", "Their"], ["Para cosas y animales: its (sin apóstrofo).", "For things and animals: its (no apostrophe)."], { "It's": ["«it's» = it is. El posesivo es its, sin apóstrofo.", "“it's” = it is. The possessive is its, with no apostrophe."] })
      ]),
      S(["Todos los posesivos", "All the possessives"], ["I → my, you → your, he → his, she → her, it → its, we → our, they → their.", "I → my, you → your, he → his, she → her, it → its, we → our, they → their."], [
        M("We love ___ new apartment.", "our", ["us", "we", "their"], ["We → our.", "We → our."], { us: ["«us» es pronombre objeto (a nosotros); para decir «nuestro» va our.", "“us” is an object pronoun; for possession you need our."] }),
        M("My neighbors are noisy. ___ music is always loud.", "Their", ["There", "They're", "Them"], ["My neighbors = they → their.", "My neighbors = they → their."], { There: ["«there» es «allí». Suena igual que their, pero el posesivo es their.", "“there” means a place. It sounds the same, but the possessive is their."], "They're": ["«they're» = they are.", "“they're” = they are."] }),
        M("Excuse me, is this ___ phone?", "your", ["you", "you're", "yours"], ["Hablas con la persona → your phone.", "You're talking to the person → your phone."], { "you're": ["«you're» = you are.", "“you're” = you are."], yours: ["«yours» va solo, sin sustantivo: Is this yours? Con «phone» va your.", "“yours” stands alone: Is this yours? With “phone” use your."] }),
        M("I can't find ___ keys!", "my", ["me", "I", "mine"], ["I → my.", "I → my."], { me: ["«me» es objeto. Para decir «mis llaves» va my keys.", "“me” is an object. For “my keys” you need my."] }),
        M("The children are in ___ room.", "their", ["his", "our", "its"], ["The children = they → their.", "The children = they → their."]),
        M("Kelly and I are sisters. ___ parents live in Valencia.", "Our", ["Their", "My", "Us"], ["Kelly and I = we → our.", "Kelly and I = we → our."]),
        M("My cat sleeps in ___ little bed.", "its", ["it's", "his", "their"], ["Animal → its (también se usa his/her si es tu mascota y sabes su sexo).", "Animal → its (his/her is also fine for a pet whose sex you know)."]),
        W("He is Juan. ___ name is Juan.", ["his"], ["De él → his.", "His (for a man)."]),
        W("They are my students. ___ names are Luis and Ana.", ["their"], ["They → their.", "They → their."]),
        W(["What's ___ name? — My name is Luisa. (le preguntas a ella directamente)", "What's ___ name? — My name is Luisa. (you ask her directly)"], ["your"], ["Le hablas a ella: your name.", "You're talking to her: your name."])
      ]),
      S(["Posesivo 's", "Possessive 's"], ["Para decir «el carro de Ana»: Ana's car. El dueño va primero.", "To say who owns something: Ana's car. The owner comes first."], [
        M(["El carro de mi papá:", "The car that belongs to my dad:"], "my dad's car", ["the car my dad", "my dad car", "the car's my dad"], ["Dueño + 's + cosa: my dad's car.", "Owner + 's + thing: my dad's car."], { "the car my dad": ["En inglés el dueño va primero: my dad's car.", "In English the owner comes first: my dad's car."] }),
        M(["La casa de Sofía:", "The house that belongs to Sofía:"], "Sofía's house", ["the house of Sofía", "Sofía house", "house's Sofía"], ["Con personas se usa 's: Sofía's house.", "With people you use 's: Sofía's house."], { "the house of Sofía": ["Se entiende, pero suena traducido. Con personas se dice Sofía's house.", "It's understandable but sounds translated. With people say Sofía's house."] }),
        M(["This is ___ bedroom. (de mis dos hermanos)", "This is ___ bedroom. (it belongs to my two brothers)"], "my brothers'", ["my brother's", "my brothers's", "my brothers"], ["Plural terminado en -s → solo apóstrofo: brothers'.", "Plural ending in -s → just an apostrophe: brothers'."], { "my brother's": ["Así sería de un solo hermano. Son dos: brothers'.", "That's for one brother. There are two: brothers'."] }),
        M("Time is gold! What's ___ schedule today?", "the teacher's", ["the teachers", "teacher's the", "the teacher"], ["El horario del profesor → the teacher's schedule.", "The teacher's schedule."])
      ])
    ]),

    T("this-that", ["This, that, these, those", "This, that, these, those"], "A1", ["Cerca o lejos, uno o varios", "Near or far, one or many"], [
      S(["Cerca o lejos", "Near or far"], ["this (uno, cerca) · these (varios, cerca) · that (uno, lejos) · those (varios, lejos).", "this (one, near) · these (many, near) · that (one, far) · those (many, far)."], [
        M(["(tienes un pasaporte en la mano) ___ is my passport.", "(you're holding a passport) ___ is my passport."], "This", ["That", "These", "Those"], ["Uno y cerca → this.", "One and near → this."]),
        M(["(señalas unas maletas al otro lado del aeropuerto) Are ___ your suitcases?", "(you point at some suitcases across the airport) Are ___ your suitcases?"], "those", ["these", "this", "that"], ["Varias y lejos → those.", "Many and far → those."], { these: ["«these» es para cosas cerca. Están al otro lado: those.", "“these” is for things near you. They're far: those."] }),
        M(["(te pruebas unos zapatos) I love ___ shoes!", "(you're trying on some shoes) I love ___ shoes!"], "these", ["this", "those", "that"], ["Varios y cerca (los tienes puestos) → these.", "Many and near (you're wearing them) → these."], { this: ["«shoes» es plural; this es para una sola cosa.", "“shoes” is plural; this is for one thing."] }),
        M(["(ves un carro en la calle) Wow, ___ car is amazing.", "(you see a car down the street) Wow, ___ car is amazing."], "that", ["this", "those", "these"], ["Uno y lejos → that.", "One and far → that."]),
        M(["What are ___? (señalas unas luces en el cielo)", "What are ___? (you point at some lights in the sky)"], "those", ["that", "these", "this"], ["«are» + plural + lejos → those.", "“are” + plural + far → those."]),
        M(["Mmm, ___ pizza is delicious. (estás comiéndola)", "Mmm, ___ pizza is delicious. (you're eating it)"], "this", ["that", "these", "those"], ["Una y cerca → this.", "One and near → this."])
      ]),
      S(["What is this? / What are these?", "What is this? / What are these?"], ["Singular: It's a/an… · Plural: They're…", "Singular: It's a/an… · Plural: They're…"], [
        M("What is this? — ___ a backpack.", "It's", ["They're", "Is", "This"], ["Singular → It's a backpack.", "Singular → It's a backpack."], { Is: ["Falta el sujeto: It's (it is).", "The subject is missing: It's (it is)."] }),
        M("What are these? — ___ passports.", "They're", ["It's", "There", "Their"], ["Plural → They're passports.", "Plural → They're passports."], { "It's": ["«passports» es plural: They're.", "“passports” is plural: They're."] }),
        M("What ___ those? — They're tickets.", "are", ["is", "does", "do"], ["Those (plural) → What are those?", "Those (plural) → What are those?"]),
        M("What is that? — It's ___ umbrella.", "an", ["a", "—"], ["«umbrella» empieza con sonido de vocal → an.", "“umbrella” starts with a vowel sound → an."]),
        M("What are these? — They're ___ keys.", "—", ["a", "an"], ["Plural: sin a/an. They're keys.", "Plural: no a/an. They're keys."], { a: ["«a» significa «uno»; no va con plurales.", "“a” means “one”; it doesn't go with plurals."] }),
        W("What is this? — It's ___ suitcase.", ["a"], ["Singular con sonido de consonante → a suitcase.", "Singular, consonant sound → a suitcase."])
      ])
    ]),

    T("paises", ["Países y nacionalidades", "Countries and nationalities"], "A1", ["Where are you from? I'm Venezuelan", "Where are you from? I'm Venezuelan"], [
      S(["País o nacionalidad", "Country or nationality"], ["Después de «from» va el país. Después de «I'm» o antes de una cosa va la nacionalidad.", "After “from” comes the country. After “I'm”, or before a thing, comes the nationality."], [
        M("I'm from ___.", "Venezuela", ["Venezuelan", "venezuelan", "Venezuelans"], ["Después de from → país: Venezuela.", "After from → country: Venezuela."], { Venezuelan: ["«Venezuelan» es la nacionalidad: I'm Venezuelan. Después de from va el país.", "“Venezuelan” is the nationality: I'm Venezuelan. After from comes the country."] }),
        M("My father is ___.", "Colombian", ["Colombia", "colombian", "from Colombian"], ["Nacionalidad con mayúscula: Colombian.", "Nationalities take a capital letter: Colombian."], { colombian: ["En inglés las nacionalidades van con mayúscula.", "In English nationalities are capitalized."], Colombia: ["Sin «from», va la nacionalidad: He is Colombian.", "Without “from”, use the nationality: He is Colombian."] }),
        M("Sushi is ___ food.", "Japanese", ["Japan", "Japanish", "japanese"], ["Japan → Japanese.", "Japan → Japanese."]),
        M("Where is Shakira from? — She's from ___.", "Colombia", ["Colombian", "Colombiana", "Spain"], ["From + país.", "From + country."]),
        M("Pizza is ___.", "Italian", ["Italy", "Italic", "Italiano"], ["Italy → Italian.", "Italy → Italian."]),
        M("Are you ___? — No, I'm Peruvian.", "Chilean", ["Chile", "Chilian", "chilean"], ["Chile → Chilean (nacionalidad).", "Chile → Chilean (nationality)."]),
        M("If you are from the US, you are ___.", "American", ["United Statian", "Estadounidense", "USA"], ["De Estados Unidos → American.", "From the US → American."]),
        M("If you are from Brazil, you speak ___.", "Portuguese", ["Brazilian", "Spanish", "Brazilish"], ["Brazilian es la nacionalidad, pero el idioma es Portuguese.", "Brazilian is the nationality, but the language is Portuguese."], { Brazilian: ["Es la nacionalidad, no el idioma. En Brasil se habla portugués.", "That's the nationality, not the language. Brazil speaks Portuguese."] })
      ]),
      S(["Escribe la nacionalidad", "Write the nationality"], ["Escríbela con mayúscula inicial (también se acepta sin ella).", "Start it with a capital letter (it's also accepted without one)."], [
        W("If you are from Mexico, you are ___.", ["Mexican"], ["Mexico → Mexican.", "Mexico → Mexican."]),
        W("If you are from Spain, you are ___.", ["Spanish"], ["Spain → Spanish.", "Spain → Spanish."]),
        W("If you are from France, you are ___.", ["French"], ["France → French.", "France → French."]),
        W("If you are from Canada, you are ___.", ["Canadian"], ["Canada → Canadian.", "Canada → Canadian."]),
        W("If you are from China, you are ___.", ["Chinese"], ["China → Chinese.", "China → Chinese."]),
        W("If you are from Panama, you are ___.", ["Panamanian"], ["Panama → Panamanian.", "Panama → Panamanian."]),
        W("If you are from Germany, you are ___.", ["German"], ["Germany → German.", "Germany → German."]),
        W("If you are from Argentina, you are ___.", ["Argentinian", "Argentine"], ["Argentina → Argentinian (o Argentine).", "Argentina → Argentinian (or Argentine)."])
      ])
    ]),

    T("trabajos-datos", ["Trabajos y datos personales", "Jobs and personal information"], "A1", ["What do you do? Llenar un formulario", "What do you do? Filling out a form"], [
      S(["¿A qué se dedica?", "What do they do?"], ["Con trabajos se usa a/an: She is a nurse. En plural, sin artículo: They are nurses.", "Jobs take a/an: She is a nurse. In plural, no article: They are nurses."], [
        M("What do you do? — I'm ___ engineer.", "an", ["a", "—", "the"], ["«engineer» empieza con sonido de vocal → an.", "“engineer” starts with a vowel sound → an."], { "—": ["En inglés el trabajo lleva artículo: I'm an engineer (en español se dice «soy ingeniero»).", "In English a job takes an article: I'm an engineer."] }),
        M("My mom is ___ nurse.", "a", ["an", "—", "the"], ["«nurse» → a nurse.", "“nurse” → a nurse."], { "—": ["En inglés hace falta el artículo: She is a nurse.", "English needs the article: She is a nurse."] }),
        M("They are ___ students.", "—", ["a", "an", "the"], ["Plural: sin a/an.", "Plural: no a/an."]),
        M("What ___ your sister do?", "does", ["do", "is", "are"], ["Your sister = she → What does she do?", "Your sister = she → What does she do?"], { is: ["«What is your sister?» suena raro. Para el trabajo se pregunta What does she do?", "“What is your sister?” sounds odd. For jobs ask What does she do?"] }),
        M("He fixes cars. He's a ___.", "mechanic", ["mechanical", "chef", "lawyer"], ["Arregla carros → mechanic.", "Fixes cars → mechanic."], { mechanical: ["«mechanical» es un adjetivo (mecánico/a de máquina). La persona es a mechanic.", "“mechanical” is an adjective. The person is a mechanic."] }),
        M("She defends people in court. She's a ___.", "lawyer", ["judge", "doctor", "waiter"], ["Defiende personas → lawyer (abogada).", "Defends people → lawyer."]),
        M("He cooks in a restaurant. He's a ___.", "chef", ["chief", "waiter", "cashier"], ["Cocina → chef. «Chief» es jefe.", "Cooks → chef. “Chief” means boss."], { chief: ["«chief» es jefe (chief of police). El cocinero es chef.", "“chief” means head/boss. A cook is a chef."] }),
        M("She stays home and takes care of the house and the kids. She's a ___.", "housewife", ["housekeeper", "babysitter", "waitress"], ["Ama de casa → housewife (stay-at-home mom también se usa).", "→ housewife (stay-at-home mom is also common)."])
      ]),
      S(["Llenar un formulario", "Filling out a form"], ["Lee cada pregunta del formulario y elige la respuesta correcta.", "Read each question on the form and choose the right answer."], [
        M("How old are you?", "I'm 28 years old.", ["I have 28 years.", "I'm 28 years.", "I have 28 years old."], ["La edad va con to be: I'm 28 (years old).", "Age uses to be: I'm 28 (years old)."], { "I have 28 years.": ["En español «tengo 28 años», pero en inglés la edad es con be: I'm 28.", "Age uses be in English: I'm 28."] }),
        M("What's your DOB?", "March 4th, 1995.", ["28 years old.", "Caracas.", "Single."], ["DOB = date of birth (fecha de nacimiento).", "DOB = date of birth."]),
        M("What's your marital status?", "I'm single.", ["I'm fine.", "I'm Venezuelan.", "I'm a teacher."], ["Marital status = estado civil: single, married, divorced.", "Marital status: single, married, divorced."]),
        M("What's your hometown?", "Barquisimeto.", ["My house.", "Teacher.", "1.70 meters."], ["Hometown = ciudad de origen.", "Hometown = the city you're from."]),
        M("How tall are you?", "I'm five feet six.", ["I'm 70 kilos.", "I'm 28.", "I'm tall six."], ["Tall = estatura. 5 feet 6 ≈ 1,68 m.", "Tall = height. 5 feet 6 ≈ 1.68 m."], { "I'm 70 kilos.": ["Eso es el peso (How much do you weigh?).", "That's weight (How much do you weigh?)."] }),
        M("Prefix for a married woman who uses her husband's last name:", "Mrs.", ["Mr.", "Miss", "Ms."], ["Mrs. = señora casada.", "Mrs. = married woman."], { "Ms.": ["Ms. sirve para cualquier mujer adulta, sin decir si está casada.", "Ms. is for any adult woman, without saying if she's married."] }),
        M("How do you say “@” in an e-mail address?", "at", ["arroba", "and", "a"], ["@ = at. maria@mail.com → maria at mail dot com.", "@ = at. maria@mail.com → maria at mail dot com."]),
        M("How do you spell your name? (Jhonnie)", "J-H-O-double N-I-E", ["Jay-aych-o-en-en-ai-ee", "J-H-O-N-I", "Johnny"], ["Dos letras iguales seguidas → double N.", "Two equal letters together → double N."])
      ])
    ]),

    T("preguntas-do-be", ["Preguntas: do/does o to be", "Questions: do/does or to be"], "A1–A2", ["Do you have…? vs. Are you…?", "Do you have…? vs. Are you…?"], [
      S(["¿Do o be?", "Do or be?"], ["Con adjetivos, lugares o trabajos va to be (Are you tired?). Con otros verbos va do/does (Do you work?).", "With adjectives, places or jobs use to be (Are you tired?). With other verbs use do/does (Do you work?)."], [
        M("___ you have a job?", "Do", ["Are", "Is", "Does"], ["«have» es un verbo de acción → Do you have…?", "“have” is a verb → Do you have…?"], { Are: ["«Are you have» mezcla dos verbos. Con «have» se pregunta con Do.", "“Are you have” mixes two verbs. With “have” ask with Do."] }),
        M("___ you tired?", "Are", ["Do", "Does", "Is"], ["«tired» es un adjetivo → Are you tired?", "“tired” is an adjective → Are you tired?"], { Do: ["«tired» no es un verbo; con adjetivos se pregunta con to be.", "“tired” isn't a verb; with adjectives ask with to be."] }),
        M("___ she live near here?", "Does", ["Is", "Do", "Are"], ["«live» es verbo y she → Does.", "“live” is a verb and she → Does."], { Is: ["«Is she live» mezcla to be con otro verbo. Es Does she live…?", "“Is she live” mixes be with another verb. It's Does she live…?"] }),
        M("___ your parents at home?", "Are", ["Do", "Does", "Is"], ["Lugar (at home) → to be: Are they at home?", "Place (at home) → to be: Are they at home?"]),
        M("___ he a doctor?", "Is", ["Does", "Do", "Are"], ["Trabajo con a/an → to be: Is he a doctor?", "Job with a/an → to be: Is he a doctor?"]),
        M("___ you like Mexican food?", "Do", ["Are", "Does", "Is"], ["«like» es verbo → Do you like…?", "“like” is a verb → Do you like…?"]),
        M("Where ___ you work?", "do", ["are", "does", "is"], ["«work» es verbo → Where do you work?", "“work” is a verb → Where do you work?"], { are: ["Where are you…? pregunta dónde estás. Con «work» va do.", "Where are you…? asks where you are. With “work” use do."] }),
        M("What time ___ it?", "is", ["does", "do", "are"], ["La hora va con to be: What time is it?", "Time uses to be: What time is it?"]),
        M("How old ___ your son?", "is", ["does", "has", "do"], ["La edad es con to be: How old is he?", "Age uses to be: How old is he?"], { has: ["En español «cuántos años tiene», pero en inglés la edad es con be.", "Age uses be in English."] }),
        M("___ your brother speak English?", "Does", ["Is", "Do", "Are"], ["«speak» es verbo y your brother = he → Does.", "“speak” is a verb and your brother = he → Does."])
      ]),
      S(["Respuestas cortas", "Short answers"], ["Responde con el mismo verbo de la pregunta: Do you…? — Yes, I do. Are you…? — Yes, I am.", "Answer with the same verb as the question: Do you…? — Yes, I do. Are you…? — Yes, I am."], [
        M("Do you have kids? — Yes, I ___.", "do", ["am", "have", "does"], ["Pregunta con do → respuesta con do.", "Question with do → answer with do."]),
        M("Is she your sister? — No, she ___.", "isn't", ["doesn't", "don't", "not"], ["Pregunta con is → respuesta con isn't.", "Question with is → answer with isn't."]),
        M("Does he work on Saturdays? — No, he ___.", "doesn't", ["isn't", "don't", "not"], ["Pregunta con does → doesn't.", "Question with does → doesn't."]),
        M("Are you married? — Yes, I ___.", "am", ["do", "'m", "are"], ["Are you…? — Yes, I am. (En respuestas cortas afirmativas no se contrae: no «Yes, I'm»).", "Are you…? — Yes, I am. (No contraction in short yes-answers.)"], { "'m": ["Al final de la respuesta no se contrae: Yes, I am.", "You can't contract at the end: Yes, I am."] }),
        M("Do your friends live in Miami? — Yes, they ___.", "do", ["are", "does", "live"], ["Do they…? — Yes, they do.", "Do they…? — Yes, they do."]),
        M("Are we late? — No, we ___.", "aren't", ["don't", "isn't", "not"], ["Are we…? — No, we aren't.", "Are we…? — No, we aren't."])
      ]),
      S(["Escribe la pregunta", "Write the question"], ["Completa con do, does, am, is o are.", "Complete with do, does, am, is or are."], [
        W("___ you speak French?", ["do"], ["Verbo speak → Do you…?", "Verb speak → Do you…?"]),
        W("___ your boss nice?", ["is"], ["Adjetivo nice y your boss = he/she → Is.", "Adjective nice and your boss = he/she → Is."]),
        W("___ Maria drink coffee?", ["does"], ["Verbo drink y Maria = she → Does.", "Verb drink and Maria = she → Does."]),
        W("Where ___ you from?", ["are"], ["Origen → to be: Where are you from?", "Origin → to be: Where are you from?"]),
        W("___ they play soccer on Sundays?", ["do"], ["Verbo play y they → Do.", "Verb play and they → Do."]),
        W("___ I late?", ["am"], ["Con «I» → Am I late?", "With “I” → Am I late?"])
      ])
    ]),

    T("gustos", ["Gustos: like, love, hate, prefer", "Likes: like, love, hate, prefer"], "A1–A2", ["like + -ing o to, y sentimientos", "like + -ing or to, and feelings"], [
      S(["Lo que te gusta", "What you like"], ["Si hablas de cosas en general, usa el plural: I like cats. Con he/she, likes.", "To talk about things in general, use the plural: I like cats. With he/she, likes."], [
        M("I like ___.", "parties", ["party", "the parties", "a parties"], ["En general → plural sin «the»: I like parties.", "In general → plural, no “the”: I like parties."], { "the parties": ["En español «me gustan las fiestas», pero en general el inglés no usa «the».", "In general English doesn't use “the” here."] }),
        M("My brother ___ videogames.", "likes", ["like", "is like", "liking"], ["He → likes.", "He → likes."], { "is like": ["«is like» significa «se parece a». Es likes.", "“is like” means “is similar to”. Use likes."] }),
        M("She doesn't ___ fish.", "like", ["likes", "liking", "to like"], ["Después de doesn't, el verbo va sin -s.", "After doesn't, the verb has no -s."]),
        M("Do you like ___?", "dogs", ["dog", "the dog", "a dogs"], ["En general → plural: dogs.", "In general → plural: dogs."]),
        M("My dad loves cooking, but he hates ___.", "washing the dishes", ["wash the dishes", "washes the dishes", "to washing the dishes"], ["love / hate + -ing: washing.", "love / hate + -ing: washing."]),
        M("What does she like? — She likes ___ and movies.", "music", ["musics", "the musics", "a music"], ["«music» no tiene plural.", "“music” has no plural."], { musics: ["«music» es incontable: no lleva -s.", "“music” is uncountable: no -s."] })
      ]),
      S(["-ing o to", "-ing or to"], ["Después de like, love, hate, start y prefer puedes usar -ing o to + verbo (I like dancing = I like to dance). Después de enjoy, solo -ing.", "After like, love, hate, start and prefer you can use -ing or to + verb (I like dancing = I like to dance). After enjoy, only -ing."], [
        M("I love ___ on the beach.", "walking", ["walk", "walks", "to walking"], ["love + -ing (o love to walk).", "love + -ing (or love to walk)."], { walk: ["Después de love, el verbo va con -ing o con to: walking / to walk.", "After love, use -ing or to: walking / to walk."] }),
        M("She enjoys ___ new people.", "meeting", ["to meet", "meet", "meets"], ["enjoy solo va con -ing.", "enjoy only takes -ing."], { "to meet": ["Con enjoy no se usa to: enjoy meeting.", "enjoy doesn't take to: enjoy meeting."] }),
        M("I prefer ___ at home on Fridays.", "staying", ["stay", "stays", "to staying"], ["prefer + -ing (o prefer to stay).", "prefer + -ing (or prefer to stay)."]),
        M("It's starting ___. Take an umbrella!", "to rain", ["rain", "rains", "to raining"], ["start + to (o start raining). Después de starting, mejor «to rain» para no repetir -ing.", "start + to (or start raining). After starting, “to rain” avoids two -ings."]),
        M("He hates ___ up early.", "getting", ["get", "gets", "to getting"], ["hate + -ing (o hate to get).", "hate + -ing (or hate to get)."]),
        M("Do you like ___ English?", "studying", ["study", "studies", "to studying"], ["like + -ing (o like to study).", "like + -ing (or like to study)."]),
        M("I'd like ___ a coffee, please.", "to order", ["ordering", "order", "orders"], ["«I'd like» (quisiera) siempre va con to: I'd like to order.", "“I'd like” (= I want, politely) always takes to."], { ordering: ["«I like ordering» = me gusta pedir. «I'd like» = quisiera, y va con to.", "“I like ordering” = I enjoy it. “I'd like” = I want, and takes to."] }),
        M("I prefer tea ___ coffee.", "to", ["than", "that", "of"], ["prefer A to B.", "prefer A to B."], { than: ["Con prefer se compara con «to»: prefer tea to coffee.", "With prefer you compare with “to”."] })
      ]),
      S(["Sentimientos", "Feelings"], ["Elige cómo se siente la persona.", "Choose how the person feels."], [
        M("I have an exam tomorrow and I didn't study. I'm ___.", "nervous", ["excited", "bored", "relaxed"], ["Examen sin estudiar → nervous.", "Exam without studying → nervous."]),
        M("This movie is so long and nothing happens. I'm ___.", "bored", ["boring", "excited", "angry"], ["Cómo TE sientes → -ed: bored. La película es boring.", "How YOU feel → -ed: bored. The movie is boring."], { boring: ["«I'm boring» = soy aburrido (aburro a otros). Tú te sientes bored.", "“I'm boring” = you make others bored. You feel bored."] }),
        M("We're going to Disney tomorrow! The kids are very ___.", "excited", ["exciting", "worried", "tired"], ["Emocionados → excited.", "→ excited."], { exciting: ["«exciting» describe la cosa (an exciting trip). Los niños se sienten excited.", "“exciting” describes the thing. The kids feel excited."] }),
        M("My son is two hours late and he doesn't answer his phone. I'm ___.", "worried", ["happy", "bored", "excited"], ["Preocupada → worried.", "→ worried."]),
        M("The football game is very ___!", "exciting", ["excited", "nervous", "bored"], ["La cosa que emociona → -ing: exciting.", "The thing that excites → -ing: exciting."])
      ])
    ]),

    T("presente-continuo", ["Presente continuo", "Present continuous"], "A1–A2", ["Lo que pasa ahora y planes con fecha", "What's happening now and fixed plans"], [
      S(["¿Qué está pasando?", "What's happening?"], ["am / is / are + verbo con -ing.", "am / is / are + verb + -ing."], [
        M("Shh! The baby ___.", "is sleeping", ["sleeps", "is sleep", "sleeping"], ["Ahora mismo → is + -ing.", "Right now → is + -ing."], { sleeping: ["Falta to be: The baby is sleeping.", "to be is missing: The baby is sleeping."], sleeps: ["«sleeps» es rutina (duerme todas las noches). Ahora mismo: is sleeping.", "“sleeps” is a routine. Right now: is sleeping."] }),
        M("I ___ to you! Put down your phone.", "am talking", ["talk", "am talk", "talking"], ["Ahora → am talking.", "Now → am talking."]),
        M("Look! It ___.", "'s raining", ["rains", "is rain", "raining"], ["Ahora → It's raining.", "Now → It's raining."]),
        M("What ___ you doing?", "are", ["do", "is", "does"], ["What are you doing? (¿qué estás haciendo?)", "What are you doing?"], { do: ["«What do you do?» pregunta a qué te dedicas. Ahora mismo: What are you doing?", "“What do you do?” asks about your job. Right now: What are you doing?"] }),
        M("They ___ TV right now. They're playing cards.", "aren't watching", ["don't watch", "isn't watching", "not watching"], ["Negativa: aren't + -ing.", "Negative: aren't + -ing."]),
        M("Mom, Pedro ___ my chocolate!", "is eating", ["eats", "are eating", "eat"], ["Pedro = he, ahora → is eating.", "Pedro = he, now → is eating."]),
        M("Why ___ you laughing?", "are", ["do", "is", "does"], ["Why are you laughing?", "Why are you laughing?"]),
        M("She ___ (have) a shower. Call back later.", "is having", ["is haveing", "has", "is have"], ["have → having (se quita la -e).", "have → having (drop the -e)."], { "is haveing": ["Si el verbo termina en -e, se quita: having.", "If the verb ends in -e, drop it: having."] })
      ]),
      S(["Rutina o ahora", "Routine or now"], ["Presente simple = rutina (every day, usually). Presente continuo = ahora (now, at the moment, look!).", "Present simple = routine (every day, usually). Present continuous = now (now, at the moment, look!)."], [
        M("I usually ___ the bus, but today I'm driving.", "take", ["am taking", "takes", "taking"], ["«usually» = rutina → presente simple.", "“usually” = routine → present simple."], { "am taking": ["«usually» habla de rutina; el continuo es para ahora.", "“usually” is about routine; the continuous is for now."] }),
        M("He ___ jeans today because it's Friday.", "is wearing", ["wears", "wear", "wearing"], ["Hoy (algo temporal) → is wearing.", "Today (temporary) → is wearing."]),
        M("Water ___ at 100 °C.", "boils", ["is boiling", "boil", "boiling"], ["Un hecho que siempre es verdad → presente simple.", "A fact that's always true → present simple."]),
        M("Turn off the stove! The water ___!", "is boiling", ["boils", "boil", "boiling"], ["Está pasando ahora → is boiling.", "It's happening now → is boiling."]),
        M("My sister ___ in a bank. She's a cashier.", "works", ["is working", "work", "working"], ["Su trabajo (algo permanente) → works.", "Her job (permanent) → works."]),
        M("At the moment I ___ a great book.", "'m reading", ["read", "reads", "reading"], ["«at the moment» → continuo.", "“at the moment” → continuous."]),
        M("I ___ you. Can you say that again?", "don't understand", ["am not understanding", "not understand", "doesn't understand"], ["Verbos de mente (understand, know, want, like) casi nunca van con -ing.", "Mind verbs (understand, know, want, like) are rarely used with -ing."], { "am not understanding": ["«understand» no se suele usar en continuo: I don't understand.", "“understand” isn't usually used in the continuous: I don't understand."] })
      ]),
      S(["Planes para el futuro", "Plans for the future"], ["El presente continuo también sirve para planes ya organizados (con hora o fecha): I'm meeting Ana tonight.", "The present continuous also works for arranged plans (with a time or date): I'm meeting Ana tonight."], [
        M("What ___ we doing tonight?", "are", ["do", "will", "is"], ["Plan → What are we doing tonight?", "Plan → What are we doing tonight?"]),
        M("I ___ my grandma on Sunday. I have the bus ticket.", "'m visiting", ["visit", "visiting", "visits"], ["Plan con boleto → I'm visiting.", "Plan with a ticket → I'm visiting."]),
        M("Sorry, I can't go. I ___ late tomorrow.", "'m working", ["work", "working", "works"], ["Plan para mañana → I'm working.", "Plan for tomorrow → I'm working."]),
        M("They ___ married in June!", "are getting", ["get", "getting", "gets"], ["Plan con fecha → are getting married.", "Plan with a date → are getting married."]),
        W("We ___ (fly) to Miami next Friday.", ["are flying", "'re flying", "re flying"], ["Plan con fecha → are flying.", "Plan with a date → are flying."])
      ])
    ])
  );
})();
