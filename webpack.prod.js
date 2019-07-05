const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const NODE_ENV = "production";

module.exports = merge(common,{
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map'
});
