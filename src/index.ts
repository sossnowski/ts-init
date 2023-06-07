import http from 'http';
import app from './app';

const port = process.env.PORT || 3000;

const server = http.createServer(app);
// eslint-disable-next-line prettier/prettier, @typescript-eslint/indent
server.listen(port);
// eslint-disable-next-line no-console
console.log(port);
