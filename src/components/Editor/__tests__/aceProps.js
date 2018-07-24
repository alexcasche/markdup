import aceProps from '../aceProps'

const baseProps = {
  activeEditor: 'markdown',
  expanded: false,
  html: '<h1>html</h1>',
  lang: 'html',
  liveComplete: false,
  markdown: '## markdown',
  splitView: false,
}

let output

describe('aceProps function', () => {
  it('returns correct mode', () => {
    output = aceProps({ ...baseProps })
    expect(output.mode).toBe('markdown')
    output = aceProps({ ...baseProps, splitView: true })
    expect(output.mode).toBe('html')
  })

  it('returns correct theme', () => {
    output = aceProps({ ...baseProps })
    expect(output.theme).toBe('github')
    output = aceProps({ ...baseProps, activeEditor: 'html' })
    expect(output.theme).toBe('chrome')
  })

  it('returns correct value', () => {
    output = aceProps({ ...baseProps })
    expect(output.value).toBe('## markdown')
    output = aceProps({ ...baseProps, activeEditor: 'html' })
    expect(output.value).toBe('<h1>html</h1>')
  })

  it('returns correct showOptions', () => {
    output = aceProps({ ...baseProps })
    expect(output.setOptions).toMatchObject({
      enableLiveAutocompletion: false,
      fontSize: '13px',
      showGutter: true,
    })
    output = aceProps({ ...baseProps, liveCompletion: true })
    expect(output.setOptions).toMatchObject({
      enableLiveAutocompletion: false,
    })
    output = aceProps({
      ...baseProps,
      activeEditor: 'html',
      liveComplete: true,
    })
    expect(output.setOptions).toMatchObject({
      enableLiveAutocompletion: true,
    })
    output = aceProps({ ...baseProps, expanded: true })
    expect(output.setOptions).toMatchObject({
      fontSize: '16px',
      showGutter: false,
    })
  })
})
