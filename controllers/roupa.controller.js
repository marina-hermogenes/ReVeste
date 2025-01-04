import roupaServices from "../services/roupa.services.js";

async function deleteRoupa (req, res){
    const codigo = req.params.codigo;
    console.log("Código: " + codigo);
    const dados = await roupaServices.deleteRoupa(codigo);
    res.send(dados);
}

export default {deleteRoupa}