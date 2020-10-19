const { user, priorityWord, user_priority_word } = require("../../models");

module.exports = {
  get: (req, res) => {
    let { userid } = req.session;
    if (userid) {
      console.log("user:", userid);
      user
        .findOne({
          where: {
            id: userid.id,
          },
        })
        .then((data) => {
          if (data) {
            user_priority_word
              .findAll({
                raw: true,
                where: {
                  user_id: data.id,
                  distinguish: 99,
                },
                order: [["id", "DESC"]],
              })
              .then((data) => {
                if (data) {
                  console.log("데이타", data);
                  priorityWord
                    .findAll({
                      raw: true,
                      where: {
                        id: data.priority_word_id,
                      },
                    })
                    .then((data) => {
                      console.log("데이타", data);
                      if (data) {
                        res.status(200).json(data);
                      } else {
                        res.status(404).send("잘못됬어");
                      }
                    })
                    .catch((err) => console.error("error", err));
                }
              });
          }
        });
    }
  },
};
