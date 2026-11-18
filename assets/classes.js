/*
  Clases: calendario, paquete de clases, temario y enlace de Zoom de cada estudiante.
  · Estudiante: pestaña «My classes» (#clases), solo lectura.
  · Profesor: Students → Classes, con editor. Los cambios se guardan en su navegador y, con Supabase,
    en la nube (los estudiantes los ven al instante). Sin Supabase, «Export» descarga data/classes.js
    para publicarlo.
  Datos y formato: data/classes.js.
*/
(function () {
  "use strict";
  const BASE = window.YEB_CLASSES || {};
  const CLOUD = window.YEB_CLOUD;
  const LOCAL_KEY = "yeb-classes";
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const svg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const isEN = () => !(window.YEB_I18N && window.YEB_I18N.lang === "es");
  const locale = () => (isEN() ? "en-US" : "es-ES");

  const TXT = {
    en: {
      tab: "My classes", title: "My classes", intro: "Your schedule, your class package and what we'll study.",
      next: "Next class", noNext: "No class scheduled right now", zoom: "Join on Zoom", today: "today", tomorrow: "tomorrow", inDays: (n) => `in ${n} days`,
      every: (d) => d, package: "Class package", used: (a, b) => `${a} of ${b} classes used`, left: (n) => `${n} left`,
      classes: "Classes", syllabus: "Syllabus", syllabusEmpty: "Your teacher will add the topics soon.", history: "Previous packages",
      howTitle: "How classes count", tbd: "Date to be defined", topicTbd: "Topic to be defined", extra: "Extra", classN: (n) => `Class ${n}`,
      st: { done: "Completed", missed: "Missed", moved: "Rescheduled", scheduled: "Scheduled", confirm: "To confirm", skipped: "Not taken" },
      how: {
        done: "The class took place.", missed: "Absence without notice: the class counts as used.",
        moved: "Absence with notice: the class is moved and doesn't count.", scheduled: "Coming up.", review: "Optional doubt-clearing session: it doesn't count in the package."
      },
      // Editor
      edTitle: "Classes", edIntro: "Change dates, statuses, topics and notes. Students see them in their «My classes» tab.",
      student: "Student", zoomLink: "Zoom link", zoomPh: "https://zoom.us/j/…", days: "Days", from: "From", to: "To", size: "Classes per package",
      pkg: "Package", pkgTitle: "Package name", newPkg: "New package", newPkgQ: (n) => `Create a new package of ${n} classes after the last one?`,
      syllabusEd: "Syllabus (one topic per line)", date: "Date", topic: "Topic", status: "Status", note: "Note", del: "Delete",
      addClass: "Add class", addReview: "Add doubt-clearing session", delQ: "Delete this class?", reviewTag: "Optional",
      savedLocal: "Saved on this browser. The cloud isn't connected: students see the published version until you export and publish data/classes.js.",
      savedCloud: "Saved. Students see the changes right away.", saveError: "Couldn't save in the cloud. Saved on this browser.",
      calendar: "Calendar", allClasses: "All classes in this package", prevM: "Previous month", nextM: "Next month", todayBtn: "Today",
      noClassDay: "No classes this day.", pick: "Tap a day with a class to see the details.", all: "All students", chooseToEdit: "Choose a student to edit their classes.",
      ofSize: (n, s) => `Class ${n} of ${s}`, editBelow: "Edit classes", folder: "My class folder", folderOf: (n) => `${n}'s Drive folder`,
      topicPh: "Topic of this class", stLabel: "Status", savedShort: "Saved",
      export: "Export data/classes.js", preview: "What the student sees", sortNote: "Classes are sorted by date.", over: "More classes than the package size"
    },
    es: {
      tab: "Mis clases", title: "Mis clases", intro: "Tu horario, tu paquete de clases y lo que vamos a estudiar.",
      next: "Próxima clase", noNext: "No hay clases programadas por ahora", zoom: "Entrar a Zoom", today: "hoy", tomorrow: "mañana", inDays: (n) => `en ${n} días`,
      every: (d) => d, package: "Paquete de clases", used: (a, b) => `${a} de ${b} clases usadas`, left: (n) => `quedan ${n}`,
      classes: "Clases", syllabus: "Temario", syllabusEmpty: "Tu profesor agregará los temas pronto.", history: "Paquetes anteriores",
      howTitle: "Cómo se cuentan las clases", tbd: "Fecha por definir", topicTbd: "Tema por definir", extra: "Extra", classN: (n) => `Clase ${n}`,
      st: { done: "Dada", missed: "Perdida", moved: "Reprogramada", scheduled: "Programada", confirm: "Por confirmar", skipped: "No tomada" },
      how: {
        done: "La clase se dio.", missed: "Faltó sin avisar: la clase cuenta como usada.",
        moved: "Faltó avisando: la clase se mueve y no cuenta.", scheduled: "Próximamente.", review: "Sesión opcional de dudas: no cuenta dentro del paquete."
      },
      edTitle: "Clases", edIntro: "Cambia fechas, estados, temas y notas. Los estudiantes los ven en su pestaña «Mis clases».",
      student: "Estudiante", zoomLink: "Enlace de Zoom", zoomPh: "https://zoom.us/j/…", days: "Días", from: "Desde", to: "Hasta", size: "Clases por paquete",
      pkg: "Paquete", pkgTitle: "Nombre del paquete", newPkg: "Paquete nuevo", newPkgQ: (n) => `¿Crear un paquete nuevo de ${n} clases después del último?`,
      syllabusEd: "Temario (un tema por línea)", date: "Fecha", topic: "Tema", status: "Estado", note: "Nota", del: "Borrar",
      addClass: "Agregar clase", addReview: "Agregar sesión de dudas", delQ: "¿Borrar esta clase?", reviewTag: "Opcional",
      savedLocal: "Guardado en este navegador. La nube no está conectada: los estudiantes ven la versión publicada hasta que exportes y publiques data/classes.js.",
      savedCloud: "Guardado. Los estudiantes ven los cambios al instante.", saveError: "No se pudo guardar en la nube. Quedó guardado en este navegador.",
      calendar: "Calendario", allClasses: "Todas las clases de este paquete", prevM: "Mes anterior", nextM: "Mes siguiente", todayBtn: "Hoy",
      noClassDay: "No hay clases este día.", pick: "Toca un día con clase para ver el detalle.", all: "Todos los estudiantes", chooseToEdit: "Elige un estudiante para editar sus clases.",
      ofSize: (n, s) => `Clase ${n} de ${s}`, editBelow: "Editar clases", folder: "Mi carpeta de clases", folderOf: (n) => `Carpeta de Drive de ${n}`,
      topicPh: "Tema de esta clase", stLabel: "Estado", savedShort: "Guardado",
      export: "Exportar data/classes.js", preview: "Lo que ve el estudiante", sortNote: "Las clases se ordenan por fecha.", over: "Más clases que el tamaño del paquete"
    }
  };
  const tx = (k) => TXT[isEN() ? "en" : "es"][k];
  const driveOf = (u) => { const a = (window.YEB_ACCOUNTS || []).find((x) => x.user === u); return a && a.drive && /^https?:\/\//i.test(a.drive) ? a.drive : ""; };
  const DRIVE_ICO = "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z";

  // ——— Data: published file < cloud < this browser (teacher's unpublished edits) ———
  let local = null, cloud = null;
  try { local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "null"); } catch (e) {}
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const get = (user) => (local && local[user]) || (cloud && cloud[user]) || BASE[user] || null;
  async function loadCloud() {
    if (!(CLOUD && CLOUD.enabled && CLOUD.student && CLOUD.getClasses)) return false;
    try { cloud = (await CLOUD.getClasses()) || null; return true; } catch (e) { return false; }
  }

  // ——— Dates ———
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const parse = (k) => new Date(`${k}T12:00`);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const fmtTime = (hm) => {
    if (!hm) return "";
    const [h, m] = hm.split(":").map(Number);
    return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h < 12 ? "am" : "pm"}`.replace(/ (am|pm)$/, (x) => (isEN() ? x : x === " am" ? " a. m." : " p. m."));
  };
  const dayNames = (days) => {
    const names = days.slice().sort((a, b) => ((a + 6) % 7) - ((b + 6) % 7)).map((d) => new Date(2026, 1, 1 + d).toLocaleDateString(locale(), { weekday: "long" }) + (isEN() ? "s" : ""));
    if (!isEN()) names.forEach((n, i) => { names[i] = n.endsWith("s") ? n : n + "s"; });
    return names.length > 1 ? `${names.slice(0, -1).join(", ")} ${isEN() ? "and" : "y"} ${names[names.length - 1]}` : names[0] || "";
  };
  const longDate = (k) => cap(parse(k).toLocaleDateString(locale(), { weekday: "long", day: "numeric", month: "long" }));
  // Has the class already ended?
  const isPast = (c, sch) => {
    if (!c.date) return false;
    const t = dayKey();
    if (c.date !== t) return c.date < t;
    const [h, m] = (sch.end || "23:59").split(":").map(Number), now = new Date();
    return now.getHours() * 60 + now.getMinutes() > h * 60 + m;
  };
  function nextDates(afterKey, days, count) {
    const out = [], d = afterKey ? parse(afterKey) : new Date();
    if (!afterKey) d.setDate(d.getDate() - 1);
    while (out.length < count && days.length) { d.setDate(d.getDate() + 1); if (days.includes(d.getDay())) out.push(dayKey(d)); }
    return out;
  }
  const byDate = (a, b) => (!a.date ? 1 : !b.date ? -1 : a.date < b.date ? -1 : a.date > b.date ? 1 : 0);

  // Class numbers: done, missed and scheduled classes count; rescheduled and optional sessions don't
  function analyze(set, size, sch) {
    let n = 0, used = 0;
    const rows = set.classes.map((c, i) => ({ c, i })).sort((a, b) => byDate(a.c, b.c)).map((r) => {
      const st = r.c.kind !== "review" && r.c.status === "scheduled" && isPast(r.c, sch) ? "confirm" : r.c.status;
      if (r.c.kind === "review") return { ...r, st, label: "extra" };
      if (r.c.status === "moved" || r.c.status === "skipped") return { ...r, st, label: null };
      n++;
      if (r.c.status === "done" || r.c.status === "missed") used++;
      return { ...r, st, n, over: n > size };
    });
    return { rows, used, left: Math.max(0, size - used) };
  }


  // ——— Calendar (month view): every class of every package, colored by status ———
  const calState = {};   // per calendar id: { month: "YYYY-MM", day: "YYYY-MM-DD" }
  function events(users) {
    const out = [];
    users.forEach((u) => {
      const D = get(u);
      if (!D || !D.sets) return;
      const sch = D.schedule || { days: [] }, size = D.setSize || 8;
      const acc = (window.YEB_ACCOUNTS || []).find((a) => a.user === u);
      D.sets.forEach((set, si) => analyze(set, size, sch).rows.forEach((r) => {
        if (r.c.date) out.push({ user: u, name: acc ? acc.name : u, date: r.c.date, st: r.c.kind === "review" ? (r.st === "confirm" ? "confirm" : r.st) : r.st, review: r.c.kind === "review", n: r.n, size, over: r.over, topic: r.c.topic, note: r.c.note, start: sch.start, end: sch.end, zoom: D.zoom, set: set.title, si, ci: r.i });
      }));
    });
    return out.sort((a, b) => (a.date + (a.start || "")).localeCompare(b.date + (b.start || "")));
  }
  const monthOf = (k) => k.slice(0, 7);
  function calendarHTML(id, users, opts = {}) {
    const evs = events(users), byDay = {};
    evs.forEach((e) => (byDay[e.date] = byDay[e.date] || []).push(e));
    const today = dayKey();
    const st = calState[id] || (calState[id] = {});
    if (!st.day) {
      const next = evs.find((e) => e.date >= today && (e.st === "scheduled" || e.st === "confirm")) || evs.filter((e) => e.date <= today).pop() || evs[0];
      st.day = next ? next.date : today;
    }
    if (!st.month) st.month = monthOf(st.day);
    const [y, m] = st.month.split("-").map(Number);
    const first = new Date(y, m - 1, 1, 12), lead = (first.getDay() + 6) % 7, daysIn = new Date(y, m, 0).getDate();
    const weekdays = [1, 2, 3, 4, 5, 6, 0].map((d) => cap(new Date(2026, 1, 1 + d).toLocaleDateString(locale(), { weekday: "short" }).replace(".", "")));
    const title = cap(first.toLocaleDateString(locale(), { month: "long", year: "numeric" }));
    const multi = users.length > 1;
    let cells = "";
    for (let i = 0; i < lead; i++) cells += `<div class="cal-cell out" aria-hidden="true"></div>`;
    for (let d = 1; d <= daysIn; d++) {
      const k = `${st.month}-${String(d).padStart(2, "0")}`, list = byDay[k] || [];
      const cls = `cal-cell${k === today ? " today" : ""}${k === st.day ? " sel" : ""}${list.length ? " has" : ""}`;
      const chips = list.map((e) => `<span class="cal-ev s-${e.st}${e.review ? " s-review" : ""}"><b>${e.review ? "+" : e.n ? e.n : "–"}</b><span class="cal-ev-t">${esc(multi ? e.name : e.topic && !e.review ? e.topic : e.start ? fmtTime(e.start) : tx("st")[e.st])}</span></span>`).join("");
      cells += list.length
        ? `<button type="button" class="${cls}" data-cal="day" data-d="${k}" aria-label="${esc(longDate(k))}: ${list.map((e) => `${multi ? e.name + " · " : ""}${tx("st")[e.st]}`).join(", ")}"><span class="cal-d">${d}</span><span class="cal-evs">${chips}</span></button>`
        : `<div class="${cls}"><span class="cal-d">${d}</span></div>`;
    }
    const sel = byDay[st.day] || [];
    const detail = `
      <div class="cal-detail">
        <h4>${esc(longDate(st.day))}</h4>
        ${sel.length ? `<ul>${sel.map((e) => {
          const upcoming = (e.st === "scheduled") && e.date >= today;
          const zoom = !multi && upcoming && e.zoom && /^https?:\/\//i.test(e.zoom) && !opts.teacher ? `<a class="cl-zoom sm" href="${esc(e.zoom)}" target="_blank" rel="noopener">${svg("M15 10l5-3v10l-5-3M3 7h12v10H3z")}<span>${esc(tx("zoom"))}</span></a>` : "";
          return `<li class="s-${e.st}${e.review ? " s-review" : ""}">
            <div class="cal-dl-top"><span class="cl-st">${esc(e.review && e.st === "scheduled" ? tx("reviewTag") : tx("st")[e.st])}</span>${multi ? `<strong>${esc(e.name)}</strong>` : ""}<span class="cal-dl-when">${esc(e.start ? `${fmtTime(e.start)} – ${fmtTime(e.end)}` : "")}</span></div>
            ${opts.teacher ? `
            <p class="cal-dl-what"><b>${esc(e.review ? tx("extra") : e.n ? tx("ofSize")(e.n, e.size) : tx("st")[e.st])}</b></p>
            <div class="cal-edit" data-u="${esc(e.user)}" data-s="${e.si}" data-i="${e.ci}">
              <input type="text" data-calset="topic" list="cal-topics-${esc(e.user)}" value="${esc(e.topic || "")}" placeholder="${esc(tx("topicPh"))}" aria-label="${esc(tx("topic"))}">
              <select data-calset="status" aria-label="${esc(tx("stLabel"))}">${["scheduled", "done", "missed", "moved", "skipped"].map((k) => `<option value="${k}"${k === (get(e.user).sets[e.si].classes[e.ci] || {}).status ? " selected" : ""}>${esc(tx("st")[k])}</option>`).join("")}</select>
              <datalist id="cal-topics-${esc(e.user)}">${topicList(e.user, e.si).map((t) => `<option value="${esc(t)}">`).join("")}</datalist>
            </div>` : `
            <p class="cal-dl-what"><b>${esc(e.review ? tx("extra") : e.n ? tx("ofSize")(e.n, e.size) : tx("st")[e.st])}</b>${e.topic ? ` · ${esc(e.topic)}` : ""}</p>`}
            ${e.note ? `<p class="cal-dl-note">${esc(e.note)}</p>` : ""}${zoom}
          </li>`; }).join("")}</ul>` : `<p class="pg-help">${esc(evs.length ? tx("noClassDay") : tx("noNext"))}</p>`}
      </div>`;
    return `
      <section class="pg-card cl-calwrap" data-cal-id="${esc(id)}" data-cal-users="${esc(users.join(","))}"${opts.teacher ? ' data-cal-teacher="1"' : ""}>
        <div class="cal-head">
          <h3>${esc(tx("calendar"))}</h3>
          <div class="cal-nav">
            <button type="button" class="cal-btn" data-cal="prev" aria-label="${esc(tx("prevM"))}">${svg("M15 6l-6 6 6 6")}</button>
            <strong class="cal-title">${esc(title)}</strong>
            <button type="button" class="cal-btn" data-cal="next" aria-label="${esc(tx("nextM"))}">${svg("M9 6l6 6-6 6")}</button>
            <button type="button" class="cal-today" data-cal="today">${esc(tx("todayBtn"))}</button>
          </div>
        </div>
        <div class="cal-body">
          <div class="cal-grid" role="grid">
            ${weekdays.map((w) => `<div class="cal-wd">${esc(w)}</div>`).join("")}
            ${cells}
          </div>
          ${detail}
        </div>
        <ul class="cal-legend">${["done", "missed", "moved", "scheduled", "confirm"].map((k) => `<li class="s-${k}"><i></i>${esc(tx("st")[k])}</li>`).join("")}<li class="s-review"><i></i>${esc(tx("reviewTag"))}</li></ul>
      </section>`;
  }
  // Topic suggestions: the package syllabus first, then every exercise topic
  function topicList(user, si) {
    const D = get(user), set = D && D.sets[si];
    const ex = (window.YEB_EXERCISES || []).map((x) => (window.YEB_EN && window.YEB_EN.exercises && window.YEB_EN.exercises[x.id] && window.YEB_EN.exercises[x.id].title) || (x.title && x.title.en) || x.title).filter((t) => typeof t === "string");
    return [...new Set([...((set && set.syllabus) || []), ...ex])];
  }
  // Teacher: topic and status edited right in the calendar (saved like the editor below)
  function calEdit(e, redraw) {
    const el = e.target.closest("[data-calset]"), box = el && el.closest(".cal-edit");
    if (!box || !window.YEB_CLASSES_UI.canEdit) return;
    const u = box.dataset.u, D = ensure(u), c = D.sets[+box.dataset.s] && D.sets[+box.dataset.s].classes[+box.dataset.i];
    if (!c) return;
    c[el.dataset.calset] = el.dataset.calset === "topic" ? el.value : el.value;
    persist(u);
    if (redraw) {
      const host = document.getElementById("cl-host");
      if (host) host.innerHTML = editorHTML();
    }
  }
  document.addEventListener("input", (e) => { if (e.target.dataset && e.target.dataset.calset === "topic") calEdit(e, false); });
  document.addEventListener("change", (e) => { if (e.target.dataset && e.target.dataset.calset) calEdit(e, true); });

  // Month and day changes redraw only that calendar
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cal]");
    const wrap = b && b.closest(".cl-calwrap");
    if (!wrap) return;
    const id = wrap.dataset.calId, st = calState[id] || (calState[id] = {}), a = b.dataset.cal;
    if (a === "day") st.day = b.dataset.d;
    else if (a === "today") { st.day = dayKey(); st.month = monthOf(st.day); }
    else {
      const [y, m] = st.month.split("-").map(Number), d = new Date(y, m - 1 + (a === "next" ? 1 : -1), 1);
      st.month = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    }
    wrap.outerHTML = calendarHTML(id, wrap.dataset.calUsers.split(","), { teacher: !!wrap.dataset.calTeacher });
  });

  // ——— Student view ———
  function studentHTML(user, opts = {}) {
    const D = get(user);
    if (!D || !D.sets || !D.sets.length) return "";
    const sch = D.schedule || { days: [], start: "", end: "" }, size = D.setSize || 8;
    const set = D.sets[D.sets.length - 1], A = analyze(set, size, sch);
    const upcoming = A.rows.find((r) => r.c.date && r.c.status === "scheduled" && !isPast(r.c, sch));
    const rel = (k) => { const n = Math.round((parse(k) - parse(dayKey())) / 864e5); return n <= 0 ? tx("today") : n === 1 ? tx("tomorrow") : tx("inDays")(n); };
    const hours = sch.start ? `${fmtTime(sch.start)} – ${fmtTime(sch.end)}` : "";
    const zoom = D.zoom && /^https?:\/\//i.test(D.zoom) ? D.zoom : "";
    const row = (r) => {
      const c = r.c, badge = r.label === "extra" ? "+" : r.n ? String(r.n) : "–";
      return `<li class="cl-row s-${r.st}${r.over ? " over" : ""}">
        <span class="cl-num" title="${esc(r.n ? tx("classN")(r.n) : r.label === "extra" ? tx("extra") : tx("st")[r.st])}">${badge}</span>
        <span class="cl-date">${c.date ? `<b>${esc(cap(parse(c.date).toLocaleDateString(locale(), { weekday: "short" }).replace(".", "")))}</b><span>${esc(parse(c.date).toLocaleDateString(locale(), { day: "numeric", month: "short" }).replace(".", ""))}</span>` : `<span>${esc(tx("tbd"))}</span>`}</span>
        <span class="cl-what"><strong>${esc(c.topic || (c.status === "scheduled" && !isPast(c, sch) ? tx("topicTbd") : "—"))}</strong>${c.note ? `<small>${esc(c.note)}</small>` : ""}</span>
        <span class="cl-st">${esc(c.kind === "review" && c.status === "scheduled" ? TXT[isEN() ? "en" : "es"].reviewTag : tx("st")[r.st])}</span>
      </li>`;
    };
    const doneTopics = new Set(set.classes.filter((c) => c.status === "done").map((c) => (c.topic || "").trim().toLowerCase()));
    const older = D.sets.slice(0, -1).reverse();
    return `
      ${opts.noHead ? "" : `<div class="panel-head"><h2>${esc(tx("title"))}</h2><p>${esc(tx("intro"))}</p></div>`}
      <section class="cl-hero">
        <div class="cl-next">
          <small>${esc(tx("next"))}</small>
          ${upcoming ? `<strong>${esc(longDate(upcoming.c.date))}</strong><span>${esc(hours)}${hours ? " · " : ""}${esc(rel(upcoming.c.date))}</span>` : `<strong>${esc(tx("noNext"))}</strong>`}
        </div>
        <div class="cl-ctas">
          ${zoom ? `<a class="cl-zoom" href="${esc(zoom)}" target="_blank" rel="noopener">${svg("M15 10l5-3v10l-5-3M3 7h12v10H3z")}<span>${esc(tx("zoom"))}</span></a>` : ""}
          ${driveOf(user) ? `<a class="cl-drive" href="${esc(driveOf(user))}" target="_blank" rel="noopener">${svg(DRIVE_ICO)}<span>${esc(tx("folder"))}</span></a>` : ""}
        </div>
        <div class="cl-facts">
          <div><small>${esc(tx("days"))}</small><strong>${esc(cap(tx("every")(dayNames(sch.days || []))))}</strong><span>${esc(hours)}</span></div>
          <div><small>${esc(tx("package"))} · ${esc(set.title || "")}</small><strong>${esc(tx("used")(A.used, size))}</strong><span>${esc(tx("left")(A.left))}</span>
            <span class="meter" aria-hidden="true"><i style="width:${Math.min(100, Math.round((A.used / size) * 100))}%"></i></span></div>
        </div>
      </section>
      ${calendarHTML(`s-${user}`, [user], { teacher: !!opts.teacher })}
      <details class="pg-card cl-all">
        <summary>${esc(tx("allClasses"))} · ${esc(set.title || "")}</summary>
        <ol class="cl-list">${A.rows.map(row).join("")}</ol>
      </details>
      <section class="pg-card">
        <h3>${esc(tx("syllabus"))}</h3>
        ${set.syllabus && set.syllabus.length ? `<ol class="cl-syl">${set.syllabus.map((s) => `<li class="${doneTopics.has(s.trim().toLowerCase()) ? "done" : ""}">${esc(s)}</li>`).join("")}</ol>` : `<p class="pg-help">${esc(tx("syllabusEmpty"))}</p>`}
      </section>
      <section class="pg-card">
        <h3>${esc(tx("howTitle"))}</h3>
        <ul class="cl-how">${["done", "missed", "moved", "scheduled"].map((k) => `<li class="s-${k}"><span class="cl-st">${esc(tx("st")[k])}</span>${esc(tx("how")[k])}</li>`).join("")}
          <li class="s-review"><span class="cl-st">${esc(TXT[isEN() ? "en" : "es"].reviewTag)}</span>${esc(tx("how").review)}</li></ul>
      </section>
      ${older.length ? `<details class="pg-card cl-old"><summary>${esc(tx("history"))}</summary>${older.map((s) => { const B = analyze(s, size, sch); return `<h4>${esc(s.title || "")} · ${esc(tx("used")(B.used, size))}</h4><ol class="cl-list">${B.rows.map(row).join("")}</ol>`; }).join("")}</details>` : ""}`;
  }

  // ——— Teacher editor ———
  let edUser = null, edSet = null, saveMsg = "", saveTimer = null, calAll = false;
  const students = () => (window.YEB_ACCOUNTS || []).filter((a) => !a.teacher);
  function ensure(user) {
    if (!local) local = {};
    if (!local[user]) local[user] = clone(get(user) || { schedule: { days: [2, 4], start: "21:00", end: "22:00" }, setSize: 8, sets: [{ title: "", syllabus: [], classes: [] }] });
    return local[user];
  }
  function persist(user) {
    try { localStorage.setItem(LOCAL_KEY, JSON.stringify(local)); } catch (e) {}
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      if (CLOUD && CLOUD.enabled && CLOUD.saveClasses && CLOUD.student) {
        try { await CLOUD.saveClasses(user, local[user]); saveMsg = tx("savedCloud"); }
        catch (e) { saveMsg = tx("saveError"); }
      } else saveMsg = tx("savedLocal");
      const el = document.querySelector(".cl-saved");
      if (el) { el.textContent = saveMsg; el.hidden = false; }
    }, 600);
  }
  function editorHTML() {
    const list = students();
    if (!edUser || !list.some((s) => s.user === edUser)) edUser = list[0] && list[0].user;
    if (!edUser) return "";
    const D = get(edUser) || ensure(edUser);
    const sch = D.schedule || { days: [] }, size = D.setSize || 8;
    if (edSet == null || edSet >= D.sets.length) edSet = D.sets.length - 1;
    const set = D.sets[edSet], A = analyze(set, size, sch);
    const sts = ["scheduled", "done", "missed", "moved", "skipped"];
    const dayBox = [1, 2, 3, 4, 5, 6, 0].map((d) => `<label class="cl-day"><input type="checkbox" data-ed="day" value="${d}"${(sch.days || []).includes(d) ? " checked" : ""}><span>${esc(cap(new Date(2026, 1, 1 + d).toLocaleDateString(locale(), { weekday: "short" }).replace(".", "")))}</span></label>`).join("");
    const topics = [...new Set([...(set.syllabus || []), ...(window.YEB_EXERCISES || []).map((x) => (window.YEB_EN && window.YEB_EN.exercises && window.YEB_EN.exercises[x.id] && window.YEB_EN.exercises[x.id].title) || x.title).filter(Boolean)])];
    return `
      <div class="cl-ed">
        <p class="pg-help">${esc(tx("edIntro"))}</p>
        <div class="cl-who"><button type="button" class="lib-chip" aria-pressed="${calAll}" data-cl="all">${esc(tx("all"))}</button>${list.map((s) => `<button type="button" class="lib-chip" aria-pressed="${!calAll && s.user === edUser}" data-cl="user" data-v="${esc(s.user)}">${esc(s.name)}</button>`).join("")}</div>
        ${!calAll && driveOf(edUser) ? `<a class="cl-drive-t" href="${esc(driveOf(edUser))}" target="_blank" rel="noopener">${svg(DRIVE_ICO)}<span>${esc(tx("folderOf")((list.find((x) => x.user === edUser) || {}).name || ""))}</span></a>` : ""}
        <div class="cl">${calAll ? calendarHTML("t-all", list.map((s) => s.user).filter((u) => get(u)), { teacher: true }) : calendarHTML(`t-${edUser}`, [edUser], { teacher: true })}</div>
        ${calAll ? `<p class="pg-help">${esc(tx("chooseToEdit"))}</p></div>` : `<h3 class="cl-edh">${esc(tx("editBelow"))} · ${esc((list.find((s) => s.user === edUser) || {}).name || "")}</h3>`}
        ${calAll ? "" : `
        <div class="cl-grid">
          <label class="cl-f wide"><span>${esc(tx("zoomLink"))}</span><input type="url" data-ed="zoom" value="${esc(D.zoom || "")}" placeholder="${esc(tx("zoomPh"))}"></label>
          <div class="cl-f wide"><span>${esc(tx("days"))}</span><div class="cl-days">${dayBox}</div></div>
          <label class="cl-f"><span>${esc(tx("from"))}</span><input type="time" data-ed="start" value="${esc(sch.start || "")}"></label>
          <label class="cl-f"><span>${esc(tx("to"))}</span><input type="time" data-ed="end" value="${esc(sch.end || "")}"></label>
          <label class="cl-f"><span>${esc(tx("size"))}</span><input type="number" min="1" max="40" data-ed="size" value="${size}"></label>
        </div>
        <div class="cl-pkgbar">
          ${D.sets.length > 1 ? `<label class="cl-f"><span>${esc(tx("pkg"))}</span><select data-ed="set">${D.sets.map((s, i) => `<option value="${i}"${i === edSet ? " selected" : ""}>${esc(s.title || `#${i + 1}`)}</option>`).join("")}</select></label>` : ""}
          <label class="cl-f grow"><span>${esc(tx("pkgTitle"))}</span><input type="text" data-ed="title" value="${esc(set.title || "")}"></label>
          <button type="button" class="tb-refresh" data-cl="newpkg">${svg("M12 5v14M5 12h14")}<span>${esc(tx("newPkg"))}</span></button>
        </div>
        <label class="cl-f wide"><span>${esc(tx("syllabusEd"))}</span><textarea rows="4" data-ed="syllabus">${esc((set.syllabus || []).join("\n"))}</textarea></label>
        <datalist id="cl-topics">${topics.map((t) => `<option value="${esc(t)}">`).join("")}</datalist>
        <div class="cl-table" role="table">
          <div class="cl-tr cl-th" role="row"><span>#</span><span>${esc(tx("date"))}</span><span>${esc(tx("topic"))}</span><span>${esc(tx("status"))}</span><span>${esc(tx("note"))}</span><span></span></div>
          ${A.rows.map((r) => `
          <div class="cl-tr s-${r.st}${r.over ? " over" : ""}" role="row" data-i="${r.i}">
            <span class="cl-num" title="${esc(r.over ? tx("over") : "")}">${r.label === "extra" ? "+" : r.n || "–"}</span>
            <input type="date" data-ed="date" value="${esc(r.c.date)}" aria-label="${esc(tx("date"))}">
            <input type="text" data-ed="topic" list="cl-topics" value="${esc(r.c.topic)}" placeholder="${esc(tx("topicTbd"))}" aria-label="${esc(tx("topic"))}">
            <select data-ed="status" aria-label="${esc(tx("status"))}">${sts.map((s) => `<option value="${s}"${s === r.c.status ? " selected" : ""}>${esc(tx("st")[s])}</option>`).join("")}</select>
            <input type="text" data-ed="note" value="${esc(r.c.note)}" aria-label="${esc(tx("note"))}">
            <button type="button" class="cl-del" data-cl="del" title="${esc(tx("del"))}" aria-label="${esc(tx("del"))}">${svg("M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3")}</button>
          </div>`).join("")}
        </div>
        <p class="pg-help cl-sort">${esc(tx("sortNote"))}</p>
        <div class="cl-actions">
          <button type="button" class="tb-refresh" data-cl="add">${svg("M12 5v14M5 12h14")}<span>${esc(tx("addClass"))}</span></button>
          <button type="button" class="tb-refresh" data-cl="review">${svg("M12 5v14M5 12h14")}<span>${esc(tx("addReview"))}</span></button>
          <button type="button" class="tb-refresh" data-cl="export">${svg("M12 4v11M7 10l5 5 5-5M5 20h14")}<span>${esc(tx("export"))}</span></button>
        </div>
        <p class="cl-saved" role="status"${saveMsg ? "" : " hidden"}>${esc(saveMsg)}</p>
      </div>`}`;
  }
  function bindEditor(host) {
    if (host.dataset.clBound) return;
    host.dataset.clBound = "1";
    const rerender = () => { host.innerHTML = editorHTML(); };
    const curSet = () => { const D = ensure(edUser); return D.sets[edSet]; };
    host.addEventListener("click", (e) => {
      const b = e.target.closest("[data-cl]");
      if (!b) return;
      const a = b.dataset.cl, D = edUser && ensure(edUser);
      if (a === "all") { calAll = true; }
      else if (a === "user") { calAll = false; edUser = b.dataset.v; edSet = null; saveMsg = ""; }
      else if (a === "del") { if (!confirm(tx("delQ"))) return; curSet().classes.splice(+b.closest("[data-i]").dataset.i, 1); persist(edUser); }
      else if (a === "add" || a === "review") {
        const set = curSet(), last = set.classes.filter((c) => c.date).map((c) => c.date).sort().pop();
        const date = a === "review" ? "" : nextDates(last, (D.schedule || {}).days || [], 1)[0] || "";
        set.classes.push(a === "review" ? { date: "", topic: isEN() ? "Doubt-clearing session (optional)" : "Sesión de dudas (opcional)", status: "scheduled", note: "", kind: "review" } : { date, topic: "", status: "scheduled", note: "" });
        persist(edUser);
      } else if (a === "newpkg") {
        const size = D.setSize || 8;
        if (!confirm(tx("newPkgQ")(size))) return;
        const last = D.sets.flatMap((s) => s.classes).filter((c) => c.date).map((c) => c.date).sort().pop() || null;
        const start = last && last >= dayKey() ? last : null;
        const dates = nextDates(start, (D.schedule || {}).days || [], size);
        const first = dates[0] ? parse(dates[0]) : new Date(), end = dates.length ? parse(dates[dates.length - 1]) : first;
        const m = (d) => cap(d.toLocaleDateString("en-US", { month: "short" }));
        D.sets.push({ title: `${m(first)}${m(end) !== m(first) ? ` – ${m(end)}` : ""} ${end.getFullYear()}`, syllabus: [], classes: [...dates.map((date) => ({ date, topic: "", status: "scheduled", note: "" })), { date: "", topic: "Doubt-clearing session (optional)", status: "scheduled", note: "", kind: "review" }] });
        edSet = D.sets.length - 1;
        persist(edUser);
      } else if (a === "export") {
        const all = {};
        students().forEach((s) => { const d = get(s.user); if (d) all[s.user] = d; });
        Object.keys(BASE).forEach((k) => { if (!all[k]) all[k] = BASE[k]; });
        const head = "/*\n  Clases de cada estudiante. Exportado desde la página (Students → Classes) el " + dayKey() + ".\n  Formato: ver la versión anterior de este archivo o assets/classes.js.\n*/\n";
        const blob = new Blob([head + "window.YEB_CLASSES = " + JSON.stringify(all, null, 2) + ";\n"], { type: "text/javascript" });
        const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "classes.js";
        document.body.appendChild(link); link.click(); link.remove();
        return;
      }
      rerender();
    });
    // Typing saves without redrawing (the caret stays); dates, statuses and days redraw (numbers and order change)
    const onEdit = (e, redraw) => {
      const el = e.target.closest("[data-ed]");
      if (!el || !edUser) return;
      const D = ensure(edUser), f = el.dataset.ed, row = el.closest("[data-i]");
      const set = D.sets[edSet], c = row && set.classes[+row.dataset.i];
      if (f === "zoom") D.zoom = el.value.trim();
      else if (f === "start" || f === "end") { D.schedule = D.schedule || { days: [] }; D.schedule[f] = el.value; }
      else if (f === "day") { D.schedule = D.schedule || { days: [] }; D.schedule.days = [...host.querySelectorAll('[data-ed="day"]:checked')].map((x) => +x.value); }
      else if (f === "size") D.setSize = Math.max(1, Math.min(40, parseInt(el.value, 10) || 8));
      else if (f === "title") set.title = el.value;
      else if (f === "syllabus") set.syllabus = el.value.split("\n").map((s) => s.trim()).filter(Boolean);
      else if (f === "set") { edSet = +el.value; rerender(); return; }
      else if (c) c[f] = el.value;
      persist(edUser);
      if (redraw) rerender();
    };
    host.addEventListener("input", (e) => { if (!/^(date|status|day|set|size)$/.test((e.target.dataset || {}).ed || "")) onEdit(e, false); });
    host.addEventListener("change", (e) => { const f = (e.target.dataset || {}).ed; if (/^(date|status|day|set|size|start|end)$/.test(f || "")) onEdit(e, true); });
  }

  window.YEB_CLASSES_UI = {
    has: (user) => !!(get(user) && get(user).sets && get(user).sets.length),
    tab: () => tx("tab"),
    editorTitle: () => tx("edTitle"),
    studentHTML,
    canEdit: false,
    mountTeacher(host) { if (!host) return; window.YEB_CLASSES_UI.canEdit = true; host.innerHTML = editorHTML(); bindEditor(host); },
    // With Supabase, newer classes from the cloud; calls back when they arrive
    refresh(cb) { loadCloud().then((ok) => { if (ok && cb) cb(); }); }
  };
})();
