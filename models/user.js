// Roi Atias

var mongo = require('mongoose');
var db = require('./db');
var autoIncrement = require('mongoose-auto-increment');


var Schema = mongo.Schema;
var userSchema = new Schema({ // create a schema
    valid: Boolean,
    id: Number,
    type: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    branchId: Number,
    tel: String,
    guid: String,
    admin: Boolean,
    guid_time: Date,
});

userSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var User = db.model('User', userSchema);
module.exports = User;
