import React from 'react'
import { Page } from 'blocks'
import { Banner, Navbar, Reflex } from 'components'
import { PropTypes as t } from 'prop-types'

const PageComponent = props => {
  const { showSettings, showSidebar, actions } = props
  const pageModifiers = () => {
    return [...(showSidebar ? ['sidebar'] : [])]
  }
  return (
    <Page className="Page" modifiers={pageModifiers()}>
      <Navbar />
      <Banner />
      <Reflex />
      {showSettings || showSidebar ? (
        <Page.Overlay
          onClick={() =>
            actions.updateLayout({ showSettings: false, showSidebar: false })
          }
        />
      ) : null}
    </Page>
  )
}

PageComponent.propTypes = {
  showSettings: t.bool.isRequired,
  showSidebar: t.bool.isRequired,
  actions: t.shape({
    updateLayout: t.func.isRequired,
  }).isRequired,
}

export default PageComponent
