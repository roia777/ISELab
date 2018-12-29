let express = require('express');
let app = express();
let login = require("../databases/db");
let bodyParser = require('body-parser');


// app.post('/', function(req, res, next) {
//     let user1 = req.body.username;
//     let pw1 = req.body.password;
//     let user =  login({"username" : user1, "password" : pw1});
//     user.then(function (u) {
//         if (u){
//             res.send("ok");
//             console.log("is ok");
//
//         } else {
//             res.send("error");
//         }
//     })
//
// });

app.post('/', function (req, res, next) {
    let user1 = req.body.username;
    let pw1 = req.body.password;
    if (user1 == 'itzik' && pw1 == '1234') {res.send( 'Successfully logged in!');}
    else{
    res.send('user name or password was incorrect!');}
})

module.exports = app;
