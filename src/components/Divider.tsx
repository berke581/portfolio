import React, { useMemo } from 'react'
import cx from 'classnames'
import { DirectionType } from 'common/types'
// import { DefaultColors } from 'tailwindcss/types/generated/colors'

export type DividerProps = {
  direction: DirectionType
  // TODO: fix color typing and add color support
  // https://kimmo.blog/posts/6-advanced-typescript-the-ultimate-tailwind-typings/
  // color?: string
  children?: React.ReactNode
}

export const Divider: React.FC<DividerProps> = ({ direction, children }) => {
  const ContainerElement = direction === 'vertical' ? 'span' : 'div'

  const dividerStyle = useMemo(
    () =>
      direction === 'vertical'
        ? cx('h-full', 'border-r-2', 'w-0', 'mx-2', 'border-gray-400')
        : cx('w-full', 'border-b-2', 'h-0', 'my-2', 'border-gray-400'),
    [direction],
  )
  return <ContainerElement className={dividerStyle}>{children}</ContainerElement>
}

export default Divider
