var express = require('express');
var app = express();
var port = 3000

var User = require('../Server/Services/user.servies');    

app.use('/User',User)



app.listen(port, function () {
    console.log(`Server is running at port : ${port}`);
});