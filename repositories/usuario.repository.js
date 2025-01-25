import bd from "./bd.js";

async function getUsuario(codigo) {
  const conn = await bd.conectar();
  let dados = null;
  try {
    const query = "select * from usuario where codigo=$1";
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
    getUsuario
}