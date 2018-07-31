# MarkdUp

MarkdUp is an online Markdown editor powered by React + Redux.

![Build Status][Travis-shield] ![JavaScript Style Guide][Prettier-shield] ![Packagist][MIT-shield]
 
## Features

 - Dual HTML + Markdown editors
 - Sytax highlighting, error checking
 - Mobile friendly

## Getting Started

Type some Markdown on the left and see your preview on the right.  Want to work in HTML instead?  Click the code icon in the editor header.

## Settings

Click the gear icon in the header to adjust the options below.

| Setting           |  Description                            |
|-------------------|-----------------------------------------|
| `Auto Save`       |  Save session in browser on update      |
| `Live Complete`   |  Show HTML syntax popup on typing       |
| `Split View`      |  Display dual editors (HTML + Markdown) |
| `Sync Editors`    |  Update contents of editors to match    |
| `Reset Session`   |  Remove all data from browser           |

## Local Development

To work locally and extend Markdup follow these steps.

1. Clone the repo from Github

```bash
git clone https://github.com/alexcasche/markdup
```

2. Install the dependencies

```bash
npm install or yarn install
```

3. Start test suite

```bash
npm test or yarn run test
```

4. Launch development server

```bash
npm start or yarn start
```

## Tech Used

Markdup was built with the following libraries

- [React] - SPA framework
- [Redux] - State management 
- [Reselect] - Selector library
- [Ace Editor] - Browser text editor
- [Marked] - Markdown to HTML
- [Turndown] - HTML to Markdwon
- [Travis-CI] - Continuous integration


[//]: <References>

[Travis-shield]: <https://travis-ci.com/alexcasche/markdup.svg?branch=master>
[Prettier-shield]: <https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-circle>
[MIT-shield]: <https://img.shields.io/packagist/l/doctrine/orm.svg>

[React]: <https://reactjs.org/>
[Redux]: <https://redux.js.org/>
[Reselect]: <https://redux.js.org/recipes/computing-derived-data>
[Ace Editor]: <https://ace.c9.io/>
[Marked]: <https://github.com/markedjs/marked>
[Turndown]: <https://github.com/domchristie/turndown>
[Travis-CI]: <https://travis-ci.com/>

