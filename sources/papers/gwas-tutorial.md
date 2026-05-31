---
type: source
source_type: paper        # book | paper | article | doc | dataset
title: "A tutorial on conducting genome-wide association studies: Quality control and statistical analysis"
authors: "Andries T. Marees, Hilde de Kluiver, Sven Stringer, Florence Vorspan, Emmanuel Curis, Cynthia Marie-Claire, Eske M. Derks (2018)"
date_read:                # fill when you read it
url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6001694/"
urls:
  - "https://pmc.ncbi.nlm.nih.gov/articles/PMC6001694/"
  - "https://doi.org/10.1002/mpr.1608"
  - "https://github.com/MareesAT/GWA_tutorial"
phase: 3
module: p3m3
tags: [gwas, tutorial, qc, population-structure, association-testing, plink, manhattan-plot, qq-plot, paper]
aliases:
  - "Marees et al. 2018 GWAS tutorial"
  - "A tutorial on conducting genome-wide association studies"
---

# A tutorial on conducting genome-wide association studies: Quality control and statistical analysis

Source: [[gwas-tutorial|A tutorial on conducting genome-wide association studies]] · Marees et al. (2018), [PMC6001694](https://pmc.ncbi.nlm.nih.gov/articles/PMC6001694/)

> STUB — frontmatter and reading prompt only. Fill the sections below *while you read*, in your own words. Do not pre-fill them.

## Metadata
- **Author(s):** Andries T. Marees, Hilde de Kluiver, Sven Stringer, Florence Vorspan, Emmanuel Curis, Cynthia Marie-Claire, Eske M. Derks.
- **Published:** *International Journal of Methods in Psychiatric Research*, 2018, 27(2):e1608. DOI 10.1002/mpr.1608. Open access via PMC6001694. Companion scripts (PLINK / R / PRSice) at github.com/MareesAT/GWA_tutorial.
- **Read on:**
- **Reading depth:** Pass 1 | Pass 2 | Pass 3 | selective  *(work the QC, population-stratification, and association sections hands-on with the companion repo)*

## The big question
*(reading prompt — hold this in mind as you read; do not answer it here yet)*
This is a hands-on, PLINK-based walk-through of a full GWAS: quality control, population-stratification correction, the association test itself, and (as a bonus) polygenic risk scoring. The framing is human-disease genetics, so as you read for the [[p3-pca-and-gwas-on-a-public-dataset|PCA + GWAS project]], read to answer: which QC and structure-correction *mechanics* transfer directly to a plant/crop panel and which assumptions are human-specific (e.g. case/control disease traits and the ~5×10⁻⁸ genome-wide threshold vs. a quantitative crop phenotype); how do they use principal components to correct for stratification, and how do they read the QQ plot and genomic inflation factor as the honesty check *before* trusting a peak; and what, concretely, does each command in the companion scripts do to the data? The discipline to extract: a "significant" peak means nothing until the QQ plot says the test was honest.

## Core argument
*(empty — fill while reading: what problem the tutorial solves and the spine of its workflow, in 3–5 sentences in your own words)*

## My assessment
*(empty — fill while reading: what convinced you, what you pushed back on, what surprised you, where the human-disease framing did or didn't transfer to plants)*

## Evergreen notes extracted
*(empty — add declarative-claim notes as you create them; candidates are listed in [[p3m3-gwas-association-testing-and-structure-correction|p3m3]] §③)*
- _(none yet — extract while reading)_

## Follow-up
*(empty — questions raised; sources to chase; the mixed-model GWAS reading that this PC-covariate tutorial points toward)*
