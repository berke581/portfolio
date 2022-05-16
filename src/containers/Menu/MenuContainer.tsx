import React, { ComponentPropsWithoutRef } from 'react'
import { popperStylesType, popperAttributesType } from 'common/types'

export type MenuContainerProps = {
  styles: popperStylesType
  attributes: popperAttributesType
} & ComponentPropsWithoutRef<'div'>

export const MenuContainer = React.forwardRef<HTMLDivElement, MenuContainerProps>(
  ({ styles, attributes, children }, ref) => {
    return (
      <div
        className="fixed z-[1000] border-2 border-gray-300 bg-gray-600 rounded-md flex flex-col p-1 min-w-[120px]"
        ref={ref}
        style={styles.popper}
        {...attributes.popper}
      >
        {children}
      </div>
    )
  },
)

MenuContainer.displayName = 'MenuContainer'
