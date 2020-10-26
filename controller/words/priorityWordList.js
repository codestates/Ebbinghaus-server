const { user, priorityWord, user_priority_word } = require("../../models");
const priorityTestRegister = require("./priorityTestRegister");
const sequelize = require("sequelize");

module.exports = {
  //user pri 에서 유저 id를 찾고
  // 그 배열에서 foreach르 하나의 값을 넣고
  get: (req, res) => {
    let { id } = req.params;
    // let result = [];

    user_priority_word
      .findAll({
        raw: true,
        where: {
          user_id: id,
        },
        attributes: ["priority_word_id"],
      })
      .then((data) => {
        let number = [];
        data.forEach((element) => {
          let pure = element.priority_word_id;
          number.push(pure);
        });
        // console.log("여길봐!!!", number);

        priorityWord
          .findAll({
            where: {
              id: {
                [sequelize.Op.notIn]: number,
              },
            },
          })
          .then((result) => {
            // console.log(result);
            res.status(200).json(result);
          })
          .catch((e) => {
            res.sendStatus(500);
          });
      });
  },
};

//[Op.notIn]: [1, 2],
//조건 유저 탐색해서
// 해당 priority word 아이디를 참고해서
// 그것을 제외한 priorityword 값만 보냄
