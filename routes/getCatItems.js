var express = require('express');
let app = new express();
let cards = require('../databases/cardsItem');

app.get('/', function(req, res) {

    res.send(cards);
});

module.exports = app;
