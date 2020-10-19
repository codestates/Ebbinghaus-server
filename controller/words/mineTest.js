const { mineWord } = require("../../models");
const { time_pass } = require("../../models");

module.exports = {
  post: (req, res) => {
    let { id } = req.params;
    // console.log("userid", req.session.userid);

    if (id) {
      let { word_eng } = req.body;
      mineWord
        .findOne({
          where: {
            word_eng: word_eng,
          },
        })
        .then((data) => {
          //mineword distinguish 값 0으로 변경
          mineWord.update(
            {
              distinguish: 0,
            },
            {
              where: {
                id: data.id,
              },
            }
          );
        });

      mineWord
        .findOne({
          where: {
            word_eng: word_eng,
          },
        })
        .then((data) => {
          time_pass.create({
            mine_word_id: data.id,
          });
        });

      res.status(201).json("register test success");
    } else {
      res.status(400).send("잘못된 요청");
    }
  },
};

//

//클라이언트가 나만의 영단어에서 단어들을 선택하고 테스트 등록 버튼 누른다
//누르는 순간 서버는 post로 영단어를 받고 그 영단어를 time_passed 테이블에 distinguish가 0으로 새롭게 만든다.
//checkin: dis내릴때 사용  checkout: 테스트 볼때 사용: 현재 날짜의 일 + distinguish일 = chech out = updateAt + distinguish
//클라이언트가 테스트 실행을 하게되면 서버는 time_passed안에 있는 영단어 중 checkout을 검토(checkout이 지금 날짜보다 이전인 경우) 하여 오늘 테스트 해야 하는 단어를 클라이언트에게 보낸다.
//클라이언트가 정답을 맞출때  영단어를 post로 보내면, 서버는 그 영단어의 distinguish값을 0->1->3->7->15->30->100바꾸고 checkout도 기존 + distinguish로 바꾼다.
//시험을 지속해서 안봣을때 망각곡선을 기준으로 distinguish 값을 낮추고 checkout시간도 변경

//만약 distinguish 100으로 바꿔질때 completedword 테이블에 해당 영단어를 생성하고,  mineword의 distinguish: 99가 있는 그 영단어는 삭제한다.
