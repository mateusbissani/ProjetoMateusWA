const produtoModel = require('../models/produtoModel');

class ProdutoController {

    async salvar(req, res){
        const max = await produtoModel.findOne({}).sort({id: -1});
        let produto = req.body;
        produto.id = max == null ? 1 : max.id + 1;
        const resultado = await produtoModel.create(produto);
        res.status(201).json(resultado);    
    }

    async listar(req, res){
        const resultado = await produtoModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res){
        const id = req.params.produtoId;
        const resultado = await produtoModel.findOne({'id': id});
        res.status(200).json(resultado);
    }

    async atualizar(req, res){
        const id = req.params.produtoId;
        const _id = String((await produtoModel.findOne({'id': id}))._id);
        let produto = req.body;
        await produtoModel.findByIdAndUpdate(String(_id), produto);
        res.status(200).send();
    }

    async excluir(req, res){
        const id = req.params.produtoId;
        const _id = String((await produtoModel.findOne({'id': id}))._id);
        await produtoModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new ProdutoController();
