// THIS SHOW BASIC WORKING CONCEPT OF
//      HTTP USE AND SETUP OF SERVER
//      WILL BE REPLACED WITH EXPRESS FRAMEWORK
const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes);

server.listen(3000);