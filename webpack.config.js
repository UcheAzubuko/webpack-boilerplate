const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Testing html file",
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
  module: {
    rules: [
      // css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      // images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 5001, // default is often 8080
    open: true,
    hot: true,
    watchFiles: [path.resolve(__dirname, "src")],
  },
};
