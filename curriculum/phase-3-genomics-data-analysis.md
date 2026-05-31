---
type: phase
phase: 3
title: "Genomics Data Analysis"
duration: "6–8 weeks"
status: not-started
modules: [p3m1, p3m2, p3m3]
project: "[[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]"
competencies:
  - "Trace a genotype matrix back through called variants, alignment, and raw reads, and name where error and missingness enter."
  - "Read and reason about FASTQ, SAM/BAM, and VCF as the contracts between pipeline stages."
  - "Run SNP-level quality control (MAF, call-rate, HWE) with PLINK and justify each threshold by what signal it keeps or drops."
  - "Compute population-structure PCA and relatedness, and explain why they are the same correction GWAS needs later."
  - "Run a structure-corrected association test and read a Manhattan and QQ plot as honesty checks before trusting any peak."
tags: [curriculum, phase]
---

# Phase 3 · Genomics Data Analysis

> One sentence: this phase is where raw sequencing stops being a black box and becomes the genotype features your models actually consume — and where you learn the quality control and GWAS workflows breeders run before they trust a single marker.

## Why this phase

Phase 1 and 2 treated the genotype matrix as given. Here you earn it. A genotype matrix is the *end* of a lossy pipeline — reads, alignment, called variants — and every step injects error and missingness that downstream prediction has to tolerate. If you do not know what survived that pipeline, you cannot reason about what your model is learning from. By the end you will be able to take a public genotype dataset, clean it the way a breeder would, correct it for population structure, and run a genome-wide association scan whose peaks you can actually defend.

The phase runs the same Kolb arc inside every module: encounter the phenomenon first (open a FASTQ, watch a filter delete markers, watch a QQ plot inflate), reflect on what surprised you, only then read to build the concept, and finally apply it on the data that feeds the phase project.

## Modules

1. [[p3m1-the-sequencing-to-variants-pipeline|p3m1 · The Sequencing-to-Variants Pipeline]] (Weeks 1–2) — FASTQ, read alignment, BAM/SAM, variant calling, VCF. How a genotype matrix is manufactured, and where it loses information.
2. [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness|p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness]] (Weeks 3–4) — SNP filtering, MAF / call-rate / HWE filters, missing-data handling, PCA, relatedness. Quality control as a signal-shaping decision, not boilerplate.
3. [[p3m3-gwas-association-testing-and-structure-correction|p3m3 · GWAS: Association Testing and Structure Correction]] (Weeks 5–6) — association testing, population-structure correction, mixed-model GWAS, Manhattan and QQ plots, multiple testing. Finding marker–trait associations you can trust.

## Project

The phase converges on one experiential lab:

- [[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]] — take a real public genotype dataset, run the full QC → PCA → GWAS workflow end to end, and produce a Manhattan plot, a QQ plot, and a written defense of every threshold you chose.

Each module's Active Experimentation feeds a piece of this project: p3m1 produces a clean VCF you trust, p3m2 produces a QC'd, structure-described dataset, and p3m3 produces the association scan and its honesty checks.

## Exit criteria

You exit Phase 3 when, from memory and on a dataset you have not seen before, you can:

- [ ] Sketch the read → alignment → called-variant → genotype-matrix pipeline and name, at each arrow, what kind of error or missingness it introduces.
- [ ] Open a VCF and read the meaning of the fixed columns, a genotype field, and at least two FORMAT subfields, and say why the VCF is the contract every downstream step depends on.
- [ ] Run a full PLINK QC pass (MAF, call-rate, HWE) on a real dataset and justify each threshold by the signal it preserves or removes.
- [ ] Compute and interpret a PCA of population structure and a relatedness/kinship estimate, and explain why both must happen *before* association testing.
- [ ] Run a structure-corrected (mixed-model) GWAS, produce a Manhattan and a QQ plot, read the genomic inflation factor, and decide whether any peak can be trusted.

**Mastery target:** `proficient` on the core claims of all three modules; `create` on the phase project.

## Links
- Roadmap: [[roadmap|Learning Roadmap]]
- Prerequisite phase: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
- Next phase: [[phase-4-ml-for-genomic-prediction|Phase 4 · Genomic Prediction and Selection]]
- Project: [[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]
