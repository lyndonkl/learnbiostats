---
type: evergreen
created: 2026-06-02
source: "Session — p1 lab: loading a real genotype matrix"
phase: 1
module: p1m3
tags: [genomics, snp-panel, linkage-disequilibrium, genotyping, marker-prediction]
mastery: functional
review-due: 2026-06-03
aliases:
  - "A genotyping panel samples a sparse genome-wide subset of positions, and LD lets each marker tag the unmeasured positions near it"
---

# A genotyping panel samples a sparse genome-wide subset of positions, and LD lets each marker tag the unmeasured positions near it

A real genotyping panel types only a small fraction of the genome. The 1000G-EAS
set, for example, has ~1.23 million SNPs out of the genome's ~3 billion
positions — roughly one position measured every few thousand, scattered across
all chromosomes (genome-*wide*) but sparse. It does not measure the whole genome.

This sparse sampling works because of linkage disequilibrium: a measured marker
is correlated with the unmeasured positions physically near it, since nearby
positions tend to be inherited together. So each typed SNP carries probabilistic
information about its unmeasured neighbours without their being measured. That is
why a panel of ~1 million markers can stand in for the whole ~3-billion-position
genome, and it is the practical foundation of genotyping arrays and of
marker-based prediction in breeding.

## Links
- Builds-on: [[loci-close-together-on-a-chromosome-tend-to-be-inherited-together-because-a-crossover-rarely-lands-between-them|Loci close together on a chromosome tend to be inherited together…]]
- Applies: [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants…]]
- Context: [[p1m3-intro-genomics-snps-sequencing-genotyping-ld|p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD]]
