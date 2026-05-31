---
type: agent-spec
agent: conventions
created: 2026-05-30
tags: [system, conventions]
---

# Vault Conventions — the constitution

This file is the single source of truth for how every note in this vault is named, structured, and linked. Every agent (and every human session) reads this before creating or editing a note. It mirrors the conventions of the reference vault (`multiagentbrainstorming`) and extends them with curriculum, assessment, and writing-pipeline note types.

The philosophy is in [[learning-system|learning-system.md]] and [[writing-system|writing-system.md]]. This file is mechanics only.

---

## 1. The four loops, one vault

This is one Obsidian-compatible vault that runs four interlocking loops:

1. **Learn** — `curriculum/`, driven by the Kolb experiential cycle and Socratic probing.
2. **Note** — `sources/ → evergreen/ → structure/`, the Zettelkasten knowledge graph.
3. **Write** — `writing/` (transcripts → drafts → critiques) and `output/posts/`, advisory-only editing.
4. **Publish** — `git`, `docs/` (GitHub Pages with D3 visualizations), link-out to Substack.

Knowledge flows in one direction: **inbox → sources → evergreen → structure → output/posts → docs**. Only `evergreen` notes are permanent currency. Everything else is scaffolding (curriculum, sources), index (structure), or artifact (posts, viz, assessments).

---

## 2. Folder map

| Folder | Holds | Note `type` |
|---|---|---|
| `curriculum/` | roadmap + phase overviews | `roadmap`, `phase` |
| `curriculum/modules/` | weekly learning modules | `module` |
| `system/` | agent specs + routing + conventions | `agent-spec` |
| `sources/{books,papers,articles,docs,datasets}/` | reading notes | `source`, `book-thread` |
| `evergreen/` | atomic declarative-claim notes | `evergreen` |
| `structure/` | bottom-up cluster maps | `structure-note` |
| `projects/` + `projects/capstone/` | experiential labs | `project` |
| `assessments/question-banks/` | Socratic question banks per module | `question-bank` |
| `assessments/log/` | records of assessment sessions | `assessment-session` |
| `progress/` | trackers (status board, skills matrix, journal) | `tracker`, `skills-matrix`, `journal` |
| `inbox/` | fleeting capture (decays after 7 days) | `fleeting` |
| `resources/` | consolidated reading list, links | `reference` |
| `writing/transcripts/` | raw spoken-out transcripts | `transcript` |
| `writing/drafts/` | cleaned drafts (voice preserved, you own them) | `draft` |
| `writing/critiques/` | editor advisory critiques (never auto-applied) | `critique` |
| `output/posts/` | publish-ready posts (source for Substack) | `post` |
| `docs/` | GitHub Pages site + interactive D3 viz | static HTML/JS/CSS |
| `health/` | vault audit reports (created over time) | `health-report` |
| `templates/` | note templates | — |
| `.claude/workflows/` | saved re-runnable Workflow scripts | — |

---

## 3. The non-negotiable linking rule

**Every internal link uses the piped form `[[slug|Display Title]]`. Never bare `[[Title]]`.**

