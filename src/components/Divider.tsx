import React from 'react'
import { classnames } from 'tailwindcss-classnames'
import { DirectionType } from 'common/types'

export type DividerProps = {
  direction: DirectionType
}

// TODO: handle direction accordingly
// TODO: optional color prop
const divider = classnames('h-full', 'border-r-2', 'w-0', 'mx-2', 'border-gray-400')

export const Divider: React.FC<DividerProps> = ({ children }) => {
  return <div className={divider}>{children}</div>
}

export default Divider
