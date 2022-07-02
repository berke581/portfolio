import React, { ComponentPropsWithoutRef } from 'react'
import {
  classnames,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  outlineColor,
  textColor,
  width,
} from 'tailwindcss-classnames'

type InputTextProps = ComponentPropsWithoutRef<'input'> & {
  // children?: React.ReactNode
  isError?: boolean
  errorText?: string
  label?: string
}

const inputTextBase = classnames(
  borderWidth('border-2'),
  borderRadius('rounded-md'),
  backgroundColor('bg-gray-100'),
  outlineColor('outline-violet-600'),
)
const inputTextNormal = classnames(borderColor('border-gray-300'))
const inputTextError = classnames(borderColor('border-red-600'))

const inputContainerStyle = classnames(display('flex'), flexDirection('flex-col'), width('w-auto'))

export const InputText: React.FC<InputTextProps> = ({ id, isError, errorText, label }) => {
  const inputTextStyle = classnames(inputTextBase, isError ? inputTextError : inputTextNormal)
  const inputTextLabelStyle = classnames(textColor(isError ? 'text-red-600' : 'text-gray-600'))

  return (
    <div className={inputContainerStyle}>
      {label && (
        <label className={inputTextLabelStyle} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={inputTextStyle} type="text" id={id} name={id} />
      {errorText && <span></span>}
    </div>
  )
}

export default InputText
