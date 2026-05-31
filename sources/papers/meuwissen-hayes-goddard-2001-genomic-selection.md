---
type: source
source_type: paper        # book | paper | article | doc | dataset
title: "Prediction of Total Genetic Value Using Genome-Wide Dense Marker Maps"
authors: "Theo H. E. Meuwissen, Ben J. Hayes, Mike E. Goddard (2001)"
date_read:                # fill when you read it
url: "https://academic.oup.com/genetics/article/157/4/1819/6048353"
urls:
  - "https://academic.oup.com/genetics/article/157/4/1819/6048353"
  - "https://pmc.ncbi.nlm.nih.gov/articles/PMC1461589/"
  - "https://doi.org/10.1093/genetics/157.4.1819"
phase: 4
module: p4m1
tags: [genomic-prediction, genomic-selection, marker-effects, shrinkage, bayesian, blup, breeding-value, founding-paper, paper]
aliases:
  - "Meuwissen, Hayes & Goddard 2001"
  - "Prediction of Total Genetic Value Using Genome-Wide Dense Marker Maps"
  - "The founding genomic-selection paper"
---

# Prediction of Total Genetic Value Using Genome-Wide Dense Marker Maps

Source: [[meuwissen-hayes-goddard-2001-genomic-selection|Meuwissen, Hayes & Goddard (2001)]] · *Genetics* 157(4):1819–1829, [PMC1461589](https://pmc.ncbi.nlm.nih.gov/articles/PMC1461589/)

> STUB — frontmatter and reading prompt only. Fill the sections below *while you read*, in your own words. Do not pre-fill them.

## Metadata
- **Author(s):** Theo H. E. Meuwissen, Ben J. Hayes, Mike E. Goddard.
- **Published:** *Genetics*, 2001, 157(4):1819–1829. DOI 10.1093/genetics/157.4.1819. Open access via PMC1461589. The founding paper of genomic selection — it proposed estimating the effects of *all* markers across a dense map simultaneously (here, ~50,000 marker haplotypes) from a limited number of phenotypic records, rather than first selecting "significant" markers.
- **Read on:**
- **Reading depth:** Pass 1 | Pass 2 | Pass 3 | selective  *(work through the BLUP, BayesA, and BayesB estimators and the simulation design; this is the p4m1 anchor read)*

## The big question
*(reading prompt — hold this in mind as you read; do not answer it here yet)*
This is the paper that started genomic selection. As you read it for [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1]] and the [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]], read to answer: *why is it even possible to estimate thousands of marker effects from only a few hundred phenotypic records, when ordinary least squares would fail outright?* Track the central move — fit **every** marker simultaneously with shrinkage rather than testing markers one at a time and keeping the significant ones — and the three estimators they compare (least squares vs. the BLUP-style "all effects share one variance" prior, BLUP, vs. the Bayesian BayesA/BayesB that let marker variances differ). Ask what assumption about genetic architecture each estimator encodes, and which one their simulation favors and why. Connect their "estimate all marker effects" to the modern fact that RR-BLUP on markers and GBLUP on the genomic relationship matrix are the same model: this paper is the marker-side view, written before the G-matrix view became standard. The discipline to extract: prediction of *total genetic value* across the whole genome — not gene discovery — is the goal, and shrinkage is what makes it possible.

## Core argument
*(empty — fill while reading: the problem the paper solves and the spine of its proposal and estimators, in 3–5 sentences in your own words)*

## My assessment
*(empty — fill while reading: what convinced you, what you pushed back on, what surprised you — e.g. how a 2001 simulation anticipated two decades of breeding practice, and where its assumptions are strongest or weakest)*

## Evergreen notes extracted
*(empty — add declarative-claim notes as you create them; candidates are listed in [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1]] §③)*
- _(none yet — extract while reading)_

## Follow-up
*(empty — questions raised; sources to chase, e.g. the GBLUP/G-matrix reformulation and the BGLR/rrBLUP implementations that operationalized this proposal)*
