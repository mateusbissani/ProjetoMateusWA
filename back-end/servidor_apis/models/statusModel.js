const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    nome: String,
    codigo: Number
});

module.exports = mongoose.model('status', statusSchema);
