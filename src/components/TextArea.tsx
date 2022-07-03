/* eslint-disable react/display-name */
// TODO: fix disabling eslint here
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
  width,
  padding,
  minHeight,
  resize,
} from 'tailwindcss-classnames'

type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
  label?: string
  isRequired?: boolean
  isError?: boolean
  errorText?: string
}

// TODO: maybe combine input related
// common styles into one style file
const textAreaContainerStyle = classnames(display('flex'), flexDirection('flex-col'))

const textAreaBase = classnames(
  width('w-full'),
  minHeight('min-h-[300px]' as any),
  borderWidth('border-2'),
  borderRadius('rounded-md'),
  backgroundColor('bg-white'),
  padding('p-1'),
  resize('resize-none'),
)
const textAreaNormal = classnames(borderColor('border-gray-300'))
const textAreaError = classnames(borderColor('border-red-600'))

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, placeholder, isRequired, isError, errorText, id, ...rest }, ref) => {
    const textAreaStyle = classnames(textAreaBase, isError ? textAreaError : textAreaNormal)
    const textAreaLabelStyle = classnames(textColor(isError ? 'text-red-600' : 'text-gray-600'))

    return (
      <div className={textAreaContainerStyle}>
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
        <textarea
          className={textAreaStyle}
          placeholder={placeholder}
          id={id}
          name={id}
          ref={ref}
          {...rest}
        />
        {errorText && <span className={textAreaLabelStyle}>{errorText}</span>}
      </div>
    )
  },
)

export default TextArea
