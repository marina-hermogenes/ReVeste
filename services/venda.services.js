import vendaRepository from "../repositories/venda.repository.js";

async function getVenda(codigo) {
    return await vendaRepository.getVenda(codigo);
}

async function deleteVenda(codigo) {
    return await vendaRepository.deleteVenda(codigo);
  }

export default {
    getVenda, deleteVenda
};