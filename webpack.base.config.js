const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          }
        },
      },
  ]},
  plugins: [
    // Define global constants which can be configured at compile time
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      title: 'React Homework Application',
      template: './src/index.html',
      hash: true,
    }),
    new ProgressBarWebpackPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false,
    }),
  ],
};
