const path = require('path');
const root = path.join(__dirname, '../');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: './demo/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(root, 'static'),
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash:8].[name].[ext]',
              outputPath: 'images/',
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[^('|")]*)?$/,
        loader: "file-loader?name=fonts/[hash:8].[name].[ext]"
      }
    ]
  },
  devServer: {
    contentBase: './static/', //对外提供的访问内容的路径
    filename: 'main.bundle.js',
    host: '0.0.0.0',
    port: 8080,
    hot: true // 启用webpack的HMR特性。
  },
  resolve: {
    modules: [ // 告诉webpack解析模块时应该搜索的目录
      'src',
      'node_modules'
    ],
    extensions: ['*', '.json', '.js', '.jsx'] // 可以省略的后缀
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
