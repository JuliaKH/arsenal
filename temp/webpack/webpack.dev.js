const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const NODE_ENV = "development";

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval'
});
