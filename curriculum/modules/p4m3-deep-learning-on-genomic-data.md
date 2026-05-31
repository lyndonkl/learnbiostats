---
type: module
phase: 4
module: p4m3
title: "Deep Learning on Genomic Data"
weeks: "Weeks 5–6"
status: not-started
prerequisites: [p4m2]
objectives:
  - "understand: describe how CNNs on raw sequence, marker embeddings, and transformer approaches are applied to genomic data, and what kind of signal each is built to capture."
  - "apply: train a deep net (MLP and/or CNN) on a tabular genotype matrix and compare its cross-validated predictive ability to the GBLUP baseline."
  - "analyze: explain why deep nets frequently fail to beat GBLUP on tabular markers, and name the conditions under which raw sequence or spatial structure lets them win."
readings:
  - "Eraslan, G., Avsec, Ž., Gagneur, J. & Theis, F.J. (2019). Deep learning: new computational modelling techniques for genomics. Nature Reviews Genetics 20: 389–403."
  - "Zou, J., Huss, M., Abid, A., Mohammadi, P., Torkamani, A. & Telenti, A. (2019). A primer on deep learning in genomics. Nature Genetics 51: 12–18."
  - "Abdollahi-Arpanahi, R., Gianola, D. & Peñagaricano, F. (2020). Deep learning versus parametric and ensemble methods for genomic prediction of complex phenotypes. Genetics Selection Evolution 52: 12."
project: "[[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]"
question-bank: "[[p4m3-questions|P4M3 Question Bank]]"
review-due: null
tags: [genomic-prediction, deep-learning, cnn, transformers, embeddings, gblup, tabular-data]
---

# p4m3 · Deep Learning on Genomic Data

> One sentence: deep learning is the method everyone expects to win, so this module teaches the more useful and humbling truth — on a tabular genotype matrix it usually loses to GBLUP, and you need to know exactly why, and when that flips.

## Learning objectives
- **understand:** describe how CNNs on raw sequence, marker embeddings, and transformer approaches are applied to genomic data, and what kind of signal each is built to capture.
- **apply:** train a deep net (MLP and/or CNN) on a tabular genotype matrix and compare its cross-validated predictive ability to the GBLUP baseline.
- **analyze:** explain why deep nets frequently fail to beat GBLUP on tabular markers, and name the conditions under which raw sequence or spatial structure lets them win.

## Prerequisites
- [[p4m2-ml-approaches-ridge-elastic-net-rf-gradient-boosting|p4m2 · ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting]] — you need the cross-validation harness and the GBLUP/ensemble benchmark already built; the deep net is just another row run through the same folds.

---

## ① Concrete Experience — *do this first, before reading*
Use the same real marker dataset and the same cross-validation harness from p4m2 (e.g. BGLR `wheat`, 599 lines × 1,279 markers), so the deep net competes on identical folds against your existing GBLUP baseline.

- **Try:** build a simple feed-forward network (an MLP: input = 1,279 markers, a couple of hidden layers with dropout, one output) in PyTorch or Keras, and run it through your existing K-fold harness, reporting held-out predictive ability (predicted-vs-observed correlation) the same way you did for every other method. If you have time, also try a 1-D CNN that slides over the markers in genome order. Keep the architecture small — you have ~600 individuals.
- **Predict before you check:** Write down a guess, *before* reading anything, for each of these:
  1. Where will the MLP land relative to GBLUP and gradient boosting on held-out predictive ability — clearly above, roughly tied, or below?
  2. With ~600 individuals and ~1,300 markers, will the net's training loss reach near-zero while its held-out correlation stays mediocre? What is that pattern called?
  3. A 1-D CNN treats adjacent markers as a "neighborhood." Markers near each other on a chromosome are in LD. Will exploiting that adjacency help, and why or why not?

Commit your predictions to a `session` note *before* you reveal the answers.

## ② Reflective Observation — *what did you notice?*
Socratic prompts to journal against in a `session` note (answer them in your own words; do not just read them):
- Your MLP almost certainly drove training loss far down but did not beat GBLUP out-of-sample. A deep net is a universal function approximator — so why didn't all that capacity translate into better *prediction*? What is it approximating that does not generalize?
- A genotype matrix is *tabular*: each column is a marker, and there is no image-like spatial structure and no sequential grammar across the row the way there is in a DNA *sequence* or a sentence. Deep learning's great wins (vision, language) came from architectures that exploit exactly that structure. What does a plain genotype matrix *not* offer a CNN or transformer to grab onto?
- The trait is mostly additive. A linear model can represent a sum of additive marker effects *exactly*. What, then, is the deep net's non-linear machinery adding here — and why might "adding nothing useful" still cost you, given finite data?
- Sample size: you have hundreds of individuals and thousands of markers. Deep learning's wins typically came with millions of training examples. State the relationship between sample size, parameter count, and a deep net's ability to generalize, and apply it to this dataset.
- Now imagine the input were *raw DNA sequence* (the actual bases around a regulatory region), not a 0/1/2 marker matrix — or a trait with strong epistasis. Which of the obstacles above would suddenly relax, and why might a deep net win there?

The seam to mine: the gap between "deep learning is the most powerful method, so it should win" and the reality that deep learning's power comes from *exploiting structure in the input* — structure a tabular, additive genotype matrix simply does not contain.

