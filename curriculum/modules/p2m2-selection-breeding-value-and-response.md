---
type: module
phase: 2
module: p2m2
title: "Selection: Breeding Value and Response"
weeks: "Weeks 3–4"
status: not-started
prerequisites: [p2m1]
objectives:
  - "understand: define breeding value as the sum of the average effects of an individual's alleles"
  - "understand: distinguish selection differential (S) from response to selection (R)"
  - "apply: use the breeder's equation R = h²S to predict the change in mean over one generation"
  - "analyze: explain why accurate breeding-value prediction, not phenotype, determines long-run genetic gain"
readings:
  - "Falconer & Mackay (1996), Introduction to Quantitative Genetics, 4th ed. — the Selection chapters (Response and its prediction; Information from relatives) and Resemblance between relatives (learner's tentative Ch 8–12; numbering unverified)"
project: "[[p2-simulate-a-breeding-population|Simulate a Breeding Population]]"
question-bank: "[[p2m2-questions|P2M2 Question Bank]]"
review-due: null
tags: [quantitative-genetics, breeding-value, selection, breeders-equation, phase-2]
---

# p2m2 · Selection: Breeding Value and Response

> One sentence: selection works on phenotypes you can see, but it moves the population only through breeding values you cannot — and the breeder's equation tells you exactly how much of what you select for actually carries over.

## Learning objectives
- **understand:** Define an individual's breeding value as the sum of the average effects of the alleles it carries — the part of its merit that is transmissible.
- **understand:** Distinguish the *selection differential* `S` (how much better the selected parents are than the population) from the *response* `R` (how much the offspring mean shifts).
- **apply:** Use the breeder's equation `R = h²S` to predict the mean shift after one generation of truncation selection.
- **analyze:** Argue why, given fixed selection intensity, the entire game reduces to predicting breeding values accurately.

## Prerequisites
- [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability]] — you must already hold that only the *additive* part of genetic variance transmits, and that `h² = Va/Vp`. The breeder's equation is that fact, turned into a prediction.

---

## ① Concrete Experience — *do this first, before reading*
Continue the simulator you started in p2m1 (or use its output). You have a population with known `Va`, `Ve`, and therefore a known true `h²`.

- **Try:** Apply *truncation selection*: keep the top 20% of individuals by phenotype as parents, discard the rest. Record the mean phenotype of the selected parents minus the population mean — that is your selection differential `S`. Now mate the selected parents at random, generate offspring, and measure the offspring mean minus the original population mean — that is the realized response `R`.
- **Predict before you check:** Before you generate the offspring, write down a number for `R`. If your selected parents are, say, 2.0 units above the mean and you set `h² = 0.5`, what response do you predict? Then write down *why* the offspring mean should fall short of the parents' selected mean at all.

Run it. Compare your predicted `R` to the realized `R`. Note the gap and whether it is bigger than run-to-run noise.

## ② Reflective Observation — *what did you notice?*
Journal against these in a `session` note. Write your answers before reading.

- Your selected parents were (say) 2.0 units above the mean, but the offspring came back only about 1.0 unit above. Roughly half of what you selected for "leaked away." Where did it go? Connect this to the variance partition from p2m1.
- You selected on *phenotype*. But the thing that actually passed to the offspring was something else. What is the name for "the heritable merit of an individual," and how is it different from both the phenotype and the genotypic value?
- Re-run with `h² = 0.1` and then `h² = 0.9`, same selection differential each time. How does the response scale? What does that say about the *meaning* of `h²` as a multiplier?
- Imagine you could rank parents not by their noisy phenotype but by their *true breeding value*. Would your response per generation go up or down for the same fraction selected? What does that imply about where the leverage in a breeding program actually is?

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **Falconer & Mackay (1996), *Introduction to Quantitative Genetics*, 4th ed.** — the **Selection** chapters (the one on *response and its prediction*, and the one on *information from relatives*) together with **Resemblance between relatives** for the breeding-value covariances. The learner has these tentatively as **Ch 8–12**; the chapter *numbering* in the 4th edition is unverified (the chapter *topics* are confirmed). Read for: the formal definition of breeding value via *average effects*, the derivation of `R = h²S`, the role of selection intensity `i` (the standardized form `R = i h² σ_P`), and accuracy of selection.

**Key concepts to convert into evergreen claims** (write each as its own atomic declarative-claim note, in your own words):
- *An individual's breeding value is the sum of the average effects of its alleles, and it — not the genotypic value or the phenotype — is what is transmitted to offspring.* — the central object of all of selection theory.
- *The breeder's equation `R = h²S` states that the response to selection per generation equals narrow-sense heritability times the selection differential.* — the workhorse prediction.
- *Because `R = h²S` holds the selection differential and heritability fixed, the lever a breeder actually controls is the accuracy with which breeding values are ranked, which is why accurate breeding-value prediction is the whole game.* — the bridge to BLUP and genomic prediction in [[p2m3-mixed-models-blup-and-relationship-matrices|p2m3]].
- *Response to selection shrinks the selection differential by exactly the heritable fraction, because only the additive component of a parent's superiority is expected to reappear in its offspring.* — restates the equation as a mechanism, linking back to p2m1.

**Vocabulary** (define inline as you meet it, do not memorize cold): breeding value (A), average effect of a gene substitution, selection differential (S), response (R), selection intensity (i), accuracy of selection (r), truncation selection, realized heritability.

## ④ Active Experimentation — *apply it*
- **Exercise:** Run your selection loop for 10 consecutive generations, re-selecting the top 20% each time. Each generation, log the realized `R` and the breeder's-equation prediction `h²S`. Plot the cumulative observed mean against the cumulative predicted mean. Then deliberately break it: hold `h²` constant in your formula but let true `Va` deplete as you select (it should, slowly). Watch the prediction and reality diverge and explain why.
- **Mini-project hook:** This selection loop is the second stage of [[p2-simulate-a-breeding-population|Simulate a Breeding Population]]. p2m1 gave you "generate phenotypes from variance components"; this module adds "select, mate, advance a generation, and check `R = h²S`." Keep `S`, predicted `R`, and realized `R` as logged columns — the project's headline figure is exactly this comparison.
- **Predict-then-check:** Before the 10-generation run, predict whether realized response per generation will stay constant, accelerate, or decay. Then run it and reconcile what you see with the equation (hint: what happens to `Va` under sustained directional selection?).

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] State the breeder's equation `R = h²S` and define each symbol. (retrieval)
- [ ] Define breeding value in one sentence without using the word "phenotype." (retrieval)
- [ ] Given `h²` and a selection differential, compute the predicted one-generation response, and explain why the response is smaller than the differential. (transfer)
- [ ] Explain to an ML colleague why "improve the model's ranking accuracy" is the same lever as "increase accuracy of selection," and why that raises `R`. (transfer to a new case)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p2m2-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Previous: [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability]]
- Next: [[p2m3-mixed-models-blup-and-relationship-matrices|p2m3 · Mixed Models, BLUP, and Relationship Matrices]]
- Project: [[p2-simulate-a-breeding-population|Simulate a Breeding Population]]
- Context: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
