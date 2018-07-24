import NavbarBurger from '../NavbarBurger'

describe('NavbarBurger Element', () => {
  it('renders correctly', () => {
    const tree = render(<NavbarBurger />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds open modifier', () => {
    const tree = render(<NavbarBurger modifiers={['open']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background-color', 'transparent')
  })
})
