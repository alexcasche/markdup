import { htmlToMarkdown, markdownToHtml } from './convertCodes'

export const syncEditors = (key, val) => {
  let output = {}
  if (key === 'html') output['markdown'] = htmlToMarkdown(val)
  if (key === 'markdown') output['html'] = markdownToHtml(val)
  return output
}
