import cx from 'classnames'

export const buttonBase = cx(
  'px-4',
  'py-1',
  'm-2',
  'inline-block',
  'text-lg',
  'font-semibold',
  'rounded-lg',
  'border-2',
)

export const buttonPrimary = cx(
  'text-gray-800',
  'hover:text-gray-200',
  'disabled:text-gray-800',
  'border-gray-200',
  'hover:border-gray-800',
  'disabled:border-gray-300',
  'hover:bg-gray-800',
  'disabled:bg-gray-200',
)

export const buttonPrimaryActive = cx('text-gray-200', 'bg-gray-800', 'border-gray-800')

export const buttonDanger = cx(
  'text-white',
  'hover:text-blue-200',
  'border-red-400',
  'hover:border-red-600',
  'bg-red-600',
)

export const buttonInnerBase = cx('flex', 'justify-center', 'items-center', 'gap-2')
