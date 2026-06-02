"""
Milestone 1 — load the real genotype matrix and orient yourself.

>>> PREDICT BEFORE YOU RUN (write your three guesses down somewhere):
      1. how many individuals (samples)?
      2. how many SNPs (variants)?
      3. what fraction of genotype calls are MISSING (and why any at all)?

Then run:  uv run python 01_load_and_orient.py
and check your predictions against what prints.

The matrix is individuals x SNPs, each cell a 0/1/2 alt-allele count
(exactly the encoding you derived: how many of an individual's two copies
carry the alternate allele). Missing calls read as -127 in int8.
"""
import os

import numpy as np
from bed_reader import open_bed

HERE = os.path.dirname(os.path.abspath(__file__))
STEM = "1KG.EAS.auto.snp.norm.nodup.split.rare002.common015.missing"
BED = os.path.join(HERE, "data", "raw", STEM + ".bed")

if not os.path.exists(BED):
    raise SystemExit("Data not found. Run first:  uv run python get_data.py")

bed = open_bed(BED)
n_ind, n_snp = bed.iid_count, bed.sid_count
print(f"shape: {n_ind} individuals  x  {n_snp:,} SNPs")

# --- missingness, computed in SNP-chunks so we never hold the whole matrix ---
CHUNK = 50_000
total = missing = 0
for start in range(0, n_snp, CHUNK):
    stop = min(start + CHUNK, n_snp)
    g = bed.read(index=np.s_[:, start:stop], dtype="int8")  # individuals x chunk
    missing += int((g == -127).sum())
    total += g.size
print(f"genotype calls: {total:,}   missing: {missing:,}   ->  {100 * missing / total:.4f}% missing")

# --- orient yourself: what do the rows/columns actually contain? ---
print("\nfirst 5 SNPs  (id, location, ref/alt alleles):")
for i in range(5):
    print(f"  {str(bed.sid[i]):14s} chr{bed.chromosome[i]}:{int(bed.bp_position[i]):,}  "
          f"{bed.allele_1[i]}/{bed.allele_2[i]}")

chroms = sorted(set(bed.chromosome), key=lambda c: (len(str(c)), str(c)))
print("\nchromosomes present:", chroms)

g0 = bed.read(index=np.s_[0, :12], dtype="int8")[0]
print("individual 0, first 12 SNP genotypes (0/1/2, -127=missing):", g0.tolist())

print("\nDone. Compare to your three predictions: shape, and the missing %.")
