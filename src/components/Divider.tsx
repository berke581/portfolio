import React, { useMemo } from 'react'
import { classnames } from 'tailwindcss-classnames'
import { DirectionType } from 'common/types'

export type DividerProps = {
  direction: DirectionType
}

export const Divider: React.FC<DividerProps> = ({ direction, children }) => {
  const ContainerElement = direction === 'vertical' ? 'span' : 'div'

  const dividerStyle = useMemo(
    () =>
      direction === 'vertical'
        ? classnames('h-full', 'border-r-2', 'w-0', 'mx-2', 'border-gray-400')
        : classnames('w-full', 'border-b-2', 'h-0', 'my-2', 'border-gray-400'),
    [direction],
  )
  return <ContainerElement className={dividerStyle}>{children}</ContainerElement>
}

export default Divider
