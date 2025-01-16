import roupaRepository from "../repositories/roupa.repository.js";

async function createRoupa(roupa) {
    return await roupaRepository.createRoupa(roupa);
}

async function deleteRoupa (codigo){
    return await roupaRepository.deleteRoupa(codigo);
}

async function getRoupasCadastradas (codigo){
    return await roupaRepository.getRoupasCadastradas(codigo)
}

async function getRoupasVendidas (codigo){
    return await roupaRepository.getRoupasVendidas(codigo)
}

async function getAllRoupas() {
    return await roupaRepository.getAllRoupas();
}

async function getRoupasPeloNome(nome) {
    return await roupaRepository.getRoupasPeloNome(nome);
}

export default {createRoupa, deleteRoupa, getRoupasCadastradas, getRoupasVendidas, getAllRoupas, getRoupasPeloNome}