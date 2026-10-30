(function () {
  const { sections, channels } = window.YEB_DATA;
  // Topic groups (data/groups.js) set the order; a topic missing from every group goes last
  const GROUPS = window.YEB_EX_GROUPS || [];
  const groupRank = (id) => { const i = GROUPS.findIndex((g) => g.topics.includes(id)); return i < 0 ? GROUPS.length : i; };
  const EXERCISES = (window.YEB_EXERCISES || [])
    .map((x, i) => ({ x, i }))
    .sort((a, b) => groupRank(a.x.id) - groupRank(b.x.id) || (GROUPS[groupRank(a.x.id)] ? GROUPS[groupRank(a.x.id)].topics.indexOf(a.x.id) - GROUPS[groupRank(b.x.id)].topics.indexOf(b.x.id) : a.i - b.i))
    .map((o) => o.x);
  // Readings reuse the exercise engine: comprehension + vocabulary-in-context sections
  const READINGS = (window.YEB_READINGS || []).map((r) => ({
    ...r,
    sections: [{ kind: "comprehension", items: r.comprehension }, ...(r.practice || [{ kind: "vocab", items: r.vocabulary }])]
  }));

  const EN = window.YEB_EN || { sections: {}, channels: {}, exercises: {} };
  const t = window.YEB_I18N ? window.YEB_I18N.t : (k) => k;
  const isEN = () => window.YEB_I18N && window.YEB_I18N.lang === "en";

  // Translated content (falls back to the original Spanish when a translation is missing)
  const secT = (s) => (isEN() && EN.sections[s.id]) || {};
  const exT = (x) => (isEN() && EN.exercises[x.id]) || null;
  const exSecT = (x, si) => { const e = exT(x); return (e && e.sections[si]) || {}; };
  const itemT = (x, si, ii) => { const sec = exSecT(x, si); return (sec.items && sec.items[ii]) || {}; };
  const label = (tr, value) => (tr.labels && tr.labels[value]) || value;
  // Each logged-in student has their own saved progress; with Supabase it also syncs between devices
  const CLOUD = window.YEB_CLOUD;
  const student = CLOUD && CLOUD.student;
  const syncing = !!(student && CLOUD.enabled);
  const STORE = student ? `yeb-state:${student.id}` : "yeb-state";

  const svg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const TOPIC_ICONS = {
    aprender: svg("M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"),
    pronunciacion: svg("M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3"),
    shadowing: svg("M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"),
    vocabulario: svg("M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"),
    conversacion: svg("M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 9h8M8 13h5"),
    noticias: svg("M4 4h13v16H6a2 2 0 0 1-2-2zM17 8h3v10a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h3"),
    crecimiento: svg("M12 3v1M12 20v1M4.2 4.2l.7.7M19.1 19.1l.7.7M3 12h1M20 12h1M4.2 19.8l.7-.7M19.1 4.9l.7-.7M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"),
    ted: svg("M3 5h18v11H3zM8 21h8M12 16v5"),
    negocios: svg("M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"),
    curiosidad: svg("M9 2h6M10 2v6L4 19a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 19L14 8V2M7 15h10"),
    examenes: svg("M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"),
    guardados: svg("M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.2 0 3.6 1.2 5.3 3.1 1.7-1.9 3.1-3.1 5.3-3.1 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"),
    ejercicio: svg("M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"),
    entretenimiento: svg("M2 7h20v13H2zM7 3l5 4 5-4"),
    grupos: svg("M4 5h16M4 12h16M4 19h16"),
    lectura: svg("M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z")
  };
  const ICONS = {
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    sp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5 15.9a.7.7 0 0 1-1 .2c-2.7-1.6-6-2-10-1.1a.7.7 0 1 1-.3-1.4c4.3-1 8-.6 11 1.3.3.2.4.7.3 1zm1.4-3a.9.9 0 0 1-1.2.3c-3-1.9-7.7-2.4-11.3-1.3a.9.9 0 1 1-.5-1.7c4.1-1.2 9.3-.6 12.7 1.5.4.3.5.8.3 1.2zm.1-3.2C14.9 8.6 9 8.4 5.6 9.4a1 1 0 1 1-.6-2c3.9-1.2 10.4-1 14.5 1.5a1 1 0 0 1-1 1.8z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l15 8-15 8z"/></svg>',
    speaker: svg("M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"),
    flame: svg("M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4.1 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"),
    check: svg("M5 12.5l4.5 4.5L19 7.5")
  };

  // ——— State: remembered per browser; the page works without storage too ———
  const state = { mode: "practicar", topic: sections[0].id, exTopic: EXERCISES[0] && EXERCISES[0].id, readTopic: READINGS[0] && READINGS[0].id, favs: [], answers: {} };
  try { Object.assign(state, JSON.parse(localStorage.getItem(STORE) || "{}")); } catch (e) {}
  if (!state.answers || typeof state.answers !== "object") state.answers = {};
  if (!Array.isArray(state.favs)) state.favs = [];
  // One-time move to the new default reading (Steve Jobs), for students who already had the old default saved
  if (state.readDefaultV !== 2) { state.readTopic = READINGS[0] && READINGS[0].id; state.readDefaultV = 2; }
  // Teacher-requested reset (assets/accounts.js → reset: "id"): clears this student's progress once, on any device
  const ACC = student && (window.YEB_ACCOUNTS || []).find((a) => a.user === student.id);
  if (ACC && ACC.reset && state.resetDone !== ACC.reset) {
    Object.assign(state, { answers: {}, daily: {}, last: null, resetDone: ACC.reset });
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
  }
  const writeLocal = () => { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {} };

  // ——— Cloud sync (only with Supabase configured) ———
  // dirty = local changes not yet saved in the cloud; syncedAt = server time of the last sync
  const progressOnly = () => { const { dirty, syncedAt, ...rest } = state; return rest; };
  let pushTimer = null, pushing = false;
  async function push(keepalive) {
    clearTimeout(pushTimer);
    if (!syncing || !state.dirty || (pushing && !keepalive)) return;
    pushing = true;
    try {
      const at = await CLOUD.push(progressOnly(), keepalive);
      if (at === null) return CLOUD.logout();          // the key was changed or removed
      state.syncedAt = at; state.dirty = false; writeLocal();
    } catch (e) { /* offline: stays dirty and is retried on the next change or visit */ }
    pushing = false;
  }
  async function pull() {
    try {
      const remote = await CLOUD.pull();
      if (!remote) return CLOUD.logout();
      const newer = remote.updated_at && (!state.syncedAt || Date.parse(remote.updated_at) > Date.parse(state.syncedAt));
      if (newer) {
        // Progress saved from another device is newer: use it
        Object.assign(state, remote.progress || {}, { syncedAt: remote.updated_at, dirty: false });
        if (!Array.isArray(state.favs)) state.favs = [];
        if (!state.answers || typeof state.answers !== "object") state.answers = {};
        writeLocal(); render();
      } else if (state.dirty) push();
    } catch (e) { /* offline: keep working with the local copy */ }
  }
  if (syncing) {
    addEventListener("pagehide", () => push(true));
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") push(true); else pull(); });
  }

  const save = () => {
    if (syncing) { state.dirty = true; clearTimeout(pushTimer); pushTimer = setTimeout(push, 1200); }
    writeLocal();
  };

  // ——— Study activity: time, answers and days studied (saved with each student's progress) ———
  // state.daily = { "2026-10-30": { ms: active time, n: answers, ok: correct answers } }
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  if (!state.daily || typeof state.daily !== "object") state.daily = {};
  const today = () => (state.daily[dayKey()] = state.daily[dayKey()] || { ms: 0, n: 0, ok: 0 });
  // A day counts when the student answered something or studied at least a minute
  const studied = (k) => { const d = state.daily[k]; return !!d && (d.n > 0 || d.ms >= 60000); };
  function streak() {
    const d = new Date();
    if (!studied(dayKey(d))) d.setDate(d.getDate() - 1);   // today isn't over: yesterday keeps the streak alive
    let n = 0;
    while (studied(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function bestStreak() {
    let best = 0, run = 0, prev = null;
    Object.keys(state.daily).filter(studied).sort().forEach((k) => {
      const d = new Date(`${k}T12:00`);
      run = prev && Math.round((d - prev) / 864e5) === 1 ? run + 1 : 1;
      best = Math.max(best, run); prev = d;
    });
    return best;
  }
  const totalMs = () => Object.values(state.daily).reduce((n, d) => n + (d.ms || 0), 0);
  // Only active time counts: the tab is visible and the student touched, typed or scrolled in the last 2 minutes
  let sessionMs = 0, lastInput = Date.now(), lastTick = Date.now(), unsavedMs = 0;
  ["pointerdown", "keydown", "scroll", "touchstart"].forEach((ev) => addEventListener(ev, () => { lastInput = Date.now(); }, { passive: true, capture: true }));
  setInterval(() => {
    const now = Date.now(), dt = now - lastTick;
    lastTick = now;
    if (!student || document.visibilityState !== "visible" || now - lastInput > 120000 || dt > 30000) return;
    const wasStudied = studied(dayKey());
    sessionMs += dt; today().ms += dt; unsavedMs += dt;
    if (unsavedMs >= 30000) { unsavedMs = 0; save(); }
    updateClock();
    if (!wasStudied && studied(dayKey())) { renderStreak(); renderHello(); }
  }, 5000);

  // Links: #shadowing (listening), #practicar/numeros (exercises) or #leer/r-miami (a reading)
  function readHash(hash = location.hash) {
    const [a, b] = decodeURIComponent(hash.replace(/^#/, "")).split("/");
    if (!a || a === "inicio") {
      state.mode = "inicio";
    } else if (a === "practicar") {
      state.mode = "practicar";
      if (EXERCISES.some((x) => x.id === b)) state.exTopic = b;
    } else if (a === "progreso") {
      state.mode = "progreso";
    } else if (a === "leer") {
      state.mode = "leer";
      if (READINGS.some((x) => x.id === b)) state.readTopic = b;
    } else if (sections.some((s) => s.id === a)) {
      state.mode = "escuchar";
      state.topic = a;
    }
  }
  function writeHash() {
    const h = state.mode === "inicio" ? "" : state.mode === "progreso" ? "#progreso" : state.mode === "practicar" ? `#practicar/${state.exTopic}` : state.mode === "leer" ? `#leer/${state.readTopic}` : state.topic === "guardados" ? "" : `#${state.topic}`;
    history.replaceState(null, "", h || location.pathname);
    // Remember the last place they studied, to offer it on the home screen
    if (h && state.mode !== "progreso" && state.last !== h) { state.last = h; save(); }
  }
  readHash();

  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = (name) => {
    const words = name.replace(/^The /, "").split(/[\s–·-]+/).filter((w) => /^[A-Za-z]/.test(w));
    return (words.length > 1 ? words[0][0] + words[1][0] : (words[0] || name).slice(0, 2)).toUpperCase();
  };
  const levelText = ([a, b]) => (a === b ? a : `${a}–${b}`);

  // ——— Mode switch: Escuchar / Practicar ———
  function renderModes() {
    document.querySelectorAll(".mode-btn").forEach((b) => b.setAttribute("aria-selected", b.dataset.mode === state.mode));
    $("#topics-title").textContent = state.mode === "practicar" ? t("topicsPractice") : state.mode === "leer" ? t("topicsRead") : t("topicsListen");
    // The progress page has no topics row
    const noTopics = state.mode === "progreso" || state.mode === "inicio";
    $(".topics-label").style.display = $(".topics-wrap").style.display = noTopics ? "none" : "";
    // Home: the four big cards replace the tabs
    $("#modes").style.display = state.mode === "inicio" ? "none" : "";
    document.documentElement.classList.toggle("on-home", state.mode === "inicio");
  }
  $("#modes").addEventListener("click", (e) => {
    const b = e.target.closest(".mode-btn");
    if (!b || b.dataset.mode === state.mode) return;
    state.mode = b.dataset.mode;
    save(); writeHash(); render();
  });

  // ——— Topics row ———
  function renderTopics() {
    if (state.mode === "progreso" || state.mode === "inicio") return;
    let tiles;
    if (state.mode === "practicar") {
      // Only the current topic, plus a button that opens every topic grouped like the book
      const g = topicGroup(state.exTopic);
      tiles = EXERCISES.filter((x) => !GROUPS.length || x.id === state.exTopic).map((x) => {
        const p = progress(x);
        return { id: x.id, label: topicTitle(x), sub: `${g ? `${pickLang(g.title)} · ` : ""}${x.level} · ${p.done ? `${p.correct}/${p.total}` : `${p.total} ${t("exercises")}`}`, icon: "ejercicio", selected: true };
      });
      if (GROUPS.length) tiles.unshift({ id: "__all", label: t("allTopics"), sub: t("topicsCount")(EXERCISES.length), icon: "grupos", selected: false, all: true });
    } else if (state.mode === "leer") {
      tiles = READINGS.map((x) => {
        const p = progress(x);
        return { id: x.id, label: x.title, sub: `${t("tiers")[x.tier]} · ${x.level} · ${p.done ? `${p.correct}/${p.total}` : t("minRead")(x.minutes)}`, icon: "lectura", selected: state.readTopic === x.id };
      });
    } else {
      tiles = sections.map((s) => {
        const n = channels.filter((c) => c.section === s.id).length;
        const lib = s.library && window[s.library];
        return { id: s.id, label: secT(s).short || s.short || s.title, sub: lib ? t("videosCount")(lib.length) : `${n} ${n === 1 ? t("channel") : t("channels")}`, icon: s.id, selected: state.topic === s.id };
      });
      if (state.favs.length) tiles.push({ id: "guardados", label: t("saved"), sub: `${state.favs.length} ${state.favs.length === 1 ? t("channel") : t("channels")}`, icon: "guardados", selected: state.topic === "guardados" });
    }
    $("#topics").innerHTML = tiles.map((t) => `
      <button type="button" class="topic${t.all ? " all-topics" : ""}" ${t.all ? 'aria-haspopup="dialog"' : 'role="tab"'} aria-selected="${t.selected}" data-topic="${t.id}">
        <span class="topic-icon">${TOPIC_ICONS[t.icon] || ""}</span>
        <span class="topic-text"><strong>${esc(t.label)}</strong><small>${esc(t.sub)}</small></span>
      </button>`).join("");
    // Keep the selected topic visible in the swipeable strip (mobile) without moving the page
    const box = $("#topics"), sel = box.querySelector("[aria-selected=true]");
    if (sel && box.scrollWidth > box.clientWidth) box.scrollLeft = sel.offsetLeft - box.offsetLeft - (box.clientWidth - sel.offsetWidth) / 2;
  }
  $("#topics").addEventListener("click", (e) => {
    const b = e.target.closest("button.topic");
    if (!b) return;
    if (b.dataset.topic === "__all") return openTopicSheet();
    if (state.mode === "practicar") state.exTopic = b.dataset.topic;
    else if (state.mode === "leer") state.readTopic = b.dataset.topic;
    else state.topic = b.dataset.topic;
    if (undoSnapshot) hideToast();
    save(); renderTopics(); renderPanel(); writeHash();
    $("#results").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ——— «All topics» sheet: every group with its topics and progress ———
  function topicGroup(id) { return GROUPS.find((g) => g.topics.includes(id)) || (GROUPS.length ? OTHER_GROUP : null); }
  const OTHER_GROUP = { id: "otros", title: { es: "Otros temas", en: "Other topics" }, topics: [] };
  const topicTitle = (x) => pickLang((exT(x) || x).title);
  function openTopicSheet() {
    let sheet = $("#topic-sheet");
    if (!sheet) {
      sheet = document.createElement("dialog");
      sheet.id = "topic-sheet"; sheet.className = "sheet";
      document.body.appendChild(sheet);
      sheet.addEventListener("click", (e) => {
        if (e.target === sheet || e.target.closest("[data-close]")) return sheet.close();
        const b = e.target.closest("[data-pick]");
        if (!b) return;
        state.exTopic = b.dataset.pick;
        if (undoSnapshot) hideToast();
        sheet.close();
        save(); renderTopics(); renderPanel(); writeHash();
        $("#results").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    const groups = [...GROUPS, OTHER_GROUP].map((g) => ({ g, list: EXERCISES.filter((x) => topicGroup(x.id) === g) })).filter((o) => o.list.length);
    sheet.innerHTML = `
      <div class="sheet-head"><h2>${esc(t("allTopics"))}</h2><button type="button" class="sheet-close" data-close aria-label="${esc(t("close"))}">✕</button></div>
      <div class="sheet-body">${groups.map(({ g, list }) => `
        <section class="sheet-group">
          <h3>${esc(pickLang(g.title))}${g.sub ? ` <small>${esc(pickLang(g.sub))}</small>` : ""}</h3>
          ${list.map((x) => {
            const p = progress(x), pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
            return `<button type="button" class="sheet-topic" data-pick="${x.id}" ${state.exTopic === x.id ? 'aria-current="true"' : ""}>
              <span class="st-main"><strong>${esc(topicTitle(x))}</strong><small>${esc(x.level)} · ${p.done ? `${p.correct}/${p.total} ✓` : `${p.total} ${t("exercises")}`}</small></span>
              <span class="st-bar" aria-hidden="true"><span style="width:${pct}%"></span></span>
            </button>`;
          }).join("")}
        </section>`).join("")}</div>`;
    sheet.showModal();
    const cur = sheet.querySelector("[aria-current]");
    if (cur) cur.scrollIntoView({ block: "center" });
  }

  // ——— Listening: channel cards ———
  function card(c) {
    const fav = state.favs.includes(c.name);
    const meta = [levelText(c.level), t("accents")[c.accent] || c.accent, t("formats")[c.format]].filter(Boolean).join(" · ");
    return `
      <article class="card">
        <div class="card-top">
          <div class="avatar" aria-hidden="true">${esc(initials(c.name))}</div>
          <div class="card-title">
            <h3>${esc(c.name)}</h3>
            <div class="meta">${esc(meta)}</div>
          </div>
          <button type="button" class="heart" data-fav="${esc(c.name)}" aria-pressed="${fav}" aria-label="${fav ? t("unsave") : t("save")}: ${esc(c.name)}">${TOPIC_ICONS.guardados}</button>
        </div>
        <p>${esc((isEN() && EN.channels[c.name]) || c.text)}</p>
        <div class="links">
          ${c.youtube ? `<a class="link-btn yt" href="${esc(c.youtube)}" target="_blank" rel="noopener">${ICONS.yt}YouTube</a>` : ""}
          ${c.spotify ? `<a class="link-btn sp" href="${esc(c.spotify)}" target="_blank" rel="noopener">${ICONS.sp}Spotify</a>` : ""}
        </div>
      </article>`;
  }

  function videoBlock(v, tr, tag) {
    tr = tr || {};
    return `
      <div class="pick">
        <div class="video">
          <button type="button" data-yt="${esc(v.id)}" data-start="${v.start || 0}" aria-label="${t("play")}: ${esc(tr.title || v.title)}">
            <img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" loading="lazy">
            <span class="play">${ICONS.play}</span>
          </button>
        </div>
        <div class="pick-body">
          <span class="pick-tag">${esc(tag || t("startVideo"))}</span>
          <h3>${esc(tr.title || v.title)}</h3>
          <div class="by">${esc(v.channel)}</div>
          <p>${esc(tr.tip || v.tip)}</p>
        </div>
      </div>`;
  }

  function renderListen() {
    if (state.topic === "guardados" && !state.favs.length) state.topic = sections[0].id;
    const isFavs = state.topic === "guardados";
    const sec = isFavs ? null : sections.find((s) => s.id === state.topic) || sections[0];
    const list = isFavs ? channels.filter((c) => state.favs.includes(c.name)) : channels.filter((c) => c.section === sec.id);
    return `
      <div class="panel-head">
        <h2>${esc(isFavs ? t("saved") : secT(sec).title || sec.title)}</h2>
        <p>${esc(isFavs ? t("savedText") : secT(sec).text || sec.text)}</p>
      </div>
      ${!isFavs && sec.video ? videoBlock(sec.video, secT(sec).video) : ""}
      ${!isFavs && sec.videos ? videoGallery(sec) : ""}
      ${!isFavs && sec.library ? libraryHTML(sec) : ""}
      <div class="cards">${list.map(card).join("")}</div>`;
  }
  // ——— Shadowing library: every video, filtered by type, 24 at a time ———
  const LIB_CATS = ["all", "series", "animacion", "famosos", "discursos"];
  let libCat = "all", libShown = 24;
  function libraryHTML(sec) {
    const all = window[sec.library] || [];
    const list = libCat === "all" ? all : all.filter((v) => v.cat === libCat);
    const chips = LIB_CATS.map((c) => {
      const n = c === "all" ? all.length : all.filter((v) => v.cat === c).length;
      return `<button type="button" class="lib-chip" data-action="lib-cat" data-cat="${c}" aria-pressed="${libCat === c}">${esc(t("libCats")[c])} <small>${n}</small></button>`;
    }).join("");
    const cards = list.slice(0, libShown).map((v) => `
      <article class="vcard">
        <div class="video">
          <button type="button" data-yt="${esc(v.id)}" data-start="0" aria-label="${t("play")}: ${esc(v.title)}">
            <img src="https://i.ytimg.com/vi/${esc(v.id)}/mqdefault.jpg" alt="" loading="lazy">
            <span class="play">${ICONS.play}</span>
          </button>
        </div>
        <div class="vc-body"><strong>${esc(v.title)}</strong><small>${esc(t("libCats")[v.cat])} · ${esc(v.channel)}</small></div>
      </article>`).join("");
    const lists = (sec.playlists || []).map((l) => `
      <a class="plist" href="https://www.youtube.com/playlist?list=${esc(l.list)}" target="_blank" rel="noopener">
        ${ICONS.yt}<span><strong>${esc(l.title)}</strong><small>${esc(l.channel)} · ${esc(t("videosCount")(l.count))}</small></span>
      </a>`).join("");
    return `
      <section class="library" id="library">
        <h3 class="vg-title">${esc(t("libTitle"))}</h3>
        <p class="vg-text">${esc(t("libHelp"))}</p>
        <div class="lib-filters" role="group" aria-label="${esc(t("libFilter"))}">${chips}</div>
        <div class="vgrid">${cards}</div>
        ${list.length > libShown ? `<button type="button" class="lib-more" data-action="lib-more">${esc(t("libMore")(Math.min(24, list.length - libShown), list.length - libShown))}</button>` : ""}
        ${lists ? `<h3 class="vg-title">${esc(t("fullPlaylists"))}</h3><div class="plists">${lists}</div>` : ""}
      </section>`;
  }

  // More videos to play right here, plus links to full YouTube playlists
  function videoGallery(sec) {
    const vcard = (v) => `
      <article class="vcard">
        <div class="video">
          <button type="button" data-yt="${esc(v.id)}" data-start="${v.start || 0}" aria-label="${t("play")}: ${esc(v.title)}">
            <img src="https://i.ytimg.com/vi/${esc(v.id)}/mqdefault.jpg" alt="" loading="lazy">
            <span class="play">${ICONS.play}</span>
          </button>
        </div>
        <div class="vc-body">
          <strong>${esc(v.title)}</strong>
          <small>${esc([v.channel, v.level].filter(Boolean).join(" · "))}</small>
        </div>
      </article>`;
    const groups = sec.videos.map((g) => `
      <h3 class="vg-title">${esc(pickLang(g.title))}</h3>
      ${g.text ? `<p class="vg-text">${esc(pickLang(g.text))}</p>` : ""}
      <div class="vgrid">${g.items.map(vcard).join("")}</div>`).join("");
    const lists = (sec.playlists || []).map((l) => `
      <a class="plist" href="https://www.youtube.com/playlist?list=${esc(l.list)}" target="_blank" rel="noopener">
        ${ICONS.yt}<span><strong>${esc(l.title)}</strong><small>${esc(l.channel)} · ${esc(t("videosCount")(l.count))}</small></span>
      </a>`).join("");
    return `${groups}${lists ? `<h3 class="vg-title">${esc(t("fullPlaylists"))}</h3><div class="plists">${lists}</div>` : ""}<h3 class="vg-title">${esc(t("channelsTitle"))}</h3>`;
  }

  // ——— Practice: exercises ———
  const normalize = (s) => String(s).toLowerCase().replace(/[‐-―-]/g, " ").replace(/[.,!?;:"'«»“”‘’()]/g, "").replace(/\s+/g, " ").trim();

  // Stable shuffle so options don't jump around between visits
  function seeded(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
    return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
  }
  function options(item) {
    const all = [item.a, ...item.o];
    // "Find the mistake": when every option is a piece of the quoted sentence, keep reading order
    const plain = (item.quote || "").replace(/\[\[|\]\]/g, "");
    const pos = (o) => plain.search(new RegExp(`(^|\\W)${o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=\\W|$)`));
    if (item.quote && all.every((o) => pos(o) >= 0)) return all.sort((x, y) => pos(x) - pos(y));
    const rnd = seeded(item.q + "|" + item.a + "|" + (item.quote || ""));
    for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; }
    return all;
  }

  // A final answer ({ v, ok, first? }). A first wrong try waiting for the second one is { v, pending: true }.
  function rawAnswer(x, si, ii) {
    const ans = (state.answers[x.id] || {})[`${si}-${ii}`];
    const item = x.sections[si] && x.sections[si].items[ii];
    if (!ans || !item) return null;
    if (item.type !== "write" && ![item.a, ...item.o].includes(ans.v)) return null;
    return ans;
  }
  function savedAnswer(x, si, ii) {
    const ans = rawAnswer(x, si, ii);
    return ans && !ans.pending ? ans : null;
  }
  // Second try before showing the answer (not when there are only two options: it would be a free answer)
  const allowsRetry = (item) => item.type === "write" || item.o.length >= 2;

  function progress(x) {
    const total = x.sections.reduce((n, s) => n + s.items.length, 0);
    const vals = x.sections.flatMap((s, si) => s.items.map((_, ii) => savedAnswer(x, si, ii))).filter(Boolean);
    return { total, done: vals.length, correct: vals.filter((v) => v.ok).length };
  }

  // ——— Listening inside exercises: each English option, and the full corrected sentence ———
  const SPANISHY = /[áéíóúñ¿¡«»]|sin artículo|\b(una?|el|la|los|las|del?|mis?|que|con|por|para|muy|es|está|pantalones|pantaletas|ropa|correcta|incorrecta)\b/i;
  // Options that have an English label (data/en.js or item.en) are Spanish words: no speaker for them
  const enLabels = (x, si, ii) => { const it = x.sections[si].items[ii]; const ov = ((EN.exercises[x.id] || {}).sections || [])[si]; return (it.en && it.en.labels) || (ov && ov.items && ov.items[ii] && ov.items[ii].labels) || {}; };
  const englishOption = (o, labels) => !SPANISHY.test(o) && !(labels[o] && labels[o] !== o) && /[a-z]/i.test(o);
  const sayText = (s) => s.replace(/\s+\/\s+/g, ", ");   // two gaps «she / her» → «she, her»
  // Every English word of a sentence can be tapped (or hovered) to hear it. Spanish hints in (…) are left alone.
  function sayWords(text) {
    return text.split(/(\([^)]*\))/).map((seg, i) => {
      if (i % 2 || SPANISHY.test(seg)) return esc(seg);
      return esc(seg).replace(/[A-Za-z]+(?:['’][A-Za-z]+)*/g, (w) => `<span class="sw" data-say="${w}">${w}</span>`);
    }).join("");
  }
  // Quote with [[highlight]]: words inside and outside the highlight can be heard
  function quoteHTML(quote) {
    const english = !SPANISHY.test(quote.replace(/\[\[|\]\]/g, ""));
    return quote.split(/(\[\[.+?\]\])/).map((seg) => {
      const m = /^\[\[(.+)\]\]$/.exec(seg);
      const inner = m ? m[1] : seg;
      const html = english ? sayWords(inner) : esc(inner);
      return m ? `<mark class="hl">${html}</mark>` : html;
    }).join("");
  }

  // The sentence with the right answer in it (null when there's no clean English sentence to read)
  function fullSentence(item, labels) {
    const strip = (q) => q.replace(/^\(\d+\)\s*/, "").replace(/\s*\([^)]*\)/g, "").trim();
    const correct = item.type === "write" ? item.a[0] : item.a;
    const english = (v) => !SPANISHY.test(v);
    const q = strip(item.q);
    if (/___/.test(q) && english(q.replace(/___/g, ""))) {
      const parts = correct.split(" / ").map((p) => (/^—/.test(p) ? "" : p));   // «— (no article)» leaves the gap empty
      let i = 0;
      return q.replace(/___/g, () => (parts.length > 1 ? parts[i++] || "" : parts[0])).replace(/\s+(['’])/g, "$1").replace(/\s{2,}/g, " ").trim();
    }
    if (item.quote) {
      // «Find the mistake»: the quote is the wrong sentence, so there's nothing correct to read
      const bare = item.quote.replace(/\[\[|\]\]/g, "");
      if ([item.a, ...(item.o || [])].every((o) => bare.includes(o))) return null;
      const plain = (repl) => item.quote.replace(/\[\[(.+?)\]\]/g, (m, w) => (repl === undefined ? w : repl)).replace(/^…|…$/g, "").trim();
      const fix = /«(.+?)»/.exec(correct);
      if (fix) return plain(fix[1]);                                   // story: «It should be “me”»
      if (correct === "Incorrecta") return null;                         // don't read a wrong sentence aloud
      if (correct === "Correcta" || correct === "Está bien") return plain();
      if (english(correct) && !labels[correct] && /^\[\[[\d$:/.,‑-]+(st|nd|rd|th)?\]\]|\[\[[A-Z][a-z]+ \d+(st|nd|rd|th)\]\]/.test(item.quote.match(/\[\[.+?\]\]/)?.[0] || "")) return plain(correct);
      return plain();
    }
    if (/oraci[oó]n correcta|correct sentence/i.test(item.q) && english(correct)) return correct;   // «Choose the correct sentence»
    return null;
  }

  function questionHTML(x, si, ii) {
    const item = x.sections[si].items[ii];
    const tr = (isEN() && item.en) || itemT(x, si, ii);
    const key = `${si}-${ii}`;
    const ans = savedAnswer(x, si, ii);
    const raw = rawAnswer(x, si, ii);
    const tried = raw && raw.pending ? raw.v : null;     // first wrong try, waiting for the second
    const isWrite = item.type === "write";
    const correct = isWrite ? item.a[0] : label(tr, item.a);
    // Why the chosen option is wrong. On the first try the right answer is hidden (___) so the hint doesn't give it away.
    const why = (v, hide) => {
      if (!item.w || !item.w[v]) return "";
      let text = pickLang(item.w[v]);
      if (hide) {
        const re = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const word = (a) => new RegExp(`(^|[^\\w'’])${re(a)}(?=[^\\w'’]|$)`, "gi");
        for (const a of (isWrite ? item.a : [label(tr, item.a)]).flatMap((x) => x.split(" / "))) {
          text = text.replace(new RegExp(`([→:]\\s*)${re(a)}(?=[\\s.,;)!?]|$)`, "gi"), "$1___");
          // «a» and «no» are also everyday words (Spanish, or the English article): if they still show, skip the hint
          if (/^(a|no)$/i.test(a)) { if (word(a).test(text)) return ""; }
          else text = text.replace(word(a), "$1___");
        }
      }
      return `<span class="why">${hide ? "" : `<b>${esc(label(tr, v))}</b> `}${esc(text)}</span>`;
    };
    // Several gaps (___ … ___) take the parts of an answer like "she / her" in order
    const parts = correct.split(" / ");
    let gap = 0;
    const qText = tr.q || item.q;
    // English prompts: every word is tappable; Spanish prompts stay plain
    const prompt = (SPANISHY.test(qText.replace(/\([^)]*\)/g, "")) ? esc(qText) : sayWords(qText)).replace(/^\((\d+)\)\s*/, '<span class="mark">$1</span>').replace(/___/g, () => {
      const fill = parts.length > 1 ? parts[gap] || "" : correct;
      gap++;
      return ans ? `<span class="blank filled">${esc(fill)}</span>` : `<span class="blank">______</span>`;
    });

    let body;
    if (isWrite) {
      body = `
        <form class="write" data-key="${key}" autocomplete="off">
          <input type="text" class="write-input" aria-label="${esc(t("yourAnswer"))}" placeholder="${esc(t("typeHere"))}" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="done" value="${ans ? esc(ans.v) : ""}" ${ans ? "disabled" : ""}>
          ${ans ? "" : `<button type="submit" class="check-btn">${esc(t("check"))}</button>`}
        </form>`;
    } else {
      const labels = enLabels(x, si, ii);
      body = `<div class="opts">${options(item).map((o) => {
        const sayable = englishOption(o, labels);
        let cls = "opt";
        if (ans) cls += o === item.a ? " right" : o === ans.v || o === ans.first ? " wrong" : " dim";
        else if (o === tried) cls += " wrong";
        // Once answered, the English options become «listen» buttons (no risk of answering by mistake)
        if (ans && sayable) return `<button type="button" class="${cls} done" data-say="${esc(sayText(o))}" aria-label="${esc(t("listenWord"))}: ${esc(label(tr, o))}">${esc(label(tr, o))}${ICONS.speaker}</button>`;
        return `<button type="button" class="${cls}" data-key="${key}" data-v="${esc(o)}" ${ans || o === tried ? "disabled" : ""}>${esc(label(tr, o))}</button>`;
      }).join("")}</div>`;
    }

    const sentence = ans ? fullSentence(item, enLabels(x, si, ii)) : null;
    const fb = ans ? `
      <div class="fb ${ans.ok ? "ok" : "bad"}" role="status">
        <strong>${ans.ok ? `${t("correct")}${ans.first ? ` <small>${esc(t("secondTry"))}</small>` : ""}` : `${t("answerIs")} ${esc(correct)}`}</strong>
        ${!ans.ok ? why(ans.v) : ""}
        <span>${esc(pickLang(tr.e || item.e))}</span>
        <button type="button" class="retry-one${ans.ok ? " again" : ""}" data-action="retry-one" data-key="${key}">↻ ${esc(ans.ok ? t("doAgain") : t("tryAgain"))}</button>
      </div>` : tried !== null ? `
      <div class="fb try" role="status">
        <strong>${esc(t("notThis")(isWrite ? tried : label(tr, tried)))}</strong>
        ${why(tried, true)}
        <span>${esc(t("tryOnceMore"))}</span>
      </div>` : "";

    return `
      <article class="q${ans ? (ans.ok ? " is-ok" : " is-bad") : tried !== null ? " is-try" : ""}" id="q-${key}">
        <span class="q-num">${ii + 1}</span>
        <div class="q-body">
          ${item.quote ? `<blockquote class="quote">${quoteHTML(item.find ? speechQuote(x, item.find) : tr.quote || item.quote)}</blockquote>` : ""}
          <p class="q-text">${prompt}${ans && sentence ? ` <button type="button" class="q-say" data-say="${esc(sayText(sentence))}" aria-label="${esc(t("listenSentence"))}" title="${esc(t("listenSentence"))}">${ICONS.speaker}</button>` : ""}</p>
          ${body}
          ${fb}
        </div>
      </article>`;
  }

  function storyMarkClass(x, si, n) {
    const ans = savedAnswer(x, si, n - 1);
    return "mark jump" + (ans ? (ans.ok ? " ok" : " bad") : "");
  }
  // Story with (n) jump marks; with a glossary (data/glossary/<topic id>.js) every word can be tapped.
  // Text is split at the marks, so a phrase never includes a marked word (no free answers).
  function storyHTML(x, si) {
    const G = glossary(x);
    const mark = (n) => `<button type="button" class="${storyMarkClass(x, si, +n)}" data-jump="${si}-${+n - 1}" aria-label="${n}">${n}</button>`;
    return x.sections[si].story.split(/\n\s*\n/).map((para) => {
      const chunks = para.split(/\((\d+)\)/).map((c, i) => (i % 2 ? c : tokenize(c)));
      markPhrases(G, chunks.filter((c) => typeof c === "object"));
      return `<p>${chunks.map((c) => (typeof c === "string" ? mark(c) : c.toks.map((tk) => esc(tk.sep) + wordHTML(G, tk)).join("") + esc(c.tail))).join("")}</p>`;
    }).join("");
  }

  function scoreHTML(x) {
    const p = progress(x);
    const pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    const wrong = p.done - p.correct;
    const text = p.done === p.total && p.total ? t("complete")(p.correct, p.total) : t("score")(p.correct, p.done, p.total);
    return `
      <div class="score-row">
        <div class="score-text">${text}</div>
        <div class="score-actions">
          ${wrong ? `<button type="button" class="score-btn primary" data-action="retry-wrong">↻ ${esc(t("retryWrong"))} (${wrong})</button>` : ""}
          ${p.done || x.sections.some((_, si) => sectionTouched(x, si)) ? `<button type="button" class="score-btn" data-action="start-over">↻ ${esc(t("startOver"))}</button>` : ""}
        </div>
      </div>
      <div class="score-bar" aria-hidden="true"><span style="width:${pct}%"></span></div>`;
  }

  const secTitle = (x, si) => exSecT(x, si).title || pickLang(x.sections[si].title) || t(KIND_TEXT[x.sections[si].kind][0]);
  // Chip in the sticky section menu: answered / total, green when the section is finished
  function chipCount(x, si) {
    const n = x.sections[si].items.length;
    const done = x.sections[si].items.filter((_, ii) => savedAnswer(x, si, ii)).length;
    return { text: `${done}/${n}`, done: done === n };
  }

  const sectionTouched = (x, si) => x.sections[si].items.some((_, ii) => rawAnswer(x, si, ii));
  function sectionCount(x, si) {
    const items = x.sections[si].items;
    const answered = items.map((_, ii) => savedAnswer(x, si, ii)).filter(Boolean);
    if (!answered.length) return "";
    return `${answered.filter((a) => a.ok).length}/${items.length} ✓`;
  }

  // Refresh everything that depends on the answers of the current topic, without re-rendering the page
  function refreshPractice(x) {
    $("#score").innerHTML = scoreHTML(x);
    x.sections.forEach((_, si) => {
      const el = document.getElementById(`sec-count-${si}`); if (el) el.textContent = sectionCount(x, si);
      const reset = document.querySelector(`.sec-reset[data-sec="${si}"]`); if (reset) reset.disabled = !sectionTouched(x, si);
      const chip = document.querySelector(`.sec-chip[data-sec="${si}"]`);
      if (chip) { const c = chipCount(x, si); chip.querySelector("small").textContent = c.text; chip.classList.toggle("done", c.done); }
    });
    renderTopics();
  }

  function renderPractice() {
    if (!EXERCISES.length) return `<div class="panel-head"><h2>${esc(t("exercisesTitle"))}</h2><p>${esc(t("soon"))}</p></div>`;
    const x = EXERCISES.find((t) => t.id === state.exTopic) || EXERCISES[0];
    state.exTopic = x.id;
    return `
      <div class="panel-head ex-head">
        <div>
          <span class="level-pill">${esc(x.level)}</span>
          <h2>${esc(topicTitle(x))}</h2>
          <p>${esc(t("practiceIntro"))}</p>
        </div>
      </div>
      ${exerciseBody(x)}`;
  }

  // Bilingual content written inline: { es, en } or ["es", "en"]
  const pickLang = (v) => (Array.isArray(v) ? v[isEN() ? 1 : 0] : v && typeof v === "object" ? v[isEN() ? "en" : "es"] : v);
  const KIND_TEXT = { comprehension: ["comprehension", "comprehensionInstr"], vocab: ["vocabInContext", "vocabInstr"] };
  function exerciseBody(x) {
    return `
      <div class="ex-sticky">
        <div class="score" id="score">${scoreHTML(x)}</div>
        ${secNavHTML(x)}
      </div>
      ${x.sections.map((s, si) => `
        <section class="ex-section${s.story ? " has-story" : ""}" id="sec-${si}">
          <h3>${esc(secTitle(x, si))} <span class="sec-count" id="sec-count-${si}">${sectionCount(x, si)}</span>
            <button type="button" class="sec-reset" data-action="reset-section" data-sec="${si}" ${sectionTouched(x, si) ? "" : "disabled"} title="${esc(t("resetSection"))}" aria-label="${esc(t("resetSection"))}: ${esc(secTitle(x, si))}">↻ <span>${esc(t("resetShort"))}</span></button></h3>
          <p class="ex-instr">${esc(exSecT(x, si).instructions || pickLang(s.instructions) || t(KIND_TEXT[s.kind][1]))}</p>
          ${s.story ? `${glossary(x) ? `<p class="gloss-hint">${esc(t("glossHint"))}</p>` : ""}<div class="story glossable" lang="en">${storyHTML(x, si)}</div>` : ""}
          <div class="qs">${s.items.map((_, ii) => questionHTML(x, si, ii)).join("")}</div>
        </section>`).join("")}`;
  }

  // ——— Section menu (sticky, under the score): jump to a section; the one on screen is highlighted ———
  function secNavHTML(x) {
    if (x.sections.length < 2) return "";
    return `<nav class="sec-nav" aria-label="${esc(t("sections"))}">${x.sections.map((_, si) => {
      const c = chipCount(x, si), title = secTitle(x, si);
      return `<button type="button" class="sec-chip${c.done ? " done" : ""}" data-sec="${si}" title="${esc(title)}"><span class="sec-n">${si + 1}</span><span class="sec-t">${esc(title)}</span><small>${c.text}</small></button>`;
    }).join("")}</nav>`;
  }
  // Where the sticky bar ends once it's stuck (the sections scroll under it)
  function stickyBottom() {
    const bar = $(".ex-sticky");
    return bar ? parseFloat(getComputedStyle(bar).top) + bar.offsetHeight : 0;
  }
  // «stuck» lets the bar shrink on phones while it floats over the questions
  function syncStuck() {
    const bar = $(".ex-sticky");
    if (bar) bar.classList.toggle("stuck", !!bar.querySelector(".sec-nav") && bar.getBoundingClientRect().top <= parseFloat(getComputedStyle(bar).top) + 1);
  }
  let navLock = null, navLockTimer;
  function goSection(si) {
    const sec = document.getElementById(`sec-${si}`);
    if (!sec) return;
    navLock = si; clearTimeout(navLockTimer); navLockTimer = setTimeout(() => { navLock = null; spySection(); }, 900);
    setActiveChip(si);
    $(".ex-sticky").classList.add("stuck");   // measure the bar as it will look after scrolling
    window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - stickyBottom() - 12, behavior: "smooth" });
  }
  function setActiveChip(si) {
    const nav = $(".sec-nav");
    if (!nav) return;
    nav.querySelectorAll(".sec-chip").forEach((c) => {
      const on = +c.dataset.sec === si;
      if (on) c.setAttribute("aria-current", "true"); else c.removeAttribute("aria-current");
      if (on && c.dataset.on !== "1") nav.scrollTo({ left: c.offsetLeft - 16, behavior: "smooth" });
      c.dataset.on = on ? "1" : "";
    });
  }
  function spySection() {
    if (navLock !== null || !$(".sec-nav")) return;
    const line = stickyBottom() + 40;
    const secs = [...document.querySelectorAll(".ex-section")];
    let active = 0;
    secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= line) active = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) active = secs.length - 1;
    setActiveChip(active);
  }
  let spyFrame;
  window.addEventListener("scroll", () => {
    cancelAnimationFrame(spyFrame);
    spyFrame = requestAnimationFrame(() => { syncStuck(); spySection(); });
  }, { passive: true });

  function answer(key, value) {
    const x = currentTopic();
    const [si, ii] = key.split("-").map(Number);
    const item = x.sections[si].items[ii];
    const ok = item.type === "write" ? item.a.some((a) => normalize(a) === normalize(value)) : value === item.a;
    const prev = rawAnswer(x, si, ii);
    state.answers[x.id] = state.answers[x.id] || {};
    // First mistake: say why and let them try again; the answer is only shown after the second one
    if (!ok && allowsRetry(item) && !(prev && prev.pending)) state.answers[x.id][key] = { v: value, pending: true };
    else {
      state.answers[x.id][key] = { v: value, ok, t: Date.now(), ...(prev && prev.pending ? { first: prev.v } : {}) };
      const d = today(); d.n++; if (ok) d.ok++;
      if (d.n === 1) { renderStreak(); renderHello(); }
    }
    save();
    document.getElementById(`q-${key}`).outerHTML = questionHTML(x, si, ii);
    const q = document.getElementById(`q-${key}`);
    if (q.classList.contains("is-try")) { const next = q.querySelector(".opt:not(:disabled), .write-input"); if (next) next.focus({ preventScroll: true }); }
    const mark = document.querySelector(`.story [data-jump="${key}"]`);
    if (mark) mark.className = storyMarkClass(x, si, ii + 1);
    refreshPractice(x);
  }

  // ——— Clearing answers (with undo instead of a confirm dialog) ———
  let toastTimer, undoSnapshot = null;
  function toast(message, snapshot) {
    undoSnapshot = snapshot;
    const el = $("#toast");
    el.innerHTML = `<span>${esc(message)}</span>${snapshot ? `<button type="button" data-action="undo">${esc(t("undo"))}</button>` : ""}`;
    el.hidden = false;
    void el.offsetWidth; // apply the hidden state first so the entrance animation plays
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 6000);
  }
  function hideToast() {
    const el = $("#toast");
    el.classList.remove("show");
    setTimeout(() => { if (!el.classList.contains("show")) el.hidden = true; }, 250);
    undoSnapshot = null;
  }
  function currentTopic() {
    return state.mode === "leer" ? READINGS.find((r) => r.id === state.readTopic) : EXERCISES.find((x) => x.id === state.exTopic);
  }

  function retryOne(key) {
    const x = currentTopic();
    delete (state.answers[x.id] || {})[key];
    save();
    const [si, ii] = key.split("-").map(Number);
    document.getElementById(`q-${key}`).outerHTML = questionHTML(x, si, ii);
    const mark = document.querySelector(`.story [data-jump="${key}"]`);
    if (mark) mark.className = storyMarkClass(x, si, ii + 1);
    refreshPractice(x);
    const q = document.getElementById(`q-${key}`);
    const first = q.querySelector(".opt, .write-input");
    if (first) first.focus({ preventScroll: true });
  }

  function clearAnswers(onlyWrong) {
    const x = currentTopic();
    const saved = state.answers[x.id] || {};
    const snapshot = { id: x.id, answers: JSON.parse(JSON.stringify(saved)) };
    let firstKey = null;
    x.sections.forEach((s, si) => s.items.forEach((_, ii) => {
      const key = `${si}-${ii}`, ans = rawAnswer(x, si, ii);
      if (ans && (!onlyWrong || !ans.ok)) { delete saved[key]; if (!firstKey) firstKey = key; }
    }));
    state.answers[x.id] = saved;
    save(); renderPanel(); renderTopics();
    const target = onlyWrong && firstKey ? document.getElementById(`q-${firstKey}`) : $("#results");
    if (target) target.scrollIntoView({ behavior: "smooth", block: onlyWrong ? "center" : "start" });
    toast(onlyWrong ? t("wrongCleared") : t("allCleared"), snapshot);
  }

  function clearSection(si) {
    const x = currentTopic();
    const saved = state.answers[x.id] || {};
    const snapshot = { id: x.id, answers: JSON.parse(JSON.stringify(saved)) };
    x.sections[si].items.forEach((_, ii) => { delete saved[`${si}-${ii}`]; });
    state.answers[x.id] = saved;
    save(); renderPanel(); renderTopics();
    goSection(si);
    toast(t("sectionCleared"), snapshot);
  }

  function undo() {
    if (!undoSnapshot) return;
    state.answers[undoSnapshot.id] = undoSnapshot.answers;
    save(); renderPanel(); renderTopics();
    hideToast();
  }

  // ——— Reading ———
  // Words are matched as tokens, so "back" never matches inside "backwards"
  const TOKEN = /[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g;
  const normWord = (w) => w.toLowerCase().replace(/’/g, "'");
  const tokensOf = (s) => (s.match(TOKEN) || []).map(normWord);
  const SENTENCE_BREAK = /[.!?;:“”"]/;

  // Tap-to-translate glossary for a reading (data/glossary/*.js), parsed once
  const glossCache = {};
  function glossary(x) {
    if (glossCache[x.id] !== undefined) return glossCache[x.id];
    const g = (window.YEB_GLOSSARY || {})[x.id];
    if (!g) return (glossCache[x.id] = null);
    const pairs = (s) => s.split("\n").map((l) => l.split(" = ")).filter((p) => p.length === 2).map(([k, v]) => [k.trim(), v.trim()]);
    const words = Object.fromEntries(pairs(g.words).map(([k, v]) => [normWord(k), v]));
    const phrases = pairs(g.phrases).map(([k, v]) => ({ text: k, es: v, pat: k.split(/\s+/).map((p) => (p === "*" ? "*" : normWord(p))) }));
    return (glossCache[x.id] = { words, phrases });
  }
  const glossWord = (G, k) => G && (G.words[k] || G.words[k.replace(/'s$/, "")]);

  // Matches a token pattern at toks[i] without crossing a sentence; "*" = 1–6 words. Returns the matched indexes.
  function matchAt(pat, toks, i, first = true) {
    const hit = [];
    for (let pi = 0; pi < pat.length; pi++) {
      if (pat[pi] === "*") {
        for (let n = 1; n <= 6 && i + n < toks.length; n++) {
          if (toks.slice(i, i + n + 1).some((tk, j) => (j > 0 || pi > 0) && SENTENCE_BREAK.test(tk.sep))) break;
          const rest = matchAt(pat.slice(pi + 1), toks, i + n, false);
          if (rest) return [...hit, ...rest];
        }
        return null;
      }
      const tk = toks[i];
      if (!tk || tk.k !== pat[pi] || ((pi > 0 || !first) && SENTENCE_BREAK.test(tk.sep))) return null;
      hit.push(i++);
    }
    return hit;
  }

  const tokenize = (p) => {
    const toks = []; let last = 0, m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(p))) { toks.push({ w: m[0], k: normWord(m[0]), sep: p.slice(last, m.index) }); last = m.index + m[0].length; }
    return { toks, tail: p.slice(last) };
  };
  // Marks every glossary phrase in the paragraphs (longest first; a word belongs to one phrase)
  let phraseOcc = 0;
  function markPhrases(G, paras) {
    if (!G) return;
    const phrases = G.phrases.map((p, pi) => ({ ...p, pi })).sort((a, b) => b.pat.length - a.pat.length);
    for (const { toks } of paras) {
      for (const { pat, pi } of phrases) {
        for (let s = 0; s < toks.length; s++) {
          const hit = matchAt(pat, toks, s);
          if (hit && hit.every((h) => toks[h].ph === undefined)) { phraseOcc++; hit.forEach((h) => { toks[h].ph = pi; toks[h].po = phraseOcc; }); }
        }
      }
    }
  }
  const wordHTML = (G, tk) => (tk.ph !== undefined || glossWord(G, tk.k)
    ? `<span class="w"${tk.ph !== undefined ? ` data-ph="${tk.ph}" data-po="${tk.po}"` : ""}>${esc(tk.w)}</span>`
    : esc(tk.w));

  // Renders the text with tappable words (glossary) and the first appearance of each vocabulary item highlighted
  let placedVocab = new Set();
  function readingText(x, paragraphs) {
    const G = glossary(x);
    const paras = (paragraphs || x.text).map(tokenize);
    const terms = x.vocab.map((v, i) => ({ i, pat: tokensOf((v[3] || v[0]).replace(/[()]/g, "")) })).sort((a, b) => b.pat.length - a.pat.length);
    placedVocab = new Set();
    for (const { i, pat } of terms) {
      if (!pat.length) continue;
      search: for (const { toks } of paras) {
        for (let s = 0; s < toks.length; s++) {
          const hit = matchAt(pat, toks, s);
          if (hit && hit.every((h) => toks[h].v === undefined)) {
            for (let h = hit[0]; h <= hit[hit.length - 1]; h++) toks[h].v = i;
            toks[hit[0]].vOpen = i; toks[hit[hit.length - 1]].vClose = true;
            placedVocab.add(i);
            break search;
          }
        }
      }
    }
    markPhrases(G, paras);
    return paras.map(({ toks, tail }) => `<p>${toks.map((tk) => {
      let h = esc(tk.sep);
      if (tk.vOpen !== undefined) h += `<mark class="vw" data-vw="${tk.vOpen}" tabindex="0" role="button">`;
      h += wordHTML(G, tk);
      if (tk.vClose) h += "</mark>";
      return h;
    }).join("")}${esc(tail)}</p>`).join("");
  }

  // The sentence of `paragraphs` that contains `find`, with [[find]] marked (shortened when it's very long)
  function sentenceWith(paragraphs, find) {
    const f = find.replace(/’/g, "'");
    const re = new RegExp(`(^|[^A-Za-z])(${f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})${/[A-Za-z]$/.test(f) ? "(?![A-Za-z])" : ""}`, "i");
    for (const raw of paragraphs || []) {
      const p = raw.replace(/’/g, "'");
      const m = re.exec(p);
      if (!m) continue;
      const at = m.index + m[1].length, end = at + m[2].length;
      let start = p.slice(0, at).search(/[^.!?]*$/);
      let stop = p.slice(end).search(/[.!?]/);
      stop = stop < 0 ? p.length : end + stop + 1;
      if (p[stop] === "”" || p[stop] === '"') stop++;
      let pre = p.slice(start, at).replace(/^[\s”"]+/, ""), post = p.slice(end, stop);
      if (pre.length > 110) pre = "…" + pre.slice(pre.indexOf(" ", pre.length - 100) + 1);
      if (post.length > 110) post = post.slice(0, post.lastIndexOf(" ", 100)) + "…";
      return `${pre}[[${p.slice(at, end)}]]${post}`;
    }
    return null;
  }
  const speechQuote = (x, find) => sentenceWith(fullText(x) || x.text, find) || `[[${find}]]`;

  // Optional full transcript (a .txt file next to the site); loaded once per reading
  const transcripts = {};
  function loadTranscript(x) {
    if (!x.transcript || transcripts[x.id] !== undefined) return;
    transcripts[x.id] = null;   // loading
    fetch(x.transcript, { cache: "no-cache" })
      .then((r) => (r.ok ? r.text() : ""))
      .then((txt) => {
        // A title line stuck to the first paragraph is dropped (the reading already shows its title)
        const paras = txt.split(/\r?\n/).filter((l) => !l.trim().startsWith("#")).join("\n")
          .replace(/^\s*[^\n.!?]+\n(?=\S)/, "")
          .split(/\n\s*\n/).map((p) => p.replace(/\s+/g, " ").trim()).filter(Boolean);
        transcripts[x.id] = paras.length ? paras : false;
        if (paras.length && state.mode === "leer" && state.readTopic === x.id) renderPanel();
      })
      .catch(() => { transcripts[x.id] = false; });
  }
  const fullText = (x) => (Array.isArray(transcripts[x.id]) ? transcripts[x.id] : null);
  const readView = (x) => (fullText(x) && (state.readView || {})[x.id] !== "summary" ? "full" : "summary");
  const shownText = (x) => (readView(x) === "full" ? fullText(x) : x.text);

  function renderRead() {
    if (!READINGS.length) return `<div class="panel-head"><h2>${esc(t("reading"))}</h2><p>${esc(t("soon"))}</p></div>`;
    const x = READINGS.find((r) => r.id === state.readTopic) || READINGS[0];
    state.readTopic = x.id;
    loadTranscript(x);
    const L = isEN() ? "en" : "es";
    const view = readView(x);
    const canSpeak = "speechSynthesis" in window;
    return `
      <div class="panel-head">
        <span class="level-pill">${esc(t("tiers")[x.tier])} · ${esc(x.level)}</span>
        <h2>${esc(x.title)}</h2>
        <p>${esc(t("minRead")(x.minutes))}</p>
        ${canSpeak ? `<button type="button" class="speak-btn" data-action="speak">${ICONS.speaker}<span>${esc(t("listenStory"))}</span></button>` : ""}
      </div>
      ${x.video ? `<div class="read-video">${videoBlock(x.video, { title: x.video.title[L], tip: x.video.tip[L] }, t("fullVideo"))}</div>` : ""}
      ${x.source ? `<p class="source">${esc(x.source.note[L])} ${x.source.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label[L])} ↗</a>`).join(" · ")}</p>` : ""}
      ${fullText(x) ? `
        <div class="view-switch" role="tablist" aria-label="${esc(t("summary"))}">
          <button type="button" role="tab" data-action="read-view" data-view="full" aria-selected="${view === "full"}">${esc(t("fullText"))}</button>
          <button type="button" role="tab" data-action="read-view" data-view="summary" aria-selected="${view === "summary"}">${esc(t("summaryShort"))}</button>
        </div>` : x.video ? `<h3 class="summary-title">${esc(t("summary"))}</h3>` : ""}
      ${glossary(x) ? `<p class="gloss-hint">${esc(t("glossHint"))}</p>` : ""}
      <article class="reading glossable${view === "full" ? " full" : ""}" lang="en">${readingText(x, shownText(x))}</article>
      <section class="vocab-box">
        <h3>${esc(t("vocabTitle"))} <span class="sec-count">${x.vocab.length}</span></h3>
        <p class="ex-instr">${esc(t("vocabHint"))}</p>
        <dl class="vocab-list">${x.vocab.map((v, i) => {
          const ex = sentenceWith(shownText(x), v[3] || v[0].replace(/[()]/g, "").trim()) || sentenceWith(fullText(x) || x.text, v[3] || v[0].replace(/[()]/g, "").trim());
          const findable = placedVocab.has(i);
          return `<div${findable ? ` class="findable" data-find="${i}" tabindex="0" role="button" aria-label="${esc(`${t("findInText")}: ${v[0]}`)}"` : ""}>
            <dt lang="en">${esc(v[0])}</dt><dd>${esc(L === "en" ? v[2] : v[1])}</dd>
            ${ex ? `<dd class="vocab-ex" lang="en">“${esc(ex).replace(/\[\[(.+?)\]\]/, "<b>$1</b>")}”</dd>` : ""}
          </div>`;
        }).join("")}</dl>
      </section>
      ${exerciseBody(x)}`;
  }

  // Read the story aloud with the browser's voice
  function stopSpeaking() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    const b = document.querySelector("[data-action=speak]");
    if (b) { b.classList.remove("on"); b.innerHTML = `${ICONS.speaker}<span>${esc(t("listenStory"))}</span>`; }
  }
  function speak(btn) {
    if (speechSynthesis.speaking) return stopSpeaking();
    const x = currentTopic();
    const u = new SpeechSynthesisUtterance(shownText(x).join(" "));
    u.lang = "en-US"; u.rate = 0.92;
    if (!enVoice) pickVoice();
    const voice = enVoice;
    if (voice) u.voice = voice;
    u.onend = u.onerror = stopSpeaking;
    btn.classList.add("on"); btn.innerHTML = `<span aria-hidden="true">■</span><span>${esc(t("stopStory"))}</span>`;
    speechSynthesis.speak(u);
  }

  // ——— Tap/hover translation bubble ———
  const gloss = document.createElement("div");
  gloss.className = "gloss"; gloss.hidden = true; gloss.setAttribute("role", "status");
  document.body.appendChild(gloss);
  let glossPinned = false, glossTimer = 0;
  function hideGloss() {
    gloss.hidden = true; glossPinned = false;
    document.querySelectorAll(".glossable .on, .glossable .cur").forEach((n) => n.classList.remove("on", "cur"));
  }
  function showGloss(target, pin) {
    const x = currentTopic();
    const w = target.closest(".w"), vw = target.closest(".vw");
    if (!x || (!w && !vw)) return;
    clearTimeout(glossTimer);
    const G = glossary(x);
    let html = "";
    if (w) {
      const word = w.textContent, tr = glossWord(G, normWord(word));
      html += `<div class="g-word"><b lang="en">${esc(word)}</b><button type="button" class="g-say" data-say="${esc(word)}" aria-label="${esc(t("listenWord"))}">${ICONS.speaker}</button></div>${tr ? `<p class="g-tr">${esc(tr)}</p>` : ""}`;
      if (w.dataset.ph && G) {
        const p = G.phrases[+w.dataset.ph];
        html += `<div class="g-block"><small>${esc(t("inPhrase"))}</small><b lang="en">${esc(p.text.replace(/\s\*\s/, " … "))}</b><p class="g-tr">${esc(p.es)}</p></div>`;
      }
    }
    if (vw) {
      const v = x.vocab[+vw.dataset.vw];
      html += `<div class="g-block"><small>${esc(t("keyWord"))}</small><b lang="en">${esc(v[0])}</b><p class="g-tr">${esc(v[1])}</p><p class="g-def" lang="en">${esc(v[2])}</p></div>`;
    }
    document.querySelectorAll(".glossable .on, .glossable .cur").forEach((n) => n.classList.remove("on", "cur"));
    if (w && w.dataset.po) document.querySelectorAll(`.glossable [data-po="${w.dataset.po}"]`).forEach((n) => n.classList.add("on"));
    (w || vw).classList.add("cur");
    glossPinned = pin;
    gloss.innerHTML = html;
    gloss.hidden = false;
    // Above the word when there's room (below the sticky header), otherwise below it
    const r = (w || vw).getBoundingClientRect(), vwW = document.documentElement.clientWidth;
    const gw = gloss.offsetWidth, gh = gloss.offsetHeight;
    const left = Math.max(12, Math.min(r.left + r.width / 2 - gw / 2, vwW - gw - 12));
    const above = r.top - gh - 10 > 76;
    gloss.style.left = `${left + scrollX}px`;
    gloss.style.top = `${(above ? r.top - gh - 10 : r.bottom + 10) + scrollY}px`;
  }
  function findInText(i) {
    const m = document.querySelector(`.reading [data-vw="${i}"]`);
    if (!m) return;
    m.scrollIntoView({ behavior: "smooth", block: "center" });
    m.classList.add("flash"); setTimeout(() => m.classList.remove("flash"), 1400);
  }
  // Pick a natural English voice (some systems list novelty voices like «Bad News» or «Bells» first)
  let enVoice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices().filter((v) => /^en[-_]US/i.test(v.lang) || /^en[-_]/i.test(v.lang));
    const good = /samantha|google us english|aria|jenny|guy|ava|allison|alex|zira|david|natural|enhanced|premium/i;
    const novelty = /bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|albert|fred|junior|kathy|ralph/i;
    enVoice = vs.find((v) => /^en[-_]US/i.test(v.lang) && good.test(v.name) && !novelty.test(v.name))
      || vs.find((v) => /^en[-_]US/i.test(v.lang) && !novelty.test(v.name))
      || vs.find((v) => !novelty.test(v.name)) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.addEventListener("voiceschanged", pickVoice); }
  let currentUtterance = null;   // keep a reference: Chrome can drop an utterance that nothing holds on to
  function sayWord(word) {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(word);
    u.lang = "en-US"; u.rate = 0.85;
    if (!enVoice) pickVoice();
    if (enVoice) u.voice = enVoice;
    u.onend = u.onerror = () => { if (currentUtterance === u) currentUtterance = null; };
    currentUtterance = u;
    const go = () => { speechSynthesis.resume(); speechSynthesis.speak(u); };
    // cancel() and speak() back to back loses the new sentence in Chrome: only cancel when something is playing
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      stopSpeaking();
      setTimeout(go, 80);
    } else go();
  }
  gloss.addEventListener("click", (e) => { const b = e.target.closest("[data-say]"); if (b) sayWord(b.dataset.say); });
  document.addEventListener("click", (e) => {
    if (!gloss.hidden && !gloss.contains(e.target) && !e.target.closest(".glossable .w, .glossable .vw")) hideGloss();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !gloss.hidden) hideGloss();
    const el = e.target.closest && e.target.closest(".glossable .vw, [data-find]");
    if (el && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      if (el.dataset.find) findInText(el.dataset.find); else showGloss(el, true);
    }
  });
  window.addEventListener("resize", () => { if (!gloss.hidden) hideGloss(); });
  // Mouse: hovering shows the translation; a click keeps it open
  if (matchMedia("(hover: hover)").matches) {
    $("#panel").addEventListener("mouseover", (e) => {
      const el = e.target.closest(".glossable .w, .glossable .vw");
      if (el && !(glossPinned && el.classList.contains("cur"))) showGloss(e.target, false);
    });
    $("#panel").addEventListener("mouseout", (e) => {
      if (glossPinned || !e.target.closest(".glossable .w, .glossable .vw")) return;
      const to = e.relatedTarget;
      if (to && (gloss.contains(to) || (to.closest && to.closest(".glossable .w, .glossable .vw")))) return;
      glossTimer = setTimeout(() => { if (!glossPinned) hideGloss(); }, 180);
    });
    gloss.addEventListener("mouseleave", () => { if (!glossPinned) glossTimer = setTimeout(hideGloss, 180); });
    gloss.addEventListener("mouseenter", () => clearTimeout(glossTimer));
  }

  // ——— Panel ———
  function renderPanel() {
    stopSpeaking();
    hideGloss();
    $("#panel").innerHTML = state.mode === "inicio" ? renderHome() : state.mode === "progreso" ? renderProgress() : state.mode === "practicar" ? renderPractice() : state.mode === "leer" ? renderRead() : renderListen();
    syncStuck(); spySection();
  }

  $("#panel").addEventListener("click", (e) => {
    const say = e.target.closest(".q-say, .sw, .opt.done");
    if (say) {
      sayWord(say.dataset.say);
      if (say.classList.contains("sw")) { say.classList.add("on"); setTimeout(() => say.classList.remove("on"), 700); }
      return;
    }
    if (e.target.closest(".glossable .w, .glossable .vw")) { showGloss(e.target, true); return; }
    const find = e.target.closest("[data-find]");
    if (find) return findInText(find.dataset.find);
    const chip = e.target.closest(".sec-chip");
    if (chip) return goSection(+chip.dataset.sec);
    const jump = e.target.closest("[data-jump]");
    if (jump) {
      const q = document.getElementById(`q-${jump.dataset.jump}`);
      q.scrollIntoView({ behavior: "smooth", block: "center" });
      q.classList.add("flash"); setTimeout(() => q.classList.remove("flash"), 1200);
      return;
    }
    const opt = e.target.closest(".opt");
    if (opt && !opt.disabled) return answer(opt.dataset.key, opt.dataset.v);

    const action = e.target.closest("[data-action]");
    if (action) {
      const a = action.dataset.action;
      if (a === "speak") speak(action);
      else if (a === "read-view") {
        state.readView = { ...(state.readView || {}), [state.readTopic]: action.dataset.view };
        save(); renderPanel();
      }
      else if (a === "retry-one") retryOne(action.dataset.key);
      else if (a === "retry-wrong") clearAnswers(true);
      else if (a === "start-over") clearAnswers(false);
      else if (a === "reset-section") clearSection(+action.dataset.sec);
      else if (a === "goto") goTo(action.dataset.topic, action.dataset.key);
      else if (a === "resume") {
        readHash(state.last);
        save(); writeHash(); render();
        $(".topics-label").scrollIntoView({ behavior: "smooth", block: "start" });
      }
      else if (a === "home") {
        state.mode = action.dataset.mode;
        save(); writeHash(); render();
        $(".topics-label").scrollIntoView({ behavior: "smooth", block: "start" });
      }
      else if (a === "lib-cat" || a === "lib-more") {
        if (a === "lib-cat") { libCat = action.dataset.cat; libShown = 24; } else libShown += 24;
        const lib = $("#library"), sec = sections.find((x) => x.id === state.topic);
        if (lib && sec) lib.outerHTML = libraryHTML(sec);
      }
      return;
    }

    const heart = e.target.closest(".heart");
    if (heart) {
      const name = heart.dataset.fav;
      state.favs = state.favs.includes(name) ? state.favs.filter((n) => n !== name) : [...state.favs, name];
      save();
      const on = state.favs.includes(name);
      heart.setAttribute("aria-pressed", on);
      heart.setAttribute("aria-label", `${on ? t("unsave") : t("save")}: ${name}`);
      renderTopics();
      if (state.topic === "guardados") renderPanel();
      return;
    }

    const btn = e.target.closest("button[data-yt]");
    if (btn) {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.yt}?autoplay=1&start=${btn.dataset.start}&cc_load_policy=1&cc_lang_pref=en&rel=0`;
      iframe.title = btn.getAttribute("aria-label");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      btn.replaceWith(iframe);
    }
  });

  $("#panel").addEventListener("submit", (e) => {
    const form = e.target.closest("form.write");
    if (!form) return;
    e.preventDefault();
    const input = form.querySelector("input");
    if (!input.value.trim()) { input.focus(); return; }
    answer(form.dataset.key, input.value.trim());
  });

  // Computer: resting the mouse on the little speaker reads the option
  let sayHover;
  $("#panel").addEventListener("mouseover", (e) => {
    const b = e.target.closest(".sw");
    if (!b || !matchMedia("(hover: hover)").matches) return;
    clearTimeout(sayHover);
    sayHover = setTimeout(() => sayWord(b.dataset.say), 450);
  });
  $("#panel").addEventListener("mouseout", (e) => { if (e.target.closest(".sw")) clearTimeout(sayHover); });

  $("#toast").addEventListener("click", (e) => { if (e.target.closest("[data-action=undo]")) undo(); });

  // ——— Progress page: streak, time, activity, weak points and recent mistakes ———
  const fmtTime = (ms) => {
    const m = Math.floor(ms / 60000), h = Math.floor(m / 60);
    return h ? `${h} h ${String(m % 60).padStart(2, "0")}` : `${m} min`;
  };
  const fmtClock = (ms) => { const sec = Math.floor(ms / 1000); return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`; };
  const allTopics = () => [...EXERCISES.map((x) => ({ x, kind: "practicar" })), ...READINGS.map((x) => ({ x, kind: "leer" }))];
  const topicName = (x) => (x.tier ? x.title : topicTitle(x));
  function updateClock() {
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set("pg-session", fmtClock(sessionMs));
    set("pg-today", fmtTime(today().ms));
    set("pg-total", fmtTime(totalMs()));
  }
  function renderStreak() {
    const chip = $("#streak-chip");
    if (!chip || !student) return;
    const n = streak(), done = studied(dayKey());
    chip.hidden = false;
    chip.className = `streak-chip${done ? " on" : ""}`;
    chip.innerHTML = `${ICONS.flame}<b>${n}</b>`;
    chip.title = t("streakDays")(n);
    chip.setAttribute("aria-label", `${t("streakDays")(n)}. ${t("progressTab")}`);
  }
  function goTo(id, key) {
    const r = READINGS.some((x) => x.id === id);
    state.mode = r ? "leer" : "practicar";
    if (r) state.readTopic = id; else state.exTopic = id;
    save(); writeHash(); render();
    const el = key ? document.getElementById(`q-${key}`) || document.getElementById(`sec-${key}`) : $("#results");
    if (el) {
      if (key && !key.includes("-")) goSection(+key);
      else el.scrollIntoView({ behavior: "smooth", block: key ? "center" : "start" });
      if (el.classList.contains("q")) { el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 1400); }
    }
  }

  function renderProgress() {
    const n = streak(), best = bestStreak(), done = studied(dayKey());
    const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
    // Everything below comes from the saved answers
    let answered = 0, first = 0, second = 0, wrong = 0, topicsStarted = 0, complete = 0;
    const weak = [], mistakes = [], rows = [];
    allTopics().forEach(({ x }) => {
      const p = progress(x);
      if (p.done) { topicsStarted++; rows.push({ x, p }); }
      if (p.total && p.done === p.total) complete++;
      x.sections.forEach((sec, si) => {
        let sDone = 0, sOk = 0;
        sec.items.forEach((item, ii) => {
          const a = savedAnswer(x, si, ii);
          if (!a) return;
          answered++; sDone++;
          if (a.ok) sOk++;
          if (a.ok && !a.first) first++; else if (a.ok) second++; else wrong++;
          if (!a.ok || a.first) mistakes.push({ x, si, ii, item, a });
        });
        if (sDone >= 3 && sOk / sDone < 0.8) weak.push({ x, si, sDone, sOk });
      });
    });
    weak.sort((a, b) => a.sOk / a.sDone - b.sOk / b.sDone || b.sDone - a.sDone);
    mistakes.sort((a, b) => (b.a.t || 0) - (a.a.t || 0));

    const locale = isEN() ? "en-US" : "es-ES";
    const days = (count) => Array.from({ length: count }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - (count - 1 - i)); return d; });
    const dayName = (d) => d.toLocaleDateString(locale, { weekday: "narrow" });
    const weekRange = (() => { const [a, b] = [days(7)[0], new Date()]; const f = (d) => d.toLocaleDateString(locale, { day: "numeric", month: "short" }).replace(".", ""); return `${f(a)} – ${f(b)}`; })();
    const cap = (w) => w.charAt(0).toUpperCase() + w.slice(1);
    const minutesOf = (k) => Math.round(((state.daily[k] || {}).ms || 0) / 60000);
    const week = days(7).map((d) => {
      const k = dayKey(d);
      return `<li class="wk${studied(k) ? " on" : ""}${k === dayKey() ? " today" : ""}" title="${esc(d.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" }))}">
        <i>${studied(k) ? ICONS.check : ""}</i><small><span class="d-long">${esc(cap(d.toLocaleDateString(locale, { weekday: "long" })))}</span><span class="d-short">${esc(cap(d.toLocaleDateString(locale, { weekday: "short" }).replace(".", "")))}</span> <b>${d.getDate()}</b></small><em>${minutesOf(k) ? `${minutesOf(k)} min` : studied(k) ? "<1 min" : "–"}</em></li>`;
    }).join("");
    const stat = (label, value, id) => `<div><dt>${esc(label)}</dt><dd${id ? ` id="${id}"` : ""}>${esc(value)}</dd></div>`;
    const seg = (cls, count) => (count ? `<i class="${cls}" style="width:${pct(count, answered)}%"></i>` : "");
    const legend = (cls, label, count) => `<li><span class="dot ${cls}"></span>${esc(label)} <b>${count}</b> <small>(${pct(count, answered)} %)</small></li>`;

    const mistakeHTML = mistakes.slice(0, 8).map(({ x, si, ii, item, a }) => {
      const tr = (isEN() && item.en) || itemT(x, si, ii);
      const shown = (v) => (item.type === "write" ? v : label(tr, v));
      const right = item.type === "write" ? item.a[0] : label(tr, item.a);
      return `<li class="mistake">
        <small>${esc(topicName(x))} · ${esc(secTitle(x, si))}</small>
        <p lang="en">${esc((tr.q || item.q).replace(/^\(\d+\)\s*/, ""))}</p>
        <div class="m-ans">${a.ok
          ? `<span class="m-second">${esc(t("firstTried"))}: <s>${esc(shown(a.first))}</s>. ${esc(t("thenRight"))}: ${esc(shown(a.v))}</span>`
          : `<span class="m-bad">${esc(t("yourAnswerWas"))}: <s>${esc(shown(a.v))}</s></span><span class="m-ok">${esc(t("rightAnswer"))}: ${esc(right)}</span>`}</div>
        <button type="button" class="link-go" data-action="goto" data-topic="${x.id}" data-key="${si}-${ii}">${esc(t("reviewIt"))}</button>
      </li>`;
    }).join("");

    return `
      <div class="panel-head">
        <h2>${esc(t("progressTitle"))}</h2>
        <p>${esc(t("progressIntro"))}</p>
      </div>

      <section class="pg-card pg-streak${done ? " done" : ""}">
        <div class="pg-streak-main">
          <span class="pg-flame" aria-hidden="true">${ICONS.flame}</span>
          <div>
            <p class="pg-big"><strong>${n}</strong> ${esc(t("daysInARow")(n))}</p>
            <p class="pg-help">${esc(done ? t("streakDone") : n ? t("streakKeep") : t("streakStart"))} ${esc(t("bestStreak")(best))}</p>
          </div>
        </div>
        <h4>${esc(t("last7"))} · ${esc(weekRange)}</h4>
        <ol class="pg-week">${week}</ol>
      </section>

      <section class="pg-card">
        <h3>${esc(t("timeTitle"))}</h3>
        <p class="pg-help">${esc(t("timeHelp"))}</p>
        <dl class="pg-stats">
          ${stat(t("sessionTime"), fmtClock(sessionMs), "pg-session")}
          ${stat(t("todayTime"), fmtTime(today().ms), "pg-today")}
          ${stat(t("totalTime"), fmtTime(totalMs()), "pg-total")}
        </dl>

      </section>

      <section class="pg-card">
        <h3>${esc(t("answersTitle"))}</h3>
        ${answered ? `
          <p class="pg-sentence">${t("answersSentence")(answered, topicsStarted, complete)}</p>
          <div class="stack" role="img" aria-label="${esc(t("answersChart")(pct(first, answered), pct(second, answered), pct(wrong, answered)))}">${seg("s-first", first)}${seg("s-second", second)}${seg("s-wrong", wrong)}</div>
          <ul class="legend">
            ${legend("s-first", t("firstTryLabel"), first)}
            ${legend("s-second", t("secondTryLabel"), second)}
            ${legend("s-wrong", t("wrongLabel"), wrong)}
          </ul>` : `<p class="pg-help">${esc(t("noAnswersYet"))}</p>`}
      </section>

      <section class="pg-card">
        <h3>${esc(t("improveTitle"))}</h3>
        <p class="pg-help">${esc(weak.length ? t("improveHelp") : answered ? t("improveNone") : t("noAnswersYet"))}</p>
        ${weak.length ? `<ul class="weak">${weak.slice(0, 6).map(({ x, si, sDone, sOk }) => `
          <li>
            <div><strong>${esc(secTitle(x, si))}</strong><small>${esc(topicName(x))} · ${esc(t("rightOf")(sOk, sDone))}</small></div>
            <span class="meter" aria-hidden="true"><i style="width:${pct(sOk, sDone)}%"></i></span>
            <button type="button" class="link-go" data-action="goto" data-topic="${x.id}" data-key="${si}">${esc(t("practiceIt"))}</button>
          </li>`).join("")}</ul>` : ""}
      </section>

      <section class="pg-card">
        <h3>${esc(t("mistakesTitle"))}</h3>
        <p class="pg-help">${esc(mistakes.length ? t("mistakesHelp") : t("mistakesEmpty"))}</p>
        ${mistakes.length ? `<ul class="mistakes">${mistakeHTML}</ul>` : ""}
      </section>

      <section class="pg-card">
        <h3>${esc(t("byTopic"))}</h3>
        <p class="pg-help">${esc(rows.length ? t("byTopicHelp") : t("noAnswersYet"))}</p>
        ${rows.length ? `<ul class="by-topic">${rows.sort((a, b) => b.p.done / b.p.total - a.p.done / a.p.total).map(({ x, p }) => `
          <li>
            <button type="button" data-action="goto" data-topic="${x.id}">
              <span><strong>${esc(topicName(x))}</strong><small>${esc(t("answeredOf")(p.done, p.total))} · ${esc(t("rightOf")(p.correct, p.done))}</small></span>
              <span class="meter" aria-hidden="true"><i style="width:${pct(p.done, p.total)}%"></i></span>
            </button>
          </li>`).join("")}</ul>` : ""}
      </section>`;
  }

  // ——— Home: «What do you want to practice today?» with the four sections ———
  function renderHome() {
    const ex = EXERCISES.find((x) => x.id === state.exTopic) || EXERCISES[0];
    const p = ex ? progress(ex) : { done: 0, total: 0 };
    const rd = READINGS.find((x) => x.id === state.readTopic) || READINGS[0];
    const shadow = (window.YEB_SHADOWING || []).length;
    const n = streak();
    const card = (mode, icon, title, text, meta) => `
      <button type="button" class="home-card" data-action="home" data-mode="${mode}">
        <span class="home-ico" aria-hidden="true">${icon}</span>
        <span class="home-txt"><strong>${esc(title)}</strong><span>${esc(text)}</span>${meta ? `<small>${esc(meta)}</small>` : ""}</span>
        <span class="home-go" aria-hidden="true">${svg("M9 6l6 6-6 6")}</span>
      </button>`;
    // «Pick up where you left off?» with the last topic they opened
    let resume = "", resumeId = "";
    if (state.last) {
      const [m, id] = decodeURIComponent(state.last.slice(1)).split("/");
      resumeId = id || m;
      const x = m === "practicar" ? EXERCISES.find((e) => e.id === id) : m === "leer" ? READINGS.find((r) => r.id === id) : null;
      const sec = !x && sections.find((s) => s.id === m);
      const name = x ? (x.tier ? x.title : topicTitle(x)) : sec ? `${t("listen")} · ${secT(sec).short || sec.short}` : "";
      const pr = x && progress(x);
      if (name) resume = `
        <div class="resume">
          <div><strong>${esc(t("resumeQ"))}</strong><span>${esc(name)}${pr && pr.done ? ` · ${pr.done}/${pr.total}` : ""}</span></div>
          <button type="button" class="resume-btn" data-action="resume">${esc(t("resumeBtn"))}</button>
        </div>`;
    }
    const acc = account();
    const drive = acc && acc.drive ? `
      <a class="home-drive" href="${esc(acc.drive)}" target="_blank" rel="noopener">
        <span class="home-ico" aria-hidden="true">${svg("M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z")}</span>
        <span class="home-txt"><strong>${esc(t("driveShort"))}</strong><span>${esc(t("driveText"))}</span></span>
        <span class="home-go" aria-hidden="true">${svg("M7 17 17 7M8 7h9v9")}</span>
      </a>` : "";
    return `${resume}${drive}
      <div class="home-grid">
        ${card("practicar", TOPIC_ICONS.ejercicio, t("practice"), t("homePractice")(EXERCISES.length), ex && p.done && ex.id !== resumeId ? t("homeContinue")(topicTitle(ex), p.done, p.total) : "")}
        ${card("escuchar", TOPIC_ICONS.aprender, t("listen"), t("homeListen")(shadow, channels.length), "")}
        ${card("leer", TOPIC_ICONS.lectura, t("reading"), t("homeRead")(READINGS.length), rd && progress(rd).done && rd.id !== resumeId ? t("homeContinue")(rd.title, progress(rd).done, progress(rd).total) : "")}
        ${card("progreso", svg("M4 20V11M10 20V5M16 20v-6M3 20h18"), t("progressTab"), t("homeProgress"), student ? t("homeStreak")(n, fmtTime(totalMs())) : "")}
      </div>`;
  }

  const account = () => student && (window.YEB_ACCOUNTS || []).find((a) => a.user === student.id);

  // ——— Greeting + log out ———
  function renderHello() {
    if (!student) return;
    // Nickname from assets/accounts.js (e.g. Jesus → «Tito»), plus a nudge until they study today
    const acc = account();
    $("#badge-text").textContent = `${t("hi")((acc && acc.nick) || student.name)} ${studied(dayKey()) ? t("greetDone") : t("greetToday")}`;
    const b = $("#logout"); b.hidden = false; b.textContent = t("logout");
    // The student's Google Drive folder (class notes and calendar), at the top of every page
    const drive = $("#drive-link"), url = acc && acc.drive;
    drive.hidden = !url;
    if (url) { drive.href = url; drive.title = t("driveLong"); drive.setAttribute("aria-label", t("driveLong")); }
    renderStreak();
  }
  $("#streak-chip").addEventListener("click", () => { state.mode = "progreso"; save(); writeHash(); render(); $("#results").scrollIntoView({ behavior: "smooth", block: "start" }); });
  $("#logout").addEventListener("click", async () => { await push(); CLOUD.logout(); });

  function render() {
    renderHello(); renderModes(); renderTopics(); renderPanel();
  }
  // Switching ES / EN re-renders in place; answers and scores are kept
  document.addEventListener("yeb:lang", render);
  render();
  if (syncing) pull();
})();
