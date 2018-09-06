var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const items = require('./mensOuterwear.json');
const des = require('./infoWomenOuterwear.json');
var fs = require('fs');

var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.static(path.join(__dirname,'public')));
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})

app.get('/', function (req, res) {
    res.header("Content-Type","application/json");
    res.json(items);
});

var i;

app.get('/:id', function (req, res) {
    //console.log(items);
    res.header("Content-Type", "application/json");
    //(res) => res.json();
    var id = req.params.id;
    for(i=0; i<des.length; i++)
    {
        if(id == des[i].id)
        {

            break;
        }
    }
    res.json(des[i]);
});

/*app.get('/:id',function(req, res) {
    var contents = fs.readFile("./object.json", "utf-8");
    console.log(contents);
    for(var j=0; j<contents.length; j++)
    {
        des[i] = 
    }
    fs.writeFile("./object.json", JSON.stringify(des[i]), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
    
});*/

app.listen(3000);
