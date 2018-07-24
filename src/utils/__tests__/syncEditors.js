import { syncEditors } from '../syncEditors'

describe('syncEditors function', () => {
  it('returns empty output', () => {
    expect(syncEditors('title', 'hey')).toEqual({})
  })

  it('return synced markdown', () => {
    expect(syncEditors('html', '<h1>Header</h1>')).toEqual({
      markdown: '# Header',
    })
  })

  it('return synced html', () => {
    expect(syncEditors('markdown', '# Header')).toEqual({
      html: '<h1>Header</h1>',
    })
  })
})
