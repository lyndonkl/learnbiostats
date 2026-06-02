"""
Download + unzip the real teaching genotype set into data/raw/.

Dataset: 504 East-Asian (EAS) samples from 1000 Genomes Phase 3, QC-filtered,
in PLINK .bed/.bim/.fam format (from the GWASTutorial project). The long
filename encodes the QC already applied: rare/common MAF filters + missingness
filter + de-duplication + multiallelic split.

Idempotent: if the .bed/.bim/.fam already exist, it does nothing.

Run:  uv run python get_data.py
"""
import os
import shutil
import sys
import urllib.request
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, "data", "raw")
os.makedirs(RAW, exist_ok=True)

STEM = "1KG.EAS.auto.snp.norm.nodup.split.rare002.common015.missing"
URL = (
    "https://www.dropbox.com/scl/fi/41ep8xbdccp9xw5epim19/"
    f"{STEM}.zip?rlkey=tklapxwypeg79b1sx03o6ycs7&dl=1"
)
ZIP = os.path.join(RAW, STEM + ".zip")


def have_fileset() -> bool:
    return all(os.path.exists(os.path.join(RAW, STEM + e)) for e in (".bed", ".bim", ".fam"))


def main() -> None:
    if have_fileset():
        print("Fileset already in data/raw/ — nothing to do.")
        return

    print("Downloading real 1000G-EAS PLINK fileset (~100+ MB; give it a minute)...")
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=600) as r, open(ZIP, "wb") as f:
        shutil.copyfileobj(r, f)
    print(f"Downloaded {os.path.getsize(ZIP):,} bytes")

    print("Unzipping...")
    with zipfile.ZipFile(ZIP) as z:
        z.extractall(RAW)
    # flatten any nested folders (the zip may keep a directory structure)
    for root, _dirs, files in os.walk(RAW):
        if root == RAW:
            continue
        for fn in files:
            dst = os.path.join(RAW, fn)
            if not os.path.exists(dst):
                os.rename(os.path.join(root, fn), dst)

    print("data/raw/ now contains:")
    for fn in sorted(os.listdir(RAW)):
        p = os.path.join(RAW, fn)
        if os.path.isfile(p):
            print(f"  {fn:60s} {os.path.getsize(p):>12,} bytes")

    if not have_fileset():
        sys.exit("ERROR: expected .bed/.bim/.fam not found after unzip.")
    print("OK — .bed/.bim/.fam ready to load.")


if __name__ == "__main__":
    main()
