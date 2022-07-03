import React from 'react'
import { Button } from 'components'
import { HamburgerMenu } from './HamburgerMenu'

export type MenuProps = {
  isHamburger?: boolean
}

// TODO: unify menus
export const Menu: React.FC<MenuProps> = ({ isHamburger = false }) => {
  return !isHamburger ? (
    <>
      <Button to="/">Home</Button>
      {/* <Button to="/about">About</Button> */}
      {/* last slash is important for active page styling for button */}
      <Button to="/projects/">Projects</Button>
      <Button to="/contact/">Contact</Button>
    </>
  ) : (
    <HamburgerMenu />
  )
}
