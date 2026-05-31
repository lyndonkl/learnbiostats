---
type: reference
created: 2026-05-30
tags: [assessment, spaced-repetition, queue]
---

# Spaced-Repetition Queue

This is the live review queue. It schedules when each evergreen claim (and each module) re-surfaces for a closed-book retrieval attempt. The design follows from the protocol in [[assessments/README|How Assessment Works]] §3: longer gaps force harder, more durable retrievals, so intervals **expand** after every successful recall and **contract** after a miss.

---

## The interval schedule

The base ladder of expanding intervals (in days from the last review):

| Step | Interval | Rationale |
|---|---|---|
| 1 | 1 day | First consolidation, the day after the claim is formed. |
| 2 | 3 days | Catch it before the first big forgetting drop. |
| 3 | 7 days | Weekly cadence; the claim should now be reproducible. |
| 4 | 16 days | Stretch the gap; retrieval is harder and therefore stronger. |
| 5 | 35 days | Monthly-ish; reserved for claims at `proficient`+. |
| 6+ | ×~2 each step | Continue roughly doubling for `fluent` claims. |

**Rules of motion**
- **Pass** (recalled cleanly, closed-book) → advance one step to the next, longer interval; set `review-due = today + new interval`.
- **Miss** (could not produce it, or the probe exposed a real gap) → drop back toward step 1; set `review-due = today + 1 day`. Weak claims churn fast.
- **Partial** (right idea, wrong mechanism) → hold at the current step; do not advance.

A new evergreen note is created at step 1, so its first `review-due` is the day after it was written.

The `biostat-assessor` agent updates this table and the `review-due` field in each note's frontmatter after a session. The two should always agree; if they drift, the note's frontmatter is the source of truth.

---

## Current queue (seed items)

The three seed evergreen claims were created 2026-05-30 at step 1 (`mastery: aware`), so each is first due the next day.

| Item | Last reviewed | Interval (step) | Review-due |
|---|---|---|---|
| [[heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait\|Heritability is a property of a population in an environment, not of a trait]] | — (created 2026-05-30) | 1 day (step 1) | 2026-05-31 |
| [[genomic-prediction-works-because-markers-in-ld-with-causal-variants-let-a-marker-relationship-matrix-estimate-realized-relatedness\|Genomic prediction works because markers in LD with causal variants let a marker-based relationship matrix estimate realized relatedness]] | — (created 2026-05-30) | 1 day (step 1) | 2026-05-31 |
| [[the-breeders-equation-says-response-to-selection-equals-narrow-sense-heritability-times-the-selection-differential\|The breeder's equation says response to selection equals narrow-sense heritability times the selection differential]] | — (created 2026-05-30) | 1 day (step 1) | 2026-05-31 |

As more evergreen notes and modules are created, add a row each with its initial `review-due` (creation date + 1 day) and keep the table sorted by `review-due` ascending so the next due item is always on top.

## Links
- How assessment works: [[assessments/README|How Assessment Works]]
- Conventions (spaced repetition primitive): [[conventions|Vault Conventions]] §8
- Assessment discipline: [[mastery-assessment|mastery-assessment skill]]
