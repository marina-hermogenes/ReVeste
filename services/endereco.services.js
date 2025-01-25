import enderecoRepository from "../repositories/endereco.repository.js";

async function getEnderecos(codigo) {
  return await enderecoRepository.getEnderecos(codigo);
}

export default {
    getEnderecos
}