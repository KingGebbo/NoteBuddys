/* =========================================================
   Note Buddy's — E-Mail-Marketing · interactions
   ========================================================= */
(function () {
  "use strict";

  /* -----------------------------------------------------
     CONFIG — email delivery
     The funnel sends an email with the request to this address.
     Delivery uses FormSubmit (no backend needed). On the very
     first submission FormSubmit sends a one-time activation link
     to the inbox below — click it once and every later request
     is delivered automatically. A mailto fallback guarantees the
     data is never lost if the network relay is unavailable.
  ----------------------------------------------------- */
  var RECIPIENT = "gabriel.hilbrig@notebuddys.de";
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/" + RECIPIENT;

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var deDate = function () { return new Intl.NumberFormat("de-DE"); };
  var fmt = function (n) { return deDate().format(Math.round(n)); };

  /* =====================================================
     NAV: scroll state, mobile drawer, view tabs
  ===================================================== */
  var nav = $("#nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  var mnav = $("#mnav");
  $("#navToggle").addEventListener("click", function () { mnav.classList.toggle("open"); });

  function setView(name, opts) {
    opts = opts || {};
    $$(".view").forEach(function (v) { v.classList.toggle("active", v.id === "view-" + name); });
    $$(".tab-btn").forEach(function (b) {
      var on = b.dataset.view === name;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    // aktiven Reiter in der Hauptnavigation markieren
    $$(".nav-links a[data-nav]").forEach(function (a) {
      var on = a.dataset.nav === name;
      a.classList.toggle("is-current", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    mnav.classList.remove("open");
    if (!opts.silent) pushPath(pathForView(name));
    if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: "smooth" });
    // re-trigger reveals for newly shown view
    setTimeout(runReveal, 40);
  }

  /* =====================================================
     ROUTING
     /auswertungen und /kontakt sind echte, verlinkbare URLs.
     Vercel liefert dafuer index.html aus (siehe vercel.json),
     hier wird daraus die passende Ansicht gewaehlt.
  ===================================================== */
  function pathForView(name) {
    if (name === "auswertungen") return "/auswertungen";
    if (name === "kontakt") return "/kontakt";
    return "/";
  }

  function canRoute() {
    return window.history && window.history.pushState &&
      (location.protocol === "http:" || location.protocol === "https:");
  }

  function pushPath(path) {
    if (!canRoute()) return;
    if (location.pathname === path) return;
    try { history.pushState({ path: path }, "", path + location.hash); } catch (e) { /* egal */ }
  }

  function applyPath(push) {
    var parts = location.pathname.replace(/^\/+|\/+$/g, "").split("/");
    var first = (parts[0] || "").toLowerCase();
    if (first === "auswertungen") {
      setView("auswertungen", { silent: true, keepScroll: true });
      // /auswertungen/<slug> springt direkt zur Passwortabfrage der Firma
      var slug = parts[1] ? decodeURIComponent(parts[1]).toLowerCase() : null;
      if (slug) { pendingSlug = slug; applyPendingSlug(); }
      else { pendingSlug = null; showStep("select"); }
      return;
    }
    if (first === "kontakt") { setView("kontakt", { silent: true, keepScroll: true }); return; }
    setView("marketing", { silent: true, keepScroll: true });
  }

  $$(".tab-btn").forEach(function (b) {
    b.addEventListener("click", function () { setView(b.dataset.view); });
  });

  // links that must first switch to the marketing view, then scroll
  $$("[data-view-link]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = a.dataset.viewLink;
      var hash = a.getAttribute("href") || "";
      // Echte Pfade (/auswertungen, /kontakt, /) intern aufloesen statt neu zu laden
      if (hash.charAt(0) === "/") {
        e.preventDefault();
        if (!$("#view-" + target).classList.contains("active")) {
          setView(target, { keepScroll: true });
        } else {
          pushPath(pathForView(target));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        mnav.classList.remove("open");
        return;
      }
      if (!$("#view-" + target).classList.contains("active")) {
        e.preventDefault();
        setView(target, { keepScroll: true });
        if (hash && hash.indexOf("#") === 0 && hash.length > 1) {
          setTimeout(function () {
            var el = $(hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 120);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
      mnav.classList.remove("open");
    });
  });

  // "Anfrage starten" buttons anywhere → ensure marketing view + scroll to funnel
  $$("[data-scroll-anfrage]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      setView("marketing", { keepScroll: true });
      setTimeout(function () { $("#anfrage").scrollIntoView({ behavior: "smooth" }); }, 100);
    });
  });

  $("#year").textContent = new Date().getFullYear();

  /* =====================================================
     REVEAL ON SCROLL
  ===================================================== */
  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  function runReveal() {
    $$(".reveal:not(.in)").forEach(function (el) {
      if (io) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("in"); else io.observe(el);
      } else { el.classList.add("in"); }
    });
  }

  /* =====================================================
     COUNTERS + BAR FILLS (fire when visible)
  ===================================================== */
  function animateCount(el) {
    var target = parseFloat(el.dataset.count);
    var dur = 1400, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target);
    }
    requestAnimationFrame(tick);
  }
  var countObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      $$("[data-count]", en.target).forEach(function (c) {
        if (!c.dataset.done) { c.dataset.done = "1"; animateCount(c); }
      });
      $$("[data-fill]", en.target).forEach(function (f) { f.style.width = f.dataset.fill + "%"; });
      countObs.unobserve(en.target);
    });
  }, { threshold: 0.25 });
  $$(".hero-panel, .perf-card, .hp-stats").forEach(function (el) { countObs.observe(el); });

  /* =====================================================
     TARGETING EXPLORER
  ===================================================== */
  var TARGET_DATA = {
    studierende: {
      base: 250000,
      label: "Studierende bundesweit",
      criteria: [
        { k: "uni", t: "Universität / Hochschule", s: "Gezielt einzelne Hochschulen", f: 0.42, ic: "cap" },
        { k: "fachrichtung", t: "Fachrichtung", s: "z. B. BWL, Informatik, Jura", f: 0.30, ic: "book" },
        { k: "semester", t: "Semester", s: "1. Semester bis Examen", f: 0.55, ic: "layers" },
        { k: "fortschritt", t: "Studienfortschritt", s: "Bachelor, Master, Promotion", f: 0.6, ic: "steps" },
        { k: "note", t: "Notenschnitt", s: "Leistungsstarke Talente", f: 0.5, ic: "star" },
        { k: "interessen", t: "Interessen", s: "Themen & Branchen", f: 0.48, ic: "heart" },
        { k: "anschrift", t: "Anschrift", s: "Für postalisches Crossmedia", f: 0.7, ic: "home" },
        { k: "region", t: "Region", s: "Bundesland, Stadt, Umkreis", f: 0.38, ic: "pin" }
      ]
    },
    schueler: {
      base: 250000,
      label: "Schüler bundesweit",
      criteria: [
        { k: "schulform", t: "Schulform", s: "Gymnasium, Realschule u. a.", f: 0.45, ic: "school" },
        { k: "note", t: "Notenschnitt", s: "Leistungsstarke Schüler", f: 0.5, ic: "star" },
        { k: "interesse", t: "Interessengebiet", s: "Fächer & Themen", f: 0.48, ic: "heart" },
        { k: "planung", t: "Planung nach der Schule", s: "Ausbildung, Studium, Reisen", f: 0.5, ic: "compass" },
        { k: "anschrift", t: "Anschrift", s: "Für postalisches Crossmedia", f: 0.7, ic: "home" },
        { k: "region", t: "Region", s: "Bundesland, Stadt, Umkreis", f: 0.38, ic: "pin" }
      ]
    }
  };

  var ICONS = {
    cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/>',
    book: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 5v14"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    steps: '<path d="M4 20h4v-4h4v-4h4V8h4"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    heart: '<path d="M12 20s-7-4.5-9.5-8.5C.8 8.5 2.5 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.5 0 5.2 3.5 3.5 6.5C19 15.5 12 20 12 20z"/>',
    home: '<path d="M4 11l8-6 8 6"/><path d="M6 10v9h12v-9"/>',
    pin: '<path d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>',
    school: '<path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11v5c0 1 2.2 2 5 2s5-1 5-2v-5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>'
  };
  function svg(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || "") + "</svg>";
  }
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';

  var explorer = $("#explorer");
  var chipsEl = $("#chips");
  var curAud = "studierende";
  var active = {};  // {aud: {key:true}}

  function renderChips() {
    var data = TARGET_DATA[curAud];
    active[curAud] = active[curAud] || {};
    chipsEl.innerHTML = "";
    data.criteria.forEach(function (c) {
      var on = !!active[curAud][c.k];
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (on ? " on" : "");
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.innerHTML =
        '<span class="ic">' + svg(c.ic) + "</span>" +
        '<span class="tx"><b>' + c.t + "</b><span>" + c.s + "</span></span>" +
        '<span class="tick">' + CHECK + "</span>";
      b.addEventListener("click", function () {
        active[curAud][c.k] = !active[curAud][c.k];
        b.classList.toggle("on", active[curAud][c.k]);
        b.setAttribute("aria-pressed", active[curAud][c.k] ? "true" : "false");
        updateReach();
      });
      chipsEl.appendChild(b);
    });
    updateReach();
  }

  function updateReach() {
    var data = TARGET_DATA[curAud];
    var act = active[curAud] || {};
    var reach = data.base;
    var tags = [];
    data.criteria.forEach(function (c) {
      // Defensive reach model: each active filter cuts reach only half as
      // much as its raw selectivity would (1 - f) → halved to (1 - f) / 2.
      if (act[c.k]) { reach *= (1 + c.f) / 2; tags.push(c.t); }
    });
    reach = Math.max(Math.round(reach / 100) * 100, 800);

    animateReach(reach);
    $("#reachSub").textContent = tags.length ? tags.length + " Filter aktiv · " + data.label : "Alle Empfänger: " + data.label;
    $("#reachMeter").style.width = Math.max((reach / data.base) * 100, 4) + "%";
    $("#reachMax").textContent = fmt(data.base);

    var tagsEl = $("#reachTags");
    if (!tags.length) { tagsEl.innerHTML = '<span class="reach-empty">Noch keine Filter gewählt</span>'; }
    else {
      tagsEl.innerHTML = "";
      tags.forEach(function (t) {
        var s = document.createElement("span");
        s.className = "reach-tag"; s.textContent = t;
        tagsEl.appendChild(s);
      });
    }
  }

  var reachAnim;
  function animateReach(to) {
    var el = $("#reachNum");
    var from = parseInt((el.textContent || "0").replace(/\D/g, ""), 10) || 0;
    var start = null, dur = 550;
    cancelAnimationFrame(reachAnim);
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(from + (to - from) * eased);
      if (p < 1) reachAnim = requestAnimationFrame(tick);
    }
    reachAnim = requestAnimationFrame(tick);
  }

  $$(".aud-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      curAud = b.dataset.aud;
      explorer.dataset.aud = curAud;
      $$(".aud-btn").forEach(function (x) { x.classList.toggle("active", x === b); });
      renderChips();
    });
  });
  renderChips();

  /* =====================================================
     FUNNEL FORM (branching multi-step)
  ===================================================== */
  var STEPS = {
    common_start: {
      name: "Zielgruppe wählen",
      title: "An welcher Zielgruppe sind Sie interessiert?",
      help: "Wählen Sie, wen Ihre Kampagne erreichen soll. Der Fragebogen passt sich Ihrer Wahl an.",
      type: "choice"
    },
    schueler: [
      { key: "regionen", name: "Regionen & Schulen", title: "Welche Regionen oder Schulen sind für Sie interessant?", type: "text", placeholder: "z. B. NRW, Raum München, bestimmte Gymnasien …" },
      { key: "planung", name: "Zukunftsplanung", title: "Gewünschte Zukunftsplanung der Schüler?", help: "Mehrfachauswahl möglich.", type: "multi", options: ["Ausbildung", "Duales Studium", "Studium", "Arbeit", "Reisen", "Egal"] },
      { key: "schulform", name: "Schulform", title: "Gewünschte Schulform", type: "text", placeholder: "z. B. Gymnasium, Realschule, Berufskolleg …" },
      { key: "zeitraum", name: "Zeitraum", title: "Gewünschter Zeitraum", help: "Freiwillig — wann soll die Kampagne laufen?", type: "text", optional: true, placeholder: "z. B. Herbst 2026, flexibel …" }
    ],
    studenten: [
      { key: "regionen", name: "Regionen & Unis", title: "Welche Regionen oder Unis / Hochschulen sind für Sie interessant?", type: "text", placeholder: "z. B. bundesweit, TU München, Raum Berlin …" },
      { key: "fachrichtungen", name: "Fachrichtungen", title: "Welche Fachrichtungen sind für Sie spannend?", type: "text", placeholder: "z. B. Informatik, BWL, Ingenieurwesen …" },
      { key: "fortschritt", name: "Studienfortschritt", title: "Studienfortschritt?", help: "Mehrfachauswahl möglich.", type: "multi", options: ["Bachelor 1.-3. Semester", "Bachelor 3.-6. Semester", "Bachelor Absolventen", "Master", "Doktoranden"] },
      { key: "zeitraum", name: "Zeitraum", title: "Gewünschter Zeitraum", help: "Freiwillig — wann soll die Kampagne laufen?", type: "text", optional: true, placeholder: "z. B. Sommersemester 2026, flexibel …" }
    ],
    contact: {
      key: "contact", name: "Kontakt", title: "Wohin dürfen wir die Auswertung senden?",
      help: "Wir melden uns zeitnah mit einer Auswertung Ihrer Zielgruppe.", type: "contact"
    }
  };

  var funnel = {
    audience: null,           // 'schueler' | 'studenten'
    idx: 0,                   // index within the flow (0 = start)
    answers: {}
  };

  var body = $("#funnelBody");
  var btnNext = $("#btnNext");
  var btnBack = $("#btnBack");
  var progressBar = $("#progressBar");
  var stepName = $("#stepName");
  var stepCount = $("#stepCount");

  function flow() {
    // Ordered list of step descriptors for the current audience
    var list = [STEPS.common_start];
    if (funnel.audience) {
      list = list.concat(STEPS[funnel.audience === "schueler" ? "schueler" : "studenten"]);
      list.push(STEPS.contact);
    }
    return list;
  }

  function totalSteps() {
    // start + branch(4) + contact = 6 once audience chosen; show 6 as target
    return funnel.audience ? flow().length : 6;
  }

  function render() {
    var list = flow();
    var step = list[funnel.idx];
    body.innerHTML = "";

    var wrap = document.createElement("div");
    wrap.className = "fstep active";

    var h = document.createElement("h3");
    h.textContent = step.title;
    wrap.appendChild(h);

    if (step.help) {
      var help = document.createElement("p");
      help.className = "q-help"; help.textContent = step.help;
      wrap.appendChild(help);
    }

    if (step.type === "choice") {
      wrap.appendChild(buildChoice());
    } else if (step.type === "text") {
      wrap.appendChild(buildText(step));
    } else if (step.type === "multi") {
      wrap.appendChild(buildMulti(step));
    } else if (step.type === "contact") {
      wrap.appendChild(buildContact());
    }

    var err = document.createElement("div");
    err.className = "err"; err.id = "fErr";
    wrap.appendChild(err);

    body.appendChild(wrap);

    // footer state
    btnBack.hidden = funnel.idx === 0;
    var isLast = step.type === "contact";
    btnNext.innerHTML = isLast
      ? 'Anfrage absenden <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>'
      : 'Weiter <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    btnNext.style.display = step.type === "choice" ? "none" : "inline-flex";

    // progress
    var total = totalSteps();
    var pct = Math.round(((funnel.idx + (step.type === "choice" ? 0 : 1)) / total) * 100);
    progressBar.style.width = Math.max(pct, 8) + "%";
    stepName.textContent = step.name || step.title;
    stepCount.textContent = "Schritt " + (funnel.idx + 1) + " / " + total;
  }

  function buildChoice() {
    var grid = document.createElement("div");
    grid.className = "choice-grid";
    var opts = [
      { id: "schueler", b: "Schüler", s: "Gymnasium, Realschule & Co. Erreichen Sie die nächste Generation vor der Ausbildungs- oder Studienwahl.", ic: '<path d="M4 19V6a2 2 0 012-2h12v15"/><path d="M6 17h12v3H6a2 2 0 010-3z"/>', cls: "" },
      { id: "studenten", b: "Studenten", s: "Universitäten & Hochschulen bundesweit. Sprechen Sie Studierende gezielt nach Fach und Fortschritt an.", ic: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/>', cls: "orange" }
    ];
    opts.forEach(function (o) {
      var c = document.createElement("button");
      c.type = "button"; c.className = "choice " + o.cls;
      c.innerHTML =
        '<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + o.ic + "</svg></span>" +
        "<b>" + o.b + "</b><span>" + o.s + "</span>" +
        '<span class="go">Auswählen <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
      c.addEventListener("click", function () {
        funnel.audience = o.id;
        funnel.answers.audience = o.b;
        funnel.idx = 1;
        render();
      });
      grid.appendChild(c);
    });
    return grid;
  }

  function buildText(step) {
    var f = document.createElement("div"); f.className = "field";
    var ta = document.createElement("textarea");
    ta.className = "input"; ta.rows = 2; ta.id = "fInput";
    ta.placeholder = step.placeholder || "";
    ta.value = funnel.answers[step.key] || "";
    ta.addEventListener("input", function () { funnel.answers[step.key] = ta.value; });
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); next(); }
    });
    f.appendChild(ta);
    return f;
  }

  function buildMulti(step) {
    var box = document.createElement("div"); box.className = "multi";
    funnel.answers[step.key] = funnel.answers[step.key] || [];
    step.options.forEach(function (opt) {
      var sel = funnel.answers[step.key].indexOf(opt) > -1;
      var b = document.createElement("button");
      b.type = "button"; b.className = "opt-chip" + (sel ? " on" : "");
      b.setAttribute("aria-pressed", sel ? "true" : "false");
      b.innerHTML = '<span class="box">' + CHECK + "</span>" + opt;
      b.addEventListener("click", function () {
        var arr = funnel.answers[step.key];
        var i = arr.indexOf(opt);
        if (i > -1) arr.splice(i, 1); else arr.push(opt);
        b.classList.toggle("on", i === -1);
        b.setAttribute("aria-pressed", i === -1 ? "true" : "false");
      });
      box.appendChild(b);
    });
    return box;
  }

  function buildContact() {
    var frag = document.createDocumentFragment();
    var a = funnel.answers;

    function field(label, id, ph, type, optional) {
      var f = document.createElement("div"); f.className = "field";
      var lab = document.createElement("label"); lab.setAttribute("for", id);
      lab.innerHTML = label + (optional ? ' <span class="opt">(optional)</span>' : "");
      var inp = document.createElement("input");
      inp.className = "input"; inp.id = id; inp.type = type || "text"; inp.placeholder = ph || "";
      inp.value = a[id] || "";
      inp.addEventListener("input", function () { a[id] = inp.value; });
      f.appendChild(lab); f.appendChild(inp);
      return f;
    }

    var row = document.createElement("div");
    row.style.display = "grid"; row.style.gridTemplateColumns = "1fr 1fr"; row.style.gap = "16px";
    row.appendChild(field("Unternehmen / Agentur", "company", "Firmenname", "text", false));
    row.appendChild(field("Ansprechpartner", "name", "Vor- und Nachname", "text", false));
    frag.appendChild(row);

    var row2 = document.createElement("div");
    row2.style.display = "grid"; row2.style.gridTemplateColumns = "1fr 1fr"; row2.style.gap = "16px";
    row2.appendChild(field("E-Mail", "email", "name@unternehmen.de", "email", false));
    row2.appendChild(field("Telefon", "phone", "Für Rückfragen", "tel", true));
    frag.appendChild(row2);

    // message
    var fm = document.createElement("div"); fm.className = "field";
    var lm = document.createElement("label"); lm.setAttribute("for", "message");
    lm.innerHTML = 'Nachricht <span class="opt">(optional)</span>';
    var tm = document.createElement("textarea");
    tm.className = "input"; tm.id = "message"; tm.placeholder = "Worum geht es bei Ihrer Kampagne?";
    tm.value = a.message || "";
    tm.addEventListener("input", function () { a.message = tm.value; });
    fm.appendChild(lm); fm.appendChild(tm);
    frag.appendChild(fm);

    // consent
    var cons = document.createElement("label"); cons.className = "consent";
    var cb = document.createElement("input"); cb.type = "checkbox"; cb.id = "consent"; cb.checked = !!a.consent;
    cb.addEventListener("change", function () { a.consent = cb.checked; });
    var txt = document.createElement("span");
    txt.innerHTML = "Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Die Angaben werden nicht an Dritte weitergegeben.";
    cons.appendChild(cb); cons.appendChild(txt);
    frag.appendChild(cons);

    return frag;
  }

  function showErr(msg) {
    var e = $("#fErr");
    if (e) { e.textContent = msg; e.classList.add("show"); }
  }
  function clearErr() { var e = $("#fErr"); if (e) e.classList.remove("show"); }

  function validate(step) {
    clearErr();
    if (step.type === "text" && !step.optional) {
      if (!(funnel.answers[step.key] || "").trim()) { showErr("Bitte füllen Sie dieses Feld aus."); return false; }
    }
    if (step.type === "multi") {
      if (!(funnel.answers[step.key] || []).length) { showErr("Bitte wählen Sie mindestens eine Option."); return false; }
    }
    if (step.type === "contact") {
      var a = funnel.answers;
      if (!(a.company || "").trim()) { showErr("Bitte geben Sie Ihr Unternehmen an."); return false; }
      if (!(a.name || "").trim()) { showErr("Bitte geben Sie einen Ansprechpartner an."); return false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email || "")) { showErr("Bitte geben Sie eine gültige E-Mail-Adresse an."); return false; }
      if (!a.consent) { showErr("Bitte bestätigen Sie die Verarbeitung Ihrer Angaben."); return false; }
    }
    return true;
  }

  function next() {
    var list = flow();
    var step = list[funnel.idx];
    if (step.type === "choice") return;
    if (!validate(step)) return;
    if (step.type === "contact") { submit(); return; }
    funnel.idx++;
    render();
    body.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function back() {
    if (funnel.idx === 0) return;
    if (funnel.idx === 1) { funnel.audience = null; funnel.idx = 0; render(); return; }
    funnel.idx--;
    render();
  }

  btnNext.addEventListener("click", next);
  btnBack.addEventListener("click", back);

  /* ---------- build readable payload ---------- */
  function buildSummary() {
    var a = funnel.answers;
    var rows = [];
    rows.push(["Zielgruppe", a.audience || ""]);
    var branch = funnel.audience === "schueler" ? STEPS.schueler : STEPS.studenten;
    branch.forEach(function (s) {
      var v = a[s.key];
      if (Array.isArray(v)) v = v.join(", ");
      if (v && String(v).trim()) rows.push([s.title.replace(/\?$/, ""), v]);
    });
    rows.push(["Unternehmen / Agentur", a.company || ""]);
    rows.push(["Ansprechpartner", a.name || ""]);
    rows.push(["E-Mail", a.email || ""]);
    if ((a.phone || "").trim()) rows.push(["Telefon", a.phone]);
    if ((a.message || "").trim()) rows.push(["Nachricht", a.message]);
    return rows;
  }

  function submit() {
    var rows = buildSummary();
    var a = funnel.answers;

    // payload for the relay (each key becomes a line in the email)
    var payload = { _subject: "Neue Zielgruppen-Anfrage · " + (a.company || a.name || "Business-Kunde") };
    rows.forEach(function (r) { payload[r[0]] = r[1]; });

    btnNext.disabled = true;
    var original = btnNext.innerHTML;
    btnNext.innerHTML = "Senden …";

    var mailtoHref = buildMailto(rows, payload._subject);

    // Abort the relay after 9s so the mailto fallback always appears promptly.
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 9000) : null;

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (r) { if (!r.ok) throw new Error("bad status"); return r.json().catch(function () { return {}; }); })
      .then(function () { finishSuccess(rows, false, mailtoHref); })
      .catch(function () { finishSuccess(rows, true, mailtoHref); })
      .then(function () { if (timer) clearTimeout(timer); btnNext.disabled = false; btnNext.innerHTML = original; });
  }

  function buildMailto(rows, subject) {
    var bodyLines = rows.map(function (r) { return r[0] + ": " + r[1]; }).join("\n");
    return "mailto:" + RECIPIENT +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent("Neue Zielgruppen-Anfrage über notebuddys.de\n\n" + bodyLines);
  }

  function finishSuccess(rows, usedFallback, mailtoHref) {
    // hide the step body + footer, show success
    body.style.display = "none";
    $("#funnelFoot").style.display = "none";
    $(".funnel-top").style.display = "none";

    var sum = $("#successSummary");
    sum.innerHTML = "";
    rows.forEach(function (r) {
      if (!String(r[1]).trim()) return;
      var d = document.createElement("div"); d.className = "r";
      d.innerHTML = '<span class="k">' + r[0] + '</span><span class="v">' + escapeHtml(r[1]) + "</span>";
      sum.appendChild(d);
    });

    if (usedFallback) {
      var note = document.createElement("div"); note.className = "r";
      note.style.marginTop = "10px"; note.style.paddingTop = "14px"; note.style.borderTop = "1px solid var(--line)";
      note.innerHTML = '<span class="v" style="font-weight:600;color:var(--ink);">Automatischer Versand nicht möglich — bitte einmal auf den Button tippen, um die Anfrage per E-Mail zu senden.</span>';
      sum.appendChild(note);
      var wrap = document.createElement("div");
      wrap.style.textAlign = "center"; wrap.style.marginTop = "16px";
      var link = document.createElement("a");
      link.className = "btn btn-primary"; link.href = mailtoHref;
      link.textContent = "Anfrage per E-Mail senden";
      wrap.appendChild(link);
      sum.appendChild(wrap);
    }

    $("#funnelSuccess").classList.add("show");
    $("#funnelSuccess").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  render();

  /* =====================================================
     AUSWERTUNGEN
     Schritt 1 Firma waehlen, Schritt 2 Passwort, Schritt 3 Report.
     Die Kundendaten liegen in assets/reports.json verschluesselt
     (AES-256-GCM, Schluessel via PBKDF2 aus dem Passwort). Erst mit
     dem richtigen Passwort werden sie im Browser entschluesselt.
  ===================================================== */

  var BENCH_REF = { reposts: 0.2, lp: 0.3, qr: 0.05 };   // Branchendurchschnitt
  var BENCH_NB  = { reposts: 0.8, lp: 0.9, qr: 0.6 };    // Note Buddy's-Durchschnitt
  var MAIL_REF  = { oeffnung: 20, klick: 2 };            // Branchendurchschnitt Mailing

  // Formular, ueber das Kunden die Inhalte fuer ein ausstehendes Mailing hochladen
  var MAILING_UPLOAD_URL = "https://forms.monday.com/forms/2fd9d9d67c9f4485f12c4cb4dc4139e2?r=use1";

  var reportsData = null;
  var selSlug = null;
  var pendingSlug = null;

  function pctTxt(v, digits) {
    if (v === null || v === undefined) return "–";
    return v.toFixed(digits === undefined ? 1 : digits).replace(".", ",") + " %";
  }
  function num(v) { return (v === null || v === undefined) ? "–" : fmt(v); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Schritt 1: Firmenliste ---------- */
  function initSelect() {
    var grid = $("#firmGrid");
    if (!grid || !reportsData) return;
    grid.innerHTML = "";
    reportsData.kampagnen.forEach(function (k) {
      if (k.oeffentlich) return;               // Beispiel laeuft ueber den Demo-Button
      var b = document.createElement("button");
      b.type = "button";
      b.className = "firm-card";
      b.dataset.name = k.name.toLowerCase();
      b.innerHTML =
        '<span class="fc-name">' + esc(k.name) + "</span>" +
        '<span class="fc-lock">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>' +
          "Passwort" +
        "</span>";
      b.addEventListener("click", function () { openGate(k.slug, k.name); });
      grid.appendChild(b);
    });

    var search = $("#firmSearch");
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      $$(".firm-card", grid).forEach(function (c) {
        var hit = !q || c.dataset.name.indexOf(q) > -1;
        c.hidden = !hit;
        if (hit) shown++;
      });
      $("#firmEmpty").hidden = shown > 0;
    });
  }

  function showStep(step) {
    $("#ausSelect").hidden = step !== "select";
    $("#ausGate").hidden = step !== "gate";
    $("#ausReport").hidden = step !== "report";
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(runReveal, 40);
  }

  /* ---------- Schritt 2: Passwort ---------- */
  function openGate(slug, name, silent) {
    selSlug = slug;
    if (!silent) pushPath("/auswertungen/" + slug);
    $("#gateName").textContent = name;
    $("#gatePw").value = "";
    $("#gateErr").classList.remove("show");
    showStep("gate");
    setTimeout(function () { $("#gatePw").focus(); }, 300);
  }

  function b64ToBuf(b64) {
    var bin = atob(b64), buf = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    return buf;
  }

  function normalizePw(pw) {
    return String(pw).trim().toLowerCase().replace(/\s+/g, " ");
  }

  function decryptReport(tresor, password, rounds) {
    var subtle = window.crypto && window.crypto.subtle;
    if (!subtle) return Promise.reject(new Error("insecure-context"));
    var enc = new TextEncoder();
    return subtle.importKey("raw", enc.encode(normalizePw(password)), "PBKDF2", false, ["deriveKey"])
      .then(function (base) {
        return subtle.deriveKey(
          { name: "PBKDF2", salt: b64ToBuf(tresor.salt), iterations: rounds, hash: "SHA-256" },
          base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]
        );
      })
      .then(function (key) {
        return subtle.decrypt({ name: "AES-GCM", iv: b64ToBuf(tresor.iv) }, key, b64ToBuf(tresor.data));
      })
      .then(function (plain) { return JSON.parse(new TextDecoder().decode(plain)); });
  }

  function initGate() {
    var form = $("#gateForm");
    if (!form) return;
    $("#gateBack").addEventListener("click", function () { pushPath("/auswertungen"); showStep("select"); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var pw = $("#gatePw").value;
      var err = $("#gateErr");
      var btn = $("#gateSubmit");
      var entry = reportsData.kampagnen.filter(function (k) { return k.slug === selSlug; })[0];
      if (!entry || !pw) { err.textContent = "Bitte geben Sie Ihr Passwort ein."; err.classList.add("show"); return; }

      err.classList.remove("show");
      btn.disabled = true;
      var label = btn.textContent;
      btn.textContent = "Wird geprüft …";

      decryptReport(entry.tresor, pw, reportsData.runden)
        .then(function (daten) {
          renderReport(daten);
          showStep("report");
        })
        .catch(function (ex) {
          if (ex && ex.message === "insecure-context") {
            err.textContent = "Verschlüsselung steht nur über https zur Verfügung. Bitte öffnen Sie die Seite über notebuddys.de.";
          } else {
            err.textContent = "Das Passwort stimmt nicht. Ihr Passwort ist Ihr Firmenname, genau wie in der Liste.";
          }
          err.classList.add("show");
        })
        .then(function () { btn.disabled = false; btn.textContent = label; });
    });
  }

  /* ---------- Schritt 3: Report rendern ---------- */
  function renderReport(d) {
    var host = $("#ausReport");
    var v = d.verschickt;
    var rate = function (x) { return (v && x !== null && x !== undefined) ? (x / v * 100) : null; };
    var rRepost = rate(d.reposts), rLp = rate(d.lpKlicks), rQr = rate(d.qrScans);
    // Mailing-Klicks aus Klickrate und Versandmenge, wenn ein Mailing gelaufen ist.
    // Grundlage ist die verschickte Menge, weil das Sheet keine eigene Mailing-Menge fuehrt.
    var mailKlicks = (d.mailing && !d.mailing.ausstehend && d.mailing.klickrate && v)
      ? Math.round(v * d.mailing.klickrate / 100) : null;
    var bannerKlicks = (d.banner && d.banner.klicks) ? d.banner.klicks : null;
    var interakt = ["reposts", "qrScans", "lpKlicks"].reduce(function (a, k) {
      return a + (typeof d[k] === "number" ? d[k] : 0);
    }, 0) + (mailKlicks || 0) + (bannerKlicks || 0);
    // Benchmarks und Trichter nur zeigen, wenn es ueberhaupt Block-Interaktionen gab.
    // Reine Mailing-Kampagnen wuerden sonst ueberall 0 % anzeigen.
    var interaktionenVorhanden = ((d.reposts || 0) + (d.qrScans || 0) + (d.lpKlicks || 0) + (mailKlicks || 0) + (bannerKlicks || 0)) > 0;
    var hatBlockDaten = !!v && interaktionenVorhanden;

    var html = "";

    /* Kopf */
    html +=
      '<section class="aus-hero">' +
        '<div class="wrap">' +
          '<button type="button" class="link-back" id="repBack">' +
            '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>' +
            "Zurück zur Übersicht" +
          "</button>" +
          '<div class="aus-hero-grid">' +
            "<div>" +
              '<span class="eyebrow reveal">Kampagnen-Report</span>' +
              '<h1 class="reveal d1">' + esc(d.name) + "</h1>" +
              '<p class="aus-lead reveal d2">Alle Kennzahlen Ihrer Kampagne auf einen Blick: Reichweite, Interaktionen, Benchmarks im Marktvergleich und unsere Empfehlung für den nächsten Schritt.</p>' +
            "</div>" +
            '<aside class="aus-hero-card reveal d2">' +
              '<div class="ahc-top">' +
                '<span class="ahc-badge">' + esc(d.produkt || "Kampagne") + "</span>" +
                (d.status ? '<span class="ahc-status">' + esc(d.status) + "</span>" : "") +
              "</div>" +
              "<h3>" + esc(d.name) + "</h3>" +
              '<p class="ahc-sub">' + esc(d.semester || "Aktuelle Kampagne") + "</p>" +
              '<div class="ahc-stats">' +
                "<div><b>" + num(d.verschickt) + "</b><span>verschickt</span></div>" +
                "<div><b>" + num(d.impressionen) + "</b><span>Impressionen</span></div>" +
                "<div><b>" + (hatBlockDaten ? fmt(interakt) : "–") + "</b><span>Interaktionen</span></div>" +
              "</div>" +
            "</aside>" +
          "</div>" +
        "</div>" +
      "</section>";

    /* Infobox Versand */
    if (d.versandInfo) {
      html +=
        '<section class="aus-infobox-sec"><div class="wrap">' +
          '<div class="infobox reveal">' +
            '<span class="ib-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v6"/></svg></span>' +
            "<div><b>Infos zum Versand</b><p>" + esc(d.versandInfo) + "</p></div>" +
          "</div>" +
        "</div></section>";
    }

    /* KPI */
    html += '<section class="aus-kpi-sec"><div class="wrap">' +
      '<div class="section-head reveal"><span class="eyebrow">Performance</span>' +
      "<h2>Die Kennzahlen auf einen Blick.</h2></div>" +
      '<div class="kpi-grid">';

    function kpi(val, label, accent, delay) {
      return '<article class="kpi reveal' + (delay ? " d" + delay : "") + '">' +
        '<span class="kpi-ic' + (accent ? " accent" : "") + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>' +
        "</span><b>" + val + '</b><span class="kpi-lbl">' + label + "</span></article>";
    }
    html += kpi(esc(d.gebucht || "–"), "gebucht", false, 0);
    html += kpi(num(d.verschickt), "verschickt", false, 1);
    html += kpi(num(d.impressionen), "Impressionen", false, 2);
    html += kpi(num(d.qrScans), "QR-Code-Scans", true, 3);
    html += kpi(num(d.reposts), "Social-Media-Reposts", true, 0);
    html += kpi(num(d.lpAufrufe), "Landingpage-Aufrufe", true, 1);
    if (d.mailing && d.mailing.oeffnungsrate !== null && d.mailing.oeffnungsrate !== undefined) {
      html += kpi(pctTxt(d.mailing.oeffnungsrate), "Öffnungsrate " + esc(d.mailing.label || "Mailings"), false, 2);
      html += kpi(pctTxt(d.mailing.klickrate), "Klickrate " + esc(d.mailing.label || "Mailings"), false, 3);
    }
    if (d.banner) {
      html += kpi(num(d.banner.ausspielungen), "Banner-Ausspielungen", false, 2);
      html += kpi(num(d.banner.klicks), "Banner-Klicks", false, 3);
    }
    html += "</div></div></section>";

    /* Tabelle */
    html += '<section class="aus-table-sec"><div class="wrap">' +
      '<div class="section-head reveal"><span class="eyebrow">Detailtabelle</span><h2>Alle Werte im Detail.</h2></div>' +
      '<div class="report-card reveal d1">' +
        '<div class="report-card-head"><h3>Note Buddy\'s · ' + esc(d.produkt || "Kampagne") + "</h3>" +
        (d.semester ? '<span class="rc-pill">' + esc(d.semester) + "</span>" : "") + "</div>" +
        '<div class="table-scroll"><table class="report-table">' +
          "<thead><tr><th>Anz. gebucht</th><th>Anz. verschickt</th><th>Impressionen</th><th>QR-Code-Scans</th></tr></thead>" +
          "<tbody><tr><td><b>" + esc(d.gebucht || "–") + "</b></td><td><b>" + num(d.verschickt) +
          "</b></td><td><b>" + num(d.impressionen) + "</b></td><td><b>" + num(d.qrScans) + "</b></td></tr></tbody>" +
        "</table></div>" +
        '<div class="table-split">' +
          '<div class="table-scroll"><table class="report-table"><caption>Social Media Reposts</caption>' +
            "<thead><tr><th>Anz. Reposts</th><th>Impressionen</th></tr></thead>" +
            "<tbody><tr><td><b>" + num(d.reposts) + "</b></td><td><b>" + num(d.repostImpressionen) + "</b></td></tr></tbody></table></div>" +
          '<div class="table-scroll"><table class="report-table"><caption>Landingpage</caption>' +
            "<thead><tr><th>Anz. Aufrufe</th><th>Anz. Klicks</th></tr></thead>" +
            "<tbody><tr><td><b>" + num(d.lpAufrufe) + "</b></td><td><b>" + num(d.lpKlicks) + "</b></td></tr></tbody></table></div>" +
        "</div>";
    if (d.mailing && !d.mailing.ausstehend) {
      html += '<div class="table-scroll" style="margin-top:8px"><table class="report-table"><caption>' +
        esc(d.mailing.label || "Mailings") + "</caption>" +
        "<thead><tr><th>Öffnungsrate</th><th>Klickrate</th>" +
        (d.mailing.zeitpunkt ? "<th>Zeitpunkt</th>" : "") + "</tr></thead><tbody><tr><td><b>" +
        pctTxt(d.mailing.oeffnungsrate) + "</b></td><td><b>" + pctTxt(d.mailing.klickrate) + "</b></td>" +
        (d.mailing.zeitpunkt ? "<td><b>" + esc(d.mailing.zeitpunkt) + "</b></td>" : "") +
        "</tr></tbody></table></div>";
    }
    if ((d.produkt || "").indexOf("Collegeblöcke") > -1) {
      html += '<p class="report-note">Wussten Sie schon? Der Collegeblock ist das Lerntool Nummer 1 der jungen Zielgruppe. Pro Monat erhalten wir ca. 5.000 bis 6.000 neue Anmeldungen für unsere Blöcke.</p>';
    }
    html += "</div></div></section>";

    /* Empfehlung QR-Code, wenn keine Scans erfasst wurden */
    if (d.qrEmpfehlung) {
      html += '<section class="aus-infobox-sec"><div class="wrap">' +
        '<div class="infobox qr reveal">' +
          '<span class="ib-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM18 18h3v3h-3z"/></svg></span>' +
          "<div><b>Unsere Empfehlung: platzieren Sie einen QR-Code</b>" +
          "<p>Für diese Kampagne liegen uns keine QR-Code-Scans vor. Ein QR-Code auf Ihrer Anzeige macht messbar, " +
          "wie viele Studierende direkt von der Platzierung auf Ihre Seite springen.</p>" +
          '<p class="ib-offer">Als Bestandskunde erhalten Sie Note Buddy\'s Analytics bei Ihrer nächsten Kampagne kostenfrei.</p>' +
          '<a class="ib-cta" href="mailto:gabriel.hilbrig@notebuddys.de?subject=' +
          encodeURIComponent("Note Buddy's Analytics für die nächste Kampagne (" + d.name + ")") +
          '">Note Buddy\'s Analytics für die Folgekampagne anfragen' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
          "</div>" +
        "</div>" +
      "</div></section>";
    }

    /* Mailing ausstehend: Inhalte werden noch benoetigt */
    if (d.mailing && d.mailing.ausstehend) {
      html += '<section class="aus-infobox-sec"><div class="wrap">' +
        '<div class="infobox mail reveal">' +
          '<span class="ib-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span>' +
          "<div><b>Ihr Mailing steht noch aus</b>" +
          "<p>Für den Versand Ihres Mailings benötigen wir noch die Inhalte von Ihnen, also Text, Bilder und den gewünschten Link. " +
          "Laden Sie alles bequem über unser Formular hoch, danach stimmen wir den Versandtermin mit Ihnen ab.</p>" +
          '<a class="btn btn-primary" href="' + MAILING_UPLOAD_URL + '" target="_blank" rel="noopener">' +
          "Inhalte für das Mailing hochladen" +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg></a>' +
          "</div>" +
        "</div>" +
      "</div></section>";
    }

    /* Benchmarks. Kennzahlen ohne Datengrundlage entfallen, Mailing- und
       Bannerwerte stehen mit im Marktvergleich. */
    var benchMetriken = [
      { t: "Social-Media-Reposts", ref: BENCH_REF.reposts, nb: BENCH_NB.reposts, you: rRepost },
      { t: "Landingpage-Klicks",   ref: BENCH_REF.lp,      nb: BENCH_NB.lp,      you: rLp },
      { t: "QR-Code-Scans",        ref: BENCH_REF.qr,      nb: BENCH_NB.qr,      you: rQr }
    ].filter(function (m) { return m.you; });
    if (d.mailing && !d.mailing.ausstehend && d.mailing.oeffnungsrate) {
      benchMetriken.push({ t: "Öffnungsrate Mailing", ref: MAIL_REF.oeffnung, nb: null, you: d.mailing.oeffnungsrate });
      benchMetriken.push({ t: "Klickrate Mailing",    ref: MAIL_REF.klick,    nb: null, you: d.mailing.klickrate });
    }
    if (d.banner && d.banner.benchmark) {
      benchMetriken.push({ t: d.banner.label || "Banner", ref: d.banner.benchmark.branche,
                           nb: d.banner.benchmark.nb, you: d.banner.benchmark.ihrWert });
    }

    if (benchMetriken.length) {
      html += '<section class="aus-bench"><div class="wrap">' +
        '<div class="section-head reveal"><span class="eyebrow">Benchmarks</span><h2>Ihre Kampagne im Marktvergleich.</h2>' +
        "<p>Jede Kennzahl steht neben dem Branchendurchschnitt und unserem eigenen Durchschnitt.</p></div>" +
        '<div class="bench-card reveal d1">' +
          '<div class="bench-legend">' +
            '<span class="lg"><i class="sw sw-ref"></i>Branchendurchschnitt <em>Referenz</em></span>' +
            '<span class="lg"><i class="sw sw-nb"></i>Note Buddy\'s-Durchschnitt</span>' +
            '<span class="lg"><i class="sw sw-you"></i>Ihr Wert</span>' +
          "</div><div class='bench-rows'>";

      benchMetriken.forEach(function (m) {
        // eigene Skala je Metrik, sonst erdruecken die Mailing-Prozente den Rest
        var max = Math.max(m.you || 0, m.nb || 0, m.ref || 0) * 1.2;
        html += '<div class="bench-metric"><h4>' + esc(m.t) + "</h4>";
        [["ref", "Branchendurchschnitt", m.ref], ["nb", "Note Buddy's-Ø", m.nb], ["you", "Ihr Wert", m.you]]
          .forEach(function (r) {
            var val = r[2];
            if (val === null || val === undefined) return;
            html += '<div class="bench-bar-row"><span class="bbr-name">' + r[1] + "</span>" +
              '<span class="bbr-track"><i class="bbr-fill ' + r[0] + '" data-w="' + (val / max * 100) + '"></i>' +
              '<span class="bbr-val">' + pctTxt(val, val < 1 ? 2 : 1) + "</span></span></div>";
          });
        html += "</div>";
      });
      html += '</div><p class="bench-foot">Reposts, Landingpage-Klicks und QR-Scans in Prozent der ' +
        (v ? fmt(v) + " verschickten Sendungen" : "Versandmenge") +
        ". Mailing-Werte beziehen sich auf die versendeten Mailings.</p></div>";

      if (d.mailing && !d.mailing.ausstehend && d.mailing.oeffnungsrate) {
        html += '<div class="mail-detail reveal d1"><div class="md-copy">' +
            "<h3>Ihr Mailing im Detail</h3>" +
            '<div class="md-stats">' +
              "<div><b>" + num(d.mailing.menge) + "</b><span>Mailings versendet</span></div>" +
              "<div><b>" + num(d.mailing.oeffnungen) + "</b><span>Öffnungen</span></div>" +
              "<div><b>" + num(d.mailing.klicks) + "</b><span>Klicks</span></div>" +
            "</div>" +
            (d.mailing.zeitpunkt ? '<p class="md-date">Versendet am <b>' + esc(d.mailing.zeitpunkt) + "</b></p>" : "") +
          "</div>" +
          (d.mailing.bild
            ? '<figure class="laptop"><div class="lp-screen"><img src="' + esc(d.mailing.bild) +
              '" alt="Ansicht Ihres Mailings" loading="lazy" /></div><div class="lp-foot"></div>' +
              "<figcaption>So sah Ihr Mailing im Postfach aus</figcaption></figure>"
            : "") +
        "</div>";
      }

      /* Faktoren */
      if (hatBlockDaten) {
      html += '<div class="factor-grid">';
      [[rRepost, BENCH_REF.reposts, "mehr Social-Media-Reposts als der Branchendurchschnitt"],
       [rLp, BENCH_REF.lp, "mehr Landingpage-Klicks als der Branchendurchschnitt"],
       [rQr, BENCH_REF.qr, "mehr QR-Code-Scans als der Branchendurchschnitt"]]
        .forEach(function (f, i) {
          if (f[0] === null || !f[0]) return;
          var faktor = f[0] / f[1];
          html += '<article class="factor reveal' + (i ? " d" + i : "") + '"><span class="f-num">' +
            (faktor >= 10 ? Math.round(faktor) : faktor.toFixed(1).replace(".", ",")) +
            "<em>×</em></span>" + '<span class="f-lbl">' + f[2] + "</span></article>";
        });
      html += "</div>";
      }
      html += "</div></section>";
    }

    /* Verteilung (nur wenn vorhanden) */
    if (d.verteilung) {
      html += '<section class="aus-dist"><div class="wrap">' +
        '<div class="section-head reveal"><span class="eyebrow">Aufteilung Versand</span><h2>Wohin die Blöcke gegangen sind.</h2></div>' +
        '<div class="dist-grid">' +
          '<article class="dist-card reveal"><h3>Aufteilung nach Regionen</h3><div class="dist-bars">' +
            d.verteilung.regionen.map(function (r) { return distRow(r.n, r.v, 40); }).join("") +
          "</div></article>" +
          '<article class="dist-card reveal d1"><h3>Aufteilung nach Fachrichtungen</h3><div class="dist-bars">' +
            d.verteilung.fach.map(function (r) { return distRow(r.n, r.v, 40); }).join("") +
          "</div></article>" +
        "</div></div></section>";
    }

    /* Trichter */
    if (hatBlockDaten) {
      html += '<section class="aus-dist"><div class="wrap"><article class="funnel-card-aus reveal">' +
        "<h3>Von der Platzierung zur Interaktion</h3>" +
        '<div class="ia-grid">' +
          '<div class="ia-total">' +
            '<span class="ia-num">' + fmt(interakt) + "</span>" +
            '<span class="ia-lbl">Direkte Interaktionen</span>' +
            '<span class="ia-sub">' + pctTxt(interakt / v * 100) + " der " + fmt(v) + " verschickten Sendungen</span>" +
          "</div>" +
          donutChart([
            { label: "Social-Media-Reposts", value: d.reposts,  color: "var(--c-repost)" },
            { label: "QR-Code-Scans",        value: d.qrScans,  color: "var(--c-qr)" },
            { label: "Landingpage-Klicks",   value: d.lpKlicks, color: "var(--c-lp)" },
            { label: "Mailing-Klicks",       value: mailKlicks, color: "var(--c-mail)" },
            { label: "myessay-Banner-Klicks", value: bannerKlicks, color: "var(--c-banner)" }
          ]) +
        "</div>" +
        (d.impressionen ? '<p class="fun-note">Dazu kommen <b>' + fmt(d.impressionen) +
          " Impressionen</b>, also rund " + Math.round(d.impressionen / v) +
          " Sichtkontakte je Sendung. Impressionen werden separat ausgewiesen, weil sie eine andere Einheit sind.</p>" : "") +
        "</article></div></section>";
    }

    /* Reposts, nur wenn Bilder, Videos oder Repost-Zahlen vorliegen */
    var bilder = d.reposts_bilder || [];
    var videos = d.reposts_videos || [];
    if (bilder.length || videos.length || d.reposts) {
    html += '<section class="aus-reposts"><div class="wrap">' +
      '<div class="section-head reveal"><span class="eyebrow">Social Media Reposts</span>' +
      "<h2>Ihre Kampagne, geteilt von der Zielgruppe.</h2>" +
      "<p>Studierende werden dazu aufgerufen, den Erhalt Ihrer Blöcke auf Social Media mit uns zu teilen, und haben daraufhin die Chance, spannende Gewinne zu gewinnen. Jeder Repost ist zusätzliche, organische Reichweite.</p></div>";

    if (bilder.length || videos.length) {
      var items = videos.map(function (v) {
        return '<figure class="sl-item is-video" data-video="' + esc(v.id) + '">' +
          '<button type="button" class="sl-play" aria-label="Video abspielen">' +
            '<img src="' + esc(v.thumb) + '" alt="Video-Repost aus der Zielgruppe" loading="lazy" />' +
            '<span class="sl-play-ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></span>' +
          "</button>" +
          "<figcaption>" + esc(v.titel || "Video") + " · Repost aus der Zielgruppe</figcaption></figure>";
      }).concat(bilder.map(function (src, i) {
        return '<figure class="sl-item"><img src="' + esc(src) + '" alt="Social-Media-Repost ' + (i + 1) +
          '" loading="lazy" /><figcaption>Repost aus der Zielgruppe · Instagram Story</figcaption></figure>';
      })).join("");
      html += '<div class="slider reveal d1" id="repostSlider">' +
        '<button class="sl-nav prev" type="button" aria-label="Vorheriger Repost"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>' +
        '<div class="sl-viewport"><div class="sl-track" id="slTrack">' + items + "</div></div>" +
        '<button class="sl-nav next" type="button" aria-label="Nächster Repost"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>' +
        '</div><div class="sl-dots" id="slDots"></div>';
    } else {
      html += '<div class="repost-placeholder reveal d1">' +
        '<div class="rp-cards">' +
          '<span class="rp-card"></span><span class="rp-card"></span><span class="rp-card"></span>' +
        "</div>" +
        (d.reposts
          ? "<div><b>Die Bilder Ihrer Reposts werden gerade aufbereitet.</b>" +
            "<p>Insgesamt haben wir <b>" + num(d.reposts) + " Reposts</b> mit <b>" + num(d.repostImpressionen) +
            " Impressionen</b> für Sie erfasst. Die Bilder ergänzen wir hier in Kürze.</p></div>"
          : "<div><b>Für diese Kampagne liegen uns noch keine Reposts vor.</b>" +
            "<p>Sobald Studierende Ihre Blöcke auf Social Media teilen, erscheinen die Beiträge hier.</p></div>") + "</div>";
    }

    html += '<div class="upsell reveal d1"><div class="up-copy">' +
      '<span class="up-eyebrow">Noch mehr Sichtbarkeit</span>' +
      "<h3>Sie haben Interesse an Platzierungen auf Social Media?</h3>" +
      "<p>Wir bringen Ihre Marke zusätzlich in die Feeds und Stories unserer Community. Sprechen Sie uns an, wir erstellen Ihnen ein passendes Paket.</p></div>" +
      '<a href="mailto:gabriel.hilbrig@notebuddys.de?subject=' +
      encodeURIComponent("Interesse an Social-Media-Platzierungen (" + d.name + ")") +
      '" class="btn btn-primary btn-lg">Social-Media-Paket anfragen' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
      "</div></div></section>";
    }

    /* Fazit */
    html += '<section class="aus-fazit"><div class="wrap">' +
      '<div class="section-head reveal"><span class="eyebrow">Resümee</span><h2>Das Fazit zur Kampagne.</h2></div>' +
      '<div class="fazit-grid">' +
        '<article class="fazit-card reveal"><span class="fz-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>' +
          "<h3>Kampagne Status</h3><p>" +
          esc(d.versandInfo ? d.versandInfo : "Ihre Kampagne läuft nach Plan. Sobald weitere Teilmengen versendet sind, aktualisieren wir diese Auswertung.") +
          "</p></article>" +
        '<article class="fazit-card reveal d1"><span class="fz-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M21 7v5h-5"/></svg></span>' +
          "<h3>Performance</h3><p>Nach Abschluss der Kampagne unterbreiten wir Ihnen Vorschläge zur Optimierung der Performance.</p></article>" +
        '<article class="fazit-card reveal d2 highlight"><span class="fz-ic accent"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.6 6.2 6.4.6-4.9 4.3 1.5 6.4L12 16.2 6.4 19.5l1.5-6.4L3 8.8l6.4-.6z"/></svg></span>' +
          "<h3>Unsere Empfehlung</h3><p>Optimierungsvorschläge zu Performance und Kosten: Rahmenvertrag und Ergänzung um weitere Formate.</p></article>" +
      "</div></div></section>";

    /* Kontakt */
    html += '<section class="aus-contact"><div class="wrap"><div class="cta-inner reveal">' +
      "<h2>Buchen Sie ein Gespräch zur Besprechung der Auswertung.</h2>" +
      "<p>Sie haben Fragen zu Ihrem Report oder möchten die nächste Kampagne planen? Wir nehmen uns Zeit für Sie.</p>" +
      '<div class="contact-duo">' +
        '<a class="cd-card" href="mailto:gabriel.hilbrig@notebuddys.de">' +
          '<span class="cd-avatar"><img src="/assets/gabriel.png" alt="Gabriel Hilbrig" onerror="this.style.display=\'none\'" /></span>' +
          '<span class="cd-meta"><b>Gabriel Hilbrig</b><span>Co-Founder</span>' +
          '<span class="cd-mail">gabriel.hilbrig@notebuddys.de</span><span class="cd-tel">+49 176 84894678</span></span></a>' +
        '<a class="cd-card" href="mailto:niclas.weisl@notebuddys.de">' +
          '<span class="cd-avatar"><img src="/assets/niclas.jpg" alt="Niclas Weisl" ' +
            'onerror="this.replaceWith(document.createTextNode(\'NW\'))" /></span>' +
          '<span class="cd-meta"><b>Niclas Weisl</b><span>Co-Founder</span>' +
          '<span class="cd-mail">niclas.weisl@notebuddys.de</span><span class="cd-tel">+49 151 27042752</span></span></a>' +
      "</div></div></div></section>";

    host.innerHTML = html;

    $("#repBack").addEventListener("click", function () { pushPath("/auswertungen"); showStep("select"); });
    activateReport(host);
  }

  function distRow(name, value, max) {
    return '<div class="dist-row"><div class="dist-top"><span class="n">' + esc(name) +
      '</span><span class="v">' + pctTxt(value) + "</span></div>" +
      '<div class="dist-track"><i data-w="' + Math.min(value / max * 100, 100) + '"></i></div></div>';
  }

  /* Ringdiagramm der Interaktionen.
     Farben folgen fest der Kennzahl, nie ihrer Groesse. Palette mit dem
     dataviz-Validator geprueft (Helligkeit, Chroma, Farbsehschwaechen,
     Kontrast, alle Paare). Jede Kategorie ist zusaetzlich beschriftet. */
  function donutChart(kategorien) {
    var teile = kategorien.filter(function (k) { return typeof k.value === "number" && k.value > 0; });
    var summe = teile.reduce(function (a, k) { return a + k.value; }, 0);
    if (!summe) return "";

    var r = 68, breite = 28, U = 2 * Math.PI * r, luecke = 3, versatz = 0, segmente = "";
    teile.forEach(function (k) {
      var anteil = k.value / summe;
      var laenge = Math.max(anteil * U - (teile.length > 1 ? luecke : 0), 1);
      segmente +=
        '<circle class="dn-seg" cx="100" cy="100" r="' + r + '" fill="none" stroke="' + k.color +
        '" stroke-width="' + breite + '" stroke-dasharray="' + laenge + " " + (U - laenge) +
        '" stroke-dashoffset="' + (-versatz) + '"><title>' + esc(k.label) + ": " + fmt(k.value) +
        " (" + pctTxt(anteil * 100) + ")</title></circle>";
      versatz += anteil * U;
    });

    var legende = teile.map(function (k) {
      return '<li><i style="background:' + k.color + '"></i>' +
        '<span class="lg-name">' + esc(k.label) + "</span>" +
        '<span class="lg-val">' + fmt(k.value) + "</span>" +
        '<span class="lg-pct">' + pctTxt(k.value / summe * 100) + "</span></li>";
    }).join("");

    return '<div class="ia-chart">' +
        '<svg viewBox="0 0 200 200" class="donut" role="img" aria-label="Aufteilung der Interaktionen">' +
          '<g transform="rotate(-90 100 100)">' + segmente + "</g>" +
          '<text x="100" y="95" class="dn-mid">' + fmt(summe) + "</text>" +
          '<text x="100" y="116" class="dn-cap">Interaktionen</text>' +
        "</svg>" +
      "</div>" +
      '<ul class="ia-legend">' + legende + "</ul>";
  }

  function funStep(name, val, pct, width, cls) {
    return '<div class="fun-step"><div class="fun-row"><span class="fun-name">' + name +
      '</span><span class="fun-val">' + val + " <em>" + pct + "</em></span></div>" +
      '<div class="fun-track"><i class="fun-bar ' + cls + '" data-fill="' + width + '"></i></div></div>';
  }

  /* Balken fuellen, Zaehler starten, Slider aktivieren */
  function activateReport(host) {
    var fillObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        $$("[data-w]", en.target).forEach(function (el) { el.style.width = el.dataset.w + "%"; });
        $$("[data-fill]", en.target).forEach(function (el) { el.style.width = el.dataset.fill + "%"; });
        fillObs.unobserve(en.target);
      });
    }, { threshold: 0.2 });
    $$(".bench-metric, .dist-card, .funnel-card-aus", host).forEach(function (el) { fillObs.observe(el); });
    initSlider(host);
    setTimeout(runReveal, 60);
  }

  /* ---------- Repost-Slider ---------- */
  function initSlider(scope) {
    var slider = $("#repostSlider", scope);
    if (!slider) return;
    var track = $("#slTrack", scope), dots = $("#slDots", scope);
    var items = $$(".sl-item", track);
    var prev = $(".sl-nav.prev", slider), next = $(".sl-nav.next", slider);
    var idx = 0;

    function isFocus() { return window.innerWidth > 760 && items.length > 1 && items.length <= 4; }
    function maxIdx() { return items.length - 1; }

    function buildDots() {
      dots.innerHTML = "";
      for (var i = 0; i <= maxIdx(); i++) {
        (function (i) {
          var b = document.createElement("button");
          b.type = "button"; b.className = "sl-dot" + (i === idx ? " on" : "");
          b.setAttribute("aria-label", "Repost " + (i + 1));
          b.addEventListener("click", function () { idx = i; update(); });
          dots.appendChild(b);
        })(i);
      }
    }
    function update() {
      idx = Math.min(Math.max(idx, 0), maxIdx());
      var focus = isFocus();
      slider.classList.toggle("focus", focus);
      if (focus) { track.style.transform = ""; track.style.width = ""; }
      else {
        track.style.width = (items.length * 100) + "%";
        track.style.transform = "translateX(-" + (idx * (100 / items.length)) + "%)";
      }
      items.forEach(function (it, i) {
        it.classList.toggle("is-active", i === idx);
        it.style.flexBasis = focus ? "" : (100 / items.length) + "%";
      });
      slider.style.setProperty("--sl-count", items.length);
      $$(".sl-dot", dots).forEach(function (d, i) { d.classList.toggle("on", i === idx); });
      prev.disabled = idx === 0;
      next.disabled = idx === maxIdx();
    }
    prev.addEventListener("click", function () { idx--; update(); });
    next.addEventListener("click", function () { idx++; update(); });
    slider.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { idx--; update(); }
      if (e.key === "ArrowRight") { idx++; update(); }
    });
    var x0 = null;
    track.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) { idx += dx < 0 ? 1 : -1; update(); }
      x0 = null;
    }, { passive: true });
    var lastFocus = isFocus();
    window.addEventListener("resize", function () {
      if (isFocus() !== lastFocus) { lastFocus = isFocus(); update(); }
    });
    items.forEach(function (it, i) {
      it.addEventListener("click", function () { if (isFocus() && i !== idx) { idx = i; update(); } });
      var play = $(".sl-play", it);
      if (play) {
        play.addEventListener("click", function (e) {
          // Im Fokus-Modus holt der erste Klick das Video nach vorn, erst dann wird abgespielt
          if (isFocus() && i !== idx) { idx = i; update(); return; }
          e.stopPropagation();
          var id = it.dataset.video;
          var frame = document.createElement("iframe");
          frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) +
            "?autoplay=1&rel=0&modestbranding=1";
          frame.title = "Video-Repost";
          frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
          frame.setAttribute("allowfullscreen", "");
          frame.className = "sl-frame";
          play.replaceWith(frame);
        });
      }
    });
    buildDots();
    update();
  }

  /* ---------- Start ---------- */
  if ($("#firmGrid")) {
    fetch("/assets/reports.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        reportsData = data;
        initSelect();
        initGate();
        applyPendingSlug();
        var demo = $("#demoBtn");
        if (demo) {
          demo.addEventListener("click", function () {
            var d = reportsData.kampagnen.filter(function (k) { return k.oeffentlich; })[0];
            if (d) { renderReport(d.daten); showStep("report"); }
          });
        }
      })
      .catch(function () {
        var g = $("#firmGrid");
        if (g) g.innerHTML = '<p class="firm-empty" style="display:block">Die Auswertungen konnten nicht geladen werden. Bitte laden Sie die Seite neu.</p>';
      });
  }


  function applyPendingSlug() {
    if (!pendingSlug || !reportsData) return;
    var treffer = reportsData.kampagnen.filter(function (k) { return k.slug === pendingSlug; })[0];
    pendingSlug = null;
    if (!treffer) return;
    if (treffer.oeffentlich) { renderReport(treffer.daten); showStep("report"); }
    else { openGate(treffer.slug, treffer.name, true); }
  }

  /* Startzustand aus der Adresszeile ableiten, Vor/Zurueck unterstuetzen */
  applyPath();
  window.addEventListener("popstate", function () { applyPath(); });

  /* kick off reveals */
  runReveal();
  window.addEventListener("load", runReveal);
})();
