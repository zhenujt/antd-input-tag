var path = require('path');

module.exports = {
    entry: './src/InputWithTag.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'InputWithTag.js',
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