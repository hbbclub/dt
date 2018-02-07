const Sequelize = require('sequelize');

// rm-2zeeuf9bw6l7gpf2t8o.mysql.rds.aliyuncs.com

const host = 'rm-2zeeuf9bw6l7gpf2t8o.mysql.rds.aliyuncs.com';
const port = 3306;
const database = 'dt';
const username = 'dt';
const password = 'dt@1234';

module.exports = new Sequelize({
  host: host,
  port: port,
  database: database,
  username: username,
  password: password,
  dialect: 'mysql',
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000
  },
  operatorsAliases: false,
  sync: { force: true }
});
