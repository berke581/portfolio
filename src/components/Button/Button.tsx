import React, { useMemo, ComponentPropsWithoutRef, useCallback } from 'react'
import { Link } from 'gatsby'
import { LinkGetProps } from '@reach/router'
import { IconBaseProps, IconType } from 'react-icons'
import { TailSpin } from 'react-loader-spinner'
import tailwindColors from 'tailwindcss/colors'
import cx from 'classnames'
import * as styles from './styles'
import { ButtonVariantType, IconPlacementType } from 'common/types'

export type ButtonProps = {
  to?: string
  href?: string
  variant?: ButtonVariantType
  icon?: { iconComponent: IconType; placement?: IconPlacementType } & IconBaseProps
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

    const { iconComponent: IconComponent, placement = 'left', ...iconRest } = icon || {}
    const InnerButton = useCallback(
      () => (
        <div className={styles.buttonInnerBase}>
          {placement == 'left' && icon && IconComponent && <IconComponent {...iconRest} />}
          {children}
          {placement == 'right' && icon && IconComponent && <IconComponent {...iconRest} />}
          {isLoading && <TailSpin width={30} height={30} color={tailwindColors.gray['600']} />}
        </div>
      ),
      [buttonStyle, styles.buttonInnerBase, icon, children, isLoading],
    )

    return to ? (
      // NOTE: any usage due to: https://github.com/gatsbyjs/gatsby/issues/34325
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
