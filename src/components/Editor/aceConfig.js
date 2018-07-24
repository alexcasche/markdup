import 'brace/mode/html'
import 'brace/mode/markdown'
import 'brace/theme/github'
import 'brace/theme/chrome'
import 'brace/ext/language_tools'

const settings = {
  focus: false,
  showPrintMargin: false,
  tabSize: 2,
  useSoftTabs: true,
  vScrollBarAlwaysVisible: true,
  wrapEnabled: true,
}

const styles = {
  maxWidth: '100%',
  width: '100%',
  height: '100%',
  minHeight: '100%',
  lineHeight: '2em',
  fontFamily:
    "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
  letterSpacing: 'normal',
}

export default {
  settings,
  styles,
}
