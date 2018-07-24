import Page from '../Page'

describe('Page Block', () => {
  it('renders correctly', () => {
    const tree = render(<Page />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('adds sidebar modifier', () => {
    const tree = render(<Page modifiers={['sidebar']} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('transform', 'translateX(300px)')
  })
})
