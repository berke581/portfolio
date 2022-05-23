import React from 'react'
import { Link } from 'gatsby'
import { LinkGetProps } from '@reach/router'
import { classnames } from 'tailwindcss-classnames'
import * as styles from './styles'

export type MenuItemProps = {
  to: string
  children?: React.ReactNode
}

const isActive = (args: LinkGetProps) => {
  return args.isCurrent ? { className: classnames(styles.menuItemBase, styles.menuItemActive) } : {}
}

export const MenuItem: React.FC<MenuItemProps> = ({ to, children }) => {
  return (
    <Link to={to} className={styles.menuItemBase} getProps={isActive}>
      {children}
    </Link>
  )
}
