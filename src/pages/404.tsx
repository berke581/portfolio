import React from 'react'
import { PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import { CgClose } from 'react-icons/cg'
import tailwindColors from 'tailwindcss/colors'
import {
  classnames,
  alignItems,
  display,
  flexDirection,
  height,
  justifyContent,
} from 'tailwindcss-classnames'
import { Button } from 'components'

const notFoundFlex = classnames(
  height('h-screen'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
)

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found</title>
      </Helmet>
      <div className={notFoundFlex}>
        <CgClose size={200} color={tailwindColors.gray['800']} />
        Page Not found!
        <Button to="/">Go to Homepage</Button>
      </div>
    </>
  )
}

export default NotFoundPage
