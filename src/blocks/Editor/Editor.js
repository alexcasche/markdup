import Preview from '../Preview/Preview'
import EditorAce from './EditorAce'
import EditorContent from './EditorContent'
import EditorCopy from './EditorCopy'

const Editor = Preview.extend``

Editor.Ace = EditorAce
Editor.Content = EditorContent
Editor.Copy = EditorCopy

export default Editor
