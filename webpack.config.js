const path = require('path');
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }, {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
        ]
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    devServer: {
        contentBase: './',
        port: 8800
    }

}