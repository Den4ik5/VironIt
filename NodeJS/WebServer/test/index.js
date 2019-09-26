const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 8000;

let server = http.createServer(function (request, response) {
    let queryString = request.url.split('?')[1] || [];
    let queryKey;
    let queryValue;
    if(!Array.isArray(queryString)){
        if(queryString.search('=')!==-1) {
            queryKey = queryString.split('=')[0];
            queryValue = queryString.split('=')[1].split('&')[0];
        }
        else{
            queryKey = '';
            queryValue = '';
        }
        console.log(queryKey);
        if(queryKey === 'name'){
            response.end('Hello ' + queryValue )
        }
        else if(queryKey === 'file'){
            let fileContent = fs.readFileSync("constants.js.txt", "utf8");
            response.end(fileContent);
        }
        else {
            response.end('Hello world');
        }
    }
    response.end(response.end('Hello world'));



});
server.listen(port, host);




