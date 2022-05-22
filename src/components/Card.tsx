import React, { ComponentPropsWithoutRef } from 'react'

export type CardProps = ComponentPropsWithoutRef<'div'> & {
  header?: string | React.ReactElement
  contentTop: string | React.ReactElement
  // contentBottom?: string | React.ReactElement
  footer?: string | React.ReactElement
  enlargeOnHover?: boolean
}

export const Card: React.FC<CardProps> = ({
  header,
  contentTop,
  footer,
  enlargeOnHover = false,
}) => {
  const enlargeOnHoverStyle = enlargeOnHover ? ' hover:scale-105 transition-transform' : ''

  return (
    <div
      className={`m-2 p-2 rounded-md shadow-md text-gray-600 bg-gray-100 flex-auto min-h-[280px]${enlargeOnHoverStyle}`}
    >
      <div className="min-h-[70%] flex flex-col justify-start">
        {header && <div className="m-1 p-1 border-gray-300 border-b-2 font-bold">{header}</div>}
        <div className="m-1 p-1">{contentTop}</div>
      </div>
      {footer && <div className="m-1 p-1 rounded-md text-gray-600">{footer}</div>}
    </div>
  )
}

export default Card
