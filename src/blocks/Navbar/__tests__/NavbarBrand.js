import { BrowserRouter } from 'react-router-dom'
import NavbarBrand from '../NavbarBrand'

describe('NavbarBrand Element', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <NavbarBrand to="/">
          <span>markd</span>up
        </NavbarBrand>
      </BrowserRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
