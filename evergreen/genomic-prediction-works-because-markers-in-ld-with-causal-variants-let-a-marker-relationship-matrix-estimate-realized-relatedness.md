---
type: evergreen
created: 2026-05-30
source: "Thought session — seeded with the curriculum"
phase: 4
module: p4m1
tags: [genomic-prediction, linkage-disequilibrium, relationship-matrix, gblup, relatedness]
mastery: aware
review-due: 2026-05-31
aliases:
  - "Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness"
---

# Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness

Source: seed example (studio kickoff, 2026-05-30)

Genomic prediction does not need to know which markers are causal, and that is the part that surprises people. Most genotyping markers are not themselves the variants that change the trait; they are anonymous SNPs scattered across the genome. They are useful anyway because of linkage disequilibrium (LD): markers and nearby causal variants are inherited together in chromosomal blocks, so a marker's genotype is statistically correlated with the unobserved causal allele in its neighborhood. A marker in LD with a causal variant is a stand-in — it carries information about the causal allele without being it.

Aggregating that logic across the whole genome is the mechanism. From all the markers you build a genomic relationship matrix (a marker-based realized relationship matrix), whose entries say how similar any two individuals are across their genotypes. Because the markers tag the causal variants through LD, this matrix estimates the *realized* genetic relatedness between individuals — how much of their actual segregating genome they share — rather than the *expected* relatedness you would write down from a pedigree. Full sibs are expected to share half their genome, but recombination makes the realized fraction scatter around 0.5, and dense markers see that scatter directly. Genomic prediction then borrows phenotypic information from relatives in proportion to this realized relatedness: an individual's predicted breeding value is essentially a relatedness-weighted blend of the phenotypes of everyone it resembles genomically.

This reframes the whole enterprise. GBLUP is, mechanically, the classical relationship-matrix mixed model with the pedigree matrix swapped for the marker-based one. The reason genomic selection beats pedigree selection is that markers resolve relatedness more finely than a pedigree can, capturing both Mendelian sampling within families and distant relationships the pedigree never recorded.

Two consequences follow directly. First, accuracy depends on training individuals being genetically related to (and from the same LD background as) the targets — predict into an unrelated, differently structured population and the LD that the marker effects ride on breaks down, so accuracy collapses. Second, the same relatedness that GWAS treats as nuisance population structure is exactly the signal genomic prediction exploits: one field's confound is the other field's engine.

**Open questions:**
- How does marker density interact with effective population size to set how well the relationship matrix captures realized relatedness?

## Links
- Builds-on: [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait|Heritability is a property of a population in an environment, not of a trait]]
- Contrasts-with: [[the-breeders-equation-says-response-to-selection-equals-narrow-sense-heritability-times-the-selection-differential|The breeder's equation says response to selection equals narrow-sense heritability times the selection differential]]
- Applies: [[phase-4-ml-for-genomic-prediction|Phase 4 · Machine Learning for Genomic Prediction]]
- Applies: [[project-2-genomic-prediction-benchmark|Genomic Prediction Benchmark]]
