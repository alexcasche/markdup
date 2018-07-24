import EditorCopy from '../EditorCopy'

describe('EditorCopy Element', () => {
  it('renders correctly', () => {
    const tree = render(<EditorCopy modifiers={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

it('adds expanded modifiers', () => {
  const tree = render(<EditorCopy modifiers={['visible']} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('opacity', '1')
})
