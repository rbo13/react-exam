import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

let app = express();

const compiler = webpack(webpackConfig);

// Middleware for Hot-reloading
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

// Middleware for webpack
app.use(webpackHotMiddleware(compiler));

app.set('port', process.env.PORT || 1340);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(app.get('port'), () => console.log("Huuray! Server is running on localhost: " + app.get('port')));
