"""
Quick visual — still milestone-1 territory (no new concepts).
How many of the 1.23M SNPs sit on each chromosome?

Uses only the .bim metadata (each SNP's chromosome). Confirms with your own
eyes the claim from our discussion: bigger chromosomes carry more markers.

>>> PREDICT FIRST:
      - which chromosome has the MOST SNPs? the FEWEST?
      - as you scan chr1 -> chr22, what overall shape will the bars make?

Run:  uv run python 01b_snps_per_chromosome.py
(prints the per-chromosome counts and saves snps_per_chromosome.png)
"""
import os
from collections import Counter

import numpy as np
import matplotlib
matplotlib.use("Agg")  # headless: save to a file instead of opening a window
import matplotlib.pyplot as plt
from bed_reader import open_bed

HERE = os.path.dirname(os.path.abspath(__file__))
STEM = "1KG.EAS.auto.snp.norm.nodup.split.rare002.common015.missing"
BED = os.path.join(HERE, "data", "raw", STEM + ".bed")

bed = open_bed(BED)
chroms = [str(c) for c in np.asarray(bed.chromosome)]  # one entry per SNP column
order = [str(c) for c in range(1, 23)]                 # chr1 .. chr22, in order
counts = Counter(chroms)
y = [counts.get(c, 0) for c in order]

print("SNPs per chromosome:")
for c, n in zip(order, y):
    print(f"  chr{c:>2}: {n:>8,}")
print(f"  total: {sum(y):>8,}")

plt.figure(figsize=(11, 4))
plt.bar(order, y, color="#4C78A8")
plt.xlabel("chromosome")
plt.ylabel("number of SNPs")
plt.title("SNPs per chromosome — 1000G-EAS panel (bigger chromosomes carry more markers)")
plt.tight_layout()
out = os.path.join(HERE, "snps_per_chromosome.png")
plt.savefig(out, dpi=120)
print("saved figure ->", out)
