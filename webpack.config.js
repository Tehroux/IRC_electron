var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
},
target: "electron",
module : {
   loaders : [
    {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel-loader'
    },
    {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
    },
    {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
    }
   ]
 }
};

module.exports = config;
