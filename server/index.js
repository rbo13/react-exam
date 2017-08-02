import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)))

app.set('port', process.env.PORT || 1340);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(app.get('port'), () => console.log("Huuray! Server is running on localhost: " + app.get('port')));
