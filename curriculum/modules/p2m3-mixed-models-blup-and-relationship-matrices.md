---
type: module
phase: 2
module: p2m3
title: "Mixed Models, BLUP, and Relationship Matrices"
weeks: "Weeks 5–6"
status: not-started
prerequisites: [p2m2]
objectives:
  - "understand: distinguish fixed from random effects and say why breeding values are modeled as random"
  - "understand: explain BLUP as shrinkage of each individual's prediction toward the mean in proportion to its information"
  - "apply: build the numerator relationship (A) matrix from a pedigree and fit a BLUP model with rrBLUP or sommer"
  - "analyze: explain how replacing the A matrix with a marker-based G matrix turns pedigree BLUP into genomic prediction"
readings:
  - "University of Wisconsin–Madison graduate quantitative genetics / genomics course notes on linear mixed models and BLUP (specific current page unverified — see gaps)"
  - "rrBLUP package documentation (Endelman 2011) — mixed.solve, A.mat, kin.blup"
  - "sommer package vignettes (Covarrubias-Pazaran 2016) — Quantitative genetics using sommer; mmer/mmes REML fitting"
project: "[[p2-simulate-a-breeding-population|Simulate a Breeding Population]]"
question-bank: "[[p2m3-questions|P2M3 Question Bank]]"
review-due: null
tags: [quantitative-genetics, mixed-models, blup, relationship-matrix, reml, phase-2]
---

# p2m3 · Mixed Models, BLUP, and Relationship Matrices

> One sentence: BLUP is the machinery that turns "I have noisy, unbalanced records on individuals and their relatives" into a single best guess at each individual's breeding value — and the relationship matrix is the one ingredient that, when you swap it for markers, becomes genomic prediction.

## Learning objectives
- **understand:** Tell a fixed effect from a random effect, and say why breeding values belong on the random side.
- **understand:** Describe BLUP as shrinkage toward the mean, with the amount of shrinkage set by how much information an individual carries (its own records plus its relatives').
- **apply:** Construct the numerator relationship (`A`) matrix from a pedigree and fit a BLUP model using `rrBLUP` or `sommer`.
- **analyze:** Explain precisely what changes — and what does not — when you replace `A` with a marker-based genomic relationship matrix `G`.

## Prerequisites
- [[p2m2-selection-breeding-value-and-response|p2m2 · Selection: Breeding Value and Response]] — you must already hold that breeding value is the quantity selection acts on, and that response is bounded by how *accurately* you can rank breeding values. BLUP is the accurate ranking machine.

---

## ① Concrete Experience — *do this first, before reading*
Reuse your breeding-population simulator. You know each individual's *true* breeding value (you generated it). Now you will try to recover it from data, two ways.

- **Try:** Take one trait, one round of records, with deliberately unbalanced data — some individuals have several offspring with records, some have one, some have none of their own. First estimate each individual's merit the naive way: just its own phenotype (or its progeny mean). Then fit a BLUP model: install `rrBLUP` or `sommer`, build the `A` matrix from your pedigree, and predict breeding values. Verify the exact function names against the current package docs as you go (see gaps).
- **Predict before you check:** Before you compare, predict: for an individual with *one* noisy record versus one with *ten* relatives' records, which prediction will BLUP pull harder toward the population mean? Commit to "harder" or "less hard," and say why. Then scatter-plot BLUP predictions and naive estimates against the *true* breeding values you stored.

Note which method's predictions hug the true breeding-value line more tightly, especially for the data-poor individuals.

## ② Reflective Observation — *what did you notice?*
Journal against these in a `session` note. Answer before reading.

- The BLUP predictions for data-poor individuals were pulled toward the population mean far more than the data-rich ones. What is the model "saying" when it refuses to take a single noisy record at face value? What would the naive estimate have done instead?
- An individual with *no records of its own* still got a non-trivial BLUP prediction. Where did that information come from? What in the model carried it there?
- You used the pedigree to build `A`. What does an entry `A[i,j]` actually represent, and why does making two individuals "more related" in `A` make their predicted breeding values move together?
- Now the phase-defining question: suppose you threw away the pedigree and instead computed relatedness directly from each individual's marker genotypes. Which part of your BLUP setup would change? Which part would stay exactly the same? What does that tell you about what genomic prediction *is*?

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **University of Wisconsin–Madison graduate quantitative-genetics / genomics course notes** on **linear mixed models and BLUP.** Read for: the mixed-model equation `y = Xβ + Zu + e`, fixed vs random effects, the mixed-model equations (MME) and where `A⁻¹` enters, and REML for estimating variance components. *Note: the specific current course page/instructor is unverified — see gaps; treat any single linked page as provisional and corroborate against the package docs below.*
- **`rrBLUP` (Endelman 2011)** — the package documentation for `mixed.solve` (single-variance-component solver), `A.mat` (marker-based relationship matrix), and `kin.blup`. Confirmed on CRAN.
- **`sommer` (Covarrubias-Pazaran 2016, *PLOS ONE*)** — the *"Quantitative genetics using sommer"* vignette and the REML fitting interface (`mmer`/newer `mmes`), which handles multiple variance components and lets you supply either an `A` or a `G` relationship matrix. Confirmed on CRAN.

**Key concepts to convert into evergreen claims** (write each as its own atomic declarative-claim note, in your own words):
- *BLUP predicts random breeding values by shrinking each individual's prediction toward the population mean in proportion to how little information (own records plus relatives') it has.* — the shrinkage intuition, which is also why BLUP is a regularized estimator an ML practitioner already half-knows.
- *The relationship matrix is what lets information flow between relatives in a mixed model, because it sets the prior covariance among their breeding values.* — the structural role of `A`.
- *Replacing the pedigree-based relationship matrix `A` with a marker-based genomic relationship matrix `G` is exactly the step that turns BLUP into genomic prediction (GBLUP); the rest of the machinery is unchanged.* — the keystone claim of the entire curriculum and the bridge to [[phase-3-genomics-data-analysis|Phase 3]].
- *Variance components estimated by REML (the additive and residual variances) are what calibrate how much BLUP shrinks, so heritability is not just a descriptive number but a tuning input to the predictor.* — ties p2m1's `h²` to this module's machinery.

