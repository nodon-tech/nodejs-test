import * as http from 'http';

const server = http.createServer((req, res) => {
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
});

export default server;
