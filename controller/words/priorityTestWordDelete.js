const { user_priority_word, priorityWord } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { selectedWords, id } = req.body;
    let selectWord_EngList = selectedWords.map((el) => {
      return el.word_eng;
    });

    priorityWord
      .findAll({
        raw: true,
        where: {
          word_eng: selectWord_EngList,
        },
      })
      .then((word) => {
        word.forEach((element) => {
          user_priority_word
            .destroy({
              where: {
                user_id: id,
                priority_word_id: element.id,
              },
            })
            .then((data) => {
              console.log("날좀보소~!", data);
              if (data) {
                res.status(201).json("삭제되었습니다");
              } else {
                res.status(400).send("잘못된 요청입니다.");
              }
            });
        });
      });
  },
};
