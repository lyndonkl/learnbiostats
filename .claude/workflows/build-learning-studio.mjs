export const meta = {
  name: 'build-learning-studio',
  description: 'Build the learnbiostats Learning Studio: bespoke skills + agents, methodology docs, a 5-phase web-grounded crop-genomics-ML curriculum, question banks, projects, capstones, vault seeds, and a D3 GitHub Pages site. Verifies conventions at the end.',
  phases: [
    { title: 'Foundation', detail: 'skills, agents, methodology docs, roadmap + reading list' },
    { title: 'Phases', detail: 'one pipeline per curriculum phase: modules -> question banks -> project + source seeds' },
    { title: 'Capstone', detail: 'capstones, assessment infra, vault seed notes' },
    { title: 'Site', detail: 'GitHub Pages site + interactive D3 genetics visualization' },
    { title: 'Verify', detail: 'convention/frontmatter compliance + pedagogy/writing/site review' },
  ],
}

const ROOT = '/Users/kushaldsouza/Documents/Projects/learnbiostats'
const CLAUDE_SKILLS = '/Users/kushaldsouza/.claude/skills'
const CLAUDE_AGENTS = '/Users/kushaldsouza/.claude/agents'
const DATE = '2026-05-30'

const MANIFEST = {
  type: 'object',
  properties: {
    filesWritten: { type: 'array', items: { type: 'string' } },
    gaps: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
  },
  required: ['filesWritten'],
}

const PHASE_A_SCHEMA = {
  type: 'object',
  properties: {
    phaseId: { type: 'string' },
    filesWritten: { type: 'array', items: { type: 'string' } },
    modules: {
      type: 'array',
      items: {
        type: 'object',
        properties: { id: { type: 'string' }, title: { type: 'string' } },
        required: ['id', 'title'],
      },
    },
    gaps: { type: 'array', items: { type: 'string' } },
  },
  required: ['phaseId', 'modules', 'filesWritten'],
}

const VAULT_CTX = [
  'You are building part of the "learnbiostats" Learning Studio, an Obsidian-compatible vault at ' + ROOT + '.',
  'FIRST read for conventions and house style:',
  ' - ' + ROOT + '/system/conventions.md  (the constitution: per-type YAML frontmatter in section 6, slug rules, piped link rule, folder map, pedagogy primitives, the advisory-only writing rule)',
  ' - the relevant files in ' + ROOT + '/templates/',
  'NON-NEGOTIABLE RULES:',
  ' - Give every file correct YAML frontmatter for its type (copy the exact spec from conventions.md section 6).',
  ' - Every internal link is piped: [[slug|Display Title]] where slug is the target filename without .md. Never write a bare [[Title]].',
  ' - Evergreen notes have declarative-claim titles and one claim each.',
  ' - Ground every factual specific (book chapters, dataset names, software package names, paper titles/authors/years, URLs) with WebSearch before stating it. If you cannot verify a specific, put it in gaps[] and write a clearly-marked placeholder rather than fabricating a citation.',
  ' - Use the date ' + DATE + ' for created/date fields.',
  ' - Write genuine, useful content. But do NOT fabricate the learner\'s own reflections, assessments, or reading notes: source notes are created as STUBS (frontmatter + the prompts to fill while reading), not pre-filled.',
  'Return a manifest: filesWritten (absolute paths), gaps (unverified items / stubs), notes.',
].join('\n')

const SKILL_CTX = [
  'You are authoring bespoke Claude Code SKILLS for a learning + writing studio about ML-driven crop genetics / genomic selection.',
  'Read these EXEMPLARS first for exact format, depth, register, and the way they reference sibling skills:',
  ' - ' + CLAUDE_SKILLS + '/learning-in-public-voice/SKILL.md',
  ' - ' + CLAUDE_SKILLS + '/advisory-edit/SKILL.md',
  'Also read ' + ROOT + '/system/conventions.md (the vault these skills operate on).',
  'Each skill lives at ' + CLAUDE_SKILLS + '/<name>/SKILL.md (the directories ALREADY EXIST) with YAML frontmatter holding exactly two keys:',
  '  name: <kebab-name>   and   description: <2-5 sentences, third-person, stating WHAT the skill does and WHEN to use it, ending with trigger keywords>.',
  'Body: the methodology itself, concrete and usable, with numbered steps, small tables, and short worked examples in the genomics/ML domain. Reference sibling bespoke skills as [[skill-name]] and reference real Claude Code skills by bare name where relevant (e.g., socratic-teaching-scaffolds, worked-example-walkthrough, memory-retrieval-learning, evaluation-rubrics, cognitive-design, d3-visualization, visual-storytelling-design, design-evaluation-audit, cognitive-fallacies-guard).',
  'Keep each SKILL.md focused (roughly 120-220 lines). Write real content, not placeholders.',
  'Return a manifest.',
].join('\n')

const AGENT_CTX = [
  'You are authoring bespoke Claude Code SUBAGENTS for the learnbiostats studio.',
  'Read these EXEMPLARS first for exact frontmatter and tone:',
  ' - ' + CLAUDE_AGENTS + '/biostat-editor.md   (note: deliberately read-only — no Write/Edit/Bash)',
  ' - ' + CLAUDE_AGENTS + '/biostat-scribe.md',
  'Also read ' + ROOT + '/system/conventions.md and the two writing-core skills in ' + CLAUDE_SKILLS + ' (learning-in-public-voice, advisory-edit).',
  'Each agent is a single file ' + CLAUDE_AGENTS + '/<name>.md with YAML frontmatter keys: name, description (third-person, says when to use it + trigger context), tools (a comma-separated list of valid tool names — OMIT Write/Edit/Bash for read-only agents), model: inherit.',
  'Valid tool names: Read, Grep, Glob, Write, Edit, Bash, WebSearch, WebFetch, Skill.',
  'Body: the agent system prompt — its identity, the bespoke skills it applies (reference them by name), its method against the vault layout, its boundaries (everything proposes; the human approves; nothing is committed/published autonomously), and its output contract.',
  'Write real content. Return a manifest.',
].join('\n')

