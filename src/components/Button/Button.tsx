import React, { useMemo, ComponentPropsWithoutRef, useCallback } from 'react'
import { Link } from 'gatsby'
import { LinkGetProps } from '@reach/router'
import { TailSpin } from 'react-loader-spinner'
import tailwindColors from 'tailwindcss/colors'
import cx from 'classnames'
import * as styles from './styles'
import { ButtonVariantType, IconPlacementType } from 'common/types'

export type ButtonProps = {
  to?: string
  href?: string
  variant?: ButtonVariantType
  // TODO: maybe use IconType from react-icons
  icon?: { element: JSX.Element; placement?: IconPlacementType }
  isLoading?: boolean
} & ComponentPropsWithoutRef<'button'>

const isActive = (args: LinkGetProps) => {
  return args.isCurrent ? { className: cx(styles.buttonBase, styles.buttonPrimaryActive) } : {}
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, to, href, icon, isLoading, variant = 'primary', className, ...rest }, ref) => {
    const buttonStyle = useMemo(
      () =>
        variant === 'primary'
          ? cx(styles.buttonBase, styles.buttonPrimary)
          : cx(styles.buttonBase, styles.buttonDanger),
      [variant],
    )

    // TODO: finish here, it doesn't work properly now
    const buttonInnerStyle = useMemo(
      () =>
        !icon?.placement
          ? cx(styles.buttonInnerBase)
          : cx(styles.buttonInnerBase, styles.buttonInnerRight),
      [icon],
    )

    const InnerButton = useCallback(
      () => (
        <div className={buttonInnerStyle}>
          {icon && icon.element}
          {children}
          {isLoading && <TailSpin width={30} height={30} color={tailwindColors.gray['600']} />}
        </div>
      ),
      [buttonStyle, buttonInnerStyle, icon, children, isLoading],
    )

    return to ? (
      // TODO: fix "any" usage here
      <Link to={to} className={cx(buttonStyle, className)} getProps={isActive} ref={ref as any}>
        <InnerButton />
      </Link>
    ) : href ? (
      // TODO: pass ref here
      <a href={href} className={cx(buttonStyle, className)} target="_blank" rel="noreferrer">
        <InnerButton />
      </a>
    ) : (
      <button className={cx(buttonStyle, className)} ref={ref} {...rest}>
        <InnerButton />
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
