const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebPackPlugin({
            title: 'React redux app',
            template:  "./src/index.html",
            hash: true,
            cache: true,
            filename: "./index.html"
        })
    ]
};
