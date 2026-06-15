---
type: evergreen
created: 2026-06-06
source: "Session — p1 lab: the Hardy–Weinberg mechanism"
phase: 1
module: p1m2
tags: [population-genetics, hardy-weinberg, genotype-frequencies, allele-frequency]
mastery: functional
review-due: 2026-06-07
aliases:
  - "Hardy–Weinberg predicts genotype proportions q², 2pq, p² from the allele frequency, by treating each individual's two alleles as independent draws from the population pool"
---

# Hardy–Weinberg predicts genotype proportions from the allele frequency, treating each individual's two alleles as two independent draws from the population pool

At a SNP with variant-allele frequency `p` (and common frequency `q = 1 − p`),
Hardy–Weinberg predicts the genotype proportions you would see if each
individual's two alleles were drawn independently at random from the
population's allele pool. Drawing twice, each draw the variant with probability
`p`: both variant = `p²` (genotype 2), one of each = `2pq` (genotype 1), both
common = `q²` (genotype 0). The exponent is just how many variant copies that
genotype carries — genotype 2 needs the variant twice, genotype 0 needs it zero
times.

This is the `CT × CT` 1:2:1 cross generalized to any frequency. At `p = 0.5` it
gives `0.25 / 0.50 / 0.25`, but that is only the special case where each parent
is a 50/50 coin. A randomly chosen parent passes the variant with probability
`p`, not ½ (an AA-type parent never passes it, an aa-type always does), so as the
variant gets rarer the split shifts hard toward the common homozygote (at
`p = 0.1`, the proportions are `0.81 / 0.18 / 0.01`).

Crucially, `p` fixes only the allele frequency, not how the alleles pair into
genotypes. Many genotype distributions share the same `p` (for example
`25/50/25` and `50/0/50` both have `p = 0.5`). Hardy–Weinberg predicts the one
arrangement that independent pairing produces, so the observed genotype counts
carry information the allele frequency alone does not — which is exactly why a
Hardy–Weinberg test (observed vs expected genotype counts) is meaningful and can
fail even though `p` was estimated from the same data: it tests the *pairing*,
not the *frequency*.

## Links
- Builds-on: [[a-cross-between-two-heterozygotes-gives-a-1-2-1-genotype-ratio-because-the-heterozygous-combination-can-form-two-ways|A cross between two heterozygotes gives a 1:2:1 ratio…]]
- Builds-on: [[allele-frequency-not-the-individual-genotype-is-the-state-variable-that-describes-a-population-at-a-locus|Allele frequency is the population's state variable]]
- Context: [[a-hardy-weinberg-deviation-flags-genotypes-that-dont-match-the-allele-frequency-so-hwe-is-a-qc-filter|A Hardy–Weinberg deviation flags genotypes that don't match the allele frequency (QC filter)]]
- Context: [[p1m2-population-genetics-allele-frequencies-hwe-drift-selection|p1m2 · Population Genetics]]
---
