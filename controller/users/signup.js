const { users } = require('../../models');

module.exports = async (req, res) => {
    const { ID, password } = req.body;

    let [users, created] = await users.findOrCreate({
        where: {
            ID 
        },
        defaults: {
            password
        }
    });

    if(!created) {
        return res.status(409).json({
            message: "This email already exists",
        })
    }
    return res.status(201).json({
        message: "Successfully registerd"
    })
}