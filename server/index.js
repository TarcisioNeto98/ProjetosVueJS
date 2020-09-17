function busca(valor, array){
    for(var i = 0; i < array.length; i++) {
        if(array[i].nome === valor)
            return array[i].nome;
    }
    return {nome:null, descricao:'Usuário não encontrado!'};
}

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

app.get('/', function(req, res){
    var item = req.body.nome;
    res.json(busca(item, dados));
});

app.listen('3000', function(){
    console.log("Servidor rodando!");
});