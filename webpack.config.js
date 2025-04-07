const path = require('path'); // Import Node.js 'path' module for build-time usage

module.exports = {
    mode: 'development', // or 'production' (choose based on your needs)
    entry: './src/send-mail.js', // Entry point to your SDK
    output: {
        filename: 'bundle.js', // The name of the bundled file
        path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
        library: 'sendEmailSDK', // Name of your library
        libraryTarget: 'umd', // Universal Module Definition (for both Node.js and browser)
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify")  // Use the browser-compatible polyfill for 'path'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JavaScript files
                exclude: /node_modules/, // Exclude 'node_modules' directory
                use: {
                    loader: 'babel-loader', // Use Babel for transpiling JS
                    options: {
                        presets: ['@babel/preset-env'], // Use the ES6+ preset
                    },
                },
            },
        ],
    },
};
