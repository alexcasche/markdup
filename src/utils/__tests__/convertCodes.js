import { htmlToMarkdown, markdownToHtml } from '../convertCodes'

describe('convertCodes functions', () => {
  it('converts html to markdown', () => {
    expect(htmlToMarkdown('<h1>header</h1>')).toBe('# header')
  })

  it('converts markdown to html', () => {
    expect(markdownToHtml('# header')).toBe('<h1>header</h1>')
  })
})
