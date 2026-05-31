---
type: project
phase: 1
title: "Allele Frequencies and LD From Real Genotypes"
status: not-started        # not-started | in-progress | complete
skills: [python, numpy, pandas, scikit-allel, pandas-plink, matplotlib]
deliverables: [notebook, ld-decay-figure, write-up]
datasets: ["PLINK example.zip teaching fileset (HapMap-derived, ~80k autosomal SNPs, 89 Asian HapMap individuals)", "scikit-allel 1000 Genomes Phase 3 chr22 example (alternative)"]
tags: [project, experiential]
---

# Allele Frequencies and LD From Real Genotypes

> The experiential core of Phase 1. You make the abstractions concrete *before* any modelling: load a real public genotype matrix, count alleles, test a few loci against Hardy–Weinberg, and watch linkage disequilibrium decay with distance. Every module of the phase hooks one step of this lab, so the project assembles as you learn.

## Why this project
A data scientist who starts on a genotype matrix without doing this lab treats columns as anonymous features. This project forces the columns to mean something. By the end you will have touched the three load-bearing abstractions of Phase 1 with your own hands: the **allele frequency** as the state variable of a population (not the individual genotype), **Hardy–Weinberg** as the null you measure deviation against, and **linkage disequilibrium** as the empirical fact — markers nearby on a chromosome carry correlated information — that justifies every marker-based prediction model in later phases. The LD-decay plot you produce *is* the visual argument for why a few hundred thousand SNPs can stand in for three billion base pairs. This mirrors real computational-breeding work: the first thing you do with a new genotype file is QC it (call rate, MAF, HWE) and look at its LD structure, long before fitting anything.

## Concepts it forces you to apply
- [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics: Allele Frequencies, HWE, Drift, Selection]] — allele/genotype frequencies and the HWE goodness-of-fit test are Steps 2–3 here; this is where you compute them on *every* locus, not one.
- [[p1m3-intro-genomics-snps-sequencing-genotyping-ld|p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD]] — reading SNP genotypes from a real file and computing pairwise LD between nearby markers is Steps 1 and 4; the LD-decay figure is the capstone deliverable.
- [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]] — *context, applied later:* the LD decay you measure here is the mechanism that whole claim rests on. Seeing LD fall off with distance is the empirical foundation you will lean on in Phase 4.
- As you read, write your own evergreen claims for the p1m2/p1m3 concepts (allele frequency as state variable; HWE as null; LD as correlation between nearby markers; LD decays with distance via recombination) and link this project back to them with `Applies:` once they exist.

