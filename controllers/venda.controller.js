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

async function deleteVenda(req, res) {
  const codigo = req.params.codigo;
  const dados = await vendaServices.deleteVenda(codigo);
  if (dados) {
    res.status(201).json(dados);
  } else {
    res.status(500).json({ error: "Erro ao cancelar venda." });
  }
}

async function createVenda(req, res) {
  const { codigoUsuario, codigoEndereco, mensagem, products } = req.body;

  try {
    const venda = await vendaServices.createVenda(
      codigoUsuario,
      codigoEndereco,
      mensagem,
      products
    );
    res.status(201).json(venda);
  } catch (error) {
    console.error("Erro ao registrar venda:", error.message);
    res.status(500).json({
      error: "Erro ao criar venda. Verifique os dados e tente novamente.",
    });
  }
}

export default {
  getVenda,
  deleteVenda,
  createVenda,
};
