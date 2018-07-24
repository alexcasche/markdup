import styled from 'styled-components'

import NavbarBrand from './NavbarBrand'
import NavbarButton from './NavbarButton'
import NavbarBurger from './NavbarBurger'
import NavbarCogwheel from './NavbarCogwheel'

const Navbar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  min-height: 50px;
  padding: 0 20px;
  background-color: ${props => props.theme.colors.black};
`

Navbar.Brand = NavbarBrand
Navbar.Burger = NavbarBurger
Navbar.Button = NavbarButton
Navbar.Cogwheel = NavbarCogwheel

export default Navbar
