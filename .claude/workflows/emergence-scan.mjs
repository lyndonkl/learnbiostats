export const meta = {
  name: 'emergence-scan',
  description: 'Bottom-up cluster detection over the evergreen layer: read all evergreen notes, find themes that have reached 4+ related notes, and PROPOSE structure notes (written to structure/proposals/ for human approval — never auto-merged). Mirrors the reference vault Emergence agent.',
  phases: [
    { title: 'Read', detail: 'inventory + read evergreen notes' },
    { title: 'Cluster', detail: 'propose structure notes for ready clusters' },
  ],
}

const ROOT = '/Users/kushaldsouza/Documents/Projects/learnbiostats'

const inventory = await agent(
  'List every evergreen note under ' + ROOT + '/evergreen/ (use Glob/Bash). For each, read its frontmatter title/tags and its ## Links section. Return a compact JSON-able digest: for each note its slug, title, tags, and the slugs it links to.',
  { label: 'inventory evergreen', phase: 'Read', agentType: 'general-purpose',
    schema: { type: 'object', properties: {
      notes: { type: 'array', items: { type: 'object', properties: {
        slug: { type: 'string' }, title: { type: 'string' },
        tags: { type: 'array', items: { type: 'string' } },
        links: { type: 'array', items: { type: 'string' } },
      }, required: ['slug', 'title'] } },
      count: { type: 'number' },
    }, required: ['notes'] } }
)

if (!inventory || (inventory.count || (inventory.notes || []).length) < 4) {
  log('Fewer than 4 evergreen notes — too early for emergence. Stopping.')
  return { proposed: 0, reason: 'not enough evergreen notes yet' }
}

const result = await agent(
  'You are biostat-emergence. Here is the evergreen-note digest:\n' + JSON.stringify(inventory.notes) + '\n\n' +
  'Apply the emergence discipline (read ' + ROOT + '/system/conventions.md and the biostat-emergence agent spec). Detect clusters of 4+ notes that share a conceptual thread (use both tags and the link graph). For each READY cluster, write a PROPOSED structure note to ' + ROOT + '/structure/proposals/<slug>.md following templates/structure-note.md, with a banner line at the top: "> PROPOSED by emergence-scan — review, edit, then move to structure/ to accept." Use piped [[slug|Title]] links to the member evergreen notes. Do NOT write into structure/ directly. Flag any cluster that is borderline (3 notes) as "almost ready" in your notes rather than proposing it. Return filesWritten and a one-paragraph summary in notes.',
  { label: 'propose structure notes', phase: 'Cluster', agentType: 'biostat-emergence',
    schema: { type: 'object', properties: {
      filesWritten: { type: 'array', items: { type: 'string' } },
      notes: { type: 'string' },
    }, required: ['filesWritten'] } }
)

return { proposed: (result && result.filesWritten || []).length, filesWritten: result && result.filesWritten, summary: result && result.notes }
