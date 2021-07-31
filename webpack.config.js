const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
 
    entry:  {
      app:'./src/index.js'
    },


    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "main.js"
    },

    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1777,
        writeToDisk: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,

                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },



            {
                test: /\.(sa|sc|c)ss$/,
                  use: [
                    {
                      loader: MiniCssExtractPlugin.loader, 
                      options: {
                        publicPath: '../' 
                      }
                    },
                    'css-loader',
                    'sass-loader'
                  ]
              },

            {
                test: /\.(png|svg|jpe?g|gif|jfif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images",
                        }
                    }
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false,
                        }
                    }
                ]
            },

            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",

        }), 
        new HtmlWebpackPlugin({
            filename: "pizza1.html",
            template: "./src/pizza1.html",

        }), 
        new HtmlWebpackPlugin({
            filename: "pizza2.html",
            template: "./src/pizza2.html",

        }), 
        new HtmlWebpackPlugin({
            filename: "pizza3.html",
            template: "./src/pizza3.html",

        }),
        new HtmlWebpackPlugin({
            filename: "storypizza.html",
            template: "./src/storypizza.html",

        }), 

        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html",

        }), 
        new HtmlWebpackPlugin({
            filename: "checkout.html",
            template: "./src/checkout.html",

        }), 

        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new OptimizeCSSAssetsPlugin({}),
    ],
};
