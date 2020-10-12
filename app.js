const express = require('express')
const morgan = require('morgan');

const app = express();
 const port = 4000;


app.use(morgan('dev'));

app.get('/', (req,res) => {
   res.status(200).send('Success')
})


app.set('port', port);
app.listen(port, () => {
   console.log(`app is listing ${port}`)
})

module.exports = app;