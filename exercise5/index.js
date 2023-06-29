const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.once("login", (nickname) => {
        socket.user = {
            nickname: nickname,
            isOnline: true
        };
        io.emit('is online', socket.user);
    });
    socket.on('chat message', (msg) => {
        let data = {
            nickname: socket.user.nickname,
            msg: msg
        }
        socket.emit('my message', data);
        socket.broadcast.emit('chat message', data);
    });
    socket.on('user typing', (info)=>{
        if(info.status){
            socket.broadcast.emit('user typing', info)
        }else {
            socket.emit('user typing', info)
        }
    });
    socket.on('disconnect', () => {
        let disconnected = {
            ...socket.user,
            isOnline: false
        }
        socket.user = disconnected;
        console.log(socket.user);
        io.emit('is online', socket.user);
        console.log('user disconnected');
      });
  });
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});