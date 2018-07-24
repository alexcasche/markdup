export default `
  h1 {
    padding-bottom: 0.3em;
    font-size: 32px;
    border-bottom: 1px solid #eaecef;
    font-weight: 500;
    line-height: 1.25;
    margin: 0.67em 0;
  }
  h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid #eaecef;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 500;
    line-height: 1.25;
  }
  p {
    margin-top: 0;
    margin-bottom: 16px;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  a {
    color: #0366d6;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:hover,
  a:active {
    outline-width: 0;
  }
  ul {
    padding-left: 2em;
    margin-top: 0;
    margin-bottom: 16px;
  }
  ul li + li {
    margin-top: 0.25em;
  }
  pre {
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
    font-size: 16px;
  }
  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    background-color: #f6f8fa;
    border-radius: 3px;
  }
  table {
    display: block;
    width: 100%;
    overflow: auto;
    margin-top: 0;
    margin-bottom: 16px;
    border-spacing: 0;
    border-collapse: collapse;
  }
  tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }
  tr:nth-child(2n) {
    background-color: #f6f8fa;
  }
  th {
    text-align: center;
    font-weight: 600;
  }
  th,
  td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }
  table code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }
`
