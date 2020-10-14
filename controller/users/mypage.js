const { user } = require("../../models");
const { mineWord } = require("../../models");

// 등록단어: minewords에서 등록한 단어
//  Test: 오늘 테스트할 단어
//  Doing: 테스트 중인 모든 단어
//  Finish: 30일까지 시험 다본 단어를 데이타 베이스에서 가져오기

module.exports = {
  get: async (req, res) => {
    let { userid } = req.session;
    if (userid) {
      let data = await user.findOne({
        where: { id: userid },
        include: [
          {
            model: mineWord,
          },

          {
            model: mineWord,
            include: {
              model: word_eng,
            },
          },
        ],
      });

      let mineWordOfUser = data.mineWords.map((val) => val.mineWord_id);
      let userInfo = {
        mineWord: mineWordOfUser,
      };
      res.status(200).json(userInfo);
    } else {
      res.status(404).send("session not fonud");
    }
  },
};
