import React, { ComponentPropsWithoutRef } from 'react'
import cx from 'classnames'

export type CardProps = ComponentPropsWithoutRef<'div'> & {
  header?: string | React.ReactElement
  contentTop: string | React.ReactElement
  // contentBottom?: string | React.ReactElement
  footer?: string | React.ReactElement
  enlargeOnHover?: boolean
  shadowOnHover?: boolean
}

export const Card: React.FC<CardProps> = ({
  header,
  contentTop,
  footer,
  enlargeOnHover = false,
  shadowOnHover = false,
}) => {
  const baseStyle = cx(
    'm-2',
    'p-2',
    'rounded-md',
    'shadow-md',
    'text-gray-600',
    'bg-gray-100',
    'flex',
    'flex-col',
    'flex-auto',
    'justify-between',
    'min-h-[280px]',
  )
  const enlargeOnHoverStyle = cx('hover:scale-105', 'transition-transform')
  const shadowOnHoverStyle = cx('hover:shadow-lg', 'transition-shadow')

  const style = cx(
    baseStyle,
    enlargeOnHover && enlargeOnHoverStyle,
    shadowOnHover && shadowOnHoverStyle,
  )

  return (
    <div className={style}>
      <div className="min-h-[70%] flex flex-col justify-start">
        {header && <div className="m-1 p-1 border-gray-300 border-b-2 font-bold">{header}</div>}
        <div className="m-1 p-1">{contentTop}</div>
      </div>
      {footer && <div className="m-1 p-1 rounded-md text-gray-600">{footer}</div>}
    </div>
  )
}

export default Card
