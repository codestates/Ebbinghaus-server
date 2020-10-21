const { mineWord, priorityWord } = require("../../models");
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
            wrong_word: "",
            // [ { word_kor: '나는' },
            // { word_kor: '너는, 너를 ,너희들은(를)' },
            // { word_kor: '그는,그가' },
            // { word_kor: '간다' },
            // { word_kor: '우리들은' } ],
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
          res.status(200).json("register test success");
        })
        .catch((e) => {
          res.sendStatus(500);
        });
    }
  },
};
