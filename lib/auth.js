require("dotenv").config();
const crypto = require("crypto");
const { user } = require("../models");
const jwt = require("jsonwebtoken");

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;
const [iteration, keylen, alg] = [100514, 64, "sha256"];

const checkAuth = (req, res, next) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(401).json({
      message: "Access token does not exist",
    });
  }
  const token = header.split(" ")[1];
  const isRefresh = req.path === "/refresh";
  console.log("is refresh: ", req.path, isRefresh);

  jwt.verify(token, ACCESS_TOKEN_SECRET, async (err, payload) => {
    if (err) {
      res.status(401).json({ error: "Auth Error from checkAuth" });
    }
    if (!payload && isRefresh) {
      payload = jwt.decode(token);
    }
    let users = await user.findByPk(payload.id);
    if (!users) {
      return res.status(400).json({
        message: "Invalid account",
      });
    }
    req.users = users;
    next();
  });
};

//auth 미들웨어 함수
exports.authMiddleware = (req, res, next) => {
  const { authType } = req.cookies;
  if (authType === "jwt") {
    return checkAuth(req, res, next);
  }
};

// -- helper --

//토큰 생성 함수
exports.generateToken = (type, payload) => {
  const { id, name, createdAt } = payload;

  if (type === "access_token") {
    return jwt.sign({ id, name, createdAt }, ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
  } else if (type === "refresh_token") {
    return jwt.sign({ id, name, createdAt }, REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
  }
};

//회원가입 관련 비밀번호 해싱 함수
exports.setPassword = (password) => {
  try {
    const buf = crypto.randomBytes(64);
    const salt = buf.toString("base64");
    const newPassword = crypto
      .pbkdf2Sync(password, salt, iteration, keylen, alg)
      .toString("base64");
    console.log("newUsers: ", [newPassword, salt]);
    return [newPassword, salt];
  } catch (e) {
    console.log(e);
  }
};

//회원가입에서 해싱된 비밀번호를 알아보기 위함 또는 확인하는 함수
exports.checkPassword = (users, password) => {
  const hashedPassword = crypto
    .pbkdf2Sync(password, users.salt, iteration, keylen, alg)
    .toString("base64");
  return hashedPassword === users.password;
};

// refresh token 확인하는 함수
exports.checkRefreshToken = (refreshToken) => {
  console.log("checkRefresh", refreshToken);
  return jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
};

/*

const checkAuth = (req, res, next) => {
  const header = req.headers["authorization"];

  if (!header) {
    res.status(401).json({ error: "Auth Error from checkAuth header" });
  }
  const token = header.split(" ")[1];

  jwt.verify(token, ACCESS_TOKEN_SECRET, async (err, payload) => {
    if (err.name && err.name === "JsonWebTokenError") {
      return res.status(400).json({
        name: err.name,
        message: "Incorrect access token",
      });
    }
    console.log("verify: ", payload);
    payload = jwt.decode(token);

    console.log("payload:", payload);
    let users = await user.findByPk(payload.id);

    if (!users) {
      return res.status(400).json({
        message: "Invalid account",
      });
    }

    req.users = users;

    console.log("check: ", req.users);
    next();
  });
};
*/
