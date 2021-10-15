import express from 'express';
const server = express()
const PORT = 3000;

server.get('/', function (req, res) {
    res.send('hello world')
})

server.listen(PORT, () => {
    console.log(`server listening at: http://localhost:${PORT}`);
});