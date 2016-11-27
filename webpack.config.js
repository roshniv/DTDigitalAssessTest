const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PATHS = {
  app: './src/main.js',
  build: path.join(__dirname, 'public/bundle'),
};

const common = {

  entry: {
    app: [PATHS.app],
    vendor1 : [
        'react',
        'react-router',
        'react-dom',
        'react-bootstrap'
        ]
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/bundle/'
  },
  resolve: {
      modulesDirectories: ['node_modules'],
      root: path.resolve('./src'),
      extensions: ['','.js','.jsx']
  },
  module: {
      preLoaders: [
          { test: /\.jsx?$/, loaders: ['babel'], exclude: [ /(node_modules|lib)/]}
      ],
      loaders: [
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.(jpg|jpeg|gif|png)$/, exclude: /node_modules/, loader:'url-loader?limit=1024&name=images/[name].[ext]'},
          { test: /\.(woff|woff2|eot|ttf|svg)$/, exclude: /node_modules/,loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'},
          { test: /\.css$/,loader: ExtractTextPlugin.extract('css-loader') }
      ],

      noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor3", "vendor2", "vendor1"],
        filename: '[name].js',
        minChunks: Infinity
      }),
      new ExtractTextPlugin("css/style.css", {allChunks: false}),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production'),
          'DISABLE_LINTER': true,
          'DEVTOOLS': false, //set it to true in dev mode
          'MODE': JSON.stringify(TARGET)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: false
        },
        minimize: true
      }),
      new NpmInstallPlugin({
        save: true 
      })
  ],

  node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
  }
};


// Default configuration
if(TARGET === 'build' || TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval',
    devServer: {
      contentBase: path.join(__dirname, 'public/'),

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
  });
}

if(TARGET === 'deploy' || TARGET == 'staging') {
  module.exports = merge(common, {
    devtool:'cheap-module-source-map'
  });
}