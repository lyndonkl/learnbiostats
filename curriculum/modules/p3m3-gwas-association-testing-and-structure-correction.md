---
type: module
phase: 3
module: p3m3
title: "GWAS: Association Testing and Structure Correction"
weeks: "Weeks 5–6"
status: not-started
prerequisites: [p3m2]
objectives:
  - "understand: describe a single-marker association test and why each marker is tested for association with a trait."
  - "understand: explain how population structure and relatedness confound association and how PC covariates and a mixed model correct for them."
  - "apply: run a structure-corrected (PC-covariate and/or mixed-model) GWAS and produce a Manhattan plot, a QQ plot, and a genomic inflation factor."
  - "analyze: read a QQ plot and lambda to judge whether the structure correction held before trusting any peak; reason about the multiple-testing threshold."
readings:
  - "Marees et al. 2018, 'A tutorial on conducting genome-wide association studies: Quality control and statistical analysis', International Journal of Methods in Psychiatric Research 27(2):e1608, with companion code at github.com/MareesAT/GWA_tutorial."
project: "[[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]"
question-bank: "[[p3m3-questions|P3M3 Question Bank]]"
review-due: null
tags: [genomics, gwas, association-testing, population-structure, mixed-model, manhattan-plot, qq-plot, multiple-testing]
---

# p3m3 · GWAS: Association Testing and Structure Correction

> One sentence: a GWAS tests every marker for association with a trait while correcting for relatedness and structure, and the QQ plot is the honesty check — if the test statistics are inflated, the correction failed and no peak can be trusted.

## Learning objectives
- **understand:** describe a single-marker association test and why a GWAS tests each marker, one at a time, for association with the trait.
- **understand:** explain how population structure and relatedness confound association, and how principal-component covariates and a mixed model correct for them.
- **apply:** run a structure-corrected GWAS (PC covariates and/or a mixed model) and produce a Manhattan plot, a QQ plot, and a genomic inflation factor (lambda).
- **analyze:** read a QQ plot and lambda to decide whether the structure correction held *before* trusting any peak, and reason about the multiple-testing threshold.

## Prerequisites
- [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness|p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness]] — you need a QC'd dataset and the PCA + relatedness from that module, because those are the inputs that make this association test honest.

---

## ① Concrete Experience — *do this first, before reading*
Use the clean, structure-described dataset you built in p3m2 (or the example data from the Marees GWAS tutorial repo). You will run the *wrong* analysis first, on purpose, to feel why correction matters.

- **Try:** Run a naive association test — every marker regressed on the trait with **no** covariates and **no** structure correction. Make the QQ plot of the resulting p-values and compute lambda (the genomic inflation factor). Then run it again **with** the top principal components as covariates (and/or a mixed model), and remake the QQ plot.
- **Predict before you check:** Write down, before you run anything:
  1. In a QQ plot, the observed p-values are plotted against what we'd expect under the null of "no marker matters." Most markers genuinely don't matter. So what should the *bulk* of the points look like if the test is well-behaved?
  2. What do you predict the *uncorrected* QQ plot will look like for a dataset that has real population structure — will the points hug the diagonal or lift off it, and which direction?
  3. After you add PCs as covariates, predict what happens to lambda: does it move toward 1, away from 1, or stay put?

Record all predictions in a `session` note before revealing the plots.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against (answer in your own words; do not just read them):
- Your uncorrected QQ plot lifted off the diagonal — almost *every* marker looked a little significant, and lambda came out above 1. Without using the word "inflation," describe what that means: are these markers really all associated with the trait, or is something else making them all look associated together?
- A Manhattan plot of the uncorrected run might show a "peak." After correction, that peak may shrink or vanish. What was that peak actually marking — a causal locus, or ancestry that happens to correlate with both the trait and a whole region of the genome?
- You added principal components as covariates and lambda dropped toward 1. In your own words, what did the PCs *absorb* that was previously being charged to the markers? Why is "ancestry" exactly the kind of thing that, uncorrected, manufactures false associations?
- A mixed model adds a random effect built from the kinship matrix. How is that doing something the fixed PC covariates do not? (Hint: think about pairs of close relatives, not just broad ancestry groups.)
- You are testing hundreds of thousands of markers. If you used p < 0.05 per marker, how many false positives would you expect by chance alone across the genome? What does that force you to do to the significance threshold, and why is a Bonferroni-style genome-wide threshold (e.g. ~5×10⁻⁸ in human GWAS) so much stricter than 0.05?

