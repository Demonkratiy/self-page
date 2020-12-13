import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export const HeaderMenu = () => {
  let [menuState, set_menuState] = useState('portfolio');

  let handleItemClick = ({ name }) => set_menuState({ name })

  return (
      <Menu attached='top' tabular>
        <Menu.Item
          name='Bio'
          active={menuState === 'Bio'}
          onClick={(name) => handleItemClick(name)}
        />
        <Menu.Item
          name='Portfolio'
          active={menuState === 'Portfolio'}
          onClick={(name) => handleItemClick(name)}
        />
      </Menu>
  )
}