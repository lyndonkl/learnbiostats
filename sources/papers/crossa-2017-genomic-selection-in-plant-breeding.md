---
type: source
source_type: paper        # book | paper | article | doc | dataset
title: "Genomic Selection in Plant Breeding: Methods, Models, and Perspectives"
authors: "José Crossa, Paulino Pérez-Rodríguez, Jaime Cuevas, Osval Montesinos-López, Diego Jarquín, Gustavo de los Campos, Juan Burgueño, Juan M. González-Camacho, Sergio Pérez-Elizalde, Yoseph Beyene, Susanne Dreisigacker, Ravi Singh, Xuecai Zhang, Manje Gowda, Manish Roorkiwal, Jessica Rutkoski, Rajeev K. Varshney (2017)"
date_read:                # fill when you read it
url: "https://www.sciencedirect.com/science/article/abs/pii/S136013851730184X"
urls:
  - "https://www.sciencedirect.com/science/article/abs/pii/S136013851730184X"
  - "https://doi.org/10.1016/j.tplants.2017.08.011"
  - "https://pubmed.ncbi.nlm.nih.gov/28965742/"
phase: 4
module: p4m1
tags: [genomic-prediction, genomic-selection, plant-breeding, gblup, bayesian, rkhs, gxe, cross-validation, review, paper]
aliases:
  - "Crossa et al. 2017"
  - "Genomic Selection in Plant Breeding: Methods, Models, and Perspectives"
---

# Genomic Selection in Plant Breeding: Methods, Models, and Perspectives

Source: [[crossa-2017-genomic-selection-in-plant-breeding|Crossa et al. (2017)]] · *Trends in Plant Science* 22(11):961–975, [PubMed 28965742](https://pubmed.ncbi.nlm.nih.gov/28965742/)

> STUB — frontmatter and reading prompt only. Fill the sections below *while you read*, in your own words. Do not pre-fill them.

## Metadata
- **Author(s):** José Crossa, Paulino Pérez-Rodríguez, Jaime Cuevas, Osval Montesinos-López, Diego Jarquín, Gustavo de los Campos, Juan Burgueño, et al. (a large CIMMYT-led author list).
- **Published:** *Trends in Plant Science*, 2017, 22(11):961–975. DOI 10.1016/j.tplants.2017.08.011. PubMed 28965742. A plant-breeding-centered review of genomic selection (GS) and genomic-enabled prediction (GP): history and principles, the statistical model family (GBLUP, Bayesian alphabet, RKHS), genomic G×E interaction, and prediction accuracy assessed by cross-validation across cereal and legume crops.
- **Read on:**
- **Reading depth:** Pass 1 | Pass 2 | Pass 3 | selective  *(read twice across Phase 4 — once in p4m1 as the field map, again in p4m4 as a model of how serious reviews frame CV and prediction scenarios)*

## The big question
*(reading prompt — hold this in mind as you read; do not answer it here yet)*
This is the modern map of how genomic prediction is actually done in *plant* breeding — the domain your whole roadmap points at. As you read it for [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1]] and the [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]], read to answer: *what is the family of prediction models (GBLUP, the Bayesian alphabet, RKHS/kernel methods), and what does each assume about genetic architecture that makes it suited or unsuited to a given trait?* Track three things specifically: (1) the central role of the **genomic relationship matrix** and why GBLUP is the field's workhorse; (2) how the review treats **genotype × environment interaction** as something to *model and exploit* for prediction, not just a nuisance — the bridge to Phase 5; and (3) how it frames **cross-validation and prediction scenarios** (predicting new lines vs. new environments), which is the standard you will later hold your own benchmark and other papers to in [[p4m4-reading-agricultural-ml-papers|p4m4]]. The discipline to extract: in plant breeding the "right" model is chosen by trait architecture, data structure, and the prediction scenario — not by fashion.

## Core argument
*(empty — fill while reading: the spine of the review — the model family, the G-matrix's role, G×E, and how accuracy is judged — in 3–5 sentences in your own words)*

## My assessment
*(empty — fill while reading: what convinced you, what you pushed back on, what surprised you; where the review is a map versus where it takes a position, and which models you now expect to win on additive vs. interaction-heavy traits)*

## Evergreen notes extracted
*(empty — add declarative-claim notes as you create them; candidates are listed in [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1]] §③)*
- _(none yet — extract while reading)_

## Follow-up
*(empty — questions raised; sources to chase — e.g. the BGLR package this group authored, and the G×E prediction models that connect this read to Phase 5)*
