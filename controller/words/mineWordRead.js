const { mineWord } = require("../../models");

module.exports = {
  get: async (req, res) => {
    let { userid } = req.session;
    if (userid) {
      let data = await user.findOne({
        // where: { id: userid.id },
        include: [
          {
            model: mineWord,
          },

          {
            model: mineWord,
            include: {
              model: word_eng,
              word_kor,
            },
          },
        ],
      });

      let mineWordOfUser = data.mineWord.map((val) => val.mineWord_id);
      let userInfo = {
        mineWord: mineWordOfUser,
      };
      res.status(200).json(userInfo);
    } else {
      res.status(404).send("session not fonud");
    }
  },
};
