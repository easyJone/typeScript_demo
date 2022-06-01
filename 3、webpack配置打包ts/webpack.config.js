const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 环境
              presets: [
                [
                  // 环境插件
                  '@babel/preset-env',
                  //配置信息
                  {
                    // 兼容的目标浏览器
                    targets: {
                      "chrome": '58',
                      "ie": '11'
                    },
                    // corejs版本
                    "corejs": '3',
                    "useBuiltIns": 'usage'
                  }
                ]
              ]
            }

          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: '自定义title'
      template: './src/index.html'
    })
  ],
  // 设置引用的模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}