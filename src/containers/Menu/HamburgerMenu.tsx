import React, { useState, useRef, Fragment } from 'react'
import { usePopper } from 'react-popper'
import { FaBars } from 'react-icons/fa'
import { Button, Divider } from 'components'
import { MenuOptionType } from './Menu'
import { MenuContainer } from './MenuContainer'
import { MenuItem } from './MenuItem'
import { useHandleClickOutside } from 'utils/useHandleClickOutside'

type HamburgerMenuProps = {
  options: Array<MenuOptionType>
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ options }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const containerElementRef = useRef<HTMLElement>(null)

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  })

  const handleClickOutside = () => {
    setIsVisible(false)
  }
  useHandleClickOutside(containerElementRef, handleClickOutside)

  return (
    <span ref={containerElementRef}>
      <Button
        icon={{ iconComponent: FaBars, size: 20 }}
        ref={setReferenceElement}
        onClick={() => setIsVisible((prev) => !prev)}
      />
      {isVisible && (
        <MenuContainer styles={styles} attributes={attributes} ref={setPopperElement}>
          {options.map(({ label, to }, i) => (
            <Fragment key={label + to}>
              <MenuItem to={to}>{label}</MenuItem>
              {i !== options.length - 1 && <Divider direction="horizontal" />}
            </Fragment>
          ))}
        </MenuContainer>
      )}
    </span>
  )
}
