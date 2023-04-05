const express = require('express');
const app = express ();

app.get ('/', function(req, res){
    res.send('Olá mundo Express!');
});

app.listen(3000, function(){
    console.log('App rodando na porta 3000!');
});