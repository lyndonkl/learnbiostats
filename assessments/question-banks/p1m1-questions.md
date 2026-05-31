---
type: question-bank
module: p1m1
phase: 1
created: 2026-05-30
tags: [assessment]
---

# p1m1 · Question Bank

Probing questions for the `biostat-assessor` to draw from. Organized by Bloom level, ascending. The assessor never reveals answers first; it asks, waits, then probes the gap. "Answer sketches" below are for the assessor's grading only — they are not read to the learner.

Module: [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]]. Every question here is answerable from the module readings (OpenStax Biology 2e Ch 12–14, Ch 11 on meiosis; MITx 7.00x genetics units; Crash Course Biology #9–11).

Core claims under test:
1. A genotype at a locus is a pair of alleles, one from each parent; the `0/1/2` encoding counts copies of one designated allele.
2. A phenotype is a downstream function of genotype *and* environment, not a direct readout of the genotype.
3. Recombination during meiosis shuffles which alleles travel together into the next generation.
4. A marker physically near a causal variant tends to co-segregate with it, because recombination is rarer between close loci.

---

## remember (retrieval — can you recall the primitive?)

1. **Q:** Define *locus*, *allele*, and *genotype*. How do the three relate?
   *Answer sketch:* A locus is a fixed position on a chromosome; an allele is one of the alternative DNA sequences that can occupy that locus; a genotype (at one locus) is the specific pair of alleles an individual carries there, one on each homologous chromosome. Locus = address, allele = a value the address can hold, genotype = the actual pair held.

2. **Q:** A diploid individual is scored `0`, `1`, or `2` at a SNP. What is the integer counting, and what genotype does each value correspond to if `A` is reference and `a` is alternate?
   *Answer sketch:* It counts copies of the designated (here, alternate) allele. `0 = AA` (zero alternate copies, homozygous reference), `1 = Aa` (one copy, heterozygous), `2 = aa` (two copies, homozygous alternate). Must mention "two copies because diploid."

3. **Q:** State the difference between *homozygous* and *heterozygous*.
   *Answer sketch:* Homozygous = the two alleles at the locus are identical (`AA` or `aa`); heterozygous = the two alleles differ (`Aa`).

4. **Q:** What is recombination (crossing-over), and during which process does it occur?
   *Answer sketch:* The physical exchange of segments between homologous chromosomes during meiosis (prophase I), producing gametes whose chromosomes are mosaics of the two parental chromosomes. Must tie it to meiosis / gamete formation.

5. **Q:** State Mendel's law of segregation in one sentence.
   *Answer sketch:* The two alleles at a locus separate during gamete formation so that each gamete carries exactly one of them, and they reunite at fertilization.

## understand (explain in your own words)

1. **Q:** Why is a `1` (heterozygous) genuinely different from a `2` (homozygous alternate), even though both individuals "carry the variant"?
   *Answer sketch:* `1` carries one alternate and one reference allele; `2` carries two alternate alleles and zero reference. Different DNA content at the locus, different dosage of the variant, and they will transmit different allele mixes to offspring (a `1` passes the alternate to only half its gametes; a `2` passes it to all). "Carrying the variant" conflates presence with dosage.

2. **Q:** Explain why a phenotype is not a direct readout of the genotype. Give one concrete example.
   *Answer sketch:* Phenotype = f(genotype, environment), and often other loci too. Same genotype can yield different phenotypes in different environments, and different genotypes can yield the same phenotype. Example: a plant genetically capable of tall growth stays short under drought; hydrangea flower color shifts with soil pH at fixed genotype; identical-twin height differs with nutrition. Accept any genotype-fixed/environment-varies example.

3. **Q:** In your own words, how does recombination change which alleles are inherited together, compared to a world with no recombination?
   *Answer sketch:* Without recombination, an entire chromosome (the whole set of alleles on it) is transmitted as one indivisible unit, so combinations of alleles stay locked together forever. Recombination cuts and rejoins homologs so a gamete can carry a new mix — the maternal allele at locus 1 with the paternal allele at locus 2 — breaking up the original combinations and generating novel haplotypes.

4. **Q:** Mendel's law of independent assortment says genes assort independently. Why is that not literally true for every pair of genes?
   *Answer sketch:* Independent assortment holds for genes on different chromosomes (or far apart on the same one). Genes close together on the same chromosome are physically linked: they tend to be inherited together because recombination rarely falls between them, so they do *not* assort independently. This is the linkage exception (OpenStax Ch 13).

5. **Q:** Why does physical distance between two loci on a chromosome matter for how often they are inherited together?
   *Answer sketch:* A crossover must fall in the interval between two loci to separate them. The wider the interval, the more chances for a crossover, so distant loci are recombined apart more often; close loci almost always travel together because a crossover rarely lands in the tiny gap between them.

## apply (use it on a new, concrete case)

1. **Q:** Cross `Aa × Aa`. Predict the genotype proportions of the offspring *without* drawing a Punnett square, then justify the numbers.
   *Answer sketch:* 1/4 `AA` : 1/2 `Aa` : 1/4 `aa` (1:2:1 genotypic). Each parent transmits `A` or `a` with probability 1/2; the offspring genotype is the product of two independent draws. `AA` = ½·½, `aa` = ½·½, `Aa` = the two cross terms = 2·½·½ = ½. In `0/1/2` encoding: 25% are `0`, 50% are `1`, 25% are `2`.

2. **Q:** Cross `Aa × aa`. What are the offspring genotype and (if `A` is dominant for a trait) phenotype proportions?
   *Answer sketch:* Genotypes 1/2 `Aa` : 1/2 `aa`. The `aa` parent contributes only `a`; the `Aa` parent contributes `A` or `a` equally. If `A` is dominant, phenotypes are 1/2 dominant : 1/2 recessive (a classic testcross ratio).

3. **Q:** Here is one column of a genotype matrix for 6 individuals: `2, 0, 1, 1, 0, 2`. For each individual state the allele pair (reference `T`, alternate `C`), and identify which individuals are heterozygous.
   *Answer sketch:* `2 = CC`, `0 = TT`, `1 = TC`, `1 = TC`, `0 = TT`, `2 = CC`. Heterozygous = individuals 3 and 4 (the `1`s).

4. **Q:** Two loci sit 100 kb apart on the same chromosome; another pair sits 50 Mb apart on the same chromosome. Which pair is more likely to be inherited together in a gamete, and why?
   *Answer sketch:* The 100 kb pair. A crossover must occur between the two loci to separate them; the probability of a crossover scales with the genetic length of the interval, which (on average) scales with physical distance. 50 Mb gives roughly 500× more opportunity for a crossover, so those loci are separated far more often. The close pair co-segregates.

5. **Q:** A causal variant for a disease was *not* genotyped, but a marker 20 kb away was. The marker's alternate allele is found almost exclusively on chromosomes that also carry the disease allele. Can you say anything useful about an individual's disease risk from the marker alone?
   *Answer sketch:* Yes. Because the marker is so close to the causal variant, recombination has rarely separated them, so the marker allele co-segregates with the disease allele — it acts as a proxy/tag. An individual carrying the marker alternate allele is much more likely to also carry the (unmeasured) disease allele, so the marker is informative about risk even though it is not the cause. This is the seam that becomes LD in p1m3.

## analyze (take it apart; compare; find the assumption)

1. **Q:** A genotyping pipeline collapses each diploid genotype to a single integer `0/1/2`. What information is preserved and what is lost compared to writing out the two alleles and which parent each came from?
   *Answer sketch:* Preserved: the count of the designated allele (hence zygosity — homozygous vs heterozygous). Lost: *phase / parent-of-origin* — for a `1` you no longer know which physical chromosome (maternal vs paternal) carries the alternate allele, and across multiple loci you lose which alleles sit together on the same chromosome (the haplotype). For a single locus this rarely matters; across loci, the lost phase is exactly what haplotype/LD work in p1m3 has to reconstruct.

2. **Q:** Independent assortment and recombination both "shuffle alleles," yet they are not the same mechanism. Distinguish them.
   *Answer sketch:* Independent assortment is the random orientation of *different* homologous chromosome pairs at meiosis I — it reshuffles alleles on *different* chromosomes relative to each other. Recombination (crossing-over) is exchange *within* a homologous pair — it reshuffles alleles on the *same* chromosome. Both increase gamete diversity; only recombination can break up linkage between two loci that are on the same chromosome.

3. **Q:** Someone claims "the gene for height." Critique this phrasing using the genotype-environment idea and the idea that traits can be polygenic.
   *Answer sketch:* Two problems. (1) Phenotype = f(genotype, environment): height responds to nutrition, so no genotype fixes height. (2) Height is polygenic — many loci each contribute a small amount — so there is no single "height gene." The locus-allele-genotype machinery is per-locus; a complex trait is the summed downstream function of many genotypes plus environment. (Sets up quantitative genetics in Phase 2.)

4. **Q:** Why is recombination, despite being a randomizing/mixing force, the *precondition* for marker-based prediction rather than its enemy?
   *Answer sketch:* It cuts both ways. Recombination over many generations is what *limits* how far the co-segregation between a marker and a causal variant extends — too much would erase the proxy relationship. But *limited* recombination over a short distance is exactly what *creates* the persistent local co-segregation that makes a nearby marker a usable tag. Prediction lives in the regime where recombination is slow enough locally to preserve marker-causal association but has scrambled distant loci. The mechanism (recombination is distance-dependent) is what makes proximity meaningful.

## evaluate / create (judge a tradeoff; design something)

1. **Q:** You want to find a marker that will reliably tag an unknown causal variant for the next several generations of a pedigree. Where on the chromosome should the marker be relative to the causal variant, and what is the tradeoff if you cannot place it perfectly?
   *Answer sketch:* As close as possible to the causal variant — minimizes the chance a crossover falls between them, so the marker-causal association survives more generations. Tradeoff: too far and recombination breaks the tag (a carrier of the marker may not carry the causal allele, and vice versa), eroding predictive value over generations; the further the marker, the faster the decay. Good answers note that "close" must be in genetic (recombination) distance, which only roughly tracks physical distance.

2. **Q:** Critique a study design that genotypes parents and offspring but assumes every offspring chromosome is a clean copy of one parental chromosome. What does this miss, and when does it matter most?
   *Answer sketch:* It ignores recombination: offspring chromosomes are mosaics, so an offspring can inherit the maternal allele at one locus and the paternal allele at a nearby locus on the "same" chromosome. It matters most when tracking multi-locus haplotypes or fine-mapping a causal region, where the recombination breakpoints are the whole point. For a single isolated locus the simplification is harmless; across loci it is wrong.

## Misconception traps
Common wrong mental models for this module, and the question that surfaces each:

- **Trap:** "The `0/1/2` integer is the trait value / the phenotype." → **surfacing question:** *If two individuals are both scored `1` at this locus, must they show the same trait? Why or why not?* (Forces genotype ≠ phenotype, and dosage ≠ outcome.)
- **Trap:** "`1` and `2` are interchangeable — both 'have the variant.'" → **surfacing question:** *Write out the actual allele pair for a `1` and for a `2`. What will each pass to half its offspring?* (Surfaces dosage and transmission differences.)
- **Trap:** "Genes always assort independently (Mendel's second law is universal)." → **surfacing question:** *Two genes are 50 kb apart on the same chromosome. Do they assort independently? What did Mendel's experiments not test for?* (Surfaces linkage as the exception.)
- **Trap:** "Recombination is rare/exotic and can be ignored." → **surfacing question:** *Over many generations, what happens to a marker 50 Mb from a causal variant — does it stay associated? Why?* (Surfaces recombination as the routine, distance-dependent eraser of association.)
- **Trap:** "Phenotype is genetically determined / the environment is noise." → **surfacing question:** *Name one genotype whose phenotype flips depending on the environment.* (Surfaces phenotype = f(G, E).)
- **Trap:** "A marker that isn't the cause can't tell us anything about the trait." → **surfacing question:** *The causal variant wasn't measured, but a marker 10 kb away was. Is the marker useless? Why might it still predict risk?* (Surfaces co-segregation / tagging.)

## Transfer prompt
One question that forces the concept into an unfamiliar context (crop-breeding scenario).

- **Q:** A barley breeder has a landrace line carrying an unmapped allele that confers resistance to a fungal disease, but resistance can only be scored after a costly field infection trial. The breeder genotypes a cheap SNP that sits very close to the resistance locus and finds that, across the breeding population, the SNP's alternate allele almost always appears on the same chromosome as the resistance allele. (a) Explain, using inheritance and recombination, why the breeder can now select disease-resistant plants at the seedling stage from a DNA test alone, without infecting them. (b) The breeder crosses the resistant line to a high-yielding susceptible line and selects on the SNP for ten generations. Predict what could eventually go wrong with using that SNP as the selection criterion, and what determines how fast it goes wrong.
   *Answer sketch:* (a) The SNP co-segregates with the resistance allele because they are physically close, so a crossover rarely separates them; a plant carrying the SNP alternate allele almost certainly inherited the linked resistance allele too. The cheap, early DNA marker therefore stands in for the expensive phenotype — marker-assisted selection. This is exactly the genotype-tags-an-unmeasured-causal-variant logic, applied to a crop. (b) Over generations recombination can occur between the SNP and the resistance locus, breaking the linkage in some lineages: eventually a plant may carry the SNP alternate allele but *not* resistance (or carry resistance without the SNP), so selecting on the SNP starts losing or wrongly keeping plants. How fast this happens depends on the genetic distance between SNP and resistance locus (closer = slower breakdown) and the number of generations/meioses (more meioses = more chances for a crossover). Strong answers explicitly connect (b) to phenotype = f(G,E) caveats too (field-scored resistance also depends on environment), and note this is the crop analogue of LD decay coming in p1m3.

## Links
- Module: [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]]
- Next bank: [[p1m2-questions|P1M2 Question Bank]]
- Phase: [[phase-1-genetics-for-data-scientists|Phase 1 · Genetics for Data Scientists]]
