const { user, mineWord, time_pass } = require("../../models");
const sequelize = require("sequelize");

//   console.log("userid", req.session.userid);
//   time_pass.findAll({ raw: true }).then((data) => {
//     console.log("data", data);
module.exports = {
  get: (req, res) => {
    let { userid } = req.session;

    if (userid) {
      var aDate = new Date();
      var bDate = new Date();
      var cDate = new Date();
      var dDate = new Date();
      var eDate = new Date();

      //첫번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: userid.id,
          },
        })
        .then((data) => {
          if (data) {
            mineWord
              .update(
                {
                  distinguish: 0,
                },
                {
                  where: {
                    user_id: data.id,
                    distinguish: 1,
                    check_out: {
                      [sequelize.Op.lt]: aDate.setDate(aDate.getDate() - 2),
                    },
                  },
                }
              )
              .catch((err) => console.error("error", err));
            // console.log("data5", data5);
          }
        });

      //두번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: userid.id,
          },
        })
        .then((data) => {
          if (data) {
            mineWord
              .update(
                {
                  distinguish: 1,
                },
                {
                  where: {
                    user_id: data.id,
                    distinguish: 3,
                    check_out: {
                      [sequelize.Op.lt]: bDate.setDate(bDate.getDate() - 4),
                    },
                  },
                }
              )
              .catch((err) => console.error("error", err));
            // console.log("data5", data5);
          }
        });

      //세번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: userid.id,
          },
        })
        .then((data) => {
          if (data) {
            mineWord
              .update(
                {
                  distinguish: 3,
                },
                {
                  where: {
                    user_id: data.id,
                    distinguish: 7,
                    check_out: {
                      [sequelize.Op.lt]: cDate.setDate(cDate.getDate() - 8),
                    },
                  },
                }
              )
              .catch((err) => console.error("error", err));
            // console.log("data5", data5);
          }
        });

      //네번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: userid.id,
          },
        })
        .then((data) => {
          if (data) {
            mineWord
              .update(
                {
                  distinguish: 7,
                },
                {
                  where: {
                    user_id: data.id,
                    distinguish: 15,
                    check_out: {
                      [sequelize.Op.lt]: dDate.setDate(dDate.getDate() - 15),
                    },
                  },
                }
              )
              .catch((err) => console.error("error", err));
            // console.log("data5", data5);
          }
        });

      //다섯번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: userid.id,
          },
        })
        .then((data) => {
          if (data) {
            mineWord
              .update(
                {
                  distinguish: 15,
                },
                {
                  where: {
                    user_id: data.id,
                    distinguish: 30,
                    check_out: {
                      [sequelize.Op.lt]: eDate.setDate(eDate.getDate() - 28),
                    },
                  },
                }
              )
              .catch((err) => console.error("error", err));
            // console.log("data5", data5);
          }
        });

      //테스트 실행
      user
        .findOne({
          where: {
            id: userid.id,
          },
        })
        .then((data1) => {
          mineWord
            .findAll({
              raw: true,
              where: {
                user_id: data1.id,
                check_out: {
                  [sequelize.Op.lt]: new Date(),
                },
                // check_out: < new Date()
              },
              // where: {  checkout: 0, },
            })
            .then((data2) => {
              // console.log("체크아웃", data2);
              if (data2) {
                res.status(200).json(data2);
              } else {
                res.status(404).send("잘못됬어");
              }
            })
            .catch((err) => console.error("error", err));
        });

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

// const insertCheckout = async (data2) => {
//   await data2.forEach((checkOutName) => {
//     if (checkOutName) {
//       mineWord
//         .findOne({
//           raw: true,
//           where: {
//             check_out: checkOutName,
//           },
//         })
//         .then((data) => {
//           return data.check_out;
//         });
//     }
//   });
// };
