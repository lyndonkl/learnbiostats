---
type: evergreen
created: 2026-06-01
source: "Session p1m1 — cracking the ind1 mismatch"
phase: 1
module: p1m1
tags: [genetics, linkage, recombination, ld, marker-prediction]
mastery: functional
review-due: 2026-06-02
aliases:
  - "Loci close together on a chromosome tend to be inherited together because a crossover rarely lands in the small gap between them"
---

# Loci close together on a chromosome tend to be inherited together because a crossover rarely lands in the small gap between them

During meiosis a parent's two chromosome copies swap segments at a few random
switch points (typically one to three per chromosome). Two positions are
separated onto different copies only if a switch point falls between them. The
chance of that is roughly the size of the gap between them divided by the length
of the chromosome — so two positions sitting close together are almost never
separated and travel together across generations (genetic linkage), while
distant positions are separated often.

The consequence is that the alleles at two closely linked positions stay
correlated across individuals: knowing one lets you guess the other. So a
measured marker carries *probabilistic* information about a nearby unmeasured
variant — usually right, occasionally wrong (when a crossover did fall between
them in some ancestor), and the information fades with distance. This is the
biological reason a cheap marker panel can predict a trait whose causal variant
was never directly genotyped, and it is the foundation of marker-based selection
and genomic prediction.

## Links
- Builds-on: [[recombination-assembles-each-chromosome-passed-to-offspring-as-a-patchwork-of-the-parents-two-copies|Recombination assembles each chromosome passed to offspring as a patchwork…]]
- Applies: [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness|Genomic prediction works because markers in LD with causal variants…]]
- Context: [[p1m1-dna-genes-and-inheritance|p1m1 · DNA, Genes, and Inheritance]]
