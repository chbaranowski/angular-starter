var path = require('path');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StyleLintPlugin = require('stylelint-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var webpack = require("webpack");

/**
 * Debug or Production
 * Get npm lifecycle event to identify the build typ. 
 * For lifecycle event which start with build no debug information is included.
 */
var NPM_LIFECYCLE = process.env.npm_lifecycle_event;
var debug = !NPM_LIFECYCLE.startsWith('build');

module.exports = function () {

  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  config.entry = {
    app: [
      'core-js',
      'zone.js',
      'reflect-metadata',
      './src/app/main.ts',
      './src/styles/app.scss',
    ]
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   */
  config.output = {
    path: __dirname + '/dist',
    filename: '[name].[hash].js',
  };

  config.resolve = {
    extensions: ['.ts', '.js', '.css', '.scss', '.html', 'json'],
    modules: [
      path.join(__dirname, "src/app"),
      "node_modules"
    ],
  }

  config.module = {

    rules: [

      // type script loader configuration
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          },
          {
            loader: 'angular2-template-loader'
          }
        ]
      },

      // html loader setup
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          },
        ]
      },

      // loader config for global css files
      {
        test: /\.scss$/,
        exclude: [path.resolve('node_modules'), path.resolve('src', 'app')],
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [
          {
            loader: 'css-loader' 
          },
          {
            loader: 'sass-loader'
          }
        ]})
      },

      // loader config for angular component styles 
      {
        test: /\.scss$/,
        exclude: [path.resolve('node_modules'), path.resolve('src', 'styles')],
        use: [
          {
            loader: 'exports-loader?module.exports.toString()'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },

      // copy those assets to output
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]?'
      },

      // i18n messages Loader
      {
        test: /\.xlf$/,
        use: [
          {
            loader: 'file-loader'
          },
        ]
      },

    ]
  };

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [

    new HtmlWebpackPlugin({
      template: 'src/app/index.html',
      hash: true,
    }),

    new ExtractTextPlugin('[name].[hash].css'),

    new webpack.EnvironmentPlugin([
      'CONFIG_PROFILE',
      'BUILD_MODE'
    ]),

    new StyleLintPlugin({}),
  ];

  /**
   * Add build specific plugins.
   */
  if (!debug) {

    /**
     * Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
     * Only emit files when there are no errors
     */
    config.plugins.push(new webpack.NoErrorsPlugin());
  }

  /** 
   * DevServer
   * http://webpack.github.io/docs/configuration.html#devserver
   */
  config.devServer = {
    contentBase: './dist',
    historyApiFallback: true,
    quiet: true,
    stats: 'verbose'
  };

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (debug) {
    config.devtool = 'inline-source-map';
  } else {
    config.devtool = 'source-map';
  }

  return config;
}();