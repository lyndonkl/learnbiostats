---
type: module
phase: 4
module: p4m1
title: "Classical Genomic Prediction: GBLUP and RR-BLUP"
weeks: "Weeks 1–2"
status: not-started
prerequisites: [p2m2, p3m2]
objectives:
  - "understand: explain GBLUP and RR-BLUP and why estimating marker effects and estimating line effects via the genomic relationship matrix are the same model viewed two ways."
  - "apply: build the genomic relationship (G) matrix from a centered, scaled genotype matrix and fit both RR-BLUP and GBLUP on a real marker dataset."
  - "analyze: argue why the G matrix estimates realized relatedness more precisely than a pedigree, and what that buys for prediction of unphenotyped individuals."
readings:
  - "Meuwissen, T.H.E., Hayes, B.J. & Goddard, M.E. (2001). Prediction of total genetic value using genome-wide dense marker maps. Genetics 157(4): 1819–1829. — the founding genomic-selection paper."
  - "Crossa, J., Pérez-Rodríguez, P., Cuevas, J., et al. (2017). Genomic selection in plant breeding: methods, models, and perspectives. Trends in Plant Science 22(11): 961–975."
  - "Endelman, J.B. (2011). Ridge regression and other kernels for genomic selection with R package rrBLUP. The Plant Genome 4(3): 250–255. — package + vignette."
  - "Pérez, P. & de los Campos, G. (2014). Genome-wide regression and prediction with the BGLR statistical package. Genetics 198(2): 483–495. — package + vignette."
project: "[[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]"
question-bank: "[[p4m1-questions|P4M1 Question Bank]]"
review-due: null
tags: [genomic-prediction, gblup, rr-blup, genomic-relationship-matrix, mixed-models, breeding-value]
---

# p4m1 · Classical Genomic Prediction: GBLUP and RR-BLUP

> One sentence: before you reach for any machine-learning method, you have to hold the baseline it must beat — a penalized linear mixed model that predicts genetic merit from genome-wide markers, expressed equivalently as ridge regression on markers (RR-BLUP) or as a relatedness model on the genomic relationship matrix (GBLUP).

## Learning objectives
- **understand:** explain GBLUP and RR-BLUP and why estimating marker effects and estimating line effects via the genomic relationship matrix are the same model viewed two ways.
- **apply:** build the genomic relationship (G) matrix from a centered, scaled genotype matrix and fit both RR-BLUP and GBLUP on a real marker dataset.
- **analyze:** argue why the G matrix estimates *realized* relatedness more precisely than a pedigree, and what that buys for predicting individuals you have never phenotyped.

## Prerequisites
- [[p2m2-selection-breeding-value-and-response|p2m2 · Selection, Breeding Value, and Response]] — you must already hold *breeding value* as the predictand; genomic prediction is just a new estimator of the thing this module taught you to want.
- [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness|p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness]] — the genotype matrix you feed these models is the QC'd output of that module; you need to know what is in it.

---

## ① Concrete Experience — *do this first, before reading*
Get a real marker dataset in front of you and predict before you model. A clean, small, public choice is the `wheat` dataset shipped with the BGLR R package: 599 historical CIMMYT wheat lines, genotyped at 1,279 markers, with grain yield phenotyped in four mega-environments. (Any real genotype-plus-phenotype dataset works — the point is real markers, real relatedness, not a textbook toy.)

