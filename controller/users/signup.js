const { user } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { name, password } = req.body;
    console.log("reqBody:", req.body);
    let [users, created] = await user.findOrCreate({
      where: {
        name,
      },
      defaults: {
        password,
      },
    });
    if (!created) {
      return res.status(409).json({
        message: "This email already exists",
      });
    }
    return res.status(201).json({
      message: "Successfully registerd",
    });
  },
};

// module.exports = async (req, res) => {
//     const { name, password } = req.body;

//     let [user, created] = await users.findOrCreate({
//         where: {
//             name
//         },
//         defaults: {
//             password
//         }
//     });

//     if (!created) {
//         return res.status(409).json({
//             message: "This email already exists",
//         })
//     }
//     return res.status(201).json({
//         message: "Successfully registerd"
//     })
// }
