import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Layout } from 'containers'
import './src/styles/global.css'

// const routesWithoutLayout = ['NotFoundPage', 'Dev404Page']
// const shouldLayoutRender = (componentName) =>
//   routesWithoutLayout.some((el) => el === componentName) ? false : true

export const wrapPageElement = ({ element, props }) => {
  return (
    <Scrollbars universal>
      <Layout {...props}>{element}</Layout>
    </Scrollbars>
  )
}
