---
type: project
phase: 2
title: "Simulate a Breeding Population"
status: not-started        # not-started | in-progress | complete
skills: [python, numpy, simulation, variance-component-estimation, blup]
deliverables: [simulation-notebook, h2-recovery-experiment, breeding-value-prediction, write-up]
datasets: ["Simulated — allele frequencies, genotypes, and an additive trait generated in NumPy; optional real cross-check via the BGLR wheat dataset (599 CIMMYT lines)"]
tags: [project, experiential]
---

# Simulate a Breeding Population

> The experiential core of Phase 2. You build a population from scratch in NumPy — allele frequencies, genotypes, an additive trait with a heritability *you* choose — then turn around and try to recover that heritability and predict breeding values from the data alone. Because you set the ground truth, every estimate has a known right answer to check against. That closed loop is the whole point.

## Why this project

Most machine-learning practitioners meet quantitative genetics as a pile of definitions: variance components, narrow-sense heritability, breeding value, BLUP. The definitions only become real when you generate the data yourself and watch the math reproduce the numbers you planted. This single project does an enormous amount of work because it forces the full causal chain into code:

1. **Draw allele frequencies** for many loci — the population's genetic makeup.
2. **Generate genotypes** from those frequencies (binomial sampling under Hardy–Weinberg) — the individuals.
3. **Assign additive allele effects**, sum them to a true genetic value, and **add environmental noise calibrated to a target heritability** — the phenotype. Here you set `h²` by choosing how much noise to add: `V_E = V_A · (1 - h²) / h²`.
4. **Estimate heritability back out** of the simulated phenotypes (variance-component estimation), and **predict breeding values** (BLUP-style shrinkage toward relatives), then compare predictions to the true genetic values you stored.

This is exactly how real genomic-prediction methods are validated — on simulated data where the truth is knowable — and it is the cheapest possible way to internalize *what heritability is*, *why you can never recover it perfectly from finite data*, and *what BLUP actually shrinks*. Doing it in plain NumPy (no black-box package) means there is nowhere for the concept to hide.

**This project is the working seed for the Phase 2 capstone, [[project-3-breeding-simulation|End-to-End Breeding Simulation]].** Here you build a single-generation NumPy simulator and validate it against known truth; the capstone extends that simulator into a multi-cycle breeding program (selection, crossing, genetic-gain curves, a genomic-selection arm) and optionally migrates to AlphaSimR. Build this one cleanly and the capstone is an extension, not a rewrite.

## Concepts it forces you to apply

