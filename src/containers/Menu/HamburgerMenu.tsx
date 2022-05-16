import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import { VirtualElement } from '@popperjs/core/lib/types'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button, Divider } from 'components'
import { MenuContainer } from './MenuContainer'
import { MenuItem } from './MenuItem'

export const HamburgerMenu: React.FC = () => {
  const [referenceElement, setReferenceElement] = useState<
    Element | VirtualElement | null | undefined
  >(undefined)
  const [popperElement, setPopperElement] = useState<HTMLElement | null | undefined>(undefined)

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

  return (
    <>
      <Button
        icon={{ name: faBars }}
        ref={setReferenceElement}
        onClick={() => setIsVisible((prev) => !prev)}
        onBlur={() => setIsVisible(false)}
      />
      {isVisible && (
        <MenuContainer styles={styles} attributes={attributes} ref={setPopperElement}>
          <MenuItem to="/">Home</MenuItem>
          <Divider direction="horizontal" />
          <MenuItem to="/projects/">Projects</MenuItem>
        </MenuContainer>
      )}
    </>
  )
}
