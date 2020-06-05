const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const utils = require('./utils')
const config = require('./../config')
const baseConfig = require('../webpack.config')

const devWebpackConfig = merge(baseConfig, {
  output: {
    path: path.join(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: '[name].[hash:8].js',
    publicPath: '/',
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    compress: true,
    host: process.env.HOST || config.dev.host,
    port: process.env.PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {
          warnings: false,
          errors: true,
        }
      : undefined,
    publicPath: config.dev.assetsPublicPath,
    // proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
  ],
})

// to console current proxyTable on terminal
Object.keys(config.dev.proxyTable).forEach(k => {
  // console.log(k,'->',config.dev.proxyTable[k].target);
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${config.dev.host}:${port}`],
          },
          onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined,
        }),
      )
      resolve(devWebpackConfig)
    }
  })
})
