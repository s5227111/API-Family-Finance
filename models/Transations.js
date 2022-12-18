const Sequelize = require("sequelize");
const db = require("./index.js");

const Transactions = db.define("transactions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  group_id: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Type is true for income, false for expense
  type: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Transactions;
