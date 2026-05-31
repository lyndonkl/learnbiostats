/* ==========================================================================
   hardy-weinberg.js
   Interactive visualization of Hardy-Weinberg equilibrium and genetic drift.

   Two linked panels, both driven by D3 v7 (global `d3`, UMD build):

   PANEL A — Hardy-Weinberg genotype frequencies
     A single biallelic locus with alleles A (frequency p) and a (frequency q),
     where q = 1 - p. Under the Hardy-Weinberg assumptions (random mating, no
     selection / mutation / migration, infinite population, non-overlapping
     generations), the expected genotype frequencies in the next generation are:
         AA : p^2
         Aa : 2pq
         aa : q^2
     and p^2 + 2pq + q^2 = (p + q)^2 = 1. The chart is a stacked bar that always
     sums to 100% of the population, plus three separate bars so the viewer can
     compare each genotype by LENGTH (the most accurate visual encoding).

   PANEL B — Genetic drift (Wright-Fisher model)
     A finite diploid population of N individuals carries 2N gene copies. With no
     selection, the next generation is formed by sampling 2N alleles WITH
     replacement from the current pool, i.e. the count of A alleles next
     generation is Binomial(2N, p). The new frequency is that count / (2N).
     Expectation is unchanged (E[p'] = p) but the per-generation sampling
     variance is p*q / (2N): smaller N -> larger variance -> faster, larger
     random swings, and eventually fixation (p = 1) or loss (p = 0). That is the
     takeaway the annotations state.

   Colour: Okabe-Ito colourblind-safe palette, shared with site.css.
   ========================================================================== */

