---
type: project
phase: 3
title: "GWAS on a Public Crop Dataset"
status: not-started        # not-started | in-progress | complete
skills: [python, r, gwas, mixed-models, population-structure, data-wrangling, visualization]
deliverables: [notebook, report, manhattan-plot, qq-plot]
datasets: ["Rice SNP-Seek / 3,000 Rice Genomes Project", "Arabidopsis 1001 Genomes (alternative)"]
tags: [project, experiential, capstone]
---

# GWAS on a Public Crop Dataset

> The experiential core of the Phase 3 capstone. You run a full genome-wide association study end to end on real, public crop genotype + phenotype data, then explain every modeling choice you made and why.

## Why this project
A GWAS is the cleanest test of whether you actually understand the link between markers, traits, relatedness, and confounding. It forces you to confront population structure and kinship head-on — the same nuisance terms that, once you stop fighting them, become the *signal* in genomic prediction (Phase 4). Doing it on a public crop panel mirrors real computational-breeding work: messy genotype files, missing data, minor-allele-frequency filtering, multiple-testing burden, and a phenotype that is heritable but polygenic. Proving you can take raw VCF-scale data to a defensible Manhattan plot — and say honestly which peaks you believe — is the deliverable that says "I can do association mapping."

This capstone builds directly on the Phase 3 project, [[p3-pca-and-gwas-on-a-public-dataset|Association Mapping Mini-Project]], scaling its single-chromosome exercise up to a genome-wide, real-data study.

## Concepts it forces you to apply
- [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]] — you must reason about the heritability of the trait *in this panel* before trusting any association.
- [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]] — the same LD that powers prediction is what lets a tag SNP, not the causal variant, light up in a GWAS.
- [[population-structure-and-kinship-inflate-gwas-false-positives-unless-modeled-as-mixed-model-covariates|Population structure and kinship inflate GWAS false positives unless modeled as covariates]] — *placeholder evergreen, to be written in Phase 3; the mixed-model correction is the heart of this study.*

## Setup
- **Language / tools:** Python (pandas, numpy, scikit-allel for genotype handling, matplotlib/seaborn for plots) for wrangling; R with **GAPIT** for the association models (MLM, FarmCPU, BLINK). Cross-check single-trait MLM against **GEMMA** and use **PLINK** for QC/LD pruning. (Verify exact versions and APIs against current docs when you start; see gaps.)
- **Data:** Rice **SNP-Seek** / **3,000 Rice Genomes Project** genotypes + curated phenotypes (https://snp-seek.irri.org/). Alternative: **Arabidopsis 1001 Genomes** accessions (https://1001genomes.org/) with a heritable trait such as flowering time. See [[reading-list|resources]] for dataset cards. Pick ONE panel and one or two quantitative traits.
- **Environment:** Reproducible conda/renv environment, committed lockfile, random seeds fixed, raw data kept read-only and never edited in place.

## Milestones (each ends in a predict-then-check)
1. **Acquire + QC the genotypes.** Filter on call rate, MAF (e.g. >0.05), and LD-prune for the kinship matrix. *Predict: what fraction of SNPs survives MAF filtering in a diverse panel, and what will the MAF spectrum look like? Then check.*
2. **Characterize population structure.** PCA on the marker matrix; build a kinship/realized relationship matrix. *Predict how many PCs capture the known subpopulation splits (e.g. indica/japonica in rice) before you plot them.*
3. **Run a naive association first (no correction).** *Predict the genomic inflation factor λ; then check — the inflated QQ plot is the lesson, not a mistake.*
4. **Run the mixed-model GWAS** (MLM with PCs + kinship; then FarmCPU/BLINK). *Predict how λ and the QQ plot change once structure and kinship are in the model.*
5. **Interpret the peaks.** Apply a genome-wide threshold (Bonferroni and/or FDR). For the top hits, look up nearby annotated genes and ask whether the signal is plausibly causal or a structure artifact. *Predict which peaks survive a more conservative threshold.*

## Deliverables
- [ ] Notebook / script (committed) — full pipeline, QC through annotation, runnable from raw data.
- [ ] Short write-up (a `post` candidate — feeds the writing loop): "What my Manhattan plot is and isn't telling me."
- [ ] Figures: Manhattan plot, QQ plot (before/after correction), PCA scatter — candidates for a `docs/` D3 visualization via `biostat-viz`.

## Stretch goals
- Multi-trait or multi-environment GWAS; compare hits across environments and connect back to the heritability-is-environment-specific claim.
- Run a small permutation test to set an empirical significance threshold and compare it to Bonferroni.
- Estimate SNP-based heritability (e.g. via a GREML-style variance-component model) and compare to published narrow-sense estimates for the trait.

## Reflection prompts (Kolb RO/AC)
- What did you expect the naive-vs-corrected QQ plots to look like, what happened, and what does the gap teach about confounding?
- Which evergreen claim did this project confirm, extend, or contradict? Did seeing structure inflate false positives change how you think about relatedness?
- Where did you have to *decide* rather than *compute* (MAF cutoff, number of PCs, threshold)? Log those judgment calls.

## Links
- Phase: [[phase-3-genomics-data-analysis|Phase 3 · Statistical Genetics and GWAS]]
- Builds-on: [[p3-pca-and-gwas-on-a-public-dataset|Association Mapping Mini-Project]]
- Context: [[why-relatedness-is-the-engine-of-prediction|Why relatedness is the engine of both classical and genomic prediction]]
