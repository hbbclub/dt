const Sequelize = require('sequelize');
const db = require('../configs/db');

db.define(
  'user',

  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    mobile: {
      type: Sequelize.STRING(20),
      allowNull: false
    }
  },

  {
    tableName: 'user',
    underscored: true,
    timestamps: true
  }
);
