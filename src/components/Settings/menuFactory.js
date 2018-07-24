import React from 'react'
import { Settings } from 'blocks'

const menuFactory = ({ settingsLinks, toggleSetting }) => {
  return Object.keys(settingsLinks).map((link, index) => {
    const toggleModifiers = [...(settingsLinks[link] ? ['checked'] : [])]
    const text = link
      .split(/(?=[A-Z])/)
      .join(' ')
      .toLowerCase()
    return (
      <Settings.Link key={index} onClick={() => toggleSetting(link)}>
        {text}
        <Settings.Toggle
          checked={settingsLinks[link]}
          icons={false}
          readOnly={true}
          modifiers={toggleModifiers}
        />
      </Settings.Link>
    )
  })
}

export default menuFactory
