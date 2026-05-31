---
type: project
phase: 2
title: "End-to-End Breeding Simulation"
status: not-started        # not-started | in-progress | complete
skills: [r, simulation, quantitative-genetics, selection, genomic-prediction, genetic-gain]
deliverables: [notebook, report, genetic-gain-curves, scheme-comparison]
datasets: ["Simulated — founder genomes and trait architecture generated in silico"]
tags: [project, experiential, capstone]
---

# End-to-End Breeding Simulation

> The experiential core of the Phase 2 capstone, looped forward through everything after it. You simulate a base population, then run selection and crossing across multiple cycles, measure genetic gain, and show quantitatively how genomic prediction changes the rate of gain — gain *per unit time*, not just per cycle.

## Why this project
A breeding program is a multi-generation feedback loop, and the only honest way to see how a design choice plays out over a decade is to simulate it. This capstone closes the loop the whole curriculum has been building toward: the breeder's equation predicts response per cycle from heritability and the selection differential; genomic prediction changes the *terms* of that equation by letting you select earlier and more accurately (raising accuracy and shortening the generation interval at once). Simulating the program lets you watch realized genetic gain accumulate and attribute it to the levers — selection intensity, accuracy, generation interval, and population size — rather than arguing about them in the abstract. This is exactly how breeding-program design and optimization are done in practice.

This capstone builds on the Phase 2 project, [[p2-simulate-a-breeding-population|Simulate a Breeding Population]], extending its single-generation simulation into a multi-cycle program with a genomic-selection arm.

## Concepts it forces you to apply
- [[the-breeders-equation-says-response-to-selection-equals-narrow-sense-heritability-times-the-selection-differential|The breeder's equation says response to selection equals narrow-sense heritability times the selection differential]] — the per-cycle prediction you will check against simulated reality, then extend to the per-year form R/L.
- [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]] — heritability changes as selection erodes additive variance (Bulmer effect); you will watch it drift.
- [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]] — the mechanism that lets you select on a genomic estimated breeding value before the phenotype exists, shrinking the generation interval.

## Setup
- **Language / tools:** R with **AlphaSimR** (Gaynor et al., *G3* 11(2), 2021; github.com/gaynorr/AlphaSimR), which simulates whole breeding programs to the sequence level — founder genomes, trait architecture, selection, and crossing across generations. Reuse the genomic-prediction models from [[project-2-genomic-prediction-benchmark|Project 2]] (or AlphaSimR's built-in RR-BLUP) for the genomic-selection arm. Confirm the current API when you start (see gaps).
- **Data:** Fully simulated. You set the founder population, number of QTL, trait heritability, and program structure, so you control ground truth — the true breeding values are knowable, which is what makes accuracy measurable.
- **Environment:** Fixed seeds with replicate simulation runs (so "genetic gain" is a distribution, not one lucky trajectory); a clean separation between the phenotypic-selection scheme and the genomic-selection scheme so the comparison is controlled.

## Milestones (each ends in a predict-then-check)
1. **Found the population + trait.** Simulate founders, define an additive (then add-plus-dominance) trait with a target heritability. *Predict the base-population additive variance and heritability; then check against AlphaSimR's reported values.*
2. **One cycle of phenotypic selection.** Select the top fraction, cross, advance. *Predict the one-cycle response with the breeder's equation R = h²S; then compare to the simulated mean shift.*
3. **Many cycles.** Run the phenotypic-selection program for, say, 10–20 cycles across replicates. *Predict whether realized gain stays linear; predict the Bulmer-effect dip in additive variance and the long-run plateau.*
4. **Add the genomic-selection arm.** Train a genomic-prediction model each cycle, select on GEBVs, and shorten the generation interval where biology allows. *Predict which lever — higher accuracy or shorter interval — contributes more to gain per year.*
5. **Compare gain per unit time.** Plot genetic gain vs cycle and vs simulated calendar year for both schemes; decompose the advantage into the four breeder's-equation levers (intensity, accuracy, interval, variance). *Predict the ratio of GS to phenotypic gain per year before you read the plot.*

## Deliverables
- [ ] Notebook / script (committed) — reproducible multi-cycle simulation with replicates and both schemes.
- [ ] Short write-up (a `post` candidate): "What a breeding simulation taught me about gain per year."
- [ ] Genetic-gain curves (per cycle and per year), variance-over-time plot, and a scheme-comparison figure — candidates for a `docs/` D3 visualization via `biostat-viz`.

## Stretch goals
- Add genotype-by-environment interaction and multi-trait selection (an index); watch the gain trade-offs.
- Sweep selection intensity and population size to map the speed-vs-diversity (long-term gain) tension and inbreeding accumulation.
- Replace the built-in predictor with the best model from Project 2 and test whether better prediction accuracy translates into measurably more gain.

## Reflection prompts (Kolb RO/AC)
- What did you predict for one-cycle response from the breeder's equation, what did the simulation deliver, and what explains the gap?
- Did genomic selection win mostly through accuracy or through a shorter generation interval? What does that imply for a real program?
- Which evergreen claim did this confirm, extend, or contradict? Did watching additive variance erode change how you hold the heritability claim?

## Links
- Phase: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
- Builds-on: [[p2-simulate-a-breeding-population|Simulate a Breeding Population]]
- Applies: [[project-2-genomic-prediction-benchmark|Genomic Prediction Benchmark]]
- Context: [[why-relatedness-is-the-engine-of-prediction|Why relatedness is the engine of both classical and genomic prediction]]
