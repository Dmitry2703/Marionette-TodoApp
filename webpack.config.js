'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: ['./app/index.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jst$/,
        loader: 'underscore-template-loader'
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/dist'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  resolve: {
    root: path.join(__dirname, './app')
  },
  resolveLoader: {
    root: path.join(__dirname, './node_modules')
  }
};
