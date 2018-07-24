export default function(activeEditor, currentWorkspace) {
  return {
    characters: currentWorkspace[activeEditor].length,
    lines: currentWorkspace[activeEditor].split('\n').length,
  }
}
