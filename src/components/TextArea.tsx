import React, { ComponentPropsWithoutRef } from 'react'
import cx from 'classnames'

type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
  label?: string
  isRequired?: boolean
  isError?: boolean
  errorText?: string
}

const textAreaContainerStyle = cx('flex', 'flex-col')

const textAreaBase = cx(
  'w-full',
  'min-h-[300px]',
  'border-2',
  'rounded-md',
  'bg-white',
  'p-1',
  'resize-none',
)
const textAreaNormal = cx('border-gray-300')
const textAreaError = cx('border-red-600')

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, placeholder, isRequired, isError, errorText, id, ...rest }, ref) => {
    const textAreaStyle = cx(textAreaBase, isError ? textAreaError : textAreaNormal)
    const textAreaLabelStyle = cx(isError ? 'text-red-600' : 'text-gray-600')

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

TextArea.displayName = 'TextArea'

export default TextArea