(function () {
  "use strict";

  // ---- Okabe-Ito palette (colourblind-safe) -------------------------------
  var COLOR = {
    AA: "#0072B2", // blue
    Aa: "#E69F00", // orange
    aa: "#009E73", // bluish green
    drift: "#0072B2",
    driftFocus: "#D55E00", // vermillion — preattentive highlight on the focal line
    fix: "#CC79A7", // reddish purple — fixation/loss reference lines
    ink: "#1a1f24",
    inkSoft: "#4a5560",
    grid: "#e3e8ec"
  };

  // =========================================================================
  // PANEL A — Hardy-Weinberg genotype frequencies
  // =========================================================================
  var HW = (function () {
    var svg, gPlot, x, y, width, height;
    var margin = { top: 16, right: 20, bottom: 44, left: 52 };
    var GENOS = [
      { key: "AA", label: "AA", color: COLOR.AA },
      { key: "Aa", label: "Aa", color: COLOR.Aa },
      { key: "aa", label: "aa", color: COLOR.aa }
    ];

    function genoFreqs(p) {
      var q = 1 - p;
      return { AA: p * p, Aa: 2 * p * q, aa: q * q };
    }

    function init() {
      var container = d3.select("#hw-chart");
      var box = container.node().getBoundingClientRect();
      var totalW = Math.max(320, box.width);
      var totalH = 320;
      width = totalW - margin.left - margin.right;
      height = totalH - margin.top - margin.bottom;

      svg = container.append("svg")
        .attr("class", "chart")
        .attr("viewBox", "0 0 " + totalW + " " + totalH)
        .attr("role", "img")
        .attr("aria-label", "Bar chart of Hardy-Weinberg expected genotype frequencies for AA, Aa, and aa.");

      gPlot = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x = d3.scaleBand().domain(GENOS.map(function (d) { return d.key; }))
        .range([0, width]).padding(0.3);
      // Y axis is honest: starts at 0, goes to 1 (full proportion). No truncation.
      y = d3.scaleLinear().domain([0, 1]).range([height, 0]);

      // Y gridlines (light, behind bars) keep cognitive load low.
      gPlot.append("g").attr("class", "grid")
        .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickFormat(""))
        .selectAll("line").attr("stroke", COLOR.grid);
      gPlot.select(".grid .domain").remove();

      gPlot.append("g").attr("class", "axis axis-x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      gPlot.append("g").attr("class", "axis axis-y")
        .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format(".0%")));

      gPlot.append("text").attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2).attr("y", -margin.left + 14)
        .attr("text-anchor", "middle")
        .text("Share of population");

      // Bars + value labels (created empty, filled by update()).
      gPlot.selectAll(".bar").data(GENOS).enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.key); })
        .attr("width", x.bandwidth())
        .attr("fill", function (d) { return d.color; })
        .attr("y", height).attr("height", 0);

      gPlot.selectAll(".bar-label").data(GENOS).enter().append("text")
        .attr("class", "bar-label")
        .attr("x", function (d) { return x(d.key) + x.bandwidth() / 2; })
        .attr("text-anchor", "middle");

      // Annotation: which genotype is rarest, stated as a takeaway.
      gPlot.append("text").attr("class", "annotation-note hw-anno")
        .attr("x", width).attr("text-anchor", "end").attr("y", 4);
    }

    function update(p) {
      var f = genoFreqs(p);
      var data = GENOS.map(function (g) { return { key: g.key, color: g.color, val: f[g.key] }; });

      gPlot.selectAll(".bar").data(data)
        .attr("y", function (d) { return y(d.val); })
        .attr("height", function (d) { return height - y(d.val); });

      gPlot.selectAll(".bar-label").data(data)
        .attr("y", function (d) { return y(d.val) - 6; })
        .text(function (d) { return d3.format(".0%")(d.val); });

      // Heterozygote share peaks at p = 0.5 (where 2pq = 0.5). Call it out.
      var anno;
      if (Math.abs(p - 0.5) < 0.02) {
        anno = "Heterozygotes (Aa) peak at 50% when p = 0.5";
      } else if (p > 0.5) {
        anno = "AA is now the common genotype";
      } else {
        anno = "aa is now the common genotype";
      }
      gPlot.select(".hw-anno").text(anno);
    }

    return { init: init, update: update, genoFreqs: genoFreqs };
  })();

  // =========================================================================
  // PANEL B — Genetic drift (Wright-Fisher binomial sampling)
  // =========================================================================
  var Drift = (function () {
    var svg, gPlot, x, y, width, height;
    var margin = { top: 16, right: 96, bottom: 44, left: 52 };
    var lines = [];   // array of {N, color, focus, path:[{gen,p}]}
    var maxGen = 1;
    var line;         // d3.line generator

    /* Draw one Binomial(2N, p) sample using the inverse-CDF / repeated-Bernoulli
       method. For the population sizes used here (N up to a few hundred) a simple
       sum of 2N Bernoulli draws is exact and fast enough. Returns the new
       frequency = count(A) / (2N). */
    function wrightFisherStep(p, N) {
      var twoN = 2 * N;
      var count = 0;
      for (var i = 0; i < twoN; i++) {
        if (Math.random() < p) count++;
      }
      return count / twoN;
    }

    function init() {
      var container = d3.select("#drift-chart");
      var box = container.node().getBoundingClientRect();
      var totalW = Math.max(320, box.width);
      var totalH = 340;
      width = totalW - margin.left - margin.right;
      height = totalH - margin.top - margin.bottom;

      svg = container.append("svg")
        .attr("class", "chart")
        .attr("viewBox", "0 0 " + totalW + " " + totalH)
        .attr("role", "img")
        .attr("aria-label", "Line chart of allele frequency over generations under genetic drift for different population sizes.");

      gPlot = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x = d3.scaleLinear().domain([0, 1]).range([0, width]);
      // Honest y axis: full allele-frequency range 0 to 1, no truncation.
      y = d3.scaleLinear().domain([0, 1]).range([height, 0]);

      gPlot.append("g").attr("class", "grid")
        .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickFormat(""))
        .selectAll("line").attr("stroke", COLOR.grid);
      gPlot.select(".grid .domain").remove();

      // Fixation (p=1) and loss (p=0) reference lines — drift's two absorbing states.
      [{ p: 1, t: "fixation (A) " }, { p: 0, t: "loss (A) " }].forEach(function (r) {
        gPlot.append("line").attr("class", "fix-line")
          .attr("x1", 0).attr("x2", width)
          .attr("y1", y(r.p)).attr("y2", y(r.p))
          .attr("stroke", COLOR.fix).attr("stroke-dasharray", "4 4").attr("stroke-width", 1);
        gPlot.append("text").attr("class", "annotation")
          .attr("x", width).attr("y", y(r.p) + (r.p === 1 ? 14 : -6))
          .attr("text-anchor", "end").attr("fill", COLOR.fix)
          .text(r.t + "= absorbing");
      });

      gPlot.append("g").attr("class", "axis axis-x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format("d")));

      gPlot.append("g").attr("class", "axis axis-y")
        .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format(".0%")));

      gPlot.append("text").attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2).attr("y", -margin.left + 14)
        .attr("text-anchor", "middle").text("Allele frequency p (of A)");

      gPlot.append("text").attr("class", "axis-title")
        .attr("x", width / 2).attr("y", height + 38)
        .attr("text-anchor", "middle").text("Generation");

      // Starting-frequency reference line (set on first run).
      gPlot.append("line").attr("class", "start-line")
        .attr("stroke", COLOR.inkSoft).attr("stroke-dasharray", "2 4")
        .attr("stroke-width", 1).attr("x1", 0).attr("x2", width)
        .attr("opacity", 0);

      line = d3.line()
        .x(function (d) { return x(d.gen); })
        .y(function (d) { return y(d.p); });

      gPlot.append("g").attr("class", "drift-lines");
      gPlot.append("g").attr("class", "drift-labels");
    }

    /* Start (or restart) the simulation: clear lines and seed each population at
       the same starting frequency p0. Two populations are tracked so the viewer
       can directly compare a SMALL N against a LARGE N under identical starting
       conditions — that contrast is the whole point. */
    function reset(p0, smallN, largeN) {
      maxGen = 1;
      x.domain([0, 1]);
      lines = [
        { N: smallN, color: COLOR.driftFocus, focus: true,  label: "small N = " + smallN, path: [{ gen: 0, p: p0 }] },
        { N: largeN, color: COLOR.drift,       focus: false, label: "large N = " + largeN, path: [{ gen: 0, p: p0 }] }
      ];
      gPlot.select(".start-line")
        .attr("y1", y(p0)).attr("y2", y(p0)).attr("opacity", 1);
      render();
    }

    /* Advance every (non-absorbed) population by `steps` generations.
       The generation index of a point is just its position in the path array
       (point 0 = generation 0), so we set gen = path.length before pushing. */
    function step(steps) {
      if (!lines.length) return;
      for (var s = 0; s < steps; s++) {
        lines.forEach(function (L) {
          var last = L.path[L.path.length - 1].p;
          // Once fixed (1) or lost (0), drift can no longer move it: it stays put.
          var next = (last === 0 || last === 1) ? last : wrightFisherStep(last, L.N);
          L.path.push({ gen: L.path.length, p: next });
        });
      }
      maxGen = d3.max(lines, function (L) { return L.path.length - 1; });
      x.domain([0, Math.max(1, maxGen)]);
      render();
    }

    function render() {
      gPlot.select(".axis-x")
        .call(d3.axisBottom(x).ticks(Math.min(8, maxGen + 1)).tickFormat(d3.format("d")));

      var sel = gPlot.select(".drift-lines").selectAll(".drift-path").data(lines, function (d) { return d.N; });
      sel.enter().append("path")
        .attr("class", "drift-path")
        .attr("fill", "none")
        .attr("stroke-linejoin", "round")
        .merge(sel)
        .attr("stroke", function (d) { return d.color; })
        // Preattentive emphasis: the small-N (focus) line is thicker so the eye
        // goes to the population that actually drifts.
        .attr("stroke-width", function (d) { return d.focus ? 2.6 : 1.6; })
        .attr("opacity", function (d) { return d.focus ? 1 : 0.85; })
        .attr("d", function (d) { return line(d.path); });
      sel.exit().remove();

      // End-of-line labels with the live final frequency.
      var lab = gPlot.select(".drift-labels").selectAll(".drift-label").data(lines, function (d) { return d.N; });
      lab.enter().append("text")
        .attr("class", "drift-label")
        .attr("font-size", 12).attr("font-weight", 600)
        .merge(lab)
        .attr("fill", function (d) { return d.color; })
        .attr("x", function (d) { return x(d.path[d.path.length - 1].gen) + 6; })
        .attr("y", function (d) { return y(d.path[d.path.length - 1].p) + 4; })
        .text(function (d) {
          var fp = d.path[d.path.length - 1].p;
          var tag = fp === 1 ? " (fixed)" : fp === 0 ? " (lost)" : "";
          return d.label + tag;
        });
      lab.exit().remove();
    }

    function isAllAbsorbed() {
      return lines.length > 0 && lines.every(function (L) {
        var p = L.path[L.path.length - 1].p;
        return p === 0 || p === 1;
      });
    }

    return { init: init, reset: reset, step: step, isAllAbsorbed: isAllAbsorbed };
  })();

  // =========================================================================
  // Wire up the controls
  // =========================================================================
  function ready() {
    HW.init();
    Drift.init();

    // ---- Panel A control: allele frequency p -----
    var pSlider = document.getElementById("p-slider");
    var pVal = document.getElementById("p-val");
    var qVal = document.getElementById("q-val");

    function refreshHW() {
      var p = +pSlider.value;
      pVal.textContent = p.toFixed(2);
      if (qVal) qVal.textContent = (1 - p).toFixed(2);
      HW.update(p);
    }
    pSlider.addEventListener("input", refreshHW);
    refreshHW();

    // ---- Panel B controls: N (small), step generations, reset -----
    var nSlider = document.getElementById("n-slider");
    var nVal = document.getElementById("n-val");
    var LARGE_N = 2000; // fixed large reference population for the contrast
    var p0 = 0.5;       // both populations start balanced so swings are symmetric

    function nText() { if (nVal) nVal.textContent = nSlider.value; }

    function startDrift() {
      p0 = +pSlider.value;             // seed drift at the SAME p the user set in Panel A
      Drift.reset(p0, +nSlider.value, LARGE_N);
    }

    nSlider.addEventListener("input", function () { nText(); startDrift(); });
    nText();
    startDrift();

    document.getElementById("step-1").addEventListener("click", function () { Drift.step(1); });
    document.getElementById("step-10").addEventListener("click", function () { Drift.step(10); });
    document.getElementById("step-50").addEventListener("click", function () { Drift.step(50); });
    document.getElementById("drift-reset").addEventListener("click", startDrift);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
