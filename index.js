import express from "express";
import roupaRoutes from "./routes/roupa.routes.js";
import bodyParser from "body-parser";
import cors from "cors"; // Importando CORS

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("view"));
app.use("/roupa", roupaRoutes);
app.listen(3000, rodar);

function rodar() {
  console.log("Servidor iniciado na porta 3000");
}
