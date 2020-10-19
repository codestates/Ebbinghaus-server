const { user, mineWord } = require("../../models");
const sequelize = require("sequelize");

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
                distinguish: {
                  [sequelize.Op.or]: [0, 1, 3, 7, 15, 100],
                },
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
