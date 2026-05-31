---
type: roadmap
created: 2026-05-30
title: "Roadmap: From Data Scientist to Genomic-Selection Contributor"
status: in-progress      # not-started | in-progress | complete
phases: [1, 2, 3, 4, 5]
start: 2026-05-30
tags: [curriculum, roadmap]
aliases:
  - "Master Roadmap"
  - "The Plan"
---

# Roadmap: From Data Scientist to Genomic-Selection Contributor

> The master plan. Read [[conventions|the conventions]] for mechanics and [[reading-list|the reading list]] for every linked source. This file is the spine; the [[#The 5 phases|phase notes]] and `curriculum/modules/` notes are the ribs.

## The end goal

Become capable of **contributing to ML-driven crop genetics / genomic selection** — the kind of work a breeding-focused company like Fall Creek does. Concretely, that means being able to:

- take a real breeding dataset (genotypes + phenotypes across environments) and understand what every column means and how it was generated;
- build, tune, and honestly cross-validate a **genomic-prediction model** (from GBLUP through gradient boosting and deep nets) that predicts trait performance from markers;
- read a current agricultural-ML paper, judge whether its result is real, and reproduce its core method; and
- **collaborate with breeders** — translate between "expected genetic gain per cycle" and "validation RMSE," and frame model outputs as selection decisions.

The target is *contribution*, not a PhD-level command of every sub-discipline. I want to be the person on a breeding team who owns the predictive-modeling pipeline and speaks enough quantitative genetics to be trusted with it.

## The philosophy

Optimize for three things, in this order: **understanding a breeding dataset**, **building predictive models**, and **collaborating with breeders**. Everything in the plan earns its place by serving one of those three.

- **Depth where it pays, skip where it does not.** I will go deep on the chain that runs allele frequencies -> heritability -> breeding value -> relationship matrix -> genomic prediction, because that chain *is* the job. I will deliberately skip molecular-biology detail I will never use on the job — transcription/translation mechanics, the wet-lab chemistry of library prep, developmental biology. I learn just enough of the central dogma to read a methods section, then move on.
- **Mechanism over vocabulary.** The win condition for each concept is being able to reconstruct *why* a method works, not reciting its name. (This is the [[learning-system|desirable-difficulty rule]]: the system never summarizes for me.)
- **Experience first, then formalize.** Every module opens with a hands-on encounter (the Kolb [[conventions|Concrete Experience]] stage) before any reading. I make a prediction, look at real data, then read to explain what I saw.
- **The dataset is the curriculum.** I anchor abstract genetics to a recurring object: a genotype matrix and a phenotype table. Each phase makes that object richer (allele frequencies -> heritability -> a fitted predictor -> a cross-environment forecast).

---

## The 5 phases

### Phase 1 — Genetics for Data Scientists
**Duration:** 4–6 weeks. **Goal:** build the minimum genetics vocabulary and the population-genetics intuition needed to read a genotype file and reason about allele frequencies, linkage, and structure — without drowning in molecular detail.

Modules:
- [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]]
- [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics: Allele Frequencies, HWE, Drift, Selection]]
- [[p1m3-intro-genomics-snps-sequencing-genotyping-ld|p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD]]

**Phase project:** [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD From Real Genotypes]] — load a real genotype matrix, compute per-SNP allele frequencies, test Hardy–Weinberg expectations, and measure linkage disequilibrium decay.

### Phase 2 — Quantitative Genetics
**Duration:** 6–8 weeks. **Goal:** own the variance-decomposition chain — partition phenotype into genetic and environmental components, define and estimate heritability, predict breeding values, and meet the mixed-model machinery (BLUP, relationship matrices) that the rest of the program is built on.

Modules:
- [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability]]
- [[p2m2-selection-breeding-value-and-response|p2m2 · Selection: Breeding Value and Response]]
- [[p2m3-mixed-models-blup-and-relationship-matrices|p2m3 · Mixed Models, BLUP, and Relationship Matrices]]

**Phase project:** [[p2-simulate-a-breeding-population|Simulate a Breeding Population]] — simulate a population with known genetic architecture, then recover heritability and breeding values to check that the estimators do what the theory promises.

### Phase 3 — Genomics Data Analysis
**Duration:** 6–8 weeks. **Goal:** become fluent with the real data plumbing — how raw sequence becomes variant calls, how to QC and filter a VCF, and how to run a structure-corrected association test — so the modeling phases start from clean, well-understood inputs.

Modules:
- [[p3m1-the-sequencing-to-variants-pipeline|p3m1 · The Sequencing-to-Variants Pipeline]]
- [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness|p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness]]
- [[p3m3-gwas-association-testing-and-structure-correction|p3m3 · GWAS: Association Testing and Structure Correction]]

