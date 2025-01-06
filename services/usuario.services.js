import usuarioRepository from "../repositories/usuario.repository.js";

async function createUsuario (usuario){
    return await usuarioRepository.createUsuario(usuario)
    //aplicar regras de negócio
}

async function getUsuario (codigo){
    return await usuarioRepository.getUsuario(codigo)
}

async function deleteUsuario (codigo){
    return await usuarioRepository.deleteUsuario(codigo)
    //aplicar regras de negocio
}

async function updateUsuario (usuario){
    return await usuarioRepository.updateUsuario(usuario)
    //aplicar regras de negócio
}

export default {createUsuario, getUsuario, deleteUsuario, updateUsuario}