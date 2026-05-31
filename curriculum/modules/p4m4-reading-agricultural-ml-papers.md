---
type: module
phase: 4
module: p4m4
title: "Reading Agricultural ML Papers"
weeks: "Weeks 7–8"
status: not-started
prerequisites: [p4m3]
objectives:
  - "understand: reconstruct a genomic-prediction paper's cross-validation design and its baseline from the methods section alone."
  - "apply: produce a structured source-note summary for each paper read, capturing trait, dataset, CV design, baseline, metric, and result."
  - "analyze: detect relatedness leakage across folds and missing/weak baselines that inflate a paper's reported accuracy."
readings:
  - "Read 1–2 papers per week. Search terms: \"genomic prediction wheat\", \"genomic prediction maize\", \"blueberry genomic selection\", \"genotype phenotype prediction\". Use the PubMed and arXiv search tools to find current papers."
  - "Anchor / exemplar papers: Crossa et al. (2017), Trends in Plant Science 22(11):961–975 (review); Azodi et al. (2019), G3 9(11):3691–3702 (multi-species benchmark); Ferrão, L.F.V., Amadeu, R.R., Benevenuto, J., de Bem Oliveira, I. & Munoz, P.R. (2021). Genomic Selection in an Outcrossing Autotetraploid Fruit Crop: Lessons From Blueberry Breeding. Frontiers in Plant Science 12: 676326."
project: "[[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]"
question-bank: "[[p4m4-questions|P4M4 Question Bank]]"
review-due: null
tags: [genomic-prediction, critical-reading, cross-validation, leakage, literature, wheat, maize, blueberry]
---

# p4m4 · Reading Agricultural ML Papers

> One sentence: a genomic-prediction paper lives or dies on two things that hide in its methods section — its cross-validation design and its baseline — and this module trains you to read for those first, so a sophisticated-sounding method with a leaky CV or no honest baseline never fools you.

## Learning objectives
- **understand:** reconstruct a genomic-prediction paper's cross-validation design and its baseline from the methods section alone.
- **apply:** produce a structured source-note summary for each paper read, capturing trait, dataset, CV design, baseline, metric, and result.
- **analyze:** detect relatedness leakage across folds and missing or weak baselines that inflate a paper's reported accuracy.

## Prerequisites
- [[p4m3-deep-learning-on-genomic-data|p4m3 · Deep Learning on Genomic Data]] — you have now built and benchmarked the methods yourself, so you can read other people's claims as a practitioner who knows where the bodies are buried.

---

## ① Concrete Experience — *do this first, before reading deeply*
Find your own papers before you are told what to think about them. Use the PubMed and arXiv search tools with the terms: `"genomic prediction wheat"`, `"genomic prediction maize"`, `"blueberry genomic selection"`, `"genotype phenotype prediction"`. Pull 3–4 recent papers across at least two of those crops.

- **Try:** for each paper, do *not* read it linearly yet. Instead, hunt directly for two things in the methods: (1) **the cross-validation design** — how were folds made? Random lines? Whole families held out? Across environments? Across years? (2) **the baseline** — what did the proposed method beat? GBLUP? Nothing? A weaker version of itself? Then read the headline accuracy number and the figure that reports it.
- **Predict before you check:** Write down a guess, *before* reading the discussion, for each of these:
  1. For each paper, is the reported accuracy *believable* given its CV design — or could related individuals be split across train and test folds, leaking relatedness?
  2. Does the proposed method beat a *real* GBLUP baseline, or only beat "no prediction" / a hobbled comparison?
  3. If the folds were made stricter (hold out whole families or whole environments), would you expect the reported accuracy to go up, stay, or drop — and by roughly how much?

Commit your predictions to a `session` note *before* you read each paper's discussion and limitations.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against in a `session` note (answer them in your own words; do not just read them):
- You went straight to the CV design and the baseline before the abstract's claims. How did doing that change which papers impressed you? Did any glossy result deflate once you saw how the folds were built?
- Relatedness leakage: if a line's full sib sits in the training fold while the line is in the test fold, the model can "predict" it partly by recognizing the family. Explain why that inflates accuracy without the method being any better at predicting a genuinely *new* family. Connect this back to p4m1's claim that genomic prediction *is* a relatedness model — leakage exploits the very thing that makes prediction work.
- A method that beats *nothing* (or beats only a deliberately weak comparison) tells you almost nothing. Why is GBLUP the right baseline to demand, and what should you conclude about a paper that omits it?
- Wheat, maize, and blueberry are bred very differently (inbred lines vs. hybrids vs. an outcrossing autotetraploid). How does the breeding structure change what a fair cross-validation should hold out, and what "predicting a new individual" even means in each?
- Across the papers you read, what is the single most common way an inflated accuracy gets reported? Name the pattern so you can spot it instantly next time — and so you avoid it in your own benchmark.

