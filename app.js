const http = require ("http");
const app = require('./express');


const server = http.createServer(app);

server.listen(3456, ()=>{
    console.log("Check port 3456");
});