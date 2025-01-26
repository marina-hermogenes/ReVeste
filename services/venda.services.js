import vendaRepository from "../repositories/venda.repository.js";

async function getVenda(codigo) {
    return await vendaRepository.getVenda(codigo);
}

export default {
    getVenda
};