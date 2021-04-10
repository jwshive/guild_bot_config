'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Guilds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guildName: {
        type: Sequelize.STRING
      },
      guildRealm: {
        type: Sequelize.STRING
      },
      guildPublicChannel: {
        type: Sequelize.STRING
      },
      guildPrivateChannel: {
        type: Sequelize.STRING
      },
      guildRaiderIO: {
        type: Sequelize.STRING
      },
      guildWarcraftLogs: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Guilds');
  }
};