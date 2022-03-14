import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, PageProps } from 'gatsby'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'components'
import { Layout } from 'containers'

export type ApiResponseType = {
  id: string
  joke: string
  status: number
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Berke YONCACI</title>
      </Helmet>
      <Layout>
        <div className="m-2 p-2 font-medium border-2 border-gray-200 text-gray-800">
          <div className="flex flex-col">
            <div className="m-2 text-4xl">
              Hi, I&apos;m <span className="text-purple-600">Berke</span>.
            </div>
            <div className="m-2 text-2xl">
              I am a am a self-motivated programmer and a{' '}
              <span className="text-gray-600">Computer Engineering</span> student at{' '}
              <span className="text-gray-600">Ankara University</span>.
            </div>
            <div className="m-2 text-2xl">
              I am currently working as a Web Developer, mainly on the Frontend side using ReactJS.
              And improving my Backend development skills too.
            </div>
            <div className="m-2 text-2xl">
              Also, being a Computer Graphics enthusiast, I have been working on projects using
              Graphics APIs such as OpenGL.
            </div>
            <div className="m-2 text-2xl">
              More on my projects can be found on Projects page and my GitHub profile.
            </div>
          </div>

          {/* TODO: add hyperlinks here(to props) etc. */}
          <div className="flex flex-row-reverse mt-5">
            <Button icon={{ name: faLinkedin }} href="https://www.linkedin.com/in/berkeyoncaci">
              LinkedIn
            </Button>
            <Button icon={{ name: faGithub }} href="https://github.com/berke581">
              Github
            </Button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
