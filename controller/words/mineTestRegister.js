const { mineWord } = require("../../models");
const { time_pass } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { userid } = req.session;
    // console.log("userid", req.session.userid);

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
          mineWord.update(
            {
              distinguish: 0,
            },
            {
              where: {
                id: data.id,
              },
            }
          );
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

      res.status(201).json("register test success");
    } else {
      res.status(400).send("잘못된 요청");
    }
  },
};
