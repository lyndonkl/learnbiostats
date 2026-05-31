---
type: module
phase: 4
module: p4m2
title: "ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting"
weeks: "Weeks 3–4"
status: not-started
prerequisites: [p4m1]
objectives:
  - "understand: explain how ridge, LASSO, and elastic net differ in how they shrink and select marker effects, and how random forests and gradient boosting model interactions."
  - "apply: implement penalized regression and tree-ensemble predictors and compare them to the GBLUP baseline using cross-validated predictive ability."
  - "analyze: argue from genetic architecture why penalized linear models usually match or beat tree ensembles on additive traits, and identify when ML genuinely earns its keep."
readings:
  - "scikit-learn User Guide — Linear Models (Ridge, Lasso, ElasticNet, ElasticNetCV), Ensembles (RandomForestRegressor, GradientBoostingRegressor), and Cross-validation (KFold, cross_val_score). https://scikit-learn.org/stable/"
  - "XGBoost documentation — Introduction to Boosted Trees, Python API, and parameter tuning. https://xgboost.readthedocs.io/"
  - "Chen, T. & Guestrin, C. (2016). XGBoost: A Scalable Tree Boosting System. KDD '16: 785–794. arXiv:1603.02754."
  - "Azodi, C.B., Bolger, E., McCarren, A., Roantree, M., de los Campos, G. & Shiu, S.-H. (2019). Benchmarking parametric and machine learning models for genomic prediction of complex traits. G3 9(11): 3691–3702."
project: "[[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]"
question-bank: "[[p4m2-questions|P4M2 Question Bank]]"
review-due: null
tags: [genomic-prediction, penalized-regression, elastic-net, random-forest, gradient-boosting, cross-validation, predictive-ability]
---

# p4m2 · ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting

> One sentence: this module pits the obvious machine-learning toolkit — penalized regression, random forests, gradient boosting — against the GBLUP baseline, and teaches the discipline that decides the contest: cross-validated predictive ability, not training fit.

## Learning objectives
- **understand:** explain how ridge, LASSO, and elastic net differ in how they shrink and select marker effects, and how random forests and gradient boosting model interactions.
- **apply:** implement penalized regression and tree-ensemble predictors and compare them to the GBLUP baseline using cross-validated predictive ability.
- **analyze:** argue from genetic architecture why penalized linear models usually match or beat tree ensembles on additive traits, and identify when ML genuinely earns its keep.

## Prerequisites
- [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1 · Classical Genomic Prediction: GBLUP and RR-BLUP]] — you need the GBLUP/RR-BLUP baseline and the held-out predictive ability already in hand; this module measures everything *against* it.

---

## ① Concrete Experience — *do this first, before reading*
Use the same real marker dataset from p4m1 (e.g. the BGLR `wheat` dataset, 599 lines × 1,279 markers) so the comparison is apples-to-apples against your existing GBLUP baseline. Move into Python: load the genotype matrix as `X` and a phenotype as `y`.

- **Try:** fit four predictors on `X → y`: (1) Ridge / `ElasticNetCV`, (2) `RandomForestRegressor`, (3) gradient boosting (`GradientBoostingRegressor` or XGBoost), and, for honesty, re-fit (4) your GBLUP/RR-BLUP baseline. Evaluate each one *the same way*: a `KFold` cross-validation, and in each held-out fold compute the **predictive ability** = Pearson correlation between predicted and observed phenotypes. Report the mean correlation across folds for each method, plus its spread.
- **Predict before you check:** Write down a guess, *before* reading anything, for each of these:
  1. Rank the four methods by cross-validated predictive ability. Where will gradient boosting land relative to GBLUP — above, tied, or below?
  2. For each method, will the *training-set* correlation be higher or lower than the *held-out* correlation, and by how much? Which method will have the biggest gap?
  3. If you instead picked the winner by training fit, which method would "win," and would that be the same as the cross-validated winner?

Commit your predictions to a `session` note *before* you reveal the answers.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against in a `session` note (answer them in your own words; do not just read them):
- Random forests and gradient boosting almost certainly fit the *training* data better than ridge regression did — yet on held-out folds the linear model probably matched or beat them. What does that gap tell you about the difference between learning a pattern and memorizing the training set?
- The genetic architecture you studied in Phase 2 was overwhelmingly *additive* (many small effects summing). Tree ensembles are machines for finding *interactions* and *non-linearities*. If the true signal is additive, what is a tree ensemble spending its capacity on, and why might that hurt it?
- Ridge keeps all markers with shrunk effects; LASSO zeros most of them; elastic net does a bit of both. On a trait controlled by many small effects spread across the genome, which behavior do you expect to predict better, and why?
- You measured everything by held-out correlation. Suppose someone reported a glowing accuracy from training fit instead. Name the precise way that number lies — what is it actually measuring?
- Under what *change* to the trait or the data would you expect the tree ensemble to finally pull ahead of GBLUP? Be concrete about the mechanism (interactions? G×E? sample size?).

