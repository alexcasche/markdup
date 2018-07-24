import DialogOverlay from '../DialogOverlay'

describe('DialogOverlay Element', () => {
  it('renders correctly', () => {
    const tree = render(<DialogOverlay />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
