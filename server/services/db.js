const Sequelize = require('sequelize');

const database = '';
const username = '';
const password = '';

module.exports = new Sequelize({
  database: database,
  username: username,
  password: password,
  dialect: 'mysql',
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000
  },
  operatorsAliases: false
});
