const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    desc: String ,
    preco: Number,
    foto: String,
    desconto: Number,
    disponiblidade: Number,
    totalDeCompras: Number,
    frete: Number,
    categoriaId: Number
});

module.exports = mongoose.model('produto', produtoSchema);