- **Try:** load the genotype matrix (lines × markers, coded 0/1/2 or −1/0/1) and one phenotype column. Center and scale the markers. Compute a genomic relationship matrix `G` (one common form: `G = ZZ' / k`, where `Z` is the centered/scaled genotype matrix and `k` is a scaling constant such as twice the sum of allele-frequency variances). Then fit a genomic prediction *two ways* on the same data: (a) RR-BLUP — a ridge regression that estimates one small effect per marker; (b) GBLUP — a mixed model with `G` as the covariance among lines. Use a package that exposes both (e.g. rrBLUP's `mixed.solve`/`kin.blup`, or BGLR).
- **Predict before you check:** Write down a guess, *before* you read anything, for each of these:
  1. RR-BLUP estimates ~1,279 marker effects; GBLUP estimates ~599 line effects. Will their predicted genetic values for the same lines agree closely, or diverge?
  2. Hold out 20% of the lines (mask their phenotypes), predict them from the rest, and correlate predicted with observed. Will that held-out correlation be closer to 1.0 (the heritability ceiling), or much lower? Guess a number.
  3. If you replaced `G` with a pedigree-based relationship matrix `A` (expected relatedness from the family tree), would prediction get better or worse, and why?

Commit your three predictions to a `session` note *before* you reveal the answers.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against in a `session` note (answer them in your own words; do not just read them):
- You fit the same prediction two ways and got essentially the same predicted genetic values out. What does that *force* you to conclude about the relationship between "a model over markers" and "a model over relatedness"? What single mathematical object links the marker effects to the line covariance?
- RR-BLUP shrinks every marker effect toward zero by the same penalty. Why is shrinking *necessary* here — what goes wrong if you fit 1,279 marker effects to a few hundred lines with ordinary least squares? Connect this to what you already know about more parameters than observations.
- GBLUP never estimates a single marker effect, yet it predicts genetic merit. Where, then, did the marker information *go* — what part of `G` is carrying it?
- You masked some lines and predicted them. The prediction worked only because the masked lines were *related* to the training lines through shared marker patterns. Describe, without using the word "marker," what the model is actually exploiting to predict an individual it never phenotyped.
- A pedigree says two full sibs are related by exactly 0.5. Two real full sibs, genotyped densely, are related by something *near* 0.5 but not exactly. What is the source of that scatter, and why would a number that captures the *realized* scatter predict better than the pedigree's fixed expectation?

The seam to mine: the gap between thinking "genomic prediction is a regression on markers" and seeing it as "a model of realized relatedness, where markers are just how relatedness is measured precisely."

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **Meuwissen, Hayes & Goddard (2001), *Genetics* 157:1819–1829** — the founding paper of genomic selection. Read for the central proposal: estimate the effects of *all* markers simultaneously (not just significant ones), and predict total genetic value from the whole genome. Note the shrinkage/Bayesian framing and why estimating thousands of small effects from limited records is even possible.
- **Crossa et al. (2017), *Trends in Plant Science* 22(11):961–975** — a modern, plant-breeding-centered review. Read for the GBLUP/RKHS/Bayesian model family, the role of the genomic relationship matrix, and how genomic prediction is actually deployed in breeding programs (including G×E).
- **Endelman (2011), *The Plant Genome* 4:250–255 + the rrBLUP vignette** — the practical bridge. Read for `mixed.solve` (the single-variance-component solver), `A.mat` (building the genomic relationship matrix), and the explicit statement that you can predict by estimating marker effects (RR-BLUP) *or* line effects (GBLUP).
- **Pérez & de los Campos (2014), *Genetics* 198:483–495 + the BGLR vignette** — the Bayesian toolbox: BRR, BayesA/B/C, Bayesian LASSO, and RKHS, all in one package, plus the `wheat` example dataset.

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note):
- *Genomic prediction works because markers in linkage disequilibrium with causal variants let the genomic relationship matrix estimate realized relatedness, which is what actually predicts an unphenotyped individual's genetic value.* (e.g. slug `genomic-prediction-works-because-markers-in-ld-let-the-g-matrix-estimate-realized-relatedness`)
- *The genomic relationship (G) matrix estimates realized relatedness far more precisely than a pedigree, because a pedigree gives only the expected relatedness while dense markers capture the actual fraction of genome two individuals share.* (e.g. slug `the-g-matrix-estimates-realized-relatedness-more-precisely-than-a-pedigree`)
- *RR-BLUP on markers and GBLUP on the G matrix are the same model viewed two ways: estimating many shrunk marker effects and estimating line effects under a marker-derived covariance produce equivalent genetic-value predictions.* (e.g. slug `rr-blup-on-markers-and-gblup-on-the-g-matrix-are-the-same-model-viewed-two-ways`)
- *Genomic prediction must shrink marker effects because there are far more markers than individuals; ridge-style shrinkage is what makes estimating thousands of small additive effects from limited records possible at all.* (e.g. slug `genomic-prediction-must-shrink-marker-effects-because-markers-vastly-outnumber-individuals`)

**Vocabulary** (define inline as you meet it, do not memorize cold): genomic selection, GEBV (genomic estimated breeding value), RR-BLUP, GBLUP, genomic relationship matrix (G), pedigree/numerator relationship matrix (A), realized vs. expected relatedness, linkage disequilibrium (LD), shrinkage/ridge penalty, variance component, BLUP, marker effect, allele dosage (0/1/2), centering and scaling of genotypes.

## ④ Active Experimentation — *apply it*
- **Exercise:** On your real dataset, demonstrate the RR-BLUP ↔ GBLUP equivalence to yourself empirically. Fit both, then scatter-plot the predicted genetic values from RR-BLUP against those from GBLUP for all lines — they should fall essentially on the identity line. Then derive (or just confirm numerically) the link: marker effects in RR-BLUP map to line effects via `g = Z·u`, where `u` are marker effects and `Z` is the genotype matrix. Write one paragraph stating the equivalence in your own words, with the equation that ties the two views.
- **Mini-project hook:** the G matrix you build and the GBLUP/RR-BLUP fit you produce here are the **baseline** of [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]. Every fancier method in p4m2 and p4m3 will be measured against the held-out predictive ability you record now. Save the code and the baseline correlation.
- **Predict-then-check:** Before you run it, predict what happens to held-out predictive ability if you (a) thin the markers to a random 10% subset, and (b) swap the genomic `G` for a pedigree `A` matrix. Then do both and check. Which change hurts more, and what does that tell you about where the predictive signal lives — in the *count* of markers, or in the *relatedness* they reconstruct? Write the answer.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] State, in both directions, why RR-BLUP and GBLUP are the same model, including the equation that maps marker effects to line effects. (retrieval)
- [ ] Build a genomic relationship matrix from a genotype matrix and explain each step (center, scale, cross-product, scale-by-k). (transfer to a new dataset)
- [ ] Explain to someone who thinks "use a pedigree" why dense markers predict better, in terms of realized vs. expected relatedness. (transfer)
- [ ] Report a held-out predictive ability for GBLUP and say why training fit would have been a dishonest number to report instead. (retrieval)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p4m1-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[p4m2-ml-approaches-ridge-elastic-net-rf-gradient-boosting|p4m2 · ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting]]
- Project: [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]
- Phase: [[phase-4-ml-for-genomic-prediction|Phase 4 · Machine Learning for Genomic Prediction]]
- Prerequisite: [[p2m2-selection-breeding-value-and-response|p2m2 · Selection, Breeding Value, and Response]]
- Prerequisite: [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness|p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness]]
