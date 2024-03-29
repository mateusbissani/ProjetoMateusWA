const mongoose = require('mongoose');

const URL = 'mongodb://127.0.0.1/meu_banco';

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const con = mongoose.connection;

con.on('open', function(){
    console.log('Conectado ao MongoDB!');
});

con.on('error', function(){
    console.log('Erro na conexão ao MongoDB!');
});

con.on('close', function(){
    console.log('Desconectado do MongoDB!');
});

module.exports = db;