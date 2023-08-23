const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const htmlPlugin = new HtmlWebPackPlugin({
//     // template: "./src/index.html",
//     filename: "./index.html"
// });

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader", 'sass-loader']
    },
    {
      test: /\.png/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name:'[name].[ext]',
            outputPath: 'images',
          }
        }
      ]
    }]
  },
  // plugins: [htmlPlugin],
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],

  devServer: {
    static : {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    proxy: {
      '/api': 'http://localhost:3000',
      '/leaf': 'http://localhost:3000'
    }
  }
};
