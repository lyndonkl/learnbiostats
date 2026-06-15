---
type: journal
created: 2026-05-30
updated: 2026-06-06
tags: [progress, journal, session-log, kolb]
---

# Learning Journal

A reverse-chronological **session log**, newest entry on top. As of 2026-06-06 this is a *factual* log the assistant maintains: each entry records, in neutral terms, what happened on a study day — the module, what was done, the evergreen notes minted, and any status change. It is **not** written in your voice.

The reflective layer (Kolb: what you noticed, the claim you formed, what surprised you, what's next) is **yours to add under any entry whenever you want** — adding it is optional, and the facts no longer wait for it. The 2026-05-30 kickoff below is your own first-person entry, kept as written.

---

## 2026-06-06 — p1 lab milestones 2–3: allele frequencies + Hardy–Weinberg
- **Module:** p1m2 (Population Genetics), via the p1 lab.
- **Did:** Computed per-SNP allele frequency across all 1.23M SNPs and plotted the MAF spectrum (milestone 2 — L-shaped: most variants rare). Ran Hardy–Weinberg genome-wide with a per-SNP chi-square test (milestone 3 — ~1.1% of SNPs failed at p<1e-6, flagging genotyping errors / structure). Worked the underlying statistics in depth: chi-square mechanics, degrees of freedom, why p-values are uniform under the null, variance≈mean for counts, and the allele-frequency calculation.
- **Notes minted (p1m2):** [[allele-frequency-not-the-individual-genotype-is-the-state-variable-that-describes-a-population-at-a-locus|allele frequency = the population's state variable]]; [[the-allele-frequency-spectrum-is-l-shaped-most-variants-are-rare-because-each-is-born-rare-and-rises-slowly|the L-shaped MAF spectrum]]; [[a-hardy-weinberg-deviation-flags-genotypes-that-dont-match-the-allele-frequency-so-hwe-is-a-qc-filter|HWE deviation = a QC filter]].
- **Status:** p1m2 → practicing / functional. Ran a `biostat-coach` reconciliation of the trackers.
- *Reflection: yours to add.*

---

## 2026-06-02 — p1 lab setup + milestone 1: load real genotypes
- **Module:** p1m1 / the p1 lab (bridges into p1m2–p1m3).
- **Did:** Built the `uv` project (Python 3.13; numpy/pandas/matplotlib/bed-reader). Downloaded the 504-sample 1000G-EAS PLINK fileset and loaded it as a 504 × 1,235,116 genotype matrix at 0.62% missing (milestone 1). Plotted SNPs-per-chromosome (`01b`).
- **Notes minted:** [[a-genotype-matrix-size-is-individuals-times-measured-snps-distinct-from-the-genomes-three-billion-positions|genotype-matrix size vs the genome]] (p1m1); [[the-number-of-snps-on-a-chromosome-tracks-its-length-only-loosely-because-snp-density-varies|SNP count ≈ size × density]] (p1m1); [[a-genotyping-panel-samples-a-sparse-genome-wide-subset-of-positions-and-ld-lets-each-marker-tag-the-unmeasured-positions-near-it|sparse panel + LD tagging]] (p1m3).
- *Reflection: yours to add.*

---

## 2026-06-01 — p1m1 session 2: the cross + linkage; concepts complete
- **Module:** p1m1.
- **Did:** Kolb session — derived the `Aa × Aa` 1:2:1 genotype ratio and genetic linkage from the genotype grid. Passed a closed-book retrieval review of the first three notes. p1m1 concepts complete.
- **Notes minted:** [[a-cross-between-two-heterozygotes-gives-a-1-2-1-genotype-ratio-because-the-heterozygous-combination-can-form-two-ways|the 1:2:1 cross]]; [[loci-close-together-on-a-chromosome-tend-to-be-inherited-together-because-a-crossover-rarely-lands-between-them|genetic linkage]].
- *Reflection: yours to add.*

---

## 2026-05-31 — p1m1 session 1: DNA, genotype, mutation, recombination
- **Module:** p1m1.
- **Did:** First Kolb session — from a 6×4 grid of 0/1/2 values, reconstructed what a genotype and allele are and what the 0/1/2 encoding counts, then mutation (which creates alleles) and recombination (which shuffles them). Built the DNA / chromosome / SNP picture from first principles alongside the OpenStax reading.
- **Notes minted:** [[a-genotype-at-a-position-is-a-pair-of-alleles-and-the-0-1-2-encoding-counts-how-many-copies-are-the-variant|genotype = a 0/1/2 variant count]]; [[a-mutation-is-a-copying-error-that-changes-the-base-at-a-position-creating-a-new-allele|mutation creates alleles]]; [[recombination-assembles-each-chromosome-passed-to-offspring-as-a-patchwork-of-the-parents-two-copies|recombination shuffles alleles]].
- *Reflection: yours to add.*

---

## 2026-05-30 — Studio kickoff

**① Experience (what I did)**
Set up the learnbiostats Learning Studio: a single Obsidian-compatible vault that runs four loops — Learn, Note, Write, Publish (see [[readme|README]] and [[learning-system|learning-system.md]]). Walked the [[roadmap|roadmap]]: five phases from genetics literacy through quantitative genetics, genomics data analysis, ML for genomic prediction, and crop-breeding domain knowledge. Read the [[conventions|conventions]] and the [[system-overview|routing table]] so I know which agent does what before I start asking.

**② Reflect (what I noticed / what surprised me)**
The thing that struck me is how much the design fights my default habit. My instinct as a data scientist is to read the textbook chapter, nod, and move on — and the studio is built to *refuse* that. Every module makes me meet the phenomenon first (run a snippet, look at real genotype data, make a prediction) before I'm allowed the explanation, and the tutor won't summarize for me. That friction is the point: retrieval effort is the mechanism, not a side effect. I also noticed the writing side is unusually protective of voice — the editor literally can't change my words. I'm curious whether that constraint makes me braver about speaking out rough drafts.

**③ Conceptualize (the claim I can make now)**
My working claim for the whole project: I will learn this faster and more durably by *building the concept myself from an experience* than by absorbing it pre-packaged — and writing the understanding in public, in my own voice, is part of the learning, not a downstream chore. No evergreen notes yet; the first ones come from [[p1m1-dna-genes-and-inheritance|p1m1]].

**④ Experiment (what I'll try next)**
Tomorrow: `start p1m1`. Open with the Concrete Experience the module specifies, make my prediction *before* reading, and route whatever claim I form into an `evergreen/` note. Set a daily streak going and ask `biostat-coach` each morning what's due. First small writing test within the week: speak a two-paragraph reflection on what a genotype actually *is*, clean the transcript, and run a `biostat-editor` pass — mostly to learn the loop, not to publish.

**Open question I'm sitting with:** how much molecular-biology detail is genuinely load-bearing for genomic prediction, and how much is the curriculum right to skip? I'll revisit this at the end of Phase 1.

---

> Entry template (copy for each new day):
>
> ## YYYY-MM-DD — <one-line title>
> **① Experience:** what I did (the concrete thing, before reading).
> **② Reflect:** what I noticed / what surprised me / where understanding stopped.
> **③ Conceptualize:** the claim I can now make (link the evergreen note it became).
> **④ Experiment:** what I'll predict-then-check next.
> **Open question:** the live thing I don't yet understand.

## Links
- Context: [[learning-system|learning-system.md]]
- Applies: [[tracker|Progress Tracker]]
- Applies: [[skills-matrix|Skills Matrix]]
