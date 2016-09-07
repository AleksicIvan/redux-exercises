var webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: { path: './src/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          "plugins": [
            "syntax-class-properties",
            "syntax-decorators",
            "syntax-object-rest-spread",
          ]
        }
      }
    ]
  },
};
