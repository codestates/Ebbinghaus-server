const { mineWord } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { selectedWords } = req.body;
    if (Array.isArray(selectedWords)) {
      for (let i = 0; i < selectedWords.length; i++) {
        mineWord
          .findOne({
            where: {
              user_id: selectedWords[i].user_id,
              word_eng: selectedWords[i].word_eng,
            },
          })
          .then((data) => {
            console.log("data::", data);
            //mineword distinguish 값 0으로 변경
            if (data) {
              mineWord.update(
                {
                  distinguish: 0,
                  check_in: new Date(),
                  check_out: new Date(),
                },
                {
                  where: {
                    id: data.id,
                  },
                }
              );
              res.status(201).json("register test success");
            } else {
              res.status(400).send("잘못된 요청");
            }
          });
      }
    } else {
      mineWord
        .findOne({
          where: {
            word_eng: selectedWords.word_eng,
          },
        })
        .then((data) => {
          //mineword distinguish 값 0으로 변경
          if (data) {
            mineWord.update(
              {
                distinguish: 0,
                check_in: new Date(),
                check_out: new Date(),
                // tDate.setDate(tDate.getDate() + 1),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else {
            res.status(400).send("잘못된 요청");
          }
        });
    }
  },
};
