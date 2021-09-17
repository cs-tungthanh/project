const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const production = false;

module.exports = {
    mode: production ? 'production' : 'development',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './webpack/src/index.html')
        })
    ]
}