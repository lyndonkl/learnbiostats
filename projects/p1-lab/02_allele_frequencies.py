"""
Milestone 2 — per-SNP allele frequency, and the allele-frequency (MAF) spectrum.

For every SNP, compute the alternate-allele frequency exactly as you derived:
    p = (sum of the 504 genotype values, ignoring missing) / (2 * number called)
then fold to the minor-allele frequency MAF = min(p, 1 - p) in [0, 0.5],
and plot the histogram of MAF across all ~1.23M SNPs.

>>> PREDICT FIRST (write it down):
  Biology prior: most NEW variants are RARE -- a mutation starts in one person
  and spreads slowly -- so in RAW sequencing data the spectrum piles up near
  MAF = 0 (far more rare variants than common ones).
  BUT this panel was QC-FILTERED (filename: ...rare002.common015...). So predict:
  after the rare variants are stripped out, what shape is LEFT?
  piled at low?  flat?  piled near 0.5?

Run:  uv run python 02_allele_frequencies.py
(prints summary stats + saves maf_spectrum.png)
"""
import os

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from bed_reader import open_bed

HERE = os.path.dirname(os.path.abspath(__file__))
STEM = "1KG.EAS.auto.snp.norm.nodup.split.rare002.common015.missing"
BED = os.path.join(HERE, "data", "raw", STEM + ".bed")

bed = open_bed(BED)
n_ind, n_snp = bed.iid_count, bed.sid_count

CHUNK = 50_000
p = np.empty(n_snp, dtype="float64")          # alt-allele frequency per SNP
for a in range(0, n_snp, CHUNK):
    b = min(a + CHUNK, n_snp)
    g = bed.read(index=np.s_[:, a:b], dtype="float32")  # individuals x chunk, NaN = missing
    copies = np.nansum(g, axis=0)                        # variant copies per SNP
    called = np.sum(~np.isnan(g), axis=0)               # individuals with a call
    with np.errstate(invalid="ignore", divide="ignore"):
        p[a:b] = copies / (2 * called)

maf = np.minimum(p, 1 - p)                    # fold to minor-allele frequency
maf = maf[np.isfinite(maf)]                   # drop any all-missing SNP

print(f"SNPs with a frequency: {maf.size:,}")
print(f"MAF   min={maf.min():.4f}   median={np.median(maf):.4f}   max={maf.max():.4f}")
for thr in (0.01, 0.05, 0.10):
    print(f"  fraction with MAF < {thr:.2f}:  {np.mean(maf < thr) * 100:5.1f}%")

plt.figure(figsize=(8, 4.5))
plt.hist(maf, bins=50, range=(0, 0.5), color="#4C78A8", edgecolor="white")
plt.xlabel("minor-allele frequency (MAF)")
plt.ylabel("number of SNPs")
plt.title("Allele-frequency spectrum — 1000G-EAS QC'd panel (504 samples)")
plt.tight_layout()
out = os.path.join(HERE, "maf_spectrum.png")
plt.savefig(out, dpi=120)
print("saved figure ->", out)
