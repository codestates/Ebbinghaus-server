const express = require("express");
const router = express.Router();
const { usersController } = require("../controller");

// *POST /user/signup
router.post("/signup", usersController.signup.post);

// *POST /user/signin
router.post("/signin", usersController.signin.post);

// *POST /user/signout
router.post("/signout", usersController.signout.post);

// *GET /user/mypage
router.get("/mypage", usersController.mypage.get);

module.exports = router;
