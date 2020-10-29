const {
  user,
  priorityWord,
  user_priority_word,
  mineWord,
} = require("../../models");
const sequelize = require("sequelize");

module.exports = {
  //user pri 에서 유저 id를 찾고
  // 그 배열에서 foreach르 하나의 값을 넣고
  get: (req, res) => {
    let { id } = req.params;
    console.log("id == : ", id);

    priorityWord
      .findAll({
        include: {
          model: user_priority_word,
          where: {
            user_id: id,

            distinguish: {
              [sequelize.Op.or]: [0, 1, 3, 7, 15, 30, 100],
            },
          },
        },
        attributes: {
          include: [
            [
              sequelize.literal(
                `(SELECT id FROM user_priority_words WHERE user_id = ${id} 
                       and distinguish in (0, 1, 3, 7, 15, 30, 100)
                       and priority_word_id = priorityWord.id)`
              ),
              "id",
            ],
          ],
        },
      })
      .then((priority) => {
        priority = JSON.parse(JSON.stringify(priority)).map((el) => {
          delete el.user_priority_words;
          return el;
        });
        let array = [];
        let result = array.concat(priority);
        // console.log("리절트!!!!!!!!!", result);
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(400).json("fail");
        }
      });
  },
};