The seam to mine: the gap between "more flexible model = better predictions" and the reality that flexibility is wasted — even harmful — when the underlying signal is additive and the honest metric is out-of-sample.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **scikit-learn User Guide** — *Linear Models* (Ridge, Lasso, ElasticNet, and the `ElasticNetCV` cross-validated variant), *Ensemble methods* (`RandomForestRegressor`, `GradientBoostingRegressor`), and *Cross-validation* (`KFold`, `cross_val_score`, custom scorers). Read for the mechanics, not theory: how each estimator's hyperparameters control shrinkage, depth, and number of trees.
- **XGBoost documentation** — *Introduction to Boosted Trees* and the Python API. Read for what boosting actually does (additive stage-wise trees on residuals), regularization, and the handful of parameters that matter (learning rate, depth, n_estimators, subsampling).
- **Chen & Guestrin (2016), *XGBoost*, KDD '16:785–794** — the system paper. Skim for the regularized objective and why boosted trees became the default tabular-ML workhorse; that reputation is exactly what you are stress-testing on genomic data.
- **Azodi et al. (2019), *G3* 9(11):3691–3702** — the load-bearing read. A clean benchmark of six linear and six non-linear algorithms across 18 traits in six plant species. Read for the headline finding: across most traits, the linear/parametric methods (including rrBLUP/Bayesian models) were competitive with or better than the machine-learning methods, and the relative ranking depends on genetic architecture and training-set size.

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note):
- *For mostly-additive traits, penalized linear models usually match or beat tree ensembles in genomic prediction, because the genetic architecture is additive and high-dimensional — exactly what shrinkage was designed for and what trees waste capacity fighting.* (e.g. slug `for-additive-traits-penalized-linear-models-usually-beat-tree-ensembles-in-genomic-prediction`)
- *Machine learning earns its keep in genomic prediction mainly where non-additive effects or genotype-by-environment interaction matter; absent those, added model flexibility does not improve out-of-sample prediction.* (e.g. slug `ml-earns-its-keep-in-genomic-prediction-only-where-non-additive-effects-or-gxe-matter`)
- *The honest metric for a genomic-prediction model is cross-validated predictive ability — the correlation of predicted and observed in held-out folds — not training fit, which any flexible model can inflate by memorizing.* (e.g. slug `the-honest-metric-for-genomic-prediction-is-cross-validated-predictive-ability-not-training-fit`)
- *Elastic net blends ridge and LASSO penalties, so it both shrinks and selects; on traits controlled by many small effects in linkage, ridge-like behavior typically predicts better than aggressive LASSO selection.* (e.g. slug `elastic-net-blends-shrinkage-and-selection-and-ridge-like-behavior-suits-many-small-effects`)

**Vocabulary** (define inline as you meet it, do not memorize cold): penalized/regularized regression, ridge (L2), LASSO (L1), elastic net, hyperparameter, cross-validation, K-fold, predictive ability (held-out correlation), overfitting, training fit vs. generalization, random forest, bagging, gradient boosting, learning rate, tree depth, feature interaction, additive vs. non-additive genetic variance.

## ④ Active Experimentation — *apply it*
- **Exercise:** Build a single reusable cross-validation harness (a function that takes a predictor and returns mean ± SD of held-out predictive ability over K folds) and run *all* methods — GBLUP, RR-BLUP, ElasticNetCV, random forest, gradient boosting — through the exact same folds. Produce one table and one bar chart ranking methods by held-out correlation with error bars. Tune the tree-ensemble hyperparameters *inside* each training fold (nested CV) so you are not leaking the test fold into tuning.
- **Mini-project hook:** this harness *is* the core of [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]. The penalized and tree-ensemble contenders you add here become rows in the benchmark table; p4m3's deep net becomes one more row run through the identical folds.
- **Predict-then-check:** Before you run it, predict the *direction* of the gap between each method's training correlation and its held-out correlation, and which method has the largest gap. Then compute both. Did the most flexible method (gradient boosting) have the biggest train-to-held-out drop? Write what that implies about choosing a model by training fit.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Explain the difference between ridge, LASSO, and elastic net in terms of shrinkage and selection, and say which suits many-small-effects architecture. (retrieval)
- [ ] Describe a leakage-free cross-validation harness and state why predictive ability, not training fit, is the deciding metric. (transfer)
- [ ] Argue, from additive genetic architecture, why a penalized linear model often beats gradient boosting here — and name a concrete condition under which the ensemble would win. (transfer)
- [ ] Reproduce, qualitatively, the Azodi et al. finding: that linear/parametric methods are competitive with or better than ML across most traits. (retrieval)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p4m2-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[p4m3-deep-learning-on-genomic-data|p4m3 · Deep Learning on Genomic Data]]
- Project: [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]
- Phase: [[phase-4-ml-for-genomic-prediction|Phase 4 · Machine Learning for Genomic Prediction]]
- Prerequisite: [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1 · Classical Genomic Prediction: GBLUP and RR-BLUP]]
