const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const analyzerMode = process.env.INTERACTIVE_ANALYZE ? 'server' : 'json'

  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode,
        }),
      ],
    })
  }
}

// const path = require('path')

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//     },
//   })
// }
