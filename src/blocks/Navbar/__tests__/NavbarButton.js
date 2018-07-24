import NavbarButton from '../NavbarButton'

describe('NavbarButton Element', () => {
  it('renders correctly', () => {
    const tree = render(<NavbarButton>Submit</NavbarButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
