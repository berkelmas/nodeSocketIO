const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('hey!');
});

server.listen(3000);

const io = socketio.listen(server);

const nsp = io.of('/namespace');

nsp.on('connection', (socket) => {
    socket.join('anaOda') // Ana Oda Diye bir oda varsa ona katılınacak; yoksa böyle bir oda oluşturulacak ve katılınacak.
    console.log('anaOda ya katılındı...')

    socket.on('deneme', () => {
        socket.to('anaOda').emit('deneme', {veri : 'deneme'})
    })

    socket.on('disconnect', () => {
        console.log('Bağlantı Koptu...')
    })
})
