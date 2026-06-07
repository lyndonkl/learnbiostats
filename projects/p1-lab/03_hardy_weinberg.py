"""
Milestone 3 — Hardy-Weinberg: do the observed genotype counts match what the
allele frequency predicts?

For every SNP:
  observed counts            n0, n1, n2   (people who are 0, 1, 2; missing dropped)
  allele frequency           p = (n1 + 2*n2) / (2N),   q = 1 - p,   N = n0+n1+n2
  HWE-expected counts        e0 = q^2 * N,  e1 = 2pq * N,  e2 = p^2 * N
  chi-square (df=1)          X2 = sum (obs - exp)^2 / exp   over the 3 classes
  p-value                    P(chi-square_1 > X2)   -- small p = deviates from HWE

(HWE is your 1:2:1 cross generalized: at p=q=0.5 the expected fractions are
0.25 / 0.50 / 0.25 = 1:2:1.)

>>> PREDICT FIRST:
  1. For a typical clean SNP, will observed counts roughly MATCH the expected
     (i.e. HWE holds)?
  2. Genome-wide, if (almost) every SNP truly obeys HWE, what shape is the
     histogram of HWE p-values? (stats prior: p-values under a true null are
     uniform on [0,1].)  Flat? spike near 0? spike near 1?
  3. Roughly what FRACTION of the 1.23M SNPs do you expect to "fail" at the
     strict cutoff p < 1e-6?

Run:  uv run python 03_hardy_weinberg.py
"""
import os

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.stats import chi2 as chi2dist
from bed_reader import open_bed

HERE = os.path.dirname(os.path.abspath(__file__))
STEM = "1KG.EAS.auto.snp.norm.nodup.split.rare002.common015.missing"
BED = os.path.join(HERE, "data", "raw", STEM + ".bed")

bed = open_bed(BED)
n_snp = bed.sid_count

# --- per-SNP observed genotype counts (chunked) ---
n0 = np.empty(n_snp); n1 = np.empty(n_snp); n2 = np.empty(n_snp)
CHUNK = 50_000
for a in range(0, n_snp, CHUNK):
    b = min(a + CHUNK, n_snp)
    g = bed.read(index=np.s_[:, a:b], dtype="float32")   # n_ind x chunk, NaN=missing
    n0[a:b] = np.sum(g == 0, axis=0)
    n1[a:b] = np.sum(g == 1, axis=0)
    n2[a:b] = np.sum(g == 2, axis=0)

N = n0 + n1 + n2
with np.errstate(invalid="ignore", divide="ignore"):
    p = (n1 + 2 * n2) / (2 * N)
q = 1 - p
e0, e1, e2 = q**2 * N, 2 * p * q * N, p**2 * N

def chi_term(obs, exp):
    return np.where(exp > 0, (obs - exp) ** 2 / exp, 0.0)

with np.errstate(invalid="ignore", divide="ignore"):
    X2 = chi_term(n0, e0) + chi_term(n1, e1) + chi_term(n2, e2)
pval = chi2dist.sf(X2, df=1)
maf = np.minimum(p, 1 - p)

# --- Part A: a few example SNPs, observed vs expected ---
def show(i):
    print(f"  {str(bed.sid[i]):16s} chr{bed.chromosome[i]}:{int(bed.bp_position[i]):>10,}  "
          f"MAF={maf[i]:.3f}")
    print(f"        observed  0/1/2 = {int(n0[i]):>4}/{int(n1[i]):>4}/{int(n2[i]):>4}   (N={int(N[i])})")
    print(f"        HWE-exp   0/1/2 = {e0[i]:>6.1f}/{e1[i]:>6.1f}/{e2[i]:>6.1f}")
    print(f"        chi2={X2[i]:>10.2f}   p={pval[i]:.2e}   {'PASS' if pval[i] >= 1e-6 else 'FAIL (p<1e-6)'}")

print("=== two HIGH-MAF (common) SNPs ===")
for i in np.argsort(-maf)[:2]: show(i)
print("=== two LOW-MAF (rare) SNPs ===")
for i in np.argsort(np.where(maf > 0, maf, np.inf))[:2]: show(i)
print("=== three WORST-FITTING SNPs (smallest p) ===")
for i in np.argsort(pval)[:3]: show(i)

# --- Part B: genome-wide ---
print("\n=== genome-wide HWE ===")
print(f"SNPs tested: {np.sum(N > 0):,}")
for thr in (0.05, 1e-6):
    print(f"  fraction with p < {thr:>7}: {np.mean(pval < thr) * 100:6.3f}%  "
          f"({int(np.sum(pval < thr)):,} SNPs)")

plt.figure(figsize=(8, 4.5))
plt.hist(pval, bins=50, range=(0, 1), color="#E45756", edgecolor="white")
plt.xlabel("Hardy-Weinberg test p-value")
plt.ylabel("number of SNPs")
plt.title("Distribution of HWE p-values across all SNPs (flat = obeys HWE; spike at 0 = deviations)")
plt.tight_layout()
out = os.path.join(HERE, "hwe_pvalue_hist.png")
plt.savefig(out, dpi=120)
print("saved figure ->", out)
