---
type: agent-spec
agent: system-overview
created: 2026-05-30
tags: [system, routing, agents, skills]
---

# System Overview — the routing layer

This is the switchboard. It maps what you want to do to the agent or workflow that does it, states the information-flow rules every agent obeys, and draws the line between interactive sessions you run and batch scripts you trigger. The mechanics of *how* notes are named and linked live in [[conventions|Vault Conventions]]; the philosophy lives in [[learning-system|learning-system.md]], [[writing-system|writing-system.md]], and [[publishing|publishing.md]]. This file is the map from intent to tool.

---

## 1. Intent → agent routing table

Tell Claude what you want in plain language; route to the agent below. Every one of these proposes — none commits, publishes, or saves consequential changes without your explicit go-ahead.

| You want to… | Say something like | Agent | What it does |
|---|---|---|---|
| Start a study session | "start p2m1", "let's learn mixed models" | `biostat-tutor` | Runs a module through the Kolb arc (experience → reflect → conceptualize → experiment), never summarizes for you, draws claims out and routes them to evergreen notes. |
| Be tested | "test me on p1m2", "quiz me on heritability" | `biostat-assessor` | Closed-book probing by Bloom level, mastery banding, misconception detection; writes an assessment-session note and updates `review-due` dates. |
| Know what's next / fix pacing | "what should I do today?", "am I behind?" | `biostat-coach` | Reads the trackers, decides the next module/review, manages the daily cadence, surfaces the spaced-repetition queue. |
| Build / review the project | "help me build the p2 project", "review my CV code" | `biostat-lab` | Designs and reviews the experiential projects, scaffolds and runs code, enforces cross-validation discipline and predict-then-check. |
| Find clusters in my notes | "find clusters", "what structure notes are ready?" | `biostat-emergence` | Clusters evergreen notes bottom-up into structure notes (≥4 related notes before a cluster is ready; flags clusters >12 to split). |
| Check vault health | "vault health", "audit the vault" | `biostat-health` | Audits orphans, duplicate claims, weak titles, low link density, stale inbox, under-extracted sources, status drift, overdue reviews; writes a health-report. |
| Draft a post from my notes | "draft a post from these evergreen notes" | `biostat-scribe` | Composes a publish-ready post from your *own* evergreen claims (generative-from-claims, provenance recorded). Does not invent claims. |
| Review my spoken draft | "review my draft", "critique this transcript" | `biostat-editor` | Advisory-only passes (structural → line → voice → pre-publish). Suggests, flags, directs structure; never rewrites unless you say "apply". |
| Make a visualization | "visualize Hardy-Weinberg", "build a drift sim" | `biostat-viz` | Builds interactive D3 visualizations for `docs/`, delegating design critique to `cognitive-design-architect`. |

The two writing agents have a hard boundary between them: **`scribe` assembles your claims** into a draft (generative, but every sentence traces to an evergreen note); **`editor` critiques your words** (advisory, never rewrites). Assembling your claims is composition; editing your prose is advisory-only. See [[conventions|Vault Conventions]] §9.

---

## 2. Intent → skill routing

Skills are the methodologies the agents apply (and that you can invoke directly). The bespoke ones, all installed in `~/.claude/skills/` and mirrored in `~/Documents/Projects/claude/skills/`:

| Skill | Used by | Purpose |
|---|---|---|
| `experiential-kolb-teaching` | `biostat-tutor` | The Kolb cycle as a tutoring method; desirable-difficulty / never-summarize discipline; Socratic ladders by Bloom level. |
| `zettel-note` | `biostat-tutor`, `biostat-scribe` | Vault note discipline: declarative-claim titles, atomicity, own-words, piped links, link-relationship vocabulary, dedup-before-create. |
| `mastery-assessment` | `biostat-assessor` | Bloom-tagged probing, Dreyfus mastery bands, closed-book-first protocol, misconception detection, spaced-repetition scheduling. |
| `spoken-draft-cleanup` | (intake before editing) | Mechanical-only transcript cleanup (fillers, punctuation, paragraphs); flags likely transcription errors; never restructures or rewords. |
| `learning-in-public-voice` | `biostat-scribe`, `biostat-editor` | The house voice lens — overridden by `writing/voice-profile.md`, which always wins. |
| `advisory-edit` | `biostat-editor` | The advisory-only editing discipline and its four passes. |
| `genomics-viz` | `biostat-viz` | D3 visualization catalog for genetics/genomics concepts, encoding guidance, annotation-layer storytelling. |

