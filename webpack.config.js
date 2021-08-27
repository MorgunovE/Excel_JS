// 8
const path = require('path')
// 20
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// 22
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 25
const CopyPlugin = require('copy-webpack-plugin')
// 28
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 42
const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
// console.log('Is Prod: ', isProd)
// console.log('Is Dev: ', isDev)
// 50
const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`
// 62 and 130
const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      },
    },
  ]
  if(isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
}
// 8-1
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'], // 59
  output: {
    filename: filename('js'), // 50
    // filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 29
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },
  // 52
  devtool: isDev ? 'source-map' : false,
  // 56
  devServer: {
    port: 3000,
    hot: isDev,
  },
  // 15
  plugins: [
    // 20-1
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      // 47
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }), // 22-1
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }), // 25
    new MiniCssExtractPlugin({
      filename: filename('css'), // 50-1
      // filename: 'bundle.[hash].css'
    }), // 28-1
  ],
  // 32
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // {
          //   // 61
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     hmr: isDev,
          //     reloadAll: true
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // 36
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(), // 62
      },
    ],
  },
}
