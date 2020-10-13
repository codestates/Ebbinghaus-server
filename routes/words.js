const express = require('express');
const router = express.Router();
const { wordsController } = require('../controller');


//나만의 영단어
router.get('/mine', wordsController)

//나만의 정렬 버튼
router.get('/mine/regiser', wordsController)

//나만의 영단어 등록
router.post('/mine/regiser', wordsController)