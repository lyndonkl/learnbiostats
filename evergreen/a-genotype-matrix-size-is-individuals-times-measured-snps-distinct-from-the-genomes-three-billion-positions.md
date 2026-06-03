---
type: evergreen
created: 2026-06-02
source: "Session — p1 lab: loading a real genotype matrix"
phase: 1
module: p1m1
tags: [genomics, data-literacy, genotype-matrix, scale]
mastery: functional
review-due: 2026-06-03
aliases:
  - "A genotype matrix's size is individuals times measured SNPs, distinct from the genome's three billion positions"
---

# A genotype matrix's size is individuals times measured SNPs, distinct from the genome's three billion positions

A genotype dataset is a table of individuals (rows) by measured SNPs (columns),
and its number of cells is individuals × SNPs. For the 1000G-EAS set that is
504 × ~1.23 million ≈ 622 million genotype calls. That number is *not* the length
of the genome.

Three quantities must be kept apart. The genome has ~3 billion base-pair
positions per copy (its length). A panel measures only a subset of those
positions (~1.23 million here, each one position). The matrix then multiplies
that subset by the number of people, so its cell count carries the sample size
baked in. Conflating them — for instance reading 622 million as "the whole
genome" — mixes positions-in-one-genome with filled-boxes-in-a-many-person-table,
two different units. Counting data is not the same as counting genome.

## Links
- Builds-on: [[a-genotype-at-a-position-is-a-pair-of-alleles-and-the-0-1-2-encoding-counts-how-many-copies-are-the-variant|A genotype at a position is a pair of alleles…]]
- Context: [[a-genotyping-panel-samples-a-sparse-genome-wide-subset-of-positions-and-ld-lets-each-marker-tag-the-unmeasured-positions-near-it|A genotyping panel samples a sparse genome-wide subset of positions…]]
- Context: [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]]
