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
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        compress: true,
        port: 9000,
    }
}
