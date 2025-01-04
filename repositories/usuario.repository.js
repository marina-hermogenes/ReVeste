import bd from './bd.js'

async function createUsuario (usuario){
    const conn = await bd.conectar()
    let dados = null;
    try{
        var query = await conn.query("insert into usuario (email, senha, nome, dataNasc, telefone, chavePix) values ($1, $2, $3, $4, $5, $6) returning *", [usuario.email, usuario.senha, usuario.nome, usuario.dataNasc, usuario.telefone, usuario.chavePix])
        console.log(query.rows)
        dados = query.rows
    } catch (erro){
        console.log(erro)
    } finally {
        conn.release();
    }
    return dados;
}

export default {createUsuario}