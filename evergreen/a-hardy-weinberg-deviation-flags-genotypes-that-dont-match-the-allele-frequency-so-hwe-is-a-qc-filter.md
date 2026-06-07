---
type: evergreen
created: 2026-06-06
source: "Session — p1 lab: Hardy–Weinberg (milestone 3)"
phase: 1
module: p1m2
tags: [population-genetics, hardy-weinberg, quality-control, chi-square, population-structure]
mastery: functional
review-due: 2026-06-07
aliases:
  - "A Hardy–Weinberg deviation flags a SNP whose genotypes don't match its allele frequency, making HWE a quality-control filter for genotyping errors and population structure"
---

# A Hardy–Weinberg deviation flags a SNP whose genotypes don't match its allele frequency, so HWE is a quality-control filter for genotyping errors and population structure

Hardy–Weinberg predicts, from a SNP's allele frequency `p`, the genotype
proportions expected under random mating: `q²` homozygous-common, `2pq`
heterozygous, `p²` homozygous-variant. A chi-square test compares the observed
genotype counts to those expected counts. Because `p` is estimated from the same
data, observed and expected share the allele frequency by construction, so the
test is specifically asking whether the alleles are *packaged into genotypes*
the way random mating predicts — essentially, is the heterozygote count right.

When a SNP deviates, the usual causes are practical, not biological: a
**genotyping error** (e.g. a homozygous-variant call at an ultra-rare SNP, where
the few variant copies should appear only as scattered heterozygotes), or
**hidden population structure / non-random mating** (pooling two populations
with different allele frequencies produces a heterozygote deficit, the Wahlund
effect). So HWE failure is used as a **QC filter**: drop the failing SNPs before
fitting any model, so it does not learn from miscalls.

Genome-wide, if nearly all SNPs obey HWE the test's p-values are uniform on
`[0,1]`; an excess spike near zero counts the genuine failures. In the 1000G-EAS
panel about 1.1% of SNPs failed at `p < 1e-6` (versus ~1 expected by chance) —
the QC drop list. Caveat: the chi-square approximation is unreliable when an
expected genotype count is tiny, so for low-MAF SNPs an **exact test of HWE** is
the rigorous choice; the chi-square verdict on rare variants is approximate.

## Links
- Builds-on: [[a-cross-between-two-heterozygotes-gives-a-1-2-1-genotype-ratio-because-the-heterozygous-combination-can-form-two-ways|A cross between two heterozygotes gives a 1:2:1 ratio…]]
- Builds-on: [[allele-frequency-not-the-individual-genotype-is-the-state-variable-that-describes-a-population-at-a-locus|Allele frequency, not the individual genotype, is the population's state variable]]
- Context: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics]]
