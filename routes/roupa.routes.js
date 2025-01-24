import multer from "multer";
import express from "express";
import roupaController from "../controllers/roupa.controller.js";

const router = express.Router();

const upload = multer();

router.delete("/excluir/:codigo", roupaController.deleteRoupa);
router.post("/cadastro", upload.single("foto"), roupaController.createRoupa);
router.get("/cadastradas/:codigo", roupaController.getRoupasCadastradas);
router.get("/vendidas/:codigo", roupaController.getRoupasVendidas);
router.get("/", roupaController.getAllRoupas);
router.get("/buscar", roupaController.getRoupasPeloNome);
router.get("/tipo", roupaController.getRoupasPeloTipo);
router.put("/editar/:codigo", upload.single("foto"), roupaController.updateRoupa);

//Funções auxiliares
router.get("/buscaCodigo/:codigo", roupaController.getRoupaPeloCod);

export default router;
