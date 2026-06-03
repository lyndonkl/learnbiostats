---
type: evergreen
created: 2026-06-02
source: "Session — p1 lab: SNPs-per-chromosome plot"
phase: 1
module: p1m1
tags: [genomics, chromosomes, snp-density]
mastery: functional
review-due: 2026-06-03
aliases:
  - "The number of SNPs on a chromosome tracks its length only loosely, because SNP density varies across the genome"
---

# The number of SNPs on a chromosome tracks its length only loosely, because SNP density varies across the genome

In a genome-wide panel, larger chromosomes carry more SNPs — chromosomes 1–4
hold the most, 21–22 the fewest — because chromosomes were numbered roughly by
physical size and SNP count rises with length. Plotting counts in chromosome
order therefore looks steadily decreasing without any sorting.

But the relationship is loose, not exact. Chromosome 2 can exceed the larger
chromosome 1, and chromosome 9 falls below several smaller chromosomes, because
SNP density is not uniform along the genome. Density depends on local mutation
rate, recombination, how callable the sequence is (gene-rich versus
heterochromatic regions like chr9's large centromeric block), and the panel's
ascertainment and QC. So SNP count on a chromosome is roughly its length times a
non-uniform local density, which is why the size trend has real local exceptions.

## Links
- Context: [[a-genotyping-panel-samples-a-sparse-genome-wide-subset-of-positions-and-ld-lets-each-marker-tag-the-unmeasured-positions-near-it|A genotyping panel samples a sparse genome-wide subset of positions…]]
- Context: [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]]
