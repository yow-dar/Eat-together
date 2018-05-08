const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var food = require('./food.json');
const port = 10021;

app.use(express.static(__dirname + '/public'));//upload static files

app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended : false})); //to support URL-encoded bodies

app.post('/ajax_post_data',function(req,res){
  var x=req.body.meal;
  res.send('' + food[x]);
});

app.listen(port);
