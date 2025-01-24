import multer from "multer";
import express from "express";
import roupaController from "../controllers/roupa.controller.js";
import { verificarToken } from "../middleware/auth.middleware.js";

const router = express.Router();

const upload = multer();

router.delete("/excluir/:codigo", verificarToken, roupaController.deleteRoupa);
router.post("/cadastro", verificarToken, upload.single("foto"), roupaController.createRoupa);
router.get("/cadastradas/:codigo", verificarToken, roupaController.getRoupasCadastradas);
router.get("/vendidas/:codigo", verificarToken, roupaController.getRoupasVendidas);
router.get("/", verificarToken, roupaController.getAllRoupas);
router.get("/buscar", verificarToken, roupaController.getRoupasPeloNome);
router.get("/tipo", verificarToken, roupaController.getRoupasPeloTipo);
router.put("/editar/:codigo", verificarToken, upload.single("foto"), roupaController.updateRoupa);

router.get("/buscaCodigo/:codigo", verificarToken, roupaController.getRoupaPeloCod);

export default router;
