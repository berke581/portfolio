import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { InputText } from 'components'
import { DeviceType, useDeviceType } from 'utils/useDeviceType'

type FormInputs = {
  title: string
  name?: string
  body: string
}

export const Contact: React.FC = () => {
  const deviceType = useDeviceType()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  useForm()

  return (
    <form>
      <InputText placeholder="name" label="xd" isError />
    </form>
  )
}

export default Contact
