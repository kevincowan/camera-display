/*
module.exports={
    mode: "development",
    devServer: {
        hot: true
    }
}
*/
module.exports = {
    mode: 'development',       // we had this already
    entry: './src/index.js',   // don't think we need this, should be the default
    output: {
      filename: 'main.js',     // should be default as well I think
      path: path.resolve(__dirname, 'dist'),   // should be default
    },
    devServer: {
      contentBase: './dist',   // I think _this_ is the key change
    },
  };