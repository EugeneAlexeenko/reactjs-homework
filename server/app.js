const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');

  // Allows for serving of the files emitted from webpack
  // Handles files in memory
  const webpackDevMiddleware = require('webpack-dev-middleware');

  // This allows you to add hot reloading
  // into an existing server without webpack-dev-server.
  const webpackHotMiddleware = require('webpack-hot-middleware');

  // Allow hot updates Webpack bundles on the server.
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

  const webpackConfig = require('../webpack');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));

  //Only the client bundle needs to be passed to `webpack-hot-middleware`
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));

  app.use(webpackHotServerMiddleware(compiler));
} else {
  // In production mode we need to serve our cool
  // minifiedOptimizedConcatenatedSuperBundle from /public folder
  const serverRenderer = require('../public/js/serverRenderer').default;

  app.use(express.static('public'));
  app.use(serverRenderer());
}

module.exports = app;
