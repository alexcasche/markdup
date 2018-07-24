import Preview from '../Preview'

describe('Preview Element', () => {
  it('renders correctly', () => {
    const tree = render(<Preview />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
