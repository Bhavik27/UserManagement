var express = require('express');
var app = express();
var port = 3000

var User = require('../Server/Services/UserApi');
var Role = require('../Server/Services/roleApi');

app.use('/User', User)
app.use('/Role', Role)



app.listen(port, function () {
    console.log(`Server is running at port : ${port}`);
});