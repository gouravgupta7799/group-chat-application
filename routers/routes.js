let express = require('express');
let routes = express.Router();

routes.get("/login", (req, res, next) => {
  res.send(`<html>
  <body>
  <form action="/login" method="POST">
  <input type="text" Id="name" name="name">
  <button Id="submitbtn" type="submit">click</button>
  </form>
  <script>

  document.getElementById('submitbtn').addEventListener('click',() => {
    let name = document.getElementById('name').value;
    localStorage.setItem('user',name);
 })
  </script>
  </body>
  </html>`);
})
routes.post("/login", (req, res, next) => {
  res.redirect('/chat')
})

module.exports = routes;
