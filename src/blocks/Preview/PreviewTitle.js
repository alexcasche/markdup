import styled from 'styled-components'
import { shade } from 'polished'

const PreviewTitle = styled.p`
  margin: 0;
  color: ${props => shade(0.9, props.theme.colors.grey)};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  flex-grow: 1;
`

export default PreviewTitle
