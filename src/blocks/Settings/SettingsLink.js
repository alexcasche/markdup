import { Link } from 'elements'
import { shade, tint } from 'polished'

const SettingsLink = Link.extend`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.grey};
  height: 50px;
  text-transform: capitalize;
  border-bottom: 1px solid ${props => shade(0.5, props.theme.colors.grey)};
  transition: color 0.15s ease-in-out;
  &:hover {
    color: ${props => tint(0.25, props.theme.colors.grey)};
    cursor: pointer;
  }
  &:last-of-type {
    border-bottom: none;
  }
`

export default SettingsLink
