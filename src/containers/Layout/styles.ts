import {
  classnames,
  alignItems,
  backgroundColor,
  borderColor,
  borderWidth,
  display,
  flexDirection,
  fontSize,
  fontWeight,
  gap,
  height,
  inset,
  justifyContent,
  margin,
  minHeight,
  padding,
  position,
  textColor,
  textDecoration,
} from 'tailwindcss-classnames'

export const colors = {
  gitHub: '#333333',
  linkedIn: '#2867b2',
  medium: '#000000',
  mapMarker: '#e5e7eb',
}

// Layout
export const outerWrapper = classnames(minHeight('min-h-full'), position('relative'))

export const contentArea = classnames(
  margin('mx-2', 'tablet:mx-4' as any, 'laptop:mx-24' as any, 'desktop:mx-60' as any),
  padding('py-20', 'px-2', 'px-4', 'tablet:px-8' as any),
)

// Header
export const headerFlex = classnames(
  display('flex'),
  justifyContent('justify-between'),
  height('h-8'),
  alignItems('items-end'),
  borderWidth('border-b-2'),
  borderColor('border-gray-400'),
  margin('mb-4'),
)

export const headerInnerFlex = classnames(
  display('flex'),
  flexDirection('flex-col', 'laptop:flex-row' as any),
  alignItems('laptop:items-center' as any),
  height('laptop:h-full' as any),
  fontSize('text-lg'),
  fontWeight('font-semibold'),
  margin('m-2'),
  textColor('text-gray-800'),
)

export const iconFlex = classnames(display('flex'), gap('gap-1'))

// Footer
export const link = classnames(textColor('text-pink-500'), textDecoration('hover:underline'))

export const footerFlex = classnames(
  display('flex'),
  justifyContent('justify-end', 'tablet:justify-between' as any),
  gap('gap-8'),
  alignItems('items-center'),
  textColor('text-violet-400'),
  fontWeight('font-bold'),
  backgroundColor('bg-gray-600'),
  padding('py-2', 'px-4'),
  position('absolute'),
  inset('bottom-0', 'left-0', 'right-0'),
  height('h-14'),
)

export const footerInnerFlex = classnames(
  display('flex'),
  alignItems('items-center'),
  height('h-full'),
)

export const footerLocationFlex = classnames(
  display('flex'),
  alignItems('items-center'),
  gap('gap-1'),
)

export const mapMarker = classnames(margin('mx-1'))
