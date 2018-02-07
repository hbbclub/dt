const Sequelize = require('sequelize');
const db = require('../configs/db');

db.define(
  'player',

  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },

  {
    tableName: 'player',
    underscored: true,
    timestamps: true
  }
);

// db.sync();
