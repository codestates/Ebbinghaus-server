const { mineWord, user_priority_word, priorityWord } = require("../../models");

module.exports = {
  post: (req, res) => {
    // let { id } = req.params;
    //mineword와 priorityword의 charactor 속성 넣기 문자열로 각각 넣기
    //시더도 바꾸기
    //charactor 구별해서 라우팅하기
    // if (id) {

    let { selectedWords, id } = req.body;
    var tDate = new Date();

    selectedWords.forEach((element) => {
      priorityWord
        .findOne({
          raw: true,
          where: {
            word_eng: element.word_eng,
          },
        })
        .then((priority) => {
          user_priority_word
            .findOne({
              raw: true,
              where: {
                user_id: id,
                priority_word_id: priority.id,
              },
            })
            .then((data) => {
              console.log("데이타데이터", data);
              if (data.distinguish === 0) {
                user_priority_word.update(
                  {
                    distinguish: 1,
                    check_out: tDate.setDate(tDate.getDate() + 1),
                    // date.setDate(date.getDate + 1)
                  },
                  {
                    where: {
                      id: data.id,
                    },
                  }
                );
                res.status(201).json("register test success");
              } else if (data.distinguish === 1) {
                user_priority_word.update(
                  {
                    distinguish: 3,
                    check_out: tDate.setDate(tDate.getDate() + 2),
                  },
                  {
                    where: {
                      id: data.id,
                    },
                  }
                );
                res.status(201).json("register test success");
              } else if (data.distinguish === 3) {
                user_priority_word.update(
                  {
                    distinguish: 7,
                    check_out: tDate.setDate(tDate.getDate() + 4),
                  },
                  {
                    where: {
                      id: data.id,
                    },
                  }
                );
                res.status(201).json("register test success");
              } else if (data.distinguish === 7) {
                user_priority_word.update(
                  {
                    distinguish: 15,
                    check_out: tDate.setDate(tDate.getDate() + 8),
                  },
                  {
                    where: {
                      id: data.id,
                    },
                  }
                );
                res.status(201).json("register test success");
              } else if (data.distinguish === 15) {
                user_priority_word.update(
                  {
                    distinguish: 30,
                    check_out: tDate.setDate(tDate.getDate() + 15),
                  },
                  {
                    where: {
                      id: data.id,
                    },
                  }
                );
                res.status(201).json("register test success");
              } else if (data.distinguish === 30) {
                user_priority_word.update(
                  {
                    distinguish: 100,
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
        });

      mineWord
        .findOne({
          where: {
            user_id: id,
            word_eng: element.word_eng,
          },
        })
        .then((data) => {
          if (data.distinguish === 0) {
            mineWord.update(
              {
                distinguish: 1,
                check_out: tDate.setDate(tDate.getDate() + 1),
                // date.setDate(date.getDate + 1)
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 1) {
            mineWord.update(
              {
                distinguish: 3,
                check_out: tDate.setDate(tDate.getDate() + 2),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 3) {
            mineWord.update(
              {
                distinguish: 7,
                check_out: tDate.setDate(tDate.getDate() + 4),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 7) {
            mineWord.update(
              {
                distinguish: 15,
                check_out: tDate.setDate(tDate.getDate() + 8),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 15) {
            mineWord.update(
              {
                distinguish: 30,
                check_out: tDate.setDate(tDate.getDate() + 15),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 30) {
            mineWord.update(
              {
                distinguish: 100,
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
    });
  },
};
