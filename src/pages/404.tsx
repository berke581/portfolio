import React from 'react'
import { PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  classnames,
  alignItems,
  display,
  flexDirection,
  height,
  justifyContent,
} from 'tailwindcss-classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
        <FontAwesomeIcon icon={faTimes} size={'9x'} color="#333" />
        Page Not found!
        <Button to="/">Go to Homepage</Button>
      </div>
    </>
  )
}

export default NotFoundPage
