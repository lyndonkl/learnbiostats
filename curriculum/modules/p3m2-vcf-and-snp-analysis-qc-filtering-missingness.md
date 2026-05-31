---
type: module
phase: 3
module: p3m2
title: "VCF and SNP Analysis: QC, Filtering, Missingness"
weeks: "Weeks 3–4"
status: not-started
prerequisites: [p3m1]
objectives:
  - "understand: define the MAF, call-rate (--geno/--mind), and HWE (--hwe) filters and state what each one removes and why."
  - "apply: run a full PLINK QC pass on a real genotype dataset and report how many variants and samples each filter dropped."
  - "apply: compute a population-structure PCA and a relatedness/kinship estimate in PLINK and read the outputs."
  - "analyze: argue how a change in any one QC threshold changes which signal survives into the downstream analysis."
readings:
  - "PLINK 1.9 / 2.0 documentation — cog-genomics.org/plink (general usage, --maf/--geno/--mind/--hwe filtering, --pca, --make-king / --king-cutoff for relatedness)."
project: "[[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]"
question-bank: "[[p3m2-questions|P3M2 Question Bank]]"
review-due: null
tags: [genomics, vcf, snp, quality-control, maf, call-rate, hwe, missingness, pca, relatedness, plink]
---

# p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness

> One sentence: quality control is not boilerplate — every MAF, call-rate, and HWE threshold you set changes which markers survive into your model, and the structure PCA you run here is the very same correction that keeps GWAS honest later.

## Learning objectives
- **understand:** define the minor-allele-frequency, call-rate (per-variant `--geno` and per-sample `--mind`), and Hardy–Weinberg-equilibrium (`--hwe`) filters, and state what each one removes and why.
- **apply:** run a full PLINK QC pass on a real genotype dataset and report how many variants and samples each filter dropped.
- **apply:** compute a population-structure PCA and a relatedness/kinship estimate in PLINK and read the resulting eigenvectors and kinship coefficients.
- **analyze:** argue how a change in any single QC threshold changes which signal survives into the downstream analysis.

## Prerequisites
- [[p3m1-the-sequencing-to-variants-pipeline|p3m1 · The Sequencing-to-Variants Pipeline]] — you must hold the claim that a VCF is a lossy pipeline's output with built-in error and missingness before you can decide what to filter out of it.

---

## ① Concrete Experience — *do this first, before reading*
Start from a real VCF (the one you produced in p3m1, or a public genotype dataset — e.g. a public PLINK/VCF release such as a HapMap/1000-Genomes-style sample, or a public crop genotype set; exact choice is yours but it must be real). Convert it into PLINK format and look at the raw, unfiltered numbers *before* you clean anything.

- **Try:** Run PLINK to report, on the raw data: total number of variants and samples, the per-variant missingness (`--missing`), the allele-frequency spectrum (`--freq`), and a Hardy–Weinberg test report (`--hardy`). Just *look* at the distributions. Then apply one filter — say `--maf 0.01` — and see how many variants vanish.
- **Predict before you check:** Write down a guess for *each* of these, before reading the docs:
  1. What fraction of the raw variants do you think have a minor allele frequency below 1%? Are those the markers you most want to keep or the ones you most want to drop, and why?
  2. If you remove every variant with more than 10% missing calls (`--geno 0.1`), do you expect to lose more variants or fewer than the MAF filter removed?
  3. Two individuals in this dataset are full siblings. If you run a PCA without removing one of them, what do you predict the PCA will "see" — population structure, family structure, or both?

Record all predictions in a `session` note before revealing the numbers.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against (answer in your own words; do not just read them):
- You set `--maf 0.01` and a chunk of markers disappeared. A rare variant carries real biology — so why is the field comfortable throwing low-frequency markers away before analysis? What does an association test actually have to work with at a marker where only two individuals carry the minor allele?
- The call-rate filter and the MAF filter both delete markers. Describe the difference in *what kind of badness* each one is targeting. Could a marker pass MAF but fail call-rate? Give the scenario.
- HWE deviation can mean genotyping error — but it can also mean real biology (selection, population mixture). You filtered on `--hwe`. What did you assume about your samples when you decided a HWE-failing marker was "bad"? When would that assumption be wrong?
- You ran a PCA. Look at the first two principal components and color the points by any grouping you know (population, family, batch). What is PC1 capturing? If it is capturing family relatedness rather than ancestry, what does that tell you you should have done first?
- Connect it forward: a GWAS later will regress each marker on the trait. If two of your samples are siblings and you did not account for it, what false thing might that introduce? (This is the seam p3m3 opens.)

