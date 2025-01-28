import roupaServices from "../services/roupa.services.js";

async function createRoupa(req, res) {
  const { nome, descricao, tamanho, tipo, preco, codigoUsuario, disponivel } = req.body;
  const foto = req.file ? req.file.buffer : null;  //verificando se a foto foi enviada e pegando o buffer

  if (!nome || !tamanho || !tipo || !preco || !codigoUsuario) {
    return res.status(400).json({
      error: "Campos obrigatórios: nome, tamanho, tipo, preco e codigoUsuario.",
    });
  }

  try {
    const precoConvertido = parseFloat(preco);
    if (isNaN(precoConvertido) || precoConvertido <= 0) {
      return res.status(400).json({ error: "Preço inválido." });
    }

    const disponivelConvertido = disponivel === 'true' ? true : false;

    const dados = await roupaServices.createRoupa({
      nome,
      descricao,
      tamanho,
      tipo,
      preco: precoConvertido,
      foto,  //envia o buffer da foto
      codigoUsuario,
      disponivel: disponivelConvertido,
    });
    res.status(201).json(dados);
  } catch (error) {
    console.error("Erro ao cadastrar roupa:", error);
    res.status(500).json({ error: "Erro ao cadastrar roupa." });
  }
}

async function deleteRoupa(req, res) {
  const codigo = req.params.codigo;
  const dados = await roupaServices.deleteRoupa(codigo);
  if (dados) {
    res.status(201).json(dados);
  } else {
    res.status(500).json({ error: "Erro ao deletar roupa." });
  }
}

async function getRoupasCadastradas(req, res) {
  const codigo = req.params.codigo;
  const dados = await roupaServices.getRoupasCadastradas(codigo);
  if (dados) {
    res.status(201).json(dados);
  } else {
    res.status(500).json({ error: "Erro ao buscar roupas cadastradas." });
  }
}

async function getRoupasVendidas(req, res) {
  const codigo = req.params.codigo;
  const dados = await roupaServices.getRoupasVendidas(codigo);
  if (dados) {
    res.json(dados);
  } else {
    res.status(500).json({ error: "Erro ao buscar roupas vendidas." });
  }
}

async function getAllRoupas(req, res) {
  try {
    const roupas = await roupaServices.getAllRoupas();
    res.status(200).json(roupas);
  } catch (error) {
    console.error("Erro ao buscar todas as roupas:", error);
    res.status(500).json({ error: "Erro ao buscar todas as roupas." });
  }
}

async function getCalcas(req, res) { //funcao pra pegar as calças
  try {
    const roupas = await roupaServices.getCalcas();
    res.status(200).json(roupas);
  } catch (error) {
    console.error("Erro ao buscar as roupas:", error);
    res.status(500).json({ error: "Erro ao buscar as calças." });
  }
}

async function getCamisas(req, res) { //funcao pra pegar as camisas
  try {
    const roupas = await roupaServices.getCamisas();
    res.status(200).json(roupas);
  } catch (error) {
    console.error("Erro ao buscar as roupas:", error);
    res.status(500).json({ error: "Erro ao buscar as camisas." });
  }
}

async function getCalcados(req, res) { //funcao pra pegar os calçados
  try {
    const roupas = await roupaServices.getCalcados();
    res.status(200).json(roupas);
  } catch (error) {
    console.error("Erro ao buscar as roupas:", error);
    res.status(500).json({ error: "Erro ao buscar os calçados." });
  }
}

async function getBermudas(req, res) { //funcao pra pegar as bermudas
  try {
    const roupas = await roupaServices.getBermudas();
    res.status(200).json(roupas);
  } catch (error) {
    console.error("Erro ao buscar as roupas:", error);
    res.status(500).json({ error: "Erro ao buscar os bermudas." });
  }
}

async function getVestidos(req, res) { //funcao pra pegar os vestidos
  try {
    const roupas = await roupaServices.getVestidos();
    res.status(200).json(roupas);
  } catch (error) {
    console.error("Erro ao buscar as roupas:", error);
    res.status(500).json({ error: "Erro ao buscar os vestidos." });
  }
}

async function getShorts(req, res) { //funcao pra pegar os shorts
  try {
    const roupas = await roupaServices.getShorts();
    res.status(200).json(roupas);
  } catch (error) {
    console.error("Erro ao buscar as roupas:", error);
    res.status(500).json({ error: "Erro ao buscar os shorts." });
  }
}

async function getAgasalhos(req, res) { //funcao pra pegar as agasalhos
  try {
    const roupas = await roupaServices.getAgasalhos();
    res.status(200).json(roupas);
  } catch (error) {
    console.error("Erro ao buscar as roupas:", error);
    res.status(500).json({ error: "Erro ao buscar os agasalhos." });
  }
}

async function updateRoupa(req, res) {
  const codigo = req.params.codigo;
  const { nome, descricao, tamanho, tipo, preco } =
    req.body;
  const foto = req.file ? req.file.buffer : null;  //verificando se a foto foi enviada e pegando o buffer

  if (!codigo) {
    return res
      .status(400)
      .json({ error: "O código da roupa é obrigatório para a edição." });
  }

  try {
    const dados = await roupaServices.updateRoupa({
      codigo,
      nome,
      descricao,
      tamanho,
      tipo,
      preco,
      foto,
    });
    if (dados) {
      res.status(200).json(dados);
    } else {
      res.status(404).json({ error: "Roupa não encontrada para edição." });
    }
  } catch (error) {
    console.error("Erro ao atualizar roupa:", error);
    res.status(500).json({ error: "Erro ao atualizar roupa." });
  }
}

//Funções auxiliares
async function getRoupaPeloCod(req, res) {
  const codigo = req.params.codigo;
  const dados = await roupaServices.getRoupaPeloCod(codigo);
  if (dados) {
    res.status(201).json(dados);
  } else {
    res.status(500).json({ error: "Erro ao buscar roupa." });
  }
}

export default {
  createRoupa,
  deleteRoupa,
  getRoupasCadastradas,
  getRoupasVendidas,
  getAllRoupas,
  updateRoupa,
  getRoupaPeloCod,
  getCalcas, //
  getCamisas, //
  getCalcados, //
  getBermudas, //
  getVestidos, //
  getShorts, //
  getAgasalhos //
};
