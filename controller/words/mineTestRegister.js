const { mineWord } = require("../../models");
const { time_pass } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { userid } = req.session;
    // console.log("userid", req.session.userid);
    var tDate = new Date("2022-07-10 12:30");
    if (userid) {
      let array = req.body;
      if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
          mineWord
            .findOne({
              where: {
                word_eng: array[i].word_eng,
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
      } else {
        mineWord
          .findOne({
            where: {
              word_eng: array.word_eng,
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
    }
  },
};
