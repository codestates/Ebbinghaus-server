const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routes/users');
//const wordsRouter = require('./routes/words');
const bodyParser = require('body-parser');

//const cookieParser = require('cookie-parser');
//const session = require('express-session');

const app = express();
const port = 4000;

app.use(morgan('dev'));
app.use(bodyParser.json())
//app.use(cookieParser());


app.get('/', (req,res) => {
   res.status(200).send('Success')
})

app.use('/user', usersRouter);
//app.use('/word', wordsRouter);

app.set('port', port);
app.listen(port, () => {
   console.log(`app is listing ${port}`)
})

module.exports = app;