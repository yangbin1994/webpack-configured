var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var configs = require('./configs');
var devRootPath = configs.dev.rootPath();

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    'app': [
      'webpack-dev-server/client?' + devRootPath,
      'webpack/hot/dev-server',
      './src/main.jsx'
    ]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: devRootPath,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new OpenBrowserPlugin({
      url: devRootPath
    })
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    // quiet: true,
    // noInfo: true,
    // lazy: false,
    stats: {
      colors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '**': configs.server.rootPath()
    }
  }
});