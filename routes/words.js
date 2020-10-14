const express = require("express");
const router = express.Router();
const { wordsController } = require("../controller");

//나만의 영단어 등록
router.post("/mine/register", wordsController.mineWord.post);

module.exports = router;
