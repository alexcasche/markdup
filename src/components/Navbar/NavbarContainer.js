import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLayoutVal } from 'selectors'
import { toggleLayout } from 'actions'
import NavbarComponent from './NavbarComponent'

export const NavbarContainer = props => {
  return <NavbarComponent {...props} />
}

function mapStateToProps(state) {
  return {
    showSettings: getLayoutVal(state, 'showSettings'),
    showSidebar: getLayoutVal(state, 'showSidebar'),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      toggleLayout: bindActionCreators(toggleLayout, dispatch),
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer)
