import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type IconProps = {
  to?: string
  href?: string
} & FontAwesomeIconProps

export const Icon: React.FC<IconProps> = ({ to, href, className, ...rest }) => {
  return to ? (
    <Link className={className} to={to}>
      <FontAwesomeIcon {...rest} />
    </Link>
  ) : href ? (
    <a className={className} href={href}>
      <FontAwesomeIcon {...rest} />
    </a>
  ) : (
    <FontAwesomeIcon className={className} {...rest} />
  )
}

export default Icon
