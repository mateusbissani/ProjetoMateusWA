const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');  
 
router.post('/', produtoController.salvar);
router.get('/', produtoController.listar);
router.get('/:produtoId', produtoController.buscarPorId);
router.put('/:produtoId', produtoController.atualizar);
router.delete('/:produtoId', produtoController.excluir);

module.exports = router;
