var express = require('express');
var app = express();

app.use('/styles', express.static(__dirname + '/app/styles'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));

var server = app.listen(3001, function () {
    console.log('Restaurant picker UI %d listening on port %d', process.pid, server.address().port)
})