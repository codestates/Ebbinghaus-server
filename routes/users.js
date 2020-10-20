const express = require("express");
const router = express.Router();
const { usersController } = require("../controller");
const { authMiddleware } = require("../lib/auth");

// *POST /user/signup
router.post("/signup", usersController.signup.post);

// *POST /user/signin
router.post("/signin", usersController.signin.post);

// *POST /user/signout
router.post("/signout", usersController.signout.post);

// *GET /user/mypage
router.get("/mypage", authMiddleware, usersController.mypage.get);

// *POST /user/refresh
router.post("/refresh", authMiddleware, usersController.refresh.post);

module.exports = router;
