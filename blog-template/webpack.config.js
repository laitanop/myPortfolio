import path from "path";

export default {
  entry: "./public/js/script.js",
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve("public"),
    },
    compress: true,
    port: 3000,
  },
};
