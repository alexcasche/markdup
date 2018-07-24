import PreviewHeader from '../PreviewHeader'

describe('PreviewHeader Element', () => {
  it('renders correctly', () => {
    const tree = render(<PreviewHeader>Preview</PreviewHeader>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds expanded modifier', () => {
    const tree = render(<PreviewHeader modifiers={['expanded']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding', '0 10vw')
  })
})
