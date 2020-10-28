const { mineWord } = require("../../models");

module.exports = {
  post: async (req, res) => {
    let data = await mineWord.create({
      user_id: req.body.user_id,
      word_eng: req.body.word_eng,
      word_kor: req.body.word_kor,
      word_theme: "mine",
      distinguish: 99,
    });
    if (data) {
      console.log("result:", data);
      res.status(201).json({ data });
    } else {
      res.status(400).send("잘못된 요청입니다.");
    }
  },
};

//req
//user_id if절 조건문에 있는지 확인
//있으면 바디에 있는 kor, eng를 받아서 데이타베이스에 넣는다.
//res 201 or 잘못된 요청
