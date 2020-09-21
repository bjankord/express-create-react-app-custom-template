const express = require('express');
const http = require('http');
const path = require('path');
const reload = require('reload');
const es6Renderer = require('express-es6-template-engine');
const serialize = require('serialize-javascript');

const packageJson = require('../package.json');
const router = require('./api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Api Routes
app.use(`${packageJson.homepage}api`, router);

// view engine setup
app.engine('html', es6Renderer);
app.set('views', path.resolve(__dirname, '../build/'));
app.set('view engine', 'html');

// Serve static files
app.use(packageJson.homepage, express.static(path.join(__dirname, '..', 'build'), {
  index: false
}));

const server = http.createServer(app);
server.listen(3000, () => console.log('App is running on localhost:3000'));
// Wire up reload behavior if app is not running in production mode
if (process.env.NODE_ENV !== 'production') {
  reload(app);
}

// For all requests besides /api, server the index template based on create-react-app's public/index.html file
app.get('*', (req, res) => {
  res.render('index', {
    locals: {
      header: '<header class="express-header">Custom Header from Express</header>',
      footer: '<footer class="express-footer">Custom Footer from Express</footer>',
      // More info on using serialize: https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0
      bootstrap: serialize({ bootstrap: 'data' }, { isJSON: true }),
    },
  });
});
