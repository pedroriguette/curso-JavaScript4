const path = require('path')


module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        main: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }]
    },
    output: {
        filename: '[name].min.js'
    }
}