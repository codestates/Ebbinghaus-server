const { user } = require("../../models");
const { generateToken } = require("../../lib/auth");
module.exports = {
  post: async (req, res) => {
    const { name, token } = req.body;
    if (token !== undefined) {
      let [data, created] = await user.findOrCreate({
        where: {
          name,
        },
      });
      //이미 구글연동으로 계정이 가입되어 있다면
      let users = await user.findOne({
        where: {
          name,
        },
      });
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
      res.status(200).json({
        id,
        name,
        accessToken,
      });
    }
  },
};
