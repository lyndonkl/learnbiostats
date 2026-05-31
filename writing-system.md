---
type: agent-spec
agent: writing-system
created: 2026-05-30
tags: [system, methodology, writing, learning-in-public]
---

# writing-system.md — the daily writing loop

This is the **why** of the writing half of the studio. [[conventions|conventions.md]] is the mechanics (note types, slugs, the advisory-only rule in §9, the folder map). [[learning-system|learning-system.md]] is the learning half that *feeds* this loop. This file describes the daily speak-out-your-article loop and the one rule that governs every agent that touches your words.

The premise: **writing in public is how the learning consolidates.** Explaining a concept to a reader is the self-explanation effect (see [[learning-system|learning-system.md]] §1) aimed outward — it forces you to find the holes you skated over. So the writing loop is not a separate hobby bolted onto the vault; it is the final, hardest retrieval test for what you learned that day. You speak the article out loud, from your own understanding, and the system helps you *shape* it without ever taking it over.

---

## 1. The non-negotiable: advisory-only

One rule sits above the whole loop and is stated in full in [[conventions|conventions.md]] §9. Restated here because it is the spine of this document:

**Every agent that touches text you wrote is advisory by default. It critiques, suggests, marks up, and directs structure. It does not modify your draft text unless you explicitly say "apply," "make that change," or "rewrite this."**

Concretely, an advisory agent:

- **Directs structure** — sequence, what to add or cut or reorder, where the spine of the piece is. Structure is the editor's to direct.
- **Flags grammar** — as line-referenced suggestions, never as silent corrections. You see every flag and decide.
- **Suggests strategic language** — sparingly, with rationale, marked as optional. Never imposes voice, form, or word choice.
- **Checks against your voice profile** — `writing/voice-profile.md` is *yours*; the agent checks the draft against it but the profile is yours to change.

The reason is not politeness. It is that the voice is the product. A learning-in-public essay is valuable precisely because it sounds like a specific person figuring something out at the edge of their understanding. An agent that rewrites your sentences launders out the very thing that makes the writing worth reading, and — circling back to the learning rationale — it also removes the generation effort that makes writing a retrieval test. If the machine writes the sentence, you did not retrieve it.

---

## 2. The scribe / editor boundary

There are exactly two roles, and the line between them is the line between *your claims* and *your prose*.

