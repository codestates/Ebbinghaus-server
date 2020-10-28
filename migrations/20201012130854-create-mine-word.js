"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mineWords", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      word_eng: {
        type: Sequelize.STRING,
      },
      word_kor: {
        type: Sequelize.STRING,
      },
      distinguish: {
        type: Sequelize.INTEGER,
      },
      check_out: {
        type: Sequelize.DATE,
      },
      word_theme: {
        type: Sequelize.STRING,
        defaultValue: "mine",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("mineWords");
  },
};
