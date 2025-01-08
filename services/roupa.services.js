import roupaRepository from "../repositories/roupa.repository.js";

async function createRoupa(roupa) {
    return await roupaRepository.createRoupa(roupa);
}

async function deleteRoupa (codigo){
    return await roupaRepository.deleteRoupa(codigo);
}

export default {createRoupa, deleteRoupa}