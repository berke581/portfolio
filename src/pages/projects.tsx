import React from 'react'
import { Helmet } from 'react-helmet'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button, Card } from 'components'
import { Layout } from 'containers'

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Berke YONCACI</title>
      </Helmet>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Card
            header="Registration/Login Backend"
            contentTop="User registration API created using Spring Boot and Spring Security. PostgreSQL is used as the database."
            footer={
              <Button
                icon={{ name: faGithub }}
                href="https://github.com/berke581/registration-backend"
              >
                Project Details
              </Button>
            }
            enlargeOnHover
          />
          <Card
            header="Portfolio"
            contentTop="My portfolio website. Created using Gatsby and Tailwind  CSS."
            footer={
              <Button icon={{ name: faGithub }} href="https://github.com/berke581/portfolio">
                Project Details
              </Button>
            }
            enlargeOnHover
          />
          <Card
            header="ModelViewer [WIP]"
            contentTop="I've been working on this project to get better at OpenGL and Graphics Programming in general. The purpose of this project is to create a basic rendering engine that will render 3D models. It is currently work in progress."
            footer={
              <Button icon={{ name: faGithub }} href="https://github.com/berke581/ModelViewer">
                Project Details
              </Button>
            }
            enlargeOnHover
          />
          <Card
            header="Minesweeper"
            contentTop="Minesweeper game created using Vanilla Javascript."
            footer={
              <Button icon={{ name: faGithub }} href="https://github.com/berke581/Minesweeper">
                Project Details
              </Button>
            }
            enlargeOnHover
          />
        </div>
      </Layout>
    </>
  )
}

export default ProjectsPage
