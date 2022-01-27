import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Button } from 'components'

// https://www.cosmiccode.blog/blog/gatsby-typings-from-gql/
// https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/
// maybe: https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/
const ProjectsPage: React.FC<PageProps | any> = ({ data }) => {
  console.log(data)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Berke YONCACI</title>
      </Helmet>
      <div>This is projects page.</div>
      <Button to="/">Go to Home Page</Button>
    </>
  )
}

export default ProjectsPage

export const query = graphql`
  query ReposInfo {
    github {
      user(login: "berke581") {
        repositories(first: 10, privacy: PUBLIC, orderBy: { field: NAME, direction: DESC }) {
          totalCount
          nodes {
            description
            name
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`
