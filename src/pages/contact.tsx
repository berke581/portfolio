import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { Button, Card, InputText, TextArea } from 'components'
import { Layout } from 'containers'

type FormInputs = {
  name?: string
  email: string
  title: string
  body: string
}

const schema = yup
  .object({
    name: yup.string(),
    email: yup
      .string()
      .email('Please enter a valid e-mail address.')
      .required('Please enter an e-mail address.'),
    title: yup.string().required('Please provide a title for your message.'),
    body: yup.string().required('Please enter your message.'),
  })
  .required()

export const Contact: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: yupResolver(schema) })

  // TODO: integrate to API
  // when the service is ready
  const onSubmit = (data: FormInputs) => {
    console.log(data)
    toast('testing toast package', { type: 'success' })
    toast('testing toast package', { type: 'error' })
    toast('testing toast package', { type: 'warning' })
    toast('testing toast package', { type: 'default' })
    toast('testing toast package', { type: 'info' })

    setIsButtonDisabled(true)
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Berke YONCACI</title>
      </Helmet>
      <Layout>
        <Card
          contentTop={
            <div>
              <form className="flex flex-col px-8 items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full">
                  <InputText
                    placeholder="Enter your name"
                    label="Full Name"
                    id="fname"
                    isError={!!errors['name']}
                    {...register('name')}
                  />
                  <InputText
                    placeholder="Enter your e-mail"
                    label="E-mail"
                    id="email"
                    isError={!!errors['email']}
                    isRequired
                    {...register('email')}
                  />
                  <InputText
                    placeholder="Enter a title"
                    label="Title"
                    id="title"
                    isError={!!errors['title']}
                    isRequired
                    {...register('title')}
                  />
                  <TextArea
                    placeholder="Enter your message"
                    label="Message"
                    id="message"
                    isError={!!errors['body']}
                    isRequired
                    {...register('body')}
                  />
                </div>
                <Button disabled={isButtonDisabled} isLoading={isButtonDisabled}>
                  Submit
                </Button>
              </form>
            </div>
          }
        />
      </Layout>
    </>
  )
}

export default Contact
