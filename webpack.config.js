module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: __dirname + "/app/temp/scripts/",
    /* or path: path.join(__dirname, "dist/js"), */
    filename: "App.js"
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
