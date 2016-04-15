const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname, 'frontend');


module.exports = [{  
  entry: [
    './frontend/src/js/index.js',
    './frontend/src/scss/main.scss'
  ],
  output: {
  	path: path.resolve(ROOT_PATH, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style','css!sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx','.css','.scss'],
    root: [ROOT_PATH]
  }
}];
