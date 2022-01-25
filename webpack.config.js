const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "terms+conditions.html",
      template: "src/terms+conditions.html",
    }),
    new HtmlWebpackPlugin({
      filename: "privacy-policy.html",
      template: "src/privacy-policy.html",
    }),
    new HtmlWebpackPlugin({
      filename: "faq.html",
      template: "src/index.html",
    }),
  ],
};
