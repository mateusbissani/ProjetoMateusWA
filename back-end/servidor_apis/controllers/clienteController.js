const clienteModel = require('../models/clienteModel');
const userModel = require('../models/userModel');

class ClienteController {

  async salvar(req, res){
    const cliente = req.body;
    const max = await clienteModel.findOne({}).sort({codigo: -1});
    cliente.codigo = max == null ? 1 : max.codigo + 1;

    const user = await userModel.findOne({codigo: cliente.user.codigo});
    cliente.user = user._id;

    //const loja = await lojaModel.findOne({codigo: cliente.loja.codigo});
    //cliente.loja = loja._id;

    const resultado = await clienteModel.create(cliente);
    res.status(201).send();
  }

  async listar(req, res){
    const resultado = await clienteModel.find({});
    res.status(200).json(resultado);
  }

  async buscarPorCodigo(req, res){
    const codigo = req.params.codigo;
    const resultado = await clienteModel.findOne({'codigo': codigo})
          .populate('user').populate('loja');
    res.status(200).json(resultado);
  }

  async atualizar(req, res){
    const codigo = req.params.codigo;
    const _id = String((await clienteModel.findOne({'codigo': codigo}))._id);

    const cliente = req.body;
    const user = await userModel.findOne({codigo: cliente.user.codigo});
    cliente.user = user._id;

    //const loja = await lojaModel.findOne({codigo: cliente.loja.codigo});
    //cliente.loja = loja._id;

    await clienteModel.findByIdAndUpdate(String(_id), cliente);
    res.status(200).send();
  }

  async excluir(req, res){
    const codigo = req.params.codigo;
    const _id = String((await clienteModel.findOne({'codigo': codigo}))._id);
    await clienteModel.findByIdAndRemove(String(_id));
    res.status(200).send();
  }
}

module.exports = new ClienteController();


//const lojaModel = require('../models/lojaModel');