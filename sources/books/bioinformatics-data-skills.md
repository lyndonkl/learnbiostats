---
type: source
source_type: book          # book | paper | article | doc | dataset
title: "Bioinformatics Data Skills"
authors: "Vince Buffalo"
date_read:                 # fill when you read
urls:
  - "https://vincebuffalo.com/book/"
  - "https://github.com/vsbuffalo/bds-files"
phase: 1
module: p1m3
tags: [source, book, bioinformatics, data-formats, vcf, fasta, fastq, sam-bam, oreilly, phase-1]
aliases:
  - "Bioinformatics Data Skills"
  - "Buffalo BDS"
---

# Bioinformatics Data Skills

Source: [[bioinformatics-data-skills|Bioinformatics Data Skills]]

## Metadata
- **Author(s):** Vince Buffalo
- **Published:** O'Reilly Media, 2015 (ISBN 9781449367374). Book is paid; the companion code/data is free at https://github.com/vsbuffalo/bds-files . Author page: https://vincebuffalo.com/book/
- **Read on:** _(fill when you read)_
- **Reading depth:** selective — Ch. 6 (Bioinformatics Data: where data comes from, retrieval, integrity), Ch. 9 (Working with Range Data: genomic coordinate systems), Ch. 10 (Working with Sequence Data: FASTA/FASTQ), Ch. 11 (Working with Alignment Data: SAM/BAM, how reads become variant calls). (VCF and LD theory are not Buffalo's core chapters — supplement with the project reading list; flagged in gaps.)

## The big question
*(reading prompt — answer while reading, do not pre-fill)*
Where does a genotype matrix physically *come from*, and what file formats and integrity checks sit between a raw sequencing run and the clean SNPs × samples table you load in [[p1-allele-frequencies-and-ld-from-real-genotypes|the Phase 1 project]]? As you read, keep tracing the pipeline forward — FASTQ reads → alignment (SAM/BAM) → variant calls → the VCF/PLINK file you parse — and ask at each step what could silently corrupt a column you later treat as ground truth.

## Core argument
*(empty — write 3–5 sentences in your own words after reading)*

## My assessment
*(empty — what convinced you, what you pushed back on, what surprised you. Fill while/after reading.)*

## Evergreen notes extracted
*(empty — add evergreen-note links here as you mint claims; candidates: what a SNP is as a marker column; genomic coordinate systems and off-by-one hazards; the read → alignment → variant-call provenance chain)*

## Follow-up
*(empty — questions raised; sources to chase, e.g. the VCF spec and PLINK docs for the formats Buffalo does not cover)*
