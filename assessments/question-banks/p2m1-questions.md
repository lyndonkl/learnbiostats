---
type: question-bank
module: p2m1
phase: 2
created: 2026-05-30
tags: [assessment]
---

# p2m1 · Question Bank

Probing questions for the `biostat-assessor` to draw from, for [[p2m1-phenotype-vs-genotype-sources-of-variation-and-heritability|p2m1 · Phenotype vs Genotype: Sources of Variation and Heritability]]. Organized by Bloom level, ascending. The assessor never reveals answers first; it asks, waits, then probes the gap. "Answer sketches" below are for the assessor's grading only — they are not read to the learner.

Two claims sit at the center of this module and every question should ladder back to one of them: **(A)** heritability is a property of a particular population in a particular environment, not of a trait in the abstract; and **(B)** narrow-sense heritability is the fraction of phenotypic variance that is *additive*, and it — not broad-sense — is what predicts response to selection.

## remember (retrieval — can you recall the primitive?)
1. **Q:** Write the two variance partitions used in this module: the partition of phenotypic variance, and the partition of genetic variance. Name each term.
   *Answer sketch:* `Vp = Vg + Ve` (phenotypic = genetic + environmental). `Vg = Va + Vd + Vi` (genetic = additive + dominance + interaction/epistatic). Full marks only if they name all five components, not just write symbols.
2. **Q:** Give the formula for broad-sense heritability and for narrow-sense heritability.
   *Answer sketch:* `H² = Vg/Vp`; `h² = Va/Vp`. The denominator is identical; the numerator differs. Watch for swapping the two or putting `Va` in the broad-sense.
3. **Q:** In a parent–offspring (mid-parent regression) design, what quantity does the additive genetic covariance between a parent and its offspring equal?
   *Answer sketch:* ½ Va. (The offspring shares half its additive value with each parent.) This is the hook into why the mid-parent regression slope estimates h².

## understand (explain in your own words)
1. **Q:** Two heritabilities share the same denominator. So what, conceptually, is the *entire* difference between H² and h²? Why does that single difference matter?
   *Answer sketch:* The whole difference is what counts as "genetic" in the numerator: H² uses all of Vg (additive + dominance + epistatic), h² uses only the additive part Va. It matters because only the additive part transmits predictably parent to offspring, so h² is the one tied to selection response (claim B).
2. **Q:** Explain, without using the word "ratio," why the same trait can have a high heritability in one population and a low one in another even though the underlying biology is identical.
   *Answer sketch:* Heritability is local to a population-in-an-environment (claim A). Narrowing genetic diversity (e.g., an inbred panel) shrinks Va, lowering h²; making the environment more uniform shrinks Ve hence Vp, raising h². Same genes, different *variances among those individuals*, different number.
3. **Q:** What does the slope of the offspring-on-mid-parent regression line actually measure — total genetic merit, or only part of it? Why does the line not have slope 1?
   *Answer sketch:* It estimates h² (the additive fraction), not H². The slope is below 1 because dominance and epistatic deviations, plus environmental noise, do not transmit; offspring regress toward the population mean by exactly the non-additive + non-genetic portion.

## apply (use it on a new, concrete case)
1. **Q:** A population has Va = 30, Vd = 10, Ve = 60 (arbitrary units). Compute H² and h². Which would you use to predict selection response, and what is the numeric gap between them?
   *Answer sketch:* Vg = 40, Vp = 100. H² = 0.40, h² = 0.30. Use h² = 0.30 for selection response (claim B). The 0.10 gap is the dominance variance that inflates H² but does not transmit as breeding value.
2. **Q:** You fit a mid-parent regression and get a slope of 0.45. A colleague reports h² = 0.45 "for this trait." Reconstruct exactly what was estimated and state the one caveat that must accompany the number.
   *Answer sketch:* The mid-parent slope estimates h² directly (Cov(offspring, mid-parent)/Var(mid-parent) ≈ Va/Vp). The caveat: it is h² *for this population in this environment* (claim A) — not a universal constant for the trait.
3. **Q:** You re-run a simulation holding the genetic architecture fixed but tripling Ve. Predict the direction of change in h² and in the parent–offspring slope, and say why the *true* additive genetics did not move.
   *Answer sketch:* Vp rises (Ve up), so h² = Va/Vp falls and the slope falls with it. Va is unchanged — the genes are identical; only the denominator inflated. This is claim A in action: environment moved the number, not the biology.

## analyze (take it apart; compare; find the assumption)
1. **Q:** A trait is under strong genetic control yet shows near-zero heritability in a particular population. Is this a contradiction? Take it apart.
   *Answer sketch:* No contradiction. Heritability is about *variance among individuals*. If the population is genetically near-uniform for the trait, Va ≈ 0, so whatever variation exists is environmental and h² ≈ 0 — even though the trait's development is heavily gene-dependent. "Genetic control" (developmental) and "heritability" (variance partition) are different claims.
