import SettingsButton from '../SettingsButton'

describe('SettingsButton Element', () => {
  it('renders correctly', () => {
    const tree = render(<SettingsButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds checked modifier', () => {
    const tree = render(<SettingsButton modifiers={['disabled']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('pointer-events', 'none')
  })
})
