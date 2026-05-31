---
type: reference
created: 2026-05-30
title: "Consolidated Reading List"
phase: null
tags: [resources, reading-list, reference]
aliases:
  - "Reading List"
  - "Resources"
---

# Consolidated Reading List

> The single grounded source of truth for every reading the curriculum links to. Each entry gives title, author, a working URL, cost, and which module(s) it serves (module IDs are `p1m1 … p5m2`). Every URL below was verified via web search on 2026-05-30; items I could not fully verify are marked **[unverified]** and listed again in this note's gaps. When a module says "see the reading list," it means this file.

Module-ID legend: see [[roadmap|the roadmap]]. Project IDs `p1 … p5` map to the per-phase projects.

---

## Phase 1 — Genetics for Data Scientists

### Foundations / central dogma (use selectively)

- **OpenStax *Biology 2e*** — Clark, Douglas, Choi (OpenStax / Rice University).
  URL: https://openstax.org/details/books/biology-2e (free web view + free PDF; print ~US$60).
  **Serves:** p1m1. Read **Unit III: Genetics** selectively — Ch. 11 (Meiosis and Sexual Reproduction), Ch. 12 (Mendel's Experiments and Heredity), Ch. 13 (Modern Understandings of Inheritance), Ch. 14 (DNA Structure and Function); skim Ch. 15 (Genes and Proteins). Ch. 17 (Biotechnology and Genomics) and Ch. 19 (population/evolution) preview p1m3 and p1m2. Per the philosophy, read for "enough to read a methods section," not mastery of molecular detail.

- **MITx 7.00x — *Introduction to Biology: The Secret of Life*** — Eric Lander et al. (MIT, on edX / MITx Online).
  URL: https://www.edx.org/learn/biology/massachusetts-institute-of-technology-introduction-to-biology-the-secret-of-life (free to audit; verified certificate paid). Also at https://mitxonline.mit.edu/courses/course-v1:MITxT+7.00x/ .
  **Serves:** p1m1. Lander's genetics and molecular-biology lectures are the best "just enough biology" on-ramp for a quantitative person. Audit the genetics/Mendel and molecular-biology segments; the biochemistry is optional.

- **Crash Course Biology — "Heredity" (#9) and the genetics episodes** — Hank Green (Complexly / Crash Course, YouTube).
  Heredity episode: https://www.youtube.com/watch?v=CBezq1fFUEA . Full original Biology playlist: https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF (free).
  **Serves:** p1m1. A fast, low-stakes Concrete-Experience warm-up before the textbook reading.

### Population & quantitative genetics (the core intuition)

- **Graham Coop — *Population and Quantitative Genetics* (notes)** — Graham Coop (UC Davis).
  Landing page: https://gcbias.org/population-genetics-notes/ ; source/releases: https://github.com/cooplab/popgen-notes (free, CC-BY).
  **Serves:** p1m2 (primary), p2m1 (the quantitative-genetics chapters). This is the spine for allele frequencies, Hardy–Weinberg, drift, and selection, written for people comfortable with math.

- **Joseph Felsenstein — *Theoretical Evolutionary Genetics*** — Joseph Felsenstein (University of Washington).
  PDF: https://felsenst.github.io/pgbook/pgbook.pdf (free).
  **Serves:** p1m2 (reference / depth). Use as a rigorous backstop when Coop's treatment of drift, selection, or linkage needs more derivation. Reference, not a cover-to-cover read.

### Intro genomics / SNPs / LD

- **OpenStax *Biology 2e*, Ch. 17 (Biotechnology and Genomics)** — see entry above.
  **Serves:** p1m3 (sequencing and genotyping concepts at an introductory level).
- Coop notes' linkage-disequilibrium sections (see above) **serve:** p1m3.

**Phase-1 project (p1) support:** PLINK docs and scikit-allel (listed under Phase 3) are the tools for [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD From Real Genotypes]].

---

## Phase 2 — Quantitative Genetics

- **Falconer & Mackay — *Introduction to Quantitative Genetics*, 4th ed. (1996)** — D. S. Falconer & Trudy F. C. Mackay (Pearson / Longman; ISBN 9780582243026).
  Publisher/used: https://www.amazon.com/Introduction-Quantitative-Genetics-Douglas-Falconer/dp/0582243025 (paid, ~US$60–90 used). A scanned copy exists at https://archive.org/details/IntroductionToQuantitativeGenetics (verify your library/copyright before relying on it).
  **Serves:** p2m1, p2m2 (primary text). The canonical introduction to variance components, heritability, breeding value, and response to selection.

- **Bruce Walsh — quantitative-genetics & BLUP lecture notes** — Bruce Walsh (University of Arizona; the Lynch & Walsh / Walsh & Lynch lineage).
  Hub: http://nitro.biosci.arizona.edu/ (lecture-note PDFs, datasets, and course materials are linked from here; free).
  **Serves:** p2m2, p2m3 (primary for BLUP, the animal/mixed model, and relationship matrices). This is the "Wisconsin-style" animal-breeding BLUP lecture-note source written at the right level. **[Note: the original prompt asked for a Wisconsin source (Gianola lineage); I could not find publicly hosted Gianola lecture notes, so this Walsh hub is the substitute — see gaps.]**

- **Graham Coop notes (quantitative-genetics chapters)** — see Phase 1.
  **Serves:** p2m1 (heritability and variance decomposition, gentler than Falconer).

- **Lynch & Walsh — *Genetics and Analysis of Quantitative Traits* (1998)** — Michael Lynch & Bruce Walsh (Sinauer).
  Publisher page: https://global.oup.com/academic/product/genetics-and-analysis-of-quantitative-traits-9780192898180 (paid).
  **Serves:** p2m3 (depth/reference for mixed models and BLUP).

**Phase-2 project (p2) support:** **AlphaSimR** (listed under Software) is the simulation engine for [[p2-simulate-a-breeding-population|Simulate a Breeding Population]].

---

## Phase 3 — Genomics Data Analysis

- **Vince Buffalo — *Bioinformatics Data Skills*** — Vince Buffalo (O'Reilly, 2015; ISBN 9781449367374).
  Author page: https://vincebuffalo.com/book/ ; supplementary files: https://github.com/vsbuffalo/bds-files (book paid; code free).
  **Serves:** p3m1, p3m2 (primary). Unix pipelines, file formats (FASTA/FASTQ/SAM/BAM/VCF), genomic ranges, reproducibility — exactly the data-plumbing skills Phase 3 needs.

- **PLINK 1.9 / 2.0 documentation** — Christopher Chang et al. (orig. Shaun Purcell).
  PLINK 1.9: https://www.cog-genomics.org/plink/1.9/ ; PLINK 2.0: https://www.cog-genomics.org/plink/2.0/ (free, open source).
  **Serves:** p1 project, p3m2, p3m3 (QC/filtering, allele frequencies, LD, association). The workhorse CLI for genotype QC.

- **Marees et al. (2018) — "A tutorial on conducting genome-wide association studies: Quality control and statistical analysis"** — A. T. Marees et al., *Int. J. Methods in Psychiatric Research* 27(2):e1608.
  Open access: https://pmc.ncbi.nlm.nih.gov/articles/PMC6001694/ ; scripts: https://github.com/MareesAT/GWA_tutorial (free).
  **Serves:** p3m3, p3 project. A hands-on, PLINK-based GWAS QC + analysis walk-through. (Human-disease framing, but the QC/structure-correction mechanics transfer directly to plants.)

- **scikit-allel documentation** — Alistair Miles et al.
  https://scikit-allel.readthedocs.io/ (free, open source; note: in maintenance mode, successor is `sgkit`).
  **Serves:** p1 project, p3m2 (allele frequencies, LD, PCA in Python).

- **pandas-plink documentation** — Danilo Horta / limix.
  https://pandas-plink.readthedocs.io/ (free).
  **Serves:** p3m2, p4 modules (read PLINK binary genotypes into Python arrays for modeling).

---

## Phase 4 — Machine Learning for Genomic Prediction

### Classical genomic prediction (the founding papers)

- **Meuwissen, Hayes & Goddard (2001) — "Prediction of Total Genetic Value Using Genome-Wide Dense Marker Maps"** — T. H. E. Meuwissen, B. J. Hayes, M. E. Goddard, *Genetics* 157(4):1819–1829.
  Open access: https://pmc.ncbi.nlm.nih.gov/articles/PMC1461589/ (DOI 10.1093/genetics/157.4.1819; free).
  **Serves:** p4m1, p4m4. The paper that launched genomic selection — read it for the original RR-BLUP / Bayesian-shrinkage idea.

- **Crossa et al. (2017) — "Genomic Selection in Plant Breeding: Methods, Models, and Perspectives"** — José Crossa et al., *Trends in Plant Science* 22(11):961–975.
  https://www.sciencedirect.com/science/article/abs/pii/S136013851730184X (DOI 10.1016/j.tplants.2017.08.011; paywalled — request via author/CIMMYT repository, e.g. https://cgspace.cgiar.org/items/bd836e24-cc2d-4ef2-86b0-85b6ac3bd659 ).
  **Serves:** p4m1, p4m4, p5m2. The orienting review for genomic selection *in plants*, including G×E models.

### Deep learning in genomics

- **Montesinos-López et al. (2021) — "A review of deep learning applications for genomic selection"** — O. A. Montesinos-López et al., *BMC Genomics* 22:19.
  Open access: https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-020-07319-x (free).
  **Serves:** p4m3, p4m4. A genomic-prediction-specific DL review with an honest "DL is not automatically better" verdict — the right framing for a skeptic.

### Software / libraries

- **rrBLUP (R)** — Jeffrey Endelman. https://cran.r-project.org/package=rrBLUP (free). **Serves:** p4m1 (RR-BLUP and GBLUP via the additive relationship matrix).
- **BGLR (R)** — Paulino Pérez-Rodríguez & Gustavo de los Campos. https://cran.r-project.org/package=BGLR (free); method paper: Pérez & de los Campos (2014), *Genetics* 198(2):483–495, https://pmc.ncbi.nlm.nih.gov/articles/PMC4196607/ . **Serves:** p4m1, p4m2 (Bayesian whole-genome regression; ships the `wheat` dataset — see Datasets).
- **sommer (R)** — Giovanny Covarrubias-Pazaran. https://cran.r-project.org/package=sommer (free). **Serves:** p2m3, p4m1 (mixed models / multiple variance components for GS).
- **AlphaSimR (R)** — R. Chris Gaynor, Gregor Gorjanc, John Hickey. https://gaynorr.github.io/AlphaSimR/ ; paper *G3* 11(2):jkaa017, https://academic.oup.com/g3journal/article/11/2/jkaa017/6025179 (free). **Serves:** p2 project, p5 modules (stochastic breeding-program simulation).
- **scikit-learn (Python)** — https://scikit-learn.org/ (free). **Serves:** p4m2 (ridge, elastic net, random forest, cross-validation).
- **XGBoost (Python/R)** — https://xgboost.ai/ ; docs https://xgboost.readthedocs.io/ (free). **Serves:** p4m2 (gradient boosting).
- **pandas-plink / scikit-allel (Python)** — see Phase 3. **Serves:** p4 modules (feature matrices from genotypes).

---

## Phase 5 — Crop Breeding Domain Knowledge

- **CGIAR Excellence in Breeding — "Basics of Genomic Selection" + breeding-scheme resources** — CGIAR EiB platform.
  https://excellenceinbreeding.org/toolbox/learning/basics-genomic-selection (free).
  **Serves:** p5m1, p5m2. Practitioner-facing material on deploying GS inside real public-sector breeding programs (CIMMYT/IRRI/ICRISAT case examples) — closest thing to "how breeders actually think."

- **Crossa et al. (2017) review** — see Phase 4. **Serves:** p5m2 (G×E genomic-prediction models).
- **AlphaSimR** — see Software. **Serves:** p5 project (simulate selection cycles and multi-environment testing).

---

## Candidate public datasets

Verified links where possible. Pick *one* per project and grow familiarity rather than collecting many.

- **BGLR `wheat` dataset** — 599 historical CIMMYT wheat lines, grain yield in 4 mega-environments, with markers + pedigree relationship matrix. Ships inside the BGLR R package (`data(wheat)`); package: https://cran.r-project.org/package=BGLR ; docs: https://rdrr.io/cran/BGLR/man/wheat.html (free). **Best for:** p2 project, p4 project (small, clean, canonical GS teaching set).

- **Rice 3,000 Genomes (3K RG) via SNP-Seek / IRRI** — ~20M SNPs across ~3,000 rice accessions. SNP-Seek portal: https://snp-seek.irri.org/ (also https://www.oryzasnp.org/ ); AWS Open Data: https://iric.irri.org/resources/3krg-in-aws (free). **Best for:** p3 project (PCA + GWAS on real structure). Large — subset before loading.

- **Maize 282 (Goodman–Buckler) association panel** — diversity panel with public SNP genotypes + many phenotypes. Panzea genotype/phenotype downloads: https://www.panzea.org/genotype-search ; HapMap3.2.1 / 282 VCFs hosted on CyVerse (linked from Panzea). (free). **Best for:** p3 project (GWAS), p4 modules. **[partially verified — the exact CyVerse file paths shift; confirm current download links on Panzea.]**

- **Arabidopsis 1001 Genomes** — whole-genome SNPs for ~1,135 *A. thaliana* accessions. Data center: https://1001genomes.org/data-center.html (free). Companion GWAS catalog: AraGWAS, https://aragwas.1001genomes.org/ . **Best for:** p3 project (clean model-organism SNP matrix + ready GWAS comparisons).

- **Multi-environment trial data — Maize Genomes to Fields (G2F) G×E** — public maize hybrid trials across many year-locations in the US/Canada with genotype, phenotype, weather, and soil data. Initiative: https://www.genomes2fields.org/ ; field-season data papers (e.g. *BMC Research Notes*) with linked repositories, e.g. https://bmcresnotes.biomedcentral.com/articles/10.1186/s13104-023-06430-y (free). **Best for:** p5 project and capstone 3 (cross-environment prediction). **[partially verified — confirm the exact data-release DOI/repository for the season you use.]**

---

## Gaps / unverified items (to confirm before citing in a note)

- **Wisconsin / Gianola BLUP lecture notes:** the prompt requested a Wisconsin quantitative-genetics/BLUP lecture-note source (Gianola lineage). I could not locate publicly hosted Gianola lecture notes; substituted Bruce Walsh's freely hosted Arizona lecture-note hub (http://nitro.biosci.arizona.edu/), which is the standard equivalent. Confirm whether a specific Wisconsin (UW–Madison Animal Sciences) note set is wanted, and get its exact URL.
- **Bruce Walsh notes — exact PDF paths:** http://nitro.biosci.arizona.edu/ is confirmed as the hub, but the individual lecture-note PDF filenames were not each opened/verified. Confirm the specific chapter PDFs before deep-linking from a module.
- **Falconer & Mackay full text:** only paid/print copies and a (rights-uncertain) Internet Archive scan were found. Verify a legitimate access route (library / purchase) before treating it as an assigned reading.
- **Crossa et al. (2017):** confirmed citation and DOI, but the *Trends in Plant Science* full text is paywalled. Locate an open/repository copy (CIMMYT CGSpace item linked above is a candidate) before relying on it.
- **MITx 7.00x URL:** the edX course slug shown ("…the-secret-of-life") is constructed from search results and edX/MITx Online both list the course; verify the live enrollment link (edX sometimes versions the slug, e.g. `-3`) before sending learners.
- **Maize 282 panel download paths (CyVerse):** Panzea is confirmed; exact CyVerse/HapMap file paths drift over time — re-confirm at download time.
- **G2F multi-environment dataset:** initiative and example data papers confirmed; the precise repository DOI for a given field season must be confirmed against the season actually used.
- **Crash Course "Genetics" vs "Biology":** linked the verified original *Crash Course Biology* Heredity episode and playlist. A separate standalone "Crash Course Genetics" series was not independently confirmed as a distinct, current product; treat the Biology genetics episodes as the canonical reference.

## Links
- Context: [[roadmap|Master Roadmap]]
- Context: [[conventions|Vault Conventions]]
