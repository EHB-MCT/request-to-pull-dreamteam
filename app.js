import express from 'express';
const server = express();
const PORT = 3000;
import {
    Server
} from 'socket.io';
const io = new Server(Server);

server.get('/', function (req, res) {
    res.send('hello world');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(PORT, () => {
    console.log(`server listening at: http://localhost:${PORT}`);
});