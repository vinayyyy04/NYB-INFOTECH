const path = require("path");

module.exports = {
  mode: "development",

  entry: "./Src_07/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};