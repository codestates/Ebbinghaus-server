const { priorityWord, user_priority_word } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { selectedWords, id } = req.body;

    selectedWords.forEach((element) => {
      priorityWord
        .findOne({
          raw: true,
          where: {
            word_eng: element.word_eng,
          },
        })
        .then((data) => {
          user_priority_word
            .create(
              {
                user_id: id,
                priority_word_id: data.id,
                check_in: new Date(),
                check_out: new Date(),
                distinguish: 0,
              },
              {
                where: {
                  priority_word_id: data.id,
                },
              }
            )
            .then((data) => {
              if (data) {
                res.status(201).json("register test success");
              } else {
                res.status(400).send("잘못된 요청");
              }
            });
        });
    });
  },
};
