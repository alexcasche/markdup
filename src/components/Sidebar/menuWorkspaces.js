import { faCode, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const menuWorkspaces = (allWorkspaces, updateSetting) => {
  let links = []
  Object.keys(allWorkspaces).map(key => {
    const title = allWorkspaces[key].title
    links.push({
      title: title ? title : '--',
      value: key,
      linkProps: {
        onClick: () => updateSetting({ activeWorkspace: key }),
      },
    })
    return links
  })
  return {
    title: 'workspaces',
    icon: faCode,
    links: links,
    linkIcon: faCheckCircle,
  }
}

export default menuWorkspaces
