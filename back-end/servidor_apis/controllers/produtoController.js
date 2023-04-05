const produtoModel = require('../models/produtoModel');

class ProdutoController {

    async salvar(req, res){
        const max = await produtoModel.findOne({}).sort({codigo: -1});
        let produto = req.body;
        produto.codigo = max == null ? 1 : max.codigo + 1;
        const resultado = await produtoModel.create(produto);
        res.status(201).json(resultado);    
    }

    async listar(req, res){
        const resultado = await produtoModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await produtoModel.findOne({'codigo': codigo});
        res.status(200).json(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const _id = String((await produtoModel.findOne({'codigo': codigo}))._id);
        let produto = req.body;
        await produtoModel.findBycodigoAndUpdate(String(_id), produto);
        res.status(200).send();
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        const _id = String((await produtoModel.findOne({'codigo': codigo}))._id);
        await produtoModel.findBycodigoAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new ProdutoController();
