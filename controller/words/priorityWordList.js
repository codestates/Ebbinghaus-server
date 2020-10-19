const { user, priorityWord, user_priority_word } = require("../../models");

module.exports = {
  //user pri 에서 유저 id를 찾고
  // 그 배열에서 foreach르 하나의 값을 넣고
  get: (req, res) => {
    let { userid } = req.session;
    let result = [];
    user
      .findOne({
        where: {
          id: userid.id,
        },
      })
      .then((data) => {
        if (data) {
          user_priority_word
            .findAll({
              raw: true,
              where: {
                user_id: data.id,
                distinguish: 99,
              },
              order: [["id", "DESC"]],
            })
            .then((data1) => {
              data1.forEach((element) => {
                priorityWord
                  .findAll({
                    raw: true,
                    where: {
                      id: element.priority_word_id,
                    },
                  })
                  .then((data2) => {
                    result.push(data2);
                  })
                  .catch((err) => console.error("error", err));
              });

              if (result.length > 0) {
                res.status(200).json(result);
              } else {
                res.status(404).send("잘못됬어");
              }
              // console.log("데이타", data2.priority_word_id);
            });
        }
      });
  },
};
