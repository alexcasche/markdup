import Reflex from '../Reflex'

describe('Reflex Block', () => {
  it('renders correctly', () => {
    const tree = render(<Reflex />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds mobilePreview modifier', () => {
    const tree = render(<Reflex modifiers={['mobilePreview']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('transform', 'translateX(-50%)', {
      media: 'only screen and (max-width:600px)',
    })
  })
})
