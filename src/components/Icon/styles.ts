import {
  classnames,
  alignItems,
  display,
  gap,
  justifyContent,
  textDecoration,
} from 'tailwindcss-classnames'

export const iconContainer = classnames(
  display('flex'),
  gap('gap-1'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  // TODO: improve below
  textDecoration('hover:underline'),
)
