import { classnames } from 'tailwindcss-classnames'

export const buttonBase = classnames(
  'px-4',
  'py-1',
  'm-2',
  'inline-block',
  'text-lg',
  'font-semibold',
  'rounded-lg',
  'border-2',
)

export const buttonPrimary = classnames(
  'text-gray-800',
  'border-gray-200',
  'hover:text-gray-200',
  'hover:bg-gray-800',
  'hover:border-gray-800',
)

export const buttonPrimaryActive = classnames('text-gray-200', 'bg-gray-800', 'border-gray-800')

export const buttonDanger = classnames(
  'text-white',
  'border-red-400',
  'bg-red-600',
  'hover:text-blue-200',
  'hover:border-red-600',
)
