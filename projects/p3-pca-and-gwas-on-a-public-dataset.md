---
type: project
phase: 3
title: "PCA + GWAS on a Public Dataset"
status: not-started        # not-started | in-progress | complete
skills: [plink, python, r, gwas, pca, mixed-models, population-structure, plotting]
deliverables: [qc-report, pca-plot, manhattan-plot, qq-plot, interpretation-write-up]
datasets: ["Arabidopsis 1001 Genomes accessions (1001genomes.org) + AraPheno phenotype", "Rice 3,000 Genomes via SNP-Seek/IRRI (alternative)"]
tags: [project, experiential]
---

# PCA + GWAS on a Public Dataset

> The experiential core of Phase 3. You take a public genotype + phenotype dataset, run QC and PCA in PLINK, run a (mixed-model) GWAS, read the Manhattan and QQ plots honestly, and write up what the structure correction actually changed. This is the working seed for the Phase 3 capstone [[project-1-gwas|GWAS on a Public Crop Dataset]] — the pipeline you build here scales up there.

## Why this project
A GWAS is the cleanest test of whether you understand the link between markers, traits, relatedness, and confounding. It forces you to confront population structure and kinship head-on — the same nuisance terms that, once you stop fighting them, become the *signal* in genomic prediction (Phase 4). Doing it on a public panel mirrors real computational-breeding work: messy genotype files, missing data, minor-allele-frequency filtering, a multiple-testing burden, and a phenotype that is heritable but polygenic. The deliverable that says "I can do association mapping" is proving you can take a raw genotype matrix to a defensible Manhattan plot and say honestly which peaks you believe — and that you can articulate, in writing, what changed when you added the structure correction.

This is the **working seed for a capstone.** The QC, PCA, mixed-model GWAS, and plotting pipeline you assemble here is exactly the pipeline the capstone [[project-1-gwas|GWAS on a Public Crop Dataset]] scales up to a full crop panel and a written report. Treat every script here as capstone infrastructure, not throwaway.

## Concepts it forces you to apply
- [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]] — you must reason about the heritability of the trait *in this panel and environment* before trusting any association; a non-heritable trait has nothing for a GWAS to find.
- [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]] — the same LD that powers prediction is what lets a *tag* SNP, not the causal variant, light up in a GWAS; it is also why a kinship matrix built from markers can stand in for realized relatedness in the mixed model.
- [[population-structure-and-kinship-inflate-gwas-false-positives-unless-modeled-as-mixed-model-covariates|Population structure and kinship inflate GWAS false positives unless modeled as covariates]] — *forward link to a Phase 3 evergreen claim from [[p3m3-gwas-association-testing-and-structure-correction|p3m3]], to be written while you do this project; the structure correction is the heart of the study.*
- The four headline claims of [[p3m3-gwas-association-testing-and-structure-correction|p3m3 · GWAS: Association Testing and Structure Correction]] — that a genome-wide scan is many single-marker tests; that structure and relatedness are confounders; that PC covariates and a kinship mixed model are the two standard corrections; and that the QQ plot and genomic inflation factor are the honesty check before any peak is trusted — are all *applied*, not merely recited, in this project.

