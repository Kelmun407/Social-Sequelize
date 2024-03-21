// 1. require in Sequelize

const Sequelize = require("sequelize");
const { Model, DataTypes} = require("sequelize")
const path = require("path");

// 2. initialize new Sequelize, passing the object with dialect and storage.

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite")
});





module.exports = {
    db,
    
}