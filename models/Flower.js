// Roi Atias

var mongo = require('mongoose');
var db = require('./db');
var autoIncrement = require('mongoose-auto-increment');


var Schema = mongo.Schema;
var flowerSchema = new Schema({ // create a schema
    valid: Boolean,
    id: Number,
    name: String,
    color: String, 
    price: Number,
    imagePath: String
});

flowerSchema.plugin(autoIncrement.plugin, {
model: 'User',
field: 'id',
startAt: 1,
incrementBy: 1
});

var Flower = db.model('Flower', flowerSchema);
module.exports = Flower;