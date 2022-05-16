/* eslint-disable react/display-name */
// TODO: fix disabling eslint here

import React, { useMemo, ComponentPropsWithoutRef, useCallback } from 'react'
import { Link } from 'gatsby'
import { LinkGetProps } from '@reach/router'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { classnames } from 'tailwindcss-classnames'
import * as styles from './styles'
import { ButtonVariantType, IconPlacementType } from 'common/types'

export type ButtonProps = {
  to?: string
  href?: string
  variant?: ButtonVariantType
  icon?: { name: FontAwesomeIconProps['icon']; placement?: IconPlacementType }
} & ComponentPropsWithoutRef<'button'>

const isActive = (args: LinkGetProps) => {
  return args.isCurrent
    ? { className: classnames(styles.buttonBase, styles.buttonPrimaryActive) }
    : {}
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // eslint-disable-next-line react/prop-types
  ({ children, to, href, icon, variant = 'primary', ...rest }, ref) => {
    const buttonStyle = useMemo(
      () =>
        variant === 'primary'
          ? classnames(styles.buttonBase, styles.buttonPrimary)
          : classnames(styles.buttonBase, styles.buttonDanger),
      [variant],
    )

    // TODO: finish here, it doesn't work properly now
    const buttonInnerStyle = useMemo(
      () =>
        !icon?.placement
          ? classnames(styles.buttonInnerBase)
          : classnames(styles.buttonInnerBase, styles.buttonInnerRight),
      [icon],
    )

    const InnerButton = useCallback(
      () => (
        <div className={buttonInnerStyle}>
          {icon && <FontAwesomeIcon icon={icon.name} />}
          {children}
        </div>
      ),
      [buttonStyle, buttonInnerStyle, icon, children],
    )

    return to ? (
      // TODO: fix "any" usage here
      <Link to={to} className={buttonStyle} getProps={isActive} ref={ref as any}>
        <InnerButton />
      </Link>
    ) : href ? (
      // TODO: pass ref here
      <a href={href} className={buttonStyle} target="_blank" rel="noreferrer">
        <InnerButton />
      </a>
    ) : (
      <button className={buttonStyle} ref={ref} {...rest}>
        <InnerButton />
      </button>
    )
  },
)

export default Button
