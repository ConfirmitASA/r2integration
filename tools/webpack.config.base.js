var packageJSON = require('../package.json');
var name = packageJSON["name"];

module.exports = {
  entry: {
    js:"./src/main.js",
  },
  output: {
    path: "./dist",
    filename: name+".bundle.js",
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules)/,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
