---
type: question-bank
module: p1m3
phase: 1
created: 2026-05-30
tags: [assessment]
---

# p1m3 · Question Bank

Probing questions for the `biostat-assessor` to draw from. Organized by Bloom level, ascending. The assessor never reveals answers first; it asks, waits, then probes the gap. "Answer sketches" below are for the assessor's grading only — they are not read to the learner.

Module: [[p1m3-intro-genomics-snps-sequencing-genotyping-ld|p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD]]. Questions are answerable from the module readings (Vince Buffalo, *Bioinformatics Data Skills*, O'Reilly 2015 — Ch 6 Bioinformatics Data, Ch 9 Range Data, Ch 10 Sequence Data/FASTA-FASTQ, Ch 11 Alignment Data/SAM-BAM) together with the project reading list for VCF and the LD theory (flagged in the module's gaps — see gaps[]).

Core claims under test:
1. A SNP is a single-nucleotide position where individuals carry different alleles; as a marker it is the unit column in genotype data.
2. Linkage disequilibrium (LD) is the non-random association of alleles at two loci — observed two-locus haplotype frequencies differing from the product of single-locus allele frequencies.
3. LD is why a genotyped marker panel can stand in for the whole genome: an unmeasured causal variant is tagged by a measured marker nearby.
4. LD decays with genetic distance because recombination breaks associations over generations; tagging fails for distant loci and across differently-structured populations.
5. Arrays measure a pre-chosen (ascertained) common-SNP set cheaply; sequencing discovers variants directly — a cost/density/ascertainment trade-off.

---

## remember (retrieval — can you recall the primitive?)

1. **Q:** Define a SNP.
   *Answer sketch:* A single-nucleotide polymorphism: a single position in the genome at which individuals in a population carry different DNA bases (alleles). Usually biallelic (one REF, one ALT). As data, it is one marker = one column in a genotype matrix.

2. **Q:** In a VCF row, name the fields that locate and define a SNP, and say what the per-sample genotype field encodes.
   *Answer sketch:* CHROM (chromosome), POS (position), ID (variant id), REF (reference allele), ALT (alternate allele). The per-sample genotype field (GT) records the two alleles the individual carries, e.g. `0/0`, `0/1`, `1/1`, where `0` = REF copy and `1` = ALT copy (a phased `0|1` also records which homolog). This is the diploid "pair of alleles" from p1m1.

3. **Q:** Write the textbook definition of linkage disequilibrium D for two loci with alleles A/a and B/b.
   *Answer sketch:* D = p(AB) − p(A)·p(B): the difference between the observed frequency of the AB haplotype and the product of the single-locus allele frequencies expected if the two loci were independent. D = 0 means linkage *equilibrium* (independence); D ≠ 0 means association. (r² and D′ are normalized versions of D.)

