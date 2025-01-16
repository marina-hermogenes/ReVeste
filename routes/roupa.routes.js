import express from 'express'
import roupaController from '../controllers/roupa.controller.js'

const router = express.Router()

router.delete('/excluir/:codigo', roupaController.deleteRoupa);
router.post('/cadastro', roupaController.createRoupa);
router.get('/cadastradas/:codigo', roupaController.getRoupasCadastradas);
router.get('/vendidas/:codigo', roupaController.getRoupasVendidas);
router.get('/', roupaController.getAllRoupas);
router.get('/buscar', roupaController.getRoupasPeloNome);

export default router;