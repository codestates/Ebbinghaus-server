const { user, priorityWord, user_priority_word } = require("../../models");
const sequelize = require("sequelize");

module.exports = {
  //user pri 에서 유저 id를 찾고
  // 그 배열에서 foreach르 하나의 값을 넣고
  get: (req, res) => {
    let { userid } = req.session;
    // console.log("id == : ", id);
    user
      .findOne({
        where: {
          id: userid.id,
        },
      })
      .then((data) => {
        user_priority_word
          .findAll({
            raw: true,
            where: {
              user_id: data.id,
              distinguish: {
                [sequelize.Op.or]: [0, 1, 3, 7, 15, 100],
              },
            },
            include: {
              model: priorityWord,
              attributes: ["word_eng", "word_kor"],
            },
            attributes: ["id"],
          })
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((e) => {
            res.sendStatus(500);
          });
      });
  },
};
