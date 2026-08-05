const path = require("path");

module.exports = {
  mode: "development",

  // Entry
  entry: "./src/index.js",

  // Output
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};