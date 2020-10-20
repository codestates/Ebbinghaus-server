const { priorityWord, user_priority_word } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { id } = req.params;
    // console.log("userid", req.session.userid);
    //유저 아이디 확인
    //조인 테이블에 해당 필드 다찾기
    //해당 필드에 해당되는 priorityword테이블에서 단어 찾아서 보내기

    if (id) {
      let { selectedWords } = req.body;
      // console.log("바디값", req.body);
      // if (Array.isArray(selectedWords)) {
      //   for (let i = 0; i < selectedWords.length; i++) {
      //     user_priority_word
      //       .update(
      //         {
      //           user_id: selectedWords[i].id,

      array.forEach((element) => {
        priorityWord
          .findOne({
            raw: true,
            where: {
              word_eng: selectedWords.word_eng,
            },
          })
          .then((data) => {
            user_priority_word
              .update(
                {
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
    }
  },
};