// ---------------------------------------------------------------------------
// CURRICULUM DATA (deterministic skeleton; agents enrich prose + verify facts)
// ---------------------------------------------------------------------------
const PHASES = [
  {
    n: 1, slug: 'phase-1-genetics-for-data-scientists', title: 'Genetics for Data Scientists',
    duration: '4-6 weeks',
    goal: 'Understand what genomic data actually represents, so later ML rests on real biology rather than black-box features.',
    modules: [
      { id: 'p1m1', title: 'DNA, Genes, and Inheritance', weeks: 'Week 1',
        topics: 'DNA structure, genes, chromosomes, alleles, mutation, recombination, Mendelian inheritance',
        readings: 'OpenStax Biology 2e (free, openstax.org) DNA + Mendelian-genetics chapters; MIT 7.00x Introduction to Biology; Crash Course Genetics (YouTube). VERIFY the exact OpenStax 2e chapter numbers — the learner\'s draft listed Ch 10/11/12 but OpenStax 2e numbering differs; check and correct.',
        coreClaims: 'A genotype is a pair of alleles at a locus and an observed trait (phenotype) is a downstream function of genotype plus environment; recombination shuffles alleles between generations and is why markers near a causal variant co-segregate with it.' },
      { id: 'p1m2', title: 'Population Genetics: Allele Frequencies, HWE, Drift, Selection', weeks: 'Weeks 2-3',
        topics: 'allele frequencies, Hardy-Weinberg equilibrium, genetic drift, selection, population structure',
        readings: 'Graham Coop, "Population and Quantitative Genetics" (free notes, UC Davis); Joe Felsenstein population-genetics lecture notes / "Theoretical Evolutionary Genetics" (free PDF). VERIFY links.',
        coreClaims: 'Allele frequency, not the individual genotype, is the state variable of a population; Hardy-Weinberg gives the genotype frequencies expected under no evolution and is the null against which selection, drift, and structure are detected.' },
      { id: 'p1m3', title: 'Intro Genomics: SNPs, Sequencing, Genotyping, LD', weeks: 'Weeks 4-6',
        topics: 'SNPs, sequencing, genotyping arrays vs sequencing, linkage disequilibrium',
        readings: 'Vince Buffalo, "Bioinformatics Data Skills" (O\'Reilly) — biological-data-formats and sequencing chapters. VERIFY chapter titles.',
        coreClaims: 'A SNP is a single-position allelic difference used as a marker; linkage disequilibrium is the non-random association of alleles at nearby loci, and it is the reason a genotyped marker panel can stand in for the whole genome in prediction.' },
    ],
    project: { slug: 'p1-allele-frequencies-and-ld-from-real-genotypes', title: 'Allele Frequencies and LD From Real Genotypes',
      desc: 'Load a small public genotype matrix (e.g., a HapMap/PLINK example or a scikit-allel example dataset), compute per-SNP allele frequencies, test Hardy-Weinberg at a few loci, and visualize LD decay with distance. The goal is to make the abstractions tangible before any modelling.',
      skills: 'python, numpy, pandas, scikit-allel or pandas-plink, matplotlib', deliverables: 'notebook; an LD-decay figure; a short write-up (a post candidate)', datasets: 'scikit-allel example data, or a PLINK/HapMap example set (verify a currently-available link)' },
    sources: [
      { type: 'book', subdir: 'books', slug: 'openstax-biology-2e', title: 'Biology 2e', authors: 'OpenStax', where: 'openstax.org' },
      { type: 'book', subdir: 'books', slug: 'population-and-quantitative-genetics-coop', title: 'Population and Quantitative Genetics', authors: 'Graham Coop', where: 'free notes' },
      { type: 'book', subdir: 'books', slug: 'bioinformatics-data-skills', title: 'Bioinformatics Data Skills', authors: 'Vince Buffalo', where: 'O\'Reilly' },
    ],
  },
  {
    n: 2, slug: 'phase-2-quantitative-genetics', title: 'Quantitative Genetics',
    duration: '6-8 weeks',
    goal: 'The keystone phase. Most ML practitioners entering breeding discover this is the missing piece: how continuous traits relate to many loci, what heritability is, and how selection moves a population.',
    modules: [
      { id: 'p2m1', title: 'Phenotype vs Genotype: Sources of Variation and Heritability', weeks: 'Weeks 1-2',
        topics: 'genetic variance, environmental variance, additive vs dominance variance, narrow- vs broad-sense heritability',
        readings: 'Falconer & Mackay, "Introduction to Quantitative Genetics" (4th ed), early chapters on variance components and heritability. VERIFY the chapter numbers (learner listed Ch 1-4).',
        coreClaims: 'Heritability is a property of a population in a particular environment, not of a trait in the abstract; narrow-sense heritability is the fraction of phenotypic variance that is additive, and it — not broad-sense — predicts response to selection.' },
      { id: 'p2m2', title: 'Selection: Breeding Value and Response', weeks: 'Weeks 3-4',
        topics: 'breeding value, selection differential, response to selection, the breeder\'s equation R = h^2 S',
        readings: 'Falconer & Mackay, selection chapters (learner listed Ch 8-12 — verify).',
        coreClaims: 'An individual\'s breeding value is the sum of the average effects of its alleles, which is what gets transmitted to offspring; the breeder\'s equation R = h^2 S says response per generation is heritability times the selection differential, which is why accurate breeding-value prediction is the whole game.' },
      { id: 'p2m3', title: 'Mixed Models, BLUP, and Relationship Matrices', weeks: 'Weeks 5-6',
        topics: 'fixed vs random effects, BLUP, the numerator relationship (A) matrix, variance-component estimation (REML)',
        readings: 'University of Wisconsin "Quantitative Genetics and Genomics" lecture notes on linear mixed models and BLUP. VERIFY a current source; supplement with the rrBLUP/sommer package vignettes.',
        coreClaims: 'BLUP predicts random breeding values by shrinking each individual toward the mean in proportion to how much information (own records plus relatives) it has; the relationship matrix is what lets information flow between relatives, and replacing it with a marker-based matrix is exactly the step from BLUP to genomic prediction.' },
    ],
    project: { slug: 'p2-simulate-a-breeding-population', title: 'Simulate a Breeding Population', isCapstoneSeed: true,
      desc: 'In Python (numpy), simulate a population: draw allele frequencies, generate genotypes, build an additive trait with a chosen heritability by adding environmental noise, then estimate heritability from the data and predict breeding values. Optionally cross-check against R AlphaSimR. This single project teaches a huge amount.',
      skills: 'python, numpy, simulation, variance-component estimation, BLUP', deliverables: 'simulation notebook; an h^2 recovery experiment (simulate at known h^2, estimate, compare); breeding-value prediction; write-up', datasets: 'simulated' },
    sources: [
      { type: 'book', subdir: 'books', slug: 'introduction-to-quantitative-genetics', title: 'Introduction to Quantitative Genetics', authors: 'Falconer & Mackay', where: '4th ed' },
      { type: 'doc', subdir: 'docs', slug: 'wisconsin-quantitative-genetics-genomics-notes', title: 'Quantitative Genetics and Genomics — lecture notes', authors: 'University of Wisconsin', where: 'verify link' },
    ],
  },
  {
    n: 3, slug: 'phase-3-genomics-data-analysis', title: 'Genomics Data Analysis',
    duration: '6-8 weeks',
    goal: 'Understand how raw sequencing becomes the genotype features ML consumes, and run the QC and GWAS workflows breeders actually use.',
    modules: [
      { id: 'p3m1', title: 'The Sequencing-to-Variants Pipeline', weeks: 'Weeks 1-2',
        topics: 'FASTQ, read alignment, BAM/SAM, variant calling, VCF',
        readings: 'Buffalo, "Bioinformatics Data Skills" — FASTQ, SAM/BAM, and variant-data chapters. VERIFY chapter titles.',
        coreClaims: 'A genotype matrix is the end of a lossy pipeline (reads -> alignment -> called variants), and each step injects error and missingness that downstream prediction must tolerate; the VCF is the contract between that pipeline and every analysis after it.' },
      { id: 'p3m2', title: 'VCF and SNP Analysis: QC, Filtering, Missingness', weeks: 'Weeks 3-4',
        topics: 'SNP filtering, MAF/call-rate/HWE filters, missing-data handling, PCA, relatedness',
        readings: 'PLINK documentation (cog-genomics.org/plink). Work through basic filtering, PCA, and relatedness. VERIFY current PLINK 1.9/2.0 command syntax.',
        coreClaims: 'Quality control is not boilerplate: minor-allele-frequency, call-rate, and HWE filters change which signal survives, and population-structure PCA computed here is the same correction that prevents false GWAS hits later.' },
      { id: 'p3m3', title: 'GWAS: Association Testing and Structure Correction', weeks: 'Weeks 5-6',
        topics: 'association testing, population-structure correction, mixed-model GWAS, Manhattan and QQ plots, multiple testing',
        readings: 'A GWAS tutorial — e.g., Marees et al. 2018 "A tutorial on conducting genome-wide association studies" (with companion GitHub), or an NHGRI GWAS tutorial. VERIFY.',
        coreClaims: 'GWAS tests each marker for association with a trait while correcting for relatedness and structure, and the QQ plot is the honesty check: inflation means the structure correction failed before any peak can be trusted.' },
    ],
    project: { slug: 'p3-pca-and-gwas-on-a-public-dataset', title: 'PCA + GWAS on a Public Dataset', isCapstoneSeed: true,
      desc: 'Take a public genotype+phenotype dataset, run QC and PCA in PLINK, run a (mixed-model) GWAS, and interpret the top markers with a Manhattan/QQ plot. Write up what the structure correction changed.',
      skills: 'PLINK, python/R, GWAS, PCA, plotting', deliverables: 'QC report; PCA plot; Manhattan + QQ plots; interpretation write-up', datasets: 'a public crop or model-organism GWAS dataset (e.g., Arabidopsis 1001 Genomes phenotypes, or a rice/maize panel — verify availability)' },
    sources: [
      { type: 'doc', subdir: 'docs', slug: 'plink-documentation', title: 'PLINK documentation', authors: 'Purcell, Chang et al.', where: 'cog-genomics.org/plink' },
      { type: 'paper', subdir: 'papers', slug: 'gwas-tutorial', title: 'A tutorial on conducting genome-wide association studies', authors: 'verify (e.g., Marees et al. 2018)', where: 'verify' },
    ],
  },
  {
    n: 4, slug: 'phase-4-ml-for-genomic-prediction', title: 'Machine Learning for Genomic Prediction',
    duration: '8-10 weeks',
    goal: 'The core skill: predict breeding values / phenotypes from genome-wide markers, and know when classical mixed-model methods beat fancy ML and when they do not.',
    modules: [
      { id: 'p4m1', title: 'Classical Genomic Prediction: GBLUP and RR-BLUP', weeks: 'Weeks 1-2',
        topics: 'GBLUP, RR-BLUP, the genomic relationship (G) matrix, equivalence of ridge regression on markers and GBLUP',
        readings: 'Meuwissen, Hayes & Goddard 2001 (Genetics) — the founding genomic-selection paper; Crossa et al. 2017 "Genomic Selection in Plant Breeding" (Trends in Plant Science). rrBLUP / BGLR vignettes. VERIFY.',
        coreClaims: 'Genomic prediction works because markers in LD with causal variants let the genomic relationship matrix estimate realized relatedness far more precisely than a pedigree; RR-BLUP on markers and GBLUP on the G matrix are the same model viewed two ways.' },
      { id: 'p4m2', title: 'ML Approaches: Ridge, Elastic Net, RF, Gradient Boosting', weeks: 'Weeks 3-4',
        topics: 'penalized regression, random forests, gradient boosting, comparing predictive ability with cross-validation',
        readings: 'scikit-learn and XGBoost docs; genomic-prediction ML comparison papers. Implement and compare predictive ability (correlation between predicted and observed in held-out folds).',
        coreClaims: 'For mostly-additive traits, penalized linear models usually match or beat tree ensembles because the genetic architecture is additive and high-dimensional; ML earns its keep mainly where non-additive effects or GxE matter, and the honest metric is cross-validated predictive ability, not training fit.' },
      { id: 'p4m3', title: 'Deep Learning on Genomic Data', weeks: 'Weeks 5-6',
        topics: 'CNNs on sequence, marker embeddings, transformer approaches, why DL often fails to beat GBLUP on tabular markers',
        readings: 'Eraslan et al. 2019 (Nat Rev Genet) and/or Zou et al. 2019 "A primer on deep learning in genomics" (Nat Genet). VERIFY.',
        coreClaims: 'Deep nets shine when raw sequence or spatial structure carries signal a linear marker model discards, but on tabular genotype matrices they frequently fail to beat GBLUP because there is little non-linear signal and sample sizes are small relative to markers.' },
      { id: 'p4m4', title: 'Reading Agricultural ML Papers', weeks: 'Weeks 7-8',
        topics: 'how to read and summarize genomic-prediction papers in wheat, maize, and blueberry; building a paper-summary habit',
        readings: 'Read 1-2 papers/week. Search terms: "genomic prediction wheat", "genomic prediction maize", "blueberry genomic selection", "genotype phenotype prediction". Use the PubMed/arXiv tools. Produce a structured summary (source note) for each.',
        coreClaims: 'A genomic-prediction paper is judged on its cross-validation design and its baseline: a method that beats nothing, or that leaks relatedness across folds, reports inflated accuracy regardless of how sophisticated it sounds.' },
    ],
    project: { slug: 'p4-genomic-prediction-benchmark', title: 'Genomic Prediction Benchmark', isCapstoneSeed: true,
      desc: 'Predict a trait (e.g., yield) from genome-wide markers on a real dataset (the BGLR wheat dataset is a classic benchmark). Compare RR-BLUP/GBLUP, Ridge, Elastic Net, Random Forest, XGBoost, and a small neural net under identical cross-validation. Report predictive ability, do feature/marker-effect analysis, and an error analysis.',
      skills: 'python (scikit-learn, xgboost, numpy), or R (rrBLUP, BGLR), cross-validation discipline', deliverables: 'CV results table; predicted-vs-observed plots; feature/marker analysis; error analysis; write-up — strong portfolio material', datasets: 'BGLR wheat dataset (599 lines) or a public maize/rice panel — verify' },
    sources: [
      { type: 'paper', subdir: 'papers', slug: 'meuwissen-hayes-goddard-2001-genomic-selection', title: 'Prediction of Total Genetic Value Using Genome-Wide Dense Marker Maps', authors: 'Meuwissen, Hayes & Goddard 2001', where: 'Genetics — verify' },
      { type: 'paper', subdir: 'papers', slug: 'crossa-2017-genomic-selection-in-plant-breeding', title: 'Genomic Selection in Plant Breeding: Methods, Models, and Perspectives', authors: 'Crossa et al. 2017', where: 'Trends in Plant Science — verify' },
      { type: 'paper', subdir: 'papers', slug: 'deep-learning-in-genomics-primer', title: 'A primer on deep learning in genomics', authors: 'Zou et al. 2019 (verify)', where: 'Nat Genet — verify' },
    ],
  },
  {
    n: 5, slug: 'phase-5-crop-breeding-domain', title: 'Crop Breeding Domain Knowledge',
    duration: '4-6 weeks',
    goal: 'Learn how breeders actually make decisions, so the models serve the breeding cycle instead of being orphan accuracy numbers.',
    modules: [
      { id: 'p5m1', title: 'Breeding Pipelines: Crossing, Selection Cycles, Field Trials', weeks: 'Weeks 1-3',
        topics: 'crossing schemes, selection cycles, field-trial design, multi-environment testing, where genomic selection shortens the cycle',
        readings: 'CIMMYT training resources and publications on breeding-program design and genomic selection in wheat/maize. VERIFY current links.',
        coreClaims: 'Genomic selection pays off mainly by shortening the breeding cycle — selecting on predicted breeding values before phenotyping lets more cycles run per year — so a model is valuable only insofar as it improves genetic gain per unit time, not per-se accuracy.' },
      { id: 'p5m2', title: 'Genotype x Environment Interaction and Stability', weeks: 'Weeks 4-6',
        topics: 'GxE interaction, reaction norms, multi-environment trial models, stability analysis, GxE in genomic prediction',
        readings: 'CIMMYT GxE materials; GxE genomic-prediction literature (e.g., Burgueno et al., Crossa group). VERIFY.',
        coreClaims: 'A line that wins in Oregon can lose in Florida because genotype-by-environment interaction means the ranking of genotypes changes across environments; modelling GxE (shared and environment-specific marker effects) is what makes a prediction deployable across a target population of environments.' },
    ],
    project: { slug: 'p5-predict-trait-performance-across-environments', title: 'Predict Trait Performance Across Environments',
      desc: 'Using a multi-environment trial dataset, build a genomic-prediction model that accounts for GxE (e.g., environment as a factor, or a marker-by-environment interaction / reaction-norm model) and evaluate prediction into a new environment. This is very close to real breeding work.',
      skills: 'python or R (sommer/BGLR for GxE), cross-validation across environments', deliverables: 'GxE model; cross-environment prediction evaluation; stability interpretation; write-up', datasets: 'a public multi-environment trial (e.g., CIMMYT wheat MET, or the BGLR/sommer example MET data) — verify' },
    sources: [
      { type: 'doc', subdir: 'docs', slug: 'cimmyt-breeding-and-genomic-selection-resources', title: 'CIMMYT breeding and genomic-selection training resources', authors: 'CIMMYT', where: 'verify links' },
    ],
  },
]

