//vue.config.js

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // assetsDir: 'assets',
  productionSourceMap: false,
  filenameHashing: false
}