export const getAllLayouts = state => {
  return state.layouts
}

export const getLayoutVal = (state, key) => {
  return state.layouts[key]
}
