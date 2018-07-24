import React, { Component } from 'react'
import { Reflex } from 'blocks'
import { Editor, Preview } from 'components'
import { PropTypes as t } from 'prop-types'

export default class ReflexComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      mobilePreview: false,
      resizing: false,
    }
    this.resizeProps = {
      onResize: this.onResize,
      onStopResize: this.onStopResize,
    }
  }
  onResize = () => {
    this.setState(prevState => ({ ...prevState, resizing: true }))
  }
  onStopResize = () => {
    this.setState(prevState => ({ ...prevState, resizing: false }))
  }
  toggleExpand = box => {
    this.setState(prevState => ({
      ...prevState,
      expanded: !prevState.expanded ? box : false,
    }))
  }
  togglePreview = () => {
    this.setState(prevState => ({
      ...prevState,
      mobilePreview: !prevState.mobilePreview,
    }))
  }
  render() {
    const { expanded, mobilePreview, resizing } = this.state
    const { splitView } = this.props
    const containerModifiers = [
      ...(mobilePreview && !expanded ? ['mobilePreview'] : []),
    ]
    const boxModifiers = {
      preview: [...(expanded === 'preview' ? ['expanded'] : [])],
      editor1: [...(expanded === 'editor1' ? ['expanded'] : [])],
      editor2: [...(expanded === 'editor2' ? ['expanded'] : [])],
    }
    return (
      <Reflex
        className="Reflex"
        orientation="vertical"
        modifiers={containerModifiers}
      >
        <Reflex.Box minSize="250" {...this.resizeProps}>
          <Reflex orientation="horizontal">
            <Reflex.Box
              minSize="44"
              {...this.resizeProps}
              modifiers={boxModifiers.editor1}
            >
              <Editor
                events={{
                  toggleExpand: () => this.toggleExpand('editor1'),
                  togglePreview: this.togglePreview,
                }}
                expanded={expanded === 'editor1'}
                lang="markdown"
                resizing={resizing}
              />
            </Reflex.Box>
            {splitView ? <Reflex.Split /> : null}
            {splitView ? (
              <Reflex.Box
                minSize="46"
                {...this.resizeProps}
                modifiers={boxModifiers.editor2}
              >
                <Editor
                  events={{
                    toggleExpand: () => this.toggleExpand('editor2'),
                    togglePreview: this.togglePreview,
                  }}
                  expanded={expanded === 'editor2'}
                  lang="html"
                  resizing={resizing}
                />
              </Reflex.Box>
            ) : null}
          </Reflex>
        </Reflex.Box>
        <Reflex.Split />
        <Reflex.Box
          minSize="250"
          {...this.resizeProps}
          modifiers={boxModifiers.preview}
        >
          <Preview
            expanded={expanded === 'preview'}
            events={{
              toggleExpand: this.toggleExpand,
              togglePreview: this.togglePreview,
            }}
          />
        </Reflex.Box>
      </Reflex>
    )
  }
}

ReflexComponent.propTypes = {
  splitView: t.bool.isRequired,
}
