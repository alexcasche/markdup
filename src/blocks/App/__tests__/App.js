import App from '../App'

describe('App Block', () => {
  it('renders correctly', () => {
    const tree = render(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
