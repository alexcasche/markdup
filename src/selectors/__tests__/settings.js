import { getAllSettings, getSettingVal } from '../settings'
import { defaultSettings } from 'constants/defaultValues'

const state = {
  settings: { ...defaultSettings, activeEditor: 'html' },
}

describe('settings selectors', () => {
  it('getAllSettings selector', () => {
    expect(getAllSettings(state)).toEqual(state.settings)
  })

  it('getLayoutVal selector', () => {
    expect(getSettingVal(state, 'activeEditor')).toBe('html')
  })
})
