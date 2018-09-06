var express = require('express');
var app = express();

var things = require('./things.js');

app.use('/thing*', things);

app.listen(3000);