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
        {
          word_eng: "we",
          word_kor: "우리들은",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "they",
          word_kor: "그들은",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "she",
          word_kor: "그녀는",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "his",
          word_kor: "그의 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "come",
          word_kor: "오다 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "see",
          word_kor: "보다 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "like",
          word_kor: "좋아한다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "get",
          word_kor: "얻는다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "our",
          word_kor: "우리들의 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "talk",
          word_kor: "말한다 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "more",
          word_kor: "더 많은",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "old",
          word_kor: "오래된 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "live",
          word_kor: "살고있다 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "little",
          word_kor: "작은 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "home",
          word_kor: "집 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "because",
          word_kor: "왜냐하면 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "right",
          word_kor: "바른,오른쪽의 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "use",
          word_kor: "사용한다 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "who",
          word_kor: "누가 ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word_eng: "give",
          word_kor: "주다",
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
          [Op.in]: ["give", "who", "use", "right"],
        },
      },
      {}
    );
  },
};
