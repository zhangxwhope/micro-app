const packageName = import("./package.json").name;

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: "app1", // 子应用的name就是<micro-app name='子应用的name'></micro-app>中name属性的值
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};
