const { user } = require("../../models");

module.exports = async (req, res) => {
  const { name, password } = req.body;

  let users = await user.findOne({
    where: {
      name,
      password,
    },
  });

  if (!users) {
    return res.status(404).json({
      message: "Email does not exist",
    });
  }
  return res.status(200).json({
    message: "Success signin",
  });
};
