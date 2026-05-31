---
type: module
phase: 2
module: p2m1
title: "Phenotype vs Genotype: Sources of Variation and Heritability"
weeks: "Weeks 1–2"
status: not-started
prerequisites: [p1m2]
objectives:
  - "understand: decompose phenotypic variance into genetic and environmental components, and genetic variance into additive, dominance, and interaction parts"
  - "understand: distinguish broad-sense (H²) from narrow-sense (h²) heritability by what variance each puts in the numerator"
  - "apply: estimate a heritability from a parent–offspring relationship in real or simulated data"
  - "analyze: explain why the same trait can have different heritabilities in different populations or environments"
readings:
  - "Falconer & Mackay (1996), Introduction to Quantitative Genetics, 4th ed. — chapters on Values and means, Variance, Resemblance between relatives, and Heritability (learner's tentative Ch 1–4; numbering unverified)"
project: "[[p2-simulate-a-breeding-population|Simulate a Breeding Population]]"
question-bank: "[[p2m1-questions|P2M1 Question Bank]]"
review-due: null
tags: [quantitative-genetics, heritability, variance-components, phase-2]
---

# p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability

> One sentence: before you can predict a breeding value, you have to know what fraction of what you measure is even heritable — and "heritability" turns out to be a property of a population, not of the trait.

## Learning objectives
- **understand:** Decompose phenotypic variance as `Vp = Vg + Ve`, and genetic variance as `Vg = Va + Vd + Vi` (additive, dominance, interaction/epistatic).
- **understand:** Tell broad-sense (`H² = Vg/Vp`) from narrow-sense (`h² = Va/Vp`) heritability by what each numerator contains.
- **apply:** Estimate a heritability from the resemblance between relatives (e.g. a parent–offspring regression) on real or simulated data.
- **analyze:** Explain why a single trait does not have "a heritability" — only a heritability *in this population, in this environment*.

## Prerequisites
- [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics]] — you need variance, covariance, and the slope of a regression to make any of this mean anything.

---

## ① Concrete Experience — *do this first, before reading*
Get your hands on a dataset where you can see parents and their offspring for one continuous trait. Two good options:

- Galton's classic parent–child height data (bundled in the R package `HistData` as `GaltonFamilies`, or downloadable as a plain CSV). Verify the exact dataset/package name when you load it — see gaps.
- Or skip the download entirely and **simulate** it, which previews the phase project: draw a true additive value for each parent, pass on half of it (plus a fresh draw) to each child, add environmental noise, and store parent and offspring phenotypes.

- **Try:** Plot offspring trait value against the mid-parent value (the average of the two parents). Fit a straight line. Write down the slope.
- **Predict before you check:** Before you look at the slope, commit to a number. If parents who are 1 unit above the population mean tend to have offspring that are *half* a unit above the mean, what slope do you expect? Now — what do you think that slope *is*, conceptually? Is it a fact about these particular families, or about something larger?

Keep the plot and your predicted-vs-actual slope; you will interrogate them in the next stage.

## ② Reflective Observation — *what did you notice?*
Journal against these in a `session` note. Answer them in writing before you read — the struggle is the point.

- Your offspring did *not* land exactly on the mid-parent line. They regressed toward the population mean. What part of "what the parents had" failed to transmit? Name the candidates.
- You added environmental noise in the simulation (or it is lurking in the real data). Does environmental noise change the *slope* of the offspring-on-parent line, or only the *scatter* around it? Reason it out before deriving it.
- Suppose you re-ran the experiment in a second environment that was far more uniform (every individual raised identically). Same genes, less environmental variance. What happens to the slope? What does that tell you about whether "heritability" is a fixed property of the trait?
- You split "what parents have" into a part that transmits cleanly and a part that does not. Which part do you think the slope of the offspring–parent line is actually measuring — total genetic merit, or only the cleanly transmitted piece?

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **Falconer & Mackay (1996), *Introduction to Quantitative Genetics*, 4th ed.** — the early variance-components core: the chapters titled **Values and means**, **Variance**, **Resemblance between relatives**, and **Heritability**. The learner has these tentatively as **Ch 1–4**; the chapter *numbering* in the 4th edition is unverified (the chapter *titles* above are confirmed). Read for: the genotypic-value model (a, d), the partition of `Vg` into `Va` and `Vd`, the definition of the *average effect of a gene substitution*, and how the parent–offspring covariance equals ½Va.

**Key concepts to convert into evergreen claims** (write each as its own atomic declarative-claim note, in your own words):
- *Heritability is a property of a particular population in a particular environment, not of a trait in the abstract.* — because both `Vg` and `Ve` (hence their ratio) shift when allele frequencies or the range of environments change.
- *Narrow-sense heritability is the fraction of phenotypic variance that is additive (`h² = Va/Vp`), whereas broad-sense heritability uses all genetic variance (`H² = Vg/Vp`).* — the numerator is the entire distinction.
- *It is narrow-sense heritability, not broad-sense, that predicts response to selection, because only the additive component is transmitted predictably from parent to offspring.* — this is the bridge to [[p2m2-selection-breeding-value-and-response|p2m2]].
- *Dominance and epistatic variance are real genetic variance that does not transmit as a parent's average merit, which is why broad-sense heritability overstates what selection can move.* — sharpens the contrast above.

**Vocabulary** (define inline as you meet it, do not memorize cold): genotypic value, additive value / breeding value, dominance deviation, average effect of an allele, `Va`, `Vd`, `Vi`, `Ve`, `Vp`, `H²`, `h²`, mid-parent regression.

## ④ Active Experimentation — *apply it*
- **Exercise:** Take your simulation from ① and turn the knobs. Hold the genetic architecture fixed and triple `Ve`; recompute `h²` and re-estimate it from the offspring–parent slope. Then hold `Ve` fixed and add a large dominance component to `Vg`; watch `H²` rise while the *narrow-sense* `h²` (and the parent–offspring slope) barely moves. Tabulate true `h²`, true `H²`, and your estimated slope-based `h²` for each setting.
- **Mini-project hook:** This is the variance-components engine of [[p2-simulate-a-breeding-population|Simulate a Breeding Population]]. The function you write here — "given `Va`, `Vd`, `Ve`, generate phenotypes and recover `h²`" — is the foundation the selection step in [[p2m2-selection-breeding-value-and-response|p2m2]] will sit on. Build it cleanly now.
- **Predict-then-check:** Before running the dominance-variance setting, predict whether the parent–offspring regression slope will track `H²` or `h²`. Then run it. If you guessed `H²`, find out why you were wrong — that misconception is the whole point of the module.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Write `Vp = Vg + Ve` and `Vg = Va + Vd + Vi`, and say in one line what each term is. (retrieval)
- [ ] State the difference between `H²` and `h²` by pointing only at their numerators. (retrieval)
- [ ] Explain to a skeptical ML colleague why "the heritability of height is 0.8" is an incomplete statement. (transfer)
- [ ] Predict, for a trait with high dominance variance, whether a parent–offspring regression recovers `H²` or `h²`, and justify it. (transfer to a new case)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p2m1-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[p2m2-selection-breeding-value-and-response|p2m2 · Selection: Breeding Value and Response]]
- Project: [[p2-simulate-a-breeding-population|Simulate a Breeding Population]]
- Context: [[phase-2-quantitative-genetics|Phase 2 · Quantitative Genetics]]
