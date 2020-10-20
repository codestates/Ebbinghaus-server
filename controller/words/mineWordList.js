const { user, mineWord } = require("../../models");

module.exports = {
  get: (req, res) => {
    let { id } = req.params;

    if (id) {
      user
        .findOne({
          where: {
            id: id,
          },
        })
        .then((data) => {
          mineWord
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
                res.status(200).json(data);
              } else {
                res.status(404).send("잘못됬어");
              }
            })
            .catch((err) => console.error("error", err));
        });
    }
  },
};
