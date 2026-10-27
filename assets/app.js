(function () {
  const { sections, channels } = window.YEB_DATA;
  const EXERCISES = window.YEB_EXERCISES || [];

  const EN = window.YEB_EN || { sections: {}, channels: {}, exercises: {} };
  const t = window.YEB_I18N ? window.YEB_I18N.t : (k) => k;
  const isEN = () => window.YEB_I18N && window.YEB_I18N.lang === "en";

  // Translated content (falls back to the original Spanish when a translation is missing)
  const secT = (s) => (isEN() && EN.sections[s.id]) || {};
  const exT = (x) => (isEN() && EN.exercises[x.id]) || null;
  const exSecT = (x, si) => { const e = exT(x); return (e && e.sections[si]) || {}; };
  const itemT = (x, si, ii) => { const sec = exSecT(x, si); return (sec.items && sec.items[ii]) || {}; };
  const label = (tr, value) => (tr.labels && tr.labels[value]) || value;
  const STORE = "yeb-state";

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
    ejercicio: svg("M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z")
  };
  const ICONS = {
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    sp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5 15.9a.7.7 0 0 1-1 .2c-2.7-1.6-6-2-10-1.1a.7.7 0 1 1-.3-1.4c4.3-1 8-.6 11 1.3.3.2.4.7.3 1zm1.4-3a.9.9 0 0 1-1.2.3c-3-1.9-7.7-2.4-11.3-1.3a.9.9 0 1 1-.5-1.7c4.1-1.2 9.3-.6 12.7 1.5.4.3.5.8.3 1.2zm.1-3.2C14.9 8.6 9 8.4 5.6 9.4a1 1 0 1 1-.6-2c3.9-1.2 10.4-1 14.5 1.5a1 1 0 0 1-1 1.8z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l15 8-15 8z"/></svg>'
  };

  // ——— State: remembered per browser; the page works without storage too ———
  const state = { mode: "escuchar", topic: sections[0].id, exTopic: EXERCISES[0] && EXERCISES[0].id, favs: [], answers: {} };
  try { Object.assign(state, JSON.parse(localStorage.getItem(STORE) || "{}")); } catch (e) {}
  if (!state.answers || typeof state.answers !== "object") state.answers = {};
  if (!Array.isArray(state.favs)) state.favs = [];
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {} };

  // Links: #shadowing (a listening topic) or #practicar/numeros (an exercise topic)
  function readHash() {
    const [a, b] = decodeURIComponent(location.hash.slice(1)).split("/");
    if (a === "practicar") {
      state.mode = "practicar";
      if (EXERCISES.some((x) => x.id === b)) state.exTopic = b;
    } else if (sections.some((s) => s.id === a)) {
      state.mode = "escuchar";
      state.topic = a;
    }
  }
  function writeHash() {
    const h = state.mode === "practicar" ? `#practicar/${state.exTopic}` : state.topic === "guardados" ? "" : `#${state.topic}`;
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
    $("#topics-title").textContent = state.mode === "practicar" ? t("topicsPractice") : t("topicsListen");
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
    else state.topic = b.dataset.topic;
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

  function videoBlock(v, tr) {
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
          <span class="pick-tag">${esc(t("startVideo"))}</span>
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
    const rnd = seeded(item.q + "|" + item.a + "|" + (item.quote || ""));
    for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; }
    return all;
  }

  function progress(x) {
    const saved = state.answers[x.id] || {};
    const total = x.sections.reduce((n, s) => n + s.items.length, 0);
    const vals = Object.values(saved);
    return { total, done: vals.length, correct: vals.filter((v) => v.ok).length };
  }

  function questionHTML(x, si, ii) {
    const item = x.sections[si].items[ii];
    const tr = itemT(x, si, ii);
    const key = `${si}-${ii}`;
    const ans = (state.answers[x.id] || {})[key];
    const isWrite = item.type === "write";
    const correct = isWrite ? item.a[0] : label(tr, item.a);
    const prompt = esc(tr.q || item.q).replace("___", ans ? `<span class="blank filled">${esc(correct)}</span>` : `<span class="blank">______</span>`);

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
      </div>` : "";

    return `
      <article class="q${ans ? (ans.ok ? " is-ok" : " is-bad") : ""}" id="q-${key}">
        <span class="q-num">${ii + 1}</span>
        <div class="q-body">
          ${item.quote ? `<blockquote class="quote">${esc(tr.quote || item.quote)}</blockquote>` : ""}
          <p class="q-text">${prompt}</p>
          ${body}
          ${fb}
        </div>
      </article>`;
  }

  function scoreHTML(x) {
    const p = progress(x);
    const pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    return `
      <div class="score-text">${t("score")(p.correct, p.done, p.total)}</div>
      <div class="score-bar" aria-hidden="true"><span style="width:${pct}%"></span></div>`;
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
        <button type="button" class="reset-btn" data-reset="${x.id}">${esc(t("reset"))}</button>
      </div>
      <div class="score" id="score">${scoreHTML(x)}</div>
      ${x.sections.map((s, si) => `
        <section class="ex-section">
          <h3>${esc(exSecT(x, si).title || s.title)}</h3>
          <p class="ex-instr">${esc(exSecT(x, si).instructions || s.instructions)}</p>
          <div class="qs">${s.items.map((_, ii) => questionHTML(x, si, ii)).join("")}</div>
        </section>`).join("")}`;
  }

  function answer(key, value) {
    const x = EXERCISES.find((t) => t.id === state.exTopic);
    const [si, ii] = key.split("-").map(Number);
    const item = x.sections[si].items[ii];
    const ok = item.type === "write" ? item.a.some((a) => normalize(a) === normalize(value)) : value === item.a;
    state.answers[x.id] = state.answers[x.id] || {};
    state.answers[x.id][key] = { v: value, ok };
    save();
    document.getElementById(`q-${key}`).outerHTML = questionHTML(x, si, ii);
    $("#score").innerHTML = scoreHTML(x);
    renderTopics();
  }

  // ——— Panel ———
  function renderPanel() {
    $("#panel").innerHTML = state.mode === "practicar" ? renderPractice() : renderListen();
  }

  $("#panel").addEventListener("click", (e) => {
    const opt = e.target.closest(".opt");
    if (opt && !opt.disabled) return answer(opt.dataset.key, opt.dataset.v);

    const reset = e.target.closest("[data-reset]");
    if (reset) {
      if (!confirm(t("resetConfirm"))) return;
      delete state.answers[reset.dataset.reset];
      save(); renderTopics(); renderPanel();
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

  function render() {
    renderModes(); renderTopics(); renderPanel();
  }
  // Switching ES / EN re-renders in place; answers and scores are kept
  document.addEventListener("yeb:lang", render);
  render();
})();
