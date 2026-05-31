---
type: agent-spec
agent: publishing
created: 2026-05-30
tags: [system, methodology, publishing, git, github-pages, substack]
---

# publishing.md — the publishing loop

This is the **why and the exact how** of getting finished writing out of the vault and into the world. [[conventions|conventions.md]] is the note mechanics; [[writing-system|writing-system.md]] produces the finished posts this loop consumes. Here we cover git, the `docs/` GitHub Pages site that links *out* to Substack, where the interactive D3 visualizations live, and the daily/weekly cadence.

**The single overriding rule: nothing is pushed, deployed, or published without you.** Every step below ends at a command *you* run or a button *you* click. The agents prepare; the human ships. This mirrors [[conventions|conventions.md]] §10 — the only autonomous actions in the whole studio are reads, searches, and proposals.

---

## 1. The publishing topology

There are three surfaces, and it matters which one is the source of truth for what:

- **`output/posts/` (the vault)** — the canonical source text for every post. A `post` note with full provenance (`based-on` evergreen slugs, `viz` path, `substack-url` once live). This is where the post *lives*.
- **`docs/` (GitHub Pages site)** — a static site that **indexes** your posts and **hosts the interactive D3 visualizations**. It does not republish the full post body. For each post it shows a title, a blurb, and a link *out* to the canonical reading copy on Substack. It is a directory and a gallery, not a second blog.
- **Substack** — where readers actually read the prose and where subscriptions live. The full text is pasted here by hand (see §4).

So the post body lives in two places — the vault (source) and Substack (published) — and the GitHub Pages site is the **third thing that points at both**. The site records the `substack-url` so the index can link out; the vault's `post` note records the same URL so provenance is closed. The D3 visualization is the one asset that lives *only* in `docs/` and is *embedded into* the Substack post via an iframe or a link, because Substack cannot host custom interactive JavaScript.

---

## 2. The git workflow

The vault is a git repository. Posts, viz, curriculum, and notes are versioned; the publish history is the commit history.

- Work happens on a branch when you are doing anything substantial; the default branch (`main`) is what GitHub Pages deploys from.
- GitHub Pages is configured to **deploy from the `main` branch, `/docs` folder** (GitHub's built-in option — Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, Folder: `/docs`). Every push to `main` that changes `docs/` redeploys the site. This is why the site must always have a `/docs` folder present, or the build errors.
- **A push is a human action.** The agents may prepare a commit message and stage files and tell you the exact command; they do not run `git push`. You push.

### 2.1 Exact local init + first commit

Run these once, at the vault root, to put the studio under version control. Fill in the placeholders from §5 first.

```bash
# from the vault root: /Users/kushaldsouza/Documents/Projects/learnbiostats
git init
git branch -M main

# a .gitignore so local cruft and fleeting capture stay out of history
cat > .gitignore <<'EOF'
.DS_Store
.obsidian/workspace*
inbox/
*.tmp
EOF

git add .
git commit -m "Initial commit: learnbiostats Learning Studio scaffold"

# point at your GitHub repo (placeholders from §5)
git remote add origin https://github.com/<GITHUB_USERNAME>/<GITHUB_REPO>.git

# you push when you are ready — nothing leaves your machine until you run this:
git push -u origin main
```

After the first push, in the GitHub web UI: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` → Folder: `/docs` → Save.** The site goes live at `https://<GITHUB_USERNAME>.github.io/<GITHUB_REPO>/` after the build completes.

### 2.2 The ongoing commit rhythm

```bash
git add output/posts/<slug>.md docs/
git commit -m "Publish: <post title> + index entry"
git push        # human-run, every time
```

---

## 3. Interactive D3 visualizations

The studio's posts are about quantitative genetics and machine learning, where a static chart often cannot carry the idea. The interactive visualizations are built with D3.js and live in `docs/` (built via the `d3-visualization` and `genomics-viz` skills).

- **Where they live:** each viz is a self-contained static bundle under `docs/` — its own HTML/JS/CSS, no server needed, which is exactly what GitHub Pages serves.
- **How they embed in a post:** Substack does not run custom JavaScript inside a post, so a D3 viz cannot be inlined. The pattern is: host the viz at `docs/viz/<name>/`, then in the Substack post either embed it as an `<iframe>` pointing at the GitHub Pages URL (Substack honors iframe embeds) or, where that is restricted, drop a still image of the viz with a prominent link to the live interactive version on the Pages site. The vault `post` note records the viz path in its `viz` frontmatter field so the link is never lost.
- **Why split this way:** Substack owns the audience and the prose; GitHub Pages owns the interactivity Substack cannot host. The viz is the reason the Pages site exists at all beyond being an index.

---

## 4. Publishing to Substack is a manual paste

This is a constraint, not a choice. **Substack has no official write/publish API.** Its official Developer API is read-only (it returns public profile data); there is no supported endpoint to create or publish a post programmatically. Unofficial reverse-engineered wrappers exist, but they are undocumented, unsupported, and may violate Substack's terms of service — so this system does not use them.

The consequence: **the final publish step is a human pasting the post into the Substack editor.** The loop is:

1. The post is finished in `output/posts/<slug>.md` (the writing loop, [[writing-system|writing-system.md]]).
2. You open the Substack editor, paste the body, set the title and subtitle, embed or link the D3 viz (§3), and publish — by hand.
3. You copy the resulting Substack URL back into the `post` note's `substack-url` field **and** into the matching entry on the `docs/` index, so the site can link out.
4. Commit and push (§2.2). The Pages index now points readers from the site to the live Substack post.

Treat the manual paste as the deliberate human gate it is: it is the last moment to catch something before it is public, and it is the point at which you — not an agent — choose to publish.

(Source on the API limitation: Substack's official Developer API support page documents read-only public-profile access only; the active third-party ecosystem of unofficial wrappers confirms there is no sanctioned write API.)

---

## 5. Placeholder-driven config — fill these in

Replace these placeholders throughout the workflow (and wherever the agents reference them). Until they are filled in, nothing can be pushed or linked.

| Placeholder | What it is | Example |
|---|---|---|
| `<GITHUB_USERNAME>` | your GitHub account | `kdsouza` |
| `<GITHUB_REPO>` | the repository name for this vault | `learnbiostats` |
| `<GITHUB_PAGES_URL>` | the live site URL after Pages is enabled | `https://kdsouza.github.io/learnbiostats/` |
| `<SUBSTACK_PUBLICATION>` | your Substack publication handle | `learnbiostats` |
| `<SUBSTACK_URL>` | the base URL of your Substack | `https://learnbiostats.substack.com` |

> These are **placeholders, not real values.** The learner fills them in. They are not verified facts about any existing account — see this file's gaps note. Do not let an agent invent them.

---

## 6. Cadence

- **Daily:** finish the day's post (writing loop), update the `docs/` index entry, commit. Push when ready. Paste to Substack when the post is ready to go public — not every draft needs to ship the same day it is written.
- **Weekly:** a zoom-out — review the week's posts as a set, update the site index and any landing-page copy, confirm every published post has its `substack-url` recorded in both the `post` note and the index, and reconcile that `docs/` has no dangling links. This is also when you sanity-check that the Pages build is green.

The cadence is a default, not a quota. The studio's job is to make shipping cheap and safe, not to force a post out the door on a schedule. Skipping a day is fine; pushing or publishing without you is not.

---

## Links
- Context: [[conventions|conventions.md]] — §10, everything proposes / you approve.
- Builds-on: [[writing-system|writing-system.md]] — produces the finished posts this loop ships.
- Context: [[learning-system|learning-system.md]] — the learning that the writing, and then the publishing, ultimately serves.
