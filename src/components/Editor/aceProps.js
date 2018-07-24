const aceProps = props => {
  const {
    activeEditor,
    expanded,
    html,
    lang,
    liveComplete,
    markdown,
    splitView,
  } = props
  const mode = !splitView ? activeEditor : lang
  return {
    editorProps: { $blockScrolling: true },
    mode: mode,
    theme: mode === 'markdown' ? 'github' : 'chrome',
    value: mode === 'markdown' ? markdown : html,
    setOptions: {
      enableLiveAutocompletion: mode === 'html' ? liveComplete : false,
      fontSize: !expanded ? '13px' : '16px',
      maxLines: Infinity,
      showGutter: !expanded,
      useWorker: true,
    },
  }
}

export default aceProps
