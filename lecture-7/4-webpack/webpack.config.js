const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: '../../lecture-6/5-module/module-usage.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // loaders with rules
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                loader: 'source-map-loader'
            }]
        }]
    },
    // plugins
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './webpack.html'
        })
    ],
    devtool: "source-map",
};

module.exports = config;