// ---------------------------------------------------------------------------
// FOUNDATION group
// ---------------------------------------------------------------------------
const foundationThunks = [
  // F-skills-1: three skills
  () => agent(SKILL_CTX + '\n\nWrite these THREE skills:\n' +
    '1) ' + CLAUDE_SKILLS + '/experiential-kolb-teaching/SKILL.md — the Kolb cycle (Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation) as a tutoring method, plus desirable-difficulty / never-summarize discipline, Socratic question ladders by Bloom level, and how a tutor runs one module session end to end in this vault (open with an experience, withhold the explanation, draw the claim out of the learner, route it to an evergreen note, close with retrieval). Reference socratic-teaching-scaffolds, worked-example-walkthrough, abstraction-concrete-examples, memory-retrieval-learning. Domain examples from genetics/genomics.\n' +
    '2) ' + CLAUDE_SKILLS + '/zettel-note/SKILL.md — how to write vault notes per ' + ROOT + '/system/conventions.md: declarative-claim titles, atomicity, own-words (no block quotes), the piped [[slug|Title]] link rule, the link-relationship vocabulary (Confirms/Contradicts/Extends/Context/Prerequisite/Builds-on/Applies/Example-of/Contrasts-with), 3-6 links per note, and search-before-create dedup. This is the note-writing discipline modeled on a Zettelkasten reading companion.\n' +
    '3) ' + CLAUDE_SKILLS + '/spoken-draft-cleanup/SKILL.md — turning a raw dictation transcript into a clean draft while preserving the writer\'s voice and form. MECHANICAL ONLY: remove fillers and false starts, restore sentence-boundary punctuation and paragraphs, and FLAG (never silently fix) likely transcription errors as questions. It must NOT restructure, restyle, or reword. Produce a cleanup log. This is the strict bridge from "speak out my article" to an editable draft; it is the companion intake step before the advisory-edit passes.',
    { label: 'skills: kolb/zettel/cleanup', phase: 'Foundation', agentType: 'general-purpose', schema: MANIFEST }),

  // F-skills-2: two skills
  () => agent(SKILL_CTX + '\n\nWrite these TWO skills:\n' +
    '1) ' + CLAUDE_SKILLS + '/mastery-assessment/SKILL.md — Bloom-tagged probing assessment with Dreyfus mastery bands (unfamiliar/aware/functional/proficient/fluent), a closed-book-first protocol (ask, wait, probe the gap, then confirm), misconception detection, scoring, and SPACED REPETITION scheduling with expanding intervals (1d,3d,7d,16d,35d; pull the next date earlier on a miss). Specify how it writes an assessment-session note and updates each evergreen note\'s review-due. Reference evaluation-rubrics, memory-retrieval-learning, socratic-teaching-scaffolds.\n' +
    '2) ' + CLAUDE_SKILLS + '/genomics-viz/SKILL.md — building interactive D3 visualizations of genetics/genomics concepts for the docs/ GitHub Pages site, specialized on top of d3-visualization + visual-storytelling-design + cognitive-design. Include a concept->visualization catalog (Hardy-Weinberg equilibrium; allele-frequency drift simulation; LD decay vs distance; recombination; additive vs dominance variance; the breeder\'s equation / response to selection; GxE reaction norms; genomic-prediction accuracy vs training-set size; population-structure PCA; Manhattan plot; kinship/G-matrix heatmap), encoding guidance (preattentive attributes, visual-encoding hierarchy, colorblind-safe palettes), the visual-storytelling annotation-layer approach (title that states the takeaway, annotated focus points, guided reading order), accessibility, and how to delegate design review to the cognitive-design-architect agent and run design-evaluation-audit + cognitive-fallacies-guard. Specify the file layout it produces under docs/.',
    { label: 'skills: assessment/viz', phase: 'Foundation', agentType: 'general-purpose', schema: MANIFEST }),

  // F-agents-1: four agents
  () => agent(AGENT_CTX + '\n\nWrite these FOUR agent files. Use model: inherit for all.\n' +
    '1) ' + CLAUDE_AGENTS + '/biostat-tutor.md — the Socratic experiential tutor. Applies the experiential-kolb-teaching skill. Runs a module session through the Kolb arc, never summarizes for the learner, draws claims out and routes them to evergreen notes via the zettel-note discipline. tools: Read, Grep, Glob, Write, WebSearch, WebFetch, Skill.\n' +
    '2) ' + CLAUDE_AGENTS + '/biostat-assessor.md — the assessor. Applies the mastery-assessment skill: closed-book probing, Bloom levels, mastery banding, misconception detection, writes an assessment-session note and updates review-due dates for the spaced-repetition queue. tools: Read, Grep, Glob, Write, Edit, Skill.\n' +
    '3) ' + CLAUDE_AGENTS + '/biostat-lab.md — the lab/project mentor. Designs and reviews the experiential projects, can scaffold and run code, enforces cross-validation discipline and predict-then-check. tools: Read, Grep, Glob, Write, Edit, Bash, WebSearch, Skill.\n' +
    '4) ' + CLAUDE_AGENTS + '/biostat-coach.md — the curriculum coach. Tracks progress across phases/modules, decides what is next, manages pacing against a daily cadence, updates the progress trackers, and surfaces the spaced-repetition queue. tools: Read, Grep, Glob, Write, Edit, Skill.\n' +
    'Each agent must state that it proposes and the human approves, and that it never commits to git or publishes autonomously.',
    { label: 'agents: tutor/assessor/lab/coach', phase: 'Foundation', agentType: 'general-purpose', schema: MANIFEST }),

  // F-agents-2: three agents
  () => agent(AGENT_CTX + '\n\nWrite these THREE agent files. Use model: inherit for all.\n' +
    '1) ' + CLAUDE_AGENTS + '/biostat-emergence.md — clusters evergreen notes bottom-up into structure notes (minimum 4 related notes before a cluster is "ready"; flags over-large clusters >12 for splitting). Mirrors the reference vault\'s Emergence agent. tools: Read, Grep, Glob, Write, Skill.\n' +
    '2) ' + CLAUDE_AGENTS + '/biostat-health.md — audits vault + curriculum health: orphan notes, duplicate claims, weak (non-declarative) titles, low link density, stale inbox, under-extracted sources, module-status drift vs progress trackers, and spaced-repetition items overdue. Writes a health-report to health/ and tracks trends. tools: Read, Grep, Glob, Write, Bash, Skill.\n' +
    '3) ' + CLAUDE_AGENTS + '/biostat-viz.md — builds interactive D3 visualizations for the docs/ site by applying the genomics-viz skill and delegating design critique to the cognitive-design-architect agent. tools: Read, Grep, Glob, Write, Edit, Bash, WebSearch, WebFetch, Skill.',
    { label: 'agents: emergence/health/viz', phase: 'Foundation', agentType: 'general-purpose', schema: MANIFEST }),

  // F-docs-1: the three system docs
  () => agent(VAULT_CTX + '\n\nWrite THREE methodology docs at the vault root. They are the philosophy layer (conventions.md is the mechanics layer).\n' +
    '1) ' + ROOT + '/LEARNING_SYSTEM.md (type: agent-spec, agent: learning-system) — the experiential-learning methodology: why passive reading fails (desirable difficulty, retrieval practice, self-explanation), the Kolb cycle as the per-module engine, Bloom objectives, Dreyfus mastery bands, spaced repetition, and the inbox->sources->evergreen->structure pipeline. Explain how the bespoke agents (biostat-tutor/assessor/lab/coach/emergence/health) and skills implement it. Cite the principles plainly.\n' +
    '2) ' + ROOT + '/WRITING_SYSTEM.md (type: agent-spec, agent: writing-system) — the daily speak-out-your-article loop: read+note in the morning, dictate an article, run spoken-draft-cleanup (voice-preserving) to get a draft, run the biostat-editor advisory passes (structural/line/voice/pre-publish, suggestion-only, never rewrites unless told), revise, pre-publish check, publish. Spell out the advisory-only rule and the boundary between scribe (generative, from your claims) and editor (advisory, on your words). Reference learning-in-public-voice, advisory-edit, spoken-draft-cleanup, zettel-note and the writing-craft skills (slop-detector, hedge-detector, opener-critique, closer-critique, analogy-weight-check, paragraph-rhythm-check, writing-pre-publish-checklist).\n' +
    '3) ' + ROOT + '/PUBLISHING.md (type: agent-spec, agent: publishing) — git workflow, the docs/ GitHub Pages site that links OUT to Substack (posts stay in output/posts and Substack; the site indexes them and records the substack-url; Substack has no auto-post API, so publishing is a manual paste), how interactive D3 visualizations live in docs/ and embed in posts, and a daily/weekly cadence. Include the exact local git init + commit steps and a placeholder-driven config (GitHub username/repo, Substack URL) the learner fills in. Be explicit that nothing is pushed or published without the human.',
    { label: 'docs: LEARNING/WRITING/PUBLISHING', phase: 'Foundation', agentType: 'general-purpose', schema: MANIFEST }),

  // F-docs-2: system-overview + README + voice-profile + trackers
  () => agent(VAULT_CTX + '\n\nWrite the routing + home + tracker layer:\n' +
    '1) ' + ROOT + '/system/system-overview.md (type: agent-spec, agent: system-overview) — a routing table mapping learner intents to the bespoke agents and skills (e.g., "start a study session"->biostat-tutor; "test me"->biostat-assessor; "what next / pacing"->biostat-coach; "help me build the project"->biostat-lab; "find clusters"->biostat-emergence; "vault health"->biostat-health; "draft a post from my notes"->biostat-scribe; "review my spoken draft"->biostat-editor; "make a visualization"->biostat-viz). Plus the information-flow rules (all knowledge enters as evergreen via a tutor session; everything proposes, human approves; nothing committed/published autonomously) and the interactive vs batch distinction (interactive: tutor/assessor/editor/scribe; batch Workflow scripts in .claude/workflows: build-learning-studio, emergence-scan, health-audit, build-viz).\n' +
    '2) ' + ROOT + '/README.md — the home / map-of-content. What the studio is (the four loops: Learn/Note/Write/Publish), the folder map, a quick-start ("To study today, tell Claude: start <module>"; "To write: speak your article, save the transcript to writing/transcripts/, then ask biostat-editor to review"), links to LEARNING_SYSTEM/WRITING_SYSTEM/PUBLISHING/conventions/roadmap, the list of bespoke skills and agents (installed in ~/.claude and the Projects/claude repo), and the daily + weekly cadence. Use piped wikilinks for internal links and normal markdown links for files where Obsidian-style is awkward.\n' +
    '3) ' + ROOT + '/writing/voice-profile.md (type: reference) — the learner\'s OWN, editable voice profile. Seed it from the learning-in-public-voice defaults but frame every line as "current best guess about MY voice, to be refined as I publish." Sections: register, opener moves I like, closer moves, sentence-rhythm habits, words/phrases I avoid, citation style, em-dash policy (let the learner decide), how the editor should treat deviations. Make clear the editor critiques against THIS file, and that it is updated (with the learner\'s approval) from posts they are happy with.\n' +
    '4) ' + ROOT + '/progress/tracker.md (type: tracker) — a status board: a table of all 5 phases and ~15 modules with status (not-started/reading/practicing/assessed/mastered), plus a daily-streak line and a "this week" focus. Use the module IDs p1m1..p5m2.\n' +
    '5) ' + ROOT + '/progress/skills-matrix.md (type: skills-matrix) — a competency table (genetics literacy, population genetics, quantitative genetics, BLUP/mixed models, sequencing/VCF/QC, GWAS, genomic prediction classical, genomic prediction ML, deep learning, breeding pipelines, GxE, scientific writing, data viz) self-rated on the mastery bands, with date columns.\n' +
    '6) ' + ROOT + '/progress/learning-journal.md (type: journal) — a reverse-chronological Kolb reflection log with one seed entry dated ' + DATE + ' describing the studio kickoff.',
    { label: 'docs: overview/README/trackers', phase: 'Foundation', agentType: 'general-purpose', schema: MANIFEST }),

  // F-curriculum-core: roadmap + reading list (web-grounded)
  () => agent(VAULT_CTX + '\n\nWrite the curriculum spine:\n' +
    '1) ' + ROOT + '/curriculum/roadmap.md (type: roadmap) — the master plan. State the end goal (become capable of contributing to ML-driven crop genetics / genomic selection, the kind of work a company like Fall Creek does), the philosophy (optimize for understanding a breeding dataset, building predictive models, and collaborating with breeders — skip molecular-biology detail that will not be used), then the 5 phases with duration, goal, module list (link each module with a piped wikilink to its file in curriculum/modules/ using the IDs p1m1..p5m2 and the titles given below), and the per-phase project. End with the "if I were starting today" ordered sequence and the 3 capstones. Phase/module titles:\n' +
    PHASES.map(p => 'Phase ' + p.n + ' (' + p.duration + '): ' + p.title + ' — ' + p.modules.map(m => m.id + ' ' + m.title).join('; ') + ' — project: ' + p.project.title).join('\n') + '\n' +
    '2) ' + ROOT + '/resources/reading-list.md (type: reference) — the consolidated, GROUNDED reading list. For each item give title, author, a working URL (verify via WebSearch), cost/free, and which module(s) it serves. Cover: OpenStax Biology 2e; MIT 7.00x; Crash Course Genetics; Graham Coop population/quantitative genetics notes; Felsenstein notes; Buffalo Bioinformatics Data Skills; Falconer & Mackay Introduction to Quantitative Genetics; a Wisconsin quantitative-genetics/BLUP lecture-note source; PLINK docs; a GWAS tutorial; Meuwissen Hayes Goddard 2001; Crossa et al 2017 genomic selection review; a deep-learning-in-genomics review; rrBLUP/BGLR/sommer/AlphaSimR; scikit-learn/XGBoost/scikit-allel/pandas-plink; CIMMYT resources. Also list candidate public datasets (BGLR wheat, rice 3K, maize panels, Arabidopsis 1001 Genomes, multi-environment trial data) with verified links where possible. Put anything you cannot verify in gaps[].',
    { label: 'curriculum: roadmap + reading-list', phase: 'Foundation', agentType: 'general-purpose', schema: MANIFEST }),
]

