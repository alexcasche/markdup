import SettingsToggle from '../SettingsToggle'
import { shade } from 'polished'

describe('SettingsToggle Element', () => {
  it('renders correctly', () => {
    const tree = render(<SettingsToggle />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds checked modifier', () => {
    const tree = render(<SettingsToggle modifiers={['checked']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule(
      'background-color',
      `${shade(0.9, theme.colors.green)} !important`,
      { modifier: '.react-toggle-track' }
    )
  })
})
