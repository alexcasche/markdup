import Navbar from '../Navbar'

describe('Navbar Block', () => {
  it('renders correctly', () => {
    const tree = render(<Navbar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
