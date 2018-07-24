import PreviewContent from '../PreviewContent'

describe('PreviewContent Element', () => {
  it('renders correctly', () => {
    const tree = render(<PreviewContent>Preview</PreviewContent>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds expanded modifier', () => {
    const tree = render(<PreviewContent modifiers={['expanded']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding-right', 'calc(10vw - 15px)')
  })
})
