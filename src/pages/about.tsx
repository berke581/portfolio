// what about just import React from 'react' ??
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Button } from 'components'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Berke YONCACI</title>
      </Helmet>
      <div>This is about page.</div>
      <Button to="/">Go to Home Page</Button>
      <Button variant="danger" to="/">
        Go to Home Page
      </Button>
    </>
  )
}

export default AboutPage
