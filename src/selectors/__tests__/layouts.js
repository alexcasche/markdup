import { getAllLayouts, getLayoutVal } from '../layouts'

const state = {
  layouts: {
    showDialog: true,
    showSettings: false,
    showSidebar: true,
  },
}

describe('layout selectors', () => {
  it('getAllLayouts selector', () => {
    expect(getAllLayouts(state)).toEqual(state.layouts)
  })

  it('getLayoutVal selector', () => {
    expect(getLayoutVal(state, 'showDialog')).toBe(true)
    expect(getLayoutVal(state, 'showSettings')).toBe(false)
    expect(getLayoutVal(state, 'showSidebar')).toBe(true)
  })
})
