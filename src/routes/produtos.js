// Rotas para produtos

const express = require('express');
const router = express.Router();
const produtosMiddlewares = require('../middlewares/produtos');
const produtosController = require('../controllers/produtos');

router.post('/produtos', produtosMiddlewares.validateCreateProduto, produtosController.createProduto);
router.get('/produtos', produtosController.getProdutos); 
router.get('/produtos/:id', produtosMiddlewares.validateGetProduto, produtosController.getProduto);
router.put('/produtos/:id', produtosMiddlewares.validateUpdateProduto, produtosController.updateProduto);
router.delete('/produtos/:id', produtosMiddlewares.validateDeleteProduto, produtosController.deleteProduto);

module.exports = router;


