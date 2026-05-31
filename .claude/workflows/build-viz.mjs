export const meta = {
  name: 'build-viz',
  description: 'Build one interactive D3 visualization for the docs/ site from a concept. Design pass (cognitive-design-architect, read-only) -> build pass (biostat-viz, writes the HTML/JS/CSS). Parameterize with args: { concept, slug, data?, takeaway? }.',
  phases: [
    { title: 'Design', detail: 'cognitive-design brief for the concept' },
    { title: 'Build', detail: 'implement the interactive D3 page' },
  ],
}

const ROOT = '/Users/kushaldsouza/Documents/Projects/learnbiostats'
const concept = (args && args.concept) || 'LD decay vs physical distance'
const slug = (args && args.slug) || concept.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const takeaway = (args && args.takeaway) || ''
const dataHint = (args && args.data) || 'use a small synthetic dataset generated inline that is biologically realistic'

const brief = await agent(
  'Produce a tight DESIGN BRIEF for an interactive teaching visualization of this genetics/genomics concept: "' + concept + '"' +
  (takeaway ? ' (intended takeaway: ' + takeaway + ')' : '') + '.\n' +
  'Cover: the single takeaway the chart must land; the right chart type and visual encodings (respect the encoding hierarchy position>length>angle>area>color); which variable gets the one preattentive highlight; the interaction (slider/brush/step) that makes the mechanism felt; the annotation layer (title-as-takeaway, focus annotations, guided reading order); a colorblind-safe palette; and accessibility notes. Flag any encoding that would mislead. Keep it to a usable brief, not an essay.',
  { label: 'design brief', phase: 'Design', agentType: 'cognitive-design-architect' }
)

const built = await agent(
  'You are biostat-viz. Build a self-contained interactive D3 v7 visualization (no build step) at ' + ROOT + '/docs/viz/' + slug + '.html for the concept "' + concept + '".\n\n' +
  'Follow this design brief:\n' + (brief || '(no brief returned; apply the genomics-viz skill defaults)') + '\n\n' +
  'Data: ' + dataHint + '. Load D3 from a CDN. Reuse ' + ROOT + '/docs/assets/css/site.css for styling and put any page JS in ' + ROOT + '/docs/assets/js/' + slug + '.js (or inline). Include a short "what this shows / how to read it" caption and a back-link to docs/index.html. Make the genetics correct. Then add a card/link for this viz on ' + ROOT + '/docs/index.html. Return filesWritten and a one-line description in notes.',
  { label: 'build viz', phase: 'Build', agentType: 'biostat-viz',
    schema: { type: 'object', properties: { filesWritten: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } }, required: ['filesWritten'] } }
)

return { concept, slug, filesWritten: built && built.filesWritten, summary: built && built.notes }
