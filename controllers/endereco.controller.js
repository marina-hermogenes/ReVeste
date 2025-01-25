import enderecoServices from "../services/endereco.services.js";

async function getEnderecos(req, res) {
  const codigo = req.params.codigo;
  const dados = await enderecoServices.getEnderecos(codigo);
  if (dados) {
    res.status(201).json(dados);
  } else {
    res.status(500).json({ error: "Erro ao consultar endereços." });
  }
}

export default {
    getEnderecos
}