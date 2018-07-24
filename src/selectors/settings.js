export const getAllSettings = state => {
  return state.settings
}

export const getSettingVal = (state, key) => {
  return state.settings[key]
}
