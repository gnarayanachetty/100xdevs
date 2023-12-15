
var express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyparser = require('body-parser');
const http = require('http');

app.use(bodyparser.json());

app.get('/', function(req, res) {
    console.log('Done!');
  
    
    res.send('Hello World!');

})
app.get('/about', function(req, res) {
    console.log('Done!');
  
    
    res.send('<h1>about</h1>');

})
app.post('/post', function(req, res) {
    console.log('post reqdata', req.body);
    res.end('<h1>post</h1>');

})
app.listen(port, function() {
    console.log('Example app listening on port'+ port);
});

