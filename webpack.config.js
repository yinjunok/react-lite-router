const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"]
  },

  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback:{
      index: '/'
    },
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
  })]
}