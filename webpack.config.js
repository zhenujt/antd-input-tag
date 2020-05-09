var path = require('path');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'main.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}