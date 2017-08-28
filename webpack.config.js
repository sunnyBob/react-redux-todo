const path = require('path');
module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /.js?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      use: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: "./",
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 7001
  },

  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
};