var express = require('express');
var app = express();

//middleware
app.use(express.static('Public'));//use se utiliza para ejecutar funciones middleware

app.get('/', function(req,res){
    res.send('<html><body><h1>hola mundo</h1></body></html>');
});
app.get('/pagina1', function(req,res){
    res.send('<html><body><h1>página 1</h1></body></html>');
});
app.get('/pagina2', function(req,res){
    res.send('<html><body><h1>página 2</h1></body></html>');
});
app.get('/ab*cd', function(req,res){
    res.send('<html><body><h1>Cumple con el patrón ab*cd</h1></body></html>');
});
app.get('/ab+ef', function(req,res){
    res.send('<html><body><h1>Cumple con el patrón ab+cd</h1></body></html>');
});
app.get('/capitulos/:numeroCapitulo', function(req,res){
    res.send(`<html><body><h1>ver capitulo: ${req.params.numeroCapitulo}</h1></body></html>`);
});
app.listen(8888, function(){
    console.log("se levanto el servidor");
});