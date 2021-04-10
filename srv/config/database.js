const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  logging: (...msg) => console.log(msg),
});

module.exports = sequelize;
