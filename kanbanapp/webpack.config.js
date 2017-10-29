const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['env', 'react']
                }
            }
        ]
        // rules: [
        //     {
        //         test: /\.js$/,
        //         include: path.join(__dirname),
        //         exclude: /{node_modules}|{dist}/,
        //         use: {
        //             loader: 'babel-loader',
        //             options: {
        //                 presets: ['env', 'react']
        //             }
        //         }
        //     }
        // ]
    }
};