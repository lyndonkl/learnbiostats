---
type: phase
phase: 2
title: "Quantitative Genetics"
duration: "6–8 weeks"
status: not-started
modules: [p2m1, p2m2, p2m3]
project: "[[p2-simulate-a-breeding-population|Simulate a Breeding Population]]"
competencies:
  - "Decompose phenotypic variance into genetic and environmental components and define narrow- vs broad-sense heritability"
  - "Explain breeding value as the sum of average allele effects and use the breeder's equation R = h²S to predict response to selection"
  - "Set up a mixed model, predict random breeding values with BLUP, and explain how the relationship matrix lets information flow between relatives"
tags: [curriculum]
---

# Phase 2 · Quantitative Genetics

> The keystone phase. Most machine-learning practitioners entering breeding discover this is the missing piece: how a continuous trait relates to many loci, what heritability actually is (and is not), and how selection moves a population from one generation to the next.

## Why this phase is the hinge of the whole roadmap

Coming from machine learning, the instinct is to treat phenotype prediction as a regression problem and reach for a model. Quantitative genetics is the theory that tells you *what you are regressing on, why relatives are correlated, and what a "good" prediction is for.* The target is not the phenotype — it is the **breeding value**, the heritable part that gets transmitted to offspring. The covariance structure you exploit is not arbitrary; it is **relatedness**. And the metric of success is not held-out R², it is **response to selection** over generations.

Genomic prediction — the destination of this curriculum — is not a new idea bolted onto genetics. It is one specific substitution inside a framework that is a century old: replace the pedigree-derived relationship matrix with a marker-derived one. You cannot understand why that substitution works, or when it fails, without first holding the classical theory. That is what Phase 2 builds.

The three modules walk the causal chain end to end:

1. **Where does phenotypic variation come from, and what fraction of it is heritable?** ([[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1]])
2. **Given heritability, how does selecting parents change the next generation?** ([[p2m2-selection-breeding-value-and-response|p2m2]])
3. **How do we actually predict an individual's breeding value from messy, unbalanced data on it and its relatives?** ([[p2m3-mixed-models-blup-and-relationship-matrices|p2m3]])

By the end you will have built a forward simulation of a breeding population and watched the breeder's equation predict the trajectory you observe — which is the most honest way to know you understand it.

## Modules

- [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability]] — Weeks 1–2. Genetic vs environmental variance; additive vs dominance variance; narrow- vs broad-sense heritability.
- [[p2m2-selection-breeding-value-and-response|p2m2 · Selection: Breeding Value and Response]] — Weeks 3–4. Breeding value, selection differential, response to selection, the breeder's equation R = h²S.
- [[p2m3-mixed-models-blup-and-relationship-matrices|p2m3 · Mixed Models, BLUP, and Relationship Matrices]] — Weeks 5–6. Fixed vs random effects, BLUP, the numerator relationship (A) matrix, REML variance-component estimation.

## Project

- [[p2-simulate-a-breeding-population|Simulate a Breeding Population]] — the experiential spine of the phase. You build a forward simulator, set true variance components, select on phenotype, and check whether observed response matches R = h²S. Each module hooks one stage of this build.

## Exit criteria

You exit Phase 2 when, from memory and without notes, you can:

- [ ] Write the variance decomposition `Vp = Vg + Ve` (and `Vg = Va + Vd + Vi`) and state in one sentence the difference between broad-sense (H²) and narrow-sense (h²) heritability.
- [ ] Explain *why narrow-sense* heritability — not broad-sense — predicts response to selection, in terms of what parents transmit.
- [ ] Define breeding value as the sum of the average effects of an individual's alleles, and say why it, rather than genotypic value, is the quantity selection acts on across generations.
- [ ] Derive or state the breeder's equation `R = h²S` and use it to make a quantitative prediction about one generation of selection.
- [ ] Explain what BLUP shrinks, what it shrinks toward, and what determines the amount of shrinkage for a given individual.
- [ ] State the single conceptual change that turns pedigree BLUP into genomic prediction (replacing the A matrix with a marker-based G matrix), and one reason genomic prediction can outperform pedigree BLUP.
- [ ] Reproduce the phase project's headline result: observed response to one generation of selection tracks the breeder's-equation prediction within simulation noise.

**Mastery target:** `proficient` on the core claims of all three modules, demonstrated through the question banks and a working, documented breeding-population simulator.

## Links
- Prerequisite: [[roadmap|Learning Studio Roadmap]] — Phase 2 assumes the genetics and statistics groundwork of Phase 1.
- Next: [[phase-3-genomics-data-analysis|Phase 3 · Genomic Prediction]] — replaces pedigree relatedness with marker data; this phase is its direct prerequisite.
- Project: [[p2-simulate-a-breeding-population|Simulate a Breeding Population]]
