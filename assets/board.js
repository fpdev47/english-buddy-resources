/*
  Pizarra del profesor (solo cuentas con «teacher: true» en assets/accounts.js).
  Un mismo tablero se ve en dos lugares:
    · la pestaña «Board» (#pizarra), a página completa;
    · una ventana flotante que se abre con el botón redondo de abajo a la derecha, encima de cualquier
      ejercicio. Se puede mover (arrastrando la barra), agrandar/achicar (esquinas o el botón ⤢) y esconder.
  Elementos: texto, post-its, cuadros (sin relleno, relleno suave o sólido, esquinas redondeadas),
  líneas y flechas, lápiz e imágenes (pegar una captura con Ctrl/⌘+V, arrastrar un archivo o el botón).
  Todo se arrastra con la herramienta de selección. Varias páginas; «PDF» las descarga todas.
  Se guarda en este navegador («yeb-board»).
*/
(function () {
  "use strict";
  const ACCOUNTS = window.YEB_ACCOUNTS || [];
  let me = null;
  try {
    const s = JSON.parse(localStorage.getItem("yeb-student") || "null");
    me = !window.YEB_VIEWAS && s && ACCOUNTS.find((a) => a.user === s.id);
  } catch (e) {}
  const API = { enabled: !!(me && me.teacher), mountPage() {}, pageMode() {}, openPage: null };
  window.YEB_BOARD = API;
  if (!API.enabled) return;

  // ——— Texts ———
  const TXT = {
    en: {
      board: "Board", open: "Open the board", select: "Select and move (V)", laser: "Red pointer to point at things, on the board or anywhere on the page (K)", pen: "Pen (P)", text: "Text (T)", note: "Post-it (N)",
      rect: "Box (R)", line: "Line (L)", image: "Add an image", undo: "Undo", redo: "Redo", del: "Delete", dup: "Duplicate",
      fsOn: "Full screen (Esc to exit)", fsOff: "Exit full screen", pdf: "PDF", pdfLong: "Download every page as a PDF", page: (a, b) => `Page ${a} of ${b}`, prev: "Previous page", next: "Next page",
      addPage: "New page", delPage: "Delete this page", delPageQ: "Delete this page and everything on it?", newBoard: "New board",
      newQ: "Start an empty board? Download the PDF first if the student needs this one.", titlePh: "Title (used for the PDF name)",
      outline: "No fill", tint: "Light fill", solid: "Solid", arrow: "Arrow", thin: "Thin", thick: "Thick", small: "Small", medium: "Medium", large: "Large",
      hide: "Hide", bigger: "Make it bigger", smaller: "Make it smaller", asPage: "Open as a full page", typeHere: "Type…",
      full: "The board is full: download the PDF and start a new board.", making: "Making the PDF…", resize: "Resize",
      defTitle: "Class notes"
    },
    es: {
      board: "Pizarra", open: "Abrir la pizarra", select: "Seleccionar y mover (V)", laser: "Puntero rojo para señalar, en la pizarra o en cualquier parte de la página (K)", pen: "Lápiz (P)", text: "Texto (T)", note: "Post-it (N)",
      rect: "Cuadro (R)", line: "Línea (L)", image: "Agregar una imagen", undo: "Deshacer", redo: "Rehacer", del: "Borrar", dup: "Duplicar",
      fsOn: "Pantalla completa (Esc para salir)", fsOff: "Salir de pantalla completa", pdf: "PDF", pdfLong: "Descargar todas las páginas en PDF", page: (a, b) => `Página ${a} de ${b}`, prev: "Página anterior", next: "Página siguiente",
      addPage: "Página nueva", delPage: "Borrar esta página", delPageQ: "¿Borrar esta página y todo lo que tiene?", newBoard: "Pizarra nueva",
      newQ: "¿Empezar una pizarra vacía? Descarga antes el PDF si el estudiante necesita esta.", titlePh: "Título (nombre del PDF)",
      outline: "Sin relleno", tint: "Relleno suave", solid: "Sólido", arrow: "Flecha", thin: "Fino", thick: "Grueso", small: "Pequeño", medium: "Mediano", large: "Grande",
      hide: "Esconder", bigger: "Agrandar", smaller: "Achicar", asPage: "Abrir a página completa", typeHere: "Escribe…",
      full: "La pizarra está llena: descarga el PDF y empieza una pizarra nueva.", making: "Creando el PDF…", resize: "Cambiar tamaño",
      defTitle: "Notas de clase"
    }
  };
  const L = () => (document.documentElement.lang === "es" ? "es" : "en");
  const tx = (k) => TXT[L()][k];

  // ——— Constants ———
  const W = 1400, H = 990;   // one page (A4 landscape proportions)
  const COLORS = ["#1f2937", "#e03131", "#1c7ed6", "#2f9e44", "#f08c00", "#fcc419"];
  const NOTES = ["#ffe066", "#fff3a3", "#ffd6e0", "#d3f9d8", "#d0ebff"];
  const SIZES = { s: 22, m: 32, l: 48 }, NOTE_SIZES = { s: 18, m: 24, l: 34 };
  const NOTE_INK = "#1f2937";
  const sizeOf = (it, k) => (it.t === "note" ? NOTE_SIZES : SIZES)[k] || (it.t === "note" ? NOTE_SIZES : SIZES).m;
  const WIDTHS = { thin: 4, thick: 9 };
  const BODY = '"Plus Jakarta Sans", system-ui, sans-serif', HEAD = '"Poppins", system-ui, sans-serif';
  const KEY = "yeb-board", WIN_KEY = "yeb-board-win";
  const SVGNS = "http://www.w3.org/2000/svg";
  const uid = () => Math.random().toString(36).slice(2, 10);
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ico = (d, extra = "") => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>${extra}</svg>`;

  // ——— Document ———
  const newDoc = () => ({ title: "", page: 0, pages: [{ items: [] }], assets: {} });
  let doc;
  try { doc = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
  if (!doc || !Array.isArray(doc.pages) || !doc.pages.length) doc = newDoc();
  doc.assets = doc.assets || {};
  doc.page = Math.min(Math.max(0, doc.page | 0), doc.pages.length - 1);
  const items = () => doc.pages[doc.page].items;
  const find = (id) => items().find((i) => i.id === id);

  let saveTimer = null, warnedFull = false;
  function save(now) {
    clearTimeout(saveTimer);
    const run = () => {
      // Only the images that are still on some page
      const used = {};
      doc.pages.forEach((p) => p.items.forEach((i) => { if (i.t === "img" && doc.assets[i.src]) used[i.src] = doc.assets[i.src]; }));
      try { localStorage.setItem(KEY, JSON.stringify({ ...doc, assets: used })); warnedFull = false; }
      catch (e) { if (!warnedFull) { warnedFull = true; flash(tx("full")); } }
    };
    if (now) run(); else saveTimer = setTimeout(run, 400);
  }

  // ——— Undo / redo (per page) ———
  let undo = [], redo = [];
  const snap = () => JSON.stringify(items());
  function checkpoint(before) {
    undo.push(before || snap());
    if (undo.length > 80) undo.shift();
    redo = [];
  }
  function restore(from, to) {
    if (!from.length) return;
    endEdit(true);
    to.push(snap());
    doc.pages[doc.page].items = JSON.parse(from.pop());
    selSet = new Set([...selSet].filter((id) => find(id)));
    save(); draw();
  }

  // ——— Tool state ———
  let tool = "select", color = COLORS[0], fill = "none", size = "m", noteBg = NOTES[0], arrow = false, width = "thin";
  let pageHost = null;
  let selSet = new Set(), editing = null, editBefore = null, focused = false, clip = null;

  // ——— DOM ———
  const root = document.createElement("div");
  root.className = "bd";
  root.innerHTML = `
    <div class="bd-bar" role="toolbar"></div>
    <div class="bd-stage"><div class="bd-sheet"><div class="bd-items"></div><div class="bd-ov"></div></div></div>
    <div class="bd-foot">
      <input class="bd-title" type="text" maxlength="80" spellcheck="false">
      <div class="bd-pages"></div>
    </div>
    <input class="bd-file" type="file" accept="image/*" multiple hidden>`;
  const bar = root.querySelector(".bd-bar"), stage = root.querySelector(".bd-stage"), sheet = root.querySelector(".bd-sheet");
  const layer = root.querySelector(".bd-items"), ov = root.querySelector(".bd-ov"), titleIn = root.querySelector(".bd-title");
  const pagesBox = root.querySelector(".bd-pages"), fileIn = root.querySelector(".bd-file");
  const els = new Map();
  let scale = 1;

  // Floating window + round button
  const win = document.createElement("div");
  win.className = "bw";
  win.hidden = true;
  win.setAttribute("role", "dialog");
  win.innerHTML = `
    <div class="bw-head"><span class="bw-grip" aria-hidden="true">${ico("M9 5h.01M9 12h.01M9 19h.01M15 5h.01M15 12h.01M15 19h.01")}</span><strong class="bw-name"></strong>
      <button type="button" class="bw-btn" data-w="page">${ico("M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7")}</button>
      <button type="button" class="bw-btn" data-w="size"></button>
      <button type="button" class="bw-btn" data-w="hide">${ico("M5 12h14")}</button>
    </div>
    <div class="bw-body"></div>
    <span class="bw-rz nw" data-rz="nw"></span><span class="bw-rz se" data-rz="se"></span>`;
  const fab = document.createElement("button");
  fab.type = "button";
  fab.className = "bw-fab";
  fab.innerHTML = ico("M3 5h18v11H3zM8 21l4-5 4 5M12 2v3");
  document.body.append(win, fab);
  const winBody = win.querySelector(".bw-body");

  // Mode tab «Board», after «My progress»
  const tab = document.createElement("button");
  tab.type = "button"; tab.className = "mode-btn"; tab.setAttribute("role", "tab"); tab.dataset.mode = "pizarra"; tab.setAttribute("aria-selected", "false");
  tab.innerHTML = `<svg class="mode-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v11H3zM8 21l4-5 4 5M12 2v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span>`;
  const modes = document.getElementById("modes");
  if (modes) modes.appendChild(tab);

  // ——— Toolbar ———
  const TOOLS = [
    ["select", "M4 3l7 17 2.5-7.5L21 10z"],
    ["pen", "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"],
    ["text", "M5 6V4h14v2M12 4v16M9 20h6"],
    ["note", "M4 4h16v10l-6 6H4zM14 20v-6h6"],
    ["rect", "M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"],
    ["line", "M5 19 19 5"]
  ];
  // Selection: one or several items (Shift/⌘-click, or drag a rectangle over the empty page)
  const selItems = () => items().filter((i) => selSet.has(i.id));
  const selectOnly = (id) => { selSet = new Set(id ? [id] : []); };
  function current() { return selSet.size === 1 ? find([...selSet][0]) || null : null; }
  const translate = (it, o, dx, dy) => {
    if (it.t === "line") { it.x1 = Math.round(o.x1 + dx); it.y1 = Math.round(o.y1 + dy); it.x2 = Math.round(o.x2 + dx); it.y2 = Math.round(o.y2 + dy); }
    else if (it.t === "pen") it.pts = o.pts.map((q) => [Math.round((q[0] + dx) * 10) / 10, Math.round((q[1] + dy) * 10) / 10]);
    else { it.x = Math.round(o.x + dx); it.y = Math.round(o.y + dy); }
  };
  // Which options to show: the selected item's, or the active tool's
  function kind() {
    const it = current();
    return it ? it.t : selSet.size > 1 ? "multi" : tool;
  }
  // Full screen: the board covers the whole monitor (Esc exits)
  const canFull = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
  const isFull = () => (document.fullscreenElement || document.webkitFullscreenElement) === root;
  function toggleFull() {
    if (isFull()) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else { const req = root.requestFullscreen || root.webkitRequestFullscreen; if (req) Promise.resolve(req.call(root)).catch(() => {}); }
  }
  ["fullscreenchange", "webkitfullscreenchange"].forEach((ev) => document.addEventListener(ev, () => { renderBar(); requestAnimationFrame(fit); }));
  function renderBar() {
    const it = current(), k = kind();
    const b = (act, title, inner, on, extra = "") => `<button type="button" class="bd-b${on ? " on" : ""}" data-act="${act}" title="${esc(title)}" aria-label="${esc(title)}"${extra}>${inner}</button>`;
    const chip = (act, val, label, on) => `<button type="button" class="bd-chip${on ? " on" : ""}" data-act="${act}" data-v="${val}">${esc(label)}</button>`;
    let opts = "";
    const cur = (prop, fallback) => (it && it[prop] !== undefined ? it[prop] : fallback);
    if (k !== "img") {
      const c = cur("color", k === "note" ? NOTE_INK : color);
      opts += `<span class="bd-sep"></span>` + COLORS.map((x) => `<button type="button" class="bd-c${x === c ? " on" : ""}" data-act="color" data-v="${x}" style="--c:${x}" aria-label="${x}"></button>`).join("");
    }
    if (k === "note") opts += `<span class="bd-sep"></span>` + NOTES.map((x) => `<button type="button" class="bd-c sq${x === cur("bg", noteBg) ? " on" : ""}" data-act="bg" data-v="${x}" style="--c:${x}" aria-label="${x}"></button>`).join("");
    if (k === "rect") { const f = cur("fill", fill); opts += `<span class="bd-sep"></span>${chip("fill", "none", tx("outline"), f === "none")}${chip("fill", "tint", tx("tint"), f === "tint")}${chip("fill", "solid", tx("solid"), f === "solid")}`; }
    if (k === "text" || k === "note") { const s = cur("size", k === "note" ? "m" : size); opts += `<span class="bd-sep"></span>${chip("size", "s", "S", s === "s")}${chip("size", "m", "M", s === "m")}${chip("size", "l", "L", s === "l")}`; }
    if (k === "pen" || k === "line") { const w = cur("w", width); opts += `<span class="bd-sep"></span>${chip("width", "thin", tx("thin"), w === "thin")}${chip("width", "thick", tx("thick"), w === "thick")}`; }
    if (k === "line") opts += chip("arrow", "1", tx("arrow"), cur("arrow", arrow));
    bar.innerHTML = `
      <div class="bd-tools">${TOOLS.map(([id, d]) => b("tool", tx(id), ico(d), tool === id, ` data-v="${id}"`)).join("")}${b("image", tx("image"), ico("M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4", '<circle cx="9" cy="9" r="1.5" fill="currentColor"/>'))}<button type="button" class="bd-b bd-laser-b${laser ? " on" : ""}" data-act="laser" title="${esc(tx("laser"))}" aria-label="${esc(tx("laser"))}" aria-pressed="${laser}"><span class="bd-dot"></span></button></div>
      <div class="bd-opts">${opts}</div>
      <div class="bd-acts">
        ${b("undo", tx("undo"), ico("M9 14 4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3"), false, undo.length ? "" : " disabled")}
        ${b("redo", tx("redo"), ico("M15 14l5-5-5-5M20 9H9a5 5 0 0 0 0 10h3"), false, redo.length ? "" : " disabled")}
        ${b("dup", tx("dup"), ico("M8 8h12v12H8zM4 16V4h12"), false, selSet.size ? "" : " disabled")}
        ${b("del", tx("del"), ico("M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"), false, selSet.size ? "" : " disabled")}
        ${canFull ? b("full", isFull() ? tx("fsOff") : tx("fsOn"), isFull() ? ico("M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5") : ico("M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"), isFull()) : ""}
        <button type="button" class="bd-pdf" data-act="pdf" title="${esc(tx("pdfLong"))}">${ico("M12 4v11M7 10l5 5 5-5M5 20h14")}<span>${tx("pdf")}</span></button>
      </div>`;
    stage.dataset.tool = tool;
  }
  function renderFoot() {
    titleIn.placeholder = tx("titlePh");
    if (document.activeElement !== titleIn) titleIn.value = doc.title || "";
    const n = doc.pages.length, p = doc.page;
    pagesBox.innerHTML = `
      <button type="button" class="bd-b sm" data-act="prev" aria-label="${esc(tx("prev"))}"${p ? "" : " disabled"}>${ico("M15 6l-6 6 6 6")}</button>
      <span class="bd-pg">${esc(tx("page")(p + 1, n))}</span>
      <button type="button" class="bd-b sm" data-act="next" aria-label="${esc(tx("next"))}"${p < n - 1 ? "" : " disabled"}>${ico("M9 6l6 6-6 6")}</button>
      <button type="button" class="bd-b sm" data-act="addpage" title="${esc(tx("addPage"))}" aria-label="${esc(tx("addPage"))}">${ico("M12 5v14M5 12h14")}</button>
      <button type="button" class="bd-b sm" data-act="delpage" title="${esc(tx("delPage"))}" aria-label="${esc(tx("delPage"))}"${n > 1 ? "" : " disabled"}>${ico("M4 7h16M6 7l1 13h10l1-13M9 7V4h6v3")}</button>
      <button type="button" class="bd-chip" data-act="newboard">${esc(tx("newBoard"))}</button>`;
  }
  function renderLabels() {
    tab.querySelector("span").textContent = tx("board");
    fab.title = tx("open"); fab.setAttribute("aria-label", tx("open"));
    win.querySelector(".bw-name").textContent = tx("board");
    win.setAttribute("aria-label", tx("board"));
    const set = (sel, label) => { const el = win.querySelector(sel); el.title = label; el.setAttribute("aria-label", label); };
    set('[data-w="page"]', tx("asPage")); set('[data-w="hide"]', tx("hide"));
    set('[data-w="size"]', geo.big ? tx("smaller") : tx("bigger"));
    win.querySelector('[data-w="size"]').innerHTML = geo.big ? ico("M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7") : ico("M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7");
    win.querySelector('[data-w="page"]').innerHTML = ico("M4 4h16v16H4zM4 9h16");
    renderBar(); renderFoot();
    layer.querySelectorAll(".bd-text,.bd-note-t").forEach((el) => { el.dataset.ph = tx("typeHere"); });
  }

  // ——— Drawing ———
  const fontFor = (it) => it.size === "l" ? `700 ${sizeOf(it, "l")}px ${HEAD}` : `500 ${sizeOf(it, it.size || "m")}px ${BODY}`;
  const plainHTML = (text) => esc(text || "").replace(/\n/g, "<br>");
  // Rich text inside texts and post-its: only line breaks and spans with a color and/or a size survive
  function clean(html, strip = {}) {
    const box = document.createElement("div");
    box.innerHTML = html || "";
    const walk = (node) => [...node.childNodes].map((n) => {
      if (n.nodeType === 3) return esc(n.nodeValue);
      if (n.nodeName === "BR") return "<br>";
      if (n.nodeType !== 1) return "";
      const inner = walk(n);
      if (n.nodeName === "DIV" || n.nodeName === "P") return `<div>${inner || "<br>"}</div>`;
      const c = strip.color ? "" : n.style.color || n.getAttribute("color") || "";
      const f = strip.size ? "" : n.style.fontSize || "";
      const css = (/^(#[0-9a-f]{3,8}|rgba?\([\d,.\s]+\))$/i.test(c) ? `color:${c};` : "") + (/^\d+(\.\d+)?px$/.test(f) ? `font-size:${f};` : "");
      return css ? `<span style="${css}">${inner}</span>` : inner;
    }).join("");
    return walk(box);
  }
  const fillFor = (it) => it.fill === "solid" ? it.color : it.fill === "tint" ? it.color + "2e" : "transparent";
  function arrowHead(it) {
    const a = Math.atan2(it.y2 - it.y1, it.x2 - it.x1), lw = WIDTHS[it.w] || 4, len = 16 + lw * 2.2;
    return [[it.x2, it.y2], [it.x2 - len * Math.cos(a - 0.45), it.y2 - len * Math.sin(a - 0.45)], [it.x2 - len * Math.cos(a + 0.45), it.y2 - len * Math.sin(a + 0.45)]];
  }
  const penD = (pts) => pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join("");
  function create(it) {
    let el;
    if (it.t === "line" || it.t === "pen") {
      el = document.createElementNS(SVGNS, "svg");
      el.setAttribute("viewBox", `0 0 ${W} ${H}`); el.setAttribute("width", W); el.setAttribute("height", H);
      el.setAttribute("class", `bd-it bd-svg`);
    } else if (it.t === "img") {
      el = document.createElement("img");
      el.className = "bd-it bd-img"; el.draggable = false; el.alt = "";
      el.src = doc.assets[it.src] || "";
    } else {
      el = document.createElement("div");
      el.className = `bd-it bd-${it.t}`;
      if (it.t === "note") { const t = document.createElement("div"); t.className = "bd-note-t"; t.dataset.ph = tx("typeHere"); el.appendChild(t); }
      if (it.t === "text") el.dataset.ph = tx("typeHere");
    }
    el.dataset.id = it.id;
    return el;
  }
  function update(el, it) {
    const box = (h = true) => { el.style.left = it.x + "px"; el.style.top = it.y + "px"; el.style.width = it.w + "px"; if (h) el.style.height = it.h + "px"; };
    if (it.t === "text") {
      box(false); el.style.font = fontFor(it); el.style.lineHeight = "1.3"; el.style.color = it.color;
      if (editing !== it.id) el.innerHTML = it.html !== undefined ? it.html : plainHTML(it.text);
    } else if (it.t === "note") {
      box(); el.style.background = it.bg;
      const t = el.firstChild;
      t.style.font = fontFor(it); t.style.lineHeight = "1.3"; t.style.color = it.color || NOTE_INK;
      if (editing !== it.id) t.innerHTML = it.html !== undefined ? it.html : plainHTML(it.text);
    } else if (it.t === "rect") {
      box(); el.style.borderColor = it.color; el.style.background = fillFor(it);
    } else if (it.t === "img") {
      box();
    } else if (it.t === "line") {
      const lw = WIDTHS[it.w] || 4, d = `M${it.x1} ${it.y1}L${it.x2} ${it.y2}`;
      el.innerHTML = `<path class="hit" d="${d}"/><path d="${d}" stroke="${it.color}" stroke-width="${lw}" stroke-linecap="round" fill="none"/>` +
        (it.arrow ? `<polygon points="${arrowHead(it).map((p) => p.join(",")).join(" ")}" fill="${it.color}" stroke="${it.color}" stroke-width="${lw / 2}" stroke-linejoin="round"/>` : "");
    } else if (it.t === "pen") {
      const d = penD(it.pts);
      el.innerHTML = `<path class="hit" d="${d}"/><path d="${d}" stroke="${it.color}" stroke-width="${WIDTHS[it.w] || 4}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    }
  }
  function draw() {
    const seen = new Set();
    items().forEach((it) => {
      let el = els.get(it.id);
      if (!el) { el = create(it); els.set(it.id, el); }
      update(el, it);
      seen.add(it.id);
      layer.appendChild(el);   // keeps the stacking order
    });
    els.forEach((el, id) => { if (!seen.has(id)) { el.remove(); els.delete(id); } });
    drawSel(); renderBar(); renderFoot();
  }
  function bbox(it) {
    if (it.t === "line") return { x: Math.min(it.x1, it.x2), y: Math.min(it.y1, it.y2), w: Math.abs(it.x2 - it.x1), h: Math.abs(it.y2 - it.y1) };
    if (it.t === "pen") {
      const xs = it.pts.map((p) => p[0]), ys = it.pts.map((p) => p[1]);
      const x = Math.min(...xs), y = Math.min(...ys);
      return { x, y, w: Math.max(...xs) - x, h: Math.max(...ys) - y };
    }
    if (it.t === "text") { const el = els.get(it.id); return { x: it.x, y: it.y, w: it.w, h: el ? el.offsetHeight : sizeOf(it, it.size || "m") * 1.3 }; }
    return { x: it.x, y: it.y, w: it.w, h: it.h };
  }
  function drawSel() {
    ov.innerHTML = "";
    els.forEach((el, id) => el.classList.toggle("sel", selSet.has(id)));
    const pad = 6 / scale, hs = 16 / scale;
    const outline = (b) => `<span class="bd-box" style="left:${b.x - pad}px;top:${b.y - pad}px;width:${b.w + pad * 2}px;height:${b.h + pad * 2}px;border-width:${1.5 / scale}px"></span>`;
    const marquee = drag && drag.type === "marquee" && drag.rect;
    const mq = marquee ? `<span class="bd-mq" style="left:${marquee.x}px;top:${marquee.y}px;width:${marquee.w}px;height:${marquee.h}px;border-width:${1.5 / scale}px"></span>` : "";
    const it = current();
    if (!it) { ov.innerHTML = selItems().map((x) => outline(bbox(x))).join("") + mq; return; }
    const b = bbox(it);
    const handle = (name, x, y) => `<span class="bd-h" data-h="${name}" style="left:${x - hs / 2}px;top:${y - hs / 2}px;width:${hs}px;height:${hs}px;border-width:${2 / scale}px"></span>`;
    let html = "";
    if (it.t !== "line") html += outline(b);
    if (it.t === "line") html += handle("p1", it.x1, it.y1) + handle("p2", it.x2, it.y2);
    else if (it.t === "text") html += handle("e", b.x + b.w + pad, b.y + b.h / 2);
    else if (it.t !== "pen") html += handle("se", b.x + b.w + pad, b.y + b.h + pad);
    ov.innerHTML = html + mq;
  }
  // In the floating window the whole page fits; on the Board tab (wide screens) the page uses the
  // full width and the board scrolls down, so the editor is as large as possible
  const spacer = document.createElement("div");
  spacer.className = "bd-spacer";
  stage.appendChild(spacer);
  function fit() {
    const r = stage.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const m = 12, wide = !!((isFull() || (pageHost && root.parentNode === pageHost)) && r.width >= 700);
    stage.classList.toggle("wide", wide);
    const cw = wide ? stage.clientWidth : r.width;
    scale = wide ? Math.max(0.05, (cw - m * 2) / W) : Math.max(0.05, Math.min((r.width - m * 2) / W, (r.height - m * 2) / H));
    sheet.style.transform = `scale(${scale})`;
    sheet.style.left = Math.round((cw - W * scale) / 2) + "px";
    sheet.style.top = (wide ? m : Math.round((r.height - H * scale) / 2)) + "px";
    spacer.style.height = wide ? Math.round(H * scale + m * 2) + "px" : "0";
    drawSel();
  }
  new ResizeObserver(fit).observe(stage);

  // ——— Editing text and post-its ———
  function startEdit(id, before) {
    const it = find(id), el = els.get(id);
    if (!it || !el || (it.t !== "text" && it.t !== "note")) return;
    endEdit();
    editing = id; selectOnly(id); editBefore = before || snap();
    const target = it.t === "note" ? el.firstChild : el;
    target.contentEditable = "true";
    target.focus();
    const r = document.createRange(); r.selectNodeContents(target); r.collapse(false);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    drawSel(); renderBar();
  }
  function endEdit(silent) {
    if (!editing) return;
    const id = editing, it = find(id), el = els.get(id);
    editing = null;
    if (it && el) {
      const target = it.t === "note" ? el.firstChild : el;
      target.contentEditable = "false";
      it.text = target.innerText.replace(/\n+$/, "");
      it.html = it.text.trim() ? clean(target.innerHTML) : "";
      // An empty text box disappears; an empty post-it stays (it is still a sticky note)
      if (it.t === "text" && !it.text.trim()) { doc.pages[doc.page].items = items().filter((x) => x.id !== id); selSet.delete(id); }
    }
    if (editBefore !== null && editBefore !== snap()) checkpoint(editBefore);
    editBefore = null;
    save();
    if (!silent) draw();
  }
  layer.addEventListener("paste", (e) => {
    if (!editing) return;
    const file = imageFrom(e.clipboardData);
    e.preventDefault();
    if (file) { addImages([file]); return; }
    document.execCommand("insertText", false, e.clipboardData.getData("text/plain"));
  });
  layer.addEventListener("input", () => { if (editing) drawSel(); });

  // Words selected while typing can get their own color and size
  let lastRange = null;
  const editTarget = () => { const it = editing && find(editing), el = it && els.get(it.id); return it && el ? (it.t === "note" ? el.firstChild : el) : null; };
  document.addEventListener("selectionchange", () => {
    const t = editTarget(), s = getSelection();
    if (t && s.rangeCount && t.contains(s.anchorNode)) lastRange = s.getRangeAt(0).cloneRange();
  });
  function applyInline(prop, value) {
    const t = editTarget(), it = editing && find(editing);
    if (!t || !lastRange || lastRange.collapsed || !t.contains(lastRange.commonAncestorContainer)) return false;
    t.focus();
    const s = getSelection(); s.removeAllRanges(); s.addRange(lastRange);
    document.execCommand("styleWithCSS", false, false);
    document.execCommand(prop === "color" ? "foreColor" : "fontSize", false, prop === "color" ? value : "7");
    const made = [];
    t.querySelectorAll(prop === "color" ? "font[color]" : 'font[size="7"]').forEach((f) => {
      const sp = document.createElement("span");
      if (prop === "color") sp.style.color = f.getAttribute("color"); else sp.style.fontSize = sizeOf(it, value) + "px";
      sp.append(...f.childNodes);
      f.replaceWith(sp);
      // The new choice wins over older ones inside the selection
      sp.querySelectorAll("span,font").forEach((d) => { if (prop === "color") { d.style.color = ""; d.removeAttribute("color"); } else d.style.fontSize = ""; });
      made.push(sp);
    });
    if (made.length) {
      const r = document.createRange(); r.setStartBefore(made[0]); r.setEndAfter(made[made.length - 1]);
      s.removeAllRanges(); s.addRange(r); lastRange = r.cloneRange();
    }
    drawSel();
    return true;
  }
  // Toolbar buttons don't take the caret away from the text being typed
  bar.addEventListener("mousedown", (e) => { if (editing && e.target.closest("button")) e.preventDefault(); });

  // ——— Pointer work on the page ———
  const pt = (e) => { const r = sheet.getBoundingClientRect(); return { x: (e.clientX - r.left) / scale, y: (e.clientY - r.top) / scale }; };
  let drag = null;
  const place = (x, y, w, h) => ({ x: Math.round(Math.min(Math.max(x, 0), W - w)), y: Math.round(Math.min(Math.max(y, 0), H - h)) });
  stage.addEventListener("pointerdown", (e) => {
    if (e.button > 0 || laser) return;   // with the red pointer on, clicking only points
    // The scrollbar of the wide board keeps working
    if (e.target === stage && e.clientX - stage.getBoundingClientRect().left > stage.clientWidth) return;
    const p = pt(e);
    const target = e.target.closest(".bd-it"), handle = e.target.closest(".bd-h");
    const hitId = target && target.dataset.id;
    // Clicks inside the box being typed in keep the caret
    if (editing && hitId === editing) return;
    if (editing) endEdit();
    e.preventDefault();
    // Whatever had the keyboard (an exercise box, the title) lets go, so shortcuts reach the board
    const ae = document.activeElement;
    if (ae && ae !== document.body && ae.blur) ae.blur();
    try { stage.setPointerCapture(e.pointerId); } catch (x) {}
    const before = snap();
    if (tool === "select") {
      const add = e.shiftKey || e.metaKey || e.ctrlKey;
      if (handle && current()) { drag = { type: "handle", h: handle.dataset.h, start: p, orig: clone(current()), before }; return; }
      if (hitId) {
        const wasOnly = selSet.size === 1 && selSet.has(hitId);
        if (add) {
          // Shift/⌘-click adds or removes one item, like on a desktop
          if (selSet.has(hitId)) { selSet.delete(hitId); drawSel(); renderBar(); return; }
          selSet.add(hitId);
        } else if (!selSet.has(hitId)) selectOnly(hitId);
        drawSel(); renderBar();
        drag = { type: "move", start: p, orig: selItems().map(clone), before, wasOnly, sx: e.clientX, sy: e.clientY, moved: false };
        return;
      }
      // Empty page: drag a rectangle to select several items
      drag = { type: "marquee", start: p, base: add ? new Set(selSet) : new Set(), rect: null };
      if (!add) selectOnly(null);
      drawSel(); renderBar();
      return;
    }
    if (tool === "pen") {
      const it = { id: uid(), t: "pen", pts: [[p.x, p.y]], color, w: width };
      items().push(it); selectOnly(null);
      drag = { type: "pen", it, before };
      draw();
      return;
    }
    if (tool === "text") {
      const it = { id: uid(), t: "text", x: Math.round(p.x), y: Math.round(p.y - SIZES[size] * 0.65), w: 440, text: "", color, size };
      items().push(it); setTool("select"); draw(); startEdit(it.id, before);
      return;
    }
    if (tool === "note") {
      const at = place(p.x - 120, p.y - 30, 240, 220);
      const it = { id: uid(), t: "note", x: at.x, y: at.y, w: 240, h: 220, text: "", bg: noteBg };
      items().push(it); setTool("select"); draw(); startEdit(it.id, before);
      return;
    }
    if (tool === "rect") {
      const it = { id: uid(), t: "rect", x: p.x, y: p.y, w: 0, h: 0, color, fill };
      items().push(it); selectOnly(it.id);
      drag = { type: "rect", it, start: p, before };
      draw();
      return;
    }
    if (tool === "line") {
      const it = { id: uid(), t: "line", x1: p.x, y1: p.y, x2: p.x, y2: p.y, color, w: width, arrow };
      items().push(it); selectOnly(it.id);
      drag = { type: "line", it, before };
      draw();
    }
  });
  stage.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const p = pt(e), d = drag;
    if (d.type === "pen") {
      const last = d.it.pts[d.it.pts.length - 1];
      if (Math.hypot(p.x - last[0], p.y - last[1]) * scale < 1.5) return;
      d.it.pts.push([Math.round(p.x * 10) / 10, Math.round(p.y * 10) / 10]);
      update(els.get(d.it.id), d.it);
      return;
    }
    if (d.type === "rect") {
      const it = d.it;
      it.x = Math.round(Math.min(p.x, d.start.x)); it.y = Math.round(Math.min(p.y, d.start.y));
      it.w = Math.round(Math.abs(p.x - d.start.x)); it.h = Math.round(Math.abs(p.y - d.start.y));
      if (e.shiftKey) { it.w = it.h = Math.max(it.w, it.h); }
      update(els.get(it.id), it); drawSel();
      return;
    }
    if (d.type === "line") {
      const it = d.it;
      let x = p.x, y = p.y;
      if (e.shiftKey) { const a = Math.round(Math.atan2(y - it.y1, x - it.x1) / (Math.PI / 4)) * (Math.PI / 4), r = Math.hypot(x - it.x1, y - it.y1); x = it.x1 + r * Math.cos(a); y = it.y1 + r * Math.sin(a); }
      it.x2 = Math.round(x); it.y2 = Math.round(y);
      update(els.get(it.id), it); drawSel();
      return;
    }
    const dx = p.x - d.start.x, dy = p.y - d.start.y;
    if (d.type === "marquee") {
      const r = { x: Math.min(p.x, d.start.x), y: Math.min(p.y, d.start.y), w: Math.abs(dx), h: Math.abs(dy) };
      d.rect = r;
      // Everything the rectangle touches is selected
      selSet = new Set(d.base);
      items().forEach((x) => { const b = bbox(x); if (b.x <= r.x + r.w && b.x + b.w >= r.x && b.y <= r.y + r.h && b.y + b.h >= r.y) selSet.add(x.id); });
      drawSel();
      return;
    }
    if (d.type === "move") {
      if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) < 4) return;
      d.moved = true;
      d.orig.forEach((o) => { const it = find(o.id); if (it) { translate(it, o, dx, dy); update(els.get(it.id), it); } });
      drawSel();
      return;
    }
    const it = current(), o = d.orig;
    if (!it) return;
    if (d.type === "handle") {
      if (d.h === "p1") { it.x1 = Math.round(o.x1 + dx); it.y1 = Math.round(o.y1 + dy); }
      else if (d.h === "p2") { it.x2 = Math.round(o.x2 + dx); it.y2 = Math.round(o.y2 + dy); }
      else if (d.h === "e") it.w = Math.max(80, Math.round(o.w + dx));
      else if (d.h === "se") {
        it.w = Math.max(40, Math.round(o.w + dx));
        it.h = it.t === "img" ? Math.round(it.w * o.h / o.w) : Math.max(40, Math.round(o.h + dy));
      }
    }
    update(els.get(it.id), it); drawSel();
  });
  function finishDrag() {
    const d = drag;
    if (!d) return;
    drag = null;
    if (d.type === "pen" && d.it.pts.length === 1) d.it.pts.push([d.it.pts[0][0] + 0.5, d.it.pts[0][1] + 0.5]);
    if (d.type === "rect" && (d.it.w < 12 || d.it.h < 12)) Object.assign(d.it, { w: 260, h: 160 }, place(d.start.x - 130, d.start.y - 80, 260, 160));
    if (d.type === "line" && Math.hypot(d.it.x2 - d.it.x1, d.it.y2 - d.it.y1) < 10) { d.it.x2 = d.it.x1 + 220; }
    if (d.type === "rect" || d.type === "line") setTool("select");
    if (d.type === "marquee") { drawSel(); renderBar(); return; }
    // A second tap on a text or post-it that was already selected starts typing
    if (d.type === "move" && !d.moved) {
      const it = current();
      if (d.wasOnly && it && (it.t === "text" || it.t === "note")) { startEdit(it.id); return; }
      return;
    }
    if (d.before !== snap()) { checkpoint(d.before); save(); }
    draw();
  }
  stage.addEventListener("pointerup", finishDrag);
  stage.addEventListener("pointercancel", finishDrag);
  stage.addEventListener("dblclick", (e) => {
    const target = e.target.closest(".bd-text,.bd-note");
    if (target && tool === "select" && editing !== target.dataset.id) startEdit(target.dataset.id);
  });

  // ——— Toolbar and footer actions ———
  // ——— Red pointer (laser): a dot with a short fading trail that follows the mouse over the board
  // and, while it's on, over the whole page (clicks still go through to the page) ———
  let laser = false, trail = [], lzRaf = 0;
  const lz = document.createElement("canvas");
  lz.className = "bd-laser"; lz.hidden = true; lz.setAttribute("aria-hidden", "true");
  document.body.appendChild(lz);
  const lzCtx = lz.getContext("2d");
  function setLaser(on) {
    laser = on; lz.hidden = !on; trail = [];
    document.documentElement.classList.toggle("laser-on", on);
    renderBar();
    if (on && !lzRaf) lzRaf = requestAnimationFrame(drawLaser);
  }
  function drawLaser() {
    lzRaf = 0;
    const dpr = window.devicePixelRatio || 1, w = innerWidth, h = innerHeight;
    if (lz.width !== Math.round(w * dpr) || lz.height !== Math.round(h * dpr)) { lz.width = Math.round(w * dpr); lz.height = Math.round(h * dpr); }
    lzCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lzCtx.clearRect(0, 0, w, h);
    if (!laser) return;
    const now = performance.now(), LIFE = 380;
    trail = trail.filter((q) => now - q.t < LIFE);
    lzCtx.lineCap = "round"; lzCtx.lineJoin = "round";
    for (let i = 1; i < trail.length; i++) {
      const a = trail[i - 1], b = trail[i];
      if (a.gap || b.gap) continue;
      const life = 1 - (now - b.t) / LIFE;
      lzCtx.strokeStyle = `rgba(240, 40, 40, ${0.55 * life})`;
      lzCtx.lineWidth = 2 + 6 * life;
      lzCtx.beginPath(); lzCtx.moveTo(a.x, a.y); lzCtx.lineTo(b.x, b.y); lzCtx.stroke();
    }
    const last = lzLast;
    if (last) {
      const g = lzCtx.createRadialGradient(last.x, last.y, 0, last.x, last.y, 18);
      g.addColorStop(0, "rgba(255, 60, 60, .55)"); g.addColorStop(1, "rgba(255, 60, 60, 0)");
      lzCtx.fillStyle = g; lzCtx.beginPath(); lzCtx.arc(last.x, last.y, 18, 0, Math.PI * 2); lzCtx.fill();
      lzCtx.fillStyle = "#ff2b2b"; lzCtx.strokeStyle = "#fff"; lzCtx.lineWidth = 1.5;
      lzCtx.beginPath(); lzCtx.arc(last.x, last.y, 6.5, 0, Math.PI * 2); lzCtx.fill(); lzCtx.stroke();
    }
    lzRaf = requestAnimationFrame(drawLaser);
  }
  let lzLast = null;
  addEventListener("pointermove", (e) => {
    if (!laser) return;
    lzLast = { x: e.clientX, y: e.clientY };
    trail.push({ x: e.clientX, y: e.clientY, t: performance.now() });
  }, { passive: true, capture: true });
  document.addEventListener("pointerout", (e) => { if (laser && !e.relatedTarget) { lzLast = null; trail.push({ gap: true, t: performance.now() }); } });
  // In full screen only the board is shown, so the pointer layer moves inside it
  ["fullscreenchange", "webkitfullscreenchange"].forEach((ev) => document.addEventListener(ev, () => ((document.fullscreenElement || document.webkitFullscreenElement) === root ? root : document.body).appendChild(lz)));

  function setTool(t) { tool = t; if (t !== "select") selectOnly(null); drawSel(); renderBar(); }
  // Applies an option (color, fill…) to every selected item that has it
  function changeSelected(prop, value) {
    const list = selItems().filter((it) => it[prop] !== undefined || (prop === "arrow" && it.t === "line") || (it.t === "note" && (prop === "color" || prop === "size")));
    if (!list.length) return false;
    checkpoint();
    list.forEach((it) => {
      it[prop] = value;
      // Changing the whole box also resets words that had their own color/size
      if ((prop === "color" || prop === "size") && it.html) it.html = clean(it.html, { [prop]: true });
    });
    save(); draw();
    return true;
  }
  // No words selected while typing: the option applies to the whole box, and typing goes on
  function wholeWhileEditing(prop, value) {
    const t = editTarget(), it = editing && find(editing);
    if (!t) return false;
    it[prop] = value;
    t.innerHTML = clean(t.innerHTML, { [prop]: true });
    update(els.get(it.id), it);
    t.focus();
    const r = document.createRange(); r.selectNodeContents(t); r.collapse(false);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    drawSel(); renderBar();
    return true;
  }
  function removeSelected() {
    if (!selSet.size) return;
    checkpoint();
    doc.pages[doc.page].items = items().filter((i) => !selSet.has(i.id));
    selectOnly(null); save(); draw();
  }
  function duplicate(list, offset = 30) {
    if (!list.length) return;
    checkpoint();
    const copies = list.map((src) => { const it = clone(src); it.id = uid(); translate(it, src, offset, offset); return it; });
    items().push(...copies);
    selSet = new Set(copies.map((c) => c.id)); save(); draw();
  }
  function goPage(n) {
    endEdit(true);
    doc.page = Math.min(Math.max(0, n), doc.pages.length - 1);
    selectOnly(null); undo = []; redo = []; save(); draw();
  }
  root.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b || b.disabled) return;
    const a = b.dataset.act, v = b.dataset.v;
    if (a === "laser") { endEdit(); setLaser(!laser); return; }
    if (a === "tool") { endEdit(); if (laser) setLaser(false); setTool(v); }
    else if (a === "color") { color = v; if (editing && applyInline("color", v)) return; wholeWhileEditing("color", v) || changeSelected("color", v) || renderBar(); }
    else if (a === "bg") { noteBg = v; changeSelected("bg", v) || renderBar(); }
    else if (a === "fill") { fill = v; changeSelected("fill", v) || renderBar(); }
    else if (a === "size") { size = v; if (editing && applyInline("size", v)) return; wholeWhileEditing("size", v) || changeSelected("size", v) || renderBar(); }
    else if (a === "width") { width = v; changeSelected("w", v) || renderBar(); }
    else if (a === "arrow") { const it = current(); arrow = !(it && it.t === "line" ? it.arrow : arrow); changeSelected("arrow", arrow) || renderBar(); }
    else if (a === "image") fileIn.click();
    else if (a === "undo") restore(undo, redo);
    else if (a === "redo") restore(redo, undo);
    else if (a === "del") removeSelected();
    else if (a === "dup") duplicate(selItems());
    else if (a === "pdf") exportPdf();
    else if (a === "full") toggleFull();
    else if (a === "prev") goPage(doc.page - 1);
    else if (a === "next") goPage(doc.page + 1);
    else if (a === "addpage") { endEdit(true); doc.pages.splice(doc.page + 1, 0, { items: [] }); goPage(doc.page + 1); }
    else if (a === "delpage") {
      if (doc.pages.length < 2 || (items().length && !confirm(tx("delPageQ")))) return;
      doc.pages.splice(doc.page, 1); goPage(Math.min(doc.page, doc.pages.length - 1));
    }
    else if (a === "newboard") {
      if (!confirm(tx("newQ"))) return;
      endEdit(true); doc = newDoc(); selectOnly(null); undo = []; redo = []; save(true); draw();
    }
  });
  titleIn.addEventListener("input", () => { doc.title = titleIn.value; save(); });
  fileIn.addEventListener("change", () => { addImages([...fileIn.files]); fileIn.value = ""; });

  // ——— Images: paste, drop, or the button ———
  function imageFrom(dt) {
    if (!dt) return null;
    for (const item of dt.items || []) if (item.kind === "file" && item.type.startsWith("image/")) return item.getAsFile();
    return null;
  }
  function shrink(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file), img = new Image();
      img.onload = () => {
        const k = Math.min(1, 1600 / Math.max(img.naturalWidth, img.naturalHeight));
        const c = document.createElement("canvas");
        c.width = Math.max(1, Math.round(img.naturalWidth * k)); c.height = Math.max(1, Math.round(img.naturalHeight * k));
        const ctx = c.getContext("2d");
        ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        resolve({ src: c.toDataURL("image/jpeg", 0.88), w: c.width, h: c.height });
      };
      img.onerror = () => { URL.revokeObjectURL(url); reject(); };
      img.src = url;
    });
  }
  async function addImages(files, at) {
    files = files.filter((f) => f && f.type.startsWith("image/"));
    if (!files.length) return;
    endEdit(true);
    const before = snap();
    let off = 0;
    selectOnly(null);
    for (const f of files) {
      let r;
      try { r = await shrink(f); } catch (e) { continue; }
      const id = uid();
      doc.assets[id] = r.src;
      const k = Math.min(1, 760 / r.w, 560 / r.h), w = Math.round(r.w * k), h = Math.round(r.h * k);
      const pos = place((at ? at.x : W / 2) - w / 2 + off, (at ? at.y : H / 2) - h / 2 + off, w, h);
      const it = { id: uid(), t: "img", src: id, x: pos.x, y: pos.y, w, h };
      items().push(it); selSet.add(it.id); off += 30;
    }
    setTool("select");
    checkpoint(before); save(); draw();
  }
  stage.addEventListener("dragover", (e) => { if ([...(e.dataTransfer.types || [])].includes("Files")) { e.preventDefault(); stage.classList.add("drop"); } });
  stage.addEventListener("dragleave", () => stage.classList.remove("drop"));
  stage.addEventListener("drop", (e) => {
    e.preventDefault(); stage.classList.remove("drop");
    addImages([...e.dataTransfer.files], pt(e));
  });

  // ——— Keyboard, copy and paste (only while the teacher is working on the board) ———
  const visible = () => root.isConnected && root.offsetParent !== null;
  document.addEventListener("pointerdown", (e) => { focused = root.contains(e.target); }, true);
  const typingElsewhere = () => {
    const a = document.activeElement;
    return a && a !== document.body && !root.contains(a) || (a && root.contains(a) && (a === titleIn));
  };
  const active = () => visible() && focused && !typingElsewhere();
  document.addEventListener("keydown", (e) => {
    if (!active() || editing) {
      if (editing && e.key === "Escape") { e.preventDefault(); endEdit(); }
      return;
    }
    const mod = e.metaKey || e.ctrlKey, k = e.key.toLowerCase();
    if (mod && k === "z") { e.preventDefault(); e.shiftKey ? restore(redo, undo) : restore(undo, redo); }
    else if (mod && k === "y") { e.preventDefault(); restore(redo, undo); }
    else if (mod && k === "d") { e.preventDefault(); duplicate(selItems()); }
    else if (mod && k === "a") { e.preventDefault(); setTool("select"); selSet = new Set(items().map((i) => i.id)); drawSel(); renderBar(); }
    else if (mod) return;
    else if ((e.key === "Delete" || e.key === "Backspace") && selSet.size) { e.preventDefault(); removeSelected(); }
    else if (e.key === "Escape") { if (laser) setLaser(false); selectOnly(null); setTool("select"); }
    else if (k === "k" && !e.metaKey && !e.ctrlKey) { e.preventDefault(); setLaser(!laser); }
    else if (e.key === "Enter" && current()) { const it = current(); if (it.t === "text" || it.t === "note") { e.preventDefault(); startEdit(it.id); } }
    else if (e.key.startsWith("Arrow") && selSet.size) {
      e.preventDefault();
      const step = e.shiftKey ? 10 : 2;
      const dx = e.key === "ArrowLeft" ? -step : e.key === "ArrowRight" ? step : 0, dy = e.key === "ArrowUp" ? -step : e.key === "ArrowDown" ? step : 0;
      checkpoint();
      selItems().forEach((it) => translate(it, clone(it), dx, dy));
      save(); draw();
    }
    else {
      const map = { v: "select", p: "pen", t: "text", n: "note", r: "rect", l: "line" };
      if (map[k]) { e.preventDefault(); setTool(map[k]); }
    }
  });
  document.addEventListener("copy", (e) => {
    if (!active() || editing || !selSet.size) return;
    const list = selItems().map(clone);
    clip = { items: list, text: list.map((i) => i.text || "").filter(Boolean).join("\n") };
    e.preventDefault();
    e.clipboardData.setData("text/plain", clip.text);
    e.clipboardData.setData("application/x-yeb-board", JSON.stringify(list));
  });
  document.addEventListener("paste", (e) => {
    if (!active() || editing) return;
    const file = imageFrom(e.clipboardData);
    e.preventDefault();
    if (file) { addImages([file]); return; }
    const text = e.clipboardData.getData("text/plain");
    let mine = null;
    try { mine = JSON.parse(e.clipboardData.getData("application/x-yeb-board") || "null"); } catch (x) {}
    if (!mine && clip && text === clip.text) mine = clip.items;
    if (mine) { duplicate([].concat(mine), 40); return; }
    if (!text.trim()) return;
    const before = snap();
    const it = { id: uid(), t: "text", x: 80, y: 80, w: 600, text: text.trim(), color, size: "s" };
    items().push(it); selectOnly(it.id); checkpoint(before); save(); draw();
  });

  // ——— PDF (made in the browser: one image per page) ———
  // Rich text → tokens {s, px, color} and line breaks, like the browser shows them
  function tokensOf(it, basePx, baseColor) {
    const out = [], box = document.createElement("div");
    box.innerHTML = it.html !== undefined ? it.html : plainHTML(it.text);
    const lastBr = () => !out.length || out[out.length - 1].br;
    const walk = (node, st) => node.childNodes.forEach((n) => {
      if (n.nodeType === 3) { if (n.nodeValue) out.push({ s: n.nodeValue, ...st }); return; }
      if (n.nodeName === "BR") { out.push({ br: true }); return; }
      if (n.nodeType !== 1) return;
      const block = n.nodeName === "DIV" || n.nodeName === "P";
      if (block && !lastBr()) out.push({ br: true });
      walk(n, { px: n.style.fontSize ? parseFloat(n.style.fontSize) : st.px, color: n.style.color || st.color });
      if (block && !lastBr()) out.push({ br: true });
    });
    walk(box, { px: basePx, color: baseColor });
    while (out.length && out[out.length - 1].br) out.pop();
    return out;
  }
  function drawRich(ctx, it, x, y, maxW) {
    const basePx = sizeOf(it, it.size || "m"), weight = it.size === "l" ? 700 : 500, fam = it.size === "l" ? HEAD : BODY;
    const font = (px) => `${weight} ${px}px ${fam}`;
    const lines = [{ runs: [], w: 0, px: 0 }];
    const nl = () => lines.push({ runs: [], w: 0, px: 0 });
    const add = (str, tk) => {
      ctx.font = font(tk.px);
      const L = lines[lines.length - 1], w = ctx.measureText(str).width, space = /^\s+$/.test(str);
      if (space && !L.runs.length && lines.length > 1) return;
      if (!space && L.w + w > maxW && L.runs.length) { nl(); return add(str, tk); }
      if (!space && w > maxW) {   // a word longer than the box breaks by letters
        let part = "";
        for (const ch of str) { if (ctx.measureText(part + ch).width > maxW && part) { add(part, tk); nl(); part = ch; } else part += ch; }
        if (part) add(part, tk);
        return;
      }
      L.runs.push({ s: str, x: L.w, px: tk.px, color: tk.color }); L.w += w; L.px = Math.max(L.px, tk.px);
    };
    tokensOf(it, basePx, it.t === "note" ? it.color || NOTE_INK : it.color).forEach((tk) => {
      if (tk.br) { nl(); return; }
      tk.s.split(/(\s+)/).forEach((p) => p && add(p, tk));
    });
    ctx.textBaseline = "alphabetic";
    let top = y;
    lines.forEach((L) => {
      const px = L.px || basePx, lh = px * 1.3, base = top + (lh - px) / 2 + px * 0.84;
      L.runs.forEach((r) => { ctx.font = font(r.px); ctx.fillStyle = r.color; ctx.fillText(r.s, x + r.x, base); });
      top += lh;
    });
  }
  function roundRect(ctx, x, y, w, h, r) {
    r = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  const loadImg = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
  async function pageCanvas(list, k) {
    const c = document.createElement("canvas");
    c.width = W * k; c.height = H * k;
    const ctx = c.getContext("2d");
    ctx.scale(k, k);
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, W, H);
    for (const it of list) {
      ctx.save();
      if (it.t === "rect") {
        roundRect(ctx, it.x + 2, it.y + 2, it.w - 4, it.h - 4, 16);
        if (it.fill !== "none") { ctx.fillStyle = fillFor(it); ctx.fill(); }
        ctx.lineWidth = 4; ctx.strokeStyle = it.color; ctx.stroke();
      } else if (it.t === "line" || it.t === "pen") {
        ctx.lineWidth = WIDTHS[it.w] || 4; ctx.strokeStyle = it.color; ctx.lineCap = "round"; ctx.lineJoin = "round";
        ctx.beginPath();
        const pts = it.t === "line" ? [[it.x1, it.y1], [it.x2, it.y2]] : it.pts;
        pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
        ctx.stroke();
        if (it.t === "line" && it.arrow) {
          const h = arrowHead(it);
          ctx.beginPath(); h.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
          ctx.fillStyle = it.color; ctx.lineWidth = (WIDTHS[it.w] || 4) / 2; ctx.fill(); ctx.stroke();
        }
      } else if (it.t === "img") {
        const img = await loadImg(doc.assets[it.src]);
        if (img) ctx.drawImage(img, it.x, it.y, it.w, it.h);
      } else if (it.t === "note") {
        ctx.shadowColor = "rgba(0,0,0,.16)"; ctx.shadowBlur = 16; ctx.shadowOffsetY = 6;
        roundRect(ctx, it.x, it.y, it.w, it.h, 6); ctx.fillStyle = it.bg; ctx.fill();
        ctx.shadowColor = "transparent";
        ctx.clip();
        drawRich(ctx, it, it.x + 18, it.y + 16, it.w - 36);
      } else if (it.t === "text") {
        drawRich(ctx, it, it.x + 6, it.y + 4, it.w - 12);
      }
      ctx.restore();
    }
    return c;
  }
  async function makePdf(pages) {
    const enc = new TextEncoder(), chunks = [], offs = [];
    let len = 0;
    const put = (x) => { const b = typeof x === "string" ? enc.encode(x) : x; chunks.push(b); len += b.length; };
    const obj = (id, ...parts) => { offs[id] = len; put(`${id} 0 obj\n`); parts.forEach(put); put("\nendobj\n"); };
    const PW = 841.89, PH = 595.28, n = pages.length;
    put("%PDF-1.4\n%âãÏÓ\n");
    obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
    obj(2, `<< /Type /Pages /Count ${n} /Kids [${pages.map((_, i) => `${3 + i * 3} 0 R`).join(" ")}] >>`);
    pages.forEach((pg, i) => {
      const id = 3 + i * 3, content = `q ${PW} 0 0 ${PH} 0 0 cm /Im0 Do Q`;
      obj(id, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PW} ${PH}] /Resources << /XObject << /Im0 ${id + 2} 0 R >> >> /Contents ${id + 1} 0 R >>`);
      obj(id + 1, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
      obj(id + 2, `<< /Type /XObject /Subtype /Image /Width ${pg.w} /Height ${pg.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${pg.bytes.length} >>\nstream\n`, pg.bytes, "\nendstream");
    });
    const total = 3 + n * 3, xref = len;
    put(`xref\n0 ${total}\n0000000000 65535 f \n`);
    for (let i = 1; i < total; i++) put(`${String(offs[i]).padStart(10, "0")} 00000 n \n`);
    put(`trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);
    return new Blob(chunks, { type: "application/pdf" });
  }
  let exporting = false;
  async function exportPdf() {
    if (exporting) return;
    exporting = true; endEdit(true);
    flash(tx("making"));
    try {
      if (document.fonts) await Promise.all([document.fonts.load(`500 24px ${BODY}`), document.fonts.load(`700 48px ${HEAD}`)]).catch(() => {});
      const pages = [];
      for (const p of doc.pages) {
        const c = await pageCanvas(p.items, 2);
        const blob = await new Promise((r) => c.toBlob(r, "image/jpeg", 0.92));
        pages.push({ w: c.width, h: c.height, bytes: new Uint8Array(await blob.arrayBuffer()) });
      }
      const pdf = await makePdf(pages);
      const d = new Date(), day = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      const name = `${(doc.title || tx("defTitle")).replace(/[\\/:*?"<>|]+/g, "").trim() || tx("defTitle")} ${day}.pdf`;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(pdf); a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 30000);
    } finally { exporting = false; draw(); }
  }

  // Small message at the bottom of the board
  let flashTimer;
  function flash(msg) {
    let el = root.querySelector(".bd-flash");
    if (!el) { el = document.createElement("div"); el.className = "bd-flash"; stage.appendChild(el); }
    el.textContent = msg; el.classList.add("show");
    clearTimeout(flashTimer); flashTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  // ——— Floating window ———
  let geo = { big: false };
  try { geo = Object.assign(geo, JSON.parse(localStorage.getItem(WIN_KEY) || "{}")); } catch (e) {}
  const vw = () => document.documentElement.clientWidth, vh = () => window.innerHeight;
  function defaultGeo() {
    if (vw() < 640) { const h = Math.round(vh() * 0.56); return { x: 8, y: vh() - h - 84, w: vw() - 16, h }; }
    const w = Math.min(640, vw() - 32), h = Math.min(480, Math.round(vh() * 0.62));
    return { x: vw() - w - 20, y: vh() - h - 92, w, h };
  }
  function bigGeo() { return { x: Math.round(vw() * 0.04), y: Math.round(vh() * 0.05), w: Math.round(vw() * 0.92), h: Math.round(vh() * 0.88) }; }
  function applyGeo() {
    let g = geo.big ? bigGeo() : (geo.small && geo.small.w ? geo.small : defaultGeo());
    const w = Math.min(Math.max(300, g.w), vw() - 8), h = Math.min(Math.max(260, g.h), vh() - 16);
    const x = Math.min(Math.max(4, g.x), vw() - w - 4), y = Math.min(Math.max(8, g.y), vh() - h - 8);
    Object.assign(win.style, { left: x + "px", top: y + "px", width: w + "px", height: h + "px" });
  }
  const saveGeo = () => { try { localStorage.setItem(WIN_KEY, JSON.stringify(geo)); } catch (e) {} };
  function openWin() {
    if (!API.enabled) return;
    win.hidden = false; winBody.appendChild(root); applyGeo(); fab.classList.add("open");
    fab.setAttribute("aria-expanded", "true");
    requestAnimationFrame(fit); focused = true;
  }
  function hideWin() {
    endEdit(true);
    win.hidden = true; fab.classList.remove("open"); fab.setAttribute("aria-expanded", "false");
    focused = false;
  }
  fab.addEventListener("click", () => (win.hidden ? openWin() : hideWin()));
  win.querySelector(".bw-head").addEventListener("click", (e) => {
    const b = e.target.closest("[data-w]");
    if (!b) return;
    if (b.dataset.w === "hide") hideWin();
    else if (b.dataset.w === "size") { geo.big = !geo.big; saveGeo(); applyGeo(); renderLabels(); }
    else if (b.dataset.w === "page" && API.openPage) { hideWin(); API.openPage(); }
  });
  // Move it by the title bar, resize it by the corners
  let wdrag = null;
  win.addEventListener("pointerdown", (e) => {
    const rz = e.target.closest("[data-rz]"), head = e.target.closest(".bw-head");
    if (!rz && (!head || e.target.closest("button"))) return;
    e.preventDefault();
    win.setPointerCapture(e.pointerId);
    const r = win.getBoundingClientRect();
    wdrag = { rz: rz && rz.dataset.rz, sx: e.clientX, sy: e.clientY, r };
  });
  win.addEventListener("pointermove", (e) => {
    if (!wdrag) return;
    const dx = e.clientX - wdrag.sx, dy = e.clientY - wdrag.sy, r = wdrag.r;
    let g;
    if (!wdrag.rz) g = { x: r.left + dx, y: r.top + dy, w: r.width, h: r.height };
    else if (wdrag.rz === "se") g = { x: r.left, y: r.top, w: r.width + dx, h: r.height + dy };
    else g = { x: r.left + dx, y: r.top + dy, w: r.width - dx, h: r.height - dy };
    if (wdrag.rz === "nw") { g.w = Math.max(300, g.w); g.h = Math.max(260, g.h); g.x = r.right - g.w; g.y = r.bottom - g.h; }
    geo.big = false; geo.small = g; applyGeo();
  });
  const endWdrag = () => { if (wdrag) { wdrag = null; const r = win.getBoundingClientRect(); geo.small = { x: r.left, y: r.top, w: r.width, h: r.height }; saveGeo(); renderLabels(); } };
  win.addEventListener("pointerup", endWdrag);
  win.addEventListener("pointercancel", endWdrag);
  addEventListener("resize", () => { if (!win.hidden) applyGeo(); });

  // ——— Hooks used by app.js ———
  let onPage = false;
  API.pageMode = (on) => {
    onPage = on;
    fab.hidden = on;
    if (on) hideWin();
    else if (root.parentNode && root.parentNode !== winBody) root.remove();
  };
  // On its own page the board reaches the bottom of the window
  function fitHost() {
    if (!pageHost || !pageHost.isConnected) return;
    const top = pageHost.getBoundingClientRect().top + window.scrollY;
    pageHost.style.height = Math.max(380, window.innerHeight - top - 6) + "px";
  }
  addEventListener("resize", fitHost);
  API.mountPage = (host) => {
    if (!host) return;
    pageHost = host;
    host.appendChild(root);
    fitHost();
    requestAnimationFrame(() => { fitHost(); fit(); });
  };

  document.addEventListener("yeb:lang", renderLabels);
  renderLabels();
  draw();
})();
