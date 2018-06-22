const express = require('express');
const app = express();
var fs = require('fs');
var client_id = require('./client_id.json');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(client_id.id +'.apps.googleusercontent.com');
var mysql = require('mysql');
var inf = require('./database_inf.json');
var bodyParser = require('body-parser');
var food = require('./food.json');
const port = 10030;
/*
var connection = mysql.createConnection({
  host:inf._host,
  user:inf._user,
  password:inf._password,
  database:inf._user
});
*/
var pool = mysql.createPool({
  connectionLimit : 100000,
  host:inf._host,
  user:inf._user,
  password:inf._password,
  database:inf._user
});

app.use(express.static(__dirname + '/app_frame'));//upload static files
app.use(express.static(__dirname + '/public'));//upload static files

app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended : false})); //to support URL-encoded bodies

app.post('/signin',function(req,res){
  var account = req.body._account;
  var password = req.body._password;
  
  pool.getConnection(function(err,connection){
    if(err) throw err;
    var sql = "SELECT * FROM user WHERE account = ?";
    connection.query(sql,[account],function(err,result){
      if(err) throw err;
      console.log(result);
      if(result.length == 1){        
        if(password == result[0].passwd)
          res.send("OK");
        else
          res.send("wrong passwd");
      }
      else if(result.length == 0) res.send("wrong account");
      else console.log("identical account");
    });
    connection.release();
  });
  
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
  var email=req.body._email;
  
  pool.getConnection(function(err,connection){
    var sql = "SELECT * FROM user WHERE account = ?";
    connection.query(sql,[account],function(err,result){
      if(result.length == 0){
   /*
        var 
        for(let i=0;i<10;i++){
        
        }*/
        var value=[account, password, email];
        var sql="INSERT INTO user (account, passwd, email) VALUES ?";
        connection.query(sql,[[value]],function(err,result){
          if(err) throw err;
          console.log("insert");
        });
        res.send("OK");
      }
      else res.send("account exists");
    });
    
    connection.release();
  });
  //fs.readFile('public/enroll/enroll_2.html',function(err,data){
  //if(err) throw err;
  //res.send(data);
  //});
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
    var email = "";//not complete yet 
    console.log("log in : "+userid);
  
    pool.getConnection(function(err,connection){
      if(err) throw err;
      var sql = "SELECT * FROM user WHERE account = ?";
      connection.query(sql,[userid],function(err,result){
        if(err) throw err;
        console.log(result);
        if(result.length == 1){        
            res.send("OK");
        }
        else if(result.length == 0){
        
          var value=[userid, email];
          var sql="INSERT INTO user (account, email) VALUES ?";
          connection.query(sql,[[value]],function(err,result){
            if(err) throw err;
            console.log("insert");
          });
          res.send("google_enroll");
        }
        else console.log("identical account");
      });
      connection.release();
    });
  
  };
  verify().catch(console.error);
});
app.listen(port);
