import React, { ComponentPropsWithoutRef } from 'react'
import {
  classnames,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  textColor,
  padding,
} from 'tailwindcss-classnames'

type InputTextProps = ComponentPropsWithoutRef<'input'> & {
  label?: string
  isRequired?: boolean
  isError?: boolean
  errorText?: string
}

const inputContainerStyle = classnames(display('flex'), flexDirection('flex-col'))

const inputTextBase = classnames(
  borderWidth('border-2'),
  borderRadius('rounded-md'),
  backgroundColor('bg-white'),
  padding('p-1'),
)
const inputTextNormal = classnames(borderColor('border-gray-300'))
const inputTextError = classnames(borderColor('border-red-600'))

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, placeholder, isRequired, isError, errorText, id, ...rest }, ref) => {
    const inputTextStyle = classnames(inputTextBase, isError ? inputTextError : inputTextNormal)
    const inputTextLabelStyle = classnames(textColor(isError ? 'text-red-600' : 'text-gray-600'))

    return (
      <div className={inputContainerStyle}>
        {label && (
          <span>
            <label className="text-gray-600" htmlFor={id}>
              {label}
            </label>
            {isRequired && (
              <>
                &nbsp;<span className="text-red-600">*</span>
              </>
            )}
          </span>
        )}
        <input
          className={inputTextStyle}
          placeholder={placeholder}
          type="text"
          id={id}
          name={id}
          ref={ref}
          {...rest}
        />
        {errorText && <span className={inputTextLabelStyle}>{errorText}</span>}
      </div>
    )
  },
)

InputText.displayName = 'InputText'

export default InputText
