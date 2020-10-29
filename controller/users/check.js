const { user } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const { id } = req.users;
    try {
      let users = await user.findOne({
        where: { id: id },
        attributes: ["id", "name", "access_token"],
      });
      console.log("users:", users);
      if (!users) throw Error("유저가 존재하지 않습니다.");
      res.send(users);
    } catch (e) {
      console.log("error:", e);
      res.status(400), json({ message: e.message });
    }
  },
};
