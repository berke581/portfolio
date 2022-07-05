import React from 'react'
import { Helmet } from 'react-helmet'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button, Card } from 'components'
import { Layout } from 'containers'

type ProjectCardProps = {
  title: string
  content: string
  link: string
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, content, link }) => (
  <Card
    header={title}
    contentTop={content}
    footer={
      <Button icon={{ name: faGithub }} href={link}>
        Project Details
      </Button>
    }
    shadowOnHover
  />
)

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Berke YONCACI</title>
      </Helmet>
      <Layout>
        <div className="grid grid-cols-1 tablet:grid-cols-2">
          <ProjectCard
            title="Contact Form API"
            content="Contact Form API written in Go, and deployed to Heroku. I used this service for the Contact Page in my Portfolio. It sends me an e-mail when somebody uses the contact page."
            link="https://github.com/berke581/go-contact-form"
          />
          <ProjectCard
            title="Portfolio"
            content="My portfolio website. Created using Gatsby and Tailwind  CSS."
            link="https://github.com/berke581/portfolio"
          />
          <ProjectCard
            title="Registration/Login Backend"
            content="User registration API created using Spring Boot and Spring Security. PostgreSQL is used as the database."
            link="https://github.com/berke581/registration-backend"
          />
          <ProjectCard
            title="ModelViewer [WIP]"
            content="I've been working on this project to get better at OpenGL and Graphics Programming in general. The purpose of this project is to create a basic rendering engine that will render 3D models. It is currently work in progress."
            link="https://github.com/berke581/ModelViewer"
          />
          <ProjectCard
            title="Minesweeper"
            content="Minesweeper game created using Vanilla Javascript."
            link="https://github.com/berke581/Minesweeper"
          />
        </div>
      </Layout>
    </>
  )
}

export default ProjectsPage
