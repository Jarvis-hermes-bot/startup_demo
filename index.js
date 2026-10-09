const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Jarvis Startup Demo!\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
