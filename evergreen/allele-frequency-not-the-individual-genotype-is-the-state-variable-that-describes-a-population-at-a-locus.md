---
type: evergreen
created: 2026-06-06
source: "Session — p1 lab: computing allele frequencies (milestone 2)"
phase: 1
module: p1m2
tags: [population-genetics, allele-frequency, state-variable]
mastery: functional
review-due: 2026-06-07
aliases:
  - "Allele frequency, not the individual genotype, is the state variable that describes a population at a locus"
---

# Allele frequency, not the individual genotype, is the state variable that describes a population at a locus

A single individual's genotype at a locus is a `0/1/2` count describing that one
person. To describe the whole *population* at that locus, the right summary is
the allele frequency `p = (total variant copies across everyone) / (2N)`, a
single number between 0 and 1. One genotype describes a person; one frequency
describes a population.

Allele frequency is the more fundamental, lower-dimensional state variable
because it is what population processes act on. Under random mating the genotype
frequencies are a deterministic function of `p` (the Hardy–Weinberg proportions
`q²`, `2pq`, `p²`), so the genotype distribution follows *from* `p` rather than
the other way round; and the processes population genetics studies — random
change across generations, selection, migration, mutation — are all described as
forces that move `p` over time. Population genetics is largely the study of how
allele frequencies change.

So a genotype matrix's hundreds of millions of cells collapse, locus by locus,
into ~1.23 million allele frequencies, and it is those frequencies, not the
individual genotypes, that the rest of population genetics reasons about.

## Links
- Builds-on: [[a-genotype-at-a-position-is-a-pair-of-alleles-and-the-0-1-2-encoding-counts-how-many-copies-are-the-variant|A genotype at a position is a pair of alleles…]]
- Context: [[the-allele-frequency-spectrum-is-l-shaped-most-variants-are-rare-because-each-is-born-rare-and-rises-slowly|The allele-frequency spectrum is L-shaped…]]
- Context: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics]]
