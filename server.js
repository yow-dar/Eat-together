const express = require('express');
const app = express();
var client_id = require('./client_id.json');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(client_id.id +'.apps.googleusercontent.com');
var bodyParser = require('body-parser');
var food = require('./food.json');
const port = 10030;

app.use(express.static(__dirname + '/public'));//upload static files

app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended : false})); //to support URL-encoded bodies

app.post('/signin',function(req,res){
  var account=req.body._account;
  var password=req.body._password;
  res.sendfile('./public/main_page.html');
  console.log(account+password);
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
