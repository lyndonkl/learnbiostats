---
type: module
phase: 5
module: p5m1
title: "Breeding Pipelines: Crossing, Selection Cycles, Field Trials"
weeks: "Weeks 1–3"
status: not-started
prerequisites: [p2m2, p4m1]
objectives:
  - "understand: draw a breeding program as a cycle — crossing, selection, multi-stage multi-environment field testing, recycling parents — and locate where genomic prediction is inserted."
  - "understand: read the breeder's equation with cycle length in the denominator and explain genetic gain per unit time."
  - "apply: compute and compare genetic gain per year for a phenotypic scheme versus a genomic-selection scheme that shortens the cycle."
  - "analyze: argue why two models with identical prediction accuracy can deliver different genetic gain, and identify which lever (accuracy, intensity, cycle time, deployability) dominates."
readings:
  - "Crossa et al. (2017), 'Genomic Selection in Plant Breeding: Methods, Models, and Perspectives,' Trends in Plant Science 22(11):961–975 — history, principles, why GS accelerates the breeding cycle. VERIFY link."
  - "CIMMYT / CGIAR Excellence in Breeding, 'Basics of Genomic Selection' toolbox (excellenceinbreeding.org) — video syllabus on accuracy, intensity, and cycle-time reduction, with CIMMYT/IRRI/ICRISAT case studies. VERIFY link is current."
  - "CIMMYT case studies on GS implementation in the Global Wheat Program and tropical maize program (see reading list for exact citations). VERIFY links."
project: "[[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]]"
question-bank: "[[p5m1-questions|P5M1 Question Bank]]"
review-due: null
tags: [breeding, breeding-cycle, crossing, selection, field-trials, multi-environment-trials, genomic-selection, genetic-gain]
---

# p5m1 · Breeding Pipelines: Crossing, Selection Cycles, Field Trials

> One sentence: a breeding program is a *cycle*, and a genomic prediction model earns its keep not by being accurate but by letting that cycle turn faster — so the figure of merit is genetic gain per unit time, and an accuracy number with no cycle attached to it is an orphan.

## Learning objectives
- **understand:** draw a breeding program as a cycle — crossing → selection → multi-stage, multi-environment field testing → recycling the best as parents — and point to exactly where genomic prediction is inserted and what decision it replaces.
- **understand:** read the breeder's equation with cycle length (L) in the denominator and explain genetic gain *per unit time*, not per cycle.
- **apply:** compute and compare genetic gain per year for a conventional phenotypic scheme versus a genomic-selection scheme that selects on predicted breeding values before phenotyping.
- **analyze:** argue why two models with identical prediction accuracy can deliver different genetic gain, and identify which lever — accuracy, selection intensity, genetic variance, or cycle time — is doing the work.

## Prerequisites
- [[p2m2-selection-breeding-value-and-response|p2m2 · Selection, Breeding Value, and Response]] — you must already hold the breeder's equation (R = i·h²·σ, or R = i·r·σ_A in its prediction form) before you can put cycle length under it.
- [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1 · Classical Genomic Prediction: GBLUP and RR-BLUP]] — you need to already know what a "predicted breeding value" from a genomic model *is* before you ask where in the program you would act on one.

---

## ① Concrete Experience — *do this first, before reading*
Get one real breeding program's cycle in front of you and trace it as a loop, before you study any theory. Use a published description of an actual program — e.g. the CIMMYT spring bread wheat or tropical maize scheme described in the Excellence in Breeding materials or a CIMMYT implementation paper (exact source is yours, but it must be a *real* program, not a textbook cartoon).

- **Try:** On one page, draw the program as a closed loop. Mark every stage: making crosses, advancing generations (e.g. selfing/inbreeding or recurrent cycles), the *stages* of field trials (early, small-plot, few locations → late, large-plot, many locations), and the arrow where the best lines are recycled as parents for the next round. Beside each stage write two numbers: roughly how many entries are at that stage, and roughly how long it takes (months or seasons). Then find, in the program's description, the single point where a genomic prediction is (or could be) used — and circle it.
- **Predict before you check:** Write down a guess, before reading, for *each* of these:
  1. Add up your stage durations once around the loop. How many *years* is one full breeding cycle in this program?
  2. If a genomic model let you skip or shorten one stage of phenotyping, which stage would you cut, and by how many years would the cycle shrink?
  3. Suppose someone hands you a new model that is 5% more accurate but changes nothing about the cycle length. And suppose a different change keeps accuracy the same but halves the cycle. Which one increases genetic gain *per year* more — and why?

Commit your drawing and your three predictions to a `session` note *before* you read the breeder's-equation answer.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against in a `session` note (answer them in your own words; do not just read them):
- You drew a loop, not a line. What does the *recycling* arrow — best progeny become next round's parents — do that a one-pass pipeline does not? Why does that make *time per loop* the thing that compounds?
- Look at where the time actually goes in your loop. Is it in making crosses, or in *waiting for plants to grow and be measured across seasons and sites*? If a prediction can substitute for some of that waiting, what exactly is it substituting for?
- You circled where prediction is inserted. What decision does the model actually make there — which lines to *advance*, which to *discard*, which to *recycle as parents*? Is that decision about a number, or about a ranking?
- Write the breeder's equation from memory. Now divide the right-hand side by L, the years per cycle. Walk through what happens to gain-per-year if you (a) raise accuracy a little, (b) cut L in half. Which move is in the *numerator* and which is in the *denominator*, and why does the denominator move hit harder?
- Here is the uncomfortable one: if a model's accuracy went *down* slightly but it let you run two cycles a year instead of one, could genetic gain still go *up*? Reason it out with your equation before you decide.

