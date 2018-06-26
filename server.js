const express = require('express');
const app = express();
var fs = require('fs');
var client_id = require('./client_id.json');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(client_id.id +'.apps.googleusercontent.com');
var mysql = require('mysql');
var multer =require('multer');
var inf = require('./database_inf.json');
var bodyParser = require('body-parser');
var food = require('./food.json');
const port = 10030;


var pool = mysql.createPool({
  connectionLimit : 10,
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
          res.send({result:"OK", inf:result.user_id});
        else
          res.send({result:"wrong passwd"});
      }
      else if(result.length == 0) res.send({result:"wrong account"});
      else console.log("identical account");
      connection.release();
    });
  });
  
});

app.post('/into_enroll_2',function(req,res){
  var account=req.body._account;
  var password=req.body._password;
  var email=req.body._email;
  
  pool.getConnection(function(err,connection){
    var sql = "SELECT * FROM user WHERE account = ?";
    connection.query(sql,[account],function(err,result){
      if(result.length == 0){
   
        var user_id = "";
        var id_unity = false;
        
        do{
          user_id = user_id_generate();
          sql = "SELECT * FROM user WHERE user_id = ?";
          connection.query(sql,[user_id],function(err,result){
            if(result.length ==0) id_unity=false;
          });
        }
        while(id_unity)
        console.log(user_id);
        
        var value=[user_id, account, password, email];
        sql="INSERT INTO user (user_id, account, passwd, email) VALUES ?";
        connection.query(sql,[[value]],function(err,result){
          if(err) throw err;
          console.log("insert");
          connection.release();
        });
        res.send({result:"OK", inf:user_id});
      }
      else{
        res.send({result:"account exists"});
        connection.release();
      }
    });
  });
});

app.post('/into_enroll_3',function(req,res){
  console.log(req.body);
  var value = [req.body._user_name, req.body._birthday, req.body._gender, req.body._address, req.body.user_id];
  pool.getConnection(function(err,connection){
    var sql = "UPDATE user SET user_name = ?, birthday = ?, gender = ?, address = ? WHERE user_id = ?";
    connection.query(sql,value,function(err,result){
      if(err) throw err;  
      connection.release();
    });
  });
  res.send("OK");
});
/*
app.post('/enroll_end',function(req,res){
  //console.log(req.body.img_file);
  //console.log(req.body);
  console.log(req);
  console.log("get");
});
*/
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
    const google_userid = payload['sub'];
    var email = "";//not complete yet 
    console.log("log in : "+google_userid);
  
    pool.getConnection(function(err,connection){
      if(err) throw err;
      var sql = "SELECT * FROM user WHERE account = ?";
      connection.query(sql,[google_userid],function(err,result){
        if(err) throw err;
        console.log(result);
        if(result.length == 1){        
            res.send({result:"OK", inf:result.user_id});
            connection.release();
        }
        else if(result.length == 0){
        
          var user_id = "";
          var id_unity = false;
          do{
            user_id = user_id_generate();
            sql = "SELECT * FROM user WHERE user_id = ?";
            connection.query(sql,[user_id],function(err,result){
              if(result.length ==0) id_unity=false;
            });
          }
          while(id_unity)
          console.log(user_id);
       
          var value=[user_id, google_userid, email];
          var sql="INSERT INTO user (user_id, account, email) VALUES ?";
          connection.query(sql,[[value]],function(err,result){
            if(err) throw err;
            console.log("insert");
          });
          res.send({result:"google_enroll", inf:user_id});
          connection.release();
        }
        else{
          console.log("identical account");
          connection.release();
        }
      });
    });
  
  };
  verify().catch(console.error);
});

var storageZip = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, 'public/upload')  //文件儲存路徑
  },
  filename: function(req,file,cb){
    cb(null,file.fieldname + '-' + Date.now() + '.zip')  //重新命名檔名
    cb(null,'newfile' + '.jpg')  //重新命名檔名
  }
});

var uploadZip = multer({
  storage:storageZip
});

//'file' 同 formData.append('file', ... )添加之文件名
app.post('/enroll_end',uploadZip.single('file'), function(req,res){
  console.log(req.body);
  console.log(req.file);
  fs.rename('public/upload/newfile.jpg','public/upload/' + req.body.user_id + '.jpg',function(err){
  if(err) throw err;
  console.log("rename completed");
  });
  res.send("OK");
});

app.listen(port);

//function----------------------------------------------
function user_id_generate(){
  let user_id=""
  for(let i=0;i<10;i++){
    user_id += Math.floor(Math.random()*10);    
  }
  return user_id;
};
