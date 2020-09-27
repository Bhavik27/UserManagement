var express = require('express');
const QueryFunction = require('../DBConnect');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.get('/getUsers', (req, res) => {
    QueryFunction('SELECT * FROM TBL_USER_MASTER', res)
});

module.exports = app;