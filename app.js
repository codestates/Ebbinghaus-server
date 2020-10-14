require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./routes/users");
const wordsRouter = require("./routes/words");
const bodyParser = require("body-parser");
const secret = process.env.SESS_SECRET;
const session = require("express-session");
const app = express();
const port = 4000;

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Success");
});

app.use("/user", usersRouter);
app.use("/word", wordsRouter);

app.set("port", port);
app.listen(port, () => {
  console.log(`app is listing ${port}`);
});

module.exports = app;

//express ssession
//midle ware
//cookie partser 설정
// 스프린트때 solt값넣는 hooks
