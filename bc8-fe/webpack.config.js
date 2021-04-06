const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
});

module.exports = {
  entry: { app: "./src/index.js" },
  // entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ],
  },
  resolve: {extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx']},
  mode: "development",
  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(dotenv.parsed)),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
