const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
   devtool: '#eval-source-map',
   devServer: {
    compress: true,
    port: 9000,
    proxy: {
      '/_geoip': {
        target: 'http://localhost:4000',
        pathRewrite: {'^/_geoip' : ''}
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'OSM Browser',
      template: 'src/index.ejs'
    })
  ]
})
