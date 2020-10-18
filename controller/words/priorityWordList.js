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
            priorityWord
              .findAll()
              .then((data) => {
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
  },
};
