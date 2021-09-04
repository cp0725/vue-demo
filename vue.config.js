/*
 * @Author: 常培
 * @Date: 2021-07-10 17:39:48
 * @LastEditors: 常培
 * @LastEditTime: 2021-08-30 14:22:53
 */
// const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // aaa: path.resolve(__dirname, "framework/components"),
      },
    },
  },
  pages: {
    page1: {
      entry: './src/page1/main.js',
      // template: './public/index.html',
      // filename: 'index.html'
    },
    page2: {
      entry: './src/page2/main.js',
      // template: './public/survey.html',
      // filename: 'aaaaaa.html'
    },
  },
};
