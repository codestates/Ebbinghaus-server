const { mineWord } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { selectedWords, id } = req.body;
    let selectWord_EngList = selectedWords.map((el) => {
      return el.word_eng;
    });
    console.log("셀렉트워드", selectedWords);

    mineWord
      .destroy({
        where: {
          user_id: id,
          word_eng: selectWord_EngList,
        },
      })
      .then((data) => {
        if (data) {
          res.status(201).json("삭제되었습니다");
        } else {
          res.status(400).send("잘못된 요청입니다.");
        }
      });
  },
};

//req
//user_id if절 조건문에 있는지 확인
//있으면 바디에 있는 kor, eng를 받아서 데이타베이스에 넣는다.
//res 201 or 잘못된 요청
