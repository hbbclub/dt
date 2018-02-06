const router = require('express').Router();

router.get('/', function name(req, res) {
  res.json('admin');
});

module.exports = router;