- **The `scribe` is generative.** It assembles a draft from your **evergreen notes** — claims you already reconstructed in your own words. This is composition from your material, not editing your prose, so the advisory-only rule does **not** bind it. A scribe draft is generative-but-traceable: every claim in it points back to an evergreen note (recorded in the post's `based-on` field). The scribe is a starting point for the days you'd rather assemble than speak.
- **The `biostat-editor` is advisory.** It operates on text *you* produced — your spoken-out draft — and it never rewrites it. It runs the four advisory passes (§4) and produces line-referenced critiques, suggestion-only, in `writing/critiques/`.

Said most simply: **assembling your claims into a draft is generative; editing your words is advisory.** The scribe helps you start from your knowledge graph; the editor helps you sharpen what you said. Neither one writes in your place.

The default daily path below uses speaking, not the scribe, because speaking is the harder retrieval test and produces the most authentic voice. The scribe is the alternate on-ramp, not the main one.

---

## 3. The daily loop, step by step

1. **Read + note (morning).** Work a module or a source the experiential way ([[learning-system|learning-system.md]] §2). Convert what you read into evergreen claims with the `zettel-note` skill. These claims are the raw material for the day's article — you write about what you just reconstructed, while it is hot.
2. **Dictate the article (speak it out).** Talk the essay out loud and capture the transcript into `writing/transcripts/`. You are explaining today's concept to a reader from memory. No notes-reading aloud; this is a retrieval performance. The raw transcript is a `transcript` note — messy by design.
3. **Voice-preserving cleanup.** Run the `spoken-draft-cleanup` skill. It removes fillers and false starts, fixes obvious transcription errors (flagged, not silently), and restores paragraph breaks — and *nothing else*. Wording, voice, and form are untouched. The output is a `draft` in `writing/drafts/` with a cleanup log of every mechanical change it made. This draft is yours; you own it.
4. **Advisory editor passes.** Run the `biostat-editor` over the draft (§4). It writes `critique` notes — advisory, line-referenced, suggestion-only. Nothing is applied to your draft.
5. **Revise — by your own hand.** You read the critiques and decide. You make the changes you agree with, in your own words. The agent does not touch the file unless you explicitly say "apply this one."
6. **Pre-publish check.** Run the `writing-pre-publish-checklist` skill (content, structure, clarity, style, polish, final tests) as the last gate.
7. **Publish.** Move the finished piece to `output/posts/` and hand it off to the publishing loop. Publishing is manual and human-gated — see [[publishing|publishing.md]].

---

## 4. The four editor passes

The `biostat-editor` runs the discipline in the `advisory-edit` skill, checked against `learning-in-public-voice` and your `writing/voice-profile.md`. Four passes, all suggestion-only, each producing a `critique` note tagged with its `editor-pass`:

1. **Structural pass.** What is the spine? What should be added, cut, or reordered? Does the opener earn the read; does the closer land? The editor *directs* structure — this is the one dimension it is allowed to be firm on — but proposes, never reorders the file itself.
2. **Line pass.** Grammar and clarity, line-referenced. "L12: 'data is' → consider 'data are' (or keep)." Flags, never silent fixes.
3. **Voice pass.** Does the draft sound like you, per the voice profile? This pass leans on the writing-craft skills (§5) to detect drift toward generic AI-flavored prose, dead hedging, decorative analogies, and flat rhythm.
4. **Pre-publish pass.** The final gate before the piece leaves the writing loop — citation form, claim support, the checklist.

Every item in every pass ends, in effect, with *(your call)*. The editor's verdict frontmatter is permanently `advisory`.

---

## 5. The writing-craft skills

The voice and pre-publish passes are assembled from small, single-purpose skills so each critique points at a specific, fixable thing rather than a vague "tighten this":

- **`slop-detector`** — flags generic, AI-flavored filler and empty connective tissue.
- **`hedge-detector`** — flags dead hedging ("it could be argued that," "somewhat," "perhaps") that drains a claim of its spine. Honest uncertainty stays; reflexive hedging goes.
- **`opener-critique`** — does the first paragraph earn the read, or warm up to the point?
- **`closer-critique`** — does the ending land a thought, or trail off?
- **`analogy-weight-check`** — for each analogy, does it carry mechanical weight (it explains the mechanism) or is it decoration? Cross-checks novelty so you do not reuse the same metaphor every post.
- **`paragraph-rhythm-check`** — sentence-length variance and paragraph pacing, so the prose does not flatten into one long monotone.
- **`writing-pre-publish-checklist`** — the six-section final gate.

These skills are also the lens the `learning-in-public-voice` style is enforced through. Crucially, all of them *report*; none of them rewrite. They tell you where the problem is and leave the fix to you.

---

## 6. Why this loop, in one paragraph

Speaking the article is the day's hardest retrieval test, so it does the most learning. Voice-preserving cleanup keeps the artifact yours so the voice — the actual product — survives contact with the tooling. Advisory-only editing sharpens the structure and catches the errors without laundering the voice or stealing the generation effort. The scribe exists for the days you would rather assemble from your knowledge graph than speak, and it stays honest by being traceable to your evergreen claims. The whole thing runs daily, with a weekly zoom-out, and nothing is ever published without you (see [[publishing|publishing.md]]).

---

## Links
- Context: [[conventions|conventions.md]] — the advisory-only rule (§9) and note-type mechanics.
- Builds-on: [[learning-system|learning-system.md]] — the learning that feeds the writing; the same generation-effect rationale governs both.
- Applies: [[publishing|publishing.md]] — where finished posts go and how they reach Substack.
