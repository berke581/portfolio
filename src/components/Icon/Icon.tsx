import React from 'react'
import { Link } from 'gatsby'
import { IconBaseProps, IconType } from 'react-icons'
import cx from 'classnames'
import { LabelPlacementType } from 'common/types'
import * as styles from './styles'

export type IconProps = {
  iconComponent: IconType
  label?: {
    text: string
    placement: LabelPlacementType
  }
  to?: string
  href?: string
} & IconBaseProps

const isExternalLink = (href: string) => {
  const externalPattern = /^((http|https|ftp):\/\/)/
  return externalPattern.test(href)
}

export const Icon = React.forwardRef<HTMLElement, IconProps>(
  ({ to, label, href, iconComponent, className, target, ...rest }, ref) => {
    const IconComponent = iconComponent

    const InnerIcon = () => {
      const externalLinkIconStyle = href
        ? isExternalLink(href)
          ? 'external-link'
          : undefined
        : undefined
      const externalLinkTextStyle = href ? 'hover:underline' : undefined
      const styles = cx(externalLinkIconStyle, externalLinkTextStyle)

      const labelStyled = label && <span className={styles}>{label.text}</span>

      return (
        <>
          {label && label.placement === 'left' && labelStyled}
          <IconComponent {...rest} />
          {label && label.placement === 'right' && labelStyled}
        </>
      )
    }

    // NOTE: any usage due to: https://github.com/gatsbyjs/gatsby/issues/34325
    return to ? (
      <Link className={cx(styles.iconContainer, className)} to={to} ref={ref as any}>
        <InnerIcon />
      </Link>
    ) : href ? (
      <a
        className={cx(styles.iconContainer, className)}
        href={href}
        target={target || (isExternalLink(href) ? '_blank' : undefined)}
        ref={ref as any}
      >
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
