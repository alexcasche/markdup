import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSettingVal, getCurrentWorkspace } from 'selectors'
import { updateWorkspace } from 'actions'
import BannerComponent from './BannerComponent'

export const BannerContainer = props => {
  return <BannerComponent {...props} />
}

function mapStateToProps(state) {
  return {
    activeEditor: getSettingVal(state, 'activeEditor'),
    currentWorkspace: getCurrentWorkspace(state),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateWorkspace: bindActionCreators(updateWorkspace, dispatch),
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerContainer)
