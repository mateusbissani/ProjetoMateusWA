require('./mongodb');

const statusModel = require('../models/statusModel');
const status = require('./status.json');

const categoriaModel = require('../models/categoriaModel');
const categorias = require('./categorias.json');

const produtoModel = require('../models/produtoModel');
const produtos = require('./produtos.json');

const pedidoModel = require('../models/pedidoModel');
const pedidos = require('./pedidos.json');

function carregarDados(){
    statusModel.deleteMany({}, () =>{
        status.forEach(obj => {
            statusModel.create(obj);
        })
    })

    categoriaModel.deleteMany({}, () =>{
        categorias.forEach(obj => {
            categoriaModel.create(obj);
        })
    })

    produtoModel.deleteMany({}, () =>{
        produtos.forEach(obj => {
            produtoModel.create(obj);
        })
    })

    pedidoModel.deleteMany({}, () =>{
        pedidos.forEach(obj => {
            pedidoModel.create(obj);
        })
    })
}

carregarDados();
setTimeout(process.exit, 3000);