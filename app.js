const express = require('express');
const cookieParser = require('cookie-parser');
//const session = require('express-session');
const morgan = require('morgan');
const usersRouter = require('./routes/users');

//require('dotenv').config();

const app = express();
const port = 4000;

app.use(cookieParser());
app.use(morgan('dev'));

app.get('/', (req,res) => {
   res.status(200).send('Success')
})

app.use('/user', usersRouter);

app.set('port', port);
app.listen(port, () => {
   console.log(`app is listing ${port}`)
})

module.exports = app;