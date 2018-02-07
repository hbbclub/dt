const user = require('../models/user');

// login
const login = (req, res) => {
  res.json('login');
  console.log('aaaa');
};

const resetPassword = (req, res) => {
  res.json('reset');
};

module.exports = {
  login,
  resetPassword
};
