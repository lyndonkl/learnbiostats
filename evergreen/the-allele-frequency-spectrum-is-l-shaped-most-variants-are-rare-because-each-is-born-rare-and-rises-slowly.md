---
type: evergreen
created: 2026-06-06
source: "Session — p1 lab: the MAF spectrum (milestone 2)"
phase: 1
module: p1m2
tags: [population-genetics, allele-frequency, site-frequency-spectrum, maf, mutation]
mastery: functional
review-due: 2026-06-07
aliases:
  - "The allele-frequency spectrum is L-shaped: most variants are rare and few are common, because each variant is born rare and rises in frequency only slowly"
---

# The allele-frequency spectrum is L-shaped: most variants are rare and few are common, because each variant is born rare and rises in frequency only slowly

Line up every SNP in a population by how common its rarer allele is (its minor-allele frequency, MAF, from 0 to 0.5) and make a histogram: x-axis MAF, y-axis how many SNPs have it. That histogram is called the site frequency spectrum, and it comes out L-shaped — a tall pile of rare variants on the left dropping to a low, flat tail of common ones near 0.5. In the 1000G-EAS panel the median MAF is about 0.13 and roughly 45 percent of SNPs have MAF below 0.10, even after quality control.

The L shape comes from how a variant's frequency changes over time. Every variant is born as rare as it can possibly be: it appears as a single new mutation in one person, so it starts on just 1 of the population's 2N allele copies (here 1 of 1008, about 0.1 percent) — pinned to the far left of the histogram. To move rightward and become common it must spread into many people over many generations, which is slow and uncertain; most variants stay rare or die out, and only a few ever climb to high frequency. (What pushes a variant up or down — random luck across generations, called genetic drift, and natural selection — is the next part of this module.) So at any snapshot, rare variants vastly outnumber common ones.

The practical consequence: a rare, low-MAF variant sits on only a handful of copies, so it carries a weak and noisy signal. That is why genomic analyses usually drop the lowest-MAF markers before modelling.

## Links
- Builds-on: [[a-mutation-is-a-copying-error-that-changes-the-base-at-a-position-creating-a-new-allele|A mutation is a copying error that creates a new allele]]
- Context: [[a-genotyping-panel-samples-a-sparse-genome-wide-subset-of-positions-and-ld-lets-each-marker-tag-the-unmeasured-positions-near-it|A genotyping panel samples a sparse genome-wide subset of positions]]
- Context: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 Population Genetics]]
