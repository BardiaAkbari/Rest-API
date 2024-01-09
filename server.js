const http = require('http');
const getReq = require('./methods/get-request');
const postReq = require('./methods/post-request');
const deleteReq = require('./methods/delete-request');
const putReq = require('./methods/put-request')
let movies = require('./data/movies.json')

require('dotenv').config();

const PORT = process.env.PORT || 5000;


const  server = http.createServer((req, res) => {

    req.movies = movies;
    let type = req.method;
    
    switch(type){
        
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({title: "Error to load page", message: "Route is not found"}));
            res.end();
    }
    
});

server.listen(PORT, () => {
    console.log(`The server is listen on port ${PORT}`);
});

