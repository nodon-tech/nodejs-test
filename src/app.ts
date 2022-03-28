import server from './server';

const port = process.env.PORT || 2345;

server.listen(port);

console.log(`Server running at http://localhost:${port}/suggestions`, port);
