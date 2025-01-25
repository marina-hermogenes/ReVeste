import bd from "./bd.js";

async function getEnderecos(codigo) {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "select * from endereco where codigoUsuario=$1";
    const result = await conn.query(query, [codigo]);
    dados = result.rows;
  } catch (erro) {
    console.error(erro);
  } finally {
    conn.release();
  }
  return dados;
} 

export default {
    getEnderecos
}