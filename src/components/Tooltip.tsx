import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import cx from 'classnames'

// NOTE: you should pass className to
// reference element to use properly
// try to improve that

export type TooltipProps = {
  element: React.ReactElement
  text: string
}

export const Tooltip: React.FC<TooltipProps> = ({ element, text }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)

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

  const ReferenceElement = React.cloneElement(element, {
    ref: setReferenceElement,
    // TODO: improve here
    // https://stackoverflow.com/questions/33435050/react-cloneelement-add-classname-element
    className: cx(element.props.className, 'peer'),
  })

  return (
    <span>
      {ReferenceElement}

      <div
        // hidden-block doesn't work, why?
        className="text-gray-800 invisible peer-hover:visible"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {text}
      </div>
    </span>
  )
}

export default Tooltip
