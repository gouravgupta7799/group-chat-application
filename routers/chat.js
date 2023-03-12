const { response } = require('express');
let express = require('express');
let routers = express.Router();
let fs = require('fs');

routers.get('/chat', (req, res, next) => {
  let massage = fs.readFileSync('message.txt', 'utf-8');
  res.send(`<html>
  <body>
  <h1>welcome</h1>
  <h6>${massage}<h6>
  <form action="/chat" method="POST">
  <input type="text" name='message'>
  <button>send</button>
  </form>
  <script>
  let user = localStorage.getItem('user');
  let name = document.querySelector('input');
  name.name = user;
  </script>
  </body></html>`)
})

routers.post('/chat', (req, res, next) => {
  msg = JSON.stringify(req.body);
  fs.appendFile('message.txt', msg, err => {
    console.log(err)
  });
  res.redirect('/chat')
})


module.exports = routers;
