---
type: source
source_type: doc          # book | paper | article | doc | dataset
title: "PLINK 1.9 / 2.0 documentation"
authors: "Christopher C. Chang et al. (original PLINK by Shaun M. Purcell)"
date_read:                # fill when you read it
url: "https://www.cog-genomics.org/plink/"
urls:
  - "https://www.cog-genomics.org/plink/1.9/"
  - "https://www.cog-genomics.org/plink/2.0/"
phase: 3
module: p3m3
tags: [plink, gwas, qc, pca, population-structure, association-testing, tools, doc]
aliases:
  - "PLINK documentation"
  - "PLINK docs"
---

# PLINK 1.9 / 2.0 documentation

Source: [[plink-documentation|PLINK documentation]] · [cog-genomics.org/plink](https://www.cog-genomics.org/plink/)

> STUB — frontmatter and reading prompt only. Fill the sections below *while you work through the docs*, in your own words. Do not pre-fill them.

## Metadata
- **Author(s):** Christopher C. Chang, Carson C. Chow, Laurent C. A. M. Tellier, Shashaank Vattikuti, Shaun M. Purcell, James J. Lee (the second-generation PLINK 1.9/2.0 development). Original PLINK (1.x) by Shaun M. Purcell. Method paper: Chang et al. (2015), "Second-generation PLINK: rising to the challenge of larger and richer datasets," *GigaScience* 4(1):7 (DOI 10.1186/s13742-015-0047-8).
- **Published:** Living web documentation, continuously updated (PLINK 1.9 stable; PLINK 2.0 in alpha). Hosted at cog-genomics.org/plink.
- **Read on:**
- **Reading depth:** Pass 1 | Pass 2 | Pass 3 | selective  *(this is reference documentation — read selectively against the command you need, not cover to cover)*

## The big question
*(reading prompt — hold this in mind as you navigate the docs; do not answer it here yet)*
PLINK is the workhorse CLI that turns a raw genotype matrix into a QC'd, structure-described dataset ready for association testing. As you work through the docs for the [[p3-pca-and-gwas-on-a-public-dataset|PCA + GWAS project]], read to answer: which exact flags do QC (MAF, call-rate/`--geno`/`--mind`, HWE), LD pruning, PCA (`--pca`), and structure-corrected association (`--glm` / `--linear`/`--logistic --covar`); what does each flag *decide* on your behalf, and what are its defaults; and where does PLINK 2.0's behavior or file format differ from 1.9 in a way that would silently change your results? Keep a running map from "the analysis step I want" to "the exact flag and its options for the version I am running."

## Core argument
*(empty — fill while reading: what is this tool for, and what is its model of the data, in 3–5 sentences in your own words)*

## My assessment
*(empty — fill while reading: what was easy, what was a trap, where the defaults bit you, what you had to look up twice)*

## Evergreen notes extracted
*(empty — add declarative-claim notes as you create them, e.g. about what a given QC threshold keeps or drops)*
- _(none yet — extract while reading)_

## Follow-up
*(empty — questions raised; flags to revisit; version differences to confirm)*
