const path = require("path");

module.exports = {
  mode: "development", // It can also be production
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filenane: "index.bundle.js", // using static name
    // OR
    filename: "[name].[contenthash].js", // using entry name, sets the name to main, as specific in the entry object.
    clean: true,
  },
};
