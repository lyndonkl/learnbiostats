---
type: module
phase: 1
module: p1m2
title: "Population Genetics: Allele Frequencies, HWE, Drift, Selection"
weeks: "Weeks 2–3"
status: not-started
prerequisites: [p1m1]
objectives:
  - "understand: why allele frequency, not the individual genotype, is the state variable that describes a population."
  - "understand: what Hardy–Weinberg equilibrium predicts and why it serves as the no-evolution null model."
  - "apply: compute allele and genotype frequencies from a genotype file and test a locus against Hardy–Weinberg expectations."
  - "analyze: predict the direction in which drift, selection, and population structure perturb genotype frequencies away from the HWE null."
readings:
  - "Graham Coop, Population and Quantitative Genetics (free notes, UC Davis) — cooplab.github.io/popgen-notes"
  - "Joseph Felsenstein, Theoretical Evolutionary Genetics (free PDF, UW GENOME 562) — felsenst.github.io/pgbook/pgbook.pdf"
project: "[[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]"
question-bank: "[[p1m2-questions|P1M2 Question Bank]]"
review-due: null
tags: [population-genetics, allele-frequency, hardy-weinberg, drift, selection, population-structure]
---

# p1m2 · Population Genetics: Allele Frequencies, HWE, Drift, Selection

> One sentence: a prediction model trained on individuals is really learning about a *population*, and the population's state is captured not by any one genotype but by allele frequencies — so you need the frequency view and the Hardy–Weinberg null before you can tell signal (real biology) from artefact.

## Learning objectives
- **understand:** why allele frequency, not the individual genotype, is the state variable that describes a population.
- **understand:** what Hardy–Weinberg equilibrium predicts and why it serves as the no-evolution null model.
- **apply:** compute allele and genotype frequencies from a genotype file and test a locus against Hardy–Weinberg expectations.
- **analyze:** predict the direction in which drift, selection, and population structure perturb genotype frequencies away from the HWE null.

## Prerequisites
- [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]] — you must already hold that a genotype is a pair of alleles at a locus and that the `0/1/2` encoding counts allele copies, because frequencies are computed by summing those counts across individuals.

---

## ① Concrete Experience — *do this first, before reading*
- **Try:** Take a single column (one locus) from a genotype table — say 200 individuals scored `0/1/2`. Count how many are `0`, how many `1`, how many `2`. From those three counts, write down two different numbers:
  1. the *genotype frequencies* (proportion of individuals that are `0`, `1`, `2`); and
  2. the *allele frequency* of the alternate allele (total alternate-allele copies ÷ total allele copies = `(n1 + 2·n2) / (2N)`).
- **Predict before you check:**
  1. You now have an alternate-allele frequency, call it *p*. Without any further biology, predict how many of the 200 individuals you'd *expect* to be heterozygous (`1`). Write a number and the reasoning behind it.
  2. Two different populations both have alternate-allele frequency *p = 0.3*. Must they have the same genotype frequencies? Guess yes/no before reading.
  3. If the observed heterozygote count is far *below* your prediction, list every reason you can imagine for the shortfall.

Record these in a `session` note before reading. Prediction #1 is the Hardy–Weinberg expectation in disguise; #3 is the list of forces the rest of the module names.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against (answer them; do not just read them):
- You started from 200 individual genotypes but ended up describing the locus with a single number *p*. What information did you throw away, and why might *p* still be the more useful descriptor of the population?
- Your heterozygote prediction implicitly assumed something about how the two alleles in each individual got paired. What did you assume about mating and about how the parents' alleles combined?
- For prediction #2, did the same *p* force the same genotype frequencies — or could a population have the same *p* but far fewer heterozygotes? What kind of population would that be?
- Look at your list from prediction #3. Group the reasons: which are about *who mates with whom*, which are about *some genotypes surviving better*, and which are about *the sample actually being two populations mixed together*?

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- Graham Coop, **Population and Quantitative Genetics** (free course notes, UC Davis; HTML at cooplab.github.io/popgen-notes, PDF releases on the GitHub repo): allele and genotype frequencies, Hardy–Weinberg, and the chapter on genetic drift. This is the primary text for the module.
- Joseph Felsenstein, **Theoretical Evolutionary Genetics** (free PDF, University of Washington GENOME 562; felsenst.github.io/pgbook/pgbook.pdf): the Hardy–Weinberg and selection treatments, for a more formal derivation when you want the mathematics behind a claim Coop states.

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words, one claim per note):
- *Allele frequency, not the individual genotype, is the state variable of a population.* (You can predict the population's behaviour over generations from frequencies; you cannot from any single genotype.)
- *Hardy–Weinberg equilibrium gives the genotype frequencies (p², 2pq, q²) expected under random mating with no evolutionary forces acting.*
- *Hardy–Weinberg is the null model: a locus that deviates from HWE points to selection, non-random mating, drift, or population structure — or to a genotyping error.*
- *Genetic drift is the change in allele frequency caused purely by finite-population sampling, and its effect is larger in smaller populations.*
- *Population structure (an unrecognised mix of subpopulations with different allele frequencies) inflates apparent homozygosity and creates HWE deviations — the Wahlund effect.* (Optional fourth claim; the one that bites hardest in later GWAS work.)

**Vocabulary** (define inline as you meet it): allele frequency, genotype frequency, Hardy–Weinberg equilibrium, random mating, inbreeding, fixation, genetic drift, effective population size, selection coefficient, fitness, population structure / stratification, Wahlund effect, chi-square goodness-of-fit test.

## ④ Active Experimentation — *apply it*
- **Exercise:** For the same locus from your Concrete Experience, compute the HWE-expected genotype counts from *p* (expected `0` = `p²·N` for the reference homozygote, etc.), then run a chi-square goodness-of-fit test of observed vs expected counts. Decide whether this locus is consistent with HWE.
- **Mini-project hook:** this is Step 2 of [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]. In the project you will compute allele frequencies and an HWE test across *every* locus in a real dataset and look at the distribution of p-values — markers that fail HWE wholesale are often genotyping artefacts, which is exactly the kind of judgment a data scientist must make before modelling.
- **Predict-then-check:** Take your real or simulated population and *combine* it with a second population that has a very different allele frequency at the same locus. Predict what happens to the heterozygote count and the HWE test in the merged sample, then compute it. (This is the Wahlund effect; it previews why uncorrected population structure breaks association studies in Phase 3+.)

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Compute an allele frequency from genotype counts and state why it, not the genotype, is the population's state variable. (retrieval)
- [ ] Write the Hardy–Weinberg genotype frequencies from an allele frequency and explain what assumptions they rest on. (retrieval)
- [ ] Given an observed genotype count table, carry out an HWE goodness-of-fit test and interpret the result. (transfer)
- [ ] Name three forces that push a locus off HWE and predict the direction each pushes (e.g. structure → fewer heterozygotes). (transfer)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p1m2-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Previous: [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]]
- Next: [[p1m3-intro-genomics-snps-sequencing-genotyping-ld|p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD]]
- Project: [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]
- Phase: [[phase-1-genetics-for-data-scientists|Phase 1 · Genetics for Data Scientists]]
- Question bank: [[p1m2-questions|P1M2 Question Bank]]
