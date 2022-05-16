import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'components'

export const HamburgerMenu: React.FC = () => {
  const [referenceElement, setReferenceElement] = useState<any>(undefined)
  const [popperElement, setPopperElement] = useState<any>(undefined)

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

  console.log(referenceElement, popperElement)

  return (
    <>
      <Button
        icon={{ name: faBars }}
        ref={setReferenceElement}
        onClick={() => setIsVisible((prev) => !prev)}
      />
      {isVisible && (
        <div
          className="fixed z-[1000] border-2 border-gray-300 bg-gray-100 rounded-md flex flex-col px-4 py-2"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <Button to="/">Home</Button>
          <Button to="/projects/">Projects</Button>
        </div>
      )}
    </>
  )
}
