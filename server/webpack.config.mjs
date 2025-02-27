import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  target: 'node',  // Bundling for Node.js
  entry: './src/index.js', // Your entry file
  output: {
    path: path.resolve('dist'),  // The dist folder for output
    filename: 'server.bundle.js',  // Name of the bundled output file
    clean: true,  // Clean the dist folder before building
    module: true,  // Ensure ES module output
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Transpile all .js files
        exclude: /node_modules/,  // Do not transpile node_modules
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: [nodeExternals()],  // Exclude node_modules from the bundle
  resolve: {
    extensions: ['.js'],  // Resolve .js files
  },
  experiments: {
    outputModule: true,  // Enable ES module output in Webpack
  },
};
