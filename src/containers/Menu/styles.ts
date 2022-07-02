import {
  classnames,
  backgroundColor,
  borderRadius,
  padding,
  textColor,
} from 'tailwindcss-classnames'

export const menuItemBase = classnames(
  textColor('text-gray-200'),
  borderRadius('rounded-sm'),
  backgroundColor('bg-gray-600', 'hover:bg-gray-700'),
  padding('p-2'),
)

export const menuItemActive = classnames(backgroundColor('bg-gray-700'))
