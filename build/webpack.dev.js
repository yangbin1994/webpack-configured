var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var configs = require('./configs');
var devRootPath = configs.server.rootPath();

module.exports = webpackMerge(commonConfig, {
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval',
  entry: {
    'app': [
      'react-hot-loader/patch',
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
    quiet: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '**': configs.apiServer.rootPath()
    }
  }
});