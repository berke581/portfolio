import React from 'react'
import { Link } from 'gatsby'
import { IconBaseProps } from 'react-icons'
import cx from 'classnames'
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

export const Icon = React.forwardRef<HTMLElement, IconProps>(
  ({ to, label, href, element, className, ...rest }, ref) => {
    const Element = element

    const InnerIcon = () => {
      const externalPattern = /^((http|https|ftp):\/\/)/
      const styles = href ? (externalPattern.test(href) ? 'external-link' : undefined) : undefined

      const labelStyled = label && <span className={styles}>{label.text}</span>

      return (
        <>
          {label && label.placement === 'left' && labelStyled}
          <Element {...rest} />
          {label && label.placement === 'right' && labelStyled}
        </>
      )
    }

    // any usage due to: https://github.com/gatsbyjs/gatsby/issues/34325
    return to ? (
      <Link className={cx(styles.iconContainer, className)} to={to} ref={ref as any}>
        <InnerIcon />
      </Link>
    ) : href ? (
      <a className={cx(styles.iconContainer, className)} href={href} ref={ref as any}>
        <InnerIcon />
      </a>
    ) : (
      <span className={cx(styles.iconContainer, className)} ref={ref as any}>
        <InnerIcon />
      </span>
    )
  },
)

Icon.displayName = 'Icon'

export default Icon
