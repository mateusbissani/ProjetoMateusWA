const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nome: String,
    codigo: Number
});

module.exports = mongoose.model('categoria', categoriaSchema);
