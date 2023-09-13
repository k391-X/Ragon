const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port : 8080,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images' : path.resolve(__dirname, 'src/assets/images'),
        '@src': path.resolve(__dirname, 'src'),
      }
    },
  },
})
