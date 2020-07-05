const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports={
  entry: {
    index: path.resolve(__dirname,"src","index.js")
  },
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve:{
    extensions:[".js",".jsx"]
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        use:{
          loader: "babel-loader"
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use:[
          {
            loader:"html-loader"
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader"
        ]
      },

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css"
    })
  ]
}