The seam to mine: the gap between "a good model is an accurate model" and "a good model is one that makes the program deliver more genetic gain per year" — and the realization that the dominant route to the second is shortening the cycle, not perfecting the prediction.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- Crossa et al. (2017), **"Genomic Selection in Plant Breeding: Methods, Models, and Perspectives,"** *Trends in Plant Science* 22(11):961–975 — read the sections on the history and principle of GS and, especially, *why* GS accelerates the breeding cycle (selecting on predicted breeding values before, or instead of, full phenotyping). This is the anchor for the whole module's core idea. *(VERIFY current link.)*
- **CIMMYT / CGIAR Excellence in Breeding — "Basics of Genomic Selection"** toolbox (excellenceinbreeding.org): the video syllabus framing GS through the three levers it can pull — selection accuracy, selection intensity, and **cycle-time reduction** — with case studies from CIMMYT, IRRI, and ICRISAT. Watch for how they decompose genetic gain. *(VERIFY the link is current; CIMMYT hosts and occasionally reorganizes this platform.)*
- **CIMMYT implementation case studies** in the Global Wheat Program and the tropical maize program — read at least one for *where* in a real pipeline GS enters (e.g. predicting and advancing lines at an early yield-trial stage) and what it bought the program in gain per year. *(VERIFY exact citations and links in the reading list.)*

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note; the core idea below splits into these atomic claims):
- *Genetic gain in a breeding program is gain per unit time, not per cycle: writing the breeder's equation with cycle length in the denominator (ΔG/year = i·r·σ_A / L) shows that shortening the cycle, L, raises gain even when accuracy r is unchanged.* (e.g. slug `genetic-gain-is-gain-per-unit-time-so-shortening-the-cycle-raises-gain-even-at-fixed-accuracy`)
- *Genomic selection pays off mainly by shortening the breeding cycle: selecting on predicted breeding values before phenotyping lets more selection cycles run per year, so its leverage is on L in the denominator, not on r in the numerator.* (e.g. slug `genomic-selection-pays-off-mainly-by-shortening-the-breeding-cycle`)
- *A prediction model is valuable only insofar as it improves genetic gain per unit time, not for its per-se accuracy: two models with identical accuracy can deliver very different gain depending on the cycle length and selection scheme they enable.* (e.g. slug `a-prediction-model-is-valuable-only-insofar-as-it-improves-genetic-gain-per-unit-time-not-per-se-accuracy`)
- *A breeding program is a closed cycle, not a one-pass pipeline: the best progeny are recycled as parents, so reducing time per cycle compounds gain across rounds in a way a single accurate prediction cannot.* (e.g. slug `a-breeding-program-is-a-closed-cycle-so-reducing-time-per-cycle-compounds-gain`)

**Vocabulary** (define inline as you meet it, do not memorize cold): cross / crossing scheme, segregating generation, inbreeding / selfing, recurrent selection, selection cycle, cycle length (L), selection intensity (i), selection accuracy (r), additive genetic standard deviation (σ_A), genetic gain (ΔG), breeder's equation, yield trial / multi-stage testing, early-generation vs late-generation testing, multi-environment trial (MET), training population, predicted breeding value, rapid-cycling / fast generation advance, recycling parents.

## ④ Active Experimentation — *apply it*
- **Exercise:** Build a tiny two-scenario gain calculator. Scenario A is a conventional phenotypic scheme: write down its selection intensity, accuracy, additive SD, and cycle length L_A. Scenario B is a genomic-selection scheme that selects on predicted breeding values *before* full phenotyping, shortening the cycle to L_B < L_A — but possibly at a *lower* accuracy r_B (because you act earlier, on a prediction, not a season's data). Compute ΔG/year = i·r·σ_A / L for both. Then find the break-even: how low can r_B fall before B is no longer worth the time it saves? You are not after a precise number — you are building the reflex that accuracy and time trade against each other in one quantity.
- **Mini-project hook:** the evaluation frame you just built — *genetic gain per unit time*, not pooled accuracy — is the lens the phase project judges every model through. Carry it into [[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]], and use it now to decide the project's cross-validation scheme: design the validation so it mirrors how a breeder would actually *use* the prediction (predict not-yet-phenotyped lines and advance them), not just a random hold-out that inflates accuracy.
- **Predict-then-check:** Before you compute, predict whether halving L while dropping r from 0.6 to 0.5 raises or lowers ΔG/year. Then plug in the numbers. Were you right about the direction, and by how much? Write the answer, and write what it would take (how big an accuracy drop) to reverse it.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Draw a breeding program as a closed cycle, label crossing, selection, multi-stage multi-environment trials, and the recycling-of-parents arrow, and mark where genomic prediction is inserted and what decision it makes. (retrieval)
- [ ] Write the breeder's equation with cycle length in the denominator and use it to explain, to someone who thinks "better model = higher accuracy," why shortening the cycle can beat raising accuracy. (transfer)
- [ ] Given two models with the same accuracy but different cycle implications, decide which delivers more genetic gain per year and justify it. (transfer to a new case)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p5m1-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[p5m2-genotype-x-environment-interaction-and-stability|p5m2 · Genotype × Environment Interaction and Stability]]
- Project: [[p5-predict-trait-performance-across-environments|Predict Trait Performance Across Environments]]
- Phase: [[phase-5-crop-breeding-domain|Phase 5 · Crop Breeding Domain Knowledge]]
- Prerequisite: [[p2m2-selection-breeding-value-and-response|p2m2 · Selection, Breeding Value, and Response]]
- Prerequisite: [[p4m1-classical-genomic-prediction-gblup-and-rr-blup|p4m1 · Classical Genomic Prediction: GBLUP and RR-BLUP]]
