const port = 3000;
var express = require('express');
var app = express();

var cors = require('cors')

app.use(cors()) 

const bodyparser = require('body-parser');

 const api = require('./server/routers/routes');

 app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/api',api);

app.listen(port,function(){
    console.log("Server running on localhost:" + port);
});