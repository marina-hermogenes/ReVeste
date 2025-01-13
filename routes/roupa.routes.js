import express from 'express'
import roupaController from '../controllers/roupa.controller.js'

const router = express.Router()

router.delete('/excluirRoupas/:codigo', roupaController.deleteRoupa);
router.post('/cadastro', roupaController.createRoupa);
router.get('/roupasCadastradas/:codigo', roupaController.getRoupasCadastradas);
router.get('/roupasVendidas/:codigo', roupaController.getRoupasVendidas);
router.get('/', roupaController.getAllRoupas);

export default router;