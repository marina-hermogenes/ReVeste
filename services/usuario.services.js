import usuarioRepository from "../repositories/usuario.repository.js";

async function getUsuario(codigo) {
  return await usuarioRepository.getUsuario(codigo);
}

export default {
    getUsuario
}