- The **slug** is the filename without `.md` (lowercase, hyphenated, punctuation stripped).
- The **Display Title** is the human-readable title (for evergreen notes, the full declarative claim; matches the note's `# H1` and its `aliases`).
- Bare `[[Full Sentence Title]]` links break, because the file on disk is `full-sentence-title.md`. Obsidian's graph and backlinks rely on exact filename matching.
- Slugs are globally unique across the whole vault. Obsidian resolves them regardless of folder, so never use relative paths in links.

**Slug derivation:** lowercase the title; replace spaces with hyphens; strip apostrophes and punctuation; keep the sentence structure intact. Long slugs (60+ chars) are fine and expected for evergreen claims.

**The `source:` link rule:** A YAML `source:` field is plain text (for Dataview queries) and is invisible to the graph. Every note that has a source MUST also carry a `Source: [[slug|Title]]` link in the body, directly under the H1. That body link is what the graph sees.

---

## 4. Link relationship vocabulary

In the `## Links` section of a note, label each link with its relationship. Knowledge links (from the reference vault):

- **Confirms:** same claim, independent source.
- **Contradicts:** opposing claim, productive tension.
- **Extends:** builds on, deepens, applies.
- **Context:** background, prerequisite framing.

Learning links (added for this vault):

- **Prerequisite:** you must hold this claim before the current one makes sense.
- **Builds-on:** the current claim assumes and develops this one.
- **Applies:** the current claim is put to work in this project/method.
- **Example-of:** the current claim is a concrete instance of this general one.
- **Contrasts-with:** related but importantly different (not contradictory).

Target 3–6 outbound links per evergreen note.

---

## 5. Naming conventions

| Note type | Slug pattern | Example |
|---|---|---|
| `evergreen` | the full declarative claim, slugified | `heritability-is-a-property-of-a-population-in-an-environment-not-of-a-trait.md` |
| `source` | slugified source title | `sources/books/introduction-to-quantitative-genetics.md` |
| `book-thread` | slugified title + `-thread` | `sources/books/falconer-mackay-quantitative-genetics-thread.md` |
| `structure-note` | the cluster concept/question, slugified | `structure/why-relatedness-is-the-engine-of-genomic-prediction.md` |
| `roadmap` | `roadmap` | `curriculum/roadmap.md` |
| `phase` | `phase-N-<slug>` | `curriculum/phase-2-quantitative-genetics.md` |
| `module` | `pNmM-<slug>` | `curriculum/modules/p2m3-mixed-models-and-blup.md` |
| `question-bank` | `pNmM-questions` | `assessments/question-banks/p2m3-questions.md` |
| `project` | descriptive slug | `projects/p2-simulate-a-breeding-population.md` |
| `assessment-session` | `pNmM-assessment-YYYY-MM-DD` | `assessments/log/p2m3-assessment-2026-06-14.md` |
| `session` | `pNmM-session-YYYY-MM-DD` | created during study |
| `post` | descriptive slug | `output/posts/what-heritability-is-not.md` |
| `draft` | descriptive slug | `writing/drafts/what-heritability-is-not.md` |
| `critique` | `<draft-slug>-critique-PASS` | `writing/critiques/what-heritability-is-not-critique-structural.md` |
| `health-report` | `health-report-YYYY-MM-DD` | `health/health-report-2026-06-30.md` |

Module ID scheme: `p<phase><m><module-number>`. Phase 1 modules are `p1m1, p1m2, p1m3`; Phase 4 modules are `p4m1 … p4m4`.

---

## 6. Frontmatter by type (copy these exactly)

### evergreen
```yaml
---
type: evergreen
created: YYYY-MM-DD
source: "Source note title or thought session"
phase: 2            # 1–5, or null if cross-cutting
module: p2m1        # or null
tags: [quantitative-genetics, heritability, variance]
mastery: aware      # unfamiliar | aware | functional | proficient | fluent
review-due: YYYY-MM-DD   # next spaced-repetition surfacing
aliases:
  - "Full declarative claim as title"
---
```

### source
```yaml
---
type: source
source_type: book        # book | paper | article | doc | dataset
title: "Original title of the source"
authors: "Author name(s)"
date_read: YYYY-MM-DD
url: ""                   # or `urls:` list
phase: 2
module: p2m1
tags: []
aliases:
  - "Short title"
---
```

### book-thread (multi-session reading)
```yaml
---
type: book-thread
title: "Book Title"
author: "Author"
started: YYYY-MM-DD
status: reading          # reading | finished
phase: 2
tags: []
---
```

### structure-note
```yaml
---
type: structure-note
created: YYYY-MM-DD
phase: 2                 # or null if cross-phase
tags: []
---
```

### phase
```yaml
---
type: phase
phase: 2
title: "Quantitative Genetics"
duration: "6–8 weeks"
status: not-started      # not-started | in-progress | complete
modules: [p2m1, p2m2, p2m3]
project: "[[p2-simulate-a-breeding-population|Simulate a Breeding Population]]"
competencies: []
tags: [curriculum]
---
```

### module
```yaml
---
type: module
phase: 2
module: p2m1
title: "Phenotype vs Genotype: Sources of Variation"
weeks: "Weeks 1–2"
status: not-started      # not-started | reading | practicing | assessed | mastered
prerequisites: [p1m2]
objectives:              # Bloom-tagged, see §8
  - "understand: ..."
  - "apply: ..."
readings: []
project: null
question-bank: "[[p2m1-questions|P2M1 Question Bank]]"
review-due: null
tags: []
---
```

### project
```yaml
---
type: project
phase: 2
title: "Simulate a Breeding Population"
status: not-started      # not-started | in-progress | complete
skills: [python, simulation, heritability-estimation]
deliverables: []
datasets: []
tags: [project, experiential]
---
```

### question-bank
```yaml
---
type: question-bank
module: p2m1
phase: 2
created: YYYY-MM-DD
tags: [assessment]
---
```

### assessment-session
```yaml
---
type: assessment-session
module: p2m1
date: YYYY-MM-DD
bloom-levels: [understand, apply, analyze]
mastery-band: functional   # unfamiliar | aware | functional | proficient | fluent
score: "7/10"
next-review: YYYY-MM-DD
tags: [assessment]
---
```

### session (Kolb study session)
```yaml
---
type: session
module: p2m1
phase: 2
date: YYYY-MM-DD
kolb-stage: full-cycle     # experience | reflect | conceptualize | experiment | full-cycle
duration-min: 45
tags: [session]
---
```

### post (publish-ready)
```yaml
---
type: post
created: YYYY-MM-DD
status: draft              # draft | edited | published
title: "..."
phase: 2
based-on: []               # evergreen slugs this post draws from (provenance)
viz: ""                    # docs/ viz path if any
substack-url: ""           # filled in when published
tags: []
---
```

### draft (cleaned spoken transcript)
```yaml
---
type: draft
created: YYYY-MM-DD
status: cleaned            # raw | cleaned | in-review
source-transcript: "writing/transcripts/..."
title: "..."
tags: [draft]
---
```

### critique (editor advisory output — ALWAYS advisory)
```yaml
---
type: critique
created: YYYY-MM-DD
target: "writing/drafts/<slug>.md"
editor-pass: structural    # structural | line | voice | pre-publish
verdict: advisory          # ALWAYS advisory — no changes applied to the target
tags: [critique]
---
```

---

## 7. Internal structure by type

### evergreen
```markdown
# [Full declarative claim as title]

Source: [[source-slug|Source Title]]

[2–4 paragraphs in your own words. No block quotes, no copied passages. Develop the single claim.]

**Open questions:** (optional)
- ...

## Links
- Builds-on: [[slug|Title]]
- Applies: [[slug|Title]]
- Context: [[slug|Title]]
```

One claim per note (atomicity). If a candidate title contains "and" joining two distinct claims, split it.

### module
Follows `templates/module.md` exactly. The spine is the Kolb arc: **Experience → Reflect → Conceptualize → Experiment**, then an exit check. See §8.

### post
Follows `templates/post.md`. Drafted by the `scribe` agent from your evergreen notes, in vault style, ready to speak/publish.

### critique
Follows `templates/critique.md`. Marked-up, line-referenced, suggestion-only.

---

## 8. Pedagogy primitives (used across modules and assessments)

**Kolb experiential cycle** — every module moves a concept through four stages:
1. **Concrete Experience (CE)** — encounter the phenomenon first (run a snippet, look at real data, make a prediction) *before* formal reading.
2. **Reflective Observation (RO)** — what did you notice? what surprised you? (journal + Socratic prompts)
3. **Abstract Conceptualization (AC)** — read; form the concept; articulate it as evergreen claims in your own words.
4. **Active Experimentation (AE)** — apply it: an exercise or mini-project; predict-then-check.

**Bloom's taxonomy** tags every learning objective and question: `remember → understand → apply → analyze → evaluate → create`. Modules push toward `apply`/`analyze`; projects toward `create`.

**Mastery bands** (Dreyfus-flavored) gate progression: `unfamiliar → aware → functional → proficient → fluent`. A module is `mastered` at `proficient`+ on its core claims.

**Spaced repetition** — evergreen notes and modules carry a `review-due` date. The assessor schedules the next surfacing using expanding intervals (1d → 3d → 7d → 16d → 35d), pulling the date earlier on a miss.

**Desirable difficulty** — the system never summarizes for you. Retrieval effort is the mechanism, not a side effect (see [[learning-system|learning-system.md]]).

---

## 9. The advisory-only writing rule (system-wide)

This rule governs every agent that touches text **you wrote** (drafts from your spoken articles):

- Writing agents are **advisory by default.** They critique, suggest, mark up, and direct structure. They **do not modify your draft text** unless you explicitly say "apply," "make that change," or "rewrite this."
- They direct **structure** (sequence, what to add/cut/reorder, where the spine is) but do **not** impose voice, form, or word choice.
- They **flag grammar** as line-referenced suggestions, never silent corrections.
- They **suggest** strategic idioms or phrasing sparingly, with rationale, as options.
- They check the draft against `writing/voice-profile.md` (your owned voice guide) using the writing-craft skills, but the profile is yours to change.

This rule does **not** apply to the `scribe` agent, which *generates* new vault-style notes/posts from your own evergreen claims (that is composition from your material, not editing your prose). The boundary: editing your words = advisory; assembling your claims into a draft = generative-but-traceable.

---

## 10. Everything proposes; you approve

No agent saves to the vault, commits to git, or publishes without your explicit go-ahead. The only autonomous actions are reads, searches, and producing proposals/critiques. You are the sole source of consequential agency directing the system.
