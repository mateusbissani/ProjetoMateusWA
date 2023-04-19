const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  codigo: Number,
  nome: {
    type: String,
    require: true
  },
  sobrenome: String, 
  cpf: String,
  saldoCarteira: Number,
  receita: Number,
  fone: String,
  endereco: String,
  cep: String,
  cidade: String,
  estado: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'usuario'},
});

module.exports = clienteSchema;
