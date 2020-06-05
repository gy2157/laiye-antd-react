const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/client/index'),
  },
  output: {
    path: path.join(__dirname, 'dist/client'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', 'json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [path.resolve(__dirname, './node_modules')],
        include: [path.resolve(__dirname, 'src')],
        loaders: [
          {
            loader: 'ts-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: true
            }
          },
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: path.resolve(__dirname, './tsconfig.json') },
          },
        ]
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(less)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [require('postcss-preset-env')]
                },
              },
            },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf|eot|otf|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },      
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
      new HardSourceWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/client/index.html'), //取DLL打包之后的文件作为模板
      }),
   ],
  }