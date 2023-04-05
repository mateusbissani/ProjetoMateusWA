require('./mongodb');
const produtoModel = require('../models/produtoModel');
const dados = require('./produtos.json');

function carregarDados(){
    produtoModel.deleteMany({}, () =>{
        dados.forEach(produto => {
            produtoModel.create(produto);
        })
    })
}

carregarDados();
setTimeout(process.exit, 3000);