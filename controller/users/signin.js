const { user } = require("../../models");
const { generateToken, checkPassword } = require("../../lib/auth");
module.exports = {
  post: async (req, res) => {
    const { name, password } = req.body;

    let users = await user.findOne({
      where: {
        name,
      },
    });

    if (!users) {
      return res.status(404).json({
        message: "name does not exist",
      });
    }
    if (!checkPassword(users, password.trim())) {
      return res.status(404).json({
        message: "password incorrect",
      });
    }

    let accessToken;
    let refreshToken;
    try {
      accessToken = generateToken("access_token", users.dataValues);
      refreshToken = generateToken("refresh_token", users.dataValues);
    } catch (error) {
      console.error("Failed to generate token: ", error);
      return res.sendStatus(500);
    }

    users.refresh_token = refreshToken;
    users.save({ fields: ["refresh_token"] });

    const { id } = users.dataValues;

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    res.cookie("authType", "jwt");
    console.log("cookie맛있어:", req.cookies);

    res.status(200).json({
      id,
      name,
      accessToken,
    });
  },
};

//세션 넣기 값이 잘 들어갔는지 확인
