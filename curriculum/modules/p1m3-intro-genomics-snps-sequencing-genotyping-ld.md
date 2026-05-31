---
type: module
phase: 1
module: p1m3
title: "Intro Genomics: SNPs, Sequencing, Genotyping, LD"
weeks: "Weeks 4–6"
status: not-started
prerequisites: [p1m1, p1m2]
objectives:
  - "understand: what a SNP is and how it is encoded as a marker in genomic data formats."
  - "understand: how genotypes are measured, and how genotyping arrays differ from sequencing in cost, density, and what they ascertain."
  - "apply: read SNP genotypes from a real file (VCF/PLINK) and compute pairwise linkage disequilibrium between nearby markers."
  - "analyze: explain why linkage disequilibrium lets a genotyped marker panel stand in for the whole genome in prediction, and where that breaks down."
readings:
  - "Vince Buffalo, Bioinformatics Data Skills (O'Reilly, 2015) — Ch 10 Working with Sequence Data (FASTA/FASTQ); Ch 11 Working with Alignment Data (SAM/BAM)"
  - "Vince Buffalo, Bioinformatics Data Skills — Ch 6 Bioinformatics Data; Ch 9 Working with Range Data (data formats and genomic coordinates)"
project: "[[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]"
question-bank: "[[p1m3-questions|P1M3 Question Bank]]"
review-due: null
tags: [genomics, snp, sequencing, genotyping-array, linkage-disequilibrium, vcf]
---

# p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD

> One sentence: the entire premise of genomic prediction — that a panel of a few hundred thousand markers can stand in for three billion base pairs — rests on linkage disequilibrium, so a data scientist must understand what a SNP is, how it was measured, and why nearby markers carry correlated information.

## Learning objectives
- **understand:** what a SNP is and how it is encoded as a marker in genomic data formats.
- **understand:** how genotypes are measured, and how genotyping arrays differ from sequencing in cost, density, and what they ascertain.
- **apply:** read SNP genotypes from a real file (VCF/PLINK) and compute pairwise linkage disequilibrium between nearby markers.
- **analyze:** explain why linkage disequilibrium lets a genotyped marker panel stand in for the whole genome in prediction, and where that breaks down.

## Prerequisites
- [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]] — recombination is the mechanism *behind* linkage disequilibrium; you cannot understand why LD decays with distance without it.
- [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics]] — LD is defined relative to allele frequencies (the difference between observed two-locus haplotype frequencies and the product of single-locus frequencies), so you need the frequency view first.

---

## ① Concrete Experience — *do this first, before reading*
- **Try:** Open a few lines of a real VCF file (the project dataset, or any public VCF; `zcat file.vcf.gz | head -20`). Find the `#CHROM POS ID REF ALT` header and read three data rows. For one row, identify: the chromosome, the position, the reference allele, the alternate allele, and one sample's genotype field (e.g. `0|1`).
- **Predict before you check:**
  1. Each row is one SNP. From the `REF`/`ALT` columns, how many distinct DNA letters differ between individuals at that position? Predict, then look.
  2. Pick two SNPs a few hundred bases apart and two SNPs on different chromosomes. For each pair, predict whether knowing one individual's genotype at the first SNP tells you anything about their genotype at the second. Write a guess for both pairs.
  3. A genotyping array measures ~600,000 SNPs; the genome has ~3 billion base pairs — so the array directly observes about 0.02% of positions. Predict: can a model still predict a trait well from only that 0.02%? Yes/no, and your best one-sentence mechanism for *why*.

