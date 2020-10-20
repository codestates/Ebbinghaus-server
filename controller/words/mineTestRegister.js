const { mineWord } = require("../../models");
const { Op } = require("sequelize");
module.exports = {
  post: (req, res) => {
    // let { userid } = req.session;
    // console.log("userid", req.session.userid);
    // var tDate = new Date("2022-07-10 12:30");
    let { selectedWords, id } = req.body;
    let selectWord_EngList = selectedWords.map((el) => {
      return el.word_eng;
    });
    console.log("selectWordList -> ", selectWord_EngList);
    if (Array.isArray(selectedWords)) {
      mineWord
        .update(
          {
            distinguish: 0,
            check_in: new Date(),
            check_out: new Date(),
          },
          {
            where: {
              user_id: id,
              distinguish: 99,
              word_eng: {
                [Op.in]: selectWord_EngList,
              },
            },
          }
        )
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((e) => {
          res.sendStatus(500);
        });
    }
  },
};
