import styled from 'styled-components'
import { shade, tint } from 'polished'

const BannerText = styled.p`
  color: ${props => shade(0.85, props.theme.colors.grey)};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: capitalize;
  span {
    margin-left: 5px;
    color: ${props => tint(0.95, props.theme.colors.grey)};
    font-weight: 400;
    letter-spacing: 1px;
  }
`

export default BannerText