Record predictions in a `session` note before reading. Prediction #2 is linkage disequilibrium; #3 is the entire justification for marker-based prediction.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against (answer them; do not just read them):
- A SNP row had exactly one `REF` and one `ALT` letter. How does this connect to the "pair of alleles" idea from p1m1 — what is the `0|1` genotype field actually recording?
- For the two SNPs a few hundred bases apart, did you predict their genotypes would be related? What would have had to happen *between* those two positions, over the generations, to break that relationship — and why is it less likely to happen across a short distance than a long one? (You named this mechanism in p1m1.)
- The array sees 0.02% of the genome but predicts well anyway. Restate, in your own words, what the *un*-measured 99.98% has to be doing for that to work.
- You looked at a VCF, but the array vendor decided in advance *which* SNPs to put on the chip. What might be different about a set of SNPs someone chose ahead of time versus every variant found by sequencing the sample fresh?

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- Vince Buffalo, **Bioinformatics Data Skills** (O'Reilly, 2015):
  - **Ch 6 — Bioinformatics Data**: where genomic data comes from, retrieving it, and checking integrity.
  - **Ch 9 — Working with Range Data**: genomic coordinates and the coordinate systems SNP positions live in.
  - **Ch 10 — Working with Sequence Data**: the FASTA and FASTQ formats — what raw sequencing reads actually look like.
  - **Ch 11 — Working with Alignment Data**: the SAM/BAM formats and how reads become aligned data from which variants (SNPs) are called.
  - *(Buffalo covers formats and the sequencing-data pipeline; for the VCF variant-call format specifically and for the LD theory, supplement with the project's reading list — flagged in gaps, since VCF/LD are not Buffalo's core chapters.)*

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words, one claim per note):
- *A SNP is a single-nucleotide position at which individuals carry different alleles; as a marker it is the unit column in genotype data.*
- *Linkage disequilibrium is the non-random association of alleles at two loci — observed two-locus haplotype frequencies differing from the product of the single-locus allele frequencies.*
- *Linkage disequilibrium is why a genotyped marker panel can stand in for the whole genome: an unmeasured causal variant is correlated with (tagged by) a measured marker nearby.*
- *Linkage disequilibrium decays with genetic distance because recombination breaks up associations over generations, so the tagging breaks down for distant or differently-structured populations.*
- *Genotyping arrays measure a pre-chosen (ascertained) set of common SNPs cheaply, whereas sequencing discovers variants directly — a trade-off in cost, marker density, and ascertainment bias.* (Optional fifth claim.)

**Vocabulary** (define inline as you meet it): SNP, marker, allele (REF/ALT), VCF, PLINK bed/bim/fam, FASTA, FASTQ, SAM/BAM, read, alignment, variant calling, sequencing depth/coverage, genotyping array, ascertainment bias, haplotype, linkage disequilibrium, r², D′, LD decay, tag SNP, imputation.

## ④ Active Experimentation — *apply it*
- **Exercise:** Load SNP genotypes from the project file. Pick a window of, say, 50 consecutive SNPs on one chromosome and compute pairwise LD (the r² between marker genotype vectors) for all pairs. Make a simple plot of r² against the distance between the two SNPs.
- **Mini-project hook:** this is Step 3 — the capstone deliverable of [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]: an **LD decay plot**. It visually demonstrates the claim that LD falls off with distance, which *is* the empirical justification for marker-based prediction in every later phase.
- **Predict-then-check:** Back in p1m1 you predicted that two markers 100kb apart would be inherited together more often than two 50Mb apart. Now you can measure it: predict the r² for a close pair vs a distant pair on your LD decay plot, then read it off. Does the curve match the recombination story you told in Week 1?

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Define a SNP and point to where it lives in a VCF row (CHROM/POS/REF/ALT and the genotype field). (retrieval)
- [ ] Define linkage disequilibrium in terms of two-locus haplotype frequencies vs the product of allele frequencies. (retrieval)
- [ ] Explain, to a data scientist who has never seen genomic data, why a 0.02% marker panel can predict a trait — and name the mechanism. (transfer)
- [ ] Predict the shape of an LD decay plot for a new population and justify it from recombination, then say where the tagging would fail. (transfer)
- [ ] State one consequence of array ascertainment vs sequencing for a downstream analysis. (transfer)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p1m3-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Previous: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics: Allele Frequencies, HWE, Drift, Selection]]
- Next: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
- Project: [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]
- Phase: [[phase-1-genetics-for-data-scientists|Phase 1 · Genetics for Data Scientists]]
- Question bank: [[p1m3-questions|P1M3 Question Bank]]
