---
type: evergreen
created: 2026-05-30
source: "Thought session — seeded with the curriculum"
phase: 2
module: p2m1
tags: [quantitative-genetics, heritability, variance, environment]
mastery: aware
review-due: 2026-05-31
aliases:
  - "Heritability is a property of a population in an environment, not of a trait"
---

# Heritability is a property of a population in an environment, not of a trait

Source: seed example (studio kickoff, 2026-05-30)

Heritability is a ratio of variances, and that single fact dissolves most of the confusion around it. Narrow-sense heritability h² is the additive genetic variance divided by the total phenotypic variance (h² = V_A / V_P) in some specific group of individuals living in some specific set of environments. Because it is a ratio measured *in a population*, it describes how much of the variation *among those individuals, in those conditions* tracks their additive genetic differences. It says nothing about how "genetic" a trait is in any absolute sense, and it is not a number attached to the trait itself the way a melting point is attached to a substance.

The mechanism is that both the numerator and the denominator can move without the underlying biology changing at all. Shrink the genetic diversity of the population — say, by working within an inbred panel — and V_A falls, so h² drops even though the genes are doing exactly what they always did. Make the environment more uniform and V_P (specifically its environmental component V_E) falls, so the same genetic variance now explains a larger fraction, and h² rises. The classic illustration is a trait with strong genetic control that shows near-zero heritability in a population that happens to be genetically uniform for it: there is no genetic *variance* to explain the (entirely environmental) differences you see.

This is why the same trait can have wildly different heritabilities in different studies, and why a heritability estimate must always be reported with its population and its environment, not quoted as a constant. It also explains a deeper point: high heritability does *not* mean a trait is unchangeable by the environment, and low heritability does not mean genes are irrelevant. The estimate is local to a context, and moving the context moves the number.

This claim is the foundation under the breeder's equation and under genomic prediction alike: response to selection scales with h², and the ceiling on predictive accuracy is set by how much of the phenotype is heritable in the panel at hand.

**Open questions:**
- How sharply do broad-sense (H²) and narrow-sense (h²) heritability diverge as dominance and epistasis grow, and when does that gap matter for selection?

## Links
- Builds-on: [[the-breeders-equation-says-response-to-selection-equals-narrow-sense-heritability-times-the-selection-differential|The breeder's equation says response to selection equals narrow-sense heritability times the selection differential]]
- Context: [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]]
- Applies: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
- Applies: [[project-3-breeding-simulation|End-to-End Breeding Simulation]]
