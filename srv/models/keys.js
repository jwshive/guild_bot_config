"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Keys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Keys.init(
    {
      key_instance: DataTypes.STRING,
      key_holder: DataTypes.STRING,
      key_level: DataTypes.INTEGER,
      key_completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "Keys",
    }
  );
  return Keys;
};
