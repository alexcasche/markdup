import DialogText from '../DialogText'

describe('DialogText Element', () => {
  it('renders correctly', () => {
    const tree = render(<DialogText />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
