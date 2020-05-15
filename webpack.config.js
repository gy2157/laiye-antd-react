const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '../');
const componentDir = 'src/components';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const cModuleMap = cModuleNames.reduce((prev, name) => {
  prev[name] = `./${componentDir}/${name}/index.tsx`;
  return prev;
}, {});
console.log("==============", cModuleMap);

module.exports = {
   // 入口处设置为多入口，即每一个组件都作为一个入口，这样输出的可以是拆分后的组件
   entry: {
    index: './src/index.tsx',
    ...cModuleMap // 组件的名称及位置
  },
  output: {
    path: path.resolve(__dirname, 'es'), // 要输出多文件这里就要配置输出目录而不是当个文件
    filename: '[name]/index.js',
    // output.library 和 output.libraryTarget 一起使用 对外暴露 library 及定义输出组件库格式
    library: ['laiye-antd-react', '[name]'], 
    libraryTarget: 'umd',
    publicPath: '/'
  },
  // devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', 'json', '.ts', '.tsx'],
  },
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
      new UglifyJsPlugin()
     ],
  }