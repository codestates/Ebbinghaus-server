const { user, priorityWord, user_priority_word } = require("../../models");
const priorityTestRegister = require("./priorityTestRegister");
module.exports = {
  //user pri 에서 유저 id를 찾고
  // 그 배열에서 foreach르 하나의 값을 넣고
  get: (req, res) => {
    // let { id } = req.params;
    // let result = [];

    priorityWord
      .findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((e) => {
        res.sendStatus(500);
      });

    // user
    //   .findOne({
    //     where: {
    //       id: id,
    //     },
    //   })
    //   .then((data) => {
    user_priority_word.findAll({
      raw: true,
      where: {
        // user_id: data.id,
        distinguish: null,
      },
      include: {
        model: priorityWord,
        attributes: ["word_eng", "word_kor"],
      },
      // attributes: ["id"],
    });
    // });
  },
};
