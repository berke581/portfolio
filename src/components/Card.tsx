import React, { ComponentPropsWithoutRef } from 'react'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="m-2 p-2 rounded-md shadow-md text-gray-600 bg-gray-200 flex-auto">
      {children}
    </div>
  )
}

export default Card
