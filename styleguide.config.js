var merge = require('webpack-merge');
var path = require('path');
module.exports = {
  title: 'Component Library',
  rootDir: './src',
  skipComponentsWithoutExample: true,
  serverPort: 4000,
  highlightTheme: 'base16-light',
  components: function(config, glob) {
    return glob.sync(config.rootDir + '/components/**/*.js').filter(function(module) {
      return /^((?!.test?).)*$/.test(module);
    });
  },
  updateWebpackConfig: function (webpackConfig) {
    var merged = merge(webpackConfig, {
      module: {
        loaders: [
          { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
          { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
          { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
        ],
      },
      resolve: {
        root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        modulesDirectories: [
          'src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', '.scss']
      },
    });
    return merged;
  },
};