- [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]] — you will *manufacture* a heritability by tuning environmental variance, then prove to yourself it is a ratio of variances by changing the population (allele-frequency spectrum, number of loci) or the environment (noise) and watching `h²` move while the biology stays fixed.
- [[the-breeders-equation-says-response-to-selection-equals-narrow-sense-heritability-times-the-selection-differential|The breeder's equation says response to selection equals narrow-sense heritability times the selection differential]] — the optional selection milestone lets you select the top fraction, breed, and check whether the observed mean shift matches `R = h²S`.
- [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]] — building a genomic relationship matrix from your simulated genotypes and using it to predict breeding values is the mechanical bridge from this project to GBLUP.

## Setup

- **Language / tools:** Python with **NumPy** (the engine: `np.random.default_rng` for reproducible sampling, vectorized genotype generation, linear algebra for the mixed-model solve). Add `pandas` for bookkeeping and `matplotlib` for figures. Use **statsmodels** or a hand-rolled REML/least-squares solve for variance components; no genetics package required.
- **Optional R cross-check:** **AlphaSimR** (Gaynor, Gorjanc & Hickey, *G3* 11(2):jkaa017, 2021; docs at https://gaynorr.github.io/AlphaSimR/ ), whose `SimParam$addTraitA()` plus the `h2` argument to `setPheno()` simulate an additive trait at a target heritability the same way you do by hand. Running the identical experiment in AlphaSimR and confirming both recover the planted `h²` is a strong "I built this right" signal. Confirm the current API when you start (see gaps).
- **Data:** Fully **simulated** — you own the ground truth (true allele effects, true breeding values, true `h²`), which is what makes recovery measurable. For an optional reality check, the **BGLR `wheat`** dataset (599 historical CIMMYT lines, markers + grain yield + pedigree relationship matrix; ships in the BGLR R package, `data(wheat)`; docs https://rdrr.io/cran/BGLR/man/wheat.html ) is a small, clean real-data panel to point your estimator at once it works on simulated data. (Verify the dataset is still bundled in the current BGLR release before relying on it — see gaps.)
- **Environment:** Fixed RNG seeds and **replicate runs** (estimates are random variables — report a distribution of recovered `h²`, not one number); a clean separation between data generation and estimation so you can never accidentally let the truth leak into the estimator.

## Milestones (each ends in a predict-then-check)

1. **Draw a population.** Sample allele frequencies for `L` loci (e.g. from a Beta or Uniform on (0,1)), then draw genotypes for `N` individuals as `Binomial(2, p)` under Hardy–Weinberg. *Predict the mean and variance of the per-locus allele count and the expected heterozygosity from your frequency distribution; then check the empirical genotype matrix against them.*
2. **Build the additive trait at a chosen `h²`.** Assign additive effects to alleles, sum to each individual's true genetic value `g`, compute its variance `V_A`, then add Gaussian noise with `V_E = V_A · (1 - h²) / h²` to make the phenotype `y = g + e`. *Predict the realized phenotypic variance and the realized `h² = V_A / (V_A + V_E)` before you compute them; then check — and explain why the realized `h²` is not exactly your target in a finite sample.*
3. **Recover `h²` from the data (the headline experiment).** Forgetting the truth, estimate heritability from the simulated phenotypes and genotypes (e.g. genomic-relatedness variance-component / GREML-style estimation, or parent–offspring / sib regression if you add family structure). Repeat across many simulated replicates at the *same* known `h²`. *Predict whether your estimator is unbiased and how its spread shrinks with `N` and `L`; then check the distribution of recovered `h²` against the planted value.*
4. **Predict breeding values (BLUP).** Build a genomic (or pedigree) relationship matrix from the genotypes and solve the mixed-model equations to get predicted breeding values; correlate them with the true genetic values you stored. *Predict how prediction accuracy scales with `h²` and training size, and what the predictions shrink toward; then check the accuracy and confirm low-information individuals are pulled hardest toward the mean.*
5. **(Optional) Cross-check against AlphaSimR.** Reproduce milestones 2–4 in AlphaSimR (or point your estimator at the BGLR `wheat` panel). *Predict that AlphaSimR recovers the same planted `h²` your NumPy code does; then check the two agree within simulation noise.*

## Deliverables

- [ ] **Simulation notebook / script (committed)** — reproducible NumPy pipeline: allele frequencies → genotypes → additive trait at a chosen `h²`, with seeds and a clean truth/estimator split.
- [ ] **`h²` recovery experiment** — simulate at a known `h²`, estimate it back across replicates, and report the distribution vs the truth (bias and spread as a function of `N` and `L`).
- [ ] **Breeding-value prediction** — BLUP predictions correlated against true genetic values, with an accuracy-vs-`h²` curve.
- [ ] **Short write-up (a `post` candidate — feeds the writing loop):** "What I learned by recovering a heritability I planted myself."
- [ ] **Figures** (recovered-`h²` distribution, accuracy-vs-`h²` curve) — candidates for a `docs/` D3 visualization via `biostat-viz`.

## Stretch goals

- Add **family structure** (parents → offspring) so you can recover `h²` two independent ways — variance components *and* parent–offspring regression — and check they agree.
- Add one **generation of selection** and test the breeder's equation: predict `R = h²S`, breed the top fraction, measure the realized mean shift.
- Add **dominance** to the trait and watch broad-sense `H²` and narrow-sense `h²` diverge — and watch an additive-only estimator misbehave.
- Run the **AlphaSimR** cross-check end to end and reconcile any discrepancy (a great way to surface a hidden bug in your hand-built simulator).

## Reflection prompts (Kolb RO/AC)

- You set `h²` exactly, yet your estimate scattered around it. What did you predict for that scatter, what did you get, and what does the gap teach about every published heritability estimate?
- What did BLUP shrink your predictions toward, and which individuals got pulled hardest? Connect that to what the relationship matrix "knew" about each one.
- Which evergreen claim did building this confirm, extend, or contradict? Did manufacturing a heritability change how you hold the "heritability is a property of a population" claim?

## Links
- Phase: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
- Applies: [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]]
- Applies: [[the-breeders-equation-says-response-to-selection-equals-narrow-sense-heritability-times-the-selection-differential|The breeder's equation says response to selection equals narrow-sense heritability times the selection differential]]
- Applies: [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]]
- Builds-on: [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability]]
- Builds-on: [[p2m3-mixed-models-blup-and-relationship-matrices|p2m3 · Mixed Models, BLUP, and Relationship Matrices]]
- Seeds: [[project-3-breeding-simulation|End-to-End Breeding Simulation]] — this project is the working seed for that capstone.
