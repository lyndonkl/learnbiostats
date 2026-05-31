---
type: module
phase: 1
module: p1m1
title: "DNA, Genes, and Inheritance"
weeks: "Week 1"
status: not-started
prerequisites: []
objectives:
  - "understand: how DNA, chromosomes, genes, loci, and alleles nest inside one another, and how a genotype relates to an observed phenotype."
  - "understand: how mutation introduces new alleles and how recombination shuffles existing alleles between generations."
  - "apply: read a genotype as a pair of alleles at a locus and predict offspring genotype proportions from a Mendelian cross."
  - "analyze: explain why a marker physically near a causal variant tends to be inherited together with it."
readings:
  - "OpenStax Biology 2e — Ch 14 DNA Structure and Function (openstax.org, free)"
  - "OpenStax Biology 2e — Ch 11 The Cellular Basis of Inheritance (meiosis, recombination)"
  - "OpenStax Biology 2e — Ch 12 Mendel's Experiments and Heredity; Ch 13 Modern Understanding of Inheritance (chromosomal theory, genetic linkage)"
  - "MITx 7.00x Introduction to Biology: The Secret of Life (edX, free audit) — genetics units"
  - "Crash Course Biology #9 Heredity; #10 DNA Structure and Replication; #11 DNA (YouTube)"
project: "[[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]"
question-bank: "[[p1m1-questions|P1M1 Question Bank]]"
review-due: null
tags: [genetics, dna, inheritance, mendel, recombination]
---

# p1m1 · DNA, Genes, and Inheritance

> One sentence: every column in a genotype matrix traces back to a position in DNA where individuals carry different alleles — so before modelling those columns you need to know what an allele, a locus, and a genotype actually are, and how inheritance moves them between generations.

## Learning objectives
- **understand:** how DNA, chromosomes, genes, loci, and alleles nest inside one another, and how a genotype relates to an observed phenotype.
- **understand:** how mutation introduces new alleles and how recombination shuffles existing alleles between generations.
- **apply:** read a genotype as a pair of alleles at a locus and predict offspring genotype proportions from a Mendelian cross.
- **analyze:** explain why a marker physically near a causal variant tends to be inherited together with it.

## Prerequisites
- None — this is the entry module of the phase. Comfort reading a small data table and running a short Python or R snippet is assumed.

---

## ① Concrete Experience — *do this first, before reading*
You will encounter genotype data as a grid of small integers long before any biology textbook makes that grid mean anything. Start there.

- **Try:** Open any small genotype table (the project will use a real public dataset; for now, hand-build one). Make six rows (individuals) and four columns (positions in the genome), filling each cell with one of `0`, `1`, or `2`. Example row: `2  0  1  1`.
- **Predict before you check:**
  1. Each cell is one number, yet later you will hear that a genotype is *a pair of things*. What pair do you think a single `1` is standing for? What about a `0` and a `2`?
  2. Pick two of your columns and imagine they sit right next to each other on the same chromosome. Across your six individuals, do you expect their values to look related or independent? Write your guess.
  3. If one column were the actual cause of a disease and you only had the *other* (nearby) column measured, could you still say something useful about disease risk? Yes/no, and one sentence why.

Write all three predictions in your `session` note before you open a single reading. They are the model this module will break and rebuild.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against in a `session` note (answer them in your own words; do not just read them):
- You wrote a single integer per cell, but a diploid individual carries two copies of each chromosome. Where did the second copy go — what does the integer `0/1/2` actually count?
- A `1` and a `2` are both "has the variant," yet they are not the same genotype. What is physically different between an individual scored `1` and one scored `2` at the same position?
- When you imagined two adjacent columns, did you reach for "related" or "independent"? What would have to be true about how chromosomes are passed on for two nearby positions to travel together more often than two distant ones?
- You answered the disease-risk question with a yes or no. Which biological fact were you implicitly relying on? Name it even if you are unsure of the term.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- OpenStax Biology 2e, **Ch 14 — DNA Structure and Function** (free at openstax.org): what DNA is, the double helix, genes as functional sequences. *(Note: the learner's earlier draft cited Ch 10/11/12; OpenStax 2e numbering puts DNA in Ch 14, not Ch 10. Corrected here — see gaps for the verification.)*
- OpenStax Biology 2e, **Ch 11 — The Cellular Basis of Inheritance**: meiosis and crossing-over (recombination).
- OpenStax Biology 2e, **Ch 12 — Mendel's Experiments and Heredity** and **Ch 13 — Modern Understanding of Inheritance** (chromosomal theory of inheritance, genetic linkage): alleles, dominance, segregation, independent assortment, and the linkage exception that recombination explains.
- MITx **7.00x Introduction to Biology: The Secret of Life** (edX, free to audit) — the genetics units, for a lecture-paced treatment.
- Crash Course Biology **#9 Heredity**, **#10 DNA Structure and Replication**, **#11 DNA** (YouTube) — fast orientation if a section of the reading feels abstract.

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words, one claim per note — search the vault first to avoid duplicates):
- *A genotype at a locus is a pair of alleles, one inherited from each parent.* (This is what the `0/1/2` encoding counts: copies of one designated allele.)
- *An observed phenotype is a downstream function of genotype together with environment, not a direct readout of the genotype.*
- *Recombination during meiosis shuffles which alleles travel together into the next generation.*
- *Because recombination is rarer between loci that sit close together on a chromosome, a marker near a causal variant tends to co-segregate with it across generations.* (This is the seam that connects to your disease-risk prediction, and the biological root of everything in p1m3.)

**Vocabulary** (define inline as you meet it, do not memorize cold): nucleotide, base pair, chromosome, gene, locus, allele, homozygous/heterozygous, dominant/recessive, genotype, phenotype, mutation, meiosis, recombination/crossing-over, segregation, independent assortment, linkage.

## ④ Active Experimentation — *apply it*
- **Exercise:** Take your hand-built genotype grid and re-interpret every cell as a pair of alleles (e.g. reference allele `A`, alternate allele `a`: `0 = AA`, `1 = Aa`, `2 = aa`). Then run a Mendelian monohybrid cross by hand: cross an `Aa` individual with an `Aa` individual and predict the genotype proportions of 100 offspring before drawing the Punnett square. Check against the square.
- **Mini-project hook:** the `0/1/2` allele-count encoding you just decoded is exactly the format the phase project loads from real data. Confirm you can state, for one real marker, what each integer means in terms of alleles. This feeds [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]] — Step 1 of the project (read genotypes) depends on this claim being solid.
- **Predict-then-check:** Two markers are 100,000 base pairs apart on the same chromosome; a second pair is 50,000,000 base pairs apart on the same chromosome. Predict which pair is more likely to be inherited together, and why. (You will *measure* this exact effect as LD in p1m3 — keep the prediction.)

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] State what a genotype is (a pair of alleles at a locus) and what the `0/1/2` encoding counts. (retrieval)
- [ ] Explain phenotype as a function of genotype plus environment, with one example. (retrieval)
- [ ] Given an `Aa × Aa` cross, predict offspring genotype proportions without a Punnett square, then justify with one. (transfer)
- [ ] Explain, for a brand-new pair of loci you have not seen, why physical proximity on a chromosome makes co-inheritance more likely. (transfer)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p1m1-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics: Allele Frequencies, HWE, Drift, Selection]]
- Project: [[p1-allele-frequencies-and-ld-from-real-genotypes|Allele Frequencies and LD from Real Genotypes]]
- Phase: [[phase-1-genetics-for-data-scientists|Phase 1 · Genetics for Data Scientists]]
- Question bank: [[p1m1-questions|P1M1 Question Bank]]
