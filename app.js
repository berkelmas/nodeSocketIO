const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('hey!');
});

server.listen(3000);

const io = socketio.listen(server);

const nsp = io.of('/namespace');

nsp.on('connection', (socket) => {
    console.log('Bağlantı başarılı...');

    socket.on('deneme', () => {
        socket.emit('deneme', {veri : 'deneme'})
    })

    socket.on('disconnect', () => {
        console.log('Bağlantı Koptu...')
    })
})
