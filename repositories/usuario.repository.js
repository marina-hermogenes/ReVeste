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

async function getUsuario(codigo){
    const conn = await bd.conectar()
    let dados = null;
    try{
        var query = await conn.query("select * from usuario where codigo=$1", [codigo])
        console.log(query.rows)
        dados = query.rows
    } catch (erro){
        console.log(erro)
    } finally {
        conn.release();
    }
    return dados;
}

async function deleteUsuario(codigo){
    const conn = await bd.conectar()
    let dados = null;
    try{
        var query = await conn.query("delete from usuario where codigo=$1 returning *", [codigo])
        console.log(query.rows)
        dados = query.rows
    } catch (erro){
        console.log(erro)
    } finally {
        conn.release();
    }
    return dados;
}

export default {createUsuario, getUsuario, deleteUsuario}