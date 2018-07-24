import React from 'react'
import { connect } from 'react-redux'
import { getSettingVal } from 'selectors'
import ReflexComponent from './ReflexComponent'

export const ReflexContainer = props => {
  return <ReflexComponent {...props} />
}

function mapStateToProps(state) {
  return {
    splitView: getSettingVal(state, 'splitView'),
  }
}

export default connect(mapStateToProps)(ReflexContainer)
