const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/', // Ensure the correct base URL for your app
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Match .css files
                use: ['style-loader', 'css-loader'], // Use these loaders for CSS files
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|pdf)$/, // Match image and PDF files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Maintain the original file name and extension
                            outputPath: 'assets', // Output the files to a specific folder in dist
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Serve files from 'dist' folder
        historyApiFallback: true, // Fallback to index.html for SPA routes
        port: 8080, // Default port for webpack-dev-server
    },
};
