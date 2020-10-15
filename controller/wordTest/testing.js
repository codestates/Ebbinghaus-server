const { user, mineWord } = require("../../models");

module.exports = {
  get: (req, res) => {
    let { userid } = req.session;
    if (userid) {
      res.status(200).json("라우터 연결 완료");
    } else {
      res.status(400).send("잘못된 요청");
    }
  },
};
