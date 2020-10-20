const { user, priorityWord, user_priority_word } = require("../../models");
const sequelize = require("sequelize");

module.exports = {
  //user pri 에서 유저 id를 찾고
  // 그 배열에서 foreach르 하나의 값을 넣고
  get: (req, res) => {
    let { id } = req.params;
    if (id) {
      user
        .findOne({
          where: {
            id: id,
          },
        })
        .then((data) => {
          if (data) {
            user_priority_word
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
              .then(async (data) => {
                if (data) {
                  for (let i = 0; i < data.length; i++) {
                    // console.log("데이타", data.priority_word_id);
                    priorityWord
                      .findAll({
                        raw: true,
                        where: {
                          id: data[i].priority_word_id,
                        },
                      })
                      .then((data) => {
                        console.log("데이타", data);
                        if (data) {
                          res.status(200).json(data);
                        } else {
                          res.status(404).send("잘못됬어");
                        }
                      })
                      .catch((err) => console.error("error", err));
                  }
                  let data1 = await data.forEach((word) => {
                    priorityWord.findAll({
                      raw: true,
                      where: {
                        id: word.priority_word_id,
                      },
                    });
                  });
                  console.log("데이타", data1);
                }
              })
              .then((data) => {
                if (data) {
                  res.status(200).json(data);
                } else {
                  res.status(404).send("잘못됬어");
                }
              })
              .catch((err) => console.error("error", err));
          }
        });
    }
  },
};
