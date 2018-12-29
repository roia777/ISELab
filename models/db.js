// Roi Atias

var mongo = require("mongoose");
var Db = mongo.createConnection('mongodb://localhost:27017/myfirstdatabase',{useMongoClient:true});
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(Db);

Db.once('open', function () { console.log("Connected to DB") });
Db.on('error', function () { console.log("Error connecting to DB") });
console.log('Pending DB connection');

module.exports = Db;