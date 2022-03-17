import * as http from 'http';

const port = process.env.PORT || 2345;

const server = http
  .createServer((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });

    if (req.url?.indexOf('/suggestions') === 0) {
      res.end(
        JSON.stringify({
          suggestions: [],
        }),
      );
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end();
    }
  })
  .listen(port);

export default server;
console.log(`Server running at http://localhost:${port}/suggestions`, port);
