module.exports = {
  css: {
    requireModuleExtension: false,
    extract: true,
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
