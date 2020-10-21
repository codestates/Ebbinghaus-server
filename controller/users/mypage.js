const { mineWord, user } = require("../../models");
const sequelize = require("sequelize");

// 등록단어: minewords에서 등록한 단어
//  Test: 오늘 테스트할 단어
//  Doing: 테스트 중인 모든 단어
//  Finish: 30일까지 시험 다본 단어를 데이타 베이스에서 가져오기

module.exports = {
  get: async (req, res) => {
    let { id } = req.users;
    if (id) {
      user
        .findById({
          where: {
            id: id,
          },
        })
        .then((data) => {
          res.status(200).json(data.id);
        });

      //Doing
      user
        .findById({
          where: {
            id: id,
          },
        })
        .then((data) => {
          mineWord
            .findAll({
              raw: true,
              where: {
                user_id: data.id,
                distinguish: {
                  [sequelize.Op.or]: [0, 1, 3, 7, 15, 100],
                },
              },
              order: [["id", "DESC"]],
            })
            .then((data) => {
              if (data) {
                res.status(200).json(data);
              } else {
                res.status(404).send("잘못됬어");
              }
            })
            .catch((err) => console.error("error", err));
        });
    } else {
      res.status(404).send("session not fonud");
    }
  },
};
