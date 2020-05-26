module.exports = { //Where it will begin to read the files
    entry: [
        './src/index.js'
    ],
    output: { //The output of the bundle
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: { //Where you are going to run the server if your working locally 
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/, //All the javaScript files
                exclude: /node_modules/, //except the node, not interested
                use: ['babel-loader'] //Run them on bable
            },
            {
                test: /\.(js|jsx)$/, //All the javaScript files
                exclude: /node_modules/, //except the node, not interested
                use: ['eslint-loader'] //Run them on bable
            }
        ]
    },
    resolve:{
        extensions:['.js', '.jsx']
    }
}