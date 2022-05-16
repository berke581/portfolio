import { classnames } from 'tailwindcss-classnames'

export const menuItemBase = classnames(
  'text-gray-200',
  'rounded-sm',
  'bg-gray-600',
  'p-2',
  'hover:bg-gray-700',
)

export const menuItemActive = classnames('bg-gray-700')
