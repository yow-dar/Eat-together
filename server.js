const express = require('express');
const bodyParser = require('body-parser');
const port = 10022;

// HTTPS SSL SETTINGS
const fs = require('fs');
const key_path = 'ssl/sslkey.pem';
const cert_path = 'ssl/sslcert.pem';
const hskey = fs.readFileSync(key_path);
const hscert = fs.readFileSync(cert_path);
var ssl = {};
ssl.options = {
    key: hskey,
    cert: hscert
};
const https = require('https');
// END HTTPS SSL SETTINGS

// EXPRESS SETTINGS
const app = express();
app.use(express.static(__dirname + '/public'));//upload static files
app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended : false})); //to support URL-encoded bodies
// END EXPRESS SETTINGS

// HTTPSSERVER SETTINGS
const httpsServer = https.createServer(ssl.options, app);
// END HTTPSSERVER SETTINGS

httpsServer.listen(port);

// TEST GET & POST
app.get("/testget", function(req, res) {
    console.log('received get');
    console.log(req);
    console.log(res);
    res.send('hello get');
});

app.post("/testpost", function(req, res) {
    console.log('received post');
    console.log(req);
    console.log(res);
    res.send('hello post');
});

// END TEST GET & POST




// OLD CODE
/*
app.post('/post_data', function(req,res) {
    var x = req.body.meal;
    res.send('<h1>' + food[x] + '<h1>');
});
*/

/*
app.get("/iamonline", function(req, res) {
    online_users[req.query.username] = 5;
    res.send(JSON.stringify(online_users));
});
*/

// app.listen(port);
// END OLD CODE
