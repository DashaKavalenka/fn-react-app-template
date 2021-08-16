const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

const paths = require('./paths');

module.exports = {
  target: 'web',
  entry: path.resolve(paths.src, 'index.tsx'),
  output: {
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].bundle.js',
    path: paths.build,
    clean: true,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js', '.json'],
    fallback: {
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
          tsconfigRaw: require('../tsconfig.json'),
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          globOptions: {
            ignore: ['**/*.html'],
          },
          to: path.resolve(paths.build, 'public'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      showErrors: true,
      cache: true,
      template: path.resolve(paths.public, 'index.html'),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    new ForkTsCheckerPlugin(),
  ],
};
