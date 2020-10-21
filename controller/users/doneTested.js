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
            distinguish: 100,
          },
        })

        .then((mine100) => {
          user_priority_word
            .findAndCountAll({
              raw: true,
              where: {
                user_id: data.id,
                distinguish: 100,
              },
            })

            .then((priority100) => {
              let array = [];
              let finish = mine100.count + priority100.count;

              array.push(finish);

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
