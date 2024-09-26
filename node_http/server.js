const http = require('http');// Importing http module
const fs = require('fs');// Importing fs module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    let filePath = __dirname + '/public/index.html';

    console.log(req.url);

    switch(req.url){
        case '/about': filePath = __dirname + '/public/about.html'; break;
        default: filePath = __dirname + '/public/index.html'; break;
    }

    fs.readFile(filePath, (err, data) => {
        res.statusCode = 200;// Setting the status code to 200 (OK)
        res.setHeader('Content-Type', 'text/html');// Setting the response header
        res.end(data, 'utf-8');// Ending the response
    });

});

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);


});