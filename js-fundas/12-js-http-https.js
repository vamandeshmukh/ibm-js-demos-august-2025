console.log("12-js-http-https.js");

// ===========
// using http 
// ===========

import http from "http";

const PORT = 3000;
const server = http.createServer((req, res) => {
    res.end("Hello world!");
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



