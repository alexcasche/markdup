import styled from 'styled-components'

import PreviewButton from './PreviewButton'
import PreviewContent from './PreviewContent'
import PreviewHeader from './PreviewHeader'
import PreviewTitle from './PreviewTitle'

const Preview = styled.div`
  height: 100%;
  background-color: white;
  overflow: hidden;
`

Preview.Button = PreviewButton
Preview.Content = PreviewContent
Preview.Header = PreviewHeader
Preview.Title = PreviewTitle

export default Preview
