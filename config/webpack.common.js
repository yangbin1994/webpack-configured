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
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      include: helpers.root('src'),
      loaders: ["babel"]
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: helpers.root('src'),
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less'),
      exclude: /node_modules/,
      include: helpers.root('src')
    }]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};