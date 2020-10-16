const { user, mineWord, time_pass } = require("../../models");

//   console.log("userid", req.session.userid);
//   time_pass.findAll({ raw: true }).then((data) => {
//     console.log("data", data);
module.exports = {
  get: (req, res) => {
    let { userid } = req.session;
    if (userid) {
      mineWord
        .findAll({
          raw: true,
          where: {
            distinguish: 0,
          },
          // where: {  checkout: 0, },
        })
        .then((data2) => {
          if (data2) {
            res.status(200).json(data2);
          } else {
            res.status(404).send("잘못됬어");
          }
        })
        .catch((err) => console.error("error", err));
      //   });
    }
  },
};

//일단 time passes에 있는 모든값을 부르기
//가져올 단어는 timepassed.mineword_id의 필드!

// SELECT DATE_ADD(NOW(), INTERVAL data.distingush DAY);
// 3. 클라이언트가 테스트 실행을 하게되면 서버는 time_passed안에 있는 영단어 중
//  checkout을 검토(checkout이 지금 날짜보다 이전인 경우)하여
//  오늘 테스트 해야 하는 단어를 클라이언트에게 보낸다.

// console.log("userid", req.session.userid);
//       //   time_pass
//       //     .findAll({ raw: true })
//       //     .then((data) => {
//       console.log("data", data);
//       mineWord
//         .findAll({
//           where: {
//             id: 1,
//           },
//         })
//         // })
//         .then((data) => {
//           if (data) {
//             res.status(200).json(data);
//           } else {
//             res.status(404).send("잘못됬어");
//           }
//         })
//         .catch((err) => console.error("error", err));
