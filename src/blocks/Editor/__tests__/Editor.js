import Editor from '../Editor'

describe('Editor Block', () => {
  it('renders correctly', () => {
    const tree = render(<Editor />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
