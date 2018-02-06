const db = require('./db');

// login
const login = (req, res) => {
  res.json('login');
};

const resetPassword = (req, res) => {
  res.json('reset');
};

module.exports = {
  login,
  resetPassword
};
