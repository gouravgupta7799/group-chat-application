let express = require("express");
let app = express();
let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));

let form = require('./routers/routes.js');
let chat = require('./routers/chat.js');

app.use(form);
app.use(chat);

app.use('/', (req, res, next) => {
  res.send('<h1>hello</h1>')
})

app.listen(4000);

