import express from "express";
import enderecoController from "../controllers/endereco.controller.js";

const router = express.Router();

router.get("/:codigo", enderecoController.getEnderecos);

export default router;