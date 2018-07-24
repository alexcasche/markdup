import PageOverlay from '../PageOverlay'

describe('PageOverlay Element', () => {
  it('renders correctly', () => {
    const tree = render(<PageOverlay />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
