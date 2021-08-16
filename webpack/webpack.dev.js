const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    contentBase: './build',
  },
  devtool: 'cheap-module-source-map',
  plugins: [new Dotenv({ path: './.env.local' }), new ReactRefreshWebpackPlugin()],
};
