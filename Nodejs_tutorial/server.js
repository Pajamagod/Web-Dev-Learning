/*
const http = require("http");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.statisCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World");
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
}

*/

/* const fs = require('fs')

fs.readFile('hi.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
})
*/

/*const { appendFile } = require("fs");

const newContent = '\nThis is some new text'

writeFile('hi.txt', newContent, {flag: "a"}, (err) => {
    // Callback function catches errors
    if (err) {
        console.error(err);
        return;
    }
    console.log("Content written!");
})

appendFile('hi.txt', newContent, (err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Content Written');
} )
*/

const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader("Content-Type", 'text/html')

    let path = './';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;    
    }

    fs.readFile(path, (err, data) => {
        if (err){
            console.error(err);
            res.end();
        } else {
            res.end(data);
        }
    });
})
.listen(PORT, () => console.log(`Server listening on ${PORT}`));