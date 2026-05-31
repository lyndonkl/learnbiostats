---
type: phase
phase: 4
title: "Machine Learning for Genomic Prediction"
duration: "8–10 weeks"
status: not-started
modules: [p4m1, p4m2, p4m3, p4m4]
project: "[[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]"
competencies:
  - "Fit GBLUP and RR-BLUP on a real marker dataset and explain, in two directions, why they are the same model expressed through markers or through the genomic relationship matrix."
  - "Build the genomic relationship (G) matrix from a genotype matrix and explain why it estimates realized relatedness more precisely than a pedigree."
  - "Compare penalized regression, random forests, and gradient boosting against GBLUP using cross-validated predictive ability, and judge when added model complexity actually buys accuracy."
  - "State why deep nets usually fail to beat GBLUP on tabular genotype matrices, and name the conditions (raw sequence, spatial signal, non-additive effects, large n) under which they can win."
  - "Read a genomic-prediction paper critically: reconstruct its cross-validation design and baseline, and detect relatedness leakage across folds that inflates reported accuracy."
tags: [curriculum, phase]
---

# Phase 4 · Machine Learning for Genomic Prediction

> One sentence: this phase is the core skill of the whole roadmap — predicting breeding values and phenotypes from genome-wide markers — and, just as importantly, knowing when the classical mixed-model methods quietly beat the fancy machine learning and when they genuinely do not.

## Why this phase

Everything before this phase was preparation. Phase 1 made you literate in genetics, Phase 2 gave you the quantitative-genetics machinery (breeding value, heritability, the infinitesimal model), and Phase 3 manufactured the clean genotype matrix you will now feed to models. Phase 4 is where you finally do the thing the field is built around: take markers across the whole genome and predict the genetic merit of an individual the model has never phenotyped.

The trap a data scientist walks into here is treating genomic prediction as a generic tabular-ML problem and reaching for whatever won the last Kaggle competition. It is not a generic problem. The signal is overwhelmingly *additive* and *high-dimensional* (far more markers than individuals), and the structure that makes prediction possible at all — markers in linkage disequilibrium with causal variants, captured as realized relatedness — is exactly the structure a penalized linear mixed model was built to exploit. So the surprising, hard-won lesson of this phase is restraint: GBLUP is a strong, honest baseline, and a method only earns the right to call itself better if it beats GBLUP in *cross-validated predictive ability*, on folds that do not leak relatedness. You will learn the fancy methods precisely so you can tell when they are worth it.

The phase runs the same Kolb arc inside every module: encounter the phenomenon first (fit a model, watch a fold-leak inflate accuracy, watch a deep net lose to ridge regression), reflect on what surprised you, only then read to build the concept, and finally apply it on the dataset that feeds the phase project.

## Modules

1. [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1 · Classical Genomic Prediction: GBLUP and RR-BLUP]] (Weeks 1–2) — GBLUP, RR-BLUP, the genomic relationship (G) matrix, and the equivalence of ridge regression on markers and GBLUP on G. The baseline every later method must beat.
2. [[p4m2-ml-approaches-ridge-elastic-net-rf-gradient-boosting|p4m2 · ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting]] (Weeks 3–4) — penalized regression, random forests, gradient boosting, and comparing predictive ability with cross-validation. When tree ensembles help and when additive structure makes them pointless.
3. [[p4m3-deep-learning-on-genomic-data|p4m3 · Deep Learning on Genomic Data]] (Weeks 5–6) — CNNs on sequence, marker embeddings, transformer approaches, and the honest question of why deep learning so often fails to beat GBLUP on tabular markers.
4. [[p4m4-reading-agricultural-ml-papers|p4m4 · Reading Agricultural ML Papers]] (Weeks 7–8) — how to read and summarize genomic-prediction papers in wheat, maize, and blueberry, judging each on its cross-validation design and its baseline, and building a durable paper-summary habit.

## Project

The phase converges on one experiential lab:

- [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]] — take a real public marker dataset, build a leakage-aware cross-validation harness, and benchmark GBLUP / RR-BLUP against penalized regression, tree ensembles, and at least one deep net, reporting cross-validated predictive ability with honest uncertainty and a written verdict on which method wins and why.

Each module's Active Experimentation feeds a piece of this benchmark: p4m1 builds the GBLUP/RR-BLUP baseline and the G matrix, p4m2 adds the penalized and tree-ensemble contenders inside the cross-validation harness, p4m3 adds (and most likely fails to beat the baseline with) a deep net, and p4m4 supplies the critical-reading standard you hold your own benchmark to.

## Exit criteria

You exit Phase 4 when, from memory and on a dataset you have not seen before, you can:

- [ ] Fit GBLUP and RR-BLUP on a real marker dataset and explain, in both directions, why estimating marker effects (RR-BLUP) and estimating line effects via the G matrix (GBLUP) are the same model.
- [ ] Construct the genomic relationship (G) matrix from a centered, scaled genotype matrix and say why it estimates *realized* relatedness more precisely than a pedigree's *expected* relatedness.
- [ ] Set up a cross-validation harness that does not leak relatedness across folds, and use cross-validated predictive ability (correlation of predicted vs. observed in held-out folds) — not training fit — as the deciding metric.
- [ ] Benchmark penalized regression, random forests, and gradient boosting against GBLUP, and argue from genetic architecture why penalized linear models usually match or beat tree ensembles on additive traits.
- [ ] Explain why deep nets typically fail to beat GBLUP on tabular genotype matrices, and name the conditions under which they can win.
- [ ] Read a genomic-prediction paper and, in a structured summary, reconstruct its cross-validation design and baseline and flag any relatedness leakage that would inflate its reported accuracy.

**Mastery target:** `proficient` on the core claims of all four modules; `create` on the phase project.

## Links
- Roadmap: [[roadmap|Learning Roadmap]]
- Prerequisite phase: [[phase-3-genomics-data-analysis|Phase 3 · Genomics Data Analysis]]
- Builds-on: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
- Project: [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]
