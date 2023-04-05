const express = require('express');
const morgan = require('morgan');
const produtos = require("./produtos.json");

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({'extend':true}));
app.use(express.json());

app.get('/', function(req, res){
    res.send('GET');
});

app.get('/produtos', function(req, res){
    res.json(produtos);
});

app.post('/api', function(req,res){
    res.json({texto: req.body.texto});
});
app.listen(3000,function(){
    console.log('App rodando na porta 3000!');
})
