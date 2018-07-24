import React from 'react'
import { Banner } from 'blocks'
import { PropTypes as t } from 'prop-types'
import getCount from './getCount'

const BannerComponent = props => {
  const { activeEditor, currentWorkspace, actions } = props
  const count = getCount(activeEditor, currentWorkspace)
  return (
    <Banner className="Banner">
      <Banner.Left>
        <Banner.Label for="Banner-Input">workspaces</Banner.Label>
        <Banner.Input
          id="Banner-Input"
          value={currentWorkspace.title}
          onChange={e => actions.updateWorkspace('title', e.target.value)}
        />
      </Banner.Left>
      <Banner.Right>
        <Banner.Text>
          lines: <span>{count.lines}</span>
          <br />
          characters: <span>{count.characters}</span>
        </Banner.Text>
      </Banner.Right>
    </Banner>
  )
}

BannerComponent.propTypes = {
  activeEditor: t.string.isRequired,
  currentWorkspace: t.shape({
    title: t.string,
    markdown: t.string,
    html: t.string,
  }).isRequired,
  actions: t.shape({
    updateWorkspace: t.func.isRequired,
  }).isRequired,
}

export default BannerComponent
