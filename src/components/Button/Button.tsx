import React, { ComponentPropsWithoutRef } from 'react'
import { Link } from 'gatsby'
import { LinkGetProps } from '@reach/router'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { classnames } from 'tailwindcss-classnames'
import * as styles from './styles'

// TODO: base, primary etc.
export type VariantType = 'primary' | 'secondary' | 'danger'
export type ButtonProps = {
  to?: string
  variant?: VariantType
  icon?: FontAwesomeIconProps
} & ComponentPropsWithoutRef<'button'>

// TODO: fix button classes
// const button = classnames(
//   'px-4',
//   'py-1',
//   'm-2',
//   'inline-block',
//   'text-lg',
//   'text-gray-800',
//   'font-semibold',
//   'rounded-lg',
//   'border-2',
//   'border-gray-200',
//   'hover:text-gray-200',
//   'hover:bg-gray-800',
//   'hover:border-gray-800',
// )
// const active = classnames('text-blue-200', 'bg-gray-800', 'border-gray-800')

const isActive = (args: LinkGetProps) => {
  return args.isCurrent
    ? { className: classnames(styles.buttonBase, styles.buttonPrimaryActive) }
    : {}
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  to,
  icon,
  ...rest
}) => {
  // maybe useState?
  const style =
    variant === 'primary'
      ? classnames(styles.buttonBase, styles.buttonPrimary)
      : classnames(styles.buttonBase, styles.buttonDanger)

  return to ? (
    <Link to={to} className={style} getProps={isActive}>
      {children}
    </Link>
  ) : (
    <button className={style} {...rest}>
      {/* fix here, icon in button */}
      {/* {icon && <FontAwesomeIcon {...icon} />} */}
      {children}
    </button>
  )
}

export default Button
