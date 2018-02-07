const Sequelize = require('sequelize');
const db = require('../configs/db');

db.define(
  'role',

  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
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
