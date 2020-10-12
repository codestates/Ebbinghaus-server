const { users } = require('../../models/users');

module.exports = async (req, res) => {
    const { name, password } = req.body;

    let [user, created] = await users.findOrCreate({
        where: {
            name
        },
        defaults: {
            password
        }
    });

    if (!created) {
        return res.status(409).json({
            message: "This email already exists",
        })
    }
    return res.status(201).json({
        message: "Successfully registerd"
    })
}