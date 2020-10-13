const { mineWord } = require('../../models');

module.exports = {
    post : (req, res) => {
      const {user_id} = req.params.id;
      const {word_eng, word_kor, distinguish} = req.body
    }
}