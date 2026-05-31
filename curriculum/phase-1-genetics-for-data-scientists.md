---
type: phase
phase: 1
title: "Genetics for Data Scientists"
duration: "4–6 weeks"
status: not-started
modules: [p1m1, p1m2, p1m3]
project: "[[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]"
competencies:
  - "Explain what a genotype, an allele, and a locus are, and how a phenotype relates to genotype plus environment."
  - "State the relationship between recombination and the co-segregation of nearby markers with a causal variant."
  - "Compute allele and genotype frequencies from real genotype data and test a locus against Hardy–Weinberg expectations."
  - "Reason about how drift, selection, and population structure perturb allele frequencies away from the HWE null."
  - "Define a SNP and linkage disequilibrium, and explain why a genotyped marker panel can stand in for the whole genome in prediction."
  - "Read the common genomic data formats (VCF, PLINK) well enough to extract markers and genotypes for downstream analysis."
tags: [curriculum]
---

# Phase 1 · Genetics for Data Scientists

> One sentence: before any model is fit, understand what genomic data *is* — so that later machine learning rests on real biology rather than black-box features.

## Why this phase exists

A data scientist who jumps straight to fitting models on genotype matrices learns to predict without understanding what the columns mean. A column is a SNP; a SNP is a position in the genome where individuals differ; the reason a few hundred thousand such positions can predict a trait across the whole genome is a specific biological phenomenon (linkage disequilibrium) with a specific cause (limited recombination). This phase builds that chain of meaning from the molecule up, so that every later modelling choice — which markers to keep, why relatedness leaks between train and test, why a GWAS hit is rarely the causal variant — connects to a mechanism you can name.

The phase walks the [[conventions|Kolb cycle]] three times. Each module opens with a concrete encounter (real data or a prediction), mines the surprise, ladders the concept out into your own words as evergreen claims, then applies it on a new case that feeds the phase project.

## Modules

- [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]] — Week 1. DNA, genes, chromosomes, alleles, mutation, recombination, Mendelian inheritance. The molecular and inheritance vocabulary the rest of the phase assumes.
- [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics: Allele Frequencies, HWE, Drift, Selection]] — Weeks 2–3. The shift from the individual genotype to the allele frequency as the state variable of a population, and Hardy–Weinberg as the null against which evolution is detected.
- [[p1m3-intro-genomics-snps-sequencing-genotyping-ld|p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD]] — Weeks 4–6. What a SNP is, how genotypes are measured (sequencing vs arrays), and why linkage disequilibrium lets a marker panel stand in for the genome.

## Project

[[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]] — load a real public genotype dataset, compute per-locus allele and genotype frequencies, test loci against Hardy–Weinberg expectations, and measure linkage disequilibrium between nearby markers. Each module hooks one piece of this project so the lab assembles as you learn.

## Competencies (exit-level)

- **understand:** genotype/allele/locus; phenotype as a function of genotype and environment; SNP; linkage disequilibrium.
- **understand:** allele frequency as the population state variable; HWE as the no-evolution null; how drift, selection, and structure perturb it.
- **apply:** compute allele and genotype frequencies and an HWE test from a real genotype file.
- **apply:** measure and interpret pairwise LD between markers; read VCF/PLINK genotype data.
- **analyze:** explain why a genotyped marker panel predicts across the whole genome, and where that breaks down (recombination, distance, population differences).

## Exit criteria

Move to Phase 2 when, from memory, you can:

- [ ] Define genotype, allele, locus, phenotype, SNP, and linkage disequilibrium without notes, and give one concrete example of each from the project data.
- [ ] State why recombination is the reason nearby markers co-segregate with a causal variant — and why that co-segregation decays with distance.
- [ ] Compute allele and genotype frequencies from a genotype file and test a locus against Hardy–Weinberg expectations, explaining what a significant deviation could mean.
- [ ] Name three distinct forces that push genotype frequencies away from the HWE null and predict the direction each pushes.
- [ ] Explain, to someone who has never seen genomic data, why a few hundred thousand SNPs can stand in for three billion base pairs in a prediction model.
- [ ] Have produced the Phase 1 project deliverable: allele frequencies, an HWE test, and an LD decay plot from a real public genotype dataset.

**Mastery target:** `proficient` on the core claims of all three modules before advancing.

## Links
- Roadmap: [[roadmap|Learning Roadmap]]
- Project: [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]
- Next phase: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
