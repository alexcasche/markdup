import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLayoutVal } from 'selectors'
import { updateLayout } from 'actions'
import PageComponent from './PageComponent'

export const PageContainer = props => {
  return <PageComponent {...props} />
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
      updateLayout: bindActionCreators(updateLayout, dispatch),
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
