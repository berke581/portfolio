import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Layout } from 'containers'
import './src/styles/global.css'

// const routesWithoutLayout = ['NotFoundPage', 'Dev404Page']
// const shouldLayoutRender = (componentName) =>
//   routesWithoutLayout.some((el) => el === componentName) ? false : true

// TODO: try to move layout here
export const wrapPageElement = ({ element, props }) => {
  return (
    <Scrollbars universal>
      {element}
      <ToastContainer newestOnTop />
    </Scrollbars>
  )
}
