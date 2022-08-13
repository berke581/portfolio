import React from 'react'
import { Button } from 'components'
import { HamburgerMenu } from './HamburgerMenu'

export type MenuOptionType = {
  label: string
  to: string
}

export type MenuProps = {
  options: Array<MenuOptionType>
  isHamburger?: boolean
}

export const Menu: React.FC<MenuProps> = ({ options, isHamburger = false }) => {
  return !isHamburger ? (
    <>
      {options.map(({ label, to }) => (
        <Button to={to} key={label + to}>
          {label}
        </Button>
      ))}
    </>
  ) : (
    <HamburgerMenu options={options} />
  )
}
