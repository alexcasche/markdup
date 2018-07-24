import styled from 'styled-components'
import { shade } from 'polished'

const BannerLabel = styled.label`
  display: block;
  color: ${props => shade(0.85, props.theme.colors.grey)};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export default BannerLabel
