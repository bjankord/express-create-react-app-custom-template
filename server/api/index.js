const express = require('express');

const router = express.Router();

// Api routes
router.get('/ping', (req, res) => {
  return res.json({ text: 'pong' });
});


module.exports = router;