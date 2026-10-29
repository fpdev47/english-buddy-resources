/*
  Grupos de temas de «Practicar» (siguen el orden del libro Travelers 1) y ayudantes para escribir
  ejercicios con su español y su inglés juntos (no hace falta tocar data/en.js).

  En «Practicar» se ven los temas del grupo actual y un botón «Todos los temas» con todos los grupos.
  Un tema que no está en ningún grupo aparece al final, en «Otros temas».

  Ayudantes (en data/exercises-*.js):
    YEB_X.M(q, a, o, e, w)   opción múltiple. e = ["explicación ES", "explanation EN"]
                             q puede ser ["pregunta con pista ES", "question with hint EN"]
                             w (opcional) = por qué una opción incorrecta está mal, si el estudiante la elige:
                             { "opción": ["ES", "EN"] }. No es teoría: responde a su error concreto.
    YEB_X.W(q, respuestas, e) escribir. respuestas = ["válida", "otra válida"]
    YEB_X.S(titulo, instrucciones, items, extra)   sección; titulo e instrucciones = ["ES", "EN"]
    YEB_X.T(id, titulo, nivel, texto, secciones)   tema; titulo y texto = ["ES", "EN"]
*/
window.YEB_EX_GROUPS = [
  { id: "inicio", title: { es: "Primeros pasos", en: "First steps" }, sub: { es: "A1 · Libro 1, unidad 1", en: "A1 · Book 1, unit 1" },
    topics: ["to-be", "posesivos", "this-that", "articulos", "paises", "trabajos-datos", "numeros", "pronombres-objeto"] },
  { id: "rutinas", title: { es: "Rutinas y gustos", en: "Routines and likes" }, sub: { es: "A1–A2 · Unidad 1", en: "A1–A2 · Unit 1" },
    topics: ["presente-simple", "preguntas-do-be", "adverbios-frecuencia", "gustos", "presente-continuo"] },
  { id: "mundo", title: { es: "Mi mundo", en: "My world" }, sub: { es: "A2 · Unidad 2", en: "A2 · Unit 2" },
    topics: ["there-is-are", "ropa-apariencia", "familia", "transporte", "aeropuerto", "cantidades", "preposiciones", "fechas"] },
  { id: "planes", title: { es: "Planes, consejos y habilidades", en: "Plans, advice and abilities" }, sub: { es: "A2 · Unidad 2", en: "A2 · Unit 2" },
    topics: ["going-to", "can", "should-have-to", "imperativo", "adverbios-modo"] },
  { id: "mas", title: { es: "Más allá del libro", en: "Beyond the book" }, sub: { es: "A2–B2", en: "A2–B2" },
    topics: ["pasado-simple", "presente-perfecto", "comparativos", "segundo-condicional", "whose-posesivo", "dobles-negativos", "falsos-amigos", "make-do"] },
  { id: "lecturas", title: { es: "Vocabulario de lecturas", en: "Vocabulary from readings" }, sub: { es: "B2", en: "B2" },
    topics: ["steve-jobs"] }
];

window.YEB_X = {
  // q can also be ["pregunta ES", "question EN"] when it has a hint in Spanish
  M: (q, a, o, e, w) => ({ q: [].concat(q)[0], a, o, e: e[0], en: { e: e[1], ...(Array.isArray(q) ? { q: q[1] } : {}) }, ...(w ? { w } : {}) }),
  W: (q, a, e) => ({ type: "write", q: [].concat(q)[0], a, e: e[0], en: { e: e[1], ...(Array.isArray(q) ? { q: q[1] } : {}) } }),
  S: (title, instructions, items, extra) => ({ title: { es: title[0], en: title[1] }, instructions: { es: instructions[0], en: instructions[1] }, items, ...(extra || {}) }),
  T: (id, title, level, text, sections) => ({ id, title: { es: title[0], en: title[1] }, level, text: { es: text[0], en: text[1] }, sections })
};
