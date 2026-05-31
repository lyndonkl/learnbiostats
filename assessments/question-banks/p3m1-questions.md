---
type: question-bank
module: p3m1
phase: 3
created: 2026-05-30
tags: [assessment]
---

# p3m1 · Question Bank

Probing questions for the `biostat-assessor` to draw from. Organized by Bloom level, ascending. The assessor never reveals answers first; it asks, waits, then probes the gap. "Answer sketches" below are for the assessor's grading only — they are not read to the learner.

Anchored to the module readings: Buffalo, *Bioinformatics Data Skills* (O'Reilly, 2015) — Ch. 10 (FASTA/FASTQ), Ch. 11 (SAM/BAM, samtools pileups and variant calling), Ch. 13 (tabix/BGZF) — plus the VCF/BCF format specification. Core claim under test: **the genotype matrix is the output of a lossy reads → alignment → called-variants pipeline, every stage injects error and missingness, and the VCF is the contract every downstream analysis trusts.**

## remember (retrieval — can you recall the primitive?)
1. **Q:** Name, in order, the four stages that take a sequencing run to a genotype matrix, and the file format that comes out of each.
   *Answer sketch:* Reads (FASTQ) → alignment to a reference (SAM/BAM) → variant calling (VCF) → genotype matrix (the GT field across samples, read out of the VCF). Looking for the arrows in the right order and the format at each, not perfection on tooling.
2. **Q:** What are the four lines of a single FASTQ record?
   *Answer sketch:* (1) `@` identifier line, (2) the base sequence, (3) a `+` separator, (4) the per-base quality string (Phred-encoded, one character per base). The fourth line is the load-bearing one for QC.
3. **Q:** In a FASTQ quality string, does a higher-valued character mean a more confident or a less confident base call?
   *Answer sketch:* More confident. Phred Q = -10·log10(error probability); higher Q = lower error probability. (Q30 ≈ 1-in-1000 error.) A common reversal trap — see misconceptions.
4. **Q:** Name the eight fixed columns of a VCF record.
   *Answer sketch:* CHROM, POS, ID, REF, ALT, QUAL, FILTER, INFO. (Then the FORMAT column and one column per sample follow.) Partial credit for getting CHROM/POS/REF/ALT/the QUAL/FILTER pair.
5. **Q:** In the per-sample part of a VCF, what do GT, DP, and GQ stand for?
   *Answer sketch:* GT = genotype (e.g. `0/0`, `0/1`, `1/1`, or `./.` for missing); DP = read depth at that site for that sample; GQ = genotype quality (Phred-scaled confidence in the called GT). Missingness shows as `./.`.

## understand (explain in your own words)
1. **Q:** Why is a single sequencing read better thought of as a *vote* than as a *fact*?
   *Answer sketch:* A read is one noisy observation with per-base error (the quality string admits it). The genotype call is the verdict aggregated over many reads covering a position; any one read can be wrong (base-call error, sequencing artifact). The fact lives in the consensus, not in the individual read.
2. **Q:** A BAM line carries both a mapping quality (MAPQ) and per-base qualities. What different kind of error does each one guard against?
   *Answer sketch:* Per-base quality = "did I read this base correctly?" (sequencing/base-call error). MAPQ = "did I place this whole read in the right location?" (alignment/mapping error, e.g. repetitive regions where a read could come from several places). Two independent failure modes; you need both to trust a call.
3. **Q:** Explain what gets *compressed* when many reads across many samples become a few called genotypes in a VCF row, without using the word "variant."
   *Answer sketch:* The full pileup of individual reads, their base qualities, their strands and positions, the exact depth and allele balance — all collapse into a small summary (GT plus a few summary fields like DP/GQ). The raw evidence in the BAM (every read, every base quality) is gone by the VCF; only the verdict and a confidence summary remain.
4. **Q:** Why is missingness in a genotype matrix *not* random noise — what physical upstream events produce a `./.`?
   *Answer sketch:* Missing calls trace to specific upstream failures at specific positions: low coverage (too few reads to call), poor mapping (repetitive/structurally complex region, no confident placement), or low base quality. Because those failures cluster by genomic context and by sample (e.g. low-input samples), the *pattern* of missingness carries information and can correlate with real features.
5. **Q:** What does it mean to call the VCF "the contract" between the pipeline and everything downstream?
   *Answer sketch:* Everything after calling — QC, PCA, GWAS, prediction — reads the VCF and trusts its column conventions (REF/ALT orientation, GT coding, FILTER status). The VCF is the agreed interface; downstream code does not re-derive from reads, it consumes what the VCF asserts, so the VCF's conventions are load-bearing and its errors propagate silently.

## apply (use it on a new, concrete case)
1. **Q:** You are handed an unfamiliar VCF line: `chr2  41920  rs8  G  A  60  PASS  DP=120  GT:DP:GQ  0/1:34:99`. Read it: what is the reference allele, the alternate, this sample's genotype, its depth, and its genotype quality?
   *Answer sketch:* REF = G, ALT = A, site QUAL = 60, FILTER = PASS, total INFO depth 120. For the sample: GT `0/1` = heterozygous (one G, one A), DP = 34 reads at this site for this sample, GQ = 99 (high confidence). Looking for correct mapping of the colon-delimited FORMAT to its values.
2. **Q:** A position is covered at 30× in one sample. You see 17 reads calling A and 13 calling G. What genotype would you call and why — and what would make you *less* sure?
   *Answer sketch:* Roughly balanced ~50/50 split at high depth → heterozygous `0/1`. Less sure if base qualities at the minority allele are low, if the reads carrying one allele all share strand or position (a hint of artifact), or if MAPQ is low (the region maps ambiguously). The allele balance plus the quality context drives confidence.
3. **Q:** You raise the minimum base-quality / mapping-quality threshold for calling. Predict what happens to (a) the number of called variants and (b) the rate of missing calls — and which one you are trading for the other.
   *Answer sketch:* Stricter thresholds discard more borderline evidence → fewer confident calls and more sites that fall to missing. You trade *missingness up* for *false-call rate down* (higher confidence in what survives). The risk is throwing away real signal at genuinely-variable-but-hard-to-sequence sites. The intuition is "every arrow has a cost."
4. **Q:** Given a small public FASTQ + reference, what single number would you record at each stage to quantify the loss, from reads to VCF?
   *Answer sketch:* Reads in vs. reads that aligned (mapping loss); fraction of the reference covered at/above some depth (coverage loss); number of variant sites called; fraction of genotype calls that are missing. Any one defensible per-stage number is fine — the point is that each arrow is measurable and lossy.

## analyze (take it apart; compare; find the assumption)
1. **Q:** At which single arrow in reads → alignment → calling → matrix do you think the *most* information is lost, and defend it against the other candidates.
   *Answer sketch:* No single right answer; the reasoning is what is graded. Strong case for the **calling → matrix** step (full pileup of all reads and base qualities collapses to one GT + summary — the largest raw-data discard). Defensible case for **alignment** in repetitive genomes (reads that cannot be placed are effectively lost / mismapped). Must compare, not just assert.
2. **Q:** Two genotype calls in the same VCF: one confident `1/1` with GQ 99, one missing `./.`. Walk back up the pipeline — what could differ upstream, and which of those differences would a downstream ML model ever get to see?
   *Answer sketch:* Upstream differences: coverage (high vs near-zero depth), mapping quality (clean vs ambiguous region), base quality. The model consuming the genotype matrix sees only the *result* (a call vs a missing/imputed value) and at best the DP/GQ summary if it is carried forward — it does not see the reads. So the model must tolerate error/missingness it cannot inspect; the cause is invisible to it.
3. **Q:** The same individual's site is `0/1` in one pipeline run and `./.` in another, same data, different thresholds. What does that tell you about the genotype as a "measurement," and what assumption does a downstream analysis make by treating the matrix as ground truth?
   *Answer sketch:* The genotype is threshold-dependent — it is a verdict produced by a choice, not an immutable physical fact. Downstream analysis that treats the matrix as ground truth assumes the calling parameters were appropriate and uniform, and that missingness is ignorable — both can be wrong, and the assumption is usually invisible because the VCF hides the reads.
4. **Q:** Why does the field store and randomly access VCFs with BGZF compression and tabix indexing (Buffalo Ch. 13) rather than as plain text — what does that say about the scale of the object?
   *Answer sketch:* A whole-genome multi-sample VCF is enormous; plain-text linear scan is infeasible. BGZF (block gzip) keeps it compressed yet randomly seekable, and tabix indexes by genomic coordinate so a tool can jump to a region without reading the whole file. It reflects that the genotype matrix is a large out-of-memory object, accessed by coordinate, not a small table.

## evaluate / create (judge a tradeoff; design something)
1. **Q:** A colleague says "we sequenced everyone at 30×, so the genotype matrix is essentially error-free; we can skip worrying about it downstream." Evaluate that claim.
   *Answer sketch:* Wrong in spirit. 30× helps confidence at *callable* sites but does nothing for mapping error in repetitive/structurally complex regions, nothing for systematic base-call artifacts, and does not make missingness vanish or random. Depth reduces one error class, not all of them; the matrix is still a probabilistic verdict and missingness is still structured. Good answers name *which* errors depth does and does not fix.
2. **Q:** Design a minimal "provenance summary" you would attach to a genotype matrix so a downstream modeler knows what the pipeline kept and threw away. What goes in it and why?
   *Answer sketch:* Per-stage loss numbers (reads aligned fraction, coverage distribution, variants called, overall missing-call rate), the calling thresholds used, the reference genome and version, and per-site DP/GQ retained alongside GT. Rationale: the modeler needs to know the missingness mechanism, the confidence of calls, and the parameter choices, because all three change what a model can legitimately learn. Bonus: flag that REF/ALT orientation and genome build are part of the contract.

## Misconception traps
Common wrong mental models for this module, and the question that surfaces each:
- **Trap:** "Higher Phred/quality characters mean a worse / more error-prone base." → **surfacing question:** In a FASTQ quality string, if one base shows Q40 and another Q10, which base do you trust more, and write the relationship between Q and error probability.
- **Trap:** "A genotype call is a direct physical measurement of the DNA." → **surfacing question:** If you re-call the *same* BAM with stricter thresholds and a site flips from `0/1` to `./.`, was the underlying DNA measured differently? What does that say about what a genotype call actually is?
- **Trap:** "Missing genotypes are random dropouts you can ignore or fill in harmlessly." → **surfacing question:** Name three physical upstream causes of a `./.` and explain why those causes would make missingness cluster by region or by sample rather than scatter at random.
- **Trap:** "More coverage fixes everything, so 30× means error-free." → **surfacing question:** Which error class does raising coverage reduce, and which class (hint: think about *where* a read landed) does it not touch at all?
- **Trap:** "Base quality and mapping quality are basically the same confidence number." → **surfacing question:** Give one scenario where a read has high per-base quality but low MAPQ, and one where the reverse holds. What is each one really telling you?
- **Trap:** "The VCF contains the reads, so I can always go back to the raw evidence from it." → **surfacing question:** Open a VCF row and tell me how many individual reads supported the minority allele and what their base qualities were. Can you? If not, where did that information go and when?

## Transfer prompt
One question that forces the concept into an unfamiliar context (a crop-breeding scenario).
- **Q:** A maize breeding program genotypes 5,000 inbred lines using genotyping-by-sequencing (GBS), which deliberately sequences only a reduced fraction of the genome at low, uneven coverage to keep per-sample cost down. The team hands you a genotype matrix with about 40% missing calls and asks you to build a genomic-prediction model on it, insisting "the genotypes are the data — just run the model." Using the lossy-pipeline and VCF-as-contract ideas, explain (a) why a 40% missing matrix from low-coverage GBS is the *expected* output of this pipeline rather than a failure, (b) why that missingness is almost certainly non-random and correlated with genomic context, and (c) what you would demand to see about how the matrix was produced before you trust it for prediction.
  *Answer sketch:* (a) GBS trades coverage for cost and breadth; low, uneven depth means many site/sample combinations never get enough reads to call, so high missingness is structural to the protocol, not a bug. (b) Missingness follows restriction-site presence, local sequence/repeat context, and per-sample DNA quality, so it clusters by region and by line — the same "missingness is informative" claim, transferred. (c) Demand the per-stage provenance: coverage distribution, calling thresholds, reference build, per-site DP/GQ, and the missingness pattern — because the model must tolerate (or impute under) a known, structured missingness mechanism, and the VCF/genotype matrix is the only contract it consumes. Treating the matrix as clean ground truth would bake the pipeline's structured loss into the predictions invisibly.
