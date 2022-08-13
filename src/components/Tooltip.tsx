import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import { useHandleMouseMoveOutside } from 'utils/useHandleMouseMoveOutside'

export type TooltipProps = {
  element: React.ReactElement
  text: string
}

export const Tooltip: React.FC<TooltipProps> = ({ element, text }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [5, 5],
        },
      },
    ],
  })

  const handleMouseMoveOutside = () => {
    setIsVisible(false)
  }
  useHandleMouseMoveOutside(referenceElement, handleMouseMoveOutside)

  const ReferenceElement = React.cloneElement(element, {
    ref: setReferenceElement,
    onMouseOver: () => setIsVisible(true),
    onMouseOut: () => setIsVisible(false),
  })

  return (
    <span>
      {ReferenceElement}

      {isVisible && (
        <div
          className="text-gray-800"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {text}
        </div>
      )}
    </span>
  )
}

export default Tooltip
