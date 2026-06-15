---
type: skills-matrix
created: 2026-05-30
updated: 2026-06-06
tags: [progress, competencies, mastery]
---

# Skills Matrix — competencies

A self-rated competency map across the studio. Each row is a competency; the band is my honest current level on the Dreyfus-flavored mastery scale from [[conventions|Vault Conventions]] §8. This is **self-assessment** — `biostat-assessor` confirms or corrects it with closed-book probing; an unverified self-rating in a hot field tends to run high. When in doubt, rate down.

**Mastery bands:** `unfamiliar` (no working model) → `aware` (can recognize and define) → `functional` (can apply with reference/help) → `proficient` (can apply independently and explain why) → `fluent` (can teach, extend, and judge others' work).

| Competency | Phase | Current band | Target | Self-rated | Confirmed by assessor | Evidence / where proven |
|---|---|---|---|---|---|---|
| Genetics literacy (DNA, genes, inheritance) | 1 | functional | proficient | 2026-06-06 | — | [[p1m1-dna-genes-and-inheritance\|p1m1]] — 5 earned evergreen notes (0/1/2 encoding, mutation, recombination, 1:2:1 cross, linkage) |
| Population genetics (allele freq, HWE, drift, selection) | 1 | functional | proficient | 2026-06-06 | — | [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection\|p1m2]] — allele-freq/HWE half: 3 notes (allele-freq state variable, L-shaped MAF spectrum, HWE-as-QC) + p1 lab milestones 2–3; drift + selection still to come |
| Quantitative genetics (variance, heritability, breeder's eq.) | 2 | unfamiliar | fluent | 2026-05-30 | — | [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability\|p2m1]], [[p2m2-selection-breeding-value-and-response\|p2m2]] |
| BLUP / mixed models (REML, relationship matrices) | 2 | unfamiliar | proficient | 2026-05-30 | — | [[p2m3-mixed-models-blup-and-relationship-matrices\|p2m3]] |
| Sequencing / VCF / QC (pipeline, filtering, missingness) | 3 | unfamiliar | functional | 2026-05-30 | — | [[p3m1-the-sequencing-to-variants-pipeline\|p3m1]], [[p3m2-vcf-and-snp-analysis-qc-filtering-missingness\|p3m2]] |
| GWAS (association testing, structure correction) | 3 | unfamiliar | proficient | 2026-05-30 | — | [[p3m3-gwas-association-testing-and-structure-correction\|p3m3]] |
| Genomic prediction — classical (GBLUP, RR-BLUP) | 4 | unfamiliar | fluent | 2026-05-30 | — | [[p4m1-classical-genomic-prediction-gblup-and-rr-blup\|p4m1]] |
| Genomic prediction — ML (penalized, trees, boosting) | 4 | unfamiliar | proficient | 2026-05-30 | — | [[p4m2-ml-approaches-ridge-elastic-net-rf-gradient-boosting\|p4m2]] |
| Deep learning on genomic data | 4 | unfamiliar | functional | 2026-05-30 | — | [[p4m3-deep-learning-on-genomic-data\|p4m3]] |
| Breeding pipelines (cycles, field trials, where GS helps) | 5 | unfamiliar | functional | 2026-05-30 | — | [[p5m1-breeding-pipelines-crossing-selection-cycles-field-trials\|p5m1]] |
| GxE interaction and stability | 5 | unfamiliar | proficient | 2026-05-30 | — | [[p5m2-genotype-x-environment-interaction-and-stability\|p5m2]] |
| Scientific writing / learning-in-public | cross | aware | proficient | 2026-05-30 | — | [[writing-system\|writing-system.md]], `output/posts/` |
| Data visualization (D3 / genomics viz) | cross | aware | functional | 2026-05-30 | — | `docs/`, [[system-overview\|biostat-viz]] |

---

## How this matrix is maintained

- **I self-rate.** A new competency starts `unfamiliar`. I bump it only when I can do the thing, not when I've read about it.
- **The assessor confirms.** After a `biostat-assessor` session, fill the *Confirmed by assessor* column with the date and band it actually found. Where the confirmed band is below the self-rated one, the self-rating was optimistic — trust the assessor.
- **Evidence is required for `proficient`+.** A competency reaches `proficient` only with a concrete artifact: a passed assessment, a working project notebook, a published post. Link it in the Evidence column.
- **Targets reflect the goal.** Quantitative genetics, classical genomic prediction, and the breeder's equation are rated `fluent` targets because they are the keystones for contributing to ML-driven crop genetics (see [[roadmap|Roadmap]]); peripheral skills target `functional`.

## Date log

| Date | Change |
|---|---|
| 2026-05-30 | Matrix created at studio kickoff. All technical competencies `unfamiliar`; writing and viz `aware` (transferable from prior data-science work). |
| 2026-06-06 | Reconciliation pass (`biostat-coach`). Genetics literacy `unfamiliar` → `functional` (p1m1 concepts complete, 5 evergreen notes; informal closed-book retrieval of the first three passed). Population genetics `unfamiliar` → `functional` for the allele-frequency / HWE half (3 p1m2 notes + p1 lab milestones 2–3); drift + selection still outstanding. *Confirmed-by-assessor* left blank for both — no formal `biostat-assessor` session has run yet. Later-phase competencies unchanged. |

## Links
- Context: [[tracker|Progress Tracker]]
- Context: [[roadmap|Roadmap]]
- Applies: [[learning-journal|Learning Journal]]
