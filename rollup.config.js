import babel from 'rollup-plugin-babel';

export default {
    input: './index.js', // Path to your entry file
    output: {
        file: 'dist/sdk.bundle.js',  // Output file
        format: 'umd',
        name: 'mail-sender-sdk',  // Global variable name in the browser
        sourcemap: true,  // For easier debugging
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',  // Exclude node_modules from Babel processing
        }),
    ],
};
