const { users } = require('../../models/users');

module.exports = async (req, res) => {
    const { name, password } = req.body;

    let user = await users.findOne({
        where: {
            name,
            password
        }
    });

    if (!user) {
        return res.status(404).json({
            message: "Email does not exist"
        })
    }
    return res.status(200).json({
        message: "Success signin"
    })

}