import express from "express";
import vendaController from "../controllers/venda.controller.js";

const router = express.Router();

router.get("/consultar/:codigo", vendaController.getVenda);
router.delete("/cancelar/:codigo", vendaController.deleteVenda);
router.post("/comprar", vendaController.createVenda);

export default router;
