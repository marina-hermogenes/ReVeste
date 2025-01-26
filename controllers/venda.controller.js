import vendaServices from "../services/venda.services.js";

async function getVenda(req, res) {
    const codigo = req.params.codigo;
    const dados = await vendaServices.getVenda(codigo);
    if (dados) {
      res.status(201).json(dados);
    } else {
      res.status(500).json({ error: "Erro ao consultar venda." });
    }
}

export default {
    getVenda
};

