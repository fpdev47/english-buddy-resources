(function () {
  const { sections, channels, featured } = window.YEB_DATA;

  const LEVELS = ["A2", "B1", "B2", "C1"];
  const LEVEL_NAMES = { A2: "Básico", B1: "Intermedio", B2: "Intermedio alto", C1: "Avanzado" };
  const ACCENTS = { US: "Acento americano", UK: "Acento británico", CA: "Acento canadiense", Mix: "Varios acentos" };
  const FAV_KEY = "yeb-favs";

  const ICONS = {
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    sp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5 15.9a.7.7 0 0 1-1 .2c-2.7-1.6-6-2-10-1.1a.7.7 0 1 1-.3-1.4c4.3-1 8-.6 11 1.3.3.2.4.7.3 1zm1.4-3a.9.9 0 0 1-1.2.3c-3-1.9-7.7-2.4-11.3-1.3a.9.9 0 1 1-.5-1.7c4.1-1.2 9.3-.6 12.7 1.5.4.3.5.8.3 1.2zm.1-3.2C14.9 8.6 9 8.4 5.6 9.4a1 1 0 1 1-.6-2c3.9-1.2 10.4-1 14.5 1.5a1 1 0 0 1-1 1.8z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.2 0 3.6 1.2 5.3 3.1 1.7-1.9 3.1-3.1 5.3-3.1 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l15 8-15 8z"/></svg>'
  };

  const state = { level: "all", section: "all", q: "", favsOnly: false };

  // ——— Favorites (per-browser convenience; works without storage too) ———
  let favs = new Set();
  try { favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || "[]")); } catch (e) {}
  function saveFavs() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify([...favs])); } catch (e) {}
  }

  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const initials = (name) => name.replace(/^The /, "").split(/[\s–-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const levelText = ([a, b]) => (a === b ? `${a} · ${LEVEL_NAMES[a]}` : `${a}–${b}`);

  $("#chip-count").textContent = `${channels.length} canales`;

  // ——— Featured videos (load the player only on click) ———
  $("#featured").innerHTML = featured.map((f) => `
    <article class="feature">
      <div class="video">
        <button type="button" data-yt="${esc(f.youtubeId)}" data-start="${f.start || 0}" aria-label="Reproducir: ${esc(f.title)}">
          <img src="https://i.ytimg.com/vi/${esc(f.youtubeId)}/hqdefault.jpg" alt="" loading="lazy">
          <span class="play">${ICONS.play}</span>
        </button>
      </div>
      <div class="feature-body">
        <span class="feature-tag">${esc(f.tag)}</span>
        <h3>${esc(f.title)}</h3>
        <div class="by">${esc(f.channel)}</div>
        <p>${esc(f.text)}</p>
      </div>
    </article>`).join("");

  $("#featured").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-yt]");
    if (!btn) return;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.yt}?autoplay=1&start=${btn.dataset.start}&cc_load_policy=1&cc_lang_pref=en&rel=0`;
    iframe.title = btn.getAttribute("aria-label");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
  });

  // ——— Filter chips ———
  function chip(label, value, group, extra = "") {
    return `<button type="button" class="chip ${extra}" data-group="${group}" data-value="${esc(value)}" aria-pressed="false">${label}</button>`;
  }
  $("#level-chips").innerHTML =
    chip("Todos", "all", "level") +
    LEVELS.map((l) => chip(`${l}<small>${LEVEL_NAMES[l]}</small>`, l, "level")).join("") +
    chip("♥ Guardados", "favs", "favs", "fav");
  $("#section-chips").innerHTML =
    chip("Todos", "all", "section") +
    sections.map((s) => chip(esc(s.short || s.title), s.id, "section")).join("");

  document.querySelector(".toolbar").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    const { group, value } = b.dataset;
    if (group === "favs") state.favsOnly = !state.favsOnly;
    else state[group] = value;
    render();
  });

  let t;
  $("#q").addEventListener("input", (e) => {
    clearTimeout(t);
    t = setTimeout(() => { state.q = e.target.value; render(); }, 120);
  });

  $("#reset").addEventListener("click", () => {
    Object.assign(state, { level: "all", section: "all", q: "", favsOnly: false });
    $("#q").value = "";
    render();
  });

  // ——— Cards ———
  function matches(c) {
    if (state.section !== "all" && c.section !== state.section) return false;
    if (state.favsOnly && !favs.has(c.name)) return false;
    if (state.level !== "all") {
      const i = LEVELS.indexOf(state.level);
      if (i < LEVELS.indexOf(c.level[0]) || i > LEVELS.indexOf(c.level[1])) return false;
    }
    if (state.q.trim()) {
      const hay = norm(`${c.name} ${c.host} ${c.text}`);
      if (!norm(state.q).split(/\s+/).every((w) => hay.includes(w))) return false;
    }
    return true;
  }

  function card(c) {
    const fav = favs.has(c.name);
    return `
      <article class="card">
        <button type="button" class="heart" data-fav="${esc(c.name)}" aria-pressed="${fav}" aria-label="${fav ? "Quitar de guardados" : "Guardar"}: ${esc(c.name)}">${ICONS.heart}</button>
        <div class="card-top">
          <div class="avatar" aria-hidden="true">${esc(initials(c.name))}</div>
          <div>
            <h4>${esc(c.name)}</h4>
            <div class="host">${esc(c.host)}</div>
          </div>
        </div>
        <div class="tags">
          <span class="tag level">${esc(levelText(c.level))}</span>
          <span class="tag">${esc(ACCENTS[c.accent] || c.accent)}</span>
        </div>
        <p>${esc(c.text)}</p>
        <div class="links">
          ${c.youtube ? `<a class="link-btn yt" href="${esc(c.youtube)}" target="_blank" rel="noopener">${ICONS.yt}YouTube</a>` : ""}
          ${c.spotify ? `<a class="link-btn sp" href="${esc(c.spotify)}" target="_blank" rel="noopener">${ICONS.sp}Spotify</a>` : ""}
        </div>
      </article>`;
  }

  $("#sections").addEventListener("click", (e) => {
    const b = e.target.closest(".heart");
    if (!b) return;
    const name = b.dataset.fav;
    favs.has(name) ? favs.delete(name) : favs.add(name);
    saveFavs();
    if (state.favsOnly) render();
    else {
      const on = favs.has(name);
      b.setAttribute("aria-pressed", on);
      b.setAttribute("aria-label", `${on ? "Quitar de guardados" : "Guardar"}: ${name}`);
    }
  });

  function render() {
    document.querySelectorAll(".toolbar .chip").forEach((b) => {
      const { group, value } = b.dataset;
      const on = group === "favs" ? state.favsOnly : state[group] === value;
      b.setAttribute("aria-pressed", on);
    });

    let total = 0;
    const html = sections.map((s) => {
      const list = channels.filter((c) => c.section === s.id && matches(c));
      total += list.length;
      if (!list.length) return "";
      return `
        <section class="res-section" id="sec-${s.id}" aria-labelledby="h-${s.id}">
          <div class="res-head">
            <div>
              <span class="kicker">${esc(s.kicker)}</span>
              <h3 id="h-${s.id}">${esc(s.title)}</h3>
              <p>${esc(s.text)}</p>
            </div>
            <span class="res-count">${list.length} ${list.length === 1 ? "recurso" : "recursos"}</span>
          </div>
          <div class="cards">${list.map(card).join("")}</div>
        </section>`;
    }).join("");

    $("#sections").innerHTML = html;
    $("#empty").hidden = total > 0;
    $("#result-count").textContent = total ? `Mostrando ${total} de ${channels.length} recursos` : "";
  }

  render();
})();
