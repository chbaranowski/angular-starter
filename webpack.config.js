var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require("webpack");

let extractCSS = new ExtractTextPlugin('app.css');

module.exports = {  

  entry: {
    vendor: [
      'core-js',
      'zone.js',
      'reflect-metadata',
    ],
    app: './src/app/main.ts'
  },

  output: {
    path: 'dist',
    filename: '[name].js',
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  module: {
    loaders: [
      { 
          test: /\.ts$/, 
          loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'] 
      },
      {   
          test: /\.(html|css)$/, 
          loader: 'raw',  
      },
      // loader config for global css files
      {
          test: /\.scss$/,
          exclude: [path.resolve('node_modules'), path.resolve('src', 'app')],
          loader: extractCSS.extract('style-loader', 'raw!postcss!sass'),
      },
      // loader config for angular component styles 
      {   
          test: /\.scss$/, 
          exclude: [path.resolve('node_modules'), path.resolve('src', 'styles')],
          loader: 'raw!postcss!sass'
      },
      {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
          loader: "file"
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/index.html',
      hash: true,
    }),
    extractCSS
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    quiet: true,
    stats: 'verbose'
  },

  postcss: [
  ]

};