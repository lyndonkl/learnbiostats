---
type: reference
created: 2026-05-30
tags: [assessment, index]
---

# How Assessment Works Here

Assessment in this vault is not a grade. It is a **retrieval event**: the moment you try to produce a claim from memory, fail in an interesting way, and learn from the gap. The system is built on the premise from [[learning-system|learning-system.md]] that retrieval effort is the mechanism of durable learning, not a side effect of it. Everything below serves that premise.

Assessment is run by the `biostat-assessor` agent (its operating discipline is the [[mastery-assessment|mastery-assessment skill]]). The assessor asks, waits for your answer, then probes the gap before it confirms anything. It never opens with the answer.

---

## 1. Two axes: Bloom (what kind of thinking) and Dreyfus (how good you are)

Every question and every objective is tagged on two independent axes.

**Bloom's revised taxonomy** (Anderson & Krathwohl, 2001) tags the *kind of cognitive work* a question demands, ascending:

`remember → understand → apply → analyze → evaluate → create`

Question banks are organized by Bloom level, ascending, and a session climbs the ladder: you do not get asked to *evaluate* a GWAS design before you can *apply* the mixed model. Modules target `apply`/`analyze`; projects and capstones target `create`.

**Dreyfus-flavored mastery bands** tag *how well you hold the material*, and they gate progression:

`unfamiliar → aware → functional → proficient → fluent`

| Band | What it means in practice |
|---|---|
| `unfamiliar` | You have not met the claim, or cannot state it. |
| `aware` | You can recognize and roughly restate it, but lean on notes. |
| `functional` | You can produce it from memory and apply it to a familiar case. |
| `proficient` | You can apply it to a novel case and explain the mechanism, not just the vocabulary. |
| `fluent` | You can teach it, see its limits, and connect it to neighboring claims unprompted. |

A module is `mastered` at `proficient`+ on its core claims (see [[conventions|Vault Conventions]] §8). Every evergreen note carries a `mastery:` field, and assessment is what moves it.

---

## 2. The closed-book-first protocol

The single most important rule: **the first attempt is always closed-book.**

1. **Closed-book retrieval.** The assessor poses the question. You answer from memory, out loud or in writing, *before* opening any note. The struggle is the point — this is the "desirable difficulty" the whole system is designed around.
2. **Probe the gap.** The assessor does not say "correct/incorrect." It asks a follow-up aimed at the seam in your answer: "you said heritability is a property of the trait — what would change if you moved the population to a different environment?"
3. **Open-book repair.** *Only after* the closed attempt and the probe do you open the relevant evergreen note to check and repair. The contrast between what you produced and what is true is where the learning lands.
4. **Score and schedule.** The assessor records a mastery band for the claim and sets the next `review-due` date (see §3).

Answer sketches in the question banks exist for the assessor's grading only; they are never read to you first. This protocol is the reason the system "never summarizes for you."

---

## 3. The spaced-repetition queue (expanding intervals)

Claims you have touched do not vanish — they re-surface on an **expanding-interval** schedule, because each longer gap forces a harder (and therefore more durable) retrieval. The base ladder is:

`1 day → 3 days → 7 days → 16 days → 35 days → …`

- A **pass** at a given band advances the item to the next, longer interval.
- A **miss** pulls the item back toward the start of the ladder (the date is set earlier), so weak claims come around fast and strong ones come around rarely.

Each evergreen note and each module carries a `review-due` date in its frontmatter. The live queue, the schedule details, and the current table of due items live in [[spaced-repetition|the spaced-repetition queue]].

---

## 4. What gets assessed, and where it lands

| Artifact | Type | Where |
|---|---|---|
| Per-module question banks (Bloom-ordered) | `question-bank` | `assessments/question-banks/` |
| Records of assessment sessions | `assessment-session` | `assessments/log/` |
| The review queue + interval schedule | this folder | [[spaced-repetition|spaced-repetition.md]] |

A logged `assessment-session` records the module, the Bloom levels exercised, the resulting `mastery-band`, a score, and the `next-review` date — the frontmatter spec is in [[conventions|Vault Conventions]] §6.

---

## 5. How to run an assessment

- Invoke the `biostat-assessor` agent on a module or on a set of evergreen claims; it follows the [[mastery-assessment|mastery-assessment skill]] (closed-book first, probe the gap, then schedule).
- Or open the module's question bank directly (e.g. `assessments/question-banks/pNmM-questions.md`) and self-assess against the closed-book-first protocol.
- Everything proposes; you approve. The assessor records and schedules, but you remain the source of agency (see [[conventions|Vault Conventions]] §10).

## Links
- Conventions: [[conventions|Vault Conventions]]
- The review queue: [[spaced-repetition|Spaced-Repetition Queue]]
- Learning philosophy: [[learning-system|learning-system.md]]
- Projects this assessment covers: [[projects/README|Projects Index]]
