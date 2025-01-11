const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for production builds
  entry: './src/index.js', // Entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude dependencies
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  devtool: 'source-map', // Optional: for debugging
};
