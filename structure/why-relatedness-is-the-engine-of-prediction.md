---
type: structure-note
created: 2026-05-30
phase: null
tags: [structure-note, relatedness, quantitative-genetics, genomic-prediction]
---

# Why relatedness is the engine of both classical and genomic prediction

The thread connecting these notes is a single quantity wearing different costumes: **relatedness**. Classical quantitative genetics predicts how a population responds to selection by asking how much of the phenotypic resemblance among relatives is heritable; genomic prediction predicts an individual's breeding value by asking how genomically similar it is to individuals whose phenotypes we already know. Both are doing the same thing — borrowing information across related individuals — and both are bounded by the same ceiling, the heritable fraction of trait variance in the population at hand. Seeing that these are one mechanism, not two, is what turns a pile of equations into an intuition.

## Core notes
- [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]] — sets the ceiling: how much resemblance among relatives is heritable, and why that ceiling moves with population and environment.
- [[the-breeders-equation-says-response-to-selection-equals-narrow-sense-heritability-times-the-selection-differential|The breeder's equation says response to selection equals narrow-sense heritability times the selection differential]] — the classical face: relatedness between parents and offspring, expressed as h², converts selection into gain.
- [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]] — the genomic face: markers measure *realized* relatedness directly, replacing the pedigree's expected relatedness.

## Borderline / adjacent
- [[population-structure-and-kinship-inflate-gwas-false-positives-unless-modeled-as-mixed-model-covariates|Population structure and kinship inflate GWAS false positives unless modeled as covariates]] — *placeholder evergreen (Phase 3).* Adjacent because it is the same relatedness seen as a *nuisance* to remove rather than a signal to exploit — the inverse of the genomic-prediction view.

## Open questions
- What claim is missing from this cluster? Likely a note making explicit the GBLUP ↔ RR-BLUP equivalence (relatedness on the individual side vs. marker effects on the marker side), planned for Phase 4.
- Is there an unresolved tension? Yes, a productive one: GWAS works to *remove* relatedness as confounding while genomic prediction works to *use* it. The cluster's job is to hold both without contradiction by recognizing they target different questions.

## Connections to other clusters
- Feeds the three capstones — see [[projects/README|Projects Index]] — whose shared spine (GWAS → prediction → simulation) is exactly this relatedness thread put to work.
