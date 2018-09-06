var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
    res.send("This get Get method!");
});

app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
    console.log("hello");
});

app.listen(3000);

//curl -X POST "http://localhost:3000/hello"