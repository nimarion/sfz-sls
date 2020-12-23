const TerserPlugin = require("terser-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "github" ? "/www/" : "/",
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: "./src/assets/logo.png",
        favicons: {
          icons: {
            coast: false,
            yandex: false
          }
        }
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    }
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  }
};
