import SettingsLink from '../SettingsLink'

describe('SettingsLink Element', () => {
  it('renders correctly', () => {
    const tree = render(<SettingsLink>Link</SettingsLink>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
