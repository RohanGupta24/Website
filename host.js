var http = require('http')

const express = require('express');
const path = require('path');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = process.env.PORT || 8000;

var app = express();


app.use(express.static('public'))

app.get("/", function(req, res) {
    var data = fs.readFileSync('views/HtmlPage.html').toString();
    res.send(data);
});

const server = app.listen(port, function() {
    console.log("Listening on port: " + port);    
})

/*http.createServer(function (req, res) {

    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'

      fs.readFile('.${request.url}', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

      fs.readFile('.${request.url}', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('.${request.url}', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    }

}).listen(3000, 'localhost');
console.log('Server running at http://127.0.0.1:1337/');*/
