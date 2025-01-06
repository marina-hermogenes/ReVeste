import express from 'express'
import usuarioController from '../controllers/usuario.controller.js'

const router = express.Router()

router.post('/', usuarioController.createUsuario);
router.get('/:codigo', usuarioController.getUsuario);
router.delete('/:codigo', usuarioController.deleteUsuario);

export default router;