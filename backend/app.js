'use strict'

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var api = require('./routes/favorito');  //carga todos los routes de favorito

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); //todo mundo o solo desde una url
    res.header('Access-Control-Allow-Headers','X-API-KeY,Origin,X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,PUT,DELETE');
    next();
});

app.use('/api',api);

module.exports = app;