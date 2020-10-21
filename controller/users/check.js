const { user } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      let users = await user.findOne({
        where: { id: users.id },
        attributes: ["id", "name"],
      });
      if (!users) throw Error("유저가 존재하지 않습니다.");
      res.json(users);
    } catch (e) {
      console.log("error:", e);
      res.status(400), json({ message: e.message });
    }
  },
};
