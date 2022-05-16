import React, { useState, useRef } from 'react'
import { usePopper } from 'react-popper'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button, Divider } from 'components'
import { MenuContainer } from './MenuContainer'
import { MenuItem } from './MenuItem'
import { useHandleClickOutside } from 'utils/useHandleClickOutside'

export const HamburgerMenu: React.FC = () => {
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
        icon={{ name: faBars }}
        ref={setReferenceElement}
        onClick={() => setIsVisible((prev) => !prev)}
      />
      {isVisible && (
        <MenuContainer styles={styles} attributes={attributes} ref={setPopperElement}>
          <MenuItem to="/">Home</MenuItem>
          <Divider direction="horizontal" />
          <MenuItem to="/projects/">Projects</MenuItem>
        </MenuContainer>
      )}
    </span>
  )
}
