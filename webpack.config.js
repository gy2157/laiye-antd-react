var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry:'./src/index.ts', //入口文件路径
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'laiye-antd-react', 
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js[x]?$/,  // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader' // 加载模块 "babel-loader" 
      },
      {
         test: /\.less$/,
         use: [
           'style-loader',
           { loader: 'css-loader', options: { importLoaders: 1 } },
           'less-loader',
           { loader: 'less-loader', options: { javascriptEnabled: true } }
         ]
       },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, 
        {
          loader: 'css-loader',
          options:{ 
            modules: {
              mode: 'local',
              localIdentName: '[name]-[local]',
            },
          }
        }
        ]
      },
      
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
     ],
  }