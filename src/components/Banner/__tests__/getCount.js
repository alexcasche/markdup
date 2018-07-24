import getCount from '../getCount'

const markdown = 'test'
const html = `test
test`
const workspace = { markdown, html }

describe('getCount Function', () => {
  it('renders should return correct count', () => {
    let count = getCount('markdown', workspace)
    expect(count.lines).toEqual(1)
    expect(count.characters).toEqual(4)
    count = getCount('html', workspace)
    expect(count.lines).toEqual(2)
    expect(count.characters).toEqual(9)
  })
})
