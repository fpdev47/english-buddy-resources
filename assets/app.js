(function () {
  const { sections, channels } = window.YEB_DATA;
  const EXERCISES = window.YEB_EXERCISES || [];
  // Readings reuse the exercise engine: comprehension + vocabulary-in-context sections
  const READINGS = (window.YEB_READINGS || []).map((r) => ({
    ...r,
    sections: [{ kind: "comprehension", items: r.comprehension }, { kind: "vocab", items: r.vocabulary }]
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
  // Each student (logged in with their personal key) has their own saved progress
  const CLOUD = window.YEB_CLOUD;
  const student = CLOUD && CLOUD.student;
  const STORE = student ? `yeb-state:${student.id}` : "yeb-state";

  const svg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const TOPIC_ICONS = {
    aprender: svg("M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"),
    shadowing: svg("M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3"),
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
    lectura: svg("M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z")
  };
  const ICONS = {
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    sp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5 15.9a.7.7 0 0 1-1 .2c-2.7-1.6-6-2-10-1.1a.7.7 0 1 1-.3-1.4c4.3-1 8-.6 11 1.3.3.2.4.7.3 1zm1.4-3a.9.9 0 0 1-1.2.3c-3-1.9-7.7-2.4-11.3-1.3a.9.9 0 1 1-.5-1.7c4.1-1.2 9.3-.6 12.7 1.5.4.3.5.8.3 1.2zm.1-3.2C14.9 8.6 9 8.4 5.6 9.4a1 1 0 1 1-.6-2c3.9-1.2 10.4-1 14.5 1.5a1 1 0 0 1-1 1.8z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l15 8-15 8z"/></svg>'
  };

  // ——— State: remembered per browser; the page works without storage too ———
  const state = { mode: "practicar", topic: sections[0].id, exTopic: EXERCISES[0] && EXERCISES[0].id, readTopic: READINGS[0] && READINGS[0].id, favs: [], answers: {} };
  try { Object.assign(state, JSON.parse(localStorage.getItem(STORE) || "{}")); } catch (e) {}
  if (!state.answers || typeof state.answers !== "object") state.answers = {};
  if (!Array.isArray(state.favs)) state.favs = [];
  // One-time move to the new default reading (Steve Jobs), for students who already had the old default saved
  if (state.readDefaultV !== 2) { state.readTopic = READINGS[0] && READINGS[0].id; state.readDefaultV = 2; }
  const writeLocal = () => { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {} };

  // ——— Cloud sync (only when the student logged in with a personal key) ———
  // dirty = local changes not yet saved in the cloud; syncedAt = server time of the last sync
  const progressOnly = () => { const { dirty, syncedAt, ...rest } = state; return rest; };
  let pushTimer = null, pushing = false;
  async function push(keepalive) {
    clearTimeout(pushTimer);
    if (!student || !state.dirty || (pushing && !keepalive)) return;
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
  if (student) {
    addEventListener("pagehide", () => push(true));
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") push(true); else pull(); });
  }

  const save = () => {
    if (student) { state.dirty = true; clearTimeout(pushTimer); pushTimer = setTimeout(push, 1200); }
    writeLocal();
  };

  // Links: #shadowing (listening), #practicar/numeros (exercises) or #leer/r-miami (a reading)
  function readHash() {
    const [a, b] = decodeURIComponent(location.hash.slice(1)).split("/");
    if (a === "practicar") {
      state.mode = "practicar";
      if (EXERCISES.some((x) => x.id === b)) state.exTopic = b;
    } else if (a === "leer") {
      state.mode = "leer";
      if (READINGS.some((x) => x.id === b)) state.readTopic = b;
    } else if (sections.some((s) => s.id === a)) {
      state.mode = "escuchar";
      state.topic = a;
    }
  }
  function writeHash() {
    const h = state.mode === "practicar" ? `#practicar/${state.exTopic}` : state.mode === "leer" ? `#leer/${state.readTopic}` : state.topic === "guardados" ? "" : `#${state.topic}`;
    history.replaceState(null, "", h || location.pathname);
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
  }
  $("#modes").addEventListener("click", (e) => {
    const b = e.target.closest(".mode-btn");
    if (!b || b.dataset.mode === state.mode) return;
    state.mode = b.dataset.mode;
    save(); writeHash(); render();
  });

  // ——— Topics row ———
  function renderTopics() {
    let tiles;
    if (state.mode === "practicar") {
      tiles = EXERCISES.map((x) => {
        const p = progress(x);
        return { id: x.id, label: (exT(x) || x).title, sub: `${x.level} · ${p.done ? `${p.correct}/${p.total}` : `${p.total} ${t("exercises")}`}`, icon: "ejercicio", selected: state.exTopic === x.id };
      });
    } else if (state.mode === "leer") {
      tiles = READINGS.map((x) => {
        const p = progress(x);
        return { id: x.id, label: x.title, sub: `${t("tiers")[x.tier]} · ${x.level} · ${p.done ? `${p.correct}/${p.total}` : t("minRead")(x.minutes)}`, icon: "lectura", selected: state.readTopic === x.id };
      });
    } else {
      tiles = sections.map((s) => {
        const n = channels.filter((c) => c.section === s.id).length;
        return { id: s.id, label: secT(s).short || s.short || s.title, sub: `${n} ${n === 1 ? t("channel") : t("channels")}`, icon: s.id, selected: state.topic === s.id };
      });
      if (state.favs.length) tiles.push({ id: "guardados", label: t("saved"), sub: `${state.favs.length} ${state.favs.length === 1 ? t("channel") : t("channels")}`, icon: "guardados", selected: state.topic === "guardados" });
    }
    $("#topics").innerHTML = tiles.map((t) => `
      <button type="button" class="topic" role="tab" aria-selected="${t.selected}" data-topic="${t.id}">
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
    if (state.mode === "practicar") state.exTopic = b.dataset.topic;
    else if (state.mode === "leer") state.readTopic = b.dataset.topic;
    else state.topic = b.dataset.topic;
    if (undoSnapshot) hideToast();
    save(); renderTopics(); renderPanel(); writeHash();
    $("#results").scrollIntoView({ behavior: "smooth", block: "start" });
  });

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
      <div class="cards">${list.map(card).join("")}</div>`;
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

  function savedAnswer(x, si, ii) {
    const ans = (state.answers[x.id] || {})[`${si}-${ii}`];
    const item = x.sections[si] && x.sections[si].items[ii];
    if (!ans || !item) return null;
    if (item.type !== "write" && ![item.a, ...item.o].includes(ans.v)) return null;
    return ans;
  }

  function progress(x) {
    const total = x.sections.reduce((n, s) => n + s.items.length, 0);
    const vals = x.sections.flatMap((s, si) => s.items.map((_, ii) => savedAnswer(x, si, ii))).filter(Boolean);
    return { total, done: vals.length, correct: vals.filter((v) => v.ok).length };
  }

  function questionHTML(x, si, ii) {
    const item = x.sections[si].items[ii];
    const tr = (isEN() && item.en) || itemT(x, si, ii);
    const key = `${si}-${ii}`;
    const ans = savedAnswer(x, si, ii);
    const isWrite = item.type === "write";
    const correct = isWrite ? item.a[0] : label(tr, item.a);
    const prompt = esc(tr.q || item.q).replace(/^\((\d+)\)\s*/, '<span class="mark">$1</span>').replace("___", ans ? `<span class="blank filled">${esc(correct)}</span>` : `<span class="blank">______</span>`);

    let body;
    if (isWrite) {
      body = `
        <form class="write" data-key="${key}" autocomplete="off">
          <input type="text" class="write-input" aria-label="${esc(t("yourAnswer"))}" placeholder="${esc(t("typeHere"))}" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="done" value="${ans ? esc(ans.v) : ""}" ${ans ? "disabled" : ""}>
          ${ans ? "" : `<button type="submit" class="check-btn">${esc(t("check"))}</button>`}
        </form>`;
    } else {
      body = `<div class="opts">${options(item).map((o) => {
        let cls = "opt";
        if (ans) cls += o === item.a ? " right" : o === ans.v ? " wrong" : " dim";
        return `<button type="button" class="${cls}" data-key="${key}" data-v="${esc(o)}" ${ans ? "disabled" : ""}>${esc(label(tr, o))}</button>`;
      }).join("")}</div>`;
    }

    const fb = ans ? `
      <div class="fb ${ans.ok ? "ok" : "bad"}" role="status">
        <strong>${ans.ok ? t("correct") : `${t("answerIs")} ${esc(correct)}`}</strong>
        <span>${esc(tr.e || item.e)}</span>
        ${ans.ok ? "" : `<button type="button" class="retry-one" data-action="retry-one" data-key="${key}">↻ ${esc(t("tryAgain"))}</button>`}
      </div>` : "";

    return `
      <article class="q${ans ? (ans.ok ? " is-ok" : " is-bad") : ""}" id="q-${key}">
        <span class="q-num">${ii + 1}</span>
        <div class="q-body">
          ${item.quote ? `<blockquote class="quote">${esc(tr.quote || item.quote).replace(/\[\[(.+?)\]\]/g, '<mark class="hl">$1</mark>')}</blockquote>` : ""}
          <p class="q-text">${prompt}</p>
          ${body}
          ${fb}
        </div>
      </article>`;
  }

  function storyMarkClass(x, si, n) {
    const ans = savedAnswer(x, si, n - 1);
    return "mark jump" + (ans ? (ans.ok ? " ok" : " bad") : "");
  }
  function storyHTML(x, si) {
    return esc(x.sections[si].story).replace(/\((\d+)\)/g, (_, n) =>
      `<button type="button" class="${storyMarkClass(x, si, +n)}" data-jump="${si}-${+n - 1}" aria-label="${n}">${n}</button>`);
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
          ${p.done ? `<button type="button" class="score-btn" data-action="start-over">${esc(t("startOver"))}</button>` : ""}
        </div>
      </div>
      <div class="score-bar" aria-hidden="true"><span style="width:${pct}%"></span></div>`;
  }

  function sectionCount(x, si) {
    const items = x.sections[si].items;
    const answered = items.map((_, ii) => savedAnswer(x, si, ii)).filter(Boolean);
    if (!answered.length) return "";
    return `${answered.filter((a) => a.ok).length}/${items.length} ✓`;
  }

  // Refresh everything that depends on the answers of the current topic, without re-rendering the page
  function refreshPractice(x) {
    $("#score").innerHTML = scoreHTML(x);
    x.sections.forEach((_, si) => { const el = document.getElementById(`sec-count-${si}`); if (el) el.textContent = sectionCount(x, si); });
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
          <h2>${esc((exT(x) || x).title)}</h2>
          <p>${esc(t("practiceIntro"))}</p>
        </div>
      </div>
      ${exerciseBody(x)}`;
  }

  const KIND_TEXT = { comprehension: ["comprehension", "comprehensionInstr"], vocab: ["vocabInContext", "vocabInstr"] };
  function exerciseBody(x) {
    return `
      <div class="score" id="score">${scoreHTML(x)}</div>
      ${x.sections.map((s, si) => `
        <section class="ex-section${s.story ? " has-story" : ""}">
          <h3>${esc(exSecT(x, si).title || s.title || t(KIND_TEXT[s.kind][0]))} <span class="sec-count" id="sec-count-${si}">${sectionCount(x, si)}</span></h3>
          <p class="ex-instr">${esc(exSecT(x, si).instructions || s.instructions || t(KIND_TEXT[s.kind][1]))}</p>
          ${s.story ? `<div class="story">${storyHTML(x, si)}</div>` : ""}
          <div class="qs">${s.items.map((_, ii) => questionHTML(x, si, ii)).join("")}</div>
        </section>`).join("")}`;
  }

  function answer(key, value) {
    const x = currentTopic();
    const [si, ii] = key.split("-").map(Number);
    const item = x.sections[si].items[ii];
    const ok = item.type === "write" ? item.a.some((a) => normalize(a) === normalize(value)) : value === item.a;
    state.answers[x.id] = state.answers[x.id] || {};
    state.answers[x.id][key] = { v: value, ok };
    save();
    document.getElementById(`q-${key}`).outerHTML = questionHTML(x, si, ii);
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
      const key = `${si}-${ii}`, ans = savedAnswer(x, si, ii);
      if (ans && (!onlyWrong || !ans.ok)) { delete saved[key]; if (!firstKey) firstKey = key; }
    }));
    state.answers[x.id] = saved;
    save(); renderPanel(); renderTopics();
    const target = onlyWrong && firstKey ? document.getElementById(`q-${firstKey}`) : $("#results");
    if (target) target.scrollIntoView({ behavior: "smooth", block: onlyWrong ? "center" : "start" });
    toast(onlyWrong ? t("wrongCleared") : t("allCleared"), snapshot);
  }

  function undo() {
    if (!undoSnapshot) return;
    state.answers[undoSnapshot.id] = undoSnapshot.answers;
    save(); renderPanel(); renderTopics();
    hideToast();
  }

  // ——— Reading ———
  function readingText(x) {
    // Highlight the first appearance of each vocabulary item; placeholders avoid matching inside the markup
    const terms = x.vocab.map((v, i) => ({ i, m: (v[3] || v[0]).replace(/[()]/g, "").trim() })).sort((a, b) => b.m.length - a.m.length);
    let paras = x.text.map((p) => esc(p));
    for (const { i, m } of terms) {
      const re = new RegExp(`\\b(${m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "i");
      const idx = paras.findIndex((p) => re.test(p));
      if (idx >= 0) paras[idx] = paras[idx].replace(re, `\u0000${i}\u0001$1\u0002`);
    }
    return paras.map((p) => `<p>${p.replace(/\u0000(\d+)\u0001(.*?)\u0002/g, (_, i, w) => `<button type="button" class="vw" data-vw="${i}">${w}</button>`)}</p>`).join("");
  }

  function renderRead() {
    if (!READINGS.length) return `<div class="panel-head"><h2>${esc(t("reading"))}</h2><p>${esc(t("soon"))}</p></div>`;
    const x = READINGS.find((r) => r.id === state.readTopic) || READINGS[0];
    state.readTopic = x.id;
    const L = isEN() ? "en" : "es";
    const canSpeak = "speechSynthesis" in window;
    return `
      <div class="panel-head">
        <span class="level-pill">${esc(t("tiers")[x.tier])} · ${esc(x.level)}</span>
        <h2>${esc(x.title)}</h2>
        <p>${esc(t("minRead")(x.minutes))}</p>
        ${canSpeak ? `<button type="button" class="speak-btn" data-action="speak">🔊 ${esc(t("listenStory"))}</button>` : ""}
      </div>
      ${x.video ? `<div class="read-video">${videoBlock(x.video, { title: x.video.title[L], tip: x.video.tip[L] }, t("fullVideo"))}</div>` : ""}
      ${x.source ? `<p class="source">${esc(x.source.note[L])} ${x.source.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label[L])} ↗</a>`).join(" · ")}</p>` : ""}
      ${x.video ? `<h3 class="summary-title">${esc(t("summary"))}</h3>` : ""}
      <article class="reading" lang="en">${readingText(x)}</article>
      <section class="vocab-box">
        <h3>${esc(t("vocabTitle"))}</h3>
        <p class="ex-instr">${esc(t("vocabHint"))}</p>
        <dl class="vocab-list">${x.vocab.map((v) => `<div><dt lang="en">${esc(v[0])}</dt><dd>${esc(L === "en" ? v[2] : v[1])}</dd></div>`).join("")}</dl>
      </section>
      ${exerciseBody(x)}`;
  }

  // Read the story aloud with the browser's voice
  function stopSpeaking() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    const b = document.querySelector("[data-action=speak]");
    if (b) { b.classList.remove("on"); b.textContent = `🔊 ${t("listenStory")}`; }
  }
  function speak(btn) {
    if (speechSynthesis.speaking) return stopSpeaking();
    const x = currentTopic();
    const u = new SpeechSynthesisUtterance(x.text.join(" "));
    u.lang = "en-US"; u.rate = 0.92;
    const voice = speechSynthesis.getVoices().find((v) => v.lang === "en-US") || speechSynthesis.getVoices().find((v) => /^en/.test(v.lang));
    if (voice) u.voice = voice;
    u.onend = u.onerror = stopSpeaking;
    btn.classList.add("on"); btn.textContent = `■ ${t("stopStory")}`;
    speechSynthesis.speak(u);
  }

  // ——— Panel ———
  function renderPanel() {
    stopSpeaking();
    $("#panel").innerHTML = state.mode === "practicar" ? renderPractice() : state.mode === "leer" ? renderRead() : renderListen();
  }

  $("#panel").addEventListener("click", (e) => {
    const vw = e.target.closest("[data-vw]");
    if (vw) {
      const v = currentTopic().vocab[+vw.dataset.vw];
      toast(`${v[0]} — ${isEN() ? v[2] : v[1]}`);
      return;
    }
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
      else if (a === "retry-one") retryOne(action.dataset.key);
      else if (a === "retry-wrong") clearAnswers(true);
      else if (a === "start-over") clearAnswers(false);
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

  $("#toast").addEventListener("click", (e) => { if (e.target.closest("[data-action=undo]")) undo(); });

  // ——— Greeting + log out (personal keys only) ———
  function renderHello() {
    if (!student) return;
    $("#badge-text").textContent = `👋 ${t("hi")(student.name)}`;
    const b = $("#logout"); b.hidden = false; b.textContent = t("logout");
  }
  $("#logout").addEventListener("click", async () => { await push(); CLOUD.logout(); });

  function render() {
    renderHello(); renderModes(); renderTopics(); renderPanel();
  }
  // Switching ES / EN re-renders in place; answers and scores are kept
  document.addEventListener("yeb:lang", render);
  render();
  if (student) pull();
})();
