import TurndownService from 'turndown'
import marked from 'marked'
import pretty from 'pretty'

const turndownService = new TurndownService({ headingStyle: 'atx' })
const renderer = new marked.Renderer()
renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`
marked.setOptions({ renderer, breaks: true })

export const htmlToMarkdown = html => {
  return turndownService.turndown(html)
}

export const markdownToHtml = markdown => {
  return pretty(marked(markdown))
}
