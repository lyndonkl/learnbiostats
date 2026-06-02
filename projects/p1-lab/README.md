# p1-lab — Allele Frequencies and LD From Real Genotypes

The hands-on lab for Phase-1 project `p1`. **You run the code; predict before each step; check against what you see.** This folder is a self-contained `uv` project (Python 3.13).

## Dataset
504 East-Asian (EAS) samples from **1000 Genomes Phase 3**, QC-filtered, PLINK `.bed/.bim/.fam`
(from the [GWASTutorial](https://cloufield.github.io/GWASTutorial/01_Dataset/) project). Downloaded into `data/raw/` (git-ignored — never committed, never edited in place).

## Setup (already done)
```bash
uv init --python 3.13        # uv-scoped project
uv add numpy pandas matplotlib bed-reader
```
Run anything with `uv run python <script>.py` (uv uses the project's `.venv`).

## How to work this lab
1. **Get the data** (once): `uv run python get_data.py`
2. For each milestone script: **read the `PREDICT` block at the top, write your guesses down, *then* run it** and reconcile.

## Milestones
| # | script | what you do | concept |
|---|---|---|---|
| 1 | `01_load_and_orient.py` | load the matrix; check shape + missingness | p1m1 — a genotype is a 0/1/2 alt-allele count |
| 2 | `02_allele_frequencies.py` *(next)* | per-SNP alt-allele freq; plot the MAF spectrum | p1m2 — allele frequency as the population's state variable |
| 3 | `03_hardy_weinberg.py` *(next)* | expected vs observed genotype counts; chi-square | p1m2 — HWE as the null |
| 4 | `04_ld_decay.py` *(next)* | pairwise r² vs base-pair distance on one chromosome | p1m3 — LD, and why it decays with distance |

Scripts 2–4 get written as we cover `p1m2`/`p1m3` — the lab assembles as you learn.

## Deliverables (Phase-1 project)
- [ ] runnable scripts (committed) — this folder
- [ ] an **LD-decay figure** (r² vs distance) — the capstone artefact
- [ ] a short write-up ("what I saw when I finally looked at a real genotype matrix") — feeds the writing loop

## Notes
- `bed-reader` reads `.bed/.bim/.fam` into numpy; missing calls = `-127` in int8, `NaN` in float.
- Scripts read in SNP-chunks so the full 504 × ~1M matrix never sits in memory at once.
