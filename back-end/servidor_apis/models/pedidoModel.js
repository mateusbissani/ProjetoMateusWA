const mongoose = require('mongoose');
const produtoSchema = require('./schemas/produtoSchema');

const pedidoSchema = new mongoose.Schema({
    itens: [produtoSchema],
    data: {type: Date, default: Date.now},
    total: Number,
    status: {type: mongoose.Schema.Types.ObjectId, ref: 'status'},	
    frete: Number,
    codigo: Number
});

module.exports = mongoose.model('pedido', pedidoSchema);
