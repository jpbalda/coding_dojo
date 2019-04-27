const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: "./assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/app.js"
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};