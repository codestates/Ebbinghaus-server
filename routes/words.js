const express = require("express");
const router = express.Router();
const { wordsController } = require("../controller");

//나만의 영단어 등록
router.post("/mine/register", wordsController.mineWordRegister.post);

router.get("/mine", wordsController.mineWordList.get);

router.post("/mine/test-register", wordsController.mineTestRegister.post);

module.exports = router;
