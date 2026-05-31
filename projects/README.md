---
type: reference
created: 2026-05-30
tags: [projects, index, experiential]
---

# Projects Index — the experiential spine

Projects are where the curriculum stops being reading and starts being capability. Each phase has one project that proves the phase's core competency by building something; the three **capstones** in [[project-1-gwas|capstone/]] are the scaled-up, real-data culmination, each one looping back to a phase project and forward through everything after it. This file maps every project to its phase and to the competencies it is meant to prove.

The convention for project notes is in [[conventions|Vault Conventions]] §6 (`type: project`) and the shape is [[conventions|templates/project.md]]. Each project ends every milestone in a **predict-then-check** (the Active Experimentation pole of the Kolb cycle), and produces a write-up that feeds the writing loop.

> Note: phase and phase-project notes are forward links here. Slugs follow the documented naming scheme and resolve in Obsidian once those notes are authored. See gaps.

---

## Phase projects

| Phase | Project | Proves you can… |
|---|---|---|
| Phase 1 · Foundations | [[p1-allele-frequencies-and-ld-from-real-genotypes|Exploratory Analysis of a Genomic Dataset]] | Load, clean, and explore real genomic + phenotypic data; reason about distributions, missingness, and scale before modeling. |
| Phase 2 · Quantitative Genetics | [[p2-simulate-a-breeding-population|Simulate a Breeding Population]] | Translate the variance-components / breeder's-equation framework into a working single-generation simulation; estimate heritability from simulated data. |
| Phase 3 · Statistical Genetics and GWAS | [[p3-pca-and-gwas-on-a-public-dataset|Association Mapping Mini-Project]] | Run association mapping on one chromosome; diagnose and correct for population structure and kinship; read a Manhattan/QQ plot honestly. |
| Phase 4 · Machine Learning for Genomic Prediction | [[p4-genomic-prediction-benchmark|Genomic Prediction Baseline]] | Fit and cross-validate a genomic-prediction model; report prediction accuracy without leakage. |
| Phase 5 · Synthesis and Communication | (the three capstones below serve as the Phase 5 deliverable) | Integrate the full pipeline and communicate it. |

---

## Capstones

The capstones are deliberately cross-phase. Each is a full, real (or fully simulated) study with a committed notebook, a written report, and publication-quality visualizations.

### [[project-1-gwas|Project 1 · GWAS on a Public Crop Dataset]]
- **Builds on:** Phase 3 project ([[p3-pca-and-gwas-on-a-public-dataset|Association Mapping Mini-Project]]).
- **Competencies proved:** genome-scale data wrangling and QC; PCA and kinship for population structure; mixed-model GWAS (MLM / FarmCPU / BLINK) with correct confounding control; threshold and multiple-testing reasoning; honest interpretation of peaks; reproducible pipeline.
- **Deliverables:** notebook, report, Manhattan + QQ + PCA visualizations.

### [[project-2-genomic-prediction-benchmark|Project 2 · Genomic Prediction Benchmark]]
- **Builds on:** Phase 4 project ([[p4-genomic-prediction-benchmark|Genomic Prediction Baseline]]).
- **Competencies proved:** fair, leakage-free model comparison under one shared cross-validation scheme; fluency across linear (GBLUP/RR-BLUP, Ridge, Elastic Net) and nonlinear (Random Forest, XGBoost, neural net) methods; relatedness-aware validation; feature-importance and error analysis; the judgment to read "the simple model won" as a result rather than a failure.
- **Deliverables:** notebook, report, CV comparison table, feature-importance and error-analysis figures.

### [[project-3-breeding-simulation|Project 3 · End-to-End Breeding Simulation]]
- **Builds on:** Phase 2 project ([[p2-simulate-a-breeding-population|Simulate a Breeding Population]]).
- **Competencies proved:** multi-cycle stochastic simulation of a breeding program (AlphaSimR); measuring realized genetic gain across replicates; connecting the breeder's equation to simulated reality including the Bulmer effect; demonstrating quantitatively how genomic prediction raises gain *per unit time* via accuracy and a shorter generation interval; decision-relevant scheme comparison.
- **Deliverables:** notebook, report, genetic-gain curves (per cycle and per year), scheme comparison.

---

## The competency thread across the three capstones

The capstones are sequenced to mirror the logic of the field, and they share one engine: **relatedness**.
1. **GWAS** asks *which* loci associate with a trait — and forces you to treat relatedness as confounding to be removed.
2. **Genomic prediction** asks *how well the whole genome predicts* — and reuses that same relatedness as the signal.
3. **Breeding simulation** asks *what prediction buys you over time* — and turns accuracy and generation interval into genetic gain.

This thread is mapped conceptually in the structure note [[why-relatedness-is-the-engine-of-prediction|Why relatedness is the engine of both classical and genomic prediction]].

## Links
- Conventions: [[conventions|Vault Conventions]]
- Assessment of project work: [[assessments/README|How Assessment Works]]
- Cross-cutting structure note: [[why-relatedness-is-the-engine-of-prediction|Why relatedness is the engine of both classical and genomic prediction]]
