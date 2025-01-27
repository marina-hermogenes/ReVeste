import vendaRepository from "../repositories/venda.repository.js";

async function getVenda(codigo) {
  return await vendaRepository.getVenda(codigo);
}

async function deleteVenda(codigo) {
  return await vendaRepository.deleteVenda(codigo);
}

async function createVenda(codigoUsuario, codigoEndereco, mensagem, roupas) {
  // Validação básica de dados
  if (!codigoUsuario || !codigoEndereco || !roupas || roupas.length === 0) {
    throw new Error("Dados insuficientes para criar uma venda.");
  }

  return await vendaRepository.createVenda(
    codigoUsuario,
    codigoEndereco,
    mensagem,
    roupas
  );
}

export default {
  getVenda,
  deleteVenda,
  createVenda,
};
