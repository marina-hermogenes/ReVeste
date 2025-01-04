import express from 'express'
import roupaController from '../controllers/roupa.controller.js'

const router = express.Router()

router.delete('/:codigo', roupaController.deleteRoupa);

export default router;