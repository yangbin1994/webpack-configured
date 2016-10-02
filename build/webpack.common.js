var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var configs = require('./configs');

module.exports = {
  entry: {
    'vendor': configs.vendors,
    'app': './src/main.jsx'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: configs.alias
  },

  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ["babel"]
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less'),
    }]
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery",
    // }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};