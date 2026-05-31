---
type: source
source_type: paper        # book | paper | article | doc | dataset
title: "A primer on deep learning in genomics"
authors: "James Zou, Mikael Huss, Abubakar Abid, Pejman Mohammadi, Ali Torkamani, Amalio Telenti (2019)"
date_read:                # fill when you read it
url: "https://www.nature.com/articles/s41588-018-0295-5"
urls:
  - "https://www.nature.com/articles/s41588-018-0295-5"
  - "https://doi.org/10.1038/s41588-018-0295-5"
  - "https://pubmed.ncbi.nlm.nih.gov/30478442/"
phase: 4
module: p4m3
tags: [deep-learning, genomics, cnn, neural-networks, embeddings, regulatory-genomics, primer, paper]
aliases:
  - "Zou et al. 2019"
  - "A primer on deep learning in genomics"
---

# A primer on deep learning in genomics

Source: [[deep-learning-in-genomics-primer|Zou et al. (2019)]] · *Nature Genetics* 51:12–18, [PubMed 30478442](https://pubmed.ncbi.nlm.nih.gov/30478442/)

> STUB — frontmatter and reading prompt only. Fill the sections below *while you read*, in your own words. Do not pre-fill them.

## Metadata
- **Author(s):** James Zou, Mikael Huss, Abubakar Abid, Pejman Mohammadi, Ali Torkamani, Amalio Telenti.
- **Published:** *Nature Genetics*, 2019, 51:12–18 (published online Nov 2018). DOI 10.1038/s41588-018-0295-5. PubMed 30478442. A perspective/primer on deep learning for genome analysis: the method classes (CNNs, embeddings), where DL has succeeded (regulatory genomics, variant calling, pathogenicity scoring), practical guidance on data requirements, and an accompanying interactive online tutorial.
- **Read on:**
- **Reading depth:** Pass 1 | Pass 2 | Pass 3 | selective  *(read with the p4m3 question firmly in mind — "where does DL actually win, and is genomic *prediction on a marker table* one of those places?"; work the interactive tutorial if time allows)*

## The big question
*(reading prompt — hold this in mind as you read; do not answer it here yet)*
This primer is your toolkit-and-caveats read for [[p4m3-deep-learning-on-genomic-data|p4m3]] and the deep-net row of the [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]. The framing is broad genomics (regulatory sequence, variant calling), *not* genomic prediction of breeding values, so read to answer two questions at once: *what are the building blocks (CNNs over sequence, embeddings, the data-hungry training regime)?* and, more importantly for your benchmark, *which of the successes here depend on **raw sequence and spatial/regulatory structure** that a 0/1/2 marker matrix simply does not have?* Hunt for the honest caveats about sample-size requirements — they are the mechanism behind why a deep net usually loses to GBLUP on 599 lines. The discipline to extract: deep learning's wins in genomics cluster where architecture-matched structure (sequence motifs, spatial signal) exists, so before reaching for a net on tabular markers you should be able to say *what structure the architecture is supposed to exploit* — and notice when there is none.

## Core argument
*(empty — fill while reading: what the primer covers, which genomic problems DL has genuinely advanced, and the practical guidance/caveats, in 3–5 sentences in your own words)*

## My assessment
*(empty — fill while reading: what convinced you, what you pushed back on, what surprised you; where the sequence-based successes do and do not transfer to predicting a phenotype from a tabular marker matrix)*

## Evergreen notes extracted
*(empty — add declarative-claim notes as you create them; candidates are listed in [[p4m3-deep-learning-on-genomic-data|p4m3]] §③)*
- _(none yet — extract while reading)_

## Follow-up
*(empty — questions raised; sources to chase — e.g. Eraslan et al. (2019) on deep learning for genomics, and the Abdollahi-Arpanahi et al. (2020) head-to-head benchmark of DL vs. GBLUP that p4m3 leans on)*
