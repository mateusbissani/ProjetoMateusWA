const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: String,
    descricao: String ,
    preco: Number,
    desconto: Number,
    foto: String,
    disponiblidade: Number,
    codigo: Number,
    totalDeCompras: Number,
    frete: Number,
    categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'categoria'}
});

module.exports = mongoose.model('produto', produtoSchema);
