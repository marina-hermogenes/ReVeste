import usuarioRepository from "../repositories/usuario.repository.js";

async function createUsuario (usuario){
    return await usuarioRepository.createUsuario(usuario)
}

async function getUsuario (codigo){
    return await usuarioRepository.getUsuario(codigo)
}

export default {createUsuario, getUsuario}