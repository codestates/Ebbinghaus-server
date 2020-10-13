const { user } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { name, password } = req.body;

    let users = await user.findOne({ where: { name, password } });

    if (users) {
      req.session.userid = { id: users.id };
      res.status(200).json(users.name);
    } else {
      res.status(404).send("User is not invalid.");
    }
  },
};

//세션 넣기 값이 잘 들어갔는지 확인
