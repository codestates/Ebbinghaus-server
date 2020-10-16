const { mineWord } = require("../../models");
const { time_pass } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { userid } = req.session;
    // console.log("userid", req.session.userid);
    var tDate = new Date("2022-07-10 12:30");
    if (userid) {
      let { word_eng } = req.body;
      mineWord
        .findOne({
          where: {
            word_eng: word_eng,
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

      // mineWord
      //   .findOne({
      //     where: {
      //       word_eng: word_eng,
      //     },
      //   })
      //   .then((data) => {
      //     time_pass.create({
      //       mine_word_id: data.id,
      //     });
      //   });
    }
  },
};
