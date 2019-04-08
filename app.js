const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('hey!');
});

server.listen(3000);

const io = socketio.listen(server);

const nsp = io.of('/namespace');

nsp.on('connection', (socket) => {

    socket.on('joinRoom', (data) => {
        socket.join(data.room);
        socket.emit('joinRoomMessage', {room : data.room});
        console.log('Bağlantı Kuruldu. Oda Adı: ' + data.room);
        console.log(nsp.sockets.adapter.rooms[data.room].length)
    })

    socket.on('notifyRoom', (data) => {
        //socket.to(data.room).emit('kisiSayisi', {personNumber : nsp.sockets.adapter.rooms[data.room].length })
        console.log('dsadas')
    })

    socket.on('kisiSayisi', (data) => {
        //const peopleNumber = io.sockets.adapter.rooms[data.roomName];
        socket.emit('personNumber', {personNumber : peopleNumber})
    })

    socket.on('disconnect', () => {
        console.log('Bağlantı Koptu...')
    })
})

// Deneme Branch