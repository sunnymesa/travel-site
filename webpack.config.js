module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: __dirname + "/app/temp/scripts/",
    /* or path: path.join(__dirname, "dist/js"), */
    filename: "App.js"
  }
}
