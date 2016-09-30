var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');


module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    'app': [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server',
      './src/main.jsx'
    ]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080/'
    })
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080,
    stats: {
      colors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    quiet: true,
    noInfo: true,
    lazy: false
  }
});