const { user } = require("../../models");
const { generateToken, checkRefreshToken } = require("../../lib/auth");

module.exports = {
  post: async (req, res) => {
    const { authType } = req.cookies;

    if (authType === "jwt") {
      const { refreshToken } = req.cookies;

      if (!refreshToken) {
        return res.status(401).json({
          message: "Refresh token does not exist",
        });
      }
      let users = await user.findOne({
        where: {
          id: req.users.id,
          refresh_token,
        },
      });
      if (!users) {
        return res.status(404).json({
          message: "Invalid account or Invalid refresh token",
        });
      }

      //refresh token 검증( + 유효 기간 검증)
      try {
        checkRefreshToken(refreshToken);
      } catch (e) {
        console.error("failed to check refresh token", e);

        if (e.name && e.name === "TokenExpiredError") {
          return res.status(403).json({
            err: {
              name: e.name,
              tokenType: "refreshToken",
            },
          });
        } else {
          return res.status(400).json({
            message: "Incorrect refresh token",
          });
        }
      }
      const accessToken = generateToken("accessToken", users.dataValues);
      res.status(200).json({
        accessToken,
      });
    }
  },
};
