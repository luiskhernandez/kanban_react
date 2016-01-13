var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');
var merge             = require('webpack-merge');

const PATHS = {
  app       : path.join(__dirname, 'app'),
  build     : path.join(__dirname, 'build')
};

const TARGET = process.env.npm_lifecycle_event;
var common = {
  entry      : PATHS.app,
  output     : {
    path     : PATHS.build,
    filename : 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kanban app'
    }),
  ],
  module:{
    loaders:[
    {
      test    : /\.css$/,
      loaders : ['style', 'css'],
      include : PATHS.app
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: PATHS.app,
      query:{
        presets: ['es2015', 'react']
      }
    }
    ]
  }
}
module.exports = {
}

if(TARGET === 'start' || !TARGET){
  module.exports = merge(common,{
    devtool: 'eval-source-map',
    devServer            : {
      historyApiFallback : true,
      hot                : true,
      inline             : true,
      progress           : true,
      stats              : 'error-only',
      host               : 'localhost',
      port               : 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}
