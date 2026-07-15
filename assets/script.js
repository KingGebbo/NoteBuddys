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
    mnav.classList.remove("open");
    if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: "smooth" });
    // re-trigger reveals for newly shown view
    setTimeout(runReveal, 40);
  }

  $$(".tab-btn").forEach(function (b) {
    b.addEventListener("click", function () { setView(b.dataset.view); });
  });

  // links that must first switch to the marketing view, then scroll
  $$("[data-view-link]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = a.dataset.viewLink;
      var hash = a.getAttribute("href");
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
      if (act[c.k]) { reach *= c.f; tags.push(c.t); }
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

  /* kick off reveals */
  runReveal();
  window.addEventListener("load", runReveal);
})();
