import React from 'react'
import { Link } from 'gatsby'
import { LinkGetProps } from '@reach/router'
import cx from 'classnames'
import * as styles from './styles'

export type MenuItemProps = {
  to: string
  children?: React.ReactNode
}

const isActive = (args: LinkGetProps) => {
  return args.isCurrent ? { className: cx(styles.menuItemBase, styles.menuItemActive) } : {}
}

export const MenuItem: React.FC<MenuItemProps> = ({ to, children }) => {
  return (
    <Link to={to} className={cx(styles.menuItemBase, styles.menuItemInactive)} getProps={isActive}>
      {children}
    </Link>
  )
}
