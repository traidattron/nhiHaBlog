const CracoLessPlugin = require('craco-less')

module.exports = {
  babel: {
    plugins: ['babel-plugin-styled-components', 'emotion']
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#708265',
              '@error-color': '#BF291E',
              '@border-radius-base': '5px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
