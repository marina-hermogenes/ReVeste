import usuarioRepository from "../repositories/usuario.repository.js";

async function createUsuario (usuario){
    return await usuarioRepository.createUsuario(usuario)
}

export default {createUsuario}