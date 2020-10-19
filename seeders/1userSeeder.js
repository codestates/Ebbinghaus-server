/* eslint-disable no-unused-vars */
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      //비밀번호는 1111입니다.
      "users",
      [
        {
          name: "ryu",
          password:
            "b6e2bf595291f3f7dc7f0ba5db789c0558dfb6b44a786c9d50196ff611833207",
          level: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kim",
          password:
            "b6e2bf595291f3f7dc7f0ba5db789c0558dfb6b44a786c9d50196ff611833207",
          level: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lee",
          password:
            "b6e2bf595291f3f7dc7f0ba5db789c0558dfb6b44a786c9d50196ff611833207",
          level: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "hyun",
          password:
            "b6e2bf595291f3f7dc7f0ba5db789c0558dfb6b44a786c9d50196ff611833207",
          level: null,
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
        name: {
          [Op.in]: ["ryu", "kim", "lee", "hyun"],
        },
      },
      {}
    );
  },
};
