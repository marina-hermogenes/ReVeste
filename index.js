import express from 'express';
import roupaRoutes from './routes/roupa.routes.js';
import usuarioRoutes from './routes/usuario.routes.js'
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use("/roupa", roupaRoutes);
app.use("/usuario", usuarioRoutes);
app.listen(3000, rodar);

async function rodar(){
    console.log('Servidor iniciado na porta 3000');
}
