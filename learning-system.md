---
type: agent-spec
agent: learning-system
created: 2026-05-30
tags: [system, methodology, pedagogy, learning]
---

# learning-system.md — the methodology layer

This is the **why**. [[conventions|conventions.md]] is the **how** (frontmatter, slugs, folders, links). This file explains the learning theory the vault is built to enforce and shows how each bespoke agent and skill implements a piece of it. When the mechanics in conventions feel arbitrary, the answer is here: every rule exists to manufacture a specific cognitive condition the research says you need.

The one-line thesis: **you do not learn quantitative genetics and machine learning by reading about them. You learn them by struggling to reconstruct them from memory, in your own words, against real data, and being caught when you are wrong.** The whole vault is a machine for making that struggle happen on a schedule.

---

## 1. Why passive reading fails

Reading a textbook chapter and feeling like you understood it is the most reliable way to learn nothing durable. The feeling is real; the learning is not. Three findings explain the gap.

**The testing (retrieval) effect.** Roediger and Karpicke (2006) showed that on delayed tests — days or weeks later, which is the timescale that matters — students who *retrieved* material performed far better than students who *re-read* it the same number of times, even though re-reading felt more productive in the moment. The act of pulling a fact out of memory is itself the thing that strengthens the memory. Re-reading hands you the answer and asks your brain to do nothing, so your brain does nothing. (Roediger, H. L., & Karpicke, J. D. (2006). The Power of Testing Memory. *Perspectives on Psychological Science*, 1(3), 181–210.)

**Desirable difficulty.** Robert Bjork's framing: conditions that make practice feel harder and slower — spacing it out, interleaving topics, forcing recall before review — depress your performance *during* study but raise *retention*. Fluency during study is a trap because it predicts performance during study, not performance later. The corollary the vault takes literally: **the system never summarizes for you.** A summary removes the difficulty that is doing the work. Retrieval effort is the mechanism, not a side effect.

**The self-explanation and generation effects.** Chi et al. (1989) found that students learned from worked examples in direct proportion to how well they *explained the steps to themselves* rather than just reading the solution. Slamecka and Graf (1978) showed the related generation effect: words you generate are remembered better than words you merely read. Putting a concept into your own words is not a study nicety; it is a separate, powerful encoding event. This is exactly why evergreen notes must be in your own words with no block quotes — copying a passage is reading, not generating.

The practical conclusion for this vault: **comprehension is not the goal; reconstruction is.** Every module is designed so that the concept arrives as a question you have to answer, not an answer you get to highlight.

---

## 2. The Kolb cycle — the per-module engine

Each module is one turn of David Kolb's experiential learning cycle (Kolb, 1984, building on Lewin, Dewey, and Piaget). The cycle has four stages, and the module spine in `templates/module.md` walks them in order:

1. **Concrete Experience (CE)** — you encounter the phenomenon *before* any explanation. Run a snippet, plot real data, make a numerical prediction. The point is to generate a surprise or a wrong guess, because a wrong guess creates a question, and a question creates the retrieval slot the reading will later fill.
2. **Reflective Observation (RO)** — you write down what you noticed and what surprised you, in a `session` note, answering Socratic prompts. You are forced to articulate the gap between what you predicted and what happened.
3. **Abstract Conceptualization (AC)** — *now* you read, and you immediately convert what you read into evergreen declarative-claim notes in your own words. The reading is in service of resolving the RO question, not in service of coverage.
4. **Active Experimentation (AE)** — you apply the concept in an exercise or mini-project, predict-then-check, and feed the result toward a phase project.

The ordering is the whole point. Lecture-shaped learning runs AC → (maybe) AE and skips CE and RO entirely, which is why it produces the fluency illusion. Kolb's insight is that the experience has to come *first* so the abstraction has something to attach to. The vault enforces this by putting "do this first, before reading" at the top of every module and putting the readings in the third section, not the first.

You can technically enter the cycle at any stage, but in this vault the default entry is always CE, because the failure mode we are guarding against is starting (and stopping) at AC.

---

## 3. Bloom objectives — what "learn this" actually means

Every learning objective and every assessment question is tagged with a level from the revised Bloom taxonomy (Anderson & Krathwohl, 2001): **remember → understand → apply → analyze → evaluate → create.** The revision turned the categories into verbs to keep objectives active and testable.

The vault uses Bloom as a contract. "Learn heritability" is not an objective; it hides which cognitive operation you are actually supposed to be able to perform. "**apply:** estimate narrow-sense heritability from a parent–offspring regression" is an objective, because it names a verb you can be tested on. Modules deliberately push past `remember`/`understand` toward `apply` and `analyze`; projects push toward `create`. The assessor scales its question ladder by Bloom level so that a module claiming an `analyze` objective is probed at `analyze`, not waved through with a definition-recall question.

---

## 4. Dreyfus mastery bands — the progression gate

Skill is not binary, so "done" is not a useful state. The vault tracks five mastery bands flavored after the Dreyfus model of skill acquisition (Dreyfus & Dreyfus, early 1980s — novice, advanced beginner, competent, proficient, expert), mapped to the vault's vocabulary:

`unfamiliar → aware → functional → proficient → fluent`

Every evergreen note and every assessment carries a `mastery` band. The defining shift across the bands is the same one Dreyfus identified: the novice follows rules deliberately and needs the context spelled out; the proficient sees the situation holistically and acts without consulting the rules. A module is only marked `mastered` at `proficient`+ on its **core** claims — meaning you can reconstruct the mechanism and transfer it to an unseen case from memory, not that you once read it. Progression through phases is gated on this, which prevents the standard self-study failure of accumulating shallow exposure across many topics while mastering none.

