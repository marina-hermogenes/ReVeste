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
    const dados = await roupaServices.deleteRoupa(codigo);
    if(dados) {
        res.status(201).json(dados)
    } else {
        res.status(500).json({error: "Erro ao deletar roupa."})
    }
}

async function getRoupasCadastradas (req, res){
    const codigo = req.params.codigo
    const dados = await roupaServices.getRoupasCadastradas(codigo)
    if(dados) {
        res.status(201).json(dados)
    } else {
        res.status(500).json({error: "Erro ao buscar roupas cadastradas."})
    }
}

async function getRoupasVendidas (req, res){
    const codigo = req.params.codigo
    const dados = await roupaServices.getRoupasVendidas(codigo)
    if(dados) {
        res.json(dados)
    } else {
        res.status(500).json({error: "Erro ao buscar roupas vendidas."})
    }
    
}

async function getAllRoupas(req, res) {
    try {
        const dados = await roupaServices.getAllRoupas();
        res.status(200).json(dados);
    } catch (error) {
        console.error("Erro ao consultar todas as roupas:", error);
        res.status(500).json({ error: "Erro ao consultar todas as roupas." });
    }
}

async function getRoupasPeloNome(req, res) {
    const { nome } = req.query;
    if (!nome) {
        return res.status(400).json({ error: "O campo 'nome' é obrigatório para busca." });
    }

    try {
        const dados = await roupaServices.getRoupasPeloNome(nome);
        res.status(200).json(dados);
    } catch (error) {
        console.error("Erro ao buscar roupas pelo nome:", error);
        res.status(500).json({ error: "Erro ao buscar roupas pelo nome." });
    }
}

async function getRoupasPeloTipo(req, res) {
    const { tipo } = req.query;
    if (!tipo) {
        return res.status(400).json({ error: "O campo 'tipo' é obrigatório para busca." });
    }

    try {
        const dados = await roupaServices.getRoupasPeloTipo(tipo);
        res.status(200).json(dados);
    } catch (error) {
        console.error("Erro ao buscar roupas pelo tipo:", error);
        res.status(500).json({ error: "Erro ao buscar roupas pelo tipo." });
    }
}



export default {createRoupa, deleteRoupa, getRoupasCadastradas, getRoupasVendidas, getAllRoupas, getRoupasPeloNome, getRoupasPeloTipo}