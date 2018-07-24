import PreviewContent from '../Preview/PreviewContent'

const EditorContent = PreviewContent.extend`
  padding: ${props => (props.modifiers.indexOf('expanded') === -1 ? '0' : '')};
`

export default EditorContent
