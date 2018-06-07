var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = 10028 ;
var room = {}
/*var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost:3306',
      user: 'uidd2018_groupC',
      password: 'teamc2018',
      debug: true
});*/

/*con.connect((err)=> { 
  if(err) throw err;
  console.log("Connected!")
  con.query(mysql,(err, result) => {
    if (err) throw err;
    console.log("Result:"+result);
  });
  
});*/



app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html')
})

/*io.on('connection',(socket)=>{
   var user
   console.log('a user connected')
   socket.user = user

 socket.emit('showRooms', rooms);
   console.log('USER:'+socket.user)

   socket.on('disconnect', () => {
     delete room[socket.user.name]
   })
})*/
   

http.listen(port,function(){
  console.log('listening on *:10028')
})
