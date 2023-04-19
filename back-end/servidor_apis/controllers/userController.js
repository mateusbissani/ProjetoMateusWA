const userModel = require('../models/userModel');
//const perfilModel = require('../models/perfilModel');
const auth = require('../auth/auth');

class userController {

  async salvar(req, res){
    const user = req.body;
    const max = await userModel.findOne({}).sort({codigo: -1});
    user.codigo = max == null ? 1 : max.codigo + 1;
    
    if (await userModel.findOne({'email': user.email})){
      res.status(400).send({error: 'Usuário já cadastrado!'});
    }

    //const perfil = await perfilModel.findOne({codigo: user.perfil.codigo});
    //user.perfil = perfil._id;
    user.token = undefined;

    const resultado = await userModel.create(user);
    auth.incluirToken(resultado);
    res.status(201).json(resultado);
  }

  async listar(req, res){
    const resultado = await userModel.find({}).populate('perfil');
    res.status(200).json(resultado);
  }

  async buscarPorCodigo(req, res){
    const codigo = req.params.codigo;
    const resultado = await userModel.findOne({'codigo': codigo}).populate('perfil');
    res.status(200).json(resultado);
  }

  async atualizar(req, res){
    const codigo = req.params.codigo;
    const _id = String((await userModel.findOne({'codigo': codigo}))._id);
    const user = await auth.gerarHash(req.body);

    //const perfil = await perfilModel.findOne({codigo: user.perfil.codigo});
    //user.perfil = perfil._id;
    user.token = undefined;

    await userModel.findByIdAndUpdate(String(_id), user);
    res.status(200).send();
  }

  async excluir(req, res){
    const codigo = req.params.codigo;
    const _id = String((await userModel.findOne({'codigo': codigo}))._id);
    await userModel.findByIdAndRemove(String(_id));
    res.status(200).send();
  }
}

module.exports = new userController();
