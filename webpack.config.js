let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets/"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/images",
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  // watch: true,
};
