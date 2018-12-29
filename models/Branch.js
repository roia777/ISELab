// Roi Atias

var mongo = require('mongoose');
var db = require('./db');
var autoIncrement = require('mongoose-auto-increment');

var Schema = mongo.Schema;
var branchSchema = new Schema({ // create a schema
    valid: Boolean,
    id: Number,
    name: String,
    address: String, 
    tel: String
});

branchSchema.plugin(autoIncrement.plugin, {
    model: 'Branch',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var Branch = db.model('Branch', branchSchema);
module.exports = Branch;