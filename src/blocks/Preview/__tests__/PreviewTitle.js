import PreviewTitle from '../PreviewTitle'

describe('PreviewTitle Element', () => {
  it('renders correctly', () => {
    const tree = render(<PreviewTitle>Preview</PreviewTitle>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
