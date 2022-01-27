import { classnames } from 'tailwindcss-classnames'

export const colors = {
  gitHub: '#333333',
  linkedIn: '#2867b2',
  medium: '#000000',
  mapMarker: '#e5e7eb',
}

// Layout
export const outerWrapper = classnames('min-h-full', 'relative')

export const contentArea = classnames('mx-60', 'py-20', 'px-8')

// Header
export const headerFlex = classnames(
  'flex',
  'justify-between',
  'h-8',
  'items-end',
  'border-b-2',
  'border-gray-400',
  'mb-4',
)

export const headerInnerFlex = classnames(
  'flex',
  'items-center',
  'h-full',
  'text-lg',
  'font-semibold',
  'm-2',
  'text-gray-800',
)

export const iconFlex = classnames('flex', 'gap-1')

// Footer
export const link = classnames('text-pink-500', 'hover:underline')

export const footerFlex = classnames(
  'flex',
  'justify-between',
  'items-center',
  'text-blue-200',
  'font-bold',
  'bg-gray-600',
  'py-2',
  'px-4',
  'items-center',
  'absolute',
  'bottom-0',
  'left-0',
  'right-0',
  'h-12',
)

export const footerInnerFlex = classnames('flex', 'items-center', 'h-full')

export const mapMarker = classnames('mx-1')
