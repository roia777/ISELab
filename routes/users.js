var express = require('express');
var router = express.Router();
let login = require("../databases/db");
let bodyParser = require('body-parser');


router.post('/', function(req, res, next) {
  let user = req.body.username;
  let pw = req.body.password;
  res.send('test test a resource');
});

module.exports = router;
