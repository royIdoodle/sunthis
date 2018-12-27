
// dependencies
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// configuration
var configuration = {
  mode: 'production',
  entry: './demo/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  output: {
    publicPath: '',
    filename: 'sunthis.js'
  },
  resolve: {
    alias: {'sharethis-reactjs': path.resolve('./src')},
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebPackPlugin({
      template: "./demo/index.html",
      filename: "index.html"
    }),
    // new webpack.optimize.DedupePlugin(), //删除类似的重复代码
    new webpack.optimize.AggressiveMergingPlugin(), //合并块
    new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
      uglifyOptions: {
        mangle: false,
        output: {
          beautify: true,
        },
      }
    })
  ],
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 5000,
    disableHostCheck: true
  }
};

// export
module.exports = configuration;
