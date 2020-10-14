module.exports = {
  post: (req, res) => {
    if (req.session.destroy()) {
      res.status(200).send("로그아웃 되었습니다");
    } else {
      res.status(400).send("로그아웃 잘못된 요청");
    }
  },
};
