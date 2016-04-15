const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, 'frontend');
const PORT = 8090;

module.exports = [{  
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
    './frontend/src/js/index.js',
    './frontend/src/scss/main.scss'
  ],
  output: {
  	path: path.resolve(ROOT_PATH, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: ['react-hot','babel']
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx','.css','.scss']
  },
  devServer: {
    contentBase: ROOT_PATH,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: PORT
  }
}];
