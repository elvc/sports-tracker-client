const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devServer: { host: '0.0.0.0' },
  devtool: 'eval',
  entry: path.resolve(__dirname, 'app/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  }

};
