import express from "express";
import vendaController from "../controllers/venda.controller.js";

const router = express.Router();

router.get("/consultar/:codigo", vendaController.getVenda);

export default router;