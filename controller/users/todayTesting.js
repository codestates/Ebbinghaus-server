const {
  user,
  mineWord,
  user_priority_word,
  priorityWord,
} = require("../../models");
const sequelize = require("sequelize");

// 오늘 쳐야하지만 아직 안한 테스트 수 / 오늘 해야했던 전체 수
// 사용자가 테스트 등록중인 전체 수
// 완료한 수

module.exports = {
  get: async (req, res) => {
    const { id } = req.users;
    user.findByPk(id).then((data) => {
      mineWord
        .findAndCountAll({
          raw: true,
          where: {
            user_id: data.id,
            check_out: {
              [sequelize.Op.lt]: new Date(),
            },
            // distinguish: {
            //   [sequelize.Op.or]: [0, 1, 3, 7, 15, 30],
            // },
          },
        })
        .then((minetesting) => {
          user_priority_word
            .findAndCountAll({
              raw: true,
              where: {
                user_id: id,
                check_out: {
                  [sequelize.Op.lt]: new Date(),
                  // distinguish: {
                  //   [sequelize.Op.or]: [0, 1, 3, 7, 15, 30],
                  // },
                },
              },
            })
            .then((prioritytesting) => {
              console.log("데이타", prioritytesting.count);
              let array = [];

              let testing = minetesting.count + prioritytesting.count;
              array.push(testing);

              if (array) {
                res.status(200).json(array);
              } else {
                res.status(404).send("잘못됬어");
              }
            })
            .catch((err) => console.error("error", err));
        });
    });
  },
};
