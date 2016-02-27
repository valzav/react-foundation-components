/* eslint-disable no-console, prefer-arrow-callback */

const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  stats: { colors: true },
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, '0.0.0.0', function callback(err) {
  if (err) {
    console.error(err);
    return;
  }

  console.info('Listening at http://0.0.0.0:3000');
});
