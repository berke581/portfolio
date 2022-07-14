import React, { ComponentPropsWithoutRef } from 'react'
import cx from 'classnames'

type InputTextProps = ComponentPropsWithoutRef<'input'> & {
  label?: string
  isRequired?: boolean
  isError?: boolean
  errorText?: string
}

const inputContainerStyle = cx('flex', 'flex-col')

const inputTextBase = cx('border-2', 'rounded-md', 'bg-white', 'p-1')
const inputTextNormal = cx('border-gray-300')
const inputTextError = cx('border-red-600')

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, placeholder, isRequired, isError, errorText, id, ...rest }, ref) => {
    const inputTextStyle = cx(inputTextBase, isError ? inputTextError : inputTextNormal)
    const inputTextLabelStyle = cx(isError ? 'text-red-600' : 'text-gray-600')

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
