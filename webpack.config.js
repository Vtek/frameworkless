const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    devtool: 'eval-source-map',

    entry: './src/main.ts',

    output: {
        filename: './dist/app.js',
        path: __dirname
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};

module.exports = config;