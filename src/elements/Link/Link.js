import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'

const Link = styled.a`
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`
const RouterLink = Link.withComponent(ReactLink)

export default Link
export { RouterLink }
