---
type: evergreen
created: 2026-05-31
source: "Session p1m1 — reading a genotype grid"
phase: 1
module: p1m1
tags: [genetics, genotype, allele, snp, biallelic, encoding]
mastery: proficient
review-due: 2026-07-02
aliases:
  - "A genotype at a position is a pair of alleles, and the 0/1/2 encoding counts how many copies are the variant"
---

# A genotype at a position is a pair of alleles, and the 0/1/2 encoding counts how many copies are the variant

At a single position in the genome, an individual carries two copies (one
inherited from each parent). Each copy shows one DNA base at that position. When
that base differs between individuals, the position is a SNP, and the pair of
bases across the two copies is the genotype.

At almost every SNP only two bases occur across the population (the site is
*biallelic*): a common base and a variant base. Take a real example where the
common base is C and the variant base is T.

Because the two copies are unordered (we don't track which parent supplied
which), the genotype collapses to a single integer: the number of copies that
carry the variant base. With common C and variant T, `C,C` is `0` (both common),
`C,T` is `1` (one variant copy), and `T,T` is `2` (both variant). No information
is lost while the site is biallelic, which is why genotype data is stored as a
grid of `0/1/2` rather than a grid of base pairs.

Note on notation: "common"/"variant" (sometimes "reference"/"alternate") name
which actual base sits at the position. They are not the abstract A/a labels of
classroom genetics, and the `A` in `A, C, G, T` is a chemical base, not an
allele label. The `0/1/2` counts copies of the variant base.

## Links
- Context: [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]]
