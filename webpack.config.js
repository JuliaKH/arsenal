const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');



var config = {
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    entry: [
        './src/pages/index/index.js',
    ],
    output: {
        // filename: './bundle[contenthash].js',
        filename: './bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: '[path][name].[ext]',
                    }
                }]
            },
            {
                test: /\.(css|sass)$/,
                use: ['style-loader', 'css-loader?url=false', 'sass-loader']
            },
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new ExtractTextPlugin({
        //     filename: './css/style.bundle.css',
        //     allChunks: true,
        // }),
        new HtmlWebpackPlugin({
            template: 'src/pages/index/index.pug',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            // {
            //     from: './src/fonts',
            //     to: './fonts'
            // },
            // {
            //     from: './src/js/vendor',
            //     to: './js/vendor'
            // },
            // {
            //     from: './src/img',
            //     to: './img'
            // },
        ]),
        //new HtmlWebpackPugPlugin()
    ]
};
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.devServer = {
            contentBase: './src'
        }
    }
    if (argv.mode === 'production') {
        config.devServer = {
            contentBase: './dist'
        }
    }
    return config;
};