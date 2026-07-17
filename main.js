/* ============================================================
   Site behaviour. Plain JavaScript, no dependencies.
   Handles: theme, essay index (search + tags), essay rendering,
   reading progress, reading time, anchors, subscribe form.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Theme ---------- */

  const THEME_KEY = "site-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        applyTheme(cur === "dark" ? "light" : "dark");
      });
    });
  }

  /* ---------- Helpers ---------- */

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function fmtDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  }

  function fmtDateShort(iso) {
    const d = new Date(iso + "T00:00:00");
    return MONTHS[d.getMonth()] + " " + d.getDate();
  }

  function readingMinutes(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const words = (tmp.textContent || "").trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }

  function sortedEssays() {
    return ESSAYS.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  }

  function essayURL(slug) { return "essay.html?e=" + encodeURIComponent(slug); }

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
  }

  /* ---------- Footer year ---------- */

  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Index page: list, search, tag filters ---------- */

  function initIndex() {
    const listEl = document.getElementById("essay-list");
    if (!listEl) return;

    const searchInput = document.getElementById("search");
    const tagsEl = document.getElementById("tags");
    const essays = sortedEssays();

    let query = "";
    let activeTag = "all";

    // Build tag chips from the data
    const allTags = [];
    essays.forEach(function (e) {
      e.tags.forEach(function (t) { if (allTags.indexOf(t) === -1) allTags.push(t); });
    });
    allTags.sort();

    if (tagsEl) {
      const mk = function (label, value) {
        const b = document.createElement("button");
        b.className = "tag" + (value === "all" ? " is-active" : "");
        b.type = "button";
        b.textContent = label;
        b.setAttribute("data-tag", value);
        b.addEventListener("click", function () {
          activeTag = value;
          tagsEl.querySelectorAll(".tag").forEach(function (x) {
            x.classList.toggle("is-active", x === b);
          });
          render();
        });
        return b;
      };
      tagsEl.appendChild(mk("All", "all"));
      allTags.forEach(function (t) { tagsEl.appendChild(mk(t, t)); });
    }

    function matches(e) {
      if (activeTag !== "all" && e.tags.indexOf(activeTag) === -1) return false;
      if (!query) return true;
      const hay = (e.title + " " + e.excerpt + " " + e.tags.join(" ")).toLowerCase();
      return hay.indexOf(query) !== -1;
    }

    function render() {
      const visible = essays.filter(matches);
      listEl.innerHTML = "";

      if (!visible.length) {
        const p = document.createElement("p");
        p.className = "no-results";
        p.textContent = "Nothing found. Try another word — or clear the filter.";
        listEl.appendChild(p);
        return;
      }

      let year = null;
      let ul = null;
      visible.forEach(function (e) {
        const y = e.date.slice(0, 4);
        if (y !== year) {
          year = y;
          const h = document.createElement("h2");
          h.className = "index-year";
          h.textContent = y;
          listEl.appendChild(h);
          ul = document.createElement("ul");
          ul.className = "essay-list";
          listEl.appendChild(ul);
        }
        const li = document.createElement("li");
        li.className = "essay-row";
        const a = document.createElement("a");
        a.href = essayURL(e.slug);
        a.innerHTML =
          '<span class="essay-row__title">' + esc(e.title) + "</span>" +
          '<span class="essay-row__meta">' + fmtDateShort(e.date) + " · " +
            readingMinutes(e.body) + " min</span>";
        li.appendChild(a);

        if (query) {
          const ex = document.createElement("span");
          ex.className = "essay-row__excerpt";
          ex.textContent = e.excerpt;
          li.appendChild(ex);
        }
        ul.appendChild(li);
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        query = searchInput.value.trim().toLowerCase();
        render();
      });
      // Press "/" anywhere to jump to search
      document.addEventListener("keydown", function (ev) {
        if (ev.key === "/" && document.activeElement !== searchInput &&
            !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
          ev.preventDefault();
          searchInput.focus();
        }
      });
    }

    render();
  }

  /* ---------- Essay page ---------- */

  function initEssay() {
    const article = document.getElementById("essay");
    if (!article) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("e");
    const essays = sortedEssays();
    const idx = essays.findIndex(function (e) { return e.slug === slug; });
    const essay = idx === -1 ? null : essays[idx];

    const titleEl = document.getElementById("essay-title");
    const metaEl = document.getElementById("essay-meta");
    const bodyEl = document.getElementById("essay-body");
    const pnEl = document.getElementById("essay-pn");

    if (!essay) {
      document.title = "Essay not found";
      titleEl.textContent = "Essay not found";
      metaEl.textContent = "";
      bodyEl.innerHTML =
        "<p>There is no essay at this address — the link may be old, or the essay may have been folded into another.</p>" +
        '<p><a href="index.html">Back to all essays</a></p>';
      if (pnEl) pnEl.style.display = "none";
      return;
    }

    document.title = essay.title + " — Your Name";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", essay.excerpt);

    titleEl.textContent = essay.title;
    const mins = readingMinutes(essay.body);
    metaEl.innerHTML =
      "<time datetime=\"" + essay.date + "\">" + fmtDate(essay.date) + "</time>" +
      '<span class="sep">·</span><span>' + mins + " min read</span>" +
      '<span class="sep">·</span><span>' + essay.tags.map(esc).join(", ") + "</span>";

    bodyEl.innerHTML = essay.body + '<span class="endmark" aria-hidden="true"></span>';

    // Clickable anchors on h2s
    bodyEl.querySelectorAll("h2").forEach(function (h, i) {
      const id = h.id || ("s" + (i + 1));
      h.id = id;
      const a = document.createElement("a");
      a.className = "anchor";
      a.href = "#" + id;
      a.textContent = "#";
      a.setAttribute("aria-label", "Copy link to this section");
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        const url = window.location.href.split("#")[0] + "#" + id;
        if (navigator.clipboard) navigator.clipboard.writeText(url).catch(function () {});
        history.replaceState(null, "", "#" + id);
      });
      h.insertBefore(a, h.firstChild);
    });

    // Prev / next (by date order)
    if (pnEl) {
      pnEl.innerHTML = "";
      const newer = idx > 0 ? essays[idx - 1] : null;       // published after
      const older = idx < essays.length - 1 ? essays[idx + 1] : null; // published before
      if (older) {
        const a = document.createElement("a");
        a.className = "prev";
        a.href = essayURL(older.slug);
        a.innerHTML = '<span class="pn-label">← Older</span>' + esc(older.title);
        pnEl.appendChild(a);
      } else {
        pnEl.appendChild(document.createElement("span"));
      }
      if (newer) {
        const a = document.createElement("a");
        a.className = "next";
        a.href = essayURL(newer.slug);
        a.innerHTML = '<span class="pn-label">Newer →</span>' + esc(newer.title);
        pnEl.appendChild(a);
      }
    }

    // Reading progress
    const bar = document.querySelector(".progress__bar");
    if (bar) {
      const onScroll = function () {
        const doc = document.documentElement;
        const total = doc.scrollHeight - window.innerHeight;
        const pct = total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 100;
        bar.style.width = pct + "%";
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      onScroll();
    }
  }

  /* ---------- Random essay links ---------- */

  function initRandom() {
    document.querySelectorAll("[data-random]").forEach(function (el) {
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
        const essays = sortedEssays();
        const pick = essays[Math.floor(Math.random() * essays.length)];
        window.location.href = essayURL(pick.slug);
      });
    });
  }

  /* ---------- Subscribe form (front-end demo) ----------
     NOTE: this stores emails in localStorage so the UX works out
     of the box. To collect real subscribers, point the form at
     Buttondown, Substack, Beehiiv etc. — replace the handler below
     with the action URL your service gives you. */

  function initSubscribe() {
    document.querySelectorAll("[data-subscribe]").forEach(function (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const note = form.parentElement.querySelector(".form-note");
        const email = (input.value || "").trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          if (note) { note.textContent = "That does not look like an email address."; note.classList.remove("ok"); }
          input.focus();
          return;
        }
        try {
          const key = "subscribers";
          const list = JSON.parse(localStorage.getItem(key) || "[]");
          if (list.indexOf(email) === -1) list.push(email);
          localStorage.setItem(key, JSON.stringify(list));
        } catch (e) {}
        if (note) { note.textContent = "Thank you — new essays will find you."; note.classList.add("ok"); }
        form.reset();
      });
    });
  }

  /* ---------- Boot ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initYear();
    initIndex();
    initEssay();
    initRandom();
    initSubscribe();
  });
})();
