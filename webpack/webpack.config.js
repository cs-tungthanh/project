const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const production = false;

module.exports = {
    mode: production ? 'production' : 'development',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,∑
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
        !production && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ].filter(Boolean),
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        compress: true,
        port: 9000,
    }
}
