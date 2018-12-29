let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ex5');

let userSchemas = new mongoose.Schema({
    username: String,
    password: String
});

let users = mongoose.model('users', userSchemas);

// function func() {
//     new users({
//         username: 'itzikFriedman',
//         password: '1234'
//     }).save((function (err, user) {
//         if (err) return console.log(err);
//         console.log(user);
//     }))
// }
 async function loginCheck(user) {
     let  promise =  users.findOne({"username":user.user,
                 "password":user.password}).exec();
     promise.then(function ( user) {
         return user;
     });

}

module.exports = loginCheck;