**Vocabulary** (define inline as you meet it, do not memorize cold): fixed effect, random effect, mixed model, `Xβ`, `Zu`, mixed-model equations (MME), numerator relationship matrix (A), genomic relationship matrix (G), BLUP, REML, shrinkage, reliability/accuracy.

## ④ Active Experimentation — *apply it*
- **Exercise:** With your simulator's *known* true breeding values as ground truth, compute the prediction accuracy (correlation between predicted and true breeding value) for (a) naive own-phenotype, (b) pedigree BLUP using `A`, and (c) GBLUP using a marker-based `G` from `A.mat`. Vary heritability (`h² = 0.2` vs `0.6`) and the number of markers. Tabulate accuracy across the cells.
- **Mini-project hook:** This is the capstone stage of [[p2-simulate-a-breeding-population|Simulate a Breeding Population]]. p2m1 built the variance engine; p2m2 added selection and the breeder's-equation check; this module swaps in a *predictor* — and shows that selecting on BLUP / GBLUP breeding values rather than raw phenotype raises realized response, closing the loop back to p2m2's claim that accuracy is the whole game. The `A`-to-`G` swap here is the live preview of Phase 3.
- **Predict-then-check:** Before running cell (c), predict whether GBLUP will beat pedigree BLUP at low or at high heritability, and whether more markers help more when relatives are sparse. Run it; reconcile any surprise with the claim that `G` captures *realized* relatedness that the pedigree only approximates.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Write the mixed model `y = Xβ + Zu + e` and label which term carries breeding values and which carries fixed effects. (retrieval)
- [ ] Explain what BLUP shrinks, what it shrinks toward, and what sets the amount of shrinkage for a given individual. (retrieval)
- [ ] Say what an entry of the `A` matrix means and why relatedness lets a record on one individual inform the prediction for another. (transfer)
- [ ] State the single conceptual change that converts pedigree BLUP into genomic prediction, and give one reason genomic prediction can beat pedigree BLUP. (transfer to a new case)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p2m3-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Previous: [[p2m2-selection-breeding-value-and-response|p2m2 · Selection: Breeding Value and Response]]
- Next: [[phase-3-genomics-data-analysis|Phase 3 · Genomic Prediction]] — picks up exactly where the A-to-G swap leaves off.
- Project: [[p2-simulate-a-breeding-population|Simulate a Breeding Population]]
- Context: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
