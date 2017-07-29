var http = require('http');
var express = require('express');
var body = require('body-parser');
var router = require('./router');
var app= express();

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use('/', router)

 var server = app.listen("8081",function(){
    console.log('running  on port 3000'); 
}); 

module.exports = app ;
module.exports.fun =  function () { 
    server.close() ;
};
