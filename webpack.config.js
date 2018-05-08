const { join } = require('path');
const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");

// PATH configurations
const PATH = {
  dist: join(__dirname, 'dist'),
  src: join(__dirname, 'src'),
  root: join(__dirname, ''),
};
const developmentPort = 8080;

module.exports = (env = {}) => {
  const extensions = ['.js', '.jsx', '.css', '.scss', '.json'];
  // Compiling configurations
  const bundleConfig = {
    target: 'node', // VERY IMPORTANT
    context: PATH.root,
    entry: {
      index: './src/server',
    },
    mode: 'production',
    stats: 'normal',
    watch: false,
    output: {
      path: PATH.dist,
      filename: '[name].js',
      publicPath: '/',
    },
    externals: [nodeExternals()],
    resolve: { extensions },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: PATH.src,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
  };
  // Webpack configurations
  const config = [bundleConfig];
  return config;
};
