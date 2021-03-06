const express = require("express");
const router = express.Router();
const { wordTestController } = require("../controller");

//시험 시작
router.get("/:id", wordTestController.testing.get);

//시험 단어 통과

router.post("/pass", wordTestController.passTest.post);

module.exports = router;
