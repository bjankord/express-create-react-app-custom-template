const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const path = require('path');

const packageJson = require('../package.json');
const router = require('./api');
const reload = require('./reload');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Api Routes
app.use(`${packageJson.homepage}api`, router);

// Serve reload.js file that enables live-reload functionality in dev mode
if (process.env.NODE_ENV !== 'production') {
  app.use(`${packageJson.homepage}reload`, reload);
}

// view engine setup
app.engine('html', es6Renderer);
app.set('views', path.resolve(__dirname, '../build/'));
app.set('view engine', 'html');

// Serve static files
app.use(packageJson.homepage, express.static(path.join(__dirname, '..', 'build'), {
  index: false
}));

// For all requests besides /api, server the index template based on create-react-app's public/index.html file
app.get('*', (req, res) => {
  res.render('index', {
    locals: {
      header: '<header class="express-header">Custom Header from Express</header>',
      footer: '<footer class="express-footer">Custom Footer from Express</footer>',
      bootstrap: JSON.stringify({ bootstrap: 'data' }),
    },
  });
});

module.exports = app;
