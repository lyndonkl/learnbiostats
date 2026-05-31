---
type: module
phase: 5
module: p5m2
title: "Genotype × Environment Interaction and Stability"
weeks: "Weeks 4–6"
status: not-started
prerequisites: [p5m1, p2m1]
objectives:
  - "understand: read a multi-environment trial and write the model that separates genotype, environment, and genotype-by-environment interaction terms."
  - "understand: distinguish a genotype's mean performance from its stability, and explain a ranking change across environments as G×E."
  - "apply: estimate and visualize G×E for a real MET dataset (interaction terms, reaction-norm plot, or stability statistic)."
  - "analyze: choose between a shared-marker-effect model and one with environment-specific marker effects for a stated deployment goal across a target population of environments."
readings:
  - "Burgueño, de los Campos, Weigel & Crossa (2012), 'Genomic Prediction of Breeding Values when Modeling Genotype × Environment Interaction using Pedigree and Dense Molecular Markers,' Crop Science 52:707–719 — first multi-environment GBLUP modelling G×E via genetic correlations. VERIFY link."
  - "López-Cruz, Crossa et al. (2015), 'Increased Prediction Accuracy in Wheat Breeding Trials Using a Marker × Environment Interaction Genomic Selection Model,' G3 5(4):569–582 — decomposes marker effects into a shared main effect plus environment-specific effects. VERIFY link."
  - "Jarquín, Crossa et al. (2014), 'A reaction norm model for genomic selection using high-dimensional genomic and environmental data,' Theoretical and Applied Genetics 127:595–607 — G×E as marker × environmental-covariate interaction. VERIFY link."
  - "Stability-analysis classics: Finlay & Wilkinson (1963) regression on environmental means; Yan et al. (2000) GGE biplot for mega-environments, Crop Science 40:597–605. VERIFY links."
  - "CIMMYT G×E materials (Excellence in Breeding / CIMMYT repository). VERIFY links are current."
project: "[[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]]"
question-bank: "[[p5m2-questions|P5M2 Question Bank]]"
review-due: null
tags: [breeding, gxe, genotype-by-environment, stability, reaction-norm, multi-environment-trials, genomic-prediction, mega-environment]
---

# p5m2 · Genotype × Environment Interaction and Stability

> One sentence: the ranking of genotypes is not fixed — a line that wins in Oregon can lose in Florida — so a prediction that ignores genotype-by-environment interaction predicts an average that may describe no real field, and modelling G×E (shared *and* environment-specific marker effects) is what makes a prediction deployable across the environments it actually has to win in.

## Learning objectives
- **understand:** read a multi-environment trial table and write the model that separates the genotype main effect, the environment main effect, and the genotype-by-environment (G×E) interaction.
- **understand:** distinguish a genotype's mean performance from its stability, and explain a ranking change across environments as G×E rather than noise.
- **apply:** estimate and visualize G×E for a real MET dataset — interaction terms, a reaction-norm plot, or a stability statistic / GGE biplot.
- **analyze:** choose between a shared-marker-effect model and one with environment-specific marker effects for a stated deployment goal across a target population of environments, and say what cross-validation scheme would actually test that goal.

## Prerequisites
- [[p5m1-breeding-pipelines-crossing-selection-cycles-field-trials|p5m1 · Breeding Pipelines: Crossing, Selection Cycles, Field Trials]] — you need the breeding cycle and the "gain per unit time, deployed across environments" frame before G×E means anything operational.
- [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability]] — you must already hold P = G + E (and that variance partitions into components) before you add the *interaction* term G×E to it.

---

## ① Concrete Experience — *do this first, before reading*
Get one real multi-environment trial in front of you — the same genotypes evaluated at several locations — and look for a flipped ranking with your own eyes, before any theory. Use a public MET dataset (e.g. a published wheat or maize multi-location yield trial; exact dataset is yours, but it must be *real* multi-environment data with the same lines across sites).

