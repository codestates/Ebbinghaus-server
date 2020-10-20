const { user } = require("../../models");
const { setPassword } = require("../../lib/auth");

module.exports = {
  post: async (req, res) => {
    const { name, password } = req.body;

    const [hashedPassword, salt] = setPassword(password);
    console.log("signupHashed: ", salt);
    let [users, created] = await user.findOrCreate({
      where: {
        name,
      },
      defaults: {
        password: hashedPassword,
        salt,
      },
    });
    console.log("password:", password);
    if (!created) {
      return res.status(409).json({
        message: "This email already exists",
      });
    }
    return res.status(201).json({
      message: "Successfully registerd",
    });
  },
};