The seam to mine: the gap between reading a paper for *what it claims* and reading it for *whether its CV design and baseline let that claim mean anything*.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **Your own 1–2 papers per week**, found via the PubMed and arXiv tools on the search terms above, spanning wheat, maize, and blueberry. For each, produce a structured summary `source` note (see the source frontmatter in conventions §6) — this is a STUB you fill while reading, not pre-written: capture trait, species, dataset (n lines, n markers), CV design, baseline, metric (predictive ability / accuracy / RMSE), the result, and your one-line verdict on whether the CV and baseline make the result trustworthy.
- **Crossa et al. (2017), *Trends in Plant Science* 22(11):961–975** — re-read as a map of the field's methods and how serious reviews frame cross-validation and prediction scenarios.
- **Azodi et al. (2019), *G3* 9(11):3691–3702** — re-read as a model of an *honest* multi-method, multi-species benchmark with consistent CV; use it as the template a good paper should resemble.
- **Ferrão et al. (2021), *Frontiers in Plant Science* 12:676326** — a blueberry genomic-selection paper in an outcrossing autotetraploid crop. Read for how CV is designed in a crop where ploidy and outcrossing complicate relatedness, and for how the authors frame what a realistic prediction target is.

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note):
- *A genomic-prediction paper is judged on its cross-validation design and its baseline: a method that beats nothing, or beats only a weak comparison, reports an empty result however sophisticated it sounds.* (e.g. slug `a-genomic-prediction-paper-is-judged-on-its-cross-validation-design-and-its-baseline`)
- *Relatedness leakage across cross-validation folds inflates reported genomic-prediction accuracy, because splitting related individuals between train and test lets the model exploit family resemblance instead of predicting genuinely new genotypes.* (e.g. slug `relatedness-leakage-across-cv-folds-inflates-reported-genomic-prediction-accuracy`)
- *GBLUP is the baseline a new genomic-prediction method must beat; a paper that omits a strong classical baseline has not shown its method is worth anything.* (e.g. slug `gblup-is-the-baseline-a-new-genomic-prediction-method-must-beat`)
- *A fair cross-validation must match the prediction scenario the method claims — predicting new lines, new families, or new environments each require holding out that unit, and using the wrong split inflates accuracy.* (e.g. slug `a-fair-cross-validation-must-hold-out-the-unit-the-method-claims-to-predict`)

**Vocabulary** (define inline as you meet it, do not memorize cold): cross-validation scenario (CV1/CV2/CV0, leave-family-out, leave-environment-out), data leakage, relatedness leakage, baseline model, predictive ability vs. accuracy (accuracy = predictive ability / sqrt(h²)), training population, target population, prediction scenario, inflated estimate, generalization gap.

## ④ Active Experimentation — *apply it*
- **Exercise:** Build a one-page **paper-summary template** (the structured fields above) and use it on every paper this module. Then write a short synthesis across the papers: which crops/traits report the highest accuracies, and how much of that ranking is real signal versus differences in CV strictness? Maintain the habit — a `source` note per paper — so this becomes a durable reading practice, not a one-off.
- **Mini-project hook:** apply this exact critical standard to *your own* [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]. Audit your benchmark's CV for relatedness leakage and confirm it has a real GBLUP baseline — hold your work to the bar you now hold the literature to. Cite 1–2 of the papers you summarized in your benchmark write-up.
- **Predict-then-check:** Pick one paper that reports a high accuracy under a lenient (random-line) CV. Predict how much lower the accuracy would be under a stricter leave-family-out or leave-environment-out split. If the paper reports both scenarios, check your prediction against its own numbers; if not, note it as a missing analysis and reason about the likely direction. Write the answer.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Open an unfamiliar genomic-prediction paper and, from the methods alone, state its CV design and its baseline. (retrieval)
- [ ] Explain how relatedness leakage inflates accuracy and how a stricter split (leave-family/environment-out) would change the reported number. (transfer)
- [ ] Produce a structured summary note for a paper and end it with a justified verdict on whether the result is trustworthy. (transfer)
- [ ] Audit your own benchmark for leakage and a missing baseline using the same standard. (transfer)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p4m4-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[phase-5-crop-breeding-domain|Phase 5 · Portfolio and Communication]]
- Project: [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]
- Phase: [[phase-4-ml-for-genomic-prediction|Phase 4 · Machine Learning for Genomic Prediction]]
- Prerequisite: [[p4m3-deep-learning-on-genomic-data|p4m3 · Deep Learning on Genomic Data]]
