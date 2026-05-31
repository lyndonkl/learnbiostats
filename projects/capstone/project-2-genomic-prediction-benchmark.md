---
type: project
phase: 4
title: "Genomic Prediction Benchmark"
status: not-started        # not-started | in-progress | complete
skills: [python, r, genomic-prediction, cross-validation, machine-learning, model-comparison, error-analysis]
deliverables: [notebook, report, cv-comparison-table, feature-importance-analysis, error-analysis]
datasets: ["Same crop panel as Project 1 (genotype + quantitative trait)", "CropGS-Hub curated GS datasets (alternative)"]
tags: [project, experiential, capstone]
---

# Genomic Prediction Benchmark

> The experiential core of the Phase 4 capstone. You predict a quantitative trait from genome-wide markers using a panel of methods — from the classical linear mixed model to gradient-boosted trees and a neural net — under one fair, shared cross-validation scheme, then dissect *why* the winner wins.

## Why this project
The headline question in genomic selection is deceptively simple: given markers, how well can you predict an unobserved phenotype or breeding value? The honest answer is that, for most polygenic traits, the classical linear methods are very hard to beat — and understanding *why* that is so is the real education. This benchmark makes you put GBLUP/RR-BLUP, Ridge, Elastic Net, Random Forest, XGBoost, and a small neural network on the same starting line, with identical folds, identical preprocessing, and identical evaluation, so the only thing that varies is the model. That is the discipline that separates a defensible benchmark from a leaderboard accident. It mirrors real computational-breeding work: the decision is rarely "which model is fanciest" but "which model gives reliable prediction accuracy per unit of data, compute, and interpretability."

This capstone builds on the Phase 4 project, [[p4-genomic-prediction-benchmark|Genomic Prediction Baseline]], extending its single-model baseline into a controlled multi-method comparison with feature and error analysis.

## Concepts it forces you to apply
- [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]] — this is *the* mechanism the whole benchmark tests, and it explains why GBLUP and Ridge are so strong on additive polygenic traits.
- [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]] — the trait's heritability in this panel is the ceiling on achievable predictive accuracy; you cannot predict variance that is environmental noise.
- [[gblup-and-rr-blup-are-the-same-model-viewed-from-the-marker-side-or-the-individual-side|GBLUP and RR-BLUP are the same model viewed from the marker side or the individual side]] — *placeholder evergreen, to be written in Phase 4; understanding this equivalence keeps you from "double-counting" the linear baseline.*

## Setup
- **Language / tools:** Python (scikit-learn for Ridge, Elastic Net, Random Forest, and the CV harness; XGBoost; a small MLP in PyTorch or Keras) plus R (**rrBLUP** and/or **BGLR**) for GBLUP/RR-BLUP. Confirm package versions and CV APIs against current docs (see gaps).
  - scikit-learn — Pedregosa et al., *JMLR* 12 (2011): 2825-2830.
  - XGBoost — Chen & Guestrin, *Proc. 22nd ACM SIGKDD* (2016): 785-794.
  - rrBLUP — Endelman, *The Plant Genome* (2011); BGLR — Pérez & de los Campos, *Genetics* (2014). *Verify the exact citation details when you write the report (see gaps).*
- **Data:** Reuse the genotype + quantitative trait from [[project-1-gwas|Project 1]] for continuity, or pull a curated genomic-selection dataset from **CropGS-Hub** (https://iagr.genomics.cn/CropGS/). The same trait across both capstones lets you connect "which loci associate" (GWAS) to "how well the whole genome predicts" (GS).
- **Environment:** One preprocessing pipeline (imputation, MAF filter, standardization) applied identically to every model; fixed seeds; a single outer CV split object shared across all methods so the comparison is apples-to-apples.

## Milestones (each ends in a predict-then-check)
1. **Build the shared CV harness.** Decide the scheme — k-fold and, critically, a structure-aware split (leave-one-family/cluster-out) to expose optimistic accuracy. *Predict: will random k-fold over- or under-state accuracy versus a relatedness-aware split? Then check.*
2. **Run the linear baselines** (GBLUP/RR-BLUP, Ridge, Elastic Net). *Predict whether Elastic Net's sparsity helps or hurts on a polygenic trait before you see the numbers.*
3. **Run the nonlinear models** (Random Forest, XGBoost, neural net), tuning each fairly inside the inner CV loop only. *Predict whether the tree/NN models beat the linear baseline; for most additive traits, predict they will not — then check.*
4. **Feature analysis.** Compare marker importance (XGBoost gain, RF importance, Ridge/Elastic Net coefficients) against the GWAS peaks from Project 1. *Predict whether the GWAS hits show up as top features.*
5. **Error analysis.** Where does every model fail together (hard-to-predict individuals)? Decompose error by relatedness to the training set and by trait extremity. *Predict that prediction accuracy falls off as test individuals become less related to training — the relatedness mechanism, made visible.*

## Deliverables
- [ ] Notebook / script (committed) — shared harness + all six method families, fully reproducible.
- [ ] Short write-up (a `post` candidate): "Why the fancy model didn't win my genomic-prediction benchmark."
- [ ] CV comparison table (accuracy ± SE per method, per CV scheme), feature-importance comparison, and error-analysis figures — candidates for a `docs/` D3 visualization via `biostat-viz`.

## Stretch goals
- Add BayesB or a Bayesian shrinkage model from BGLR and contrast its variable-selection behavior with Elastic Net.
- Vary training-set size to draw learning curves; relate the slope to heritability and effective number of independent chromosome segments.
- Test a genotype-by-environment extension if a multi-environment phenotype is available.

## Reflection prompts (Kolb RO/AC)
- What did you predict the ranking of methods would be, what happened, and what does the gap teach about additive vs nonlinear genetic architecture?
- Did the relatedness-aware CV split change the story? What does that say about how genomic prediction "really" works?
- Which evergreen claim did this confirm, extend, or contradict? If a nonlinear model won, was it signal or leakage?

## Links
- Phase: [[phase-4-ml-for-genomic-prediction|Phase 4 · Machine Learning for Genomic Prediction]]
- Builds-on: [[p4-genomic-prediction-benchmark|Genomic Prediction Baseline]]
- Context: [[project-1-gwas|GWAS on a Public Crop Dataset]]
- Context: [[why-relatedness-is-the-engine-of-prediction|Why relatedness is the engine of both classical and genomic prediction]]