- **Try:** Pick about 8–12 genotypes that were grown in at least 3 environments. Make a table: rows = genotypes, columns = environments, cells = mean yield (or your trait). Now draw an *interaction plot*: one line per genotype, x-axis = environment (ordered low to high by environment mean), y-axis = the genotype's performance. Look at whether the lines stay parallel or whether they *cross*.
- **Predict before you check:** Write down a guess, before reading, for *each* of these:
  1. If you rank the genotypes by their performance in environment 1, then re-rank them in environment 3, will the order be the same? Find the genotype whose rank changes the most.
  2. Two genotypes have the *same average* across all environments. Does that mean they are equally good choices for a breeder? What would distinguish them?
  3. If you fit a single genomic prediction model on all environments pooled together and report one accuracy, which genotype will that model serve *worst* — the one whose lines are flat, or the one whose line crosses the others?

Commit your interaction plot and your three predictions to a `session` note *before* you read the G×E definition.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against in a `session` note (answer them in your own words; do not just read them):
- Some of your genotype lines were roughly parallel and some crossed. Describe, *without* using the phrase "G×E," what is physically different about a genotype whose line crosses others versus one whose line stays parallel. What is the crossing telling you about which line is "best"?
- You found a genotype whose rank changed across environments. If a breeder selected the top line in environment 1 and released it region-wide, what happens in the environment where its line dips? Whose problem is that — the model's, the breeder's, or the genotype's?
- Take the two genotypes with the same mean but different stability. Write down, in your own words, what *stability* is measuring that the mean is not. Is a more stable line always the better choice? When would a breeder deliberately want the *un*stable, high-responsive one?
- You imagined one pooled model reporting one accuracy. Where does the G×E "go" when you pool all environments and ignore it — does it vanish, or does it get dumped into some other term? What does that do to the prediction for a line whose ranking flips?
- Here is the deployment question: a "target population of environments" is the set of fields a variety must actually perform across. If genotype rankings change across that set, what does it even *mean* to have an accurate prediction "for the target population"? Reason toward what a model would have to represent to be deployable there.

The seam to mine: the gap between "predict each genotype's value" (one number per line) and "predict each genotype's value *in each environment*, including how its ranking moves" — and the realization that only the second is deployable across a region.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **Burgueño, de los Campos, Weigel & Crossa (2012),** "Genomic Prediction of Breeding Values when Modeling Genotype × Environment Interaction using Pedigree and Dense Molecular Markers," *Crop Science* 52:707–719 — the first multi-environment GBLUP that models G×E through genetic correlations between environments. Read for *why* borrowing information across correlated environments beats a pooled model. *(VERIFY link.)*
- **López-Cruz, Crossa et al. (2015),** "Increased Prediction Accuracy in Wheat Breeding Trials Using a Marker × Environment Interaction Genomic Selection Model," *G3* 5(4):569–582 — the marker × environment (M×E) model that *decomposes each marker's effect into a main effect shared across environments plus an environment-specific effect.* This is the literal "shared and environment-specific marker effects" in the module's core idea — read it closely. *(VERIFY link.)*
- **Jarquín, Crossa et al. (2014),** "A reaction norm model for genomic selection using high-dimensional genomic and environmental data," *Theoretical and Applied Genetics* 127:595–607 — G×E as the interaction between markers and *environmental covariates* (weather, soil), so the model can predict into new environments described by their covariates. Read for the reaction-norm idea: a genotype's value is a *function* of the environment, not a constant. *(VERIFY link.)*
- **Stability-analysis classics** for the descriptive side: **Finlay & Wilkinson (1963)** regression of each genotype on the environmental mean (the slope is a stability/responsiveness parameter), and **Yan et al. (2000),** "Cultivar evaluation and mega-environment investigation based on the GGE biplot," *Crop Science* 40:597–605 — how breeders carve a region into mega-environments where rankings are roughly stable. *(VERIFY links.)*
- **CIMMYT G×E materials** (Excellence in Breeding platform / CIMMYT repository) for how a real program handles G×E across its target population of environments. *(VERIFY links are current.)*

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note; the core idea below splits into these atomic claims):
- *Genotype-by-environment interaction means the ranking of genotypes changes across environments, so the genotype that performs best is not a fixed property of the genotype but depends on where it is grown.* (e.g. slug `gxe-means-the-ranking-of-genotypes-changes-across-environments-so-best-is-environment-dependent`)
- *A genotype's mean performance and its stability are distinct: two genotypes with the same average across environments can differ in how much their performance swings with the environment, and stability is what the mean cannot tell you.* (e.g. slug `mean-performance-and-stability-are-distinct-properties-of-a-genotype`)
- *Modelling G×E as shared plus environment-specific marker effects is what makes a genomic prediction deployable: a marker can have a main effect across all environments and an extra effect specific to one environment, and capturing both predicts ranking changes a pooled model averages away.* (e.g. slug `modelling-gxe-as-shared-plus-environment-specific-marker-effects-makes-a-prediction-deployable`)
- *A genomic prediction must be evaluated against a target population of environments, not a single pooled accuracy: deployability is whether the model ranks genotypes correctly across the set of fields a variety must actually perform in.* (e.g. slug `a-genomic-prediction-must-be-evaluated-against-a-target-population-of-environments-not-pooled-accuracy`)

