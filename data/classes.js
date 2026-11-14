/*
  Clases de cada estudiante (pestaña «My classes» del estudiante; el profesor las edita en Students → Classes).
  Este archivo es la versión publicada. Lo que el profesor cambie en la página se guarda en su navegador
  (y en la nube si Supabase está conectado); «Exportar» descarga este archivo actualizado para publicarlo.

  Por estudiante (usuario de assets/accounts.js):
    schedule: { days: [2, 4] (0 = domingo … 2 = martes, 4 = jueves), start: "21:30", end: "22:30" }
    setSize:  clases por paquete
    sets:     paquetes, el más reciente al final. Cada uno: { title, syllabus: [temas], classes: [...] }
  Cada clase: { date: "AAAA-MM-DD" ("" = por definir), topic, status, note, kind? }
    status: done (dada) · missed (faltó sin avisar: cuenta como clase) · moved (avisó: se reprograma y no cuenta)
            · scheduled (programada) · skipped (sesión opcional no tomada)
    kind:   "review" = sesión opcional de dudas (no cuenta dentro del paquete)
  El número de clase (1 de 8…) se calcula solo: cuentan done, missed y las programadas.
*/
window.YEB_CLASSES = {
  jesus: {
    schedule: { days: [2, 4], start: "21:30", end: "22:30" },
    setSize: 8,
    sets: [
      {
        title: "Oct – Nov 2026",
        syllabus: ["Numbers"],
        classes: [
          { date: "2026-10-20", topic: "Numbers", status: "moved", note: "Student gave advance notice of absence" },
          { date: "2026-10-22", topic: "Numbers", status: "moved", note: "Student gave advance notice of absence" },
          { date: "2026-10-27", topic: "Numbers", status: "done", note: "" },
          { date: "2026-10-29", topic: "Numbers", status: "done", note: "" },
          { date: "2026-11-03", topic: "", status: "missed", note: "Student didn't give advance notice of absence" },
          { date: "2026-11-05", topic: "", status: "done", note: "" },
          { date: "2026-11-10", topic: "", status: "done", note: "" },
          { date: "2026-11-12", topic: "", status: "moved", note: "" },
          { date: "2026-11-17", topic: "", status: "scheduled", note: "" },
          { date: "2026-11-19", topic: "", status: "scheduled", note: "" },
          { date: "2026-11-19", topic: "", status: "scheduled", note: "" },
          { date: "", topic: "Doubt-clearing session (optional)", status: "scheduled", note: "", kind: "review" }
        ]
      }
    ]
  },
  mary: {
    schedule: { days: [2, 4], start: "21:20", end: "22:30" },
    setSize: 8,
    sets: [
      {
        title: "Nov – Dec 2026",
        syllabus: [],
        classes: [
          { date: "2026-11-05", topic: "", status: "scheduled", note: "" },
          { date: "2026-11-10", topic: "", status: "scheduled", note: "" },
          { date: "2026-11-12", topic: "", status: "scheduled", note: "" },
          { date: "2026-11-17", topic: "", status: "scheduled", note: "" },
          { date: "2026-11-19", topic: "", status: "scheduled", note: "" },
          { date: "2026-11-24", topic: "", status: "scheduled", note: "" },
          { date: "2026-11-26", topic: "", status: "scheduled", note: "" },
          { date: "2026-12-01", topic: "", status: "scheduled", note: "" },
          { date: "", topic: "Doubt-clearing session (optional)", status: "scheduled", note: "", kind: "review" }
        ]
      }
    ]
  }
};
