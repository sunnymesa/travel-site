module.exports = {
  // entry: "./app/assets/scripts/App.js",
  entry: {
      App: "./app/assets/scripts/App.js",
      Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: __dirname + "/app/temp/scripts/",
    /* or path: path.join(__dirname, "dist/js"), */
    /* filename: "App.js" */
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
          query: {
            presets: ['es2015']
          },
          test: /\.(js|jsx)$/,
          exclude: /node_modules/
      }
    ]
  }
}