## ③ Abstract Conceptualization — *now read, then articulate*
**Readings** (see [[reading-list|reading list]] for links):
- **Eraslan, Avsec, Gagneur & Theis (2019), *Nature Reviews Genetics* 20:389–403** — the authoritative review of deep learning in genomics. Read for *where* DL genuinely shines: modelling raw sequence (regulatory grammar, splicing, chromatin) where CNNs/RNNs extract motifs a linear model over fixed features cannot. Note that these wins are about *raw sequence and spatial signal*, not tabular marker tables.
- **Zou, Huss, Abid et al. (2019), *Nature Genetics* 51:12–18** — a primer with a practical guide and an interactive tutorial. Read for the toolkit (CNNs, embeddings) and the honest caveats about data requirements and when DL is and is not the right tool.
- **Abdollahi-Arpanahi, Gianola & Peñagaricano (2020), *Genetics Selection Evolution* 52:12** — the load-bearing read for this module. A head-to-head of MLP, CNN, random forest, gradient boosting, GBLUP, and Bayes B on real and simulated data. The real-data result is the lesson: on the bull dataset the best correlation came from gradient boosting (0.36), then Bayes B (0.34) and GBLUP (0.33), with CNN (0.29) and MLP (0.26) *behind* the classical methods. Read for *why* — additive architecture, limited n — and for when DL did better (non-additive simulated gene action).

**Key concepts to convert into evergreen claims** (write each as a declarative-claim note, in your own words — one claim per note):
- *Deep nets shine in genomics when raw sequence or spatial structure carries signal a linear marker model discards — regulatory grammar, motifs, splicing — because their architectures are built to extract that structure.* (e.g. slug `deep-nets-shine-in-genomics-when-raw-sequence-or-spatial-structure-carries-signal-a-linear-model-discards`)
- *On tabular genotype matrices deep nets frequently fail to beat GBLUP, because there is little non-linear signal to exploit and the data are additive and high-dimensional, which a linear shrinkage model already represents exactly.* (e.g. slug `on-tabular-genotype-matrices-deep-nets-frequently-fail-to-beat-gblup`)
- *Deep learning's advantage depends on sample size: with sample sizes small relative to the number of markers, a high-capacity net overfits and generalizes worse than a shrunk linear model.* (e.g. slug `deep-learnings-advantage-in-genomic-prediction-depends-on-large-sample-size-relative-to-markers`)
- *A genotype matrix has no image-like or sequence-like structure for convolutional or transformer architectures to exploit, so the inductive biases that make those architectures powerful elsewhere give no advantage on tabular markers.* (e.g. slug `a-tabular-genotype-matrix-offers-no-spatial-or-sequence-structure-for-cnns-or-transformers-to-exploit`)

**Vocabulary** (define inline as you meet it, do not memorize cold): multilayer perceptron (MLP), convolutional neural network (CNN), filter/kernel, transformer, attention, embedding, inductive bias, universal approximation, overfitting, regularization (dropout, weight decay), epoch, raw sequence vs. marker matrix, tabular data, sample size vs. parameter count, epistasis/non-additive gene action.

## ④ Active Experimentation — *apply it*
- **Exercise:** Add your best deep net (MLP, and optionally a 1-D CNN) as another row in the benchmark table from p4m2, run through the *identical* cross-validation folds, with hyperparameters tuned inside the training folds only. Then write a short, evidence-backed verdict: did any deep net beat GBLUP on held-out predictive ability? By how much, and is the difference inside the fold-to-fold noise? Reproduce, qualitatively, the Abdollahi-Arpanahi et al. ordering on your own data if you can.
- **Mini-project hook:** this deep-net row completes the contender list for [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]. The benchmark's central claim — when fancy methods do and do not beat the classical baseline — now rests on evidence you generated across p4m1–p4m3.
- **Predict-then-check:** Before you run it, predict whether *increasing* the net's capacity (more layers/units) will raise or lower held-out predictive ability on this small dataset. Then test it across a few sizes. Did bigger help or hurt out-of-sample? Connect the result to the sample-size-vs-parameter-count claim. Write the answer.

---

## Exit check
Ready to move on when, from memory, you can:
- [ ] Explain why a deep net usually fails to beat GBLUP on a tabular genotype matrix, citing additive signal, lack of exploitable structure, and small n. (retrieval)
- [ ] Name the conditions under which deep learning *does* win in genomics (raw sequence, spatial/regulatory signal, strong non-additivity, large n) and say why each one helps. (transfer)
- [ ] Describe what a CNN's convolution and a transformer's attention are each built to exploit, and why a 0/1/2 marker table offers neither. (transfer)
- [ ] State the Abdollahi-Arpanahi et al. real-data ordering and what it implies for reaching for deep learning by default. (retrieval)

Assess by invoking the `biostat-assessor` agent on this module, or open [[p4m3-questions|the question bank]].
**Mastery target:** `proficient` on the core claims.

## Evergreen notes produced
- (filled in as you create them)

## Links
- Next: [[p4m4-reading-agricultural-ml-papers|p4m4 · Reading Agricultural ML Papers]]
- Project: [[p4-genomic-prediction-benchmark|Genomic Prediction Benchmark]]
- Phase: [[phase-4-ml-for-genomic-prediction|Phase 4 · Machine Learning for Genomic Prediction]]
- Prerequisite: [[p4m2-ml-approaches-ridge-elastic-net-rf-gradient-boosting|p4m2 · ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting]]
