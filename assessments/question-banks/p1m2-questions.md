---
type: question-bank
module: p1m2
phase: 1
created: 2026-05-30
tags: [assessment]
---

# p1m2 · Question Bank

Probing questions for the `biostat-assessor` to draw from. Organized by Bloom level, ascending. The assessor never reveals answers first; it asks, waits, then probes the gap. "Answer sketches" below are for the assessor's grading only — they are not read to the learner.

Module: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics]]. Every question here is answerable from the module readings (Graham Coop, *Population and Quantitative Genetics*, cooplab.github.io/popgen-notes — HWE and drift chapters; Joseph Felsenstein, *Theoretical Evolutionary Genetics*, for the HWE and selection derivations).

Core claims under test:
1. Allele frequency, not the individual genotype, is the state variable of a population.
2. Hardy–Weinberg equilibrium gives the genotype frequencies (p², 2pq, q²) expected under random mating with no evolutionary forces.
3. HWE is the null model: deviation points to selection, non-random mating, drift, population structure, or genotyping error.
4. Drift is allele-frequency change from finite-population sampling; larger in smaller populations.
5. Population structure inflates apparent homozygosity (the Wahlund effect) and creates HWE deviations.

---

## remember (retrieval — can you recall the primitive?)

1. **Q:** Given counts of genotypes `0`, `1`, `2` (homozygous reference, heterozygous, homozygous alternate) for N individuals, write the formula for the alternate-allele frequency.
   *Answer sketch:* p = (n₁ + 2·n₂) / (2N), where n₁ is the count of heterozygotes, n₂ the count of homozygous-alternate, and 2N the total number of allele copies (diploid). Equivalent: sum of the `0/1/2` codes divided by 2N.

2. **Q:** Write the three Hardy–Weinberg genotype frequencies in terms of allele frequencies p and q.
   *Answer sketch:* For the two homozygotes and the heterozygote: p² (reference homozygote), 2pq (heterozygote), q² (alternate homozygote), with p + q = 1, so p² + 2pq + q² = 1.

3. **Q:** List the assumptions Hardy–Weinberg equilibrium rests on.
   *Answer sketch:* Random mating; no selection; no mutation (negligible); no migration/gene flow; infinite (very large) population so no drift; (often) discrete non-overlapping generations. Acceptable: "random mating + no evolutionary forces acting."

4. **Q:** Define genetic drift.
   *Answer sketch:* Change in allele frequency between generations due purely to random sampling of which gametes/individuals contribute to the next generation in a finite population. No selection involved — it is sampling noise.

5. **Q:** What statistical test does the module use to compare observed genotype counts against Hardy–Weinberg expectations, and what does each side of the comparison contain?
   *Answer sketch:* A chi-square goodness-of-fit test. Observed = the actual counts of `0/1/2`; expected = N·p², N·2pq, N·q² computed from the sample allele frequency. The test statistic sums (observed − expected)²/expected across the three genotype classes; large values indicate deviation from HWE.

## understand (explain in your own words)

1. **Q:** Why is allele frequency, not any single individual's genotype, the right "state variable" for describing a population?
   *Answer sketch:* A population evolves by changing the *proportions* of alleles over generations; you can project frequency forward under drift/selection/HWE from p alone, but a single genotype tells you nothing about the population's composition or trajectory. Frequency is a sufficient summary of the population state at a locus (under HWE it even regenerates the genotype frequencies); the genotype is one realization. It is the difference between describing a coin by "p(heads)" versus by one flip.

2. **Q:** Two populations both have alternate-allele frequency p = 0.3. Must they have the same genotype frequencies? Explain.
   *Answer sketch:* No. The same p is consistent with many genotype distributions. Only *under HWE* does p = 0.3 force (0.49, 0.42, 0.09) for (`0`,`1`,`2`). A population with inbreeding or hidden structure can have the same p = 0.3 but far fewer heterozygotes and more homozygotes. Same allele frequency, different genotype frequencies — which is exactly why HWE is a *testable* null, not an identity.

