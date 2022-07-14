import cx from 'classnames'

export const colors = {
  gitHub: '#333333',
  linkedIn: '#2867b2',
  medium: '#000000',
}

// Layout
export const outerWrapper = cx('min-h-full', 'relative')

export const contentArea = cx(
  'mx-2',
  'tablet:mx-4',
  'laptop:mx-24',
  'desktop:mx-60',
  'py-20',
  'px-2',
  'tablet:px-8',
)

// Header
export const headerFlex = cx(
  'flex',
  'justify-between',
  'h-8',
  'items-end',
  'border-b-2',
  'border-gray-400',
  'mb-4',
)

export const headerInnerFlex = cx(
  'flex',
  'flex-col',
  'text-lg',
  'font-semibold',
  'm-2',
  'text-gray-800',
)

export const iconFlex = cx('flex', 'gap-0', 'h-6', 'items-center')

// Footer
export const footerFlex = cx(
  'flex',
  'gap-4',
  'justify-between',
  'items-center',
  'text-teal-400',
  'font-bold',
  'bg-gradient-to-tr',
  'from-slate-600',
  'via-slate-500',
  'to-slate-400',
  'py-2',
  'px-4',
  'absolute',
  'bottom-0',
  'left-0',
  'right-0',
  'h-12',
  'shadow-[0_4px_4px_4px_rgba(0,0,0,1)]',
)

export const footerInnerFlex = cx('flex', 'gap-2', 'items-center')