4. **Q:** Name the two commonly used summary measures of LD and state, in one phrase, what each captures.
   *Answer sketch:* r² (squared correlation between the two loci's allele indicators — how well one predicts the other, the measure relevant to tagging/prediction) and D′ (D scaled by its theoretical maximum given the allele frequencies — sensitive to recombination history but not to allele-frequency mismatch). The module's exercise uses r².

5. **Q:** Name the file formats from the readings and what stage of the sequencing-to-genotype pipeline each represents: FASTA, FASTQ, SAM/BAM, VCF.
   *Answer sketch:* FASTA = reference (or any) sequence, no quality. FASTQ = raw sequencing reads with per-base quality scores. SAM/BAM = reads aligned to the reference (BAM = compressed binary SAM). VCF = called variants/genotypes per position per sample. Order: FASTQ → (align) → SAM/BAM → (variant call) → VCF. (Buffalo Ch 10, 11; VCF from project reading list.)

## understand (explain in your own words)

1. **Q:** How does a SNP "row" in a VCF connect to the pair-of-alleles idea and the `0/1/2` encoding from p1m1?
   *Answer sketch:* The REF/ALT columns define the two possible alleles at that single position; the per-sample GT field records which two the individual carries. Counting ALT copies collapses `0/0,0/1,1/1` to `0,1,2` — exactly the diploid allele-count encoding from p1m1. One VCF row = one locus = one column of the genotype matrix.

2. **Q:** Explain linkage disequilibrium without the formula, to someone who knows correlation but not genetics.
   *Answer sketch:* It is correlation between two genomic positions across individuals: knowing someone's allele at SNP 1 tells you something about their allele at SNP 2 more often than chance. The alleles travel together on chromosomes more (or less) than you'd expect if they were assorting independently. r² is literally the squared correlation of the two genotype columns.

3. **Q:** Why does LD decay with distance? Tie it to the mechanism you named in p1m1.
   *Answer sketch:* Recombination (crossing-over) breaks up the association between two loci by recombining the chromosome between them; a crossover is more likely to fall between two distant loci than two close ones, and the chance accumulates over generations. So close loci stay correlated (high LD) and distant loci are scrambled toward independence (LD → 0). LD decay is the population-scale, accumulated footprint of the per-meiosis recombination from p1m1.

4. **Q:** The module says an array observes ~0.02% of genome positions yet a model can still predict a trait. Restate what the un-measured 99.98% must be doing for that to work.
   *Answer sketch:* The unmeasured causal variants must be in LD with — correlated with, tagged by — measured markers nearby. The genome is organized into LD blocks where many positions move together, so a measured tag SNP carries information about its unmeasured neighbors, including causal ones. The model predicts via the proxy, not by seeing the cause directly. If causal variants were independent of all markers, the 0.02% would be useless.

5. **Q:** What is ascertainment bias in the context of a genotyping array, and where does it come from?
   *Answer sketch:* The array's SNP set was *chosen in advance* (typically common SNPs discovered in particular reference/discovery populations), not discovered freshly in your sample. So the panel is biased toward common variants and toward variation present in the discovery populations; rare and population-private variants are systematically missing. This distorts allele-frequency spectra and can make the panel tag poorly in populations unlike the discovery set.

## apply (use it on a new, concrete case)

1. **Q:** Here are two phased SNPs across 8 chromosomes (haplotypes). SNP1 alleles: A A A A a a a a. SNP2 alleles: B B B b b b b B. Estimate the AB haplotype frequency, the single-locus frequencies, and compute D.
   *Answer sketch:* p(A) = 4/8 = 0.5; p(B): count B = positions 1,2,3,8 = 4/8 = 0.5. AB haplotypes (A and B together): positions 1,2,3 → 3/8 = 0.375. D = p(AB) − p(A)p(B) = 0.375 − 0.25 = 0.125. Nonzero ⇒ the loci are in LD (positive association of A with B). Accept correct arithmetic and the conclusion "in LD."

2. **Q:** You compute pairwise r² for a window of SNPs and plot r² against the distance between each pair. Describe the shape you expect and what it demonstrates.
   *Answer sketch:* A decay curve: high r² for close pairs, falling toward ~0 as distance increases (with scatter). It demonstrates that nearby markers carry correlated information (so a marker tags its neighbors) and that this tagging fades with distance — the empirical justification for marker-based prediction and the project's capstone LD-decay plot.

3. **Q:** Two SNPs are on different chromosomes. Predict their LD and explain.
   *Answer sketch:* Expected LD ≈ 0 (linkage equilibrium): loci on different chromosomes assort independently (independent assortment, p1m1), so there is no physical co-transmission. Any nonzero LD between them would signal population structure/admixture or selection, not linkage. (Good test of distinguishing physical linkage from statistical association.)

4. **Q:** Your trait-prediction model was trained in population X (a densely sampled reference panel) and predicts well there, but performs noticeably worse in population Y. Give an LD-based explanation.
   *Answer sketch:* Prediction relies on the marker→causal LD that held in X. In Y, recombination history and allele frequencies differ, so the *same* marker may be in weaker or even opposite-sign LD with the causal variant (different haplotype backgrounds, different LD decay). The tag no longer stands in for the cause, so accuracy drops. Plus array ascertainment may suit X better than Y. This is "tagging breaks down across differently-structured populations" (claim 4) and previews portability problems in later phases.

5. **Q:** A collaborator wants every variant in a sample, including rare and novel ones, for a specific gene. Should they use the standard genotyping array or sequence? Justify with cost/density/ascertainment.
   *Answer sketch:* Sequence (e.g., targeted/whole-genome). The array only types pre-chosen common SNPs (ascertainment bias) and will miss rare/novel variants by construction; sequencing discovers variants directly at high density across the region. Trade-off: sequencing costs more per sample and produces more data/QC burden; arrays are cheap and standardized but blind to anything not on the chip. For "every variant including rare," density and unbiased discovery win over cost.

## analyze (take it apart; compare; find the assumption)

1. **Q:** r² and D′ can disagree — high D′ but low r². Explain how, and which one matters for prediction.
   *Answer sketch:* D′ measures whether recombination has occurred between the loci (D′ = 1 means no recombinant haplotype is observed, regardless of allele frequencies), so it can be high even when allele frequencies are very different. r² measures how well one locus *predicts* the other; it is depressed when the two SNPs have mismatched allele frequencies even if no recombination has occurred. For tagging/prediction, **r²** is the relevant measure — it directly quantifies how much variance in the causal locus a marker captures (and ties to sample size needed). D′ high / r² low = same haplotype history but the marker is a poor predictor.

2. **Q:** "LD is just physical linkage." Critique this. Name a source of LD that is not physical proximity, and a case where physically close loci show low LD.
   *Answer sketch:* LD is a *statistical* association; physical linkage is one cause but not the only one. Non-linkage sources: population structure/admixture (mixing populations with different allele frequencies creates genome-wide LD even between unlinked loci — the two-locus analogue of Wahlund), recent selection, drift/bottlenecks, and assortative mating. Conversely, physically close loci can show low LD if there is an LD-breaking recombination hotspot between them, or if one SNP is much rarer/younger, or in a population with a long recombination history. So proximity is neither necessary nor sufficient for high LD.

3. **Q:** The whole premise of marker-based prediction is that 0.02% of the genome suffices. Identify the assumptions that premise rests on, and a realistic situation where each fails.
   *Answer sketch:* Assumes (i) causal variants are in strong LD with at least one genotyped marker — fails when causal variants are rare/recent (weak LD with common array SNPs) or in genomic regions of low marker density / high recombination; (ii) that LD structure is shared between training and target populations — fails across ancestries / structured populations; (iii) that the array's ascertained common SNPs tag the relevant variation — fails when causal variation is population-private or under recent selection. Each failure degrades prediction even though the markers are measured perfectly. (Synthesizes claims 3–5.)

4. **Q:** Imputation fills in genotypes at unmeasured positions from a reference panel. What property of the genome makes imputation possible, and what determines its accuracy?
   *Answer sketch:* It exploits LD / haplotype structure: because nearby SNPs travel together as haplotypes, an individual's measured tag SNPs identify which reference haplotypes they likely carry, letting you infer the un-typed positions in between. Accuracy depends on the strength/extent of LD (denser, longer LD blocks impute better), the match between the study and reference-panel populations (ancestry mismatch hurts), allele frequency (rare variants impute worse), and marker density. It is the same tagging logic that justifies prediction, used to reconstruct the un-genotyped positions.

## evaluate / create (judge a tradeoff; design something)

1. **Q:** You are choosing a marker panel for a new species with no prior reference. Design a strategy that gets you a usable panel, and defend each choice against the array's ascertainment bias.
   *Answer sketch:* First *sequence* a representative, diverse sample of the target population to discover variants *in that population* (avoids importing another population's ascertainment); characterize LD decay to choose marker spacing (closer spacing where LD decays fast); then design a panel/genotyping assay of tag SNPs that capture the discovered common variation at the LD-appropriate density, validated in the same population. Trade-off acknowledged: sequencing-for-discovery is costly up front but prevents a panel that systematically misses the species' own variation and tags poorly. Strong answers tie spacing to measured LD decay rather than guessing.

2. **Q:** Two panels for the same budget: Panel A = 600k common SNPs on a cheap array; Panel B = low-coverage sequencing of the whole genome. Judge the tradeoff for a genomic-prediction goal in a structured, partly-rare-variant trait.
   *Answer sketch:* Array A: standardized, low cost, high call quality at typed sites, but ascertained toward common SNPs and toward discovery populations — weak on rare/private causal variants and on populations unlike the discovery set; relies wholly on LD tagging. Sequencing B: unbiased discovery and access to rare variants and the actual causal sites (less reliance on tagging), better cross-population portability, but low coverage means genotype uncertainty and heavier QC/imputation. For a structured trait with rare causal variants, B's unbiased, denser ascertainment is likely worth the per-sample cost and uncertainty; for a homogeneous population with common-variant architecture, A may match B at lower cost. The right answer weighs ascertainment and portability against cost and call quality, not just SNP count.

## Misconception traps
Common wrong mental models for this module, and the question that surfaces each:

- **Trap:** "A SNP is a gene / a SNP is the cause of the trait." → **surfacing question:** *Is the SNP on your array necessarily the variant that affects the trait? If not, why is it on the chip and why is it useful?* (Surfaces marker-vs-causal and tagging.)
- **Trap:** "LD means the two SNPs are physically close." → **surfacing question:** *Two SNPs on different chromosomes show high LD in your sample. Closeness can't explain it — what can?* (Surfaces structure/admixture/selection as LD sources.)
- **Trap:** "The array sees 0.02% of the genome, so it can capture at most 0.02% of the signal." → **surfacing question:** *What is the unmeasured 99.98% doing such that 0.02% can still predict well? Name the mechanism.* (Surfaces LD/tagging as the multiplier.)
- **Trap:** "r² and D′ are interchangeable LD measures." → **surfacing question:** *Two SNPs have D′ = 1 but r² = 0.2. Which one tells you the marker is a good predictor, and why do they disagree?* (Surfaces r² as the prediction-relevant measure; allele-frequency mismatch.)
- **Trap:** "A prediction model trained in one population will work in another because DNA is DNA." → **surfacing question:** *Your model trained in population X drops in accuracy in population Y. What about LD changed between them?* (Surfaces population-specific LD / portability.)
- **Trap:** "Genotyping array and sequencing are basically the same data." → **surfacing question:** *Which one would miss a brand-new rare variant in your sample, and why?* (Surfaces ascertainment: arrays type pre-chosen SNPs; sequencing discovers.)
- **Trap:** "LD never decays / haplotype blocks are permanent." → **surfacing question:** *Over many generations, what happens to the correlation between two SNPs 1 Mb apart, and what drives the change?* (Surfaces recombination-driven LD decay.)

## Transfer prompt
One question that forces the concept into an unfamiliar context (crop-breeding scenario).

- **Q:** A wheat breeding program wants to do genomic selection: predict each seedling's eventual grain yield from a cheap SNP array so it can advance the best lines before any field trial. The program's elite lines descend from a narrow set of founders and have been intercrossed for only a handful of generations; the genotyping array, however, was designed from SNPs discovered in a different, diverse wheat collection. (a) Explain, using LD and recombination, why genomic selection on a sparse SNP panel can work *at all* for yield, a trait with no single causal gene. (b) Two features of this program cut in opposite directions for prediction accuracy: the few generations of intercrossing among related founders, and the array's ascertainment in a different collection. Predict the effect of each on LD and therefore on how well the panel tags causal variants, and say which markers you'd trust most. (c) The program plans to reuse the same trained model for a new set of lines brought in from an unrelated landrace. Predict what happens to accuracy and why.
   *Answer sketch:* (a) Yield is polygenic — many causal variants of small effect, none individually decisive — but each causal variant is in LD with nearby array markers; across the genome the panel's markers collectively tag the many causal loci, so a model summing over markers captures much of the genetic variance without observing any causal site directly. Recombination is slow enough locally to preserve marker→causal LD, which is the whole basis of marker-based prediction (claim 3). (b) Few generations of intercrossing among related founders ⇒ *long-range, strong LD* (little recombination has had time to break associations, and a narrow founder base means long shared haplotypes) — this *helps* tagging: even a sparse panel covers causal variants because LD blocks are big, so markers predict well *within* this population. Ascertainment in a different collection ⇒ the chosen SNPs are common in that collection but may be monomorphic, rare, or on different haplotype backgrounds in the elite lines, so some markers carry little information or tag the wrong haplotype — this *hurts*. Trust most: markers that are polymorphic in the elite lines and sit in high-LD regions with the founders' haplotypes; distrust array SNPs that are near-fixed or rare in these lines. (c) Accuracy will likely drop for the unrelated landrace: it has a different and longer recombination history, different allele frequencies, and different haplotype backgrounds, so the marker→causal LD learned in the elite population does not transfer (the tag-causal correlations differ in strength and even sign), and the array's ascertainment fits the landrace even worse. This is the cross-population portability failure (claim 4) in a breeding context; the fix is to (re)train within, or include, the target germplasm and ideally re-ascertain/impute markers in it. Strong answers explicitly connect "few generations / narrow founders = high LD = good local tagging but poor portability" as the central tension.

## Links
- Module: [[p1m3-intro-genomics-snps-sequencing-genotyping-ld|p1m3 · Intro Genomics: SNPs, Sequencing, Genotyping, LD]]
- Previous bank: [[p1m2-questions|P1M2 Question Bank]]
- Phase: [[phase-1-genetics-for-data-scientists|Phase 1 · Genetics for Data Scientists]]