3. **Q:** Explain *why* HWE serves as a null model rather than a description of reality. What does a deviation buy you?
   *Answer sketch:* HWE is what you'd see if *nothing* evolutionary were happening (random mating, no selection/drift/migration/structure). Real populations rarely satisfy all assumptions exactly, but that is the point: by stating the no-evolution expectation precisely, any deviation becomes a detectable signal. A locus off HWE flags that *something* — selection, assortative mating/inbreeding, drift, structure, or a genotyping artefact — is acting. The null gives you a baseline to subtract.

4. **Q:** Why does genetic drift have a larger effect in a small population than a large one?
   *Answer sketch:* Drift is sampling error, and sampling error shrinks with sample size. Each generation draws a finite number of gametes; in a small population the realized allele frequency can swing far from the parental p just by chance (like a few coin flips), while in a large population the law of large numbers keeps the next generation's frequency close to p. The variance of the frequency change scales like p(1−p)/(2Nₑ), so smaller Nₑ → bigger swings, faster fixation/loss.

5. **Q:** In your own words, what is the Wahlund effect and why does it look like "too few heterozygotes"?
   *Answer sketch:* If a sample is secretly two subpopulations with different allele frequencies pooled together, each subpopulation may be in HWE internally, but the *pooled* sample has fewer heterozygotes than HWE predicts from the pooled mean p. Heterozygosity is a concave (downward-curving) function of p, so the average of the subpopulation heterozygosities is below the heterozygosity at the average p (Jensen's inequality). The mixture manufactures apparent excess homozygosity → an HWE deviation that is really hidden structure, not biology at the locus.

## apply (use it on a new, concrete case)

1. **Q:** In 200 genotyped individuals you observe 98 `0`, 84 `1`, 18 `2`. Compute the alternate-allele frequency p, then the HWE-expected counts of each genotype.
   *Answer sketch:* p = (84 + 2·18)/(2·200) = (84+36)/400 = 120/400 = 0.30; q = 0.70. Expected counts: `0` = q²? — careful with labeling: here `0` is homozygous reference (frequency of reference allele = 0.70). Using p = alt freq = 0.30: expected `2` (alt-homozygous) = p²·N = 0.09·200 = 18; expected `1` (het) = 2pq·N = 0.42·200 = 84; expected `0` (ref-homozygous) = q²·N = 0.49·200 = 98. Observed = expected here, so the locus sits squarely on HWE. (The clean numbers are intentional — a good learner notices the fit is exact.)

2. **Q:** Same N = 200 and same p = 0.30, but now you observe 110 `0`, 60 `1`, 30 `2`. Without finishing the full chi-square, is the heterozygote count above or below HWE expectation, and what direction of cause does that suggest?
   *Answer sketch:* Expected het = 84; observed = 60, a *deficit* of heterozygotes (and excess of both homozygotes). Heterozygote deficit points to inbreeding/non-random mating, population structure (Wahlund), or a genotyping artefact (e.g., a deletion or null allele miscalled as a homozygote). It does *not* point to balancing selection (which would *raise* heterozygotes). Strong answers name at least two candidate causes and flag genotyping error as a routine suspect.

3. **Q:** A locus shows a strong *excess* of heterozygotes relative to HWE. Give two biologically and one technically distinct explanations.
   *Answer sketch:* Biological: (1) overdominance / balancing selection favoring heterozygotes; (2) negative assortative / disassortative mating. Technical: paralogous sequences or two genomic regions collapsed onto one position so that nearly everyone is called heterozygous (a common array/sequencing artefact). The assessor should accept "outbreeding/recent admixture at the F1 generation" as another biological route.

4. **Q:** You have a real genotype dataset and run an HWE chi-square test at *every* locus, getting a p-value per locus. A cluster of loci has extremely small HWE p-values. As a data scientist about to fit a model, what do you do and why?
   *Answer sketch:* Treat wholesale HWE failure primarily as a *quality-control flag*: such markers are often genotyping artefacts (bad clustering, paralogs, deletions) rather than interesting biology, so the standard move is to filter/flag them before downstream modelling. But not blindly — real selection or structure can also drive deviations, so note that an HWE filter in a structured/selected sample can discard true signal. Right answer: filter likely-artefact loci, but interpret HWE deviation in light of known structure, not as automatically "error."

5. **Q:** Predict the effect on (a) the heterozygote count and (b) the HWE test of pooling two populations that each have very different allele frequencies at the same locus.
   *Answer sketch:* (a) The pooled heterozygote count falls below what the pooled mean p predicts (Wahlund deficit). (b) The HWE goodness-of-fit test will reject — the pooled sample looks like it has a heterozygote deficit / homozygote excess — even though each subpopulation alone is in HWE. This is the structure-as-artefact lesson that previews why uncorrected stratification breaks association studies in Phase 3.

## analyze (take it apart; compare; find the assumption)

1. **Q:** Drift and selection both change allele frequencies over generations. How would you tell them apart from the *pattern* of change, not the mechanism?
   *Answer sketch:* Direction and reproducibility. Drift is directionless (a random walk): across independent replicate populations it pushes p up as often as down, with variance growing over time, and it is stronger in small populations. Selection is directional and reproducible: replicate populations under the same pressure move p the same way (toward the favored allele), the change is faster than drift alone predicts, and it is largely insensitive to population size (for strong selection). Comparing replicates / population sizes is the discriminator.

2. **Q:** HWE is stated for one locus and "no evolutionary forces." Yet a locus can be perfectly in HWE in a population that *is* evolving. How is that possible, and what does it tell you about the test's power?
   *Answer sketch:* HWE describes the relationship between allele and genotype frequencies *within one generation* under random mating; it is restored in a single generation of random mating even if allele frequencies changed last generation. So directional selection or migration that altered p can still leave the genotypes in HWE proportions for the *new* p. The test detects departures from random-mating proportions, not whether evolution is occurring — it is blind to forces (like steady drift or selection at modest strength) that don't disturb the within-generation genotype proportions. Limited power; HWE deviation is sufficient evidence of *something*, but HWE consistency is not evidence of *nothing*.

3. **Q:** Why is "allele frequency is the state variable" a stronger claim than "allele frequency is a useful summary"? What does the word *state* commit you to?
   *Answer sketch:* "State variable" means it is (under the model's assumptions) sufficient to predict the system's future: from p plus the model (HWE, drift variance, selection coefficient) you can project the next generation's allele and genotype frequencies without knowing any individual genotype. Calling it a state variable commits you to the claim that the population's future trajectory is a function of p (and Nₑ, s, etc.), not of which particular individuals carry which genotypes. The individual genotypes are realizations of the state, not the state.

4. **Q:** A reviewer says "this locus deviates from HWE, so there must be selection here." Identify the unstated assumption and give the most likely alternative explanation in a real dataset.
   *Answer sketch:* The unstated assumption is that the *only* way to deviate from HWE is selection — but non-random mating, drift, population structure (Wahlund), and especially genotyping error all produce deviations. In a real dataset the single most common cause of an HWE deviation at an isolated locus is a genotyping artefact (e.g., a null allele or a paralog), not selection. The reviewer has confused "HWE rejected" with one specific cause. (Connects to claim 3.)

## evaluate / create (judge a tradeoff; design something)

1. **Q:** You must set an HWE-filtering threshold for QC of a large SNP dataset before modelling. Argue for a sensible policy and name what each choice costs.
   *Answer sketch:* Reasonable policy: filter markers with very small HWE p-values (commonly applied within a single, homogeneous ancestry group, and often only to controls in a case-control design, since true association at a causal locus can perturb HWE in cases). Tradeoffs: too strict → discard real variants (including loci genuinely under selection or in structured samples), losing signal; too lax → keep genotyping-error markers that inject noise and false associations. Key design point: test HWE *within* ancestry strata, because structure alone causes deviations. Good answers tie the threshold to whether structure has been controlled.

2. **Q:** Design a minimal simulation to convince a skeptical data-scientist colleague that (a) drift is stronger in small populations and (b) pooling structured subpopulations fakes a heterozygote deficit. Sketch what you'd vary and what you'd plot.
   *Answer sketch:* (a) Drift: start many replicate populations at p = 0.5, simulate Wright–Fisher sampling for Nₑ ∈ {20, 200, 2000} over many generations; plot the spread (variance) of p across replicates vs generation — the small-Nₑ curves fan out and hit fixation/loss faster. (b) Wahlund: create two subpopulations in HWE with p = 0.2 and p = 0.8, pool them, compute observed vs HWE-expected heterozygotes for the pooled sample; show the heterozygote deficit and a rejected chi-square, then show each subpopulation alone passes. Bonus: vary the frequency gap and show the deficit grows with it. (This is the project's predict-then-check made explicit.)

## Misconception traps
Common wrong mental models for this module, and the question that surfaces each:

- **Trap:** "Same allele frequency ⇒ same genotype frequencies." → **surfacing question:** *Two populations both have p = 0.3. Could one have half as many heterozygotes as the other? What would that imply?* (Surfaces that HWE is the only thing that fixes genotype freqs from p.)
- **Trap:** "HWE is a law of nature / real populations are in HWE." → **surfacing question:** *Name three different reasons a real locus would fail HWE. Is failing HWE surprising?* (Surfaces HWE as an idealized null, not a description.)
- **Trap:** "An HWE deviation proves selection." → **surfacing question:** *A SNP fails HWE hard. Before you write 'selection,' what is the single most likely cause in a real genotyping dataset?* (Surfaces genotyping error / structure as the usual suspects.)
- **Trap:** "Drift and selection are basically the same 'force.'" → **surfacing question:** *You run 100 replicate populations under each. How do the outcomes differ between drift and selection?* (Surfaces directionless vs directional, size-dependence.)
- **Trap:** "Bigger samples make drift stronger / drift is about sample size." → **surfacing question:** *Does drift depend on how many individuals I genotyped, or on something about the population itself? Which N matters?* (Surfaces effective population size Nₑ vs sample size.)
- **Trap:** "A heterozygote deficit always means inbreeding." → **surfacing question:** *Your sample is two ancestries pooled together. Each is in HWE. What does the pooled heterozygosity look like, and is anyone inbred?* (Surfaces the Wahlund effect — structure, not inbreeding.)
- **Trap:** "Allele frequency and genotype frequency are the same thing." → **surfacing question:** *Write both for a locus where you observe 110, 60, 30. Which one is a single number and which is three?* (Surfaces the count-vs-proportion distinction.)

## Transfer prompt
One question that forces the concept into an unfamiliar context (crop-breeding scenario).

- **Q:** A maize breeding program maintains a "synthetic" variety meant to be an open-pollinated population in Hardy–Weinberg proportions. To save money one season, the program crosses only a small handful of the most vigorous plants and bulks their seed to plant next year's field. Separately, a technician later genotypes the field and finds, at many loci, far fewer heterozygotes than Hardy–Weinberg predicts from the loci's allele frequencies. (a) Using the population-genetics state-variable idea, explain why the breeder should be tracking allele frequencies across seasons rather than reasoning from a few standout plants' genotypes. (b) Give the two distinct population-genetics mechanisms that the "few founder plants" decision and the "field is actually two seed lots mixed" possibility would each produce, and say how the breeder could tell which one is driving the heterozygote deficit.
   *Answer sketch:* (a) The variety's future composition and response to selection are governed by its *allele frequencies*, the population state variable; a few vigorous plants are individual realizations and can mislead (their genotypes don't summarize the population or predict its trajectory, especially as drift acts). Tracking p per locus over seasons reveals drift, inadvertent selection, and structure that individual genotypes hide. (b) Two mechanisms: (i) **drift / bottleneck** — breeding from only a handful of plants is a tiny effective population size, so allele frequencies swing randomly and inbreeding rises, producing a real heterozygote deficit and loss of variation, larger because Nₑ is small; (ii) **Wahlund / structure** — if the field is two genetically distinct seed lots with different allele frequencies pooled together, the pooled sample shows a heterozygote deficit even though each lot is in HWE, with no actual inbreeding. To distinguish: genotype/keep the seed lots separately and test HWE within each (Wahlund disappears within a single lot but the bottleneck deficit persists); check whether the deficit is genome-wide and accompanied by overall reduced heterozygosity and shifted allele frequencies (drift/bottleneck) versus a structure signal (clustering, two-mode allele-frequency pattern); and trace seed provenance. Strong answers note both are detectable precisely *because* HWE provides the null to deviate from, and that genotyping error is a third routine candidate to rule out.

## Links
- Module: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics: Allele Frequencies, HWE, Drift, Selection]]
- Previous bank: [[p1m1-questions|P1M1 Question Bank]]
- Next bank: [[p1m3-questions|P1M3 Question Bank]]
- Phase: [[phase-1-genetics-for-data-scientists|Phase 1 · Genetics for Data Scientists]]
