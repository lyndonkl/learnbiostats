---
type: phase
phase: 5
title: "Crop Breeding Domain Knowledge"
duration: "4–6 weeks"
status: not-started
modules: [p5m1, p5m2]
project: "[[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]]"
competencies:
  - "Map a breeding program as a cycle — crossing, selection, multi-stage field testing — and locate where a genomic prediction model is actually inserted."
  - "Explain why genomic selection's payoff is genetic gain per unit time, not per-se prediction accuracy, and reason about it through the breeder's equation with cycle length in the denominator."
  - "Read a multi-environment trial as the data structure it is, and name the genotype, environment, and genotype-by-environment terms a model has to separate."
  - "Distinguish a genotype's mean performance from its stability, and explain why a line that wins in one environment can lose in another."
  - "Choose and justify a G×E modelling strategy (shared vs environment-specific marker effects, reaction norms) for deploying a prediction across a target population of environments."
tags: [curriculum, phase]
---

# Phase 5 · Crop Breeding Domain Knowledge

> One sentence: this phase turns your models from orphan accuracy numbers into tools that serve an actual breeding cycle — you learn how breeders make decisions, so the question stops being "is my prediction accurate?" and becomes "does my prediction make the program deliver more genetic gain, faster, across the environments it has to win in?"

## Why this phase

By the end of Phase 4 you could fit a genomic prediction model and report its accuracy. That is necessary and nowhere near sufficient. A breeder does not buy accuracy; a breeder buys genetic gain per year delivered into farmers' fields across a region. An R² of 0.6 is worthless if it predicts the wrong thing (per-se accuracy instead of gain per unit time) or predicts it in the wrong place (one environment when the variety must perform across many). This phase repairs both gaps.

The first module rebuilds the breeding pipeline as a *cycle* and shows where prediction is inserted — and that its leverage comes almost entirely from shortening the cycle, letting more rounds of selection run per year, not from being marginally more accurate per round. The second module confronts the hardest fact in the domain: genotype rankings change across environments (G×E). A model that ignores G×E predicts an average that may describe no real field. Learning to model shared and environment-specific effects is what makes a prediction *deployable* across a target population of environments.

The phase runs the same Kolb arc inside every module: encounter the phenomenon first (trace a real program's cycle, watch rankings flip across sites), reflect on what surprised you, only then read to build the concept, and finally apply it on the data that feeds the phase project.

## Modules

1. [[p5m1-breeding-pipelines-crossing-selection-cycles-field-trials|p5m1 · Breeding Pipelines: Crossing, Selection Cycles, Field Trials]] (Weeks 1–3) — crossing schemes, selection cycles, field-trial design, multi-environment testing, and where genomic selection shortens the cycle. The pipeline as a cycle whose throughput, not its per-round accuracy, is the prize.
2. [[p5m2-genotype-x-environment-interaction-and-stability|p5m2 · Genotype × Environment Interaction and Stability]] (Weeks 4–6) — G×E interaction, reaction norms, multi-environment trial models, stability analysis, and G×E in genomic prediction. Why a winning line in one place loses in another, and how to model it so a prediction is deployable.

## Project

The phase converges on one experiential lab:

- [[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]] — take a real multi-environment trial dataset, build genomic predictions that respect both the breeding cycle and G×E, and evaluate them the way a breeder would: by projected genetic gain per unit time and by deployability across a target population of environments, not by a single pooled accuracy number.

Each module's Active Experimentation feeds a piece of this project: p5m1 frames the evaluation around genetic gain per unit time and fixes the cross-validation scheme to mirror how a breeder would actually use the prediction; p5m2 builds the G×E-aware models (shared vs environment-specific effects) and the cross-environment validation that decides whether a prediction can be deployed.

## Exit criteria

You exit Phase 5 when, from memory and on a program or dataset you have not seen before, you can:

- [ ] Draw a breeding program as a cycle — crossing → selection → multi-stage multi-environment field testing → recycling parents — and point to exactly where genomic prediction is inserted and what decision it replaces or accelerates.
- [ ] State the breeder's equation, put cycle length in the denominator of genetic gain, and use it to explain why genomic selection pays off mainly by shortening the cycle rather than by raising accuracy.
- [ ] Argue why two models with identical pooled prediction accuracy can deliver very different genetic gain, and name what besides accuracy matters (cycle time, selection intensity, deployability across environments).
- [ ] Read a multi-environment trial table and write the model that separates genotype main effect, environment main effect, and the genotype-by-environment interaction.
- [ ] Distinguish a genotype's mean from its stability, explain a ranking change across environments as G×E, and choose between a shared-effects model and one with environment-specific marker effects for a stated deployment goal — and say what cross-validation scheme would actually test that goal.

**Mastery target:** `proficient` on the core claims of both modules; `create` on the phase project.

## Links
- Roadmap: [[roadmap|Learning Roadmap]]
- Prerequisite phase: [[phase-4-ml-for-genomic-prediction|Phase 4 · Genomic Prediction and Selection]]
- Project: [[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]]