2. **Q:** Hold Ve fixed and add a large dominance component to Vg. Predict what happens to H², to h², and to the mid-parent slope, and explain the divergence.
   *Answer sketch:* H² rises (Vg up via Vd). h² barely moves and the mid-parent slope barely moves, because dominance variance is not additive and does not transmit through the parent–offspring covariance (which tracks ½Va). The divergence between H² and the slope is the operational signature that broad-sense overstates what selection can move.
3. **Q:** Why is the *additive* component privileged? What is special about it relative to dominance and epistatic variance that makes it the transmissible part?
   *Answer sketch:* Additive value = sum of the average effects of an individual's alleles, and alleles (not genotypes) are what is sampled into a gamete. Dominance is an interaction *within* a locus's genotype and epistasis *between* loci; both are broken up by Mendelian segregation and recombination at meiosis, so they do not reliably reappear in offspring. Only the average allelic effects carry over.

## evaluate / create (judge a tradeoff; design something)
1. **Q:** A reviewer states: "Height is 80% heritable, so environment barely matters for height." Critique this in two distinct ways.
   *Answer sketch:* (1) The estimate is population-and-environment-specific (claim A); it does not generalize across populations or to new environments, and high h² in a uniform environment can collapse in a variable one. (2) High heritability does not mean a trait is unresponsive to environmental change — h² describes variance partitioning among individuals, not malleability; the population mean can still shift dramatically with environment (e.g., secular trends in height). High h² ≠ "environment irrelevant."
2. **Q:** Design a minimal simulation that would convince a skeptical ML colleague that "the heritability of a trait" is not a well-defined number. What do you vary, what do you hold fixed, and what do you report?
   *Answer sketch:* Generate phenotypes from fixed true allelic effects (fixed "biology"). Then (i) sweep Ve across a range and (ii) sweep genetic diversity (allele-frequency spread / degree of inbreeding) across a range. Hold the generative effect sizes fixed throughout. Report estimated h² (and the mid-parent slope) at each cell. Show the same underlying genetics yielding a wide range of h² values — demonstrating claim A directly.

## Misconception traps
Common wrong mental models for this module, and the question that surfaces each:
- **Trap: heritability is an intrinsic constant of the trait (like a melting point).** → **surfacing question:** "If we moved this exact population into a far more uniform environment, would the heritability change? Why or why not?" (Correct: yes — Ve falls, h² rises; the trait's biology is unchanged.)
- **Trap: high heritability means the trait can't be changed by environment / low heritability means genes don't matter.** → **surfacing question:** "Average height has risen markedly over a century while remaining ~80% heritable. How can both be true?" (Correct: h² partitions variance among individuals in a context; it says nothing about how the mean responds to a changed environment.)
- **Trap: broad-sense heritability is the right predictor of selection response because it captures 'all the genetics'.** → **surfacing question:** "You add a big dominance component. H² jumps; does your one-generation selection response jump with it?" (Correct: no — only Va transmits; h², not H², drives response.)
- **Trap: the parent–offspring regression slope estimates total genetic merit (H²).** → **surfacing question:** "In your high-dominance run, did the mid-parent slope track H² or h²? Why?" (Correct: h² — the covariance is ½Va, blind to dominance.)
- **Trap: environmental variance changes the slope of the offspring-on-parent line.** → **surfacing question:** "Adding environmental noise — does it tilt the regression line or just fatten the scatter around it, and what does that do to the slope estimate?" (Correct: it inflates Vp, which lowers the slope; it is not 'just scatter' — it changes h² through the denominator.)

## Transfer prompt
One question that forces the concept into an unfamiliar crop-breeding scenario.
- **Q:** A maize breeder measures grain yield in a diverse, open-pollinated landrace grown across rain-fed farmer fields and estimates h² = 0.25. A second team measures the *same trait* in a panel of highly related elite inbred lines grown in a single irrigated, fertilized research station and reports h² = 0.65. A funder concludes "yield became more heritable; the second program found better genetics." Diagnose what is actually going on, predict which program's heritability would better predict selection response *within its own panel*, and explain why neither number transfers to the other context.
   *Answer sketch:* Two different population-in-environment contexts, so two different (and non-comparable) heritabilities — not a change in the trait (claim A). The elite-station h² is higher mainly because Ve is much smaller (uniform, controlled environment shrinks Vp) and possibly because relatedness structure alters the variance among individuals; it is not evidence of "better genetics" and within tightly related inbreds Va can actually be reduced. Each h² predicts response *only within its own panel and environment* (R = h²S applies locally). Neither transfers: moving the elite material to rain-fed farmer fields would inflate Ve and pull its realized heritability — and its predicted response — back down. The funder conflated a variance ratio in one context with a property of the trait.
