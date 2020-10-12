const { users } = require('../../models');

module.exports = async (req, res) => {
    const { ID, password } = req.body;

    let user = await users.findOne({
        where: {
            email,
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