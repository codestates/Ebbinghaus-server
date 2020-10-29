const {
  user,
  mineWord,
  user_priority_word,
  priorityWord,
} = require("../../models");
const sequelize = require("sequelize");
//   console.log("userid", req.session.userid);
//   time_pass.findAll({ raw: true }).then((data) => {
//     console.log("data", data);
module.exports = {
  get: (req, res) => {
    let { id } = req.params;
    if (id) {
      var aDate = new Date();
      var bDate = new Date();
      var cDate = new Date();
      var dDate = new Date();
      var eDate = new Date();
      var fDate = new Date();
      var gDate = new Date();
      var hDate = new Date();
      var iDate = new Date();
      var jDate = new Date();
      //첫번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: id,
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
            id: id,
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
            id: id,
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
            id: id,
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
            id: id,
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
      //우선순위 첫번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: id,
          },
        })
        .then((data) => {
          user_priority_word.update(
            {
              distinguish: 0,
            },
            {
              where: {
                user_id: data.id,
                distinguish: 1,
                check_out: {
                  [sequelize.Op.lt]: fDate.setDate(fDate.getDate() - 2),
                },
              },
            }
          );
        });
      //우선순위 두번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: id,
          },
        })
        .then((data) => {
          user_priority_word.update(
            {
              distinguish: 1,
            },
            {
              where: {
                user_id: data.id,
                distinguish: 3,
                check_out: {
                  [sequelize.Op.lt]: gDate.setDate(gDate.getDate() - 4),
                },
              },
            }
          );
        });
      //우선순위 세번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: id,
          },
        })
        .then((data) => {
          user_priority_word.update(
            {
              distinguish: 3,
            },
            {
              where: {
                user_id: data.id,
                distinguish: 7,
                check_out: {
                  [sequelize.Op.lt]: hDate.setDate(hDate.getDate() - 8),
                },
              },
            }
          );
        });
      //우선순위 네번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: id,
          },
        })
        .then((data) => {
          user_priority_word.update(
            {
              distinguish: 7,
            },
            {
              where: {
                user_id: data.id,
                distinguish: 15,
                check_out: {
                  [sequelize.Op.lt]: iDate.setDate(iDate.getDate() - 15),
                },
              },
            }
          );
        });
      //우선순위 다섯번째 distinguish 낮추기
      user
        .findOne({
          where: {
            id: id,
          },
        })
        .then((data) => {
          user_priority_word.update(
            {
              distinguish: 15,
            },
            {
              where: {
                user_id: data.id,
                distinguish: 30,
                check_out: {
                  [sequelize.Op.lt]: jDate.setDate(jDate.getDate() - 28),
                },
              },
            }
          );
        });

      // 테스트 실행
      user
        .findOne({
          raw: true,
          where: {
            id: id,
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
                distinguish: {
                  [sequelize.Op.or]: [0, 1, 3, 7, 15, 30],
                },
              },
              attributes: [
                ["id", "word_id"],
                "user_id",
                "word_eng",
                "word_kor",
                "word_theme",
              ],
            })
            .then((mine) => {
              console.log("마인!!!!!!!!!", mine);
              priorityWord
                .findAll({
                  include: {
                    model: user_priority_word,
                    where: {
                      user_id: id,
                      check_out: {
                        [sequelize.Op.lt]: new Date(),
                      },
                      distinguish: {
                        [sequelize.Op.or]: [0, 1, 3, 7, 15, 30],
                      },
                    },
                  },
                  attributes: {
                    include: [
                      [
                        sequelize.literal(
                          `(SELECT id FROM user_priority_words WHERE user_id = ${id} and check_out < curtime()
                           and distinguish in (0, 1, 3, 7, 15, 30)
                           and priority_word_id = priorityWord.id)`
                        ),
                        "word_id",
                      ],
                    ],
                  },
                })
                .then((priority) => {
                  priority = JSON.parse(JSON.stringify(priority)).map((el) => {
                    delete el.user_priority_words;
                    return el;
                  });
                  let array = [];
                  let result = array.concat(mine, priority);
                  // console.log("리절트!!!!!!!!!", result);
                  if (result) {
                    res.status(200).json(result);
                  } else {
                    res.status(400).json("fail");
                  }
                });
            });
        });
    }
  },
};
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// function getRandomArray(min, max, count) {
//   // 종료
//   if (max - min + 1 < count) return;
//   // 배열 생성
//   var rst = [];
//   while (1) {
//     var index = getRandom(min, max);
//     // 중복 여부를 체크
//     if (rst.indexOf(index) > -1) {
//       continue;
//     }
//     rst.push(index);
//     // 원하는 배열 갯수가 되면 종료
//     if (rst.length == count) {
//       break;
//     }
//   }
//   // 정렬
//   return rst.sort(function (a, b) {
//     return a - b;
//   });
// }
// let mmm = priorityWord
//   .findAll({
//     raw: true,
//     where: {
//       id: {
//         [sequelize.Op.or]: [1, 2, 3, 4, 5],
//         // getRandomArray(1, 24, 5),
//       },
//     },
//     attributes: ["word_kor"],
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       element.word_kor;
//     });
//   });
