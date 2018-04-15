module.exports = {
    entry: "./static/js/index.jsx",
    output: {
        path: __dirname + "/static/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader",
                exclude: __dirname + "/node_modules/"
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            }
        ]
    },
    mode: "development"
};