The seam to mine: QC feels like cleaning, but each threshold is a *decision about which signal is allowed to reach your model* — and PCA + relatedness here are not separate housekeeping, they are the structure correction GWAS depends on.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **PLINK documentation, cog-genomics.org/plink** — work through, hands-on, the official help pages for:
  - General usage and file formats (binary `.bed/.bim/.fam`, VCF input via `--vcf`, `--make-bed`).
  - Filtering: `--maf` (minor allele frequency threshold), `--geno` (max per-variant missing rate), `--mind` (max per-sample missing rate), `--hwe` (Hardy–Weinberg exact-test p-value cutoff).
  - Reports: `--freq`, `--missing`, `--hardy`.
  - Population structure: `--pca` (PLINK 1.9 / 2.0) → `.eigenvec` / `.eigenval`.
  - Relatedness: `--make-king` / `--king-cutoff` (PLINK 2.0, KING-robust kinship) or `--genome` IBD estimation (PLINK 1.9), and LD-pruning (`--indep-pairwise`) which you should do *before* PCA and relatedness.
  - Note the version split: PLINK 1.9 and PLINK 2.0 differ in some defaults and in the relatedness commands; confirm the exact flag against the doc page for the version you run.

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note):
- *Quality control is not boilerplate: each QC threshold (MAF, call-rate, HWE) is a decision that changes which markers survive into analysis, so the filter set is part of the result, not a preprocessing detail.*
- *A minor-allele-frequency filter removes markers too rare to estimate an effect from; it trades away rare-variant signal for statistical stability at the markers that remain.*
- *Call-rate and HWE filters target different failures — missingness versus genotyping/biological deviation — so they are not interchangeable and a marker can pass one while failing the other.*
- *The population-structure PCA computed during QC is the same correction that prevents false GWAS hits: ancestry captured by the top principal components is a confounder that must be measured before association testing, not after.*

**Vocabulary** (define inline as you meet it, do not memorize cold): minor allele frequency (MAF), call rate / missingness, `--geno` vs `--mind`, Hardy–Weinberg equilibrium and the HWE exact test, LD pruning, principal component analysis of genotypes, eigenvector/eigenvalue, kinship / relatedness coefficient, KING-robust, IBD, batch effect.

## ④ Active Experimentation — *apply it*
- **Exercise:** Build a reproducible QC script that takes the raw dataset to a clean one, applying — in a deliberate order — sample call-rate (`--mind`), variant call-rate (`--geno`), MAF (`--maf`), and HWE (`--hwe`) filters, then LD-pruning, then `--pca`, then relatedness pruning (`--king-cutoff` or `--genome`). Log a one-line count after every step (samples in/out, variants in/out). The script *is* the deliverable, and its log is the evidence.
- **Mini-project hook:** this clean, structure-described, relatedness-pruned dataset and its PCA eigenvectors are exactly what [[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]] feeds into the association scan in p3m3. The PCs you compute here become covariates there.
- **Predict-then-check:** Predict what happens to the *number of significant PCs that look like real structure* if you make the MAF filter much stricter (e.g. `--maf 0.05` instead of `0.01`). Then run both and compare the PCA. Did stricter filtering clarify the structure or erase it? Write the answer and the why.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] State the MAF, call-rate (`--geno`/`--mind`), and HWE filters and say, for each, what it removes and what failure it targets. (retrieval)
- [ ] On a dataset you have not seen, decide a defensible QC order and thresholds and justify each one. (transfer)
- [ ] Explain why PCA and relatedness belong in QC and why skipping them sets up false positives in GWAS — connecting this module to the next. (transfer)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p3m2-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[p3m3-gwas-association-testing-and-structure-correction|p3m3 · GWAS: Association Testing and Structure Correction]]
- Project: [[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]
- Phase: [[phase-3-genomics-data-analysis|Phase 3 · Genomics Data Analysis]]
- Prerequisite: [[p3m1-the-sequencing-to-variants-pipeline|p3m1 · The Sequencing-to-Variants Pipeline]]
