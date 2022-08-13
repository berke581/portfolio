import React from 'react'
import { Helmet } from 'react-helmet'
import { SiGithub } from 'react-icons/si'
import { Card, Divider, Icon, TechnologyIcon } from 'components'
import { TechnologiesType } from 'components/TechnologyIcon/icons'
import { Layout } from 'containers'
import { colors } from 'containers/Layout/styles'

type ProjectCardProps = {
  title: string
  content: string
  link: string
  technologies?: Array<TechnologiesType>
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, content, link, technologies }) => (
  <Card
    header={title}
    contentTop={content}
    footer={
      <>
        <Divider direction="horizontal" borderColorClassName="border-gray-300" />
        <div className="flex justify-between items-end mx-1">
          <Icon
            iconComponent={SiGithub}
            color={colors.gitHub}
            label={{
              text: 'Repository',
              placement: 'right',
            }}
            href={link}
            size={23}
          />
          {technologies && (
            <div className="flex gap-1">
              {technologies.map((el, i) => (
                <TechnologyIcon name={el} key={el + i} />
              ))}
            </div>
          )}
        </div>
      </>
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
            content="Contact Form API written in Go, and deployed to Heroku. Also containerized with Docker. I used this service for the Contact Page in my Portfolio. It sends me an e-mail when somebody uses the contact page."
            link="https://github.com/berke581/go-contact-form"
            technologies={['go', 'docker']}
          />
          <ProjectCard
            title="Portfolio"
            content="My portfolio website. Created using Gatsby and Tailwind  CSS."
            link="https://github.com/berke581/portfolio"
            technologies={['typescript', 'react', 'gatsby', 'tailwind']}
          />
          <ProjectCard
            title="Movies API"
            content="Simple RESTful CRUD movies API created using Spring Boot, PostgreSQL, Spring Data JPA, and Hibernate."
            link="https://github.com/berke581/movies-api"
            technologies={['java', 'springboot', 'postgresql']}
          />
          <ProjectCard
            title="ModelViewer [WIP]"
            content="I've been working on this project to get better at OpenGL and Graphics Programming in general. The purpose of this project is to create a basic rendering engine that will render 3D models. It is currently work in progress."
            link="https://github.com/berke581/ModelViewer"
            technologies={['cpp', 'opengl']}
          />
          <ProjectCard
            title="Minesweeper"
            content="Minesweeper game created using Vanilla Javascript."
            link="https://github.com/berke581/Minesweeper"
            technologies={['javascript']}
          />
        </div>
      </Layout>
    </>
  )
}

export default ProjectsPage
