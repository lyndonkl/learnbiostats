# learnbiostats — the Learning Studio

A single Obsidian-compatible vault for learning ML-driven crop genetics / genomic selection *and writing about it in public while it's still being learned.* It is built so that learning, note-making, writing, and publishing reinforce each other instead of living in separate apps.

This README is the map of content. New here? Read [[learning-system|learning-system.md]] for why the learning works the way it does, then [[conventions|Vault Conventions]] for the mechanics.

---

## What this is: four loops, one vault

1. **Learn** — `curriculum/`, driven by the Kolb experiential cycle and Socratic probing. You meet a phenomenon before you read about it, then build the concept yourself.
2. **Note** — `sources/ → evergreen/ → structure/`, a Zettelkasten knowledge graph of atomic, declarative-claim notes that link to each other.
3. **Write** — `writing/` (transcripts → drafts → critiques) and `output/posts/`. You *speak* your articles; editing is advisory-only and never takes your voice.
4. **Publish** — git + `docs/` (a GitHub Pages site with interactive D3 visualizations) that links out to Substack.

Knowledge flows one way: **inbox → sources → evergreen → structure → output/posts → docs**. Only `evergreen` notes are permanent currency; everything else is scaffolding, index, or artifact.

---

## Folder map

| Folder | Holds |
|---|---|
| `curriculum/` | the [[roadmap\|roadmap]], the 5 phase overviews, and `modules/` (15 weekly modules `p1m1`…`p5m2`) |
| `system/` | [[conventions\|conventions]], [[system-overview\|the routing table]], and agent specs |
| `sources/{books,papers,articles,docs,datasets}/` | reading notes (created as stubs, filled while reading) |
| `evergreen/` | atomic declarative-claim notes — the knowledge graph |
| `structure/` | bottom-up cluster maps over evergreen notes |
| `projects/` + `projects/capstone/` | experiential labs and the three portfolio capstones |
| `assessments/` | question banks, the assessment log, and the spaced-repetition queue |
| `progress/` | [[tracker\|status board]], [[skills-matrix\|skills matrix]], [[learning-journal\|learning journal]] |
| `inbox/` | fleeting capture (decays after 7 days) |
| `resources/` | the consolidated [reading list](resources/reading-list.md) and links |
| `writing/transcripts/` | raw spoken-out transcripts |
| `writing/drafts/` | cleaned drafts (voice preserved; you own them) |
| `writing/critiques/` | editor advisory critiques (never auto-applied) |
| `output/posts/` | publish-ready posts (the source for Substack) |
| `docs/` | the GitHub Pages site + interactive D3 visualizations |
| `health/` | vault audit reports |
| `templates/` | note templates |
| `.claude/workflows/` | re-runnable batch Workflow scripts |

---

## Quick start

**To study today:** tell Claude `start <module>` — e.g. `start p1m1`. The `biostat-tutor` opens with a concrete experience (real data, a snippet, a prediction you make *before* reading), draws the concept out of you, and routes the claims you form into `evergreen/` notes. Ask `biostat-coach` "what should I do today?" if you're not sure which module or review is due.

**To be tested:** tell Claude `test me on <module>`. The `biostat-assessor` runs a closed-book probe, bands your mastery, and schedules the next spaced-repetition review.

**To write:** speak your article out loud, save the transcript to `writing/transcripts/`, then ask `biostat-editor` to review it. The editor runs structural → line → voice → pre-publish passes and never changes your words unless you say "apply." (Run `spoken-draft-cleanup` first to strip fillers and restore punctuation — mechanical only, voice untouched.) Want a starting scaffold instead of a blank page? Ask `biostat-scribe` to draft a post from a named set of your evergreen notes.

**To publish:** see [[publishing|publishing.md]]. Posts live in `output/posts/`; the `docs/` site indexes them and links out to Substack (Substack has no auto-post API, so the final paste is always yours). Nothing is pushed or published without you.

---

## Read next

- [[learning-system|learning-system.md]] — the experiential-learning methodology (why passive reading fails; Kolb, Bloom, Dreyfus, spaced repetition).
- [[writing-system|writing-system.md]] — the speak-out-your-article loop and the advisory-only editing rule.
- [[publishing|publishing.md]] — git workflow, the docs/ site, and the link-out-to-Substack model.
- [[conventions|Vault Conventions]] — the constitution: naming, frontmatter, the piped-link rule.
- [[roadmap|Roadmap]] — the 5-phase plan from genetics literacy to a genomic-prediction portfolio.
- [[system-overview|System Overview]] — intent → agent/skill routing.

---

## Bespoke skills and agents

These are installed in `~/.claude/` (active for every session) and mirrored in the `~/Documents/Projects/claude` repo (version-controlled source of truth).

**Agents** (`~/.claude/agents/`):

| Agent | Role |
|---|---|
| `biostat-tutor` | Socratic experiential tutor; runs module sessions through the Kolb arc. |
| `biostat-assessor` | Closed-book probing assessor; mastery banding + spaced-repetition scheduling. |
| `biostat-coach` | Curriculum coach; pacing, what's-next, tracker updates, review queue. |
| `biostat-lab` | Project / lab mentor; scaffolds and reviews code; cross-validation discipline. |
| `biostat-emergence` | Clusters evergreen notes into structure notes. |
| `biostat-health` | Audits vault + curriculum health; writes health-reports. |
| `biostat-scribe` | Generative post/note writer — composes from *your* evergreen claims. |
| `biostat-editor` | Advisory-only editor of *your* spoken drafts (no Write/Edit/Bash — structurally read-only). |
| `biostat-viz` | Builds interactive D3 visualizations for the docs/ site. |

**Skills** (`~/.claude/skills/`): `experiential-kolb-teaching`, `zettel-note`, `mastery-assessment`, `spoken-draft-cleanup`, `learning-in-public-voice`, `advisory-edit`, `genomics-viz`. See [[system-overview|System Overview]] for the full intent → skill mapping.

**Batch Workflow scripts** (`.claude/workflows/`): `build-learning-studio` (the one-time scaffold), `emergence-scan`, `health-audit`, `build-viz`.

---

## Cadence

**Daily:**
- Ask `biostat-coach` what's due (next module + spaced-repetition items).
- Run one `biostat-tutor` session; let new claims land in `evergreen/`.
- Optionally: speak one short article, clean the transcript, get an `biostat-editor` pass. Log a line in [[learning-journal|the learning journal]].

**Weekly:**
- `biostat-assessor` runs the review queue; update mastery bands in [[skills-matrix|the skills matrix]].
- `biostat-emergence` looks for ready clusters (≥4 related evergreen notes → a structure note).
- `biostat-health` audits the vault; review the report.
- Update [[tracker|the progress tracker]] (module statuses, streak, this-week focus) and pick next week's focus.
- Ship at least one post if a draft is pre-publish-clean.

---

The end goal: be genuinely able to contribute to ML-driven crop genetics / genomic selection — understand a breeding dataset, build a predictive model, and collaborate with breeders — and to have written, in public, the understanding that got you there. See the [[roadmap|roadmap]] for the path.
