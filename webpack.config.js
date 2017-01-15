var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require("webpack");

module.exports = {  

  entry: {
    vendor: [
      'core-js',
      'zone.js',
      'reflect-metadata'
    ],
    app: [
      './src/app/main.ts',
      './src/styles/app.scss'
    ]
  },

  output: {
    path: 'dist',
    filename: '[name].js',
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.css', '.scss', '.html', 'json']
  },

  module: {
    loaders: [
      { 
          test: /\.ts$/, 
          loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'] 
      },
      {   
          test: /\.html$/,
          loader: 'html',  
      },

      // JSON Loader
      {   
          test: /\.json$/,
          loader: 'json-loader',  
      },

      // loader config for global css files
      {
          test: /\.scss$/,
          exclude: [path.resolve('node_modules'), path.resolve('src', 'app')],
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass'),
      },

      // loader config for angular component styles 
      {   
          test: /\.scss$/, 
          exclude: [path.resolve('node_modules'), path.resolve('src', 'styles')],
          loaders: ['exports-loader?module.exports.toString()', 'css', 'postcss', 'sass']
      },
      
      // copy those assets to output
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=assets/[name].[hash].[ext]?'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/index.html',
      hash: true,
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.EnvironmentPlugin([
      'CONFIG_PROFILE'
    ])
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