Real Claude Code skills the agents also lean on by bare name: `socratic-teaching-scaffolds`, `worked-example-walkthrough`, `memory-retrieval-learning`, `evaluation-rubrics`, `cognitive-design`, `d3-visualization`, `visual-storytelling-design`, `design-evaluation-audit`, `cognitive-fallacies-guard`, plus the writing-craft set (`slop-detector`, `hedge-detector`, `opener-critique`, `closer-critique`, `analogy-weight-check`, `paragraph-rhythm-check`, `writing-pre-publish-checklist`).

---

## 3. Information-flow rules (every agent obeys these)

1. **All knowledge enters as evergreen, through a tutor session.** New claims are born in a `biostat-tutor` session, drawn out of you, and written as atomic declarative-claim notes in `evergreen/`. Knowledge does not enter through a post, a tracker, or a fleeting note. The pipeline is one-directional: `inbox → sources → evergreen → structure → output/posts → docs` (see [[conventions|Vault Conventions]] §1).
2. **Everything proposes; the human approves.** No agent saves a consequential change, edits your draft prose, commits to git, or publishes without your explicit instruction. The only autonomous actions are reads, searches, and producing proposals/critiques.
3. **Nothing is committed or published autonomously.** Git commits, pushes, and Substack pastes are always your action. Agents may *prepare* a commit message or a post card; they do not run the commit or the publish.
4. **Provenance is preserved.** Posts record the evergreen notes they draw from (`based-on:` + a `## Provenance` section). Source notes link their source in the body, not just the frontmatter (the `Source:` link rule).
5. **The advisory boundary is structural, not just stated.** `biostat-editor` has no Write/Edit/Bash tools — it physically cannot alter a draft. That is the enforcement of the advisory-only rule, not merely a promise.

---

## 4. Interactive vs batch

**Interactive agents** — you run these in a conversation, turn by turn, because they depend on your responses (your recall, your draft, your decisions):

- `biostat-tutor` — a study session is a dialogue; the learning happens in your retrieval effort.
- `biostat-assessor` — a closed-book quiz only works if you answer before seeing the answer.
- `biostat-editor` — critique is a conversation about *your* words; you decide what to apply.
- `biostat-scribe` — composing a post is iterative; you reshape what it hands back.

`biostat-coach`, `biostat-lab`, `biostat-emergence`, `biostat-health`, and `biostat-viz` can run interactively too, but their work is also packaged as re-runnable batch scripts.

**Batch Workflow scripts** — saved in `.claude/workflows/`, triggered on demand or on a cadence, for work that scans the whole vault or builds artifacts:

| Script | What it does | Roughly maps to |
|---|---|---|
| `build-learning-studio` | One-time scaffold of skills, agents, docs, the 5-phase curriculum, question banks, projects, capstones, seeds, and the D3 site; verifies conventions at the end. | the whole system |
| `emergence-scan` | Scans `evergreen/` for ready clusters and proposes structure notes. | `biostat-emergence` |
| `health-audit` | Full vault + curriculum health pass; writes a `health/health-report-*.md`. | `biostat-health` |
| `build-viz` | Generates / refreshes the `docs/` D3 visualizations. | `biostat-viz` |

The distinction in one line: **interactive when the learning or the judgment is yours to supply; batch when the work is a scan or a build over material that already exists.**

---

## 5. The daily / weekly loop, by agent

- **Morning** — `biostat-coach` says what's due (next module + spaced-repetition items); `biostat-tutor` runs the session; new claims land in `evergreen/`.
- **Writing** — speak an article, save the transcript to `writing/transcripts/`, run `spoken-draft-cleanup`, then `biostat-editor` reviews. `biostat-scribe` can scaffold a draft from your notes when you want a starting point.
- **Weekly** — `biostat-assessor` runs the review queue; `biostat-emergence` looks for clusters; `biostat-health` audits; you update [[tracker|Progress Tracker]] and [[skills-matrix|Skills Matrix]].

## Links
- Context: [[conventions|Vault Conventions]]
- Context: [[learning-system|learning-system.md]]
- Context: [[writing-system|writing-system.md]]
- Context: [[publishing|publishing.md]]
- Applies: [[tracker|Progress Tracker]]
