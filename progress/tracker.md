---
type: tracker
created: 2026-05-30
updated: 2026-06-01
tags: [progress, status-board]
---

# Progress Tracker — status board

The single status board for the curriculum. `biostat-coach` reads and updates this; I keep it honest. Status legend matches the module lifecycle in [[conventions|Vault Conventions]] §6: **not-started → reading → practicing → assessed → mastered**. A module is `mastered` only at the `proficient`+ band on its core claims (see [[skills-matrix|the skills matrix]]).

**Daily streak:** 2 days (started 2026-05-30) · last study session: 2026-06-01 (p1m1, 2 notes + closed-book review) · longest streak: 2
**This week's focus:** [[p1m1-dna-genes-and-inheritance|p1m1]] concepts complete — 5 evergreen notes (genotype, mutation, recombination, 1:2:1 cross, linkage). Next: the hands-on project [[p1-allele-frequencies-and-ld-from-real-genotypes|allele frequencies + LD on real data]], then a formal assessment.
**Phase in progress:** Phase 1 — Genetics for Data Scientists.

---

## Phases

| Phase | Title | Duration | Status | Project |
|---|---|---|---|---|
| 1 | [[phase-1-genetics-for-data-scientists\|Genetics for Data Scientists]] | 4–6 wk | in-progress | [[p1-allele-frequencies-and-ld-from-real-genotypes\|Allele Frequencies and LD From Real Genotypes]] |
| 2 | [[phase-2-quantitative-genetics\|Quantitative Genetics]] | 6–8 wk | not-started | [[p2-simulate-a-breeding-population\|Simulate a Breeding Population]] |
| 3 | [[phase-3-genomics-data-analysis\|Genomics Data Analysis]] | 6–8 wk | not-started | [[p3-pca-and-gwas-on-a-public-dataset\|PCA + GWAS on a Public Dataset]] |
| 4 | [[phase-4-ml-for-genomic-prediction\|Machine Learning for Genomic Prediction]] | 8–10 wk | not-started | [[p4-genomic-prediction-benchmark\|Genomic Prediction Benchmark]] |
| 5 | [[phase-5-crop-breeding-domain\|Crop Breeding Domain Knowledge]] | 4–6 wk | not-started | [[p5-predict-trait-performance-across-environments\|Predict Trait Performance Across Environments]] |

---

## Modules

| ID | Module | Weeks | Status | Mastery | Review due |
|---|---|---|---|---|---|
| p1m1 | [[p1m1-dna-genes-and-inheritance\|DNA, Genes, and Inheritance]] | Wk 1 | practicing | functional | 2026-06-02 |
| p1m2 | [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection\|Population Genetics: Allele Frequencies, HWE, Drift, Selection]] | Wk 2–3 | not-started | unfamiliar | — |
| p1m3 | [[p1m3-intro-genomics-snps-sequencing-genotyping-ld\|Intro Genomics: SNPs, Sequencing, Genotyping, LD]] | Wk 4–6 | not-started | unfamiliar | — |
| p2m1 | [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability\|Phenotype vs Genotype: Sources of Variation and Heritability]] | Wk 1–2 | not-started | unfamiliar | — |
| p2m2 | [[p2m2-selection-breeding-value-and-response\|Selection: Breeding Value and Response]] | Wk 3–4 | not-started | unfamiliar | — |
| p2m3 | [[p2m3-mixed-models-blup-and-relationship-matrices\|Mixed Models, BLUP, and Relationship Matrices]] | Wk 5–6 | not-started | unfamiliar | — |
| p3m1 | [[p3m1-the-sequencing-to-variants-pipeline\|The Sequencing-to-Variants Pipeline]] | Wk 1–2 | not-started | unfamiliar | — |
| p3m2 | [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness\|VCF and SNP Analysis: QC, Filtering, Missingness]] | Wk 3–4 | not-started | unfamiliar | — |
| p3m3 | [[p3m3-gwas-association-testing-and-structure-correction\|GWAS: Association Testing and Structure Correction]] | Wk 5–6 | not-started | unfamiliar | — |
| p4m1 | [[p4m1-classical-genomic-prediction-gblup-and-rr-blup\|Classical Genomic Prediction: GBLUP and RR-BLUP]] | Wk 1–2 | not-started | unfamiliar | — |
| p4m2 | [[p4m2-ml-approaches-ridge-elastic-net-rf-gradient-boosting\|ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting]] | Wk 3–4 | not-started | unfamiliar | — |
| p4m3 | [[p4m3-deep-learning-on-genomic-data\|Deep Learning on Genomic Data]] | Wk 5–6 | not-started | unfamiliar | — |
| p4m4 | [[p4m4-reading-agricultural-ml-papers\|Reading Agricultural ML Papers]] | Wk 7–8 | not-started | unfamiliar | — |
| p5m1 | [[p5m1-breeding-pipelines-crossing-selection-cycles-field-trials\|Breeding Pipelines: Crossing, Selection Cycles, Field Trials]] | Wk 1–3 | not-started | unfamiliar | — |
| p5m2 | [[p5m2-genotype-x-environment-interaction-and-stability\|Genotype x Environment Interaction and Stability]] | Wk 4–6 | not-started | unfamiliar | — |

> Module slugs follow `<id>-<kebab-title>`; if `biostat-coach` reports a broken wikilink here, the module file may not be scaffolded yet — that is expected until each phase pipeline runs.

---

## How to update this board

- Set a module to **reading** when the first source note opens; **practicing** when the Active-Experimentation exercise / project work starts; **assessed** after a `biostat-assessor` session writes an assessment-session note; **mastered** at `proficient`+.
- Update the **daily streak** line each study day (a real Kolb session, not just a read).
- Reset **this week's focus** at the weekly review.
- The **Review due** column mirrors each module's `review-due` frontmatter; `biostat-assessor` sets it via the spaced-repetition queue ([[spaced-repetition|spaced-repetition queue]]).

## Links
- Context: [[roadmap|Roadmap]]
- Applies: [[skills-matrix|Skills Matrix]]
- Context: [[learning-journal|Learning Journal]]
- Context: [[system-overview|System Overview]]
