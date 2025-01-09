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

export default {createRoupa, deleteRoupa, getRoupasCadastradas, getRoupasVendidas}