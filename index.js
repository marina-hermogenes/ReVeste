import express from "express";
import cookieParser from "cookie-parser"; 
import roupaRoutes from "./routes/roupa.routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { loginController } from "./controllers/auth.controller.js"; 
import { verificarToken } from "./middleware/auth.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", loginController);

app.use("/roupa", verificarToken, roupaRoutes);

app.use(express.static("view"));

app.listen(3000, rodar);

function rodar() {
  console.log("Servidor iniciado na porta 3000");
}