## Setup
- **Language / tools:**
  - **PLINK** ([1.9](https://www.cog-genomics.org/plink/1.9/) / [2.0](https://www.cog-genomics.org/plink/2.0/), Chang et al.) for genotype QC, MAF / call-rate / HWE filtering, LD pruning, and PCA (`--pca`).
  - **Python** (`pandas`, `numpy`, `matplotlib`/`seaborn`; `pandas-plink` or `scikit-allel` to read PLINK binaries into arrays) for wrangling and plotting, **or** **R** for the same — pick the language you are more fluent in for the plots.
  - A **mixed-model GWAS** engine: GEMMA, or R packages such as GAPIT/`rrBLUP`/`statgenGWAS`, for the MLM (PCs + kinship). For a first pass you can also run a PC-covariate association directly in PLINK (`--glm` in 2.0, or `--linear`/`--logistic --covar` in 1.9). (Verify exact flags and versions against the current docs when you start — see gaps.)
- **Data:** **Arabidopsis 1001 Genomes** accessions — VCF / SNP matrix for ~1,135 strains at the [1001 Genomes Data Center](https://1001genomes.org/data-center.html), with a heritable quantitative phenotype (e.g. flowering time) from [AraPheno](https://arapheno.1001genomes.org/); the [AraGWAS Catalog](https://aragwas.1001genomes.org/) gives published hits to check your peaks against. Alternative: **Rice 3,000 Genomes** via [SNP-Seek / IRRI](https://snp-seek.irri.org/) (large — subset before loading). Pick ONE panel and one quantitative trait. See [[reading-list|the reading list]] for dataset cards.
- **Environment:** Reproducible conda/renv environment, committed lockfile, random seeds fixed, raw data kept read-only and never edited in place.

## Milestones (each ends in a predict-then-check)
1. **Acquire + QC the genotypes; produce the QC report.** Load the panel into PLINK; filter on call rate, MAF (e.g. >0.05), and HWE; LD-prune a marker set for the kinship/PCA step. Record the count surviving each filter. *Predict before you run: what fraction of SNPs survives MAF filtering in a diverse panel, and what shape will the MAF spectrum have (flat? U-shaped? skewed to rare)? Then check — and explain the gap between your guess and reality. This becomes the QC report.*
2. **Run PCA and make the PCA plot.** Compute principal components on the LD-pruned marker matrix in PLINK; plot PC1 vs PC2. *Predict before you plot: how many PCs will be needed to capture the known subpopulation splits in this panel (e.g. the broad geographic/ecotype structure in Arabidopsis, or indica/japonica in rice), and will the accessions separate into clean clusters or a gradient? Then check against the plot and the known structure.*
3. **Run the naive GWAS first, on purpose (no correction).** Association-test every marker against the trait with no PCs and no kinship. Make the QQ plot and compute the genomic inflation factor λ. *Predict λ and the QQ-plot shape before you look — will the points hug the diagonal or lift off it, and in which direction? The inflated plot is the lesson, not a mistake.*
4. **Run the structure-corrected (mixed-model) GWAS.** Refit with the top PCs as covariates and a kinship random effect (the MLM). Remake the QQ plot and recompute λ. *Predict how λ and the QQ plot move once structure and kinship are in the model — toward the diagonal, away, or unchanged? Then check, and write the one-sentence verdict: did the correction hold?*
5. **Interpret the top markers; produce the Manhattan + QQ plots and the write-up.** Apply a genome-wide threshold (Bonferroni and/or FDR) and make the Manhattan plot. For the surviving peaks, look up nearby annotated genes (and cross-check against the AraGWAS Catalog if using Arabidopsis) and ask whether each signal is plausibly causal or a residual structure artifact. *Predict which peaks survive the more conservative threshold and whether any naive-run "peak" disappeared after correction; then check, and write up what the structure correction changed.*

## Deliverables
- [ ] **QC report** — per-filter SNP and sample counts, MAF spectrum, missingness summary, and the thresholds chosen with a one-line justification each.
- [ ] **PCA plot** — PC1 vs PC2 (and a scree/variance-explained note), annotated with known subpopulation labels if available.
- [ ] **Manhattan + QQ plots** — Manhattan of the corrected scan; QQ plots for both the naive and corrected runs with λ printed on each.
- [ ] **Interpretation write-up** — "What my Manhattan plot is and isn't telling me," centered on **what the structure correction changed** (λ before/after, peaks that grew, shrank, or vanished, and which peaks you actually believe and why). This is a `post` candidate that feeds the writing loop.
- [ ] Notebook / script (committed) — full pipeline, QC through interpretation, runnable from raw data; feeds the [[project-1-gwas|capstone]].
- [ ] Figures are candidates for a `docs/` D3 visualization via `biostat-viz`.

## Stretch goals
- Re-run with a deliberately *unpruned* pair of close relatives left in (the predict-then-check from [[p3m3-gwas-association-testing-and-structure-correction|p3m3]] §④): does relatedness inflate λ even after PC correction, making the case for the mixed model over PCs alone?
- Compare a more flexible multi-locus model (e.g. FarmCPU/BLINK in GAPIT) against the single-locus MLM and note which peaks are model-dependent.
- Run a small permutation test to set an empirical significance threshold and compare it to Bonferroni.

## Reflection prompts (Kolb RO/AC)
- What did you expect the naive-vs-corrected QQ plots and λ to look like, what happened, and what does the gap teach about confounding?
- Which evergreen claim did this project confirm, extend, or contradict? Did watching structure inflate false positives change how you think about relatedness as confounder-vs-signal?
- Where did you have to *decide* rather than *compute* (MAF cutoff, number of PCs, significance threshold)? Log those judgment calls — they are the content of the write-up and they recur in the capstone.

## Links
- Phase: [[phase-3-genomics-data-analysis|Phase 3 · Genomics Data Analysis]]
- Applies: [[p3m3-gwas-association-testing-and-structure-correction|p3m3 · GWAS: Association Testing and Structure Correction]]
- Builds-on: [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness|p3m2 · VCF and SNP Analysis: QC, Filtering, Missingness]]
- Seeds: [[project-1-gwas|Capstone · GWAS on a Public Crop Dataset]]
- Sources: [[plink-documentation|PLINK documentation]], [[gwas-tutorial|A tutorial on conducting genome-wide association studies]]
- Context: [[why-relatedness-is-the-engine-of-prediction|Why relatedness is the engine of both classical and genomic prediction]]