**Phase project:** [[p3-pca-and-gwas-on-a-public-dataset|PCA + GWAS on a Public Dataset]] — run population-structure PCA and a mixed-model GWAS on a public plant dataset, then sanity-check the hits and the genomic inflation.

### Phase 4 — Machine Learning for Genomic Prediction
**Duration:** 8–10 weeks. **Goal:** the core of the job — implement and benchmark genomic-prediction models from classical mixed-model BLUP through tree ensembles and deep nets, with honest cross-validation that respects population structure.

Modules:
- [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1 · Classical Genomic Prediction: GBLUP and RR-BLUP]]
- [[p4m2-ml-approaches-ridge-elastic-net-rf-gradient-boosting|p4m2 · ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting]]
- [[p4m3-deep-learning-on-genomic-data|p4m3 · Deep Learning on Genomic Data]]
- [[p4m4-reading-agricultural-ml-papers|p4m4 · Reading Agricultural ML Papers]]

**Phase project:** [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]] — benchmark a family of predictors on one dataset under a fixed, structure-aware cross-validation scheme, and report which wins and why.

### Phase 5 — Crop Breeding Domain Knowledge
**Duration:** 4–6 weeks. **Goal:** put the models in the breeder's world — understand the crossing-and-selection cycle, field-trial design, and genotype-by-environment interaction, so model outputs can be framed as selection decisions.

Modules:
- [[p5m1-breeding-pipelines-crossing-selection-cycles-field-trials|p5m1 · Breeding Pipelines: Crossing, Selection Cycles, Field Trials]]
- [[p5m2-genotype-x-environment-interaction-and-stability|p5m2 · Genotype × Environment Interaction and Stability]]

**Phase project:** [[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]] — build a model that predicts trait performance in unobserved environments and reason about stability vs. peak performance.

---

## If I were starting today — the ordered sequence

A linear path through the program, optimized so each step unlocks the next. Numbers are the order I would actually work in, not strict week boundaries.

1. **p1m1** — DNA, genes, inheritance (just enough to read a methods section).
2. **p1m2** — Population genetics: allele frequencies, HWE, drift, selection.
3. **p1m3** — SNPs, genotyping, linkage disequilibrium.
4. **Project 1** — Allele frequencies and LD from real genotypes. *(First real dataset; first evergreen cluster on structure.)*
5. **p2m1** — Sources of variation and heritability. *(The conceptual keystone — do not rush.)*
6. **p2m2** — Breeding value and response to selection.
7. **p2m3** — Mixed models, BLUP, relationship matrices.
8. **Project 2** — Simulate a breeding population (recover what the theory predicts).
9. **p3m1 -> p3m2** — Sequencing-to-variants pipeline, then VCF QC/filtering.
10. **p3m3** — GWAS with structure correction.
11. **Project 3** — PCA + GWAS on a public dataset.
12. **p4m1** — GBLUP / RR-BLUP. *(The bridge from quant-gen to ML: it is the same model.)*
13. **p4m2** — Ridge, elastic net, random forest, gradient boosting.
14. **p4m3** — Deep learning on genomic data.
15. **p4m4** — Reading agricultural ML papers (runs in parallel with 12–14).
16. **Project 4** — Genomic prediction benchmark. *(The portfolio centerpiece.)*
17. **p5m1 -> p5m2** — Breeding pipelines, then G×E and stability.
18. **Project 5** — Predict trait performance across environments.

**Rule of thumb:** do not start a phase until the previous phase's project ships. The project is the [[conventions|Active Experimentation]] stage — it is where the reading turns into a transferable skill, and it is what goes in the portfolio.

---

## The 3 capstones

Three larger, portfolio-grade pieces that integrate across phases. Each is a `project` in `projects/capstone/` and is meant to be public-facing (a write-up plus a reproducible repo).

1. **End-to-end genomic-prediction pipeline.** From a raw public VCF + phenotype file to a tuned, cross-validated genomic-prediction model with a clear accuracy report. Integrates Phases 3 and 4. Deliverable: a reproducible pipeline plus a write-up a breeder could follow.

2. **Method bake-off with an honest verdict.** A rigorous comparison of GBLUP vs. penalized regression vs. tree ensembles vs. a deep net on a multi-environment dataset, under structure-aware cross-validation, ending in a defensible recommendation. Integrates Phases 2, 4, and 5. Deliverable: a benchmark report that states when each method is worth its complexity.

3. **Cross-environment trait forecaster + a breeder-facing explainer.** A G×E-aware model that predicts performance in unobserved environments, paired with a plain-language explainer that frames its outputs as selection decisions. Integrates Phases 4 and 5 and tests the collaboration goal directly. Deliverable: the model, the forecast, and a one-page memo written for a breeder, not a statistician.

## Links
- Context: [[conventions|Vault Conventions]]
- Applies: [[reading-list|Consolidated Reading List]]
- Builds-on: [[learning-system|Learning System philosophy]]
