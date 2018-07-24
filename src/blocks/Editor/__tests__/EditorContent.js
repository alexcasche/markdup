import EditorContent from '../EditorContent'

describe('EditorContent Element', () => {
  it('renders correctly', () => {
    const tree = render(<EditorContent modifiers={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

it('adds expanded modifiers', () => {
  const tree = render(<EditorContent modifiers={['expanded']} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('padding-bottom', '60px')
})
