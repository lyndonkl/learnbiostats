---
type: module
phase: 3
module: p3m1
title: "The Sequencing-to-Variants Pipeline"
weeks: "Weeks 1–2"
status: not-started
prerequisites: [p2m1]
objectives:
  - "understand: trace the FASTQ → alignment → BAM/SAM → variant-calling → VCF pipeline and name what each stage adds and what it can lose."
  - "understand: read the meaning of a FASTQ record, a SAM/BAM alignment line, and the fixed and genotype columns of a VCF."
  - "apply: open real FASTQ, BAM, and VCF data and extract a base-quality, a mapping-quality, and a genotype call from it."
  - "analyze: locate where error and missingness enter the pipeline and argue what each means for a downstream genotype matrix."
readings:
  - "Buffalo, *Bioinformatics Data Skills* (O'Reilly, 2015) — Ch. 10 Working with Sequence Data (FASTA/FASTQ); Ch. 11 Working with Alignment Data (SAM/BAM); variant calling via samtools/bcftools pileups in Ch. 11 and VCF/tabix handling in Ch. 13."
project: "[[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]"
question-bank: "[[p3m1-questions|P3M1 Question Bank]]"
review-due: null
tags: [genomics, sequencing, fastq, alignment, sam, bam, vcf, variant-calling]
---

# p3m1 · The Sequencing-to-Variants Pipeline

> One sentence: the genotype matrix your models consume is the *output* of a multi-stage, lossy pipeline, and you cannot reason about what a model learns until you know what that pipeline kept and what it threw away.

## Learning objectives
- **understand:** trace the FASTQ → alignment → BAM/SAM → variant-calling → VCF pipeline and name what each stage adds and what it can lose.
- **understand:** read the meaning of a FASTQ record, a SAM/BAM alignment line, and the fixed and genotype columns of a VCF.
- **apply:** open real FASTQ, BAM, and VCF data and pull out a base-quality score, a mapping-quality score, and a genotype call by hand.
- **analyze:** locate where error and missingness enter the pipeline and argue what each implies for the genotype matrix downstream prediction sees.

## Prerequisites
- [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation]] — you need to already hold the idea that a *genotype* is a distinct object from a *phenotype* before you ask how genotypes get measured.

---

## ① Concrete Experience — *do this first, before reading*
Get three files in front of you and look before you study. You can use a tiny public example set (e.g. the example data shipped with `samtools`/`bcftools`, or any small public FASTQ + reference such as a sequencing-read-archive sample) — exact dataset choice is yours, but it must be real data, not a textbook figure.

- **Try:** open a raw FASTQ file and look at one read — the four lines: identifier, sequence, `+`, and the quality string. Then open an aligned BAM with `samtools view` and look at one alignment line: where on the genome did this read land, and what is its mapping quality? Finally open a VCF with `bcftools view` (or just less it) and find one variant row and one sample's genotype field.
- **Predict before you check:** Write down a guess, before reading the spec, for *each* of these:
  1. In the FASTQ quality string, are higher characters more or less confident base calls?
  2. If you sequence one genome region at 30× coverage, how many of those ~30 reads do you expect to disagree on the base at a given position, and why would any disagree at all?
  3. When the same individual's genotype is "missing" in a VCF, what physically happened upstream to make it missing?

Commit your three predictions to a `session` note *before* you reveal the answers.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against in a `session` note (answer them in your own words; do not just read them):
- You looked at one read's quality string. The characters are not all the same. What does that tell you about a single read as a measurement — is one read a fact, or a vote?
- A BAM line carries a mapping quality *and* per-base qualities. Why does the pipeline need *both*? What kind of error does each one guard against?
- You saw a variant row aggregate many reads from many samples into a few called genotypes. Describe, without the word "variant," what got compressed in that step. What information present in the BAM is simply *gone* by the time you reach the VCF?
- Find one position that is a confident genotype call and one that is missing or low-quality. What is different upstream between them — coverage, mapping, base quality? Which of those would a downstream ML model ever get to see?
- The whole pipeline runs reads → alignment → calls → matrix. At which single arrow do you think the *most* information is lost, and why?

