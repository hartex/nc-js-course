const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    res.end('hi there!');
});

server.listen(8001, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:8001/');
});