The seam to mine: a "significant peak" means nothing until the QQ plot says the test was honest. Inflation diagnosed *before* interpretation is the discipline; a peak read off an inflated scan is a mirage.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **Marees, A. T., de Kluiver, H., Stringer, S., Vorspan, F., Curis, E., Marie-Claire, C., & Derks, E. M. (2018). "A tutorial on conducting genome-wide association studies: Quality control and statistical analysis." *International Journal of Methods in Psychiatric Research*, 27(2), e1608.** Companion scripts (PLINK, PRSice, R) at **github.com/MareesAT/GWA_tutorial**. Work through the association-testing and population-stratification sections hands-on; note their QC steps overlap p3m2, and follow the structure-correction and QQ/Manhattan-plot steps closely.
- Supplement with the PLINK association docs (`--assoc`, `--logistic`/`--linear` with `--covar` for PC covariates) for the exact command syntax of the version you run, and read on the QQ plot, the genomic inflation factor lambda, and the Manhattan plot.
- (Background on the mixed-model approach to GWAS — adding a kinship/genomic-relationship random effect — is worth one reading; the Marees tutorial covers PC-covariate correction directly, and the mixed-model idea connects forward to genomic prediction in Phase 4.)

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note):
- *A GWAS tests each marker, one at a time, for statistical association with a trait; the genome-wide scan is many single-marker tests, not one joint model.*
- *Population structure and relatedness are confounders in GWAS: ancestry that correlates with both the trait and large genomic regions manufactures associations that are not causal, so association testing must correct for structure to be valid.*
- *Principal-component covariates and a kinship-based mixed model are the two standard structure corrections, and the mixed model additionally absorbs relatedness between close individuals that broad PCs miss.*
- *The QQ plot and the genomic inflation factor are the honesty check of a GWAS: systematic departure of the bulk of test statistics from the null (lambda well above 1) means the structure correction failed, and no peak can be trusted until it is fixed.*
- *Testing hundreds of thousands of markers demands a multiple-testing correction far stricter than 0.05, because at the per-test level the expected number of false positives across the genome is enormous.*

**Vocabulary** (define inline as you meet it, do not memorize cold): single-marker association test, additive genetic model, covariate, population stratification / structure, confounding, principal-component covariate, kinship / genomic relationship matrix, mixed (linear mixed) model, random effect, QQ plot, genomic inflation factor (lambda), Manhattan plot, genome-wide significance threshold, Bonferroni correction, multiple testing.

## ④ Active Experimentation — *apply it*
- **Exercise:** Run the full corrected GWAS on your QC'd dataset: association test with PC covariates (and a mixed model if you can), then produce (1) a Manhattan plot, (2) a QQ plot, and (3) lambda for both the uncorrected and corrected runs. Write a one-paragraph verdict for each peak that survives correction: is it credible, and what is your genome-wide significance threshold and why?
- **Mini-project hook:** this *is* the heart of [[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]. The PCs come from p3m2; the corrected scan, the two plots, and the written threshold-and-inflation defense are the project's headline deliverables.
- **Predict-then-check:** Predict what happens to lambda and to your top peak if you *deliberately* leave in a pair of close relatives you should have pruned in p3m2. Then run it and check. Did relatedness inflate the scan even after PC correction? This is the case for the mixed model, discovered rather than asserted.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Explain what a single-marker association test does and why a genome-wide scan needs structure correction to be valid. (retrieval)
- [ ] Read an unfamiliar QQ plot and its lambda and decide whether the GWAS is trustworthy *before* looking at any peak. (transfer)
- [ ] State and justify a genome-wide significance threshold and explain why per-marker p < 0.05 would be a disaster across the genome. (transfer)
- [ ] Say how a mixed model corrects for relatedness that PC covariates alone do not. (transfer)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p3m3-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[phase-4-ml-for-genomic-prediction|Phase 4 · Genomic Prediction and Selection]]
- Project: [[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]
- Phase: [[phase-3-genomics-data-analysis|Phase 3 · Genomics Data Analysis]]
- Prerequisite: [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness|p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness]]
