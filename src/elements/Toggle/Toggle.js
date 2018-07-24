import styled from 'styled-components'
import ReactToggle from 'react-toggle'

const Toggle = styled(ReactToggle)`
  display: flex;
  align-items: center;
  .react-toggle {
    .react-toggle-thumb {
      box-shadow: none !important;
    }
  }
`

export default Toggle
