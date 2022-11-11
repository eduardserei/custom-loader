const webpack = require("webpack");
const path = require("path");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      STABLE_FEATURE: true,
      EXPERIMENTAL_FEATURE: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["data-qa-loader"],
      },
    ],
  },
  resolveLoader: {
    alias: {
      "data-qa-loader": path.join(__dirname, "./data-qa-loader.js"),
    },
  },
};
