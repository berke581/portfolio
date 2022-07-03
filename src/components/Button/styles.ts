import {
  classnames,
  alignItems,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  fontSize,
  fontWeight,
  gap,
  justifyContent,
  margin,
  padding,
  textColor,
} from 'tailwindcss-classnames'

export const buttonBase = classnames(
  padding('px-4', 'py-1'),
  margin('m-2'),
  display('inline-block'),
  fontSize('text-lg'),
  fontWeight('font-semibold'),
  borderRadius('rounded-lg'),
  borderWidth('border-2'),
)

export const buttonPrimary = classnames(
  textColor('text-gray-800', 'hover:text-gray-200', 'disabled:text-gray-800'),
  borderColor('border-gray-200', 'hover:border-gray-800', 'disabled:border-gray-300'),
  backgroundColor('hover:bg-gray-800', 'disabled:bg-gray-200'),
)

export const buttonPrimaryActive = classnames(
  textColor('text-gray-200'),
  backgroundColor('bg-gray-800'),
  borderColor('border-gray-800'),
)

export const buttonDanger = classnames(
  textColor('text-white', 'hover:text-blue-200'),
  borderColor('border-red-400', 'hover:border-red-600'),
  backgroundColor('bg-red-600'),
)

export const buttonInnerBase = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-2'),
)

export const buttonInnerRight = classnames(flexDirection('flex-row-reverse'))
