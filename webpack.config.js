const path = require("path")
const {
    VueLoaderPlugin
} = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    cache:true,
    target: "web",
    entry: {
        index: path.resolve(__dirname, "src/main.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "static/js/[name]-[contenthash:8].js",
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: "vue-loader",
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            chunks: ["index"],
        }),
    ]
}