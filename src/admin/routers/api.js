const router = require('express').Router();
const services = require('../services/');

const a = router.get('/', function name(req, res) {
  res.json('hello');
});

router.all('/auth/login', services.auth.login);
module.exports = router;
