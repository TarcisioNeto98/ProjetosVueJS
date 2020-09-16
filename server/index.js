var express = require('express');
var dados = [];
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());


app.post('/', function(req, res){
    dados.push(req.body);
    console.log(dados);
});

app.listen('3000', function(){
    console.log("Servidor rodando!");
});