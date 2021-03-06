const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const findParentDir = require('find-parent-dir');

const pkg = require('./package.json');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: __dirname + '/dist/assets/bundles',
    publicPath: '/',
    filename: pkg.name + 'life-form-bundle.js'
  },
  devServer: {
    contentBase: './dist/assets/bundles',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.(scss|sass|css)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './generated-html-templates/dev-index.html',
      title: pkg.name,
      injectedId: pkg.name,
      showErrors: true
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
