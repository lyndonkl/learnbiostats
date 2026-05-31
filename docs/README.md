# learnbiostats — GitHub Pages site (`/docs`)

This folder is a self-contained static website. It is the **publish** surface of
the learnbiostats vault: it links out to the learner's Substack essays and hosts
interactive D3 visualizations. There is no server and no build step — every file
here is served exactly as written.

## What is here

```
docs/
├── .nojekyll                 # tells GitHub Pages to serve files as-is (skip Jekyll)
├── index.html                # home page: intro, posts list, links out
├── README.md                 # this file
├── viz/
│   └── hardy-weinberg.html   # interactive Hardy-Weinberg + genetic drift viz
└── assets/
    ├── css/
    │   └── site.css          # all styling (Okabe-Ito colorblind-safe palette)
    ├── js/
    │   └── hardy-weinberg.js # the D3 chart code for the viz page
    └── data/                 # (reserved for any future static data files)
```

D3 v7 is loaded from the jsDelivr CDN (`https://cdn.jsdelivr.net/npm/d3@7`) in
each HTML page. Nothing is bundled or compiled.

## How the site works

- **`.nojekyll`** is an empty file. Without it, GitHub Pages runs your files
  through Jekyll, which ignores folders that start with an underscore and can
  rewrite paths. We serve raw HTML/JS/CSS, so we disable Jekyll entirely.
- **`index.html`** is the landing page. It introduces the learning-in-public
  project, lists published posts as cards that link out to Substack, and has
  prominent links to Substack, the visualization, and the GitHub repo.
- **`viz/hardy-weinberg.html`** is a standalone interactive visualization. It
  loads D3, then loads `assets/js/hardy-weinberg.js`, which draws and updates the
  two charts. Open it directly in a browser — no server required.
- All internal links are **relative** (`assets/...`, `viz/...`, `../index.html`),
  so the site works the same whether it is served from
  `https://USERNAME.github.io/REPO/` or opened from the local filesystem.

## How to enable GitHub Pages (serve from `/docs`)

1. Push this repository to GitHub.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to your default branch (e.g. `main`) and the folder to
   **`/docs`**. Save.
5. Wait for the deploy to finish. Your site will be live at
   `https://USERNAME.github.io/REPO/` (GitHub shows the exact URL on the Pages
   settings screen).

No Actions workflow or Jekyll config is needed. The `.nojekyll` file is already
present, so GitHub serves the files directly.

## Placeholders to fill in before publishing

Two placeholder tokens appear throughout the HTML. Replace **every** occurrence
with your real URLs before (or right after) you go live:

| Placeholder           | Replace with                                              | Appears in |
|-----------------------|----------------------------------------------------------|------------|
| `{{SUBSTACK_URL}}`    | Your Substack base URL, e.g. `https://yourname.substack.com` | `index.html`, `viz/hardy-weinberg.html` (nav links, hero buttons, subscribe button, footers) |
| `{{GITHUB_REPO_URL}}` | Your repo URL, e.g. `https://github.com/you/learnbiostats`   | `index.html`, `viz/hardy-weinberg.html` (nav links, hero button, footers) |

Quick find-and-replace from the repo root (review the diff before committing):

```bash
# macOS / BSD sed
grep -rl '{{SUBSTACK_URL}}' docs | xargs sed -i '' 's|{{SUBSTACK_URL}}|https://yourname.substack.com|g'
grep -rl '{{GITHUB_REPO_URL}}' docs | xargs sed -i '' 's|{{GITHUB_REPO_URL}}|https://github.com/you/learnbiostats|g'
```

(On Linux, use `sed -i 's|...|...|g'` without the empty `''` argument.)

## How to add a post card when you publish to Substack

The posts list lives in `index.html` inside `<ul class="card-grid">`. Each
published essay becomes one `<li class="card">` that links out to its Substack
URL. The full template is kept as an HTML comment right above the list so you
never have to remember the markup.

1. Open `index.html` and find the `<section id="posts">` block.
2. Copy the **POST CARD TEMPLATE** comment block:

   ```html
   <li class="card">
     <span class="tag">Essay</span>
     <h3><a href="FULL_SUBSTACK_POST_URL">Post title goes here</a></h3>
     <p class="meta">Published 2026-06-15</p>
     <p>One-sentence summary of what the post argues.</p>
   </li>
   ```

3. Paste it as the **first** child of `<ul class="card-grid">` (newest post on
   top) and fill in the post URL, title, publish date, and one-line summary.
4. The **first time** you add a real post, delete the
   `<li class="card placeholder">` "Nothing published yet" card.
5. Commit and push. GitHub Pages redeploys automatically.

## Local preview

Just open the files in a browser:

- Double-click `docs/index.html`, or
- Serve the folder (optional, mirrors production paths):

  ```bash
  python3 -m http.server --directory docs 8000
  # then visit http://localhost:8000/
  ```

Both work because all links are relative and D3 loads from a public CDN.

## Design notes (why the viz looks the way it does)

The visualization follows a few deliberate rules so the charts inform rather than
mislead:

- **Visual-encoding hierarchy**: quantities are shown by position and length
  (bars from a zero baseline, lines on a shared scale), the most accurately
  perceived encodings — never by area or angle.
- **Preattentive emphasis**: exactly one thing is highlighted per view (the
  primary call-to-action button on the home page; the thicker orange small-N line
  in the drift chart), so the eye knows where to look first.
- **Colorblind-safe palette**: the Okabe-Ito qualitative palette is used in both
  the CSS and the chart code.
- **Honest axes**: y-axes run the full 0–100% range with no truncation, and
  quantities are never encoded as area.
- **Storytelling layer**: each figure has a title that states the takeaway, a
  short "what this shows / how to read it" caption, and inline annotations that
  guide the reading order.
