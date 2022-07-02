import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, PageProps } from 'gatsby'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button, Card } from 'components'
import { Layout } from 'containers'
import { DeviceType, useDeviceType } from 'utils/useDeviceType'

const IndexPage: React.FC<PageProps> = () => {
  const deviceType = useDeviceType()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Berke YONCACI</title>
      </Helmet>
      <Layout>
        <Card
          contentTop={
            <>
              <div className="flex flex-col">
                <div className="m-2 text-4xl">
                  Hi, I&apos;m <span className="text-violet-600">Berke</span>.
                </div>
                <div className="m-2 text-2xl">
                  I am a self-motivated programmer and a{' '}
                  <span className="text-gray-600">computer engineering</span> student at{' '}
                  <span className="text-gray-600">Ankara University</span>.
                </div>
                <div className="m-2 text-2xl">
                  I am interested in web development in general, I&apos;ve worked as a part-time web
                  developer, mainly on the frontend side. Currently interested in backend
                  technologies and languages, such as Go and Java Spring. Also, I like to use Go for
                  other projects besides web development, since it&apos;s a performant and scalable
                  language.
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
              {deviceType !== DeviceType.MOBILE && (
                <div className="flex flex-row-reverse mt-5">
                  <Button
                    icon={{ name: faLinkedin }}
                    href="https://www.linkedin.com/in/berkeyoncaci"
                  >
                    LinkedIn
                  </Button>
                  <Button icon={{ name: faGithub }} href="https://github.com/berke581">
                    Github
                  </Button>
                </div>
              )}
            </>
          }
        />
      </Layout>
    </>
  )
}

export default IndexPage
