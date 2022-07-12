import React from 'react'
import { Link } from 'gatsby'
import { IconBaseProps } from 'react-icons'
import { LabelPlacementType } from 'common/types'
import * as styles from './styles'

export type IconProps = {
  element: React.FC
  label?: {
    text: string
    placement: LabelPlacementType
  }
  to?: string
  href?: string
} & IconBaseProps

export const Icon: React.FC<IconProps> = ({ to, label, href, element, ...rest }) => {
  const Element = element

  const InnerLink = () => (
    <>
      {label && label.placement === 'left' && label.text}
      <Element {...rest} />
      {label && label.placement === 'right' && label.text}
    </>
  )

  return to ? (
    <Link className={styles.iconContainer} to={to}>
      <InnerLink />
    </Link>
  ) : href ? (
    <a className={styles.iconContainer} href={href}>
      <InnerLink />
    </a>
  ) : (
    <span className={styles.iconContainer}>
      <InnerLink />
    </span>
  )
}

export default Icon
