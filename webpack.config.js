const path = require('path');
const Dotenv = require('dotenv-webpack');

var CSSLoader = [
  'css-loader?sourceMap&-minimize',
  'modules',
  'importLoaders=1',
  'localIdentName=[name]__[local]__[hash:base64:5]'
].join('&');

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
        use: ['babel-loader'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', CSSLoader, 'sass-loader' ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader'
        }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: [{ loader: 'url-loader?limit=10000&minetype=application/font-woff' }]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: [{ loader: 'file-loader' }]
      }
    ]
  }
};
