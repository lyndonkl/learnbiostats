---
type: evergreen
created: 2026-05-30
source: "Thought session — seeded with the curriculum"
phase: 2
module: p2m2
tags: [quantitative-genetics, breeders-equation, selection, heritability, genetic-gain]
mastery: aware
review-due: 2026-05-31
aliases:
  - "The breeder's equation says response to selection equals narrow-sense heritability times the selection differential"
---

# The breeder's equation says response to selection equals narrow-sense heritability times the selection differential

Source: seed example (studio kickoff, 2026-05-30)

The breeder's equation, R = h²S, is the workhorse of quantitative genetics. R is the **response to selection** — how far the population mean shifts in the offspring generation. S is the **selection differential** — the gap between the mean of the individuals you chose to be parents and the mean of the whole population they came from. h² is **narrow-sense heritability**, the additive variance as a fraction of phenotypic variance. The equation says the genetic gain you actually realize is the selection pressure you applied, discounted by the fraction of the phenotypic differences that is additively heritable.

The mechanism behind the discount is the reason h² and not 1 appears. You select on **phenotype**, but only the **additive genetic** part of a parent's superiority is reliably passed to offspring. The environmental component of why a chosen parent looked good does not transmit, and dominance/epistatic contributions do not pass cleanly through the lottery of meiosis either. So the population's mean moves by only the heritable fraction of the differential. Equivalently, S sets how extreme the parents are, and h² is the regression of offspring breeding value on parental phenotype — the slope that converts the parents' phenotypic edge into the offspring's genetic edge. If h² is near zero, you can select hard (large S) and the next generation barely budges, because the thing you selected on was mostly noise that does not inherit.

In real programs the differential is usually rewritten as i·σ_P, where i is the standardized selection intensity and σ_P is the phenotypic standard deviation, which makes the per-cycle response R = i·h²·σ_P and exposes the levers explicitly: select more intensely, raise heritability (cleaner trials), or work with more variation. Dividing by the generation interval L gives gain *per year*, R/L — and that is precisely where genomic prediction earns its keep, by letting breeders select accurately and earlier, shrinking L while holding accuracy up.

Two cautions keep this honest. The equation predicts the *expected* one-generation response under additive assumptions; sustained selection erodes additive variance (the Bulmer effect) and shifts allele frequencies, so the realized long-run trajectory bends below a naive straight-line extrapolation. And because h² is population-and-environment specific, the same selection differential yields different responses in different contexts.

**Open questions:**
- Over many cycles, how much does the Bulmer-effect reduction in V_A pull realized gain below the per-cycle prediction, and how fast does it recover?

## Links
- Builds-on: [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]]
- Extends: [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]]
- Applies: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
- Applies: [[project-3-breeding-simulation|End-to-End Breeding Simulation]]
