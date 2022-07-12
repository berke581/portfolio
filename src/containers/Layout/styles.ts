import {
  classnames,
  alignItems,
  // backgroundColor,
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
  gradientColorStops,
  backgroundImage,
  boxShadow,
} from 'tailwindcss-classnames'

export const colors = {
  gitHub: '#333333',
  linkedIn: '#2867b2',
  medium: '#000000',
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
  flexDirection('flex-col'),
  fontSize('text-lg'),
  fontWeight('font-semibold'),
  margin('m-2'),
  textColor('text-gray-800'),
)

export const iconFlex = classnames(
  display('flex'),
  gap('gap-0'),
  height('h-6'),
  alignItems('items-center'),
)

// Footer
export const link = classnames(textColor('text-pink-500'), textDecoration('hover:underline'))

export const footerFlex = classnames(
  display('flex'),
  gap('gap-4'),
  justifyContent('justify-between'),
  alignItems('items-center'),
  textColor('text-teal-400'),
  fontWeight('font-bold'),
  backgroundImage('bg-gradient-to-tr'),
  gradientColorStops('from-slate-600', 'via-slate-500', 'to-slate-400'),
  padding('py-2', 'px-4'),
  position('absolute'),
  inset('bottom-0', 'left-0', 'right-0'),
  height('h-12'),
  boxShadow('shadow-[0_4px_4px_4px_rgba(0,0,0,1)]' as any),
)

export const footerInnerFlex = classnames(display('flex'), gap('gap-2'), alignItems('items-center'))

export const footerContactArea = classnames(textDecoration('hover:underline'))
