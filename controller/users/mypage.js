const { user, mineWord } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const { id } = req.users;

    user.findByPk(id).then((data) => {
      mineWord
        .findAll({
          raw: true,
          where: {
            user_id: data.id,
            distinguish: 99,
          },
          order: [["id", "DESC"]],
        })
        .then((data1) => {
          if (data1) {
            res.status(200).json(data);
          } else {
            res.status(404).send("잘못됬어");
          }
        })
        .catch((err) => console.error("error", err));
    });
  },
};
