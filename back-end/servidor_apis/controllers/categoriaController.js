const categoriaModel = require('../models/categoriaModel');

class CategoriaController {

  async salvar(req, res){
    let categoria = req.body;
    const max = await categoriaModel.findOne({}).sort({codigo: -1});
    categoria.codigo = max == null ? 1 : max.codigo + 1;
    const resultado = await categoriaModel.create(categoria);
    res.status(201).json(resultado);
  }

  async listar(req, res){
    const resultado = await categoriaModel.find({});
    res.status(200).json(resultado);
  }

  async buscarPorCodigo(req, res){
    const codigo = req.params.codigo;
    const resultado = await categoriaModel.findOne({'codigo': codigo});
    res.status(200).json(resultado);
  }

  async atualizar(req, res){
    const codigo = req.params.codigo;
    const _id = String((await categoriaModel.findOne({'codigo': codigo}))._id);
    await categoriaModel.findByIdAndUpdate(String(_id), req.body);
    res.status(200).send();
  }

  async excluir(req, res){
    const codigo = req.params.codigo;
    const _id = String((await categoriaModel.findOne({'codigo': codigo}))._id);
    await categoriaModel.findByIdAndRemove(String(_id));
    res.status(200).send();
  }
}

module.exports = new CategoriaController();
