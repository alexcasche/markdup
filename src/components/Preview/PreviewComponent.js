import React from 'react'
import Highlight from 'react-highlight'
import { Preview } from 'blocks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExpandArrowsAlt,
  faEyeSlash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { markdownToHtml } from 'utils/convertCodes'
import { PropTypes as t } from 'prop-types'

const PreviewComponent = props => {
  const { activeEditor, expanded, html, markdown, events } = props
  const preview = activeEditor === 'html' ? html : markdownToHtml(markdown)
  const expandedModifiers = [...(expanded ? ['expanded'] : [])]
  const expandIcon =
    expandedModifiers.indexOf('expanded') === -1 ? faExpandArrowsAlt : faTimes
  return (
    <Preview className="Preview" modifiers={expandedModifiers}>
      <Preview.Header modifiers={expandedModifiers}>
        <Preview.Title>Preview</Preview.Title>
        {!expanded ? (
          <Preview.Button onClick={events.togglePreview} modifiers={['mobile']}>
            <FontAwesomeIcon icon={faEyeSlash} />
          </Preview.Button>
        ) : null}
        <Preview.Button onClick={() => events.toggleExpand('preview')}>
          <FontAwesomeIcon icon={expandIcon} />
        </Preview.Button>
      </Preview.Header>
      <Preview.Content modifiers={expandedModifiers}>
        <Highlight innerHTML={true}>{preview}</Highlight>
      </Preview.Content>
    </Preview>
  )
}

PreviewComponent.propTypes = {
  activeEditor: t.string.isRequired,
  expanded: t.bool.isRequired,
  html: t.string.isRequired,
  markdown: t.string.isRequired,
  events: t.shape({
    toggleExpand: t.func.isRequired,
    togglePreview: t.func.isRequired,
  }).isRequired,
}

export default PreviewComponent
