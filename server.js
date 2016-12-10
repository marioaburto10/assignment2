var express = require('express');

var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.port || 3000;
app.listen(port, function() {
  console.log('App listening on PORT: ' + port);
});