const express = require("express");
const router = express.Router();
const { wordsController } = require("../controller");

// 나만의 영단어 리스트
router.get("/mine", wordsController.mineWordList.get);

//나만의 영단어 등록
router.post("/mine/register", wordsController.mineWordRegister.post);

//나만의 영단어 테스트 등록
router.post("/mine/test-register", wordsController.mineTestRegister.post);

module.exports = router;
