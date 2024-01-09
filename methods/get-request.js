module.exports = (req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf('/') + 1);
    let id = req.url.split('/')[3];
    const regx = new RegExp(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
    if (req.url === '/api/movies') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else if (!regx.test(id)) {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({title: "uuid is not valid", message: "Route is not found", why: ":("}));
    }
    else if (regx.test(id)) {

        res.setHeader('Content-Type', 'application/json');
        let fileterMovie = req.movies.filter((movie) => {
            return movie.id === id;
        });

        if (fileterMovie.length > 0) {
            res.statusCode = 200;
            res.write(JSON.stringify())
        }
        res.write(JSON.stringify(req.movies));
        res.end();
    }
}