(function () {
  const { sections, channels } = window.YEB_DATA;

  const ACCENTS = { US: "Acento americano", UK: "Acento británico", CA: "Acento canadiense", Mix: "Varios acentos" };
  const STORE = "yeb-state";

  const svg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const TOPIC_ICONS = {
    aprender: svg("M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"),
    shadowing: svg("M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3"),
    crecimiento: svg("M12 3v1M12 20v1M4.2 4.2l.7.7M19.1 19.1l.7.7M3 12h1M20 12h1M4.2 19.8l.7-.7M19.1 4.9l.7-.7M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"),
    ted: svg("M3 5h18v11H3zM8 21h8M12 16v5"),
    negocios: svg("M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"),
    curiosidad: svg("M9 2h6M10 2v6L4 19a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 19L14 8V2M7 15h10"),
    guardados: svg("M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.2 0 3.6 1.2 5.3 3.1 1.7-1.9 3.1-3.1 5.3-3.1 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"),
    ejercicios: svg("M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z")
  };
  const ICONS = {
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    sp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5 15.9a.7.7 0 0 1-1 .2c-2.7-1.6-6-2-10-1.1a.7.7 0 1 1-.3-1.4c4.3-1 8-.6 11 1.3.3.2.4.7.3 1zm1.4-3a.9.9 0 0 1-1.2.3c-3-1.9-7.7-2.4-11.3-1.3a.9.9 0 1 1-.5-1.7c4.1-1.2 9.3-.6 12.7 1.5.4.3.5.8.3 1.2zm.1-3.2C14.9 8.6 9 8.4 5.6 9.4a1 1 0 1 1-.6-2c3.9-1.2 10.4-1 14.5 1.5a1 1 0 0 1-1 1.8z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l15 8-15 8z"/></svg>'
  };

  // ——— State: remembered per browser; the page works without storage too ———
  const state = { topic: sections[0].id, favs: [] };
  try { Object.assign(state, JSON.parse(localStorage.getItem(STORE) || "{}")); } catch (e) {}
  const hash = location.hash.slice(1);
  if (sections.some((s) => s.id === hash)) state.topic = hash;
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {} };

  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = (name) => name.replace(/^The /, "").split(/[\s–-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const levelText = ([a, b]) => (a === b ? a : `${a}–${b}`);

  // ——— Topics ———
  function renderTopics() {
    const tiles = sections.map((s) => ({ id: s.id, label: s.short || s.title, count: channels.filter((c) => c.section === s.id).length }));
    if (state.favs.length) tiles.push({ id: "guardados", label: "Mis guardados", count: state.favs.length });
    $("#topics").innerHTML = tiles.map((t) => `
      <button type="button" class="topic" role="tab" aria-selected="${state.topic === t.id}" data-topic="${t.id}">
        <span class="topic-icon">${TOPIC_ICONS[t.id] || ""}</span>
        <span class="topic-text"><strong>${esc(t.label)}</strong><small>${t.count} ${t.count === 1 ? "canal" : "canales"}</small></span>
      </button>`).join("") + `
      <div class="topic soon" aria-disabled="true">
        <span class="topic-icon">${TOPIC_ICONS.ejercicios}</span>
        <span class="topic-text"><strong>Ejercicios</strong><small>Muy pronto</small></span>
      </div>`;
  }
  $("#topics").addEventListener("click", (e) => {
    const b = e.target.closest("button.topic");
    if (!b) return;
    state.topic = b.dataset.topic;
    save(); renderTopics(); renderPanel();
    $("#topics .topic[aria-selected=true]").scrollIntoView({ inline: "center", block: "nearest" });
    history.replaceState(null, "", state.topic === "guardados" ? location.pathname : `#${state.topic}`);
    $("#results").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ——— Results ———
  function card(c) {
    const fav = state.favs.includes(c.name);
    return `
      <article class="card">
        <div class="card-top">
          <div class="avatar" aria-hidden="true">${esc(initials(c.name))}</div>
          <div class="card-title">
            <h3>${esc(c.name)}</h3>
            <div class="meta">${esc(levelText(c.level))} · ${esc(ACCENTS[c.accent] || c.accent)}</div>
          </div>
          <button type="button" class="heart" data-fav="${esc(c.name)}" aria-pressed="${fav}" aria-label="${fav ? "Quitar de guardados" : "Guardar"}: ${esc(c.name)}">${TOPIC_ICONS.guardados}</button>
        </div>
        <p>${esc(c.text)}</p>
        <div class="links">
          ${c.youtube ? `<a class="link-btn yt" href="${esc(c.youtube)}" target="_blank" rel="noopener">${ICONS.yt}YouTube</a>` : ""}
          ${c.spotify ? `<a class="link-btn sp" href="${esc(c.spotify)}" target="_blank" rel="noopener">${ICONS.sp}Spotify</a>` : ""}
        </div>
      </article>`;
  }

  function videoBlock(v) {
    return `
      <div class="pick">
        <div class="video">
          <button type="button" data-yt="${esc(v.id)}" data-start="${v.start || 0}" aria-label="Reproducir: ${esc(v.title)}">
            <img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" loading="lazy">
            <span class="play">${ICONS.play}</span>
          </button>
        </div>
        <div class="pick-body">
          <span class="pick-tag">Empieza con este video</span>
          <h3>${esc(v.title)}</h3>
          <div class="by">${esc(v.channel)}</div>
          <p>${esc(v.tip)}</p>
        </div>
      </div>`;
  }

  function renderPanel() {
    if (state.topic === "guardados" && !state.favs.length) state.topic = sections[0].id;
    const isFavs = state.topic === "guardados";
    const sec = isFavs ? null : sections.find((s) => s.id === state.topic) || sections[0];
    const list = isFavs
      ? channels.filter((c) => state.favs.includes(c.name))
      : channels.filter((c) => c.section === sec.id);
    const title = isFavs ? "Mis guardados" : sec.title;
    const text = isFavs ? "Los canales que marcaste con el corazón." : sec.text;

    $("#panel").innerHTML = `
      <div class="panel-head">
        <h2>${esc(title)}</h2>
        <p>${esc(text)}</p>
      </div>
      ${!isFavs && sec.video ? videoBlock(sec.video) : ""}
      <div class="cards">${list.map(card).join("")}</div>`;
  }

  $("#panel").addEventListener("click", (e) => {
    const heart = e.target.closest(".heart");
    if (heart) {
      const name = heart.dataset.fav;
      state.favs = state.favs.includes(name) ? state.favs.filter((n) => n !== name) : [...state.favs, name];
      save();
      const on = state.favs.includes(name);
      heart.setAttribute("aria-pressed", on);
      heart.setAttribute("aria-label", `${on ? "Quitar de guardados" : "Guardar"}: ${name}`);
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


  renderTopics();
  renderPanel();
})();
