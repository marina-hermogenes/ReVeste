import express from "express";
import vendaController from "../controllers/venda.controller.js";
import { verificarToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/consultar/:codigo", verificarToken, vendaController.getVenda);
router.delete("/cancelar/:codigo", verificarToken, vendaController.deleteVenda);
router.post("/comprar", verificarToken, vendaController.createVenda);
router.put("/editar", verificarToken, vendaController.updateVenda);
router.get("/codigo/:codigo", verificarToken, vendaController.getUmaVenda);

export default router;
