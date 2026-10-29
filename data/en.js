/*
  Traducción al inglés del contenido (se usa cuando el estudiante elige EN).
  - sections: temas de Escuchar, por id
  - channels: descripción de cada canal, por nombre (igual que en resources.js)
  - exercises: por id de tema; las secciones e items van en el MISMO orden que en exercises.js.
    En cada item: e = explicación; q / quote = solo si la pregunta original está en español;
    labels = traducción de opciones que están en español { "opción original": "English label" }.
  Si falta una traducción, se muestra el texto en español.
*/
window.YEB_EN = (function () {
  // Story items «right or wrong?»: question + labels for «Está bien» / «Debe ser «x»»
  const SJ = (n, word, aLabel, oLabel, e, others) => {
    const labels = { "Está bien": "It's correct" };
    const add = (en) => { labels[`Debe ser «${en.match(/“(.+)”/)[1]}»`] = en; };
    if (aLabel) { add(aLabel); add(oLabel); }
    (others || []).forEach((w) => add(`It should be “${w}”`));
    return { q: `(${n}) Is “${word}” correct?`, labels, e };
  };

  return {
  sections: {
    aprender: { short: "Learner podcasts", title: "Podcasts for English learners", text: "Made for learners: clear speech, vocabulary explained, and many have transcripts." },
    shadowing: { short: "Pronunciation & shadowing", title: "Pronunciation and shadowing", text: "Listen and repeat out loud right after the speaker to train rhythm, intonation and fluency.",
      video: { title: "4.5 hours of speaking practice", tip: "Listen to each sentence, pause, and repeat it copying the intonation. 15 minutes a day is enough." } },
    vocabulario: { short: "Vocabulary & grammar", title: "Vocabulary and grammar", text: "Short video lessons with native teachers: phrasal verbs, expressions, common mistakes and grammar explained in English." },
    conversacion: { short: "Everyday conversation", title: "Everyday conversation", text: "English for every day: street interviews, chats between friends and real situations." },
    entretenimiento: { short: "Celebrities & talk shows", title: "Celebrities, talk shows and entertainment", text: "Podcasts and shows by actors and comedians. Natural conversations, with humor and at real speed: great from B2 up." },
    noticias: { short: "News", title: "News in English", text: "News told more slowly or in levels, so you can follow current events while you practice." },
    crecimiento: { short: "Personal growth", title: "Mindset and personal growth", text: "Conversations between native speakers about habits, motivation and well-being. Real English at normal speed.",
      video: { title: "The Power of Reinvention", tip: "Turn on English subtitles and write down 5 new expressions while you listen." } },
    ted: { short: "TED & speeches", title: "TED talks and speeches", text: "Talks and speeches with English subtitles. Lots of different accents and one clear topic per video." },
    negocios: { short: "Business & work", title: "Business and work", text: "Vocabulary for meetings, interviews, entrepreneurship and money: the English you'll hear at work." },
    curiosidad: { short: "Science & stories", title: "Science, stories and curiosity", text: "True stories, science and explanations of the world. Fast pace: best for upper-intermediate or advanced." },
    examenes: { short: "Exams", title: "Exams: IELTS, TOEFL and Cambridge", text: "Strategies, sample answers and practice to prepare for official English exams." }
  },

  channels: {
    "Mayim Bialik's Breakdown": "The actress who played Amy, Sheldon's girlfriend, and a PhD in neuroscience, talks about mental health, science and well-being. She speaks clearly and calmly.",
    "SmartLess": "Three actors interview a surprise guest. Lots of humor and very natural English, with interruptions and jokes.",
    "Armchair Expert": "Long, deep conversations with actors, scientists and writers. Good for listening to conversational English for a long time.",
    "Conan O'Brien Needs A Friend": "Comedian Conan O'Brien chats with celebrities. Very funny; the fast humor is a good challenge for advanced learners.",
    "The Tonight Show Starring Jimmy Fallon": "Games, short interviews and sketches with celebrities. The videos are a few minutes long and almost all have subtitles.",
    "Late Night with Seth Meyers": "Interviews and comedy monologues about current events. Useful for learning expressions and cultural references.",
    "Hot Ones": "Celebrity interviews while eating hotter and hotter wings. Short questions, spontaneous answers and lots of laughs.",
    "Shadowing for dummies!": "Scenes from series, movies and celebrity interviews to repeat line by line. Each video shows the text and pauses so you can repeat.",
    "Parrot Shadowing": "Imitation exercises with actors and famous speeches: American accent, intonation and rhythm.",
    "6 Minute English": "6-minute episodes on current topics with the key vocabulary explained. The best place to start.",
    "Learning English Conversations": "Includes “The English We Speak”: one everyday expression per episode, explained in a few minutes.",
    "Coffee Break English": "15-minute lessons that build step by step, with a teacher and a student. They speak slowly.",
    "Easy Stories in English": "Stories and fables told by level (beginner, intermediate, advanced), with hard words explained.",
    "Speak English Now": "Mini-stories with questions for you to answer out loud. No grammar, just listening and speaking.",
    "Speak English With Vanessa": "Natural American English, spoken slowly and calmly. Great for building confidence.",
    "ESLPod": "A dialogue read slowly and then explained word by word. A classic for improving your listening.",
    "Speak English with Tiffani": "Vocabulary by topic and tips to speak more fluently. Short, practical episodes.",
    "All Ears English": "American expressions, phrasal verbs and small talk in relaxed conversations.",
    "Culips English Podcast": "Conversations between Canadian native speakers about everyday idioms, slang and phrasal verbs.",
    "English Learning for Curious Minds": "History, psychology and culture in clear British English. Every episode has a transcript.",
    "Speak Better English with Harry": "Vocabulary, expressions and phrasal verbs by topic, explained calmly by a British teacher.",
    "Luke's English Podcast": "Long, funny episodes full of real British English. For when you want to listen for longer.",

    "English is EZ with Connor": "Long “listen and repeat” sessions with useful sentences. Excellent for daily shadowing.",
    "English with Jennifer": "Pronunciation and grammar step by step, with pauses so you can repeat. Very clear for beginners.",
    "Rachel's English": "The reference for American pronunciation: reductions, linking and rhythm, word by word.",
    "Accent's Way English with Hadar": "American accent and speaking confidence, from a teacher who also learned English as a second language.",
    "English Speaking Success": "“Speak with me” lessons and British pronunciation to help you speak more fluently.",
    "The English Coach": "Conversation practice and sentences to repeat out loud, with clear, slow explanations.",
    "Learn English With TV Series": "Scenes from TV shows and movies analyzed line by line. Repeat the dialogues to sound more natural.",

    "English with Lucy": "British vocabulary, pronunciation and grammar with everyday examples.",
    "Oxford Online English": "Complete, well-organized lessons: grammar, vocabulary, conversation and writing.",
    "English with Emma · engVid": "Grammar, vocabulary and common mistakes explained on the whiteboard, step by step.",
    "Adam's English Lessons · engVid": "More advanced grammar, vocabulary and writing. Great for polishing the details.",
    "English with James · engVid": "Phrasal verbs, idioms and slang explained with humor and whiteboard drawings.",
    "Learn English with Gill · engVid": "Calm, very clear lessons on British grammar and vocabulary.",
    "Learn English with Papa Teach Me": "British grammar and expressions with humor and lots of real examples.",
    "Arnel's Everyday English": "Everyday American expressions and vocabulary, explained calmly.",

    "Easy English": "Street interviews with English and Spanish subtitles. Ordinary people speaking the way they really speak.",
    "Learn English with Bob the Canadian": "He speaks slowly and clearly about daily life on his farm. Ideal for starting to listen to native speakers.",
    "elllo": "Short conversations between people from all over the world, organized by level. You hear many accents.",
    "English Addict with Mr Duncan": "Long, relaxed live streams with everyday vocabulary and lots of conversation.",

    "VOA Learning English": "News read more slowly with simple vocabulary. It also has everyday grammar lessons.",
    "News in Levels": "The same news story told at three levels of difficulty. Start with level 1 and move up.",
    "CNN 10": "World news in 10 minutes, made for students. Fast but very clear.",

    "The Mel Robbins Podcast": "Practical advice on habits, motivation and reinventing yourself. Mel speaks with energy and very clearly.",
    "On Purpose with Jay Shetty": "Interviews about purpose, relationships and mental health. Jay has a British accent; many guests are American.",
    "A Bit of Optimism": "Calm conversations about leadership, trust and relationships. Simon speaks slowly.",
    "Deep Dive with Ali Abdaal": "Productivity, studying and habits, explained by a British doctor who speaks very clearly.",
    "Matt D'Avella": "Short videos about minimalism and habits, with calm narration and great visuals.",
    "The Daily Stoic": "A short daily reflection based on Stoic philosophy. Episodes are just a few minutes long.",
    "The School of Greatness": "Interviews with athletes, entrepreneurs and experts about success, health and relationships.",
    "Unlocking Us": "Emotions, vulnerability and relationships, with a researcher who shares very personal stories.",

    "TED Talks": "The official TED talks. On the TED website every talk has an interactive transcript.",
    "TED-Ed": "5-minute animated lessons on science, history and more. The images help you understand.",
    "TEDx Talks": "Thousands of talks from local events around the world. You hear many different accents.",
    "English Speeches": "Famous speeches with English subtitles on screen. Perfect for reading while you listen.",
    "Big Think": "Experts explain ideas from science, psychology and business in a few minutes. Advanced vocabulary.",

    "Business English from All Ears English": "Phrases for meetings, emails, interviews and networking. Very useful if you work remotely.",
    "Business English Pod": "Work dialogues (meetings, presentations, negotiations) explained phrase by phrase.",
    "CNBC Make It": "Short videos about money, careers and professional success. Good personal finance vocabulary.",
    "How I Built This": "Founders of famous brands tell how they started. Stories full of business vocabulary.",
    "The Diary Of A CEO": "Long interviews with entrepreneurs and experts about success, health and money. Natural British English.",
    "Planet Money": "The economy explained with fun, easy-to-follow stories.",
    "HBR IdeaCast": "Leadership and management explained by experts. Advanced professional English.",

    "Kurzgesagt – In a Nutshell": "Animated science videos of about 10 minutes. Clear narration and English subtitles.",
    "SciShow": "Curious science questions answered in a few minutes.",
    "Veritasium": "Science experiments and mysteries told as a story.",
    "CrashCourse": "Full courses on history, science and more in 10–15 minute videos. They speak fast.",
    "The Moth": "Ordinary people tell true stories on stage, without a script. Emotional, spontaneous English.",
    "Hidden Brain": "Psychology and human behavior explained through stories. Shankar speaks slowly and clearly.",
    "Stuff You Should Know": "Two friends explain how everything works, from coffee to the pyramids. Natural, funny conversation.",
    "Vox": "Visual explainers on current events, culture and society. Fast narration.",
    "This American Life": "True stories about life in the United States, told like little radio movies.",
    "Radiolab": "Science and philosophy with lots of sound and creative editing. A challenge for advanced learners.",
    "Freakonomics Radio": "Economics and the hidden side of everyday things. Fast pace.",
    "Huberman Lab": "Neuroscience applied to sleep, focus and health. Technical vocabulary.",

    "English with Cambridge": "Cambridge's official channel: tips for their exams (B1 Preliminary, B2 First, C1 Advanced) and lessons.",
    "IELTS Speaking for Success": "Every week they answer real IELTS Speaking questions with vocabulary and model answers.",
    "IELTS Liz": "Clear strategies for every part of IELTS, with examples and typical mistakes.",
    "E2 IELTS": "IELTS classes and practice tests with teachers from different countries.",
    "IELTS Advantage": "Techniques to raise your IELTS Writing and Speaking scores.",
    "TST Prep TOEFL": "TOEFL preparation: sample questions, templates and timed practice."
  },

  exercises: {
    "pronombres-objeto": {
      title: "Object pronouns", text: "me, you, him, her, it, us, them",
      sections: [
        { title: "People", instructions: "Choose the pronoun that receives the action.", items: [
          { e: "“Her” is the object that replaces “my grandmother”. “She” only works as a subject." },
          { e: "After the verb “like” we use the object: “him”." },
          { e: "After “help” we use the object: “us”." },
          { e: "After the preposition “to” we use the plural object: “them”." },
          { e: "“See” needs an object: “her” replaces Sofia." },
          { e: "The person who receives the call is the object: “me”." },
          { e: "“Give someone something”: the person who receives goes in the object form, “him”." },
          { e: "“Them” replaces “the kids” as the object of “wake up”." },
          { e: "“You” is the same as a subject and as an object." },
          { e: "For “you and Daniel” we use plural “you”: “miss you both”." }
        ] },
        { title: "Things and animals", instructions: "Choose “it” (one thing) or “them” (more than one).", items: [
          { e: "One thing (a phone) → “it”." },
          { e: "“Shoes” is plural → “them”." },
          { e: "One thing (my coffee) → “it”." },
          { e: "Two cats → plural → “them”." },
          { e: "“This song” is one thing → “it”." },
          { e: "In English “glasses” is always plural → “them”." },
          { e: "“The movie” is singular → “it”." },
          { e: "“Strawberries” is plural → “them”." }
        ] },
        { title: "After verbs and prepositions", instructions: "After a verb or a preposition (for, with, to, at...) we use the object pronoun.", items: [
          { e: "After “for” we use the object: “for you”." },
          { e: "After “with” we use the object: “with us”." },
          { e: "After “at” we use the object: “look at him”." },
          { e: "After “to” we use the object: “to her”." },
          { e: "After “about” we use the plural object: “about them”." },
          { e: "After “next to” we use the object: “next to me”." },
          { e: "“Tell someone something”: the person goes in the object form, “tell me”." },
          { e: "The person who receives the message is the object: “her”." },
          { e: "After “between” we use the object: “between you and me”." },
          { e: "After “ask” we use the plural object: “them”." }
        ] },
        { title: "Subject or object?", instructions: "Decide whether the sentence needs a subject (I, he, she, we, they) or an object (me, him, her, us, them).", items: [
          { e: "The person doing the action is the subject: “She and I went”." },
          { e: "Trick: remove “Sam and” → “gave me a good grade”." },
          { e: "It's the subject of “are coming”: “They”." },
          { e: "After “with” we use the object. Trick: “come with me”." },
          { e: "He does the action of “loves”: subject “He”." },
          { e: "It's part of the subject. Trick: remove “Kevin and” → “I am in the same class”." },
          { e: "He receives the call: object. Trick: “called me”." },
          { e: "In short answers we use the object: “Not me!”." }
        ] },
        { title: "Complete using the context", instructions: "Read the whole sentence before you choose: the context tells you who or what we're talking about. Some have two gaps.", items: [
          { e: "The speaker says “I'm not angry”: don't be afraid of me → “afraid of me”." },
          { e: "The podcast is a thing: subject “It never ends”, object “turn it off”." },
          { e: "“Headphones” is plural → “them”. After “to” we use the object → “me”." },
          { e: "First she does the action (subject “she”), then we pick her up (object “her”)." },
          { e: "“Talk to him” (object after “to”); “he makes me laugh” (subject)." },
          { e: "The people having the barbecue are “we”; after “with” → “us”." },
          { e: "Milk is a thing and here it's the subject: “It expires tomorrow”." },
          { e: "Mosquitoes bite (plural subject “They”) the speaker (object “me”)." },
          { e: "“Keys” is plural → “find them”. Tom is late → subject “he”." },
          { e: "“My friend and I” = we → object “us”." },
          { e: "Grandpa = he. “Speak to him” (object), “he will understand” (subject)." },
          { e: "“My cousins” is plural → “see them”." }
        ] },
        { title: "Right or wrong?", instructions: "Read the sentence and decide if the pronoun is used correctly. Think about who or what it refers to.", items: [
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "Correct: “them” = my grandparents, after “with”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "A jacket is one thing: “I don't want it”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "After “help” we use the object: “help her”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "It's the subject: “Pedro and I play football”. Trick: “I play football”, not “me play”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "Correct: we receive the questions → object. Trick: “asks me”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "“Glasses” is always plural: “Have you seen them?”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "Correct: for pets with a name or an owner we use “him” or “her”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "After “invite” we use the object: “We invite them”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "After “between” we use the object: “between you and me”." },
          { q: "Is the sentence correct?", labels: { "Correcta": "Correct", "Incorrecta": "Incorrect" }, e: "Correct: in short, informal answers we use the object: “Me!”." }
        ] },
        { title: "Write the pronoun", instructions: "Write the missing object pronoun (me, you, him, her, it, us, them).", items: [
          { e: "“My parents” is plural → “call them”." },
          { e: "Pizza is a thing → “try it”." },
          { e: "Sara = she → after “for” we use “her”." },
          { e: "The speaker says “I'm over here” → “see me”." },
          { e: "“You and your brother” = you (plural) → “you”." },
          { e: "“Jeans” is always plural → “fixing them”." },
          { e: "My boyfriend = he → “for him”." },
          { e: "“We never complain” → we are the ones who get the homework: “us”." }
        ] },
        {},   // story: English is inline in data/exercises.js
        {}    // story vocabulary: same
      ]
    },

    "numeros": {
      title: "Numbers", text: "Years, prices and phone numbers in pairs",
      sections: [
        { title: "Years in pairs", instructions: "Years are split into two pairs: 19 | 84 → nineteen eighty-four. Write how you say them.", items: [
          { e: "19 | 84 → nineteen eighty-four." },
          { e: "17 | 76 → seventeen seventy-six." },
          { e: "19 | 99 → nineteen ninety-nine." },
          { e: "14 | 92 → fourteen ninety-two." },
          { e: "If the second pair starts with 0, say the 0 as “oh”: nineteen oh five." },
          { e: "If it ends in 00, say “hundred”: eighteen hundred." },
          { q: "How do you say 1960?", e: "19 | 60 → nineteen sixty." },
          { q: "How do you say 2008?", e: "From 2000 to 2009 we use “two thousand…” (also “two thousand and eight” in British English)." },
          { e: "The most common way is in pairs: 20 | 26 → twenty twenty-six." },
          { q: "Which of these is NOT a correct way to say 2015?", e: "2015 is “twenty fifteen” or “two thousand (and) fifteen”." }
        ] },
        { title: "Other numbers in pairs", instructions: "Room numbers, flights, addresses, prices and times are also said in pairs.", items: [
          { q: "Room 1215", e: "12 | 15 → twelve fifteen." },
          { q: "Flight 2471", e: "24 | 71 → twenty-four seventy-one." },
          { q: "3450 Oak Street (address)", e: "34 | 50 → thirty-four fifty Oak Street." },
          { q: "What's the natural way to say the price $4.75?", e: "4 | 75 → four seventy-five (or “four dollars and seventy-five cents”)." },
          { q: "How do you say the time 7:45?", e: "7 | 45 → seven forty-five (or “a quarter to eight”)." },
          { q: "How do you say the price $12.99?", e: "12 | 99 → twelve ninety-nine." },
          { q: "Bus 147", e: "The natural way is “one forty-seven” (1 | 47)." },
          { q: "1,200 (informal, in pairs)", e: "12 | 00 → twelve hundred (formal: one thousand two hundred)." }
        ] },
        { title: "Phone numbers", instructions: "Phone numbers are said digit by digit.", items: [
          { q: "How do you say 555-0182?", e: "Digit by digit, and 0 is usually said “oh”." },
          { q: "In a phone number, 0 is almost always said:", labels: { "«oh» (como la letra O) o «zero»": "“oh” (like the letter O) or “zero”", "«nil»": "“nil”", "«none»": "“none”", "«nothing»": "“nothing”" }, e: "In phone numbers we say “oh” or “zero”. “Nil” is for sports scores (UK)." },
          { q: "In a British phone number, “77” is usually said:", e: "In the UK, repeated digits are said with “double”: double seven." },
          { q: "911 (US emergency number)", e: "It's said digit by digit: nine-one-one (not “nine eleven”)." },
          { q: "How do you ask for a phone number?", e: "To ask for information we use “What's…?”." },
          { q: "How do you say 800-3300?", e: "Digit by digit. In the US the 800 code is also said “eight hundred”." }
        ] },
        { title: "Big numbers and decimals", instructions: "Watch out for hundred / thousand / million, commas and decimal points.", items: [
          { e: "Hundred, thousand and million don't take -s after a number." },
          { e: "Three hundred (and) fifty. The “and” is typical of British English." },
          { q: "How do you read 2.5?", e: "In English decimals use a point, and we say “point”." },
          { q: "In English, “1,500” means:", labels: { "mil quinientos": "one thousand five hundred", "uno coma cinco": "one point five", "ciento cincuenta": "one hundred fifty", "quince": "fifteen" }, e: "In English the comma separates thousands and the point marks decimals." },
          { q: "“One billion” in English is:", labels: { "mil millones": "a thousand million (1,000,000,000)", "un billón (un millón de millones)": "a million million (1,000,000,000,000)", "cien millones": "a hundred million", "un millón": "one million" }, e: "Billion = 1,000,000,000. Careful: in Spanish “un billón” is a million million!" },
          { e: "13 = thirTEEN (stress at the end); 30 = THIRty (stress at the start)." },
          { e: "50 = FIFty; 15 = fifTEEN. Watch the spelling: fifty, not “fivety”." },
          { e: "With no number before it, it takes -s and “of”: thousands of people." }
        ] },
        { title: "Story: Jake's 4/20 weekend", instructions: "Read the story and choose how to say each number. Tap a circle to jump to its question.", items: [
          { q: "(1) How do you say “1994”?", e: "Years go in pairs: 19 | 94 → nineteen ninety-four." },
          { q: "(2) How do you say flight “2215”?", e: "Flight numbers go in pairs: 22 | 15 → twenty-two fifteen." },
          { q: "(3) How do you say the time “4:20”?", e: "Hour | minutes → four twenty. “420” (four-twenty) is also the code for cannabis culture." },
          { q: "(4) What's the natural way to say “$349.99”?", e: "Dollars | cents: 349 | 99 → three forty-nine ninety-nine." },
          { q: "(5) How do you say room “1412”?", e: "Room numbers go in pairs: 14 | 12 → fourteen twelve." },
          { q: "(6) How do you say the address “1650”?", e: "Addresses go in pairs: 16 | 50 → sixteen fifty Blake Street." },
          { q: "(7) How many tacos did he order?", e: "15 = fifTEEN (stress at the end). 50 = FIFty. A big difference in tacos!" },
          { q: "(8) How do you say the phone number “555‑0193”?", e: "Phone numbers: digit by digit, and 0 is said “oh”." },
          { q: "(9) How do you say “April 21st”?", e: "Dates use ordinals: April twenty-first." }
        ] },
        { title: "Slang from the story", instructions: "Informal street English: use it with friends, not at work. What does each word mean?", items: [
          { q: "A “stoner” is:", labels: { "Alguien que fuma marihuana muy seguido": "Someone who smokes weed a lot", "Alguien que colecciona piedras": "Someone who collects stones", "Alguien muy serio": "A very serious person" }, e: "Stoner (or pothead) = someone who smokes weed regularly. Informal." },
          { q: "“Chill” means:", labels: { "Relajado, tranquilo": "Relaxed, calm", "Con frío": "Cold", "Aburrido": "Boring" }, e: "Chill = relaxed. Also “to chill” = to relax: “Let's just chill tonight”." },
          { q: "“Weed” is:", labels: { "Marihuana": "Marijuana", "Maleza del jardín": "A plant you pull out of the garden", "Tabaco": "Tobacco" }, e: "Weed = marijuana (informal). Literally it means an unwanted plant; context tells you which one." },
          { q: "A “pre-roll” is:", labels: { "Un porro que ya viene armado": "A joint that comes already rolled", "Un pan antes de hornear": "Bread before baking", "Un anuncio antes de un video": "An ad before a video" }, e: "Pre-roll = a ready-made joint. A joint is a rolled marijuana cigarette." },
          { q: "Here, “gummies” are:", labels: { "Gomitas con marihuana": "Gummy candies with cannabis", "Chicles normales": "Regular chewing gum", "Zapatos de goma": "Rubber shoes" }, e: "In this context they're “edibles”: food with cannabis in it." },
          { q: "Here, “baked” means:", labels: { "Muy drogado por la marihuana": "Very high from weed", "Horneado": "Cooked in an oven", "Muy cansado": "Very tired" }, e: "Baked = stoned = high: under the effects of marijuana." },
          { q: "“The munchies” is:", labels: { "Un hambre enorme después de fumar marihuana": "Huge hunger after smoking weed", "Un tipo de tacos": "A type of taco", "Ganas de dormir": "Feeling sleepy" }, e: "The munchies = a strong craving for food, especially after smoking." },
          { q: "“4/20” (four-twenty) is:", labels: { "El código y el día (20 de abril) de la cultura de la marihuana": "The code and the day (April 20) of cannabis culture", "Una hora sin importancia": "A random time of day", "Un número de vuelo": "A flight number" }, e: "420 / four-twenty is linked to marijuana; April 20 (4/20) is celebrated." },
          { q: "“Buddy” means:", labels: { "Amigo, compa": "Friend, pal", "Hermano de sangre": "Blood brother", "Jefe": "Boss" }, e: "Buddy = friend (informal). Similar: pal, dude, bro." }
        ] },
        { title: "Find the mistake: a voicemail", instructions: "Tom left you a message about an apartment. Each sentence has one mistake in how a number is said: tap the wrong part.", items: [
          { q: "Which part is wrong?", e: "After a number, hundred has no -s: one thousand two hundred dollars." },
          { q: "Which part is wrong?", e: "Years don't use “and”: nineteen eighty." },
          { q: "Which part is wrong?", e: "Dates are said with ordinals: May fifth." },
          { q: "Which part is wrong?", e: "Floors use ordinals: the twelfth floor." },
          { q: "Which part is wrong?", e: "With no number before it, add -s: hundreds of apartments." },
          { q: "Which part is wrong?", e: "With a number before it, thousand has no -s: two point five thousand dollars." },
          { q: "Which part is wrong?", e: "Phone numbers are said digit by digit: five five five." },
          { q: "Which part is wrong?", e: "Dates use ordinals: the thirtieth of June." }
        ] },
        { title: "Math in English", instructions: "plus (+) · minus (−) · times (×) · divided by (÷) · equals (=). Write the answer in words.", items: [
          { e: "12 + 9 = 21 → twenty-one." },
          { e: "100 − 45 = 55 → fifty-five." },
          { e: "7 × 8 = 56 → fifty-six." },
          { e: "90 ÷ 3 = 30 → thirty." },
          { e: "1,000 ÷ 2 = 500 → five hundred." },
          { e: "5.00 − 3.40 = 1.60 → one sixty (or “a dollar sixty”)." },
          { e: "2026 − 1990 = 36 → thirty-six." },
          { q: "How do you read “15 × 4 = 60”?", e: "× = times. 15 = fifTEEN and 60 = SIXty." }
        ] }
      ]
    },

    "fechas": {
      title: "Dates", text: "Ordinals, formats and prepositions",
      sections: [
        { title: "Ordinal numbers", instructions: "Write the ordinal in words (1st → first).", items: [
          { e: "1st = first." },
          { e: "2nd = second." },
          { e: "3rd = third." },
          { e: "5th = fifth (the “v” changes to “f”)." },
          { e: "9th = ninth (no “e” from nine)." },
          { e: "12th = twelfth (“ve” changes to “f”)." },
          { e: "Only the last number changes: twenty-first." },
          { e: "Tens change “y” to “ieth”: thirty → thirtieth." }
        ] },
        { title: "How to say dates", instructions: "Dates are said with ordinal numbers, not regular numbers.", items: [
          { q: "How do you say “July 4” in American English?", e: "In the US: month + ordinal → July fourth." },
          { q: "How do you say “4 July” in British English?", e: "In the UK: the + ordinal + of + month." },
          { e: "With an exact date we use “on” + ordinal: on May first." },
          { q: "How do you say the date “March 22”?", e: "Ordinal: twenty-second." },
          { q: "Which question is correct?", e: "“What's the date today?” or “What's today's date?”." },
          { q: "“Christmas is on December 25th.” How do you read “25th”?", e: "25th = twenty-fifth." },
          { q: "How do you say “October 3, 2026” in the US?", e: "Month + ordinal + year in pairs." },
          { q: "In a written date, what is most common in English?", labels: {
              "Escribir el número (May 5) y decir el ordinal (May fifth)": "Write the number (May 5) and say the ordinal (May fifth)",
              "Escribir y decir el número normal (May five)": "Write and say the regular number (May five)",
              "Escribir el mes en minúscula (may 5)": "Write the month in lowercase (may 5)",
              "Poner el año primero siempre": "Always put the year first" }, e: "We write “May 5” or “5 May” but read it with an ordinal. Months always start with a capital letter." }
        ] },
        { title: "American and British formats", instructions: "The US writes month/day/year; the UK writes day/month/year.", items: [
          { q: "In the US, “03/04/2026” means:", labels: { "4 de marzo de 2026": "March 4, 2026", "3 de abril de 2026": "April 3, 2026", "2026 de marzo": "March 2026", "No se puede saber": "You can't tell" }, e: "American format: month/day/year → March 4." },
          { q: "In the UK, “03/04/2026” means:", labels: { "3 de abril de 2026": "3 April 2026", "4 de marzo de 2026": "4 March 2026", "30 de abril": "30 April", "No se puede saber": "You can't tell" }, e: "British format: day/month/year → 3 April." },
          { q: "How does an American write Christmas Day (December 25)?", e: "Month first: 12/25." },
          { q: "Which date is impossible in American format?", e: "There is no month 13: in the US the first number is the month." },
          { q: "A US form asks for “Date of birth (MM/DD/YYYY)”. You were born on August 9, 1995. You write:", e: "MM = month (08), DD = day (09)." },
          { q: "Which format avoids confusion in an international email?", labels: { "9 August 2026 o August 9, 2026": "9 August 2026 or August 9, 2026" }, e: "Writing the month in letters avoids confusion between formats." }
        ] },
        { title: "in, on or at", instructions: "in (months, years, seasons, parts of the day) · on (days and dates) · at (times and exact moments).", items: [
          { e: "Months → in: in July." },
          { e: "Days of the week → on: on Monday." },
          { e: "Times → at: at 6 p.m." },
          { e: "Years → in: in 1998." },
          { e: "Exact dates → on: on March 12th." },
          { e: "Fixed expression: at night (but in the morning / in the evening)." },
          { e: "Parts of the day → in the morning / afternoon / evening." },
          { e: "Seasons → in: in winter." },
          { e: "A specific day → on: on Christmas Day." },
          { e: "Decades and centuries → in: in the 1990s." }
        ] }
      ]
    },

    "presente-simple": {
      title: "Present simple", text: "Routines, facts and the -s for he/she/it",
      sections: [
        { title: "Positive sentences", instructions: "With he, she, it the verb takes -s or -es.", items: [
          { e: "He (my brother) → verb + s: works." },
          { e: "It (my cat) → sleeps." },
          { e: "With “we” the verb doesn't change: study." },
          { e: "Do → does with he/she/it." },
          { e: "He → takes." },
          { e: "“My kids” is plural (they) → watch." },
          { e: "It → closes (it ends in -se, so just add -s)." },
          { e: "He → speaks." }
        ] },
        { title: "Negatives and questions", instructions: "Use do / does (don't / doesn't) + the base form of the verb.", items: [
          { e: "With “I” the negative is don't + verb." },
          { e: "Your sister = she → Does…?" },
          { e: "He → doesn't + verb." },
          { e: "They → Do…?" },
          { e: "After doesn't, the verb has no -s: eat." },
          { e: "You → do: Where do you live?" },
          { e: "The class = it → does." },
          { e: "After “does”, the verb is in the base form: have." }
        ] }
      ]
    },

    "articulos": {
      title: "Articles a / an", text: "a, an or no article",
      sections: [
        { title: "a, an or no article", instructions: "“a” before a consonant sound, “an” before a vowel sound. No article with plurals.", items: [
          { labels: { "— (sin artículo)": "— (no article)" }, e: "In “hour” the h is silent (/aʊər/) → an." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "“University” sounds like /ju/ (a consonant sound) → a." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "“Apple” starts with a vowel sound → an." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "“Elephant” starts with a vowel sound → an." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "In “honest” the h is silent → an." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "“A” and “an” only go with singular nouns: they have dogs." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "Jobs take an article; “engineer” starts with a vowel → an." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "“One” sounds like /wʌn/ (a consonant sound) → a." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "It's read “ay-tee-em” (a vowel sound) → an." },
          { labels: { "— (sin artículo)": "— (no article)" }, e: "“European” sounds like /jʊ/ (a consonant sound) → a." }
        ] }
      ]
    },

    "adverbios-frecuencia": {
      title: "Adverbs of frequency", text: "always, usually, often, sometimes, never",
      sections: [
        { title: "Which sentence is correct?", instructions: "The adverb goes before the main verb, but after “be”.", items: [
          { q: "Choose the correct sentence.", e: "Before the main verb: usually have." },
          { q: "Choose the correct sentence.", e: "With “be”, the adverb goes after it: is never." },
          { q: "Choose the correct sentence.", e: "In questions: Do + subject + adverb + verb." },
          { q: "Choose the correct sentence.", e: "Hardly ever goes before the main verb." },
          { q: "Choose the correct sentence.", e: "With “be”: are sometimes late." },
          { q: "Choose the correct sentence.", e: "In negatives: don't + adverb + verb." },
          { q: "Choose the correct sentence.", e: "Before the main verb: always forgets." },
          { q: "Choose the correct sentence.", e: "Rarely + verb; with “we” the verb has no -s." }
        ] },
        { title: "Choose the adverb", instructions: "Look at the percentage and choose the correct adverb.", items: [
          { e: "100% = always." },
          { e: "0% = never." },
          { e: "50% = sometimes." },
          { e: "≈90% = usually." },
          { e: "≈10% = rarely (or hardly ever)." },
          { e: "≈70% = often." }
        ] }
      ]
    },

    "pasado-simple": {
      title: "Past simple", text: "Regular and irregular verbs, and did",
      sections: [
        { title: "Regular and irregular verbs", instructions: "Choose the verb in the past.", items: [
          { e: "Regular: visit → visited." },
          { e: "Irregular: see → saw (seen is the past participle)." },
          { e: "Irregular: go → went." },
          { e: "Irregular: eat → ate." },
          { e: "Irregular: leave → left." },
          { e: "Buy → bought. Careful: brought is the past of bring." },
          { e: "Regular: start → started." },
          { e: "Irregular: break → broke." },
          { e: "Regular: laugh → laughed." },
          { e: "Irregular: write → wrote." }
        ] },
        { title: "Negatives and questions", instructions: "With did / didn't the verb goes back to the base form. With “be”, use was / were.", items: [
          { e: "Past negative: didn't + verb." },
          { e: "Past question: Did + subject + verb." },
          { e: "After didn't, use the base form: know." },
          { e: "With did, use the base form: go." },
          { e: "With the verb “be” and they → weren't." },
          { e: "“Be” in the past with it → Was…?" },
          { e: "With did, use the base form: have." },
          { e: "After didn't, use the base form: miss." }
        ] }
      ]
    },

    "presente-perfecto": {
      title: "Present perfect", text: "have / has + past participle",
      sections: [
        { title: "The form", instructions: "have / has + past participle.", items: [
          { e: "Past participle of eat: eaten." },
          { e: "She → has + past participle." },
          { e: "We → haven't. “Yet” is typical of the present perfect." },
          { e: "Experience question: Have you ever…?" },
          { e: "Past participle of lose: lost." },
          { e: "Past participle of be: been." },
          { e: "Read → read → read (same spelling, pronounced “red”)." },
          { e: "Past participle of send: sent." }
        ] },
        { title: "Present perfect or past simple?", instructions: "Finished time (yesterday, in 2018, last week) → past simple. Experience or up to now (ever, never, yet, since, for) → present perfect.", items: [
          { e: "“In 2018” is finished time → past simple." },
          { e: "Experience with no specific time → present perfect." },
          { e: "“Last month” → past simple (quit → quit)." },
          { e: "“Since” + something that continues until today → present perfect." },
          { e: "“Yesterday” → past simple: Did you…?" },
          { e: "“Yet” → present perfect: hasn't finished." },
          { e: "“For years” until today → have known." },
          { e: "“When” asks about a specific moment → past simple." }
        ] }
      ]
    },

    "segundo-condicional": {
      title: "Second conditional", text: "If + past, would + verb",
      sections: [
        { title: "Imaginary situations", instructions: "If + past simple, would + base verb. With “be”, use “were” for every person.", items: [
          { e: "Imaginary situation: If I were…" },
          { e: "The other part takes would + verb." },
          { e: "After “if” we use the past: won." },
          { e: "Would + base verb: would swim." },
          { e: "Advice with “if I were you” → would / wouldn't." },
          { e: "After “if” → were / weren't." },
          { e: "Past after “if”: knew." },
          { e: "Past after “if”: lived." },
          { e: "Would + base verb." },
          { e: "“If I were you” + would: giving advice." }
        ] }
      ]
    },

    "whose-posesivo": {
      title: "Whose and possessive 's", text: "whose / who's, 's and s'",
      sections: [
        { title: "Whose or who's", instructions: "“Whose” asks who something belongs to. “Who's” = who is / who has.", items: [
          { e: "Who does it belong to? → Whose." },
          { e: "Who is coming → Who's." },
          { e: "Who is your favorite singer → Who's." },
          { e: "Her son → whose son." },
          { e: "Who does the umbrella belong to? → Whose." },
          { e: "Who is that man → Who's." },
          { e: "Whose turn? → Whose." },
          { e: "Who has been → Who's." }
        ] },
        { title: "'s or s'", instructions: "Singular → 's. Plural ending in -s → apostrophe only (s').", items: [
          { q: "This is my ___ car. (one sister)", e: "Singular → 's: my sister's car." },
          { q: "The ___ room is very messy. (two boys)", e: "Plural ending in -s → apostrophe only: the boys' room." },
          { q: "My ___ house is big. (mom and dad)", e: "Plural ending in -s → parents'." },
          { e: "Names ending in -s: Carlos's or Carlos' (both are correct)." },
          { q: "We went to my ___ wedding. (one friend)", e: "Singular → friend's." },
          { q: "The ___ office is upstairs. (several teachers)", e: "Plural ending in -s → teachers'." },
          { q: "The ___ name is Max. (one dog)", e: "Singular → dog's." },
          { q: "My ___ names are Ana and Luis. (two grandparents)", e: "Plural ending in -s → grandparents'." }
        ] },
        { title: "Special cases", instructions: "Irregular plurals, its / it's and time expressions.", items: [
          { e: "“Its” = possessive. “It's” = it is." },
          { e: "It is raining → It's." },
          { e: "Irregular plural without -s → 's: children's." },
          { e: "Irregular plural → women's." },
          { e: "Irregular plural → men's." },
          { e: "Possessive of it → its." },
          { q: "I'm sleeping at my ___ tonight. (my aunt's house)", e: "“At my aunt's” = at my aunt's house." },
          { e: "Plural time expressions → weeks' (two weeks' rest)." }
        ] }
      ]
    },

    "dobles-negativos": {
      title: "Double negatives", text: "Only one negative per sentence",
      sections: [
        { title: "any or no", instructions: "If the verb is already negative, use any / anything / anybody / anywhere.", items: [
          { e: "Don't is already negative → any." },
          { e: "The verb is positive (there's) → no milk." },
          { e: "Didn't is already negative → anything." },
          { e: "Didn't is already negative → anybody." },
          { e: "Positive verb + negative subject: Nobody called." },
          { e: "Can't is already negative → anywhere." },
          { e: "Positive verb (has) → no idea." },
          { e: "Didn't is already negative → any of." }
        ] },
        { title: "never / ever · either / neither · none", instructions: "Never, neither and none are already negative: don't add another negative.", items: [
          { e: "Don't + ever (not “don't never”)." },
          { e: "Has is positive → never." },
          { e: "In negatives, “too” at the end becomes either." },
          { e: "None of TWO → neither." },
          { e: "Agreeing with a negative → Neither can I." },
          { e: "None of a group of more than two → none." },
          { e: "Nobody is already negative → positive verb: told." },
          { e: "Won't is already negative → ever." }
        ] },
        { title: "Choose the correct sentence", instructions: "Only one sentence uses a single negative.", items: [
          { q: "Choose the correct sentence.", e: "Didn't + anything." },
          { q: "Choose the correct sentence.", e: "Nobody + positive verb." },
          { q: "Choose the correct sentence.", e: "Never + anywhere." },
          { q: "Choose the correct sentence.", e: "Don't + any." },
          { q: "Choose the correct sentence.", e: "Can't + anything." },
          { q: "Choose the correct sentence.", e: "There's (positive) + nothing." },
          { q: "Choose the correct sentence.", e: "Doesn't + either." },
          { q: "Choose the correct sentence.", e: "None + positive verb." }
        ] }
      ]
    },

    "steve-jobs": {
      title: "Vocabulary: Steve Jobs", text: "Expressions from the Stanford speech (2005)",
      sections: [
        { title: "Part one", instructions: "Read the line from the speech and choose the meaning of the expression.", items: [
          { q: "“Truth be told” means:", labels: { "A decir verdad": "To be honest", "Me dijeron la verdad": "They told me the truth", "Es difícil de creer": "It's hard to believe", "Lo digo en broma": "I'm joking" }, e: "Used to admit something honestly." },
          { q: "“Figure it out” means:", labels: { "Descubrir o entender qué hacer": "To understand or work out what to do", "Calcular un número": "To calculate a number", "Rendirse": "To give up", "Olvidarlo": "To forget it" }, e: "Figure out = to come to understand or solve something." },
          { q: "“Turn out to be” means:", labels: { "Resultar ser (al final)": "To prove to be (in the end)", "Dejar de ser": "To stop being", "Apagar algo": "To switch something off", "Salir de un lugar": "To leave a place" }, e: "Turn out to be = to discover in the end what something was like." },
          { q: "“Priceless” means:", labels: { "De un valor enorme": "Extremely valuable", "Gratis": "Free", "Sin etiqueta de precio": "Without a price tag", "Barato": "Cheap" }, e: "Priceless = so valuable it has no price. “Free” costs nothing." },
          { q: "“Find out” means:", labels: { "Enterarse, descubrir": "To learn or discover (a fact)", "Encontrar algo afuera": "To find something outside", "Salir a buscar": "To go out looking", "Olvidar": "To forget" }, e: "Find out = to learn a piece of information." },
          { q: "“Relent” means:", labels: { "Ceder después de haberse negado": "To give in after refusing", "Arrepentirse": "To regret", "Enojarse": "To get angry", "Prestar dinero": "To lend money" }, e: "Relent = to stop refusing and agree." },
          { q: "“Naively” means:", labels: { "Ingenuamente": "Innocently, without experience", "Nativamente": "Natively", "Con mucha experiencia": "With a lot of experience", "A propósito": "On purpose" }, e: "Naive = innocent, without experience." },
          { q: "“Make all the difference” means:", labels: { "Ser lo que realmente cambia las cosas": "To be what really changes things", "Hacer muchas cuentas": "To do a lot of math", "Ser igual a lo demás": "To be the same as everything else", "Complicarlo todo": "To make everything complicated" }, e: "Make all the difference = to have a decisive effect." }
        ] },
        { title: "Part two", instructions: "Read the line from the speech and choose the meaning of the expression.", items: [
          { q: "Here, “be out” means:", labels: { "Estar fuera de la empresa (despedido)": "To be out of the company (fired)", "Estar de vacaciones": "To be on vacation", "Estar en casa": "To be at home", "Estar de moda": "To be fashionable" }, e: "In this context, “out” = out of the company." },
          { q: "“Turn of events” means:", labels: { "Giro de los acontecimientos": "An unexpected change in a situation", "Turno de trabajo": "A work shift", "Calendario de eventos": "An events calendar", "Vuelta al mundo": "A trip around the world" }, e: "An unexpected change in a situation." },
          { q: "“At the heart of” means:", labels: { "En el centro de, lo esencial de": "At the center of, the most important part of", "Cerca del corazón": "Close to your heart", "Enamorado de": "In love with", "Lejos de": "Far from" }, e: "At the heart of = the most important part of something." },
          { q: "“Roll on” (the years) means:", labels: { "Pasar, avanzar el tiempo": "To pass, as time goes by", "Rodar por el suelo": "To roll on the floor", "Retroceder": "To go backwards", "Detenerse": "To stop" }, e: "Roll on = to keep moving forward, over time." },
          { q: "“Make an impression on someone” means:", labels: { "Marcar a alguien, causarle un efecto fuerte": "To have a strong effect on someone", "Imprimir algo": "To print something", "Imitar a alguien": "To imitate someone", "Fingir": "To pretend" }, e: "To leave a mark on someone." },
          { q: "“In a row” means:", labels: { "Seguidos, consecutivos": "One after another, consecutive", "En una fila de personas": "In a line of people", "De vez en cuando": "From time to time", "En desorden": "In a mess" }, e: "Three days in a row = three consecutive days." },
          { q: "“Run its course” means:", labels: { "Llegar a su fin natural": "To come to its natural end", "Correr una carrera": "To run a race", "Cambiar de rumbo": "To change direction", "Empezar de nuevo": "To start again" }, e: "Something that ends naturally." },
          { q: "Here, “put out” means:", labels: { "Publicar": "To publish", "Apagar": "To extinguish", "Sacar la basura": "To take out the trash", "Cancelar": "To cancel" }, e: "Put out can also mean to extinguish (a fire), but here it means to publish." }
        ] }
      ]
    }
  }
};
})();
