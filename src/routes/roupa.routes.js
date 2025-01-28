import multer from "multer";
import express from "express";
import roupaController from "../controllers/roupa.controller.js";
import { verificarToken } from "../middleware/auth.middleware.js";

const router = express.Router();

const upload = multer();

router.delete("/excluir/:codigo", verificarToken, roupaController.deleteRoupa); 
router.post("/cadastro", verificarToken, upload.single("foto"), roupaController.createRoupa); 
router.put("/editar/:codigo", verificarToken, upload.single("foto"), roupaController.updateRoupa);
router.get("/", verificarToken, roupaController.getAllRoupas); //todas as roupas
router.get("/cadastradas/:codigo", verificarToken, roupaController.getRoupasCadastradas);
router.get("/vendidas/:codigo", verificarToken, roupaController.getRoupasVendidas);
router.get("/buscaCodigo/:codigo", verificarToken, roupaController.getRoupaPeloCod);

router.get("/calcas", verificarToken, roupaController.getCalcas);   
router.get("/camisas", verificarToken, roupaController.getCamisas);
router.get("/calcados", verificarToken, roupaController.getCalcados);
router.get("/bermudas", verificarToken, roupaController.getBermudas);
router.get("/vestidos", verificarToken, roupaController.getVestidos);
router.get("/shorts", verificarToken, roupaController.getShorts);
router.get("/agasalhos", verificarToken, roupaController.getAgasalhos);



export default router;
