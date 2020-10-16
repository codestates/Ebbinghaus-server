const { mineWord } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { userid } = req.session;

    if (userid) {
      let { word_eng } = req.body;
      var tDate = new Date();

      mineWord
        .findOne({
          where: {
            word_eng: word_eng,
          },
        })
        .then((data) => {
          if (data.distinguish === 0) {
            mineWord.update(
              {
                distinguish: 1,
                check_out: tDate.setDate(tDate.getDate() + 1),
                // date.setDate(date.getDate + 1)
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 1) {
            mineWord.update(
              {
                distinguish: 3,
                check_out: tDate.setDate(tDate.getDate() + 3),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 3) {
            mineWord.update(
              {
                distinguish: 7,
                check_out: tDate.setDate(tDate.getDate() + 7),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 7) {
            mineWord.update(
              {
                distinguish: 15,
                check_out: tDate.setDate(tDate.getDate() + 15),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 15) {
            mineWord.update(
              {
                distinguish: 30,
                check_out: tDate.setDate(tDate.getDate() - 100),
              },
              {
                where: {
                  id: data.id,
                },
              }
            );
            res.status(201).json("register test success");
          } else if (data.distinguish === 30) {
            mineWord.update(
              {
                distinguish: 100,
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
    }
  },
};