// ---------------------------------------------------------------------------
// PHASES pipeline: A modules -> B question banks -> C project + source seeds
// ---------------------------------------------------------------------------
const stageA = (p) => agent(VAULT_CTX + '\n\nPHASE ' + p.n + ': ' + p.title + ' (' + p.duration + ').\nGoal: ' + p.goal + '\n\n' +
  'Write the phase overview ' + ROOT + '/curriculum/' + p.slug + '.md (type: phase) following the phase frontmatter in conventions.md, listing its modules (piped links), its project (piped link to projects/' + p.project.slug + '), competencies, and exit criteria.\n\n' +
  'Then write each MODULE file in ' + ROOT + '/curriculum/modules/ following templates/module.md EXACTLY (the Kolb arc: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation, then an exit check). For each module:\n' +
  p.modules.map(m => '- ' + m.id + '-' + m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.md : "' + m.id + ' · ' + m.title + '" (' + m.weeks + '). Topics: ' + m.topics + '. Readings (verify specifics): ' + m.readings + '. Seed the "key concepts to convert into evergreen claims" from this true core idea, expanded into 2-4 atomic declarative claims: ' + m.coreClaims + '. Write a concrete Concrete-Experience task (look at real data / run a snippet / make a prediction), real Reflective-Observation Socratic prompts, the readings under Abstract Conceptualization, an Active-Experimentation exercise that hooks the phase project, and a from-memory exit check. Set question-bank frontmatter to [[' + m.id + '-questions|' + m.id.toUpperCase() + ' Question Bank]].').join('\n') + '\n\n' +
  'Module filename slug pattern: <id>-<kebab-title>. Verify reading specifics with WebSearch; flag unverifiable ones in gaps[]. Return phaseId="' + p.slug + '" and the modules array (id + the exact title you used).',
  { label: 'modules: P' + p.n, phase: 'Phases', agentType: 'general-purpose', schema: PHASE_A_SCHEMA })

const stageB = (a, p) => agent(VAULT_CTX + '\n\nPHASE ' + p.n + ' question banks. For EACH module below, write ' + ROOT + '/assessments/question-banks/<id>-questions.md following templates/question-bank.md (type: question-bank): real probing questions organized ascending by Bloom level (remember/understand/apply/analyze/evaluate-create), each with a brief assessor-only answer sketch; a misconception-traps section with the surfacing question for each; and one transfer prompt that forces the concept into an unfamiliar crop-breeding scenario. Ground the science; questions must be answerable from the module readings. Modules:\n' +
  p.modules.map(m => '- ' + m.id + ' (' + m.title + '): center questions on — ' + m.coreClaims).join('\n') + '\n\nReturn a manifest.',
  { label: 'qbanks: P' + p.n, phase: 'Phases', agentType: 'general-purpose', schema: MANIFEST })

const stageC = (b, p) => agent(VAULT_CTX + '\n\nPHASE ' + p.n + ' project + source seeds.\n' +
  '1) Write the project ' + ROOT + '/projects/' + p.project.slug + '.md following templates/project.md (type: project). Title: "' + p.project.title + '". ' + p.project.desc + ' Skills: ' + p.project.skills + '. Deliverables: ' + p.project.deliverables + '. Datasets: ' + p.project.datasets + ' (verify a currently-available dataset link via WebSearch; flag in gaps if unsure). Include milestones that each end in a predict-then-check, and link the concepts it applies back to module evergreen claims.' +
  (p.project.isCapstoneSeed ? ' Note in the file that this project is the working seed for a capstone.' : '') + '\n' +
  '2) Write SOURCE-NOTE STUBS (not filled-in notes) for this phase\'s key readings, each in ' + ROOT + '/sources/<subdir>/<slug>.md following templates/source-note.md (or book-thread.md for multi-session books). Fill only the frontmatter (type/source_type/title/authors/url verified via WebSearch/phase/module/tags) and "The big question" as a reading-prompt; leave assessment/evergreen sections as empty prompts to fill while reading. Sources:\n' +
  p.sources.map(s => '- sources/' + s.subdir + '/' + s.slug + '.md (' + s.type + '): "' + s.title + '" by ' + s.authors + ' (' + s.where + ')').join('\n') + '\n\nReturn a manifest.',
  { label: 'project+seeds: P' + p.n, phase: 'Phases', agentType: 'general-purpose', schema: MANIFEST })

// ---------------------------------------------------------------------------
// CAPSTONE + seeds, and SITE
// ---------------------------------------------------------------------------
const capThunk = agent(VAULT_CTX + '\n\nWrite the capstone + assessment-infra + seed layer:\n' +
  '1) Three capstone specs in ' + ROOT + '/projects/capstone/ following templates/project.md (type: project, tags include capstone):\n' +
  ' - project-1-gwas.md — "GWAS on a Public Crop Dataset" (notebook + report + visualizations). Builds on the Phase 3 project.\n' +
  ' - project-2-genomic-prediction-benchmark.md — "Genomic Prediction Benchmark" comparing GBLUP/RR-BLUP, Ridge, Elastic Net, Random Forest, XGBoost, and a neural net under identical cross-validation, with feature and error analysis. Builds on the Phase 4 project.\n' +
  ' - project-3-breeding-simulation.md — "End-to-End Breeding Simulation": simulate a population, selection, and crossing across cycles; measure genetic gain; demonstrate how ML/genomic prediction improves breeding efficiency (gain per unit time). Builds on the Phase 2 project.\n' +
  '2) ' + ROOT + '/projects/README.md — an index mapping each project + capstone to its phase and the competencies it proves.\n' +
  '3) ' + ROOT + '/assessments/README.md — how assessment works here: Bloom levels, Dreyfus mastery bands, the closed-book-first protocol, and the spaced-repetition queue (expanding intervals). Point to the biostat-assessor agent and mastery-assessment skill.\n' +
  '4) ' + ROOT + '/assessments/spaced-repetition.md — the review queue: explain the interval schedule, and provide a table (initially with the seed evergreen notes below) of item | last-reviewed | interval | review-due.\n' +
  '5) THREE seed EVERGREEN notes in ' + ROOT + '/evergreen/ that are genuinely correct and demonstrate the convention (declarative-claim title, own-words body with mechanism, Links section with piped links, mastery + review-due frontmatter). Use these claims (refine wording into precise titles): (a) heritability is a property of a population in an environment, not of a trait; (b) genomic prediction works because markers in linkage disequilibrium with causal variants let a marker-based relationship matrix estimate realized relatedness; (c) the breeder\'s equation says response to selection equals narrow-sense heritability times the selection differential. Link them to each other and to the relevant modules.\n' +
  '6) ONE seed STRUCTURE note in ' + ROOT + '/structure/ that clusters the three seed evergreen notes under a real question (e.g., "Why relatedness is the engine of both classical and genomic prediction"), following templates/structure-note.md.\n\nReturn a manifest.',
  { label: 'capstones + seeds', phase: 'Capstone', agentType: 'general-purpose', schema: MANIFEST })

const siteThunk = agent(VAULT_CTX + '\n\nBuild the GitHub Pages site under ' + ROOT + '/docs/. It links OUT to the learner\'s Substack and showcases interactive D3 visualizations. It is a static site (no server, no Jekyll).\n\n' +
  'Apply these design principles inline (do not depend on any skill file existing yet): visual-encoding hierarchy (position > length > angle > area > color), preattentive attributes for the one thing that matters, a colorblind-safe palette, a clear visual hierarchy, low cognitive load, and visual-storytelling annotation layers (a title that states the takeaway, annotated focus points, a guided reading order). Avoid misleading encodings (truncated axes, area-for-quantity).\n\n' +
  'Write:\n' +
  '1) ' + ROOT + '/docs/.nojekyll (empty file, so GitHub Pages serves the raw HTML/JS).\n' +
  '2) ' + ROOT + '/docs/index.html — the home page: a short intro to the learning-in-public project, a posts list section (with a clearly-marked placeholder entry and a comment explaining each published post becomes a card linking to its Substack URL), a prominent link to the Substack (use a {{SUBSTACK_URL}} placeholder), a link to the visualization, and a link to the GitHub repo ({{GITHUB_REPO_URL}} placeholder). Load D3 v7 from the jsDelivr or d3js.org CDN.\n' +
  '3) ' + ROOT + '/docs/viz/hardy-weinberg.html — a polished, self-contained interactive D3 visualization of Hardy-Weinberg equilibrium AND genetic drift: a slider for allele frequency p that updates the expected genotype frequencies (p^2, 2pq, q^2) as an annotated bar/area chart, and a small drift simulator (slider for population size N, a "step generations" control) showing allele frequency wandering over generations in a line chart, with annotations that state the takeaway (small N -> more drift). Title states the insight. Include a short "what this shows / how to read it" caption. Keep all JS inline or in docs/assets/js. Make it correct genetics.\n' +
  '4) ' + ROOT + '/docs/assets/css/site.css — clean, readable styling consistent with the design principles.\n' +
  '5) ' + ROOT + '/docs/assets/js/ — any shared JS (e.g., hardy-weinberg.js if you separate it).\n' +
  '6) ' + ROOT + '/docs/README.md — how the site works, how to enable GitHub Pages (serve from /docs on the default branch), how to add a post card when publishing to Substack, and where the {{SUBSTACK_URL}} / {{GITHUB_REPO_URL}} placeholders are.\n\n' +
  'The viz must actually run in a browser with no build step. Return a manifest.',
  { label: 'docs site + D3 viz', phase: 'Site', agentType: 'general-purpose', schema: MANIFEST })

// ---------------------------------------------------------------------------
// RUN
// ---------------------------------------------------------------------------
log('Foundation + 5 phase pipelines + capstone + site launching (concurrency-capped)...')

const [foundationRes, phaseRes, capRes, siteRes] = await Promise.all([
  parallel(foundationThunks),
  pipeline(PHASES, stageA, stageB, stageC),
  capThunk,
  siteThunk,
])

log('Content built. Running verification pass...')

const VERIFY_CTX = 'You are verifying the learnbiostats studio at ' + ROOT + '. Be concrete; cite file paths and line-ish locations.'

const verifyRes = await parallel([
  () => agent(VERIFY_CTX + '\n\nCONVENTION/FRONTMATTER audit. Use Bash (grep/find) and Read.\n' +
    '1) Find bare wikilinks (a [[ not containing a |) anywhere under ' + ROOT + ' excluding templates/ — they violate the piped-link rule. List each with file + line.\n' +
    '2) Find markdown files under curriculum/, evergreen/, structure/, projects/, assessments/, sources/, writing/, system/, output/ that are MISSING YAML frontmatter (no leading --- block) or missing a type: key.\n' +
    '3) Confirm the expected files exist: roadmap, 5 phase files, ~15 module files in curriculum/modules/, matching question banks in assessments/question-banks/, 5 phase projects + 3 capstones, the 3 seed evergreen + 1 structure note, the 7 newly-written skills in ' + CLAUDE_SKILLS + ', the 7 newly-written agents in ' + CLAUDE_AGENTS + ', and docs/index.html + docs/viz/hardy-weinberg.html + docs/.nojekyll. List anything missing.\n' +
    '4) Spot-check 3 agent files in ' + CLAUDE_AGENTS + ' for valid frontmatter (name, description, tools, model) and confirm biostat-editor.md has NO Write/Edit/Bash in its tools.\n' +
    'Return findings as: filesWritten (empty), gaps (each problem found), notes (summary + counts).',
    { label: 'verify: conventions', phase: 'Verify', agentType: 'general-purpose', schema: MANIFEST }),

  () => agent(VERIFY_CTX + '\n\nPEDAGOGY + WRITING-DISCIPLINE + SITE review. Read a sample: roadmap.md, 2-3 module files (check they follow the Kolb arc and have Bloom-tagged objectives + an exit check), 2 question banks (ascending Bloom + misconception traps + transfer prompt), the LEARNING_SYSTEM/WRITING_SYSTEM docs, the advisory-edit + learning-in-public-voice skills, biostat-editor.md, biostat-scribe.md, and the spoken-draft-cleanup skill.\n' +
    'Verify: (a) the advisory-only rule is stated consistently — editor suggests/flags/directs-structure but never rewrites unless told, and biostat-editor is structurally read-only; (b) the scribe-vs-editor boundary is clear (generative-from-claims vs advisory-on-words); (c) modules are genuinely experiential (experience precedes reading); (d) spaced repetition + mastery bands are wired into assessment; (e) the docs viz states a takeaway and reads clearly. Also open docs/viz/hardy-weinberg.html and sanity-check the genetics (p^2+2pq+q^2=1; drift increases as N shrinks) and that the D3/markup looks runnable (no obvious syntax breakage).\n' +
    'Return findings as: filesWritten (empty), gaps (each weakness/inconsistency, with file + fix suggestion), notes (overall quality read).',
    { label: 'verify: pedagogy/writing/site', phase: 'Verify', agentType: 'general-purpose', schema: MANIFEST }),
])

const all = [...foundationRes, ...phaseRes, capRes, siteRes].filter(Boolean)
const filesWritten = all.flatMap(r => (r && r.filesWritten) || [])
const buildGaps = all.flatMap(r => (r && r.gaps) || [])
const verifyGaps = verifyRes.filter(Boolean).flatMap(r => (r && r.gaps) || [])
const verifyNotes = verifyRes.filter(Boolean).map(r => r && r.notes).filter(Boolean)

return {
  filesWrittenCount: filesWritten.length,
  filesWritten,
  buildGaps,
  verifyGaps,
  verifyNotes,
}
