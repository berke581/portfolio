import React, { ComponentPropsWithoutRef } from 'react'
import {
  classnames,
  backgroundColor,
  borderRadius,
  boxShadow,
  flex,
  height,
  margin,
  padding,
  scale,
  textColor,
  transitionProperty,
  display,
  flexDirection,
  justifyContent,
} from 'tailwindcss-classnames'

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
  const baseStyle = classnames(
    margin('m-2'),
    padding('p-2'),
    borderRadius('rounded-md'),
    boxShadow('shadow-md'),
    textColor('text-gray-600'),
    backgroundColor('bg-gray-100'),
    display('flex'),
    flexDirection('flex-col'),
    flex('flex-auto'),
    justifyContent('justify-between'),
    height('min-h-[280px]' as any),
  )
  const enlargeOnHoverStyle = classnames(
    scale('hover:scale-105'),
    transitionProperty('transition-transform'),
  )
  const shadowOnHoverStyle = classnames(
    boxShadow('hover:shadow-lg'),
    transitionProperty('transition-shadow'),
  )

  const style = classnames(
    baseStyle,
    enlargeOnHover ? enlargeOnHoverStyle : undefined,
    shadowOnHover ? shadowOnHoverStyle : undefined,
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
