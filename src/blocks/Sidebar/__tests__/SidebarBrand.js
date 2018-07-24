import SidebarBrand from '../SidebarBrand'

describe('SidebarBrand Element', () => {
  it('renders correctly', () => {
    const tree = render(<SidebarBrand />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