## Setup
- **Language / tools:** Python with `numpy`, `pandas`, and `matplotlib`. For genotype I/O and population-genetics primitives, use **scikit-allel** (https://scikit-allel.readthedocs.io/ — allele counts, HWE, LD; note it is in maintenance mode, successor is `sgkit`) and/or **pandas-plink** (https://pandas-plink.readthedocs.io/ — reads PLINK `.bed/.bim/.fam` into arrays). Optionally cross-check your hand-computed numbers against the **PLINK** CLI (`--freq`, `--hardy`, `--r2`; https://www.cog-genomics.org/plink/1.9/). Pin versions and check APIs against current docs when you start — see gaps.
- **Data:** Pick ONE small public genotype set and grow familiar with it.
  - *Primary (recommended for size and friendliness):* the **PLINK teaching fileset** `example.zip` from the PLINK 1.9 resources page (https://www.cog-genomics.org/plink/1.9/resources) — Shaun Purcell's `wgas1` data, HapMap-derived (~80,000 autosomal SNPs from 89 Asian HapMap individuals: Han Chinese + Japanese), with a `pop.cov` population-membership file. The classic mirror is `zzz.bwh.harvard.edu/plink/hapmap1.zip`. **[verify the live download link when you start — the old `pngu.mgh.harvard.edu` host is dead; use the cog-genomics resources page or the `zzz.bwh.harvard.edu` mirror; flagged in gaps.]**
  - *Alternative (more SNPs, real LD decay):* **scikit-allel's 1000 Genomes Phase 3 chromosome 22** example (`ALL.chr22.phase3_shapeit2_mvncall_integrated_v5a.20130502.genotypes.vcf.gz`), the dataset used in scikit-allel's own tutorials; convert to Zarr with `allel.vcf_to_zarr` for fast access. Larger — subset before loading.
  - See [[reading-list|the reading list]] for the dataset and software cards.
- **Environment:** Reproducible conda env with a committed lockfile; fix random seeds; keep the raw download read-only and never edit it in place.

## Milestones (each ends in a predict-then-check)
1. **Load the genotype matrix and orient yourself.** Read the data into a SNPs × samples genotype array (0/1/2 alt-allele counts), confirm the dimensions, and inspect a handful of SNP rows (CHROM, POS, REF, ALT) and a few sample genotypes. *Predict before you run: how many SNPs and how many individuals do you expect, and what fraction of genotype calls will be missing? Then check the actual shape and missingness.*
2. **Compute per-SNP allele frequencies.** For every SNP, compute the alternate-allele frequency `p = (n1 + 2·n2) / (2N)` and plot the minor-allele-frequency (MAF) spectrum. *Predict the shape of the MAF histogram before you plot it — flat? U-shaped? piled up at low frequency? — and write your reasoning. Then check, and reconcile any surprise with what ascertainment (array vs sequencing) would do to the spectrum.*
3. **Test Hardy–Weinberg at a few loci.** Pick a handful of loci (a few high-MAF, a few low, and any that look odd), compute the HWE-expected genotype counts `(p²·N, 2pq·N, q²·N)`, and run a chi-square goodness-of-fit test of observed vs expected. *Predict, for each chosen locus, whether it will pass or fail HWE and why — before computing. Then, as a stretch, run the test genome-wide and look at the p-value distribution: wholesale HWE failure usually flags genotyping artefacts, the exact judgment call a data scientist must make before modelling.*
4. **Visualize LD decay with distance.** On one chromosome, take a window of consecutive SNPs, compute pairwise LD (r² between marker genotype vectors) for all pairs, and plot r² against the base-pair distance between the two SNPs. *Predict the shape of the curve before you draw it — and predict the r² of one close pair vs one distant pair, then read both off the plot. Does the decay match the recombination story (closer markers stay associated; recombination erodes the association over distance)?*

## Deliverables
- [ ] Notebook / script (committed) — load → allele frequencies → HWE → LD decay, runnable from the raw download.
- [ ] An **LD-decay figure** (r² vs distance) — the capstone artefact and a candidate for a `docs/` D3 visualization via `biostat-viz`.
- [ ] Short write-up (a `post` candidate — feeds the writing loop): something like "What I saw when I finally looked at a real genotype matrix" — the MAF spectrum, the HWE outliers, and the LD-decay curve, in your own words.

## Stretch goals
- Cross-check every hand-computed number against PLINK (`--freq`, `--hardy`, `--r2`) and reconcile any discrepancy — a good way to catch off-by-one and missing-data handling bugs.
- Reproduce the **Wahlund effect** from p1m2: split the panel by the `pop.cov` membership, then merge two subpopulations with different allele frequencies at a locus and watch the heterozygote deficit and HWE deviation appear.
- Compare LD decay *within* a subpopulation vs in the pooled sample, and predict which decays faster before checking.

## Reflection prompts (Kolb RO/AC)
- What did you expect the MAF spectrum, the HWE p-values, and the LD-decay curve to look like — what actually happened, and what does each gap teach?
- Which evergreen claim did this lab confirm, extend, or contradict? Did seeing LD decay with your own eyes change how you'll think about marker-based prediction?
- Where did you have to *decide* rather than *compute* (which loci to HWE-test, window size for LD, how to handle missing calls)? Log those judgment calls.

## Links
- Phase: [[phase-1-genetics-for-data-scientists|Phase 1 · Genetics for Data Scientists]]
- Applies: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics: Allele Frequencies, HWE, Drift, Selection]]
- Applies: [[p1m3-intro-genomics-snps-sequencing-genotyping-ld|p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD]]
- Context: [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]]
- Context: [[reading-list|Consolidated Reading List]]
