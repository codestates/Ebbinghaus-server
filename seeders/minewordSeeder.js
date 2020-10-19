/* eslint-disable no-unused-vars */
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "MineWords",
      [
        {
          user_id: 1,
          word_eng: "one",
          word_kor: "하나",
          distinguish: 99,
          check_in: null,
          check_out: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          word_eng: "two",
          word_kor: "둘",
          distinguish: 99,
          check_in: null,
          check_out: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          word_eng: "three",
          word_kor: "셋",
          distinguish: 99,
          check_in: null,
          check_out: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          word_eng: "four",
          word_kor: "넷",
          distinguish: 99,
          check_in: null,
          check_out: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          word_eng: "five",
          word_kor: "다섯",
          distinguish: 99,
          check_in: null,
          check_out: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          word_eng: "six",
          word_kor: "여섯",
          distinguish: 99,
          check_in: null,
          check_out: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          word_eng: "seven",
          word_kor: "일곱",
          distinguish: 99,
          check_in: null,
          check_out: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          word_eng: "eight",
          word_kor: "여덟",
          distinguish: 99,
          check_in: null,
          check_out: null,
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
          [Op.in]: ["one", "two", "three", "four"],
        },
      },
      {}
    );
  },
};
