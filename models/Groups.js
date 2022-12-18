const Sequelize = require("sequelize");
const db = require("./index.js");

const Groups = db.define("groups", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Groups;
