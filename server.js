const express = require('express');
const app = express();
var fs = require('fs');
var client_id = require('./client_id.json');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(client_id.id +'.apps.googleusercontent.com');
var mysql = require('mysql');
var inf = require('./database_inf.json');
var bodyParser = require('body-parser');
const port = 10030;

var connection = mysql.createConnection({
  host:inf._host,
  user:inf._user,
  password:inf._password,
  database:inf._user
});
app.use(express.static(__dirname + '/app_frame'));//upload static files
app.use(express.static(__dirname + '/public'));//upload static files

app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended : false})); //to support URL-encoded bodies

connection.connect(function(err){
  if(err) throw err;
  //connection.end();
});

app.post('/signin',function(req,res){
  var account=req.body._account;
  var password=req.body._password;
  
  var sql="SELECT * FROM user_test WHERE account = ?";
  connection.query(sql,[account],function(err,result){
    if(err) throw err;
    console.log(result + "HIHIHI");
    if(result != null) res.end("OK");
  });
  res.end();
});
app.post('/into_enroll',function(req,res){
  //fs.readFile('public/enroll/enroll_1.html',function(err,data){
  //if(err) throw err;
  //res.send(data);
  //});
  res.send("OK");
});
app.post('/into_enroll_2',function(req,res){
  var account=req.body._account;
  var password=req.body._password;
  var value=[account, password, 'null'];
  var sql="INSERT INTO user_test (account, passwd, username) VALUES ?";
  connection.query(sql,[[value]],function(err,result){
    if(err) throw err;
    console.log("insert");
  });
  //fs.readFile('public/enroll/enroll_2.html',function(err,data){
  //if(err) throw err;
  //res.send(data);
  //});
  res.send("OK");
});
app.post('/enroll_end',function(req,res){
  res.send("OK");
});

app.post('/give_id',function(req,res){
res.send(client_id.id);
});

app.post('/tokensignin',function(req,res){
async function verify(){
  const ticket = await client.verifyIdToken({
    idToken:req.body.idtoken,
    audience:client_id.id +".apps.googleusercontent.com",
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
//console.log("log in : "+userid);
};
verify().catch(console.error);

});
app.listen(port);
