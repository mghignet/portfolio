const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'portfolio.bundle.js',
    },
    module: {
        rules: [
            { test: /\.ejs/, use: ['ejs-compiled-loader']},
            { test: /\.jpg$/, use: ["file-loader"] },
            { test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            header: { title: 'testtitle' },
            template: './src/index.ejs',
        }
    )],
};
