import { markdownToHtml } from 'utils/convertCodes'
import readMe from './readMe'

const defaultSettings = {
  activeEditor: 'markdown',
  activeWorkspace: '0',
  autoSave: true,
  liveComplete: true,
  ready: false,
  showSave: true,
  splitView: false,
  syncEditors: false,
}

const defaultWorkspace = {
  title: 'Untitled',
  html: markdownToHtml(readMe),
  markdown: readMe,
}

export { defaultSettings, defaultWorkspace }