---

## 5. Spaced repetition — fighting the forgetting curve

A claim learned once and never revisited decays. The vault schedules revisiting. Every evergreen note and module carries a `review-due` date, and the assessor surfaces claims for retrieval on **expanding intervals: 1d → 3d → 7d → 16d → 35d.** Spacing, not massing, is the lever (it is the spacing half of the testing-effect literature). The intervals expand because each successful retrieval buys more durability than the last; they contract on a miss, because a miss means the claim was scheduled too far out and needs an earlier catch. This is the same logic as a flashcard scheduler, but the "card" is a declarative claim you wrote, and the "review" is a Socratic question, not a flip-and-recognize.

---

## 6. The knowledge pipeline — inbox → sources → evergreen → structure

Learning produces notes, and the notes follow a one-directional Zettelkasten pipeline. Knowledge flows **inbox → sources → evergreen → structure → output/posts → docs**, and only one stage is permanent currency.

- **`inbox/` (fleeting)** — raw capture. Decays after seven days. A holding pen, not a home.
- **`sources/` (source, book-thread)** — reading notes, created as **stubs**: frontmatter plus the prompts to fill *while* reading. The system does not pre-fill your reading notes, because pre-filled reading notes are summaries, and summaries remove the generation effect (see §1). You own what goes in them.
- **`evergreen/`** — the only permanent currency. Atomic, one declarative-claim-per-note, in your own words, titled as the claim itself. This is where the generation effect is cashed in. Everything else is scaffolding, index, or artifact; the evergreen layer is the knowledge.
- **`structure/`** — bottom-up cluster maps that emerge *after* enough evergreen notes exist to cluster. Structure is discovered, not imposed up front; you do not write the table of contents before you have the chapters.

The discipline is that nothing skips a stage upward, and the writing loop ([[writing-system|writing-system.md]]) draws only from the evergreen layer, so your public writing is always traceable to claims you actually reconstructed.

---

## 7. How the bespoke agents implement the methodology

The vault ships a small set of agents. Each one is the operational arm of one theory above. None of them write to the vault, commit, or publish without your explicit go-ahead — proposals and critiques only (see [[conventions|conventions.md]] §10).

- **`biostat-tutor`** — runs a module as a live Kolb cycle (§2) rather than a lecture. It opens with the concrete experience, *withholds the explanation*, and draws the claim out of you with a Socratic question ladder scaled by Bloom level (§3). It enforces desirable difficulty: it will not name the concept before you have reconstructed its mechanism, and it will not summarize. Implemented by the `experiential-kolb-teaching` and `socratic-teaching-scaffolds` skills. When an earned claim is ready, it routes it toward an evergreen note (§6).
- **`biostat-assessor`** — runs retrieval-practice assessments and owns the spaced-repetition schedule (§5). It probes at the module's declared Bloom level, assigns a Dreyfus mastery band (§4), writes an `assessment-session` record, and sets the next `review-due` using the expanding-interval rule (pulling it earlier on a miss). Implemented by the `mastery-assessment` skill and the per-module `question-bank` notes. This is the agent that makes retrieval, not re-reading, the default study act.
- **`biostat-lab`** — owns the Active Experimentation stage (§2, stage 4) and the `projects/` folder. It scaffolds the predict-then-check exercises and the phase projects/capstone that push objectives to Bloom `create`. It supplies code and data-analysis scaffolds (`code-data-analysis-scaffolds`) without doing the reasoning for you.
- **`biostat-coach`** — the metacognitive layer. It reads the trackers in `progress/` (status board, skills matrix, journal), watches for stalled modules, mastery bands that have not moved, and review dates piling up, and proposes a goal reset or re-sequencing. It guards against the shallow-breadth failure mode (§4) by surfacing when you are accumulating `aware` everywhere and `proficient` nowhere.
- **`biostat-emergence`** — the bottom-up structure agent. Once the evergreen layer is dense enough, it proposes `structure/` cluster maps and surfaces non-obvious links across phases (§6). It works *after* the notes exist, never before, honoring the "structure is discovered" rule.
- **`biostat-health`** — the vault auditor. It produces `health/` reports: broken or bare (non-piped) links, orphan evergreen notes, source notes with no body `Source:` link, stale inbox items, overdue reviews, frontmatter that violates the type spec. It keeps the machine's mechanics (conventions) honest so the methodology can run on top of them.

Two further agents serve the writing loop and are specified in [[writing-system|writing-system.md]]: the **`scribe`** (generative — assembles your evergreen claims into a draft) and the **`biostat-editor`** (advisory-only — critiques your spoken drafts without rewriting them). The boundary between them — assembling your claims is generative; editing your prose is advisory — is the same boundary that protects the generation effect on the learning side: the system helps you arrange what you produced, it does not produce it for you.

---

## 8. The principles, stated plainly

- Reconstruction beats recognition. If you can recognize it but not reconstruct it, you have not learned it.
- Difficulty during study is the price of retention. The system will feel slower than re-reading. That is the design working, not failing.
- Experience first, explanation second. The question must exist before the answer is useful.
- One claim per note, in your own words. Generation is encoding.
- Mastery is a band you climb, not a box you check. `proficient` on core claims, or the module is not done.
- Space the review; expand on success, contract on a miss.
- Everything proposes; you approve. You are the only source of consequential agency in the system (see [[conventions|conventions.md]] §10).

---

## Links
- Context: [[conventions|conventions.md]] — the mechanics this methodology rides on.
- Extends: [[writing-system|writing-system.md]] — the writing loop that consumes the evergreen layer.
- Applies: [[publishing|publishing.md]] — how finished writing reaches the world.
