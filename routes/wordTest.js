const express = require("express");
const router = express.Router();
const { wordTestController } = require("../controller");

//시험 시작
router.get("/", wordTestController.testing.get);

//시험 단어 통과
//router.post("/test/pass", wordTestController.passTest.post);

module.exports = router;
