const { User } = require('../../models');

module.exports = async (req, res) => {
    const { name, password } = req.body;

    let user = await User.findOne({
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