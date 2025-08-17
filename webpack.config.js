import path from "path";

export default {
  entry: "./public/js/script.js", // Entry point for your app
  output: {
    path: path.resolve("public"), // Directory for bundled files
    filename: "bundle.js", // Output file
  },
  mode: "development", // Use "production" for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile modern JS for older browsers
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve("public"), // Serve static files
    },
    compress: true,
    port: 3000, // Development server port
  },
};
