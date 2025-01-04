import roupaRepository from "../repositories/roupa.repository.js";

async function deleteRoupa (codigo){
    return await roupaRepository.deleteRoupa(codigo);
}

export default {deleteRoupa}