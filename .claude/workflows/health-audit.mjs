export const meta = {
  name: 'health-audit',
  description: 'Audit vault + curriculum health in parallel (orphans/duplicates/weak titles, link density, curriculum-status drift, overdue spaced-repetition items), then synthesize a dated health report into health/. Detects silent decay early.',
  phases: [
    { title: 'Diagnose', detail: 'parallel diagnostic checks' },
    { title: 'Synthesize', detail: 'write the health report' },
  ],
}

const ROOT = '/Users/kushaldsouza/Documents/Projects/learnbiostats'
// Pass a date string in args (e.g. "2026-06-15"); scripts cannot call Date.now().
const REPORT_DATE = (args && args.date) || 'undated'

const FINDING = { type: 'object', properties: {
  check: { type: 'string' },
  findings: { type: 'array', items: { type: 'string' } },
  metric: { type: 'string' },
}, required: ['check', 'findings'] }

const checks = [
  'KNOWLEDGE-GRAPH HYGIENE: under ' + ROOT + '/evergreen/ and structure/, find orphan notes (zero inbound links), notes with fewer than 2 outbound links, weak/non-declarative titles, and likely duplicate claims (semantically equivalent titles). Report each with the slug. metric = counts.',
  'SOURCE + INBOX: list sources/ notes with fewer than ~2 evergreen notes extracted (under-extracted), and inbox/ items (fleeting notes are stale after 7 days — flag old ones; you cannot compute exact age without a date, so just list inbox contents). metric = counts.',
  'CURRICULUM DRIFT: compare progress/tracker.md module statuses against the actual module files in curriculum/modules/ and any session/assessment notes in assessments/log/. Flag mismatches (e.g., a module marked mastered with no assessment-session note, or modules with no status). metric = modules by status.',
  'SPACED REPETITION: scan evergreen notes\' review-due frontmatter and assessments/spaced-repetition.md; list items whose review-due is on or before ' + REPORT_DATE + ' (overdue), if a date was provided. metric = overdue count.',
]

const diagnostics = await parallel(checks.map((c, i) => () => agent(
  'You are auditing the learnbiostats vault at ' + ROOT + '. Use Bash (grep/find) + Read. CHECK:\n' + c,
  { label: 'check ' + (i + 1), phase: 'Diagnose', agentType: 'general-purpose', schema: FINDING }
)))

const report = await agent(
  'You are biostat-health. Synthesize these diagnostic results into a vault health report:\n' +
  JSON.stringify(diagnostics.filter(Boolean)) + '\n\n' +
  'Write ' + ROOT + '/health/health-report-' + REPORT_DATE + '.md (type: health-report) with: a Summary metric table; an Overall Assessment paragraph; Findings grouped Critical / Advisory / Informational; Proposed Actions (numbered); and Reading/Study Recommendations. Compare to any prior report in health/ if one exists. Return the file path in filesWritten and a one-line headline in notes.',
  { label: 'synthesize report', phase: 'Synthesize', agentType: 'biostat-health',
    schema: { type: 'object', properties: { filesWritten: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } }, required: ['filesWritten'] } }
)

return { report: report && report.filesWritten, headline: report && report.notes }
