const express = require("express");
const router = express.Router();
const { wordsController } = require("../controller");

// 나만의 영단어 리스트
router.get("/mine/:id", wordsController.mineWordList.get);

//나만의 영단어 등록
router.post("/mine/register", wordsController.mineWordRegister.post);

//나만의 영단어 테스트 등록
router.post("/mine/test-register", wordsController.mineTestRegister.post);

// 나만의 영단어 테스트 단어 조회 버튼
router.get("/mine/button", wordsController.mineWordTestButton.get);

//우선순위 영단어 리스트
router.get("/priority/:id", wordsController.priorityWordList.get);

//우선순위 영단어 테스트 등록
router.post(
  "/priority/test-register",
  wordsController.priorityTestRegister.post
);

// 우선순위 영단어 테스트 단어 조회 버튼
router.get("/priority/button", wordsController.priorityWordTestButton.get);

module.exports = router;
