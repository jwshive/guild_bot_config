'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guilds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Guilds.init({
    guildName: DataTypes.STRING,
    guildRealm: DataTypes.STRING,
    guildPublicChannel: DataTypes.STRING,
    guildPrivateChannel: DataTypes.STRING,
    guildRaiderIO: DataTypes.STRING,
    guildWarcraftLogs: DataTypes.STRING,
    guildGuestRole: DataTypes.STRING,
    purgeAfterDays: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guilds',
  });
  return Guilds;
};