The seam to mine: the gap between treating a genotype as a clean fact and seeing it as the summarized verdict of dozens of noisy, individually-fallible reads.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- Buffalo, *Bioinformatics Data Skills* (O'Reilly, 2015), **Ch. 10 — Working with Sequence Data**: FASTA/FASTQ formats, base-quality (Phred) encoding, and the limits of these formats.
- Buffalo, **Ch. 11 — Working with Alignment Data**: SAM/BAM format, the SAM header and alignment fields, bitwise FLAGs, CIGAR strings, mapping qualities, and `samtools` for viewing/sorting/filtering and for pileups + variant calling.
- Buffalo, **Ch. 13 — Out-of-Memory Approaches: Tabix and SQLite**: BGZF compression and tabix indexing, which is how VCFs are stored and randomly accessed in practice.
- (VCF specification reference: the VCF/BCF format is documented by the htslib/samtools project; skim the spec for the meaning of the eight fixed columns and the GT/DP/GQ FORMAT fields.)

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note):
- *A genotype matrix is the end of a lossy pipeline: each stage (reads → alignment → called variants) discards information the previous stage held.* (e.g. slug `a-genotype-matrix-is-the-end-of-a-lossy-pipeline-each-stage-discards-information`)
- *Every stage of the sequencing pipeline injects its own kind of error — base-call error in reads, mapping error in alignment, calling error in variant calls — so a genotype call is a probabilistic verdict, not a measurement.*
- *Missingness in a genotype matrix is not random: it traces back to low coverage, poor mapping, or low base quality at specific positions, so the pattern of missing calls carries information.*
- *The VCF is the contract between the sequencing pipeline and every analysis after it: everything downstream — QC, PCA, GWAS, prediction — reads the VCF and trusts its columns, so its conventions are load-bearing.*

**Vocabulary** (define inline as you meet it, do not memorize cold): FASTQ, Phred/base quality, read, coverage/depth, alignment, reference genome, SAM, BAM, FLAG, CIGAR, mapping quality (MAPQ), pileup, variant calling, VCF, the eight fixed VCF columns, FORMAT/GT/DP/GQ, genotype matrix.

## ④ Active Experimentation — *apply it*
- **Exercise:** Take one small public sample from FASTQ all the way to a VCF: inspect/trim reads, align to a reference, sort and index the BAM, and call variants to produce a VCF. At each step, record *one number* that quantifies what changed (reads in vs. reads aligned; positions covered; variants called; calls that are missing). You are not optimizing the pipeline — you are building the intuition that each arrow has a cost.
- **Mini-project hook:** the clean, indexed VCF you produce (or a public VCF you have learned to read with confidence) is the **input** to [[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]. Everything in p3m2 and p3m3 starts from a VCF you trust because you know how it was made.
- **Predict-then-check:** Before you run it, predict what happens to the *number of called variants* if you raise the minimum base-quality / mapping-quality threshold for calling. Then change the threshold and check. Did you trade missingness for confidence, or lose real signal? Write the answer.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Draw the read → alignment → called-variant → genotype-matrix pipeline and name, at each arrow, the specific error or information loss it introduces. (retrieval)
- [ ] Given an unfamiliar VCF line, state what the eight fixed columns mean and read one sample's genotype, depth, and genotype-quality. (transfer to a new case)
- [ ] Explain to someone who thinks "the genotype is just measured" why a single genotype call is a verdict over many fallible reads, and why missingness is informative. (transfer)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p3m1-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness|p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness]]
- Project: [[p3-pca-and-gwas-on-a-public-dataset|PCA and GWAS on a Public Dataset]]
- Phase: [[phase-3-genomics-data-analysis|Phase 3 · Genomics Data Analysis]]
- Prerequisite: [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation]]
