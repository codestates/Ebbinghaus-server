const express = require("express");
const router = express.Router();
const { usersController } = require("../controller");
const { authMiddleware } = require("../lib/auth");

// *POST /user/signup
router.post("/signup", usersController.signup.post);

// *POST /user/signin
router.post("/signin", usersController.signin.post);

// *POST /user/signout
router.post("/signout", authMiddleware, usersController.signout.post);

// *GET /user/todaytesting
router.get("/todaytesting", authMiddleware, usersController.todaytesting.get);

// *GET /user/donetested
router.get("/donetested", authMiddleware, usersController.donetested.get);

// *GET /user/beingtested
router.get("/beingtested", authMiddleware, usersController.beingtested.get);

// *POST /user/refresh
router.post("/refresh", authMiddleware, usersController.refresh.post);

router.get("/check", authMiddleware, usersController.check.get);

module.exports = router;
