import React, { useMemo } from 'react'
import { classnames, borderColor, borderWidth, height, margin, width } from 'tailwindcss-classnames'
import { DirectionType } from 'common/types'

export type DividerProps = {
  direction: DirectionType
  children?: React.ReactNode
}

export const Divider: React.FC<DividerProps> = ({ direction, children }) => {
  const ContainerElement = direction === 'vertical' ? 'span' : 'div'

  const dividerStyle = useMemo(
    () =>
      direction === 'vertical'
        ? classnames(
            height('h-full'),
            borderWidth('border-r-2'),
            width('w-0'),
            margin('mx-2'),
            borderColor('border-gray-400'),
          )
        : classnames(
            width('w-full'),
            borderWidth('border-b-2'),
            height('h-0'),
            margin('my-2'),
            borderColor('border-gray-400'),
          ),
    [direction],
  )
  return <ContainerElement className={dividerStyle}>{children}</ContainerElement>
}

export default Divider
