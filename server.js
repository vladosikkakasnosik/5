const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 1234;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('хеллоу');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
git remote add origin https://github.com/vladosikkakasnosik/5.git
git branch -M main
git push -u origin main
});