**Vocabulary** (define inline as you meet it, do not memorize cold): genotype-by-environment interaction (G×E), main effect (genotype, environment), interaction term, crossover vs non-crossover interaction, reaction norm, stability, Finlay–Wilkinson regression / regression slope, AMMI, GGE biplot, mega-environment, target population of environments (TPE), multi-environment trial (MET), marker × environment (M×E) interaction, shared vs environment-specific marker effect, genetic correlation between environments, environmental covariate, cross-environment / leave-one-environment-out cross-validation.

## ④ Active Experimentation — *apply it*
- **Exercise:** On your MET dataset, fit two genomic prediction models and compare them *honestly*. Model 1: pool all environments, one set of marker effects (shared only). Model 2: a G×E model that lets marker effects have both a shared main effect and an environment-specific component (the M×E decomposition), or a reaction-norm model using an environmental covariate. Then evaluate not with random hold-out but with **leave-one-environment-out** cross-validation — train on some environments, predict genotypes in an environment the model never saw — because that mirrors deploying into the target population of environments. Report, per environment, whether Model 2 actually recovers ranking changes Model 1 misses. You are testing deployability, not pooled R².
- **Mini-project hook:** these are the models and the cross-environment validation the phase project is built on. Carry them into [[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]]: the project's verdict is whether a G×E-aware prediction, judged by genetic gain per unit time (from p5m1) *and* deployability across environments (from here), beats a pooled model — and where it does not.
- **Predict-then-check:** Before you run it, predict for which environment the G×E model will help *most* — and tie that prediction to your interaction plot from step ①. (Hint: where do the lines cross hardest?) Then run leave-one-environment-out and check. Did the model help most where the rankings flipped, as you predicted? Write the answer, including any environment where the simpler pooled model won and why.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Read a multi-environment trial table and write the model that separates the genotype main effect, the environment main effect, and the G×E interaction. (retrieval)
- [ ] Explain a crossover ranking change to someone who thinks "the best line is the best line everywhere," and distinguish a genotype's mean from its stability. (transfer)
- [ ] Given a deployment goal across a target population of environments, choose between a shared-effects model and one with environment-specific marker effects, and name the cross-validation scheme that would actually test deployability. (transfer to a new case)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p5m2-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[phase-5-crop-breeding-domain|Phase 5 · Crop Breeding Domain Knowledge]] (phase exit → project)
- Project: [[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]]
- Phase: [[phase-5-crop-breeding-domain|Phase 5 · Crop Breeding Domain Knowledge]]
- Prerequisite: [[p5m1-breeding-pipelines-crossing-selection-cycles-field-trials|p5m1 · Breeding Pipelines: Crossing, Selection Cycles, Field Trials]]
- Prerequisite: [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability]]
