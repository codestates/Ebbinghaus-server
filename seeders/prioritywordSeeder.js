/* eslint-disable no-unused-vars */
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "PriorityWords",
      [
        {
          word_eng: "I",
          word_kor: "나는",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "you",
          word_kor: "너는, 너를 ,너희들은(를)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "he",
          word_kor: "그는,그가",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "go",
          word_kor: "간다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "PriorityWords",
      {
        word_eng: {
          [Op.in]: ["I", "you", "he", "go"],
        },
      },
      {}
    );
  },
};
