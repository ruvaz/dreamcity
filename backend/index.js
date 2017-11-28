'use strict'

var app = require("./app.js");
var port = process.env.PORT || 3678; //var constante
var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursosfavoritos',(err,res)=>{
    if(err){
        throw err;
        console.log(err);
    }else{
        console.log('Conexion a MongoDB correcta');
        app.listen(port,function (){
            console.log(`API REST:  http://localhost:${port}/`);
        });
    }
});