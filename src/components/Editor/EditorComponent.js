import React, { Component } from 'react'
import { Editor } from 'blocks'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretUp,
  faCode,
  faExpandArrowsAlt,
  faEye,
  faFont,
  faPaperclip,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import aceConfig from './aceConfig'
import aceProps from './aceProps'
import { PropTypes as t } from 'prop-types'

export default class EditorComponent extends Component {
  constructor() {
    super()
    this.state = {
      editor: undefined,
      showCopy: false,
    }
  }
  componentDidUpdate(newProps, newState) {
    const { editor, showCopy } = this.state
    if (newProps.resizing || newProps.expanded !== this.props.expanded) {
      setTimeout(() => editor.resize())
    }
    if (showCopy) {
      setTimeout(() => this.setState({ showCopy: false }), 650)
    }
  }
  copyClipboard = () => {
    this.state.editor.focus()
    this.setState({ showCopy: true })
  }
  togglePreview = () => {
    this.state.editor.focus()
    this.props.events.togglePreview()
  }
  render() {
    const {
      activeEditor,
      expanded,
      lang,
      splitView,
      events,
      actions,
    } = this.props
    const expandedModifiers = [...(expanded ? ['expanded'] : [])]
    const expandIcon = !expanded ? faExpandArrowsAlt : faTimes
    const editorIcon = activeEditor === 'markdown' ? faCode : faFont
    const nextEditor = activeEditor === 'markdown' ? 'html' : 'markdown'
    const editorTitle = !splitView ? activeEditor : lang
    const copyModifiers = [...(this.state.showCopy ? ['visible'] : [])]
    return (
      <Editor className="Editor">
        <Editor.Header modifiers={expandedModifiers}>
          <Editor.Title>{editorTitle}</Editor.Title>
          <CopyToClipboard
            text={this.props[activeEditor]}
            onCopy={this.copyClipboard}
          >
            <Editor.Button>
              <FontAwesomeIcon icon={faPaperclip} />
              <Editor.Copy modifiers={copyModifiers}>
                <FontAwesomeIcon icon={faCaretUp} />
                Copied to Clipboard!
              </Editor.Copy>
            </Editor.Button>
          </CopyToClipboard>
          {!splitView ? (
            <Editor.Button
              onClick={() =>
                actions.updateSetting({ activeEditor: nextEditor })
              }
            >
              <FontAwesomeIcon icon={editorIcon} />
            </Editor.Button>
          ) : null}
          {!expanded ? (
            <Editor.Button onClick={this.togglePreview} modifiers={['mobile']}>
              <FontAwesomeIcon icon={faEye} />
            </Editor.Button>
          ) : null}
          <Editor.Button onClick={events.toggleExpand}>
            <FontAwesomeIcon icon={expandIcon} />
          </Editor.Button>
        </Editor.Header>
        <Editor.Content modifiers={expandedModifiers}>
          <Editor.Ace
            {...aceConfig.settings}
            {...aceProps(this.props)}
            onChange={val => actions.updateWorkspace(activeEditor, val)}
            onFocus={
              splitView
                ? () => actions.updateSetting({ activeEditor: lang })
                : null
            }
            onLoad={editor => {
              editor.renderer.setPadding(10)
              this.setState({ editor: editor })
            }}
            style={aceConfig.styles}
          />
        </Editor.Content>
      </Editor>
    )
  }
}

EditorComponent.propTypes = {
  activeEditor: t.string.isRequired,
  autoSave: t.bool.isRequired,
  expanded: t.bool.isRequired,
  html: t.string.isRequired,
  lang: t.string.isRequired,
  liveComplete: t.bool.isRequired,
  markdown: t.string.isRequired,
  splitView: t.bool.isRequired,
  syncEditors: t.bool.isRequired,
  actions: t.shape({
    updateSetting: t.func.isRequired,
    updateWorkspace: t.func.isRequired,
  }).isRequired,
  events: t.shape({
    toggleExpand: t.func.isRequired,
    togglePreview: t.func.isRequired,
  }).isRequired,
}
