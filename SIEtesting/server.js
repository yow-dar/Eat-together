
var app= require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var room = {};
var pending = [];//waiting zone


server.listen(10028, ()=>{
  console.log('listening on *:10028');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

function idGenerate (length) {//隨機產生room id
  let id = ""
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for(let i = 0; i < length; i++ )
  id += possible.charAt(Math.floor(Math.random() * possible.length))
  return id
}

io.on('connection', function(socket){
  console.log('a user connected');//a user connected

  socket.on('addChat', () => {
    if (pending.length()<2) {//如果等待區內使用者只有0~1個
      pending.push(socket)//將user名push進去(不確定socket內有沒有存user的名字 裡面可能要改成別的)
    }
    else {
      let rid = idGenerate(16)//隨機產生room id
      room[rid] = [pending.shift(), pending.shift()]//將roomid 配對到的user 存入room之中
      for (let user in room[rid]) {
        user._rid = rid
        user.emit('addComplete', {msg: 'add to chat'}) 
      } 
    }
  })

  socket.on('chat message', (msg)=>{
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

