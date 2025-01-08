import roupaServices from "../services/roupa.services.js";

async function createRoupa(req, res) {
    const { nome, descricao, tamanho, tipo, preco, foto, codigoUsuario } = req.body;

    if (!nome || !tamanho || !tipo || !preco || !codigoUsuario) {
        return res.status(400).json({ error: "Campos obrigatórios: nome, tamanho, tipo, preco e codigoUsuario." }); //lembrar de mudar depois que nós decidirmos a autenticaçao
    }

    try {
        const dados = await roupaServices.createRoupa({ nome, descricao, tamanho, tipo, preco, foto, codigoUsuario });
        res.status(201).json(dados);
    } catch (error) {
        console.error("Erro ao cadastrar roupa:", error);
        res.status(500).json({ error: "Erro ao cadastrar roupa." });
    }
}


async function deleteRoupa (req, res){
    const codigo = req.params.codigo;
    console.log("Código: " + codigo);
    const dados = await roupaServices.deleteRoupa(codigo);
    res.send(dados);
}

export default {createRoupa, deleteRoupa}