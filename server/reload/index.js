const express = require('express');

const app = express.Router();

// Dynamically generated reload.js file
app.get(`/reload.js`, (req, res) => {
  const port = req.app.get('port');
  const reload = `// reload.js
// Open a connection.
var socket = io('http://localhost:${port}');

// Listen for the event.
socket.on("files changed", function () {
  // delay to wait for CRA to build before reloading
  setTimeout(window.location.reload.bind(window.location), 1000);
});`;
  res.type('.js');
  return res.send(reload);
});


module.exports = app;
