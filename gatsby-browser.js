import React from 'react'
import { SWRConfig } from 'swr'
import { Scrollbars } from 'react-custom-scrollbars'
import { Layout } from 'containers'
import './src/styles/global.css'

export const wrapPageElement = ({ element, props }) => {
  return (
    <Scrollbars universal>
      <Layout {...props}>{element}</Layout>
    </Scrollbars>
  )
}

// https://dev.to/crock/gatsby-js-browser-apis-explained-wrappageelement-vs-wraprootelement-n4k
// https://markoskon.com/wrap-root-element-vs-wrap-page-element/
// TODO: look at docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
// export const wrapRootElement = ({ element }) => {
//   return (
//     <SWRConfig
//       value={{
//         onError: (error, key) => {
//           // if (error.status !== 403 && error.status !== 404) {
//           //   // We can send the error to Sentry,
//           //   // or show a notification UI.
//           // }

//           console.log('An error has occured: ', error)
//         },
//       }}
//     >
//       <Scrollbars>
//         <Layout>{element}</Layout>
//       </Scrollbars>
//     </SWRConfig>
//